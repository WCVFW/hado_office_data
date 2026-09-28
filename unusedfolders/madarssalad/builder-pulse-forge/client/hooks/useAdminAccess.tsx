import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";

export interface AdminUser {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  role: "user" | "admin";
  createdAt: string;
  subscriptionStatus: "active" | "paused" | "cancelled" | "none";
  totalOrders: number;
  totalSpent: number;
  lastLogin?: string;
}

export interface AdminSubscription {
  id: string;
  userId: string;
  customerName: string;
  planName: string;
  price: number;
  status: "active" | "paused" | "cancelled";
  startDate: string;
  nextDelivery: string;
  deliveryDays: string[];
  mealPreference: string;
}

export interface AdminOrder {
  id: string;
  userId: string;
  customerName: string;
  customerEmail: string;
  items: Array<{
    productName: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  status: "scheduled" | "preparing" | "in-transit" | "delivered" | "cancelled";
  orderDate: string;
  deliveryDate: string;
  paymentStatus: "pending" | "completed" | "failed" | "refunded";
}

export interface AdminAnalytics {
  overview: {
    totalUsers: number;
    activeSubscriptions: number;
    totalRevenue: number;
    totalOrders: number;
    monthlyGrowth: number;
  };
  revenue: {
    daily: Array<{ date: string; amount: number }>;
    monthly: Array<{ month: string; amount: number }>;
    yearly: Array<{ year: string; amount: number }>;
  };
  subscriptions: {
    byStatus: { active: number; paused: number; cancelled: number };
    byPlan: Array<{ planName: string; count: number }>;
    churnRate: number;
  };
  orders: {
    byStatus: { delivered: number; pending: number; cancelled: number };
    averageOrderValue: number;
    deliverySuccessRate: number;
  };
}

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export function useAdminAccess() {
  const { user, isAdmin } = useAuth();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [subscriptions, setSubscriptions] = useState<AdminSubscription[]>([]);
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [analytics, setAnalytics] = useState<AdminAnalytics | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAuthHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  });

  // Fetch all users
  const fetchUsers = async (searchTerm?: string, status?: string) => {
    if (!isAdmin) return;

    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchTerm) params.append("search", searchTerm);
      if (status) params.append("status", status);

      const response = await fetch(`${API_BASE_URL}/admin/users?${params}`, {
        headers: getAuthHeaders(),
      });

      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to load users");
      // Mock data fallback
      setUsers([
        {
          id: "1",
          fullName: "John Doe",
          email: "john@example.com",
          phoneNumber: "+1234567890",
          role: "user",
          createdAt: "2024-01-15",
          subscriptionStatus: "active",
          totalOrders: 15,
          totalSpent: 450.0,
          lastLogin: "2024-01-20",
        },
        {
          id: "2",
          fullName: "Jane Smith",
          email: "jane@example.com",
          phoneNumber: "+1234567891",
          role: "user",
          createdAt: "2024-02-10",
          subscriptionStatus: "paused",
          totalOrders: 8,
          totalSpent: 280.0,
          lastLogin: "2024-02-15",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all subscriptions
  const fetchSubscriptions = async (status?: string) => {
    if (!isAdmin) return;

    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (status) params.append("status", status);

      const response = await fetch(
        `${API_BASE_URL}/admin/subscriptions?${params}`,
        {
          headers: getAuthHeaders(),
        },
      );

      if (!response.ok) throw new Error("Failed to fetch subscriptions");
      const data = await response.json();
      setSubscriptions(data);
    } catch (err) {
      console.error("Error fetching subscriptions:", err);
      setError("Failed to load subscriptions");
    } finally {
      setLoading(false);
    }
  };

  // Fetch all orders
  const fetchOrders = async (
    status?: string,
    dateFrom?: string,
    dateTo?: string,
  ) => {
    if (!isAdmin) return;

    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (status) params.append("status", status);
      if (dateFrom) params.append("dateFrom", dateFrom);
      if (dateTo) params.append("dateTo", dateTo);

      const response = await fetch(`${API_BASE_URL}/admin/orders?${params}`, {
        headers: getAuthHeaders(),
      });

      if (!response.ok) throw new Error("Failed to fetch orders");
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  // Fetch analytics data
  const fetchAnalytics = async (timeRange: string = "30d") => {
    if (!isAdmin) return;

    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/admin/analytics?timeRange=${timeRange}`,
        {
          headers: getAuthHeaders(),
        },
      );

      if (!response.ok) throw new Error("Failed to fetch analytics");
      const data = await response.json();
      setAnalytics(data);
    } catch (err) {
      console.error("Error fetching analytics:", err);
      setError("Failed to load analytics");
      // Mock analytics data
      setAnalytics({
        overview: {
          totalUsers: 1247,
          activeSubscriptions: 823,
          totalRevenue: 156780,
          totalOrders: 3456,
          monthlyGrowth: 12.5,
        },
        revenue: {
          daily: [],
          monthly: [
            { month: "Jan", amount: 45200 },
            { month: "Feb", amount: 52100 },
            { month: "Mar", amount: 59480 },
          ],
          yearly: [],
        },
        subscriptions: {
          byStatus: { active: 823, paused: 156, cancelled: 89 },
          byPlan: [
            { planName: "Essential", count: 234 },
            { planName: "Family", count: 456 },
            { planName: "Premium", count: 133 },
          ],
          churnRate: 5.8,
        },
        orders: {
          byStatus: { delivered: 3201, pending: 255, cancelled: 45 },
          averageOrderValue: 45.3,
          deliverySuccessRate: 98.2,
        },
      });
    } finally {
      setLoading(false);
    }
  };

  // Update user
  const updateUser = async (userId: string, updates: Partial<AdminUser>) => {
    if (!isAdmin) throw new Error("Unauthorized");

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(updates),
      });

      if (!response.ok) throw new Error("Failed to update user");
      const updatedUser = await response.json();

      setUsers((prev) =>
        prev.map((user) => (user.id === userId ? updatedUser : user)),
      );

      return updatedUser;
    } catch (err) {
      console.error("Error updating user:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const deleteUser = async (userId: string) => {
    if (!isAdmin) throw new Error("Unauthorized");

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });

      if (!response.ok) throw new Error("Failed to delete user");

      setUsers((prev) => prev.filter((user) => user.id !== userId));
    } catch (err) {
      console.error("Error deleting user:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update order status
  const updateOrderStatus = async (orderId: string, status: string) => {
    if (!isAdmin) throw new Error("Unauthorized");

    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/admin/orders/${orderId}/status`,
        {
          method: "PUT",
          headers: getAuthHeaders(),
          body: JSON.stringify({ status }),
        },
      );

      if (!response.ok) throw new Error("Failed to update order status");
      const updatedOrder = await response.json();

      setOrders((prev) =>
        prev.map((order) => (order.id === orderId ? updatedOrder : order)),
      );

      return updatedOrder;
    } catch (err) {
      console.error("Error updating order status:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update subscription status
  const updateSubscriptionStatus = async (
    subscriptionId: string,
    status: string,
  ) => {
    if (!isAdmin) throw new Error("Unauthorized");

    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/admin/subscriptions/${subscriptionId}/status`,
        {
          method: "PUT",
          headers: getAuthHeaders(),
          body: JSON.stringify({ status }),
        },
      );

      if (!response.ok) throw new Error("Failed to update subscription status");
      const updatedSubscription = await response.json();

      setSubscriptions((prev) =>
        prev.map((sub) =>
          sub.id === subscriptionId ? updatedSubscription : sub,
        ),
      );

      return updatedSubscription;
    } catch (err) {
      console.error("Error updating subscription status:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Export data
  const exportData = async (
    type: "users" | "orders" | "subscriptions",
    format: "csv" | "excel",
  ) => {
    if (!isAdmin) throw new Error("Unauthorized");

    try {
      const response = await fetch(
        `${API_BASE_URL}/admin/export/${type}?format=${format}`,
        {
          headers: getAuthHeaders(),
        },
      );

      if (!response.ok) throw new Error(`Failed to export ${type}`);

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${type}_${new Date().toISOString().split("T")[0]}.${format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error(`Error exporting ${type}:`, err);
      throw err;
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetchAnalytics();
    }
  }, [isAdmin]);

  return {
    users,
    subscriptions,
    orders,
    analytics,
    loading,
    error,
    fetchUsers,
    fetchSubscriptions,
    fetchOrders,
    fetchAnalytics,
    updateUser,
    deleteUser,
    updateOrderStatus,
    updateSubscriptionStatus,
    exportData,
    isAuthorized: isAdmin,
  };
}
