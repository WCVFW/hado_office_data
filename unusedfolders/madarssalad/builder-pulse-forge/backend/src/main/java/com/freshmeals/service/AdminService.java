package com.freshmeals.service;

import com.freshmeals.entity.Order;
import com.freshmeals.entity.User;
import com.freshmeals.entity.UserSubscription;
import com.freshmeals.repository.OrderRepository;
import com.freshmeals.repository.ProductRepository;
import com.freshmeals.repository.UserRepository;
import com.freshmeals.repository.UserSubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserSubscriptionRepository subscriptionRepository;

    @Autowired
    private ProductRepository productRepository;

    public Map<String, Object> getDashboardStatistics() {
        Map<String, Object> stats = new HashMap<>();
        
        // Basic counts
        stats.put("totalUsers", userRepository.count());
        stats.put("totalOrders", orderRepository.count());
        stats.put("activeSubscriptions", subscriptionRepository.countByStatus(UserSubscription.SubscriptionStatus.ACTIVE));
        stats.put("totalProducts", productRepository.countByIsEnabledTrue());
        
        // Revenue calculations
        BigDecimal totalRevenue = orderRepository.calculateTotalRevenue();
        stats.put("totalRevenue", totalRevenue != null ? totalRevenue : BigDecimal.ZERO);
        
        BigDecimal subscriptionRevenue = subscriptionRepository.calculateActiveSubscriptionRevenue();
        stats.put("subscriptionRevenue", subscriptionRevenue != null ? subscriptionRevenue : BigDecimal.ZERO);
        
        // Order status counts
        Map<String, Long> orderStatusCounts = new HashMap<>();
        for (Order.OrderStatus status : Order.OrderStatus.values()) {
            orderStatusCounts.put(status.name(), orderRepository.countByStatus(status));
        }
        stats.put("orderStatusCounts", orderStatusCounts);
        
        // Subscription status counts
        Map<String, Long> subscriptionStatusCounts = new HashMap<>();
        for (UserSubscription.SubscriptionStatus status : UserSubscription.SubscriptionStatus.values()) {
            subscriptionStatusCounts.put(status.name(), subscriptionRepository.countByStatus(status));
        }
        stats.put("subscriptionStatusCounts", subscriptionStatusCounts);
        
        // Growth metrics (last 30 days)
        LocalDateTime thirtyDaysAgo = LocalDateTime.now().minus(30, ChronoUnit.DAYS);
        List<Order> recentOrders = orderRepository.findRecentOrders(thirtyDaysAgo);
        stats.put("recentOrdersCount", recentOrders.size());
        
        BigDecimal recentRevenue = orderRepository.calculateRevenueByDateRange(thirtyDaysAgo, LocalDateTime.now());
        stats.put("recentRevenue", recentRevenue != null ? recentRevenue : BigDecimal.ZERO);
        
        return stats;
    }

    public Page<?> getAllUsers(int page, int size, String search) {
        Pageable pageable = PageRequest.of(page, size);
        
        if (search != null && !search.trim().isEmpty()) {
            return userRepository.findByFullNameContainingIgnoreCaseOrEmailContainingIgnoreCase(
                search.trim(), search.trim(), pageable);
        }
        
        return userRepository.findAll(pageable);
    }

    public Page<Order> getAllOrders(int page, int size, String status) {
        Pageable pageable = PageRequest.of(page, size);
        
        if (status != null && !status.equals("all")) {
            try {
                Order.OrderStatus orderStatus = Order.OrderStatus.valueOf(status.toUpperCase());
                return orderRepository.findByStatusOrderByCreatedAtDesc(orderStatus, pageable);
            } catch (IllegalArgumentException e) {
                // Invalid status, return all orders
            }
        }
        
        return orderRepository.findAllByOrderByCreatedAtDesc(pageable);
    }

    public Page<UserSubscription> getAllSubscriptions(int page, int size, String status) {
        Pageable pageable = PageRequest.of(page, size);
        
        if (status != null && !status.equals("all")) {
            try {
                UserSubscription.SubscriptionStatus subscriptionStatus =
                    UserSubscription.SubscriptionStatus.valueOf(status.toUpperCase());
                return subscriptionRepository.findByStatusOrderByCreatedAtDesc(subscriptionStatus, pageable);
            } catch (IllegalArgumentException e) {
                // Invalid status, return all subscriptions
            }
        }
        
        return subscriptionRepository.findAllByOrderByCreatedAtDesc(pageable);
    }

    public Map<String, Object> getRevenueAnalytics(LocalDateTime startDate, LocalDateTime endDate) {
        Map<String, Object> analytics = new HashMap<>();
        
        if (startDate == null) {
            startDate = LocalDateTime.now().minus(30, ChronoUnit.DAYS);
        }
        if (endDate == null) {
            endDate = LocalDateTime.now();
        }
        
        BigDecimal periodRevenue = orderRepository.calculateRevenueByDateRange(startDate, endDate);
        analytics.put("periodRevenue", periodRevenue != null ? periodRevenue : BigDecimal.ZERO);
        analytics.put("startDate", startDate);
        analytics.put("endDate", endDate);
        
        // Total revenue
        BigDecimal totalRevenue = orderRepository.calculateTotalRevenue();
        analytics.put("totalRevenue", totalRevenue != null ? totalRevenue : BigDecimal.ZERO);
        
        return analytics;
    }

    public Map<String, Object> getOrderAnalytics() {
        Map<String, Object> analytics = new HashMap<>();
        
        // Order status distribution
        Map<String, Long> statusDistribution = new HashMap<>();
        for (Order.OrderStatus status : Order.OrderStatus.values()) {
            statusDistribution.put(status.name(), orderRepository.countByStatus(status));
        }
        analytics.put("statusDistribution", statusDistribution);
        
        // Recent orders (last 7 days)
        LocalDateTime sevenDaysAgo = LocalDateTime.now().minus(7, ChronoUnit.DAYS);
        List<Order> recentOrders = orderRepository.findRecentOrders(sevenDaysAgo);
        analytics.put("recentOrdersCount", recentOrders.size());
        
        return analytics;
    }

    public Map<String, Object> getUserAnalytics() {
        Map<String, Object> analytics = new HashMap<>();
        
        analytics.put("totalUsers", userRepository.count());
        analytics.put("activeUsers", userRepository.countByIsActiveTrue());
        
        // Top customers by order count
        List<Object[]> topCustomers = orderRepository.findTopCustomersByOrderCount();
        analytics.put("topCustomers", topCustomers);
        
        return analytics;
    }

    public Map<String, Object> getSubscriptionAnalytics() {
        Map<String, Object> analytics = new HashMap<>();
        
        // Subscription status distribution
        List<Object[]> statusStats = subscriptionRepository.getSubscriptionStatistics();
        Map<String, Long> statusDistribution = new HashMap<>();
        for (Object[] stat : statusStats) {
            statusDistribution.put(stat[0].toString(), (Long) stat[1]);
        }
        analytics.put("statusDistribution", statusDistribution);
        
        // Revenue from active subscriptions
        BigDecimal activeRevenue = subscriptionRepository.calculateActiveSubscriptionRevenue();
        analytics.put("activeSubscriptionRevenue", activeRevenue != null ? activeRevenue : BigDecimal.ZERO);
        
        return analytics;
    }

    public User toggleUserStatus(String userId) {
        return userRepository.findById(userId)
                .map(user -> {
                    user.setIsActive(!user.getIsActive());
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
    }

    public Order updateOrderStatus(String orderId, String status) {
        try {
            Order.OrderStatus orderStatus = Order.OrderStatus.valueOf(status.toUpperCase());
            return orderRepository.findById(orderId)
                    .map(order -> {
                        order.setStatus(orderStatus);
                        return orderRepository.save(order);
                    })
                    .orElseThrow(() -> new RuntimeException("Order not found with id: " + orderId));
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Invalid order status: " + status);
        }
    }

    public void deleteUser(String userId) {
        if (!userRepository.existsById(userId)) {
            throw new RuntimeException("User not found with id: " + userId);
        }
        
        // Check if user has orders or active subscriptions
        User user = userRepository.findById(userId).get();
        if (!user.getOrders().isEmpty() || 
            user.getSubscriptions().stream().anyMatch(s -> s.getStatus() == UserSubscription.SubscriptionStatus.ACTIVE)) {
            throw new RuntimeException("Cannot delete user with existing orders or active subscriptions");
        }
        
        userRepository.deleteById(userId);
    }
}
