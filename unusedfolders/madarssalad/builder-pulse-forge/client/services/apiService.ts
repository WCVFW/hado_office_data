interface ApiResponse<T> {
  success?: boolean;
  data?: T;
  error?: string;
  message?: string;
}

interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number; // Spring Boot uses 'number' instead of 'currentPage'
  size: number;
}

interface SpringBootApiResponse<T> {
  data?: T;
  message?: string;
  status?: string;
  timestamp?: string;
}

class ApiService {
  private baseURL: string;
  private token: string | null = null;

  constructor(
    baseURL: string = import.meta.env.VITE_API_URL || "http://localhost:8080",
  ) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem("token");
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    return headers;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<ApiResponse<T>> {
    // Add timeout to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout for Spring Boot

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        signal: controller.signal,
        headers: {
          ...this.getHeaders(),
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        // Handle Spring Boot error responses
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (e) {
          // If response is not JSON, use status text
        }

        return {
          success: false,
          error: errorMessage,
        };
      }

      const data = await response.json();

      // Handle Spring Boot response format
      return {
        success: true,
        data: data,
      };
    } catch (error) {
      clearTimeout(timeoutId);
      // Log API unavailability once per session
      if (!window.apiUnavailableLogged) {
        console.log(
          "Spring Boot API not available - check if backend is running",
        );
        window.apiUnavailableLogged = true;
      }

      if (error instanceof Error) {
        if (error.name === "AbortError") {
          return {
            success: false,
            error: "API request timeout",
          };
        }
        if (error.message.includes("Failed to fetch")) {
          return {
            success: false,
            error: "Cannot connect to backend API",
          };
        }
        return {
          success: false,
          error: `API error: ${error.message}`,
        };
      }

      return {
        success: false,
        error: "Unknown API error",
      };
    }
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem("token", token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem("token");
  }

  // Generic HTTP methods
  async get<T>(endpoint: string) {
    return this.request<T>(endpoint, { method: "GET" });
  }

