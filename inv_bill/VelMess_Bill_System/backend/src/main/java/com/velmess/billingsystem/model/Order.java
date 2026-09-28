package com.velmess.billingsystem.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "pos_orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private LocalDateTime orderDate;
    
    @JsonProperty("total_amount")
    private Double totalAmount;
    
    @JsonProperty("final_amount")
    private Double finalAmount;
    
    private Double discount;
    
    private String status;
    
    @JsonProperty("customer_name")
    private String customerName;
    
    @JsonProperty("phone_number")
    private String phoneNumber;

    @JsonProperty("payment_mode")
    private String paymentMode;

    @JsonProperty("payment_status")
    private String paymentStatus;

    @JsonProperty("is_printed")
    private Boolean isPrinted = false;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> items;

    @PrePersist
    protected void onCreate() {
        if (orderDate == null) {
            orderDate = LocalDateTime.now();
        }
    }
}
