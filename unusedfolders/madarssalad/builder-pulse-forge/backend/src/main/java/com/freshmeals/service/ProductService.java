package com.freshmeals.service;

import com.freshmeals.entity.Product;
import com.freshmeals.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Public methods for users
    public List<Product> getAllEnabledProducts() {
        return productRepository.findByIsEnabledTrue();
    }

    public Optional<Product> getProductById(String id) {
        return productRepository.findById(id)
                .filter(Product::getIsEnabled);
    }

    public List<Product> getProductsByCategory(Product.Category category) {
        return productRepository.findByCategoryAndIsEnabledTrue(category);
    }

    public List<Product> getProductsByType(Product.ProductType type) {
        return productRepository.findByProductTypeAndIsEnabledTrue(type);
    }

    public List<Product> getFeaturedProducts() {
        return productRepository.findByIsFeaturedTrueAndIsEnabledTrueOrderBySortOrder();
    }

    public List<Product> searchProducts(String searchTerm) {
        return productRepository.searchProductsByNameOrDescription(searchTerm);
    }

    public List<Product> getProductsByPriceRange(BigDecimal minPrice, BigDecimal maxPrice) {
        return productRepository.findProductsByPriceRange(minPrice, maxPrice);
    }

    // Admin methods
    public Page<Product> getAllProductsForAdmin(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(String id, Product product) {
        return productRepository.findById(id)
                .map(existingProduct -> {
                    existingProduct.setName(product.getName());
                    existingProduct.setDescription(product.getDescription());
                    existingProduct.setPrice(product.getPrice());
                    existingProduct.setCategory(product.getCategory());
                    existingProduct.setProductType(product.getProductType());
                    existingProduct.setCalories(product.getCalories());
                    existingProduct.setPrepTimeMinutes(product.getPrepTimeMinutes());
                    existingProduct.setServings(product.getServings());
                    existingProduct.setImageUrl(product.getImageUrl());
                    existingProduct.setTags(product.getTags());
                    existingProduct.setIngredients(product.getIngredients());
                    existingProduct.setAllergens(product.getAllergens());
                    existingProduct.setProteinGrams(product.getProteinGrams());
                    existingProduct.setCarbsGrams(product.getCarbsGrams());
                    existingProduct.setFatGrams(product.getFatGrams());
                    existingProduct.setFiberGrams(product.getFiberGrams());
                    existingProduct.setSodiumMg(product.getSodiumMg());
                    existingProduct.setSugarGrams(product.getSugarGrams());
                    existingProduct.setAvailabilityStatus(product.getAvailabilityStatus());
                    existingProduct.setSortOrder(product.getSortOrder());
                    return productRepository.save(existingProduct);
                })
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
    }

    public void deleteProduct(String id) {
        if (!productRepository.existsById(id)) {
            throw new RuntimeException("Product not found with id: " + id);
        }
        productRepository.deleteById(id);
    }

    public Product toggleProductStatus(String id) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setIsEnabled(!product.getIsEnabled());
                    return productRepository.save(product);
                })
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
    }

    public Product toggleFeaturedStatus(String id) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setIsFeatured(!product.getIsFeatured());
                    return productRepository.save(product);
                })
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
    }

    public Map<String, Object> getProductStatistics() {
        Map<String, Object> stats = new HashMap<>();
        
        stats.put("totalProducts", productRepository.count());
        stats.put("enabledProducts", productRepository.countByIsEnabledTrue());
        
        // Category statistics
        Map<String, Long> categoryStats = new HashMap<>();
        for (Product.Category category : Product.Category.values()) {
            categoryStats.put(category.name(), productRepository.countByCategory(category));
        }
        stats.put("categoryStats", categoryStats);
        
        return stats;
    }
}
