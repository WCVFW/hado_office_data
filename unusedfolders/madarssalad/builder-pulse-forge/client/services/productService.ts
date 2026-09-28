import apiService from "./apiService";

// Mock products for fallback when Spring Boot API is not available
const mockProducts = [
  {
    id: "1",
    name: "Grilled Chicken Bowl",
    description:
      "Tender grilled chicken with quinoa, roasted vegetables, and tahini dressing",
    price: 299,
    image_url:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
    category: "non-veg",
    is_active: true,
    nutritional_info: {
      calories: 450,
      protein: 35,
      carbs: 25,
      fat: 18,
      fiber: 8,
    },
    ingredients: [
      "Chicken breast",
      "Quinoa",
      "Bell peppers",
      "Zucchini",
      "Tahini",
      "Olive oil",
    ],
    swiggy_url: "https://www.swiggy.com/restaurants/freshmeals-chicken-bowl",
    zomato_url: "https://www.zomato.com/freshmeals/chicken-bowl",
  },
  {
    id: "2",
    name: "Mediterranean Veggie Wrap",
    description:
      "Fresh vegetables wrapped in whole wheat tortilla with hummus and feta",
    price: 249,
    image_url:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500",
    category: "veg",
    is_active: true,
    nutritional_info: {
      calories: 380,
      protein: 12,
      carbs: 45,
      fat: 15,
      fiber: 10,
    },
    ingredients: [
      "Whole wheat tortilla",
      "Hummus",
      "Feta cheese",
      "Cucumber",
      "Tomatoes",
      "Red onion",
    ],
    swiggy_url: "https://www.swiggy.com/restaurants/freshmeals-veggie-wrap",
    zomato_url: null,
  },
  {
    id: "3",
    name: "Salmon Teriyaki",
    description:
      "Pan-seared salmon with teriyaki glaze, steamed rice, and broccoli",
    price: 399,
    image_url:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500",
    category: "non-veg",
    is_active: true,
    nutritional_info: {
      calories: 520,
      protein: 40,
      carbs: 35,
      fat: 22,
      fiber: 5,
    },
    ingredients: [
      "Salmon fillet",
      "Teriyaki sauce",
      "Jasmine rice",
      "Broccoli",
      "Sesame seeds",
    ],
    swiggy_url: null,
    zomato_url: "https://www.zomato.com/freshmeals/salmon-teriyaki",
  },
  {
    id: "4",
    name: "Buddha Bowl",
    description:
      "A colorful mix of quinoa, chickpeas, avocado, and seasonal vegetables",
    price: 279,
    image_url:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    category: "veg",
    is_active: true,
    nutritional_info: {
      calories: 420,
      protein: 16,
      carbs: 42,
      fat: 20,
      fiber: 12,
    },
    ingredients: [
      "Quinoa",
      "Chickpeas",
      "Avocado",
      "Sweet potato",
      "Spinach",
      "Lemon vinaigrette",
    ],
    swiggy_url: "https://www.swiggy.com/restaurants/freshmeals-buddha-bowl",
    zomato_url: "https://www.zomato.com/freshmeals/buddha-bowl",
  },
  {
    id: "5",
    name: "Spicy Thai Curry",
    description: "Aromatic coconut curry with vegetables and jasmine rice",
    price: 329,
    image_url:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500",
    category: "veg",
    is_active: true,
    nutritional_info: {
      calories: 390,
      protein: 10,
      carbs: 48,
      fat: 18,
      fiber: 8,
    },
    ingredients: [
      "Coconut milk",
      "Thai curry paste",
      "Mixed vegetables",
      "Jasmine rice",
      "Fresh herbs",
    ],
    swiggy_url: "https://www.swiggy.com/restaurants/freshmeals-thai-curry",
    zomato_url: null,
  },
];

class ProductService {
  private static instance: ProductService;

  private constructor() {}

  public static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async getProducts(params?: {
    category?: string;
    type?: string;
    search?: string;
    page?: number;
    size?: number;
  }) {
    try {
      const response = await apiService.getProducts(params);

      if (response.success && response.data) {
        return {
          success: true,
          data: response.data,
        };
      }

      // Fallback to mock data with filtering
      let filteredProducts = [...mockProducts];

      if (params?.category) {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === params.category,
        );
      }

      if (params?.search) {
        const searchLower = params.search.toLowerCase();
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower) ||
            product.ingredients.some((ingredient) =>
              ingredient.toLowerCase().includes(searchLower),
            ),
        );
      }

      // Filter by active status
      filteredProducts = filteredProducts.filter(
        (product) => product.is_active,
      );

      // Pagination
      const page = params?.page || 0;
      const size = params?.size || 10;
      const startIndex = page * size;
      const endIndex = startIndex + size;
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

      console.log("Spring Boot API unavailable, using mock products data");
      return {
        success: true,
        data: {
          content: paginatedProducts,
          totalElements: filteredProducts.length,
          totalPages: Math.ceil(filteredProducts.length / size),
          number: page, // Spring Boot uses 'number' instead of 'currentPage'
          size: size,
        },
        isDemo: true,
      };
    } catch (error) {
      console.log("Products API unavailable, using demo data");
      return {
        success: true,
        data: {
          content: mockProducts,
          totalElements: mockProducts.length,
          totalPages: 1,
          number: 0,
          size: 10,
        },
        isDemo: true,
      };
    }
  }

  async getProduct(productId: string) {
    try {
      const response = await apiService.getProduct(productId);

      if (response.success && response.data) {
        return {
          success: true,
          data: response.data,
        };
      }

      // Fallback to mock data
      const product = mockProducts.find((p) => p.id === productId);
      if (product) {
        console.log("Spring Boot API unavailable, using mock product data");
        return {
          success: true,
          data: product,
          isDemo: true,
        };
      }

      return {
        success: false,
        error: "Product not found",
      };
    } catch (error) {
      console.log("Product API unavailable, using demo data");
      const product = mockProducts.find((p) => p.id === productId);
      if (product) {
        return {
          success: true,
          data: product,
          isDemo: true,
        };
      }

      return {
        success: false,
        error: "Product not found",
      };
    }
  }

  async searchProducts(query: string) {
    return this.getProducts({ search: query });
  }

  async getProductsByCategory(category: string) {
    return this.getProducts({ category });
  }

  // Admin methods for product management
  async createProduct(productData: any) {
    try {
      const response = await apiService.createProduct(productData);
      return response;
    } catch (error) {
      console.error("Create product error:", error);
      return {
        success: false,
        error:
          "Failed to create product. Please check if Spring Boot backend is running.",
      };
    }
  }

  async updateProduct(productId: string, updates: any) {
    try {
      const response = await apiService.updateProduct(productId, updates);
      return response;
    } catch (error) {
      console.error("Update product error:", error);
      return {
        success: false,
        error:
          "Failed to update product. Please check if Spring Boot backend is running.",
      };
    }
  }

  async deleteProduct(productId: string) {
    try {
      const response = await apiService.deleteProduct(productId);
      return response;
    } catch (error) {
      console.error("Delete product error:", error);
      return {
        success: false,
        error:
          "Failed to delete product. Please check if Spring Boot backend is running.",
      };
    }
  }

  async toggleProductStatus(productId: string) {
    try {
      const response = await apiService.toggleProductStatus(productId);
      return response;
    } catch (error) {
      console.error("Toggle product status error:", error);
      return {
        success: false,
        error:
          "Failed to toggle product status. Please check if Spring Boot backend is running.",
      };
    }
  }
}

export const productService = ProductService.getInstance();
export default productService;
