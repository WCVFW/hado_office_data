package com.freshmeals.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    
    @NotBlank(message = "Product name is required")
    @Column(nullable = false)
    private String name;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than 0")
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Category category;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "product_type", nullable = false)
    private ProductType productType;
    
    @NotNull(message = "Calories is required")
    @Min(value = 0, message = "Calories cannot be negative")
    @Column(nullable = false)
    private Integer calories;
    
    @NotNull(message = "Preparation time is required")
    @Min(value = 1, message = "Preparation time must be at least 1 minute")
    @Column(name = "prep_time_minutes", nullable = false)
    private Integer prepTimeMinutes;
    
    @NotNull(message = "Servings is required")
    @Min(value = 1, message = "Servings must be at least 1")
    @Column(nullable = false)
    private Integer servings;
    
    @Column(precision = 3, scale = 2)
    private BigDecimal rating = BigDecimal.ZERO;
    
    @Column(name = "rating_count")
    private Integer ratingCount = 0;
    
    @Column(name = "image_url")
    private String imageUrl;
    
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "product_tags", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "tag")
    private List<String> tags;
    
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "product_ingredients", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "ingredient")
    private List<String> ingredients;
    
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "product_allergens", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "allergen")
    private List<String> allergens;
    
    // Nutrition Facts
    @Column(name = "protein_grams")
    private Integer proteinGrams = 0;
    
    @Column(name = "carbs_grams")
    private Integer carbsGrams = 0;
    
    @Column(name = "fat_grams")
    private Integer fatGrams = 0;
    
    @Column(name = "fiber_grams")
    private Integer fiberGrams = 0;
    
    @Column(name = "sodium_mg")
    private Integer sodiumMg = 0;
    
    @Column(name = "sugar_grams")
    private Integer sugarGrams = 0;
    
    @Column(name = "is_enabled")
    private Boolean isEnabled = true;
    
    @Column(name = "is_featured")
    private Boolean isFeatured = false;
    
    @Column(name = "availability_status")
    @Enumerated(EnumType.STRING)
    private AvailabilityStatus availabilityStatus = AvailabilityStatus.AVAILABLE;
    
    @Column(name = "sort_order")
    private Integer sortOrder = 0;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Constructors
    public Product() {}
    
    public Product(String name, String description, BigDecimal price, Category category, 
                  ProductType productType, Integer calories, Integer prepTimeMinutes, Integer servings) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.productType = productType;
        this.calories = calories;
        this.prepTimeMinutes = prepTimeMinutes;
        this.servings = servings;
    }
    
    // Getters and Setters
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public BigDecimal getPrice() {
        return price;
    }
    
    public void setPrice(BigDecimal price) {
        this.price = price;
    }
    
    public Category getCategory() {
        return category;
    }
    
    public void setCategory(Category category) {
        this.category = category;
    }
    
    public ProductType getProductType() {
        return productType;
    }
    
    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
    
    public Integer getCalories() {
        return calories;
    }
    
    public void setCalories(Integer calories) {
        this.calories = calories;
    }
    
    public Integer getPrepTimeMinutes() {
        return prepTimeMinutes;
    }
    
    public void setPrepTimeMinutes(Integer prepTimeMinutes) {
        this.prepTimeMinutes = prepTimeMinutes;
    }
    
    public Integer getServings() {
        return servings;
    }
    
    public void setServings(Integer servings) {
        this.servings = servings;
    }
    
    public BigDecimal getRating() {
        return rating;
    }
    
    public void setRating(BigDecimal rating) {
        this.rating = rating;
    }
    
    public Integer getRatingCount() {
        return ratingCount;
    }
    
    public void setRatingCount(Integer ratingCount) {
        this.ratingCount = ratingCount;
    }
    
    public String getImageUrl() {
        return imageUrl;
    }
    
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    
    public List<String> getTags() {
        return tags;
    }
    
    public void setTags(List<String> tags) {
        this.tags = tags;
    }
    
    public List<String> getIngredients() {
        return ingredients;
    }
    
    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }
    
    public List<String> getAllergens() {
        return allergens;
    }
    
    public void setAllergens(List<String> allergens) {
        this.allergens = allergens;
    }
    
    public Integer getProteinGrams() {
        return proteinGrams;
    }
    
    public void setProteinGrams(Integer proteinGrams) {
        this.proteinGrams = proteinGrams;
    }
    
    public Integer getCarbsGrams() {
        return carbsGrams;
    }
    
    public void setCarbsGrams(Integer carbsGrams) {
        this.carbsGrams = carbsGrams;
    }
    
    public Integer getFatGrams() {
        return fatGrams;
    }
    
    public void setFatGrams(Integer fatGrams) {
        this.fatGrams = fatGrams;
    }
    
    public Integer getFiberGrams() {
        return fiberGrams;
    }
    
    public void setFiberGrams(Integer fiberGrams) {
        this.fiberGrams = fiberGrams;
    }
    
    public Integer getSodiumMg() {
        return sodiumMg;
    }
    
    public void setSodiumMg(Integer sodiumMg) {
        this.sodiumMg = sodiumMg;
    }
    
    public Integer getSugarGrams() {
        return sugarGrams;
    }
    
    public void setSugarGrams(Integer sugarGrams) {
        this.sugarGrams = sugarGrams;
    }
    
    public Boolean getIsEnabled() {
        return isEnabled;
    }
    
    public void setIsEnabled(Boolean isEnabled) {
        this.isEnabled = isEnabled;
    }
    
    public Boolean getIsFeatured() {
        return isFeatured;
    }
    
    public void setIsFeatured(Boolean isFeatured) {
        this.isFeatured = isFeatured;
    }
    
    public AvailabilityStatus getAvailabilityStatus() {
        return availabilityStatus;
    }
    
    public void setAvailabilityStatus(AvailabilityStatus availabilityStatus) {
        this.availabilityStatus = availabilityStatus;
    }
    
    public Integer getSortOrder() {
        return sortOrder;
    }
    
    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
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
    
    // Enums
    public enum Category {
        BREAKFAST, LUNCH, DINNER, SNACKS, BEVERAGES, DESSERTS
    }
    
    public enum ProductType {
        VEG, NON_VEG, VEGAN
    }
    
    public enum AvailabilityStatus {
        AVAILABLE, OUT_OF_STOCK, DISCONTINUED, SEASONAL
    }
}
