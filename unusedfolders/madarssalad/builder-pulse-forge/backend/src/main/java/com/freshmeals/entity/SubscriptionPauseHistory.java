package com.freshmeals.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "subscription_pause_history")
public class SubscriptionPauseHistory {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subscription_id", nullable = false)
    @JsonBackReference
    private UserSubscription subscription;
    
    @NotNull(message = "Pause start date is required")
    @Column(name = "pause_start_date", nullable = false)
    private LocalDate pauseStartDate;
    
    @Column(name = "pause_end_date")
    private LocalDate pauseEndDate;
    
    @Column(name = "reason", columnDefinition = "TEXT")
    private String reason;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PauseStatus status = PauseStatus.ACTIVE;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    // Constructors
    public SubscriptionPauseHistory() {}
    
    public SubscriptionPauseHistory(UserSubscription subscription, LocalDate pauseStartDate, String reason) {
        this.subscription = subscription;
        this.pauseStartDate = pauseStartDate;
        this.reason = reason;
    }
    
    // Getters and Setters
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public UserSubscription getSubscription() {
        return subscription;
    }
    
    public void setSubscription(UserSubscription subscription) {
        this.subscription = subscription;
    }
    
    public LocalDate getPauseStartDate() {
        return pauseStartDate;
    }
    
    public void setPauseStartDate(LocalDate pauseStartDate) {
        this.pauseStartDate = pauseStartDate;
    }
    
    public LocalDate getPauseEndDate() {
        return pauseEndDate;
    }
    
    public void setPauseEndDate(LocalDate pauseEndDate) {
        this.pauseEndDate = pauseEndDate;
    }
    
    public String getReason() {
        return reason;
    }
    
    public void setReason(String reason) {
        this.reason = reason;
    }
    
    public PauseStatus getStatus() {
        return status;
    }
    
    public void setStatus(PauseStatus status) {
        this.status = status;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    public enum PauseStatus {
        ACTIVE, COMPLETED
    }
}