  async post<T>(endpoint: string, data?: any) {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: any) {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(endpoint: string, data?: any) {
    return this.request<T>(endpoint, {
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string) {
    return this.request<T>(endpoint, { method: "DELETE" });
  }

  // Authentication endpoints (Spring Boot style)
  async login(email: string, password: string) {
    return this.request<{ token: string; user: any }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: {
    fullName: string;
    email: string;
    password: string;
    phoneNumber?: string;
  }) {
    return this.request<{ token: string; user: any }>("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  }

  async refreshToken() {
    return this.request<{ token: string }>("/auth/refresh", {
      method: "POST",
    });
  }

  async logout() {
    return this.request<any>("/auth/logout", {
      method: "POST",
    });
  }

  // User endpoints
  async getUserProfile(userId: string) {
    return this.request<any>(`/users/${userId}`);
  }

  async updateUserProfile(userId: string, updates: any) {
    return this.request<any>(`/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });
  }

  async getUserSubscriptions(userId: string) {
    return this.request<any[]>(`/users/${userId}/subscriptions`);
  }

  async getUserOrders(userId: string, page = 0, size = 10) {
    return this.request<PaginatedResponse<any>>(
      `/users/${userId}/orders?page=${page}&size=${size}`,
    );
  }

  async getUserAddresses(userId: string) {
    return this.request<any[]>(`/users/${userId}/addresses`);
  }

  async createUserAddress(userId: string, address: any) {
    return this.request<any>(`/users/${userId}/addresses`, {
      method: "POST",
      body: JSON.stringify(address),
    });
  }

  async updateUserAddress(userId: string, addressId: string, updates: any) {
    return this.request<any>(`/users/${userId}/addresses/${addressId}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });
  }

  async deleteUserAddress(userId: string, addressId: string) {
    return this.request<void>(`/users/${userId}/addresses/${addressId}`, {
      method: "DELETE",
    });
  }

  // Subscription endpoints
  async getSubscriptionPlans() {
    return this.request<any[]>("/subscription-plans");
  }

  async createSubscription(subscriptionData: any) {
    return this.request<any>("/subscriptions", {
      method: "POST",
      body: JSON.stringify(subscriptionData),
    });
  }

  async getSubscription(subscriptionId: string) {
    return this.request<any>(`/subscriptions/${subscriptionId}`);
  }

  async updateSubscription(subscriptionId: string, updates: any) {
    return this.request<any>(`/subscriptions/${subscriptionId}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });
  }

  async pauseSubscription(subscriptionId: string, reason: string) {
    return this.request<any>(`/subscriptions/${subscriptionId}/pause`, {
      method: "PUT",
      body: JSON.stringify({ reason }),
    });
  }

  async resumeSubscription(subscriptionId: string, resumeDate: string) {
    return this.request<any>(`/subscriptions/${subscriptionId}/resume`, {
      method: "PUT",
      body: JSON.stringify({ resumeDate }),
    });
  }

  async cancelSubscription(subscriptionId: string, reason: string) {
    return this.request<any>(`/subscriptions/${subscriptionId}/cancel`, {
      method: "PUT",
      body: JSON.stringify({ reason }),
    });
  }

  // Product endpoints
  async getProducts(params?: {
    category?: string;
    type?: string;
    search?: string;
    page?: number;
    size?: number;
  }) {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, value.toString());
        }
      });
    }

    const queryString = queryParams.toString();
    return this.request<PaginatedResponse<any>>(
      `/products${queryString ? `?${queryString}` : ""}`,
    );
  }

  async getProduct(productId: string) {
    return this.request<any>(`/products/${productId}`);
  }

  // Order endpoints
  async createOrder(orderData: any) {
    return this.request<any>("/orders", {
      method: "POST",
      body: JSON.stringify(orderData),
    });
  }

  async getOrder(orderId: string) {
    return this.request<any>(`/orders/${orderId}`);
  }

  async updateOrderStatus(orderId: string, status: string) {
    return this.request<any>(`/orders/${orderId}/status`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    });
  }

  // Payment endpoints
  async createPaymentOrder(paymentData: any) {
    return this.request<any>("/payments/create-order", {
      method: "POST",
      body: JSON.stringify(paymentData),
    });
  }

  async verifyPayment(paymentVerificationData: any) {
    return this.request<any>("/payments/verify", {
      method: "POST",
      body: JSON.stringify(paymentVerificationData),
    });
  }

  async getPaymentHistory(userId: string, page = 0, size = 10) {
    return this.request<PaginatedResponse<any>>(
      `/users/${userId}/payments?page=${page}&size=${size}`,
    );
  }

  // Admin endpoints
  async getAllUsers(params?: {
    search?: string;
    status?: string;
    page?: number;
    size?: number;
  }) {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, value.toString());
        }
      });
    }

    const queryString = queryParams.toString();
    return this.request<PaginatedResponse<any>>(
      `/admin/users${queryString ? `?${queryString}` : ""}`,
    );
  }

  async getAllSubscriptions(params?: {
    status?: string;
    page?: number;
    size?: number;
  }) {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, value.toString());
        }
      });
    }

    const queryString = queryParams.toString();
    return this.request<PaginatedResponse<any>>(
      `/admin/subscriptions${queryString ? `?${queryString}` : ""}`,
    );
  }

  async getAllOrders(params?: {
    status?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    size?: number;
  }) {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, value.toString());
        }
      });
    }

    const queryString = queryParams.toString();
    return this.request<PaginatedResponse<any>>(
      `/admin/orders${queryString ? `?${queryString}` : ""}`,
    );
  }

  async getAdminAnalytics(timeRange: string = "30d") {
    return this.request<any>(`/admin/analytics?timeRange=${timeRange}`);
  }

  async getDashboardStats() {
    return this.request<any>("/admin/dashboard");
  }

  async updateUserAsAdmin(userId: string, updates: any) {
    return this.request<any>(`/admin/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });
  }

  async deleteUserAsAdmin(userId: string) {
    return this.request<void>(`/admin/users/${userId}`, {
      method: "DELETE",
    });
  }

  async updateSubscriptionAsAdmin(subscriptionId: string, updates: any) {
    return this.request<any>(`/admin/subscriptions/${subscriptionId}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });
  }

  async updateOrderAsAdmin(orderId: string, updates: any) {
    return this.request<any>(`/admin/orders/${orderId}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });
  }

  // Product management (admin)
  async createProduct(productData: any) {
    return this.request<any>("/admin/products", {
      method: "POST",
      body: JSON.stringify(productData),
    });
  }

  async updateProduct(productId: string, updates: any) {
    return this.request<any>(`/admin/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });
  }

  async deleteProduct(productId: string) {
    return this.request<void>(`/admin/products/${productId}`, {
      method: "DELETE",
    });
  }

  async toggleProductStatus(productId: string) {
    return this.request<any>(`/admin/products/${productId}/toggle-status`, {
      method: "PATCH",
    });
  }

  // Subscription plan management (admin)
  async createSubscriptionPlan(planData: any) {
    return this.request<any>("/admin/subscription-plans", {
      method: "POST",
      body: JSON.stringify(planData),
    });
  }

  async updateSubscriptionPlan(planId: string, updates: any) {
    return this.request<any>(`/admin/subscription-plans/${planId}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });
  }

  async deleteSubscriptionPlan(planId: string) {
    return this.request<void>(`/admin/subscription-plans/${planId}`, {
      method: "DELETE",
    });
  }

  // Export data
  async exportData(
    type: "users" | "orders" | "subscriptions",
    format: "csv" | "excel",
  ) {
    const response = await fetch(
      `${this.baseURL}/admin/export/${type}?format=${format}`,
      {
        headers: this.getHeaders(),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to export ${type}`);
    }

    return response.blob();
  }
}

export const apiService = new ApiService();
export default apiService;
