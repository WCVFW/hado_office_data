package com.freshmeals.repository;

import com.freshmeals.entity.UserSubscription;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface UserSubscriptionRepository extends JpaRepository<UserSubscription, String> {

    // Find active subscription for user
    @Query("SELECT us FROM UserSubscription us WHERE us.user.id = :userId AND us.status = 'ACTIVE'")
    UserSubscription findActiveSubscriptionByUserId(@Param("userId") String userId);

    // Find subscriptions by user
    List<UserSubscription> findByUserIdOrderByCreatedAtDesc(String userId);

    // Find subscriptions by status
    List<UserSubscription> findByStatusOrderByCreatedAtDesc(UserSubscription.SubscriptionStatus status);

    // Find subscriptions by status with pagination
    Page<UserSubscription> findByStatusOrderByCreatedAtDesc(UserSubscription.SubscriptionStatus status, Pageable pageable);

    // Find subscriptions with pagination
    Page<UserSubscription> findAllByOrderByCreatedAtDesc(Pageable pageable);

    // Count subscriptions by status
    long countByStatus(UserSubscription.SubscriptionStatus status);

    // Find subscriptions ending soon (within 7 days)
    @Query("SELECT us FROM UserSubscription us WHERE us.endDate BETWEEN :now AND :sevenDaysLater AND us.status = 'ACTIVE'")
    List<UserSubscription> findSubscriptionsEndingSoon(@Param("now") LocalDateTime now, 
                                                      @Param("sevenDaysLater") LocalDateTime sevenDaysLater);

    // Calculate total subscription revenue
    @Query("SELECT SUM(sp.price) FROM UserSubscription us JOIN us.subscriptionPlan sp WHERE us.status = 'ACTIVE'")
    java.math.BigDecimal calculateActiveSubscriptionRevenue();

    // Find subscriptions by plan
    List<UserSubscription> findBySubscriptionPlanIdOrderByCreatedAtDesc(String planId);

    // Get subscription statistics
    @Query("SELECT us.status, COUNT(us) FROM UserSubscription us GROUP BY us.status")
    List<Object[]> getSubscriptionStatistics();
}
