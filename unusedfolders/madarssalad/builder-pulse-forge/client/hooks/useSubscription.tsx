import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  mealsPerDay: number;
  mealsPerWeek: number;
  features: string[];
  isActive: boolean;
}

export interface UserSubscription {
  id: string;
  userId: string;
  planId: string;
  plan: SubscriptionPlan;
  status: "active" | "paused" | "cancelled";
  startDate: string;
  endDate?: string;
  nextDeliveryDate: string;
  deliveryDays: string[];
  mealPreference: "veg" | "non-veg" | "mixed";
  deliveryAddress: {
    id: string;
    flatHouseNumber: string;
    streetAddress: string;
    city: string;
    state: string;
    pincode: string;
  };
  pauseHistory: Array<{
    id: string;
    pausedDate: string;
    resumedDate?: string;
    reason: string;
  }>;
}

export interface Order {
  id: string;
  userId: string;
  subscriptionId?: string;
  orderDate: string;
  deliveryDate: string;
  status: "scheduled" | "preparing" | "in-transit" | "delivered" | "cancelled";
  items: Array<{
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  paymentStatus: "pending" | "completed" | "failed" | "refunded";
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
}

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export function useSubscription() {
  const { user, isAuthenticated } = useAuth();
  const [subscriptions, setSubscriptions] = useState<UserSubscription[]>([]);
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch subscription plans
  const fetchPlans = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/subscription-plans`);
      if (!response.ok) throw new Error("Failed to fetch plans");
      const data = await response.json();
      setPlans(data);
    } catch (err) {
      console.error("Error fetching plans:", err);
      // Fallback to mock data
      setPlans([
        {
          id: "1",
          name: "Essential",
          description:
            "Perfect for individuals looking to start their healthy eating journey",
          price: 99,
          mealsPerDay: 2,
          mealsPerWeek: 10,
          features: [
            "10 meals per week",
            "2 meals per day (Lunch & Dinner)",
            "Free delivery",
            "Skip or pause anytime",
            "Basic meal customization",
          ],
          isActive: true,
        },
        {
          id: "2",
          name: "Family",
          description:
            "Ideal for families who want comprehensive meal coverage",
          price: 179,
          mealsPerDay: 3,
          mealsPerWeek: 21,
          features: [
            "21 meals per week",
            "3 meals per day (Breakfast, Lunch & Dinner)",
            "Free delivery",
            "Priority support",
            "Custom meal preferences",
            "Family portion sizes",
            "Flexible scheduling",
          ],
          isActive: true,
        },
        {
          id: "3",
          name: "Premium",
          description:
            "Ultimate convenience with premium ingredients and services",
          price: 259,
          mealsPerDay: 5,
          mealsPerWeek: 35,
          features: [
            "35 meals per week",
            "5 meals per day (all meals + snacks)",
            "Premium organic ingredients",
            "Personal nutrition coach",
            "24/7 concierge support",
            "Same-day delivery",
            "Custom chef consultations",
          ],
          isActive: true,
        },
      ]);
    }
  };

  // Fetch user subscriptions
  const fetchUserSubscriptions = async () => {
    if (!isAuthenticated || !user) return;

    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/users/${user.id}/subscriptions`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
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

  // Fetch user orders
  const fetchUserOrders = async () => {
    if (!isAuthenticated || !user) return;

    try {
      const response = await fetch(`${API_BASE_URL}/users/${user.id}/orders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch orders");
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  // Create new subscription
  const createSubscription = async (subscriptionData: {
    planId: string;
    deliveryDays: string[];
    mealPreference: string;
    deliveryAddressId: string;
    startDate: string;
  }) => {
    if (!isAuthenticated || !user) throw new Error("User not authenticated");

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/subscriptions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          ...subscriptionData,
          userId: user.id,
        }),
      });

      if (!response.ok) throw new Error("Failed to create subscription");
      const newSubscription = await response.json();
      setSubscriptions((prev) => [...prev, newSubscription]);
      return newSubscription;
    } catch (err) {
      console.error("Error creating subscription:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Pause subscription
  const pauseSubscription = async (subscriptionId: string, reason: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/subscriptions/${subscriptionId}/pause`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ reason }),
        },
      );

      if (!response.ok) throw new Error("Failed to pause subscription");
      const updatedSubscription = await response.json();

      setSubscriptions((prev) =>
        prev.map((sub) =>
          sub.id === subscriptionId ? updatedSubscription : sub,
        ),
      );

      return updatedSubscription;
    } catch (err) {
      console.error("Error pausing subscription:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Resume subscription
  const resumeSubscription = async (
    subscriptionId: string,
    resumeDate: string,
  ) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/subscriptions/${subscriptionId}/resume`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ resumeDate }),
        },
      );

      if (!response.ok) throw new Error("Failed to resume subscription");
      const updatedSubscription = await response.json();

      setSubscriptions((prev) =>
        prev.map((sub) =>
          sub.id === subscriptionId ? updatedSubscription : sub,
        ),
      );

      return updatedSubscription;
    } catch (err) {
      console.error("Error resuming subscription:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Cancel subscription
  const cancelSubscription = async (subscriptionId: string, reason: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/subscriptions/${subscriptionId}/cancel`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ reason }),
        },
      );

      if (!response.ok) throw new Error("Failed to cancel subscription");
      const updatedSubscription = await response.json();

      setSubscriptions((prev) =>
        prev.map((sub) =>
          sub.id === subscriptionId ? updatedSubscription : sub,
        ),
      );

      return updatedSubscription;
    } catch (err) {
      console.error("Error cancelling subscription:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update subscription
  const updateSubscription = async (
    subscriptionId: string,
    updates: Partial<UserSubscription>,
  ) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/subscriptions/${subscriptionId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(updates),
        },
      );

      if (!response.ok) throw new Error("Failed to update subscription");
      const updatedSubscription = await response.json();

      setSubscriptions((prev) =>
        prev.map((sub) =>
          sub.id === subscriptionId ? updatedSubscription : sub,
        ),
      );

      return updatedSubscription;
    } catch (err) {
      console.error("Error updating subscription:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchUserSubscriptions();
      fetchUserOrders();
    }
  }, [isAuthenticated, user]);

  return {
    subscriptions,
    plans,
    orders,
    loading,
    error,
    createSubscription,
    pauseSubscription,
    resumeSubscription,
    cancelSubscription,
    updateSubscription,
    refreshSubscriptions: fetchUserSubscriptions,
    refreshOrders: fetchUserOrders,
  };
}
