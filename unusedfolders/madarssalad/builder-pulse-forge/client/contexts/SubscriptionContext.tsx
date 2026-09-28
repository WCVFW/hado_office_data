import React, { createContext, useContext, useState, ReactNode } from "react";

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  mealsPerDay: number;
  mealsPerWeek: number;
  features: string[];
  popular?: boolean;
}

export interface SubscriptionFormData {
  planId: string;
  selectedDays: string[];
  mealPreference: "veg" | "non-veg" | "mixed";
  deliveryAddress: {
    flatHouseNumber: string;
    streetAddress: string;
    city: string;
    state: string;
    pincode: string;
  };
  phoneNumber: string;
  specialInstructions?: string;
}

interface SubscriptionContextType {
  plans: SubscriptionPlan[];
  selectedPlan: SubscriptionPlan | null;
  formData: SubscriptionFormData;
  setSelectedPlan: (plan: SubscriptionPlan) => void;
  updateFormData: (data: Partial<SubscriptionFormData>) => void;
  resetForm: () => void;
}

const subscriptionPlans: SubscriptionPlan[] = [
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
  },
  {
    id: "2",
    name: "Family",
    description: "Ideal for families who want comprehensive meal coverage",
    price: 179,
    mealsPerDay: 3,
    mealsPerWeek: 21,
    popular: true,
    features: [
      "21 meals per week",
      "3 meals per day (Breakfast, Lunch & Dinner)",
      "Free delivery",
      "Priority support",
      "Custom meal preferences",
      "Family portion sizes",
      "Flexible scheduling",
    ],
  },
  {
    id: "3",
    name: "Premium",
    description: "Ultimate convenience with premium ingredients and services",
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
  },
];

const initialFormData: SubscriptionFormData = {
  planId: "",
  selectedDays: [],
  mealPreference: "mixed",
  deliveryAddress: {
    flatHouseNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    pincode: "",
  },
  phoneNumber: "",
  specialInstructions: "",
};

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(
  undefined,
);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(
    null,
  );
  const [formData, setFormData] =
    useState<SubscriptionFormData>(initialFormData);

  const updateFormData = (data: Partial<SubscriptionFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSelectedPlan(null);
  };

  const value: SubscriptionContextType = {
    plans: subscriptionPlans,
    selectedPlan,
    formData,
    setSelectedPlan,
    updateFormData,
    resetForm,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error(
      "useSubscription must be used within a SubscriptionProvider",
    );
  }
  return context;
}
