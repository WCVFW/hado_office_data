import apiService from "./apiService";

// Mock data for fallback when Spring Boot API is not available
const mockDashboardStats = {
  totalUsers: 1247,
  newUsersThisMonth: 156,
  userGrowthRate: 12.5,
  totalOrders: 3456,
  newOrdersThisMonth: 284,
  orderGrowthRate: 8.2,
  activeSubscriptions: 823,
  subscriptionGrowthRate: 15.3,
  totalRevenue: 156780,
  monthlyRevenue: 35670,
  revenueGrowthRate: 23.1,
  subscriptionRevenue: 89320,
  subscriptionRevenueGrowthRate: 18.7,
  totalProducts: 120,
  activeProducts: 115,
  productGrowthRate: 5.4,
  recentOrdersCount: 156,
};

class AdminService {
  private static instance: AdminService;

  private constructor() {}

  public static getInstance(): AdminService {
    if (!AdminService.instance) {
      AdminService.instance = new AdminService();
    }
    return AdminService.instance;
  }

  async getDashboardStats() {
    try {
      const response = await apiService.getDashboardStats();

      if (response.success && response.data) {
        return {
          success: true,
          data: response.data,
        };
      }

      // Fallback to mock data if Spring Boot API fails
      console.log("Spring Boot API unavailable, using mock dashboard stats");
      return {
        success: true,
        data: mockDashboardStats,
        isDemo: true,
      };
    } catch (error) {
      console.log("Dashboard stats API unavailable, using demo data");
      return {
        success: true,
        data: mockDashboardStats,
        isDemo: true,
      };
    }
  }

  async getUsers(params?: {
    search?: string;
    status?: string;
    page?: number;
    size?: number;
  }) {
    try {
      const response = await apiService.getAllUsers(params);

      if (response.success && response.data) {
        return {
          success: true,
          data: response.data,
        };
      }

      throw new Error("API call failed");
    } catch (error) {
      console.error("Users API error:", error);
      return {
        success: false,
        error:
          "Failed to fetch users. Please check if Spring Boot backend is running.",
      };
    }
  }

  async getOrders(params?: {
    status?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    size?: number;
  }) {
    try {
      const response = await apiService.getAllOrders(params);

      if (response.success && response.data) {
        return {
          success: true,
          data: response.data,
        };
      }

      throw new Error("API call failed");
    } catch (error) {
      console.error("Orders API error:", error);
      return {
        success: false,
        error:
          "Failed to fetch orders. Please check if Spring Boot backend is running.",
      };
    }
  }

  async getSubscriptions(params?: {
    status?: string;
    page?: number;
    size?: number;
  }) {
    try {
      const response = await apiService.getAllSubscriptions(params);

      if (response.success && response.data) {
        return {
          success: true,
          data: response.data,
        };
      }

      throw new Error("API call failed");
    } catch (error) {
      console.error("Subscriptions API error:", error);
      return {
        success: false,
        error:
          "Failed to fetch subscriptions. Please check if Spring Boot backend is running.",
      };
    }
  }

  async getAnalytics(timeRange: string = "30d") {
    try {
      const response = await apiService.getAdminAnalytics(timeRange);

      if (response.success && response.data) {
        return {
          success: true,
          data: response.data,
        };
      }

      throw new Error("API call failed");
    } catch (error) {
      console.error("Analytics API error:", error);
      return {
        success: false,
        error:
          "Failed to fetch analytics. Please check if Spring Boot backend is running.",
      };
    }
  }

  async updateUser(userId: string, updates: any) {
    try {
      const response = await apiService.updateUserAsAdmin(userId, updates);

      if (response.success) {
        return response;
      }

      throw new Error("Update failed");
    } catch (error) {
      console.error("User update error:", error);
      return {
        success: false,
        error:
          "Failed to update user. Please check if Spring Boot backend is running.",
      };
    }
  }

  async deleteUser(userId: string) {
    try {
      const response = await apiService.deleteUserAsAdmin(userId);

      if (response.success) {
        return response;
      }

      throw new Error("Delete failed");
    } catch (error) {
      console.error("User delete error:", error);
      return {
        success: false,
        error:
          "Failed to delete user. Please check if Spring Boot backend is running.",
      };
    }
  }

  async updateOrder(orderId: string, updates: any) {
    try {
      const response = await apiService.updateOrderAsAdmin(orderId, updates);

      if (response.success) {
        return response;
      }

      throw new Error("Update failed");
    } catch (error) {
      console.error("Order update error:", error);
      return {
        success: false,
        error:
          "Failed to update order. Please check if Spring Boot backend is running.",
      };
    }
  }

  async updateSubscription(subscriptionId: string, updates: any) {
    try {
      const response = await apiService.updateSubscriptionAsAdmin(
        subscriptionId,
        updates,
      );

      if (response.success) {
        return response;
      }

      throw new Error("Update failed");
    } catch (error) {
      console.error("Subscription update error:", error);
      return {
        success: false,
        error:
          "Failed to update subscription. Please check if Spring Boot backend is running.",
      };
    }
  }

  async exportData(
    type: "users" | "orders" | "subscriptions",
    format: "csv" | "excel",
  ) {
    try {
      const blob = await apiService.exportData(type, format);

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${type}_export_${new Date().toISOString().split("T")[0]}.${format === "csv" ? "csv" : "xlsx"}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      return { success: true };
    } catch (error) {
      console.error("Export error:", error);
      return {
        success: false,
        error:
          "Failed to export data. Please check if Spring Boot backend is running.",
      };
    }
  }

  // Product management methods
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

export const adminService = AdminService.getInstance();
export default adminService;
