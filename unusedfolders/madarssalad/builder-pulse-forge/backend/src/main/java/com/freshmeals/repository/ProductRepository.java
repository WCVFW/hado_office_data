package com.freshmeals.repository;

import com.freshmeals.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {

    // Find all enabled products
    List<Product> findByIsEnabledTrue();

    // Find products by category
    List<Product> findByCategoryAndIsEnabledTrue(Product.Category category);

    // Find products by product type (VEG, NON_VEG, VEGAN)
    List<Product> findByProductTypeAndIsEnabledTrue(Product.ProductType productType);

    // Find featured products
    List<Product> findByIsFeaturedTrueAndIsEnabledTrueOrderBySortOrder();

    // Find products by availability status
    List<Product> findByAvailabilityStatusAndIsEnabledTrue(Product.AvailabilityStatus status);

    // Search products by name or description
    @Query("SELECT p FROM Product p WHERE (p.name LIKE %:searchTerm% OR p.description LIKE %:searchTerm%) AND p.isEnabled = true")
    List<Product> searchProductsByNameOrDescription(@Param("searchTerm") String searchTerm);

    // Find products within price range
    @Query("SELECT p FROM Product p WHERE p.price BETWEEN :minPrice AND :maxPrice AND p.isEnabled = true ORDER BY p.price")
    List<Product> findProductsByPriceRange(@Param("minPrice") java.math.BigDecimal minPrice, 
                                          @Param("maxPrice") java.math.BigDecimal maxPrice);

    // Find products with pagination
    Page<Product> findByIsEnabledTrue(Pageable pageable);

    // Admin methods - include disabled products
    Page<Product> findAll(Pageable pageable);

    // Find by category with pagination
    Page<Product> findByCategory(Product.Category category, Pageable pageable);

    // Count products by category
    long countByCategory(Product.Category category);

    // Count enabled products
    long countByIsEnabledTrue();
}
