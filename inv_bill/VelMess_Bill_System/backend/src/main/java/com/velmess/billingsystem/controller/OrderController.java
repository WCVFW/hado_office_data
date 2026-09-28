package com.velmess.billingsystem.controller;

import com.velmess.billingsystem.dto.ReportResponse;
import com.velmess.billingsystem.model.Order;
import com.velmess.billingsystem.model.OrderItem;
import com.velmess.billingsystem.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping
    public ResponseEntity<Map<String, Object>> createOrder(@RequestBody Order order) {
        Map<String, Object> response = new HashMap<>();
        try {
            if (order.getItems() != null) {
                order.getItems().forEach(item -> item.setOrder(order));
            }
            Order saved = orderRepository.save(order);
            response.put("success", true);
            response.put("orderId", saved.getId());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace(); // Log detailed error in server console
            response.put("success", false);
            response.put("message", "Internal Error: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    @GetMapping("/dashboard")
    public Map<String, Object> getDashboardData() {
        LocalDateTime startOfDay = LocalDateTime.now().with(LocalTime.MIN);
        LocalDateTime endOfDay = LocalDateTime.now().with(LocalTime.MAX);
        
        List<Order> todayOrders = orderRepository.findByOrderDateBetween(startOfDay, endOfDay);
        double todaySales = todayOrders.stream()
                .mapToDouble(o -> o.getFinalAmount() != null ? o.getFinalAmount() : (o.getTotalAmount() != null ? o.getTotalAmount() : 0.0))
                .sum();
        
        Map<String, Integer> itemFrequency = new HashMap<>();
        for (Order o : todayOrders) {
            if (o.getItems() == null) continue;
            for (OrderItem item : o.getItems()) {
                if (item == null || item.getName() == null) continue;
                int qty = item.getQuantity() != null ? item.getQuantity() : 0;
                itemFrequency.put(item.getName(), itemFrequency.getOrDefault(item.getName(), 0) + qty);
            }
        }
        
        List<Map<String, Object>> topItems = itemFrequency.entrySet().stream()
                .sorted((a, b) -> b.getValue().compareTo(a.getValue()))
                .limit(5)
                .map(e -> {
                    Map<String, Object> m = new HashMap<>();
                    m.put("item_name", e.getKey());
                    m.put("sold", e.getValue());
                    return m;
                })
                .collect(Collectors.toList());

        Map<String, Double> paymentStats = new HashMap<>();
        for (Order o : todayOrders) {
            String mode = o.getPaymentMode() != null ? o.getPaymentMode() : "Unknown";
            double amt = o.getFinalAmount() != null ? o.getFinalAmount() : (o.getTotalAmount() != null ? o.getTotalAmount() : 0.0);
            paymentStats.put(mode, paymentStats.getOrDefault(mode, 0.0) + amt);
        }

        // 7-Day Trend (Simple)
        List<Map<String, Object>> trend = new java.util.ArrayList<>();
        for (int i = 6; i >= 0; i--) {
            LocalDateTime dayStart = LocalDateTime.now().minusDays(i).with(LocalTime.MIN);
            LocalDateTime dayEnd = LocalDateTime.now().minusDays(i).with(LocalTime.MAX);
            double daySales = orderRepository.findByOrderDateBetween(dayStart, dayEnd).stream()
                    .mapToDouble(o -> o.getFinalAmount() != null ? o.getFinalAmount() : (o.getTotalAmount() != null ? o.getTotalAmount() : 0.0))
                    .sum();
            Map<String, Object> dayMap = new HashMap<>();
            dayMap.put("day", dayStart.getDayOfWeek().toString().substring(0, 3));
            dayMap.put("sales", daySales);
            trend.add(dayMap);
        }

        Map<String, Object> stats = new HashMap<>();
        stats.put("todaySales", todaySales);
        stats.put("todayOrders", (long) todayOrders.size());
        stats.put("avgBill", todayOrders.isEmpty() ? 0 : todaySales / todayOrders.size());
        stats.put("topItems", topItems);
        stats.put("paymentStats", paymentStats);
        stats.put("trend", trend);
        return stats;
    }

    @GetMapping({"/report", "/reports"})
    public ReportResponse getReports(
            @RequestParam String startDate,
            @RequestParam String endDate) {
        
        try {
            LocalDateTime start = java.time.LocalDate.parse(startDate).atStartOfDay();
            LocalDateTime end = java.time.LocalDate.parse(endDate).atTime(LocalTime.MAX);
            
            List<Order> orders = orderRepository.findByOrderDateBetween(start, end);
            double totalCollection = orders.stream()
                .mapToDouble(o -> o.getFinalAmount() != null ? o.getFinalAmount() : (o.getTotalAmount() != null ? o.getTotalAmount() : 0.0))
                .sum();
            
            Map<String, Double> byPaymentMode = new HashMap<>();
            for (Order o : orders) {
                String mode = o.getPaymentMode() != null ? o.getPaymentMode() : "Unknown";
                double amt = o.getFinalAmount() != null ? o.getFinalAmount() : (o.getTotalAmount() != null ? o.getTotalAmount() : 0.0);
                byPaymentMode.put(mode, byPaymentMode.getOrDefault(mode, 0.0) + amt);
            }
            
            return new ReportResponse(orders, totalCollection, byPaymentMode);
        } catch (Exception e) {
            e.printStackTrace();
            return new ReportResponse(new java.util.ArrayList<>(), 0.0, new HashMap<>());
        }
    }

    @GetMapping("/pending-prints")
    public List<Order> getPendingPrints() {
        return orderRepository.findByIsPrintedFalse();
    }

    @PatchMapping("/{id}/printed")
    public ResponseEntity<?> markAsPrinted(@PathVariable Long id) {
        return orderRepository.findById(id).map(order -> {
            order.setIsPrinted(true);
            orderRepository.save(order);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }

    @PatchMapping("/{id}/reprint")
    public ResponseEntity<?> requestReprint(@PathVariable Long id) {
        return orderRepository.findById(id).map(order -> {
            order.setIsPrinted(false);
            orderRepository.save(order);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
