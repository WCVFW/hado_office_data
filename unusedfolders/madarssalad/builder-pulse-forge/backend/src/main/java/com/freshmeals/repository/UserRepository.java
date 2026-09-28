package com.freshmeals.repository;

import com.freshmeals.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    
    Optional<User> findByEmail(String email);
    
    boolean existsByEmail(String email);
    
    List<User> findByRole(User.Role role);
    
    List<User> findByIsActive(Boolean isActive);
    
    @Query("SELECT u FROM User u WHERE u.fullName LIKE %:searchTerm% OR u.email LIKE %:searchTerm%")
    Page<User> findBySearchTerm(@Param("searchTerm") String searchTerm, Pageable pageable);
    
    @Query("SELECT u FROM User u JOIN u.subscriptions s WHERE s.status = :status")
    List<User> findBySubscriptionStatus(@Param("status") String status);
    
    @Query("SELECT COUNT(u) FROM User u WHERE u.createdAt >= :startDate")
    Long countNewUsersAfterDate(@Param("startDate") LocalDateTime startDate);
    
    @Query("SELECT u FROM User u WHERE u.lastLogin >= :lastLoginDate")
    List<User> findActiveUsersSince(@Param("lastLoginDate") LocalDateTime lastLoginDate);
    
    @Query("SELECT u FROM User u LEFT JOIN FETCH u.subscriptions LEFT JOIN FETCH u.orders WHERE u.id = :userId")
    Optional<User> findByIdWithDetails(@Param("userId") String userId);
    
    @Query("SELECT u FROM User u WHERE u.createdAt BETWEEN :startDate AND :endDate")
    List<User> findUsersCreatedBetween(@Param("startDate") LocalDateTime startDate,
                                     @Param("endDate") LocalDateTime endDate);

    // Admin specific methods
    Page<User> findByFullNameContainingIgnoreCaseOrEmailContainingIgnoreCase(
        String fullName, String email, Pageable pageable);

    long countByIsActiveTrue();
}
