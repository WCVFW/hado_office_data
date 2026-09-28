package com.freshmeals.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "user_subscriptions")
public class UserSubscription {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "plan_id", nullable = false)
    @JsonBackReference
    private SubscriptionPlan subscriptionPlan;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SubscriptionStatus status = SubscriptionStatus.ACTIVE;
    
    @NotNull(message = "Start date is required")
    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;
    
    @Column(name = "end_date")
    private LocalDate endDate;
    
    @Column(name = "next_delivery_date")
    private LocalDate nextDeliveryDate;
    
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "subscription_delivery_days", joinColumns = @JoinColumn(name = "subscription_id"))
    @Column(name = "delivery_day")
    @Enumerated(EnumType.STRING)
    private List<DeliveryDay> deliveryDays;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "meal_preference", nullable = false)
    private MealPreference mealPreference = MealPreference.MIXED;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "delivery_address_id")
    private DeliveryAddress deliveryAddress;
    
    @Column(name = "special_instructions", columnDefinition = "TEXT")
    private String specialInstructions;
    
    @Column(name = "pause_count")
    private Integer pauseCount = 0;
    
    @Column(name = "auto_renewal")
    private Boolean autoRenewal = true;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Relationships
    @OneToMany(mappedBy = "subscription", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Order> orders;
    
    @OneToMany(mappedBy = "subscription", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<MealDelivery> mealDeliveries;
    
    @OneToMany(mappedBy = "subscription", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<SubscriptionPauseHistory> pauseHistory;
    
    // Constructors
    public UserSubscription() {}
    
    public UserSubscription(User user, SubscriptionPlan subscriptionPlan, LocalDate startDate,
                           List<DeliveryDay> deliveryDays, MealPreference mealPreference) {
        this.user = user;
        this.subscriptionPlan = subscriptionPlan;
        this.startDate = startDate;
        this.deliveryDays = deliveryDays;
        this.mealPreference = mealPreference;
    }
    
    // Getters and Setters
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public User getUser() {
        return user;
    }
    
    public void setUser(User user) {
        this.user = user;
    }
    
    public SubscriptionPlan getSubscriptionPlan() {
        return subscriptionPlan;
    }

    public void setSubscriptionPlan(SubscriptionPlan subscriptionPlan) {
        this.subscriptionPlan = subscriptionPlan;
    }
    
    public SubscriptionStatus getStatus() {
        return status;
    }
    
    public void setStatus(SubscriptionStatus status) {
        this.status = status;
    }
    
    public LocalDate getStartDate() {
        return startDate;
    }
    
    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }
    
    public LocalDate getEndDate() {
        return endDate;
    }
    
    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }
    
    public LocalDate getNextDeliveryDate() {
        return nextDeliveryDate;
    }
    
    public void setNextDeliveryDate(LocalDate nextDeliveryDate) {
        this.nextDeliveryDate = nextDeliveryDate;
    }
    
    public List<DeliveryDay> getDeliveryDays() {
        return deliveryDays;
    }
    
    public void setDeliveryDays(List<DeliveryDay> deliveryDays) {
        this.deliveryDays = deliveryDays;
    }
    
    public MealPreference getMealPreference() {
        return mealPreference;
    }
    
    public void setMealPreference(MealPreference mealPreference) {
        this.mealPreference = mealPreference;
    }
    
    public DeliveryAddress getDeliveryAddress() {
        return deliveryAddress;
    }
    
    public void setDeliveryAddress(DeliveryAddress deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }
    
    public String getSpecialInstructions() {
        return specialInstructions;
    }
    
    public void setSpecialInstructions(String specialInstructions) {
        this.specialInstructions = specialInstructions;
    }
    
    public Integer getPauseCount() {
        return pauseCount;
    }
    
    public void setPauseCount(Integer pauseCount) {
        this.pauseCount = pauseCount;
    }
    
    public Boolean getAutoRenewal() {
        return autoRenewal;
    }
    
    public void setAutoRenewal(Boolean autoRenewal) {
        this.autoRenewal = autoRenewal;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
    
    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
    
    public List<Order> getOrders() {
        return orders;
    }
    
    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
    
    public List<MealDelivery> getMealDeliveries() {
        return mealDeliveries;
    }
    
    public void setMealDeliveries(List<MealDelivery> mealDeliveries) {
        this.mealDeliveries = mealDeliveries;
    }
    
    public List<SubscriptionPauseHistory> getPauseHistory() {
        return pauseHistory;
    }
    
    public void setPauseHistory(List<SubscriptionPauseHistory> pauseHistory) {
        this.pauseHistory = pauseHistory;
    }
    
    // Enums
    public enum SubscriptionStatus {
        ACTIVE, PAUSED, CANCELLED, EXPIRED
    }
    
    public enum DeliveryDay {
        MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
    }
    
    public enum MealPreference {
        VEG, NON_VEG, MIXED
    }
}
