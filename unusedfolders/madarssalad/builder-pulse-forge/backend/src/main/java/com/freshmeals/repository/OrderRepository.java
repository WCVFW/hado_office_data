package com.freshmeals.repository;

import com.freshmeals.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, String> {

    // Find orders by user
    List<Order> findByUserIdOrderByCreatedAtDesc(String userId);

    // Find orders by status
    List<Order> findByStatusOrderByCreatedAtDesc(Order.OrderStatus status);

    // Find orders by status with pagination
    Page<Order> findByStatusOrderByCreatedAtDesc(Order.OrderStatus status, Pageable pageable);

    // Find orders within date range
    @Query("SELECT o FROM Order o WHERE o.createdAt BETWEEN :startDate AND :endDate ORDER BY o.createdAt DESC")
    List<Order> findOrdersByDateRange(@Param("startDate") LocalDateTime startDate, 
                                     @Param("endDate") LocalDateTime endDate);

    // Find orders with pagination
    Page<Order> findAllByOrderByCreatedAtDesc(Pageable pageable);

    // Find user orders with pagination
    Page<Order> findByUserIdOrderByCreatedAtDesc(String userId, Pageable pageable);

    // Count orders by status
    long countByStatus(Order.OrderStatus status);

    // Calculate total revenue
    @Query("SELECT SUM(o.totalAmount) FROM Order o WHERE o.status = 'DELIVERED'")
    java.math.BigDecimal calculateTotalRevenue();

    // Calculate revenue for date range
    @Query("SELECT SUM(o.totalAmount) FROM Order o WHERE o.status = 'DELIVERED' AND o.createdAt BETWEEN :startDate AND :endDate")
    java.math.BigDecimal calculateRevenueByDateRange(@Param("startDate") LocalDateTime startDate, 
                                                    @Param("endDate") LocalDateTime endDate);

    // Get top customers by order count
    @Query("SELECT o.user.id, o.user.fullName, COUNT(o) as orderCount FROM Order o GROUP BY o.user.id, o.user.fullName ORDER BY orderCount DESC")
    List<Object[]> findTopCustomersByOrderCount();

    // Find recent orders (last 30 days)
    @Query("SELECT o FROM Order o WHERE o.createdAt >= :thirtyDaysAgo ORDER BY o.createdAt DESC")
    List<Order> findRecentOrders(@Param("thirtyDaysAgo") LocalDateTime thirtyDaysAgo);
}
