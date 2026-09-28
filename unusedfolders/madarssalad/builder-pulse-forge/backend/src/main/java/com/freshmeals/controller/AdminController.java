package com.freshmeals.controller;

import com.freshmeals.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/dashboard")
    public ResponseEntity<Map<String, Object>> getDashboardStats() {
        Map<String, Object> stats = adminService.getDashboardStatistics();
        return ResponseEntity.ok(stats);
    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(adminService.getAllUsers(page, size, search));
    }

    @GetMapping("/orders")
    public ResponseEntity<?> getAllOrders(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(required = false) String status) {
        return ResponseEntity.ok(adminService.getAllOrders(page, size, status));
    }

    @GetMapping("/subscriptions")
    public ResponseEntity<?> getAllSubscriptions(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(required = false) String status) {
        return ResponseEntity.ok(adminService.getAllSubscriptions(page, size, status));
    }

    @GetMapping("/analytics/revenue")
    public ResponseEntity<?> getRevenueAnalytics(
            @RequestParam(required = false) LocalDateTime startDate,
            @RequestParam(required = false) LocalDateTime endDate) {
        return ResponseEntity.ok(adminService.getRevenueAnalytics(startDate, endDate));
    }

    @GetMapping("/analytics/orders")
    public ResponseEntity<?> getOrderAnalytics() {
        return ResponseEntity.ok(adminService.getOrderAnalytics());
    }

    @GetMapping("/analytics/users")
    public ResponseEntity<?> getUserAnalytics() {
        return ResponseEntity.ok(adminService.getUserAnalytics());
    }

    @GetMapping("/analytics/subscriptions")
    public ResponseEntity<?> getSubscriptionAnalytics() {
        return ResponseEntity.ok(adminService.getSubscriptionAnalytics());
    }

    @PatchMapping("/users/{userId}/toggle-status")
    public ResponseEntity<?> toggleUserStatus(@PathVariable String userId) {
        try {
            return ResponseEntity.ok(adminService.toggleUserStatus(userId));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/orders/{orderId}/status")
    public ResponseEntity<?> updateOrderStatus(
            @PathVariable String orderId,
            @RequestParam String status) {
        try {
            return ResponseEntity.ok(adminService.updateOrderStatus(orderId, status));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @DeleteMapping("/users/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable String userId) {
        try {
            adminService.deleteUser(userId);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
}
