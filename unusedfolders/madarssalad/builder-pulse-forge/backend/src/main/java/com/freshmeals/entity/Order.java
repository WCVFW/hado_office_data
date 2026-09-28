package com.freshmeals.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subscription_id")
    @JsonBackReference
    private UserSubscription subscription;
    
    @Column(name = "order_number", unique = true, nullable = false)
    private String orderNumber;
    
    @NotNull(message = "Order date is required")
    @Column(name = "order_date", nullable = false)
    private LocalDate orderDate;
    
    @NotNull(message = "Delivery date is required")
    @Column(name = "delivery_date", nullable = false)
    private LocalDate deliveryDate;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OrderStatus status = OrderStatus.SCHEDULED;
    
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<OrderItem> orderItems;
    
    @NotNull(message = "Subtotal is required")
    @DecimalMin(value = "0.0", inclusive = true)
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal subtotal;
    
    @DecimalMin(value = "0.0", inclusive = true)
    @Column(precision = 10, scale = 2)
    private BigDecimal tax = BigDecimal.ZERO;
    
    @DecimalMin(value = "0.0", inclusive = true)
    @Column(name = "delivery_fee", precision = 10, scale = 2)
    private BigDecimal deliveryFee = BigDecimal.ZERO;
    
    @DecimalMin(value = "0.0", inclusive = true)
    @Column(precision = 10, scale = 2)
    private BigDecimal discount = BigDecimal.ZERO;
    
    @NotNull(message = "Total amount is required")
    @DecimalMin(value = "0.0", inclusive = false)
    @Column(name = "total_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalAmount;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "payment_status", nullable = false)
    private PaymentStatus paymentStatus = PaymentStatus.PENDING;
    
    @Column(name = "razorpay_order_id")
    private String razorpayOrderId;
    
    @Column(name = "razorpay_payment_id")
    private String razorpayPaymentId;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "delivery_address_id", nullable = false)
    private DeliveryAddress deliveryAddress;
    
    @Column(name = "delivery_instructions", columnDefinition = "TEXT")
    private String deliveryInstructions;
    
    @Column(name = "estimated_delivery_time")
    private String estimatedDeliveryTime;
    
    @Column(name = "actual_delivery_time")
    private LocalDateTime actualDeliveryTime;
    
    @Column(name = "delivery_person_name")
    private String deliveryPersonName;
    
    @Column(name = "delivery_person_phone")
    private String deliveryPersonPhone;
    
    @Column(name = "cancellation_reason", columnDefinition = "TEXT")
    private String cancellationReason;
    
    @Column(name = "cancelled_at")
    private LocalDateTime cancelledAt;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Constructors
    public Order() {}
    
    public Order(User user, LocalDate orderDate, LocalDate deliveryDate, 
                DeliveryAddress deliveryAddress, BigDecimal totalAmount) {
        this.user = user;
        this.orderDate = orderDate;
        this.deliveryDate = deliveryDate;
        this.deliveryAddress = deliveryAddress;
        this.totalAmount = totalAmount;
        this.subtotal = totalAmount;
        this.orderNumber = generateOrderNumber();
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
    
    public UserSubscription getSubscription() {
        return subscription;
    }
    
    public void setSubscription(UserSubscription subscription) {
        this.subscription = subscription;
    }
    
    public String getOrderNumber() {
        return orderNumber;
    }
    
    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }
    
    public LocalDate getOrderDate() {
        return orderDate;
    }
    
    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }
    
    public LocalDate getDeliveryDate() {
        return deliveryDate;
    }
    
    public void setDeliveryDate(LocalDate deliveryDate) {
        this.deliveryDate = deliveryDate;
    }
    
    public OrderStatus getStatus() {
        return status;
    }
    
    public void setStatus(OrderStatus status) {
        this.status = status;
    }
    
    public List<OrderItem> getOrderItems() {
        return orderItems;
    }
    
    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }
    
    public BigDecimal getSubtotal() {
        return subtotal;
    }
    
    public void setSubtotal(BigDecimal subtotal) {
        this.subtotal = subtotal;
    }
    
    public BigDecimal getTax() {
        return tax;
    }
    
    public void setTax(BigDecimal tax) {
        this.tax = tax;
    }
    
    public BigDecimal getDeliveryFee() {
        return deliveryFee;
    }
    
    public void setDeliveryFee(BigDecimal deliveryFee) {
        this.deliveryFee = deliveryFee;
    }
    
    public BigDecimal getDiscount() {
        return discount;
    }
    
    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }
    
    public BigDecimal getTotalAmount() {
        return totalAmount;
    }
    
    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }
    
    public PaymentStatus getPaymentStatus() {
        return paymentStatus;
    }
    
    public void setPaymentStatus(PaymentStatus paymentStatus) {
        this.paymentStatus = paymentStatus;
    }
    
    public String getRazorpayOrderId() {
        return razorpayOrderId;
    }
    
    public void setRazorpayOrderId(String razorpayOrderId) {
        this.razorpayOrderId = razorpayOrderId;
    }
    
    public String getRazorpayPaymentId() {
        return razorpayPaymentId;
    }
    
    public void setRazorpayPaymentId(String razorpayPaymentId) {
        this.razorpayPaymentId = razorpayPaymentId;
    }
    
    public DeliveryAddress getDeliveryAddress() {
        return deliveryAddress;
    }
    
    public void setDeliveryAddress(DeliveryAddress deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }
    
    public String getDeliveryInstructions() {
        return deliveryInstructions;
    }
    
    public void setDeliveryInstructions(String deliveryInstructions) {
        this.deliveryInstructions = deliveryInstructions;
    }
    
    public String getEstimatedDeliveryTime() {
        return estimatedDeliveryTime;
    }
    
    public void setEstimatedDeliveryTime(String estimatedDeliveryTime) {
        this.estimatedDeliveryTime = estimatedDeliveryTime;
    }
    
    public LocalDateTime getActualDeliveryTime() {
        return actualDeliveryTime;
    }
    
    public void setActualDeliveryTime(LocalDateTime actualDeliveryTime) {
        this.actualDeliveryTime = actualDeliveryTime;
    }
    
    public String getDeliveryPersonName() {
        return deliveryPersonName;
    }
    
    public void setDeliveryPersonName(String deliveryPersonName) {
        this.deliveryPersonName = deliveryPersonName;
    }
    
    public String getDeliveryPersonPhone() {
        return deliveryPersonPhone;
    }
    
    public void setDeliveryPersonPhone(String deliveryPersonPhone) {
        this.deliveryPersonPhone = deliveryPersonPhone;
    }
    
    public String getCancellationReason() {
        return cancellationReason;
    }
    
    public void setCancellationReason(String cancellationReason) {
        this.cancellationReason = cancellationReason;
    }
    
    public LocalDateTime getCancelledAt() {
        return cancelledAt;
    }
    
    public void setCancelledAt(LocalDateTime cancelledAt) {
        this.cancelledAt = cancelledAt;
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
    
    // Utility methods
    private String generateOrderNumber() {
        return "ORD" + System.currentTimeMillis();
    }
    
    public void calculateTotalAmount() {
        this.totalAmount = subtotal.add(tax).add(deliveryFee).subtract(discount);
    }
    
    // Enums
    public enum OrderStatus {
        SCHEDULED, PREPARING, IN_TRANSIT, DELIVERED, CANCELLED
    }
    
    public enum PaymentStatus {
        PENDING, COMPLETED, FAILED, REFUNDED
    }
}
