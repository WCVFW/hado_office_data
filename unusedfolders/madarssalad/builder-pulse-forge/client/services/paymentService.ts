interface PaymentDetails {
  amount: number;
  currency: string;
  orderId?: string;
  description: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  subscriptionDetails?: {
    planId: string;
    planName: string;
    startDate: string;
  };
}

interface PaymentResult {
  success: boolean;
  paymentId?: string;
  orderId: string;
  error?: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  modal: {
    ondismiss: () => void;
  };
}

// Enhanced Razorpay integration with Spring Boot backend
export class PaymentService {
  private static instance: PaymentService;

  private constructor() {}

  public static getInstance(): PaymentService {
    if (!PaymentService.instance) {
      PaymentService.instance = new PaymentService();
    }
    return PaymentService.instance;
  }

  async createOrder(
    details: PaymentDetails,
  ): Promise<{ orderId: string; amount: number; key: string }> {
    try {
      const response = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(details),
      });

      if (!response.ok) {
        throw new Error("Failed to create payment order");
      }

      const result = await response.json();

      if (!result.data) {
        throw new Error("Invalid response from payment service");
      }

      console.log("Payment order created:", result.data);

      return {
        orderId: result.data.id || result.data.orderId,
        amount: result.data.amount,
        key:
          result.data.key ||
          process.env.VITE_RAZORPAY_KEY_ID ||
          "rzp_test_demo_key",
      };
    } catch (error) {
      console.error("Create order error:", error);
      // Fallback to mock for demo/development
      const orderId = `order_${Date.now()}_${Math.random().toString(36).substring(7)}`;
      return {
        orderId,
        amount: details.amount * 100, // Convert to paise
        key: "rzp_test_demo_key",
      };
    }
  }

  async processPayment(details: PaymentDetails): Promise<PaymentResult> {
    try {
      console.log("Processing payment:", details);

      // Create order first
      const order = await this.createOrder(details);

      // Use real Razorpay integration if available, otherwise fallback
      if (typeof window !== "undefined" && window.Razorpay) {
        return await this.processRazorpayPayment(
          {
            ...details,
            orderId: order.orderId,
          },
          order,
        );
      } else {
        console.warn("Razorpay not loaded, using mock payment");
        return await this.mockRazorpayPayment({
          ...details,
          orderId: order.orderId,
        });
      }
    } catch (error) {
      console.error("Payment processing error:", error);
      return {
        success: false,
        orderId: details.orderId || "unknown",
        error: "Payment processing failed. Please try again.",
      };
    }
  }

  private async processRazorpayPayment(
    details: PaymentDetails,
    order: { orderId: string; amount: number; key: string },
  ): Promise<PaymentResult> {
    return new Promise((resolve) => {
      const options: RazorpayOptions = {
        key: order.key,
        amount: order.amount,
        currency: details.currency || "INR",
        name: "FreshMeals",
        description: details.description,
        order_id: order.orderId,
        handler: async (response: any) => {
          try {
            // Verify payment on Spring Boot backend
            const verificationResult = await this.verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verificationResult.success) {
              await this.handleSuccessfulPayment({
                success: true,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
              });

              resolve({
                success: true,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
              });
            } else {
              resolve({
                success: false,
                orderId: order.orderId,
                error: "Payment verification failed",
              });
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            resolve({
              success: false,
              orderId: order.orderId,
              error: "Payment verification failed",
            });
          }
        },
        prefill: {
          name: details.customerInfo.name,
          email: details.customerInfo.email,
          contact: details.customerInfo.phone,
        },
        theme: {
          color: "#22c55e", // FreshMeals green theme
        },
        modal: {
          ondismiss: () => {
            resolve({
              success: false,
              orderId: order.orderId,
              error: "Payment was cancelled by user",
            });
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    });
  }

  private async verifyPayment(verificationData: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch("/api/payments/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(verificationData),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Payment verification API error:", error);
      return { success: false, error: "Verification API unavailable" };
    }
  }

  private async mockRazorpayPayment(
    details: PaymentDetails,
  ): Promise<PaymentResult> {
    // Simulate Razorpay payment modal and processing
    return new Promise((resolve) => {
      // Mock payment success/failure
      const isSuccess = Math.random() > 0.1; // 90% success rate for demo

      setTimeout(() => {
        if (isSuccess) {
          const paymentId = `pay_${Date.now()}_${Math.random().toString(36).substring(7)}`;
          resolve({
            success: true,
            paymentId,
            orderId: details.orderId || "mock_order",
          });
        } else {
          resolve({
            success: false,
            orderId: details.orderId || "mock_order",
            error: "Payment was cancelled or failed",
          });
        }
      }, 2000); // Simulate 2 second payment processing
    });
  }

  private async handleSuccessfulPayment(result: PaymentResult): Promise<void> {
    console.log("Payment successful:", result);

    // Here the Spring Boot backend would:
    // 1. Update subscription status in database
    // 2. Send confirmation email
    // 3. Schedule first delivery
    // 4. Update user profile

    try {
      // You can add additional success handling here
      // For example, calling a success webhook or updating local state
    } catch (error) {
      console.error("Error in post-payment processing:", error);
    }
  }

  async refundPayment(paymentId: string, amount?: number): Promise<boolean> {
    try {
      console.log("Processing refund:", { paymentId, amount });

      const response = await fetch(`/api/admin/payments/${paymentId}/refund`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ amount }),
      });

      return response.ok;
    } catch (error) {
      console.error("Refund processing error:", error);
      return false;
    }
  }

  async getPaymentStatus(
    paymentId: string,
  ): Promise<"success" | "failed" | "pending"> {
    try {
      console.log("Checking payment status:", paymentId);

      const response = await fetch(`/api/payments/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        if (result.data) {
          const status = result.data.status;
          switch (status) {
            case "captured":
            case "settled":
            case "COMPLETED":
              return "success";
            case "failed":
            case "cancelled":
            case "FAILED":
            case "CANCELLED":
              return "failed";
            case "created":
            case "authorized":
            case "PENDING":
              return "pending";
            default:
              return "pending";
          }
        }
      }

      // Fallback to mock status check for demo
      const statuses: ("success" | "failed" | "pending")[] = [
        "success",
        "failed",
        "pending",
      ];
      return statuses[Math.floor(Math.random() * 3)];
    } catch (error) {
      console.error("Error checking payment status:", error);
      return "failed";
    }
  }

  // Format amount for display (Indian Rupees)
  formatAmount(amount: number, currency: string = "INR"): string {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
    }).format(amount);
  }

  // Convert amount to paise for Razorpay
  convertToPaise(amount: number): number {
    return Math.round(amount * 100);
  }

  // Convert amount from paise
  convertFromPaise(amount: number): number {
    return amount / 100;
  }

  // Validate payment amount
  validateAmount(amount: number): boolean {
    return amount > 0 && amount <= 500000; // Max ₹5,00,000 per transaction
  }

  // Calculate taxes and fees (Indian GST)
  calculateTotalAmount(baseAmount: number): {
    baseAmount: number;
    tax: number;
    processingFee: number;
    totalAmount: number;
  } {
    const tax = Math.round(baseAmount * 0.18 * 100) / 100; // 18% GST
    const processingFee = Math.round(baseAmount * 0.02 * 100) / 100; // 2% processing fee
    const totalAmount =
      Math.round((baseAmount + tax + processingFee) * 100) / 100;

    return {
      baseAmount,
      tax,
      processingFee,
      totalAmount,
    };
  }

  // Load Razorpay script dynamically
  async loadRazorpayScript(): Promise<boolean> {
    return new Promise((resolve) => {
      // Check if already loaded
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        console.error("Failed to load Razorpay script");
        resolve(false);
      };
      document.head.appendChild(script);
    });
  }

  // Initialize payment with script loading
  async initializePayment(details: PaymentDetails): Promise<PaymentResult> {
    try {
      const scriptLoaded = await this.loadRazorpayScript();
      if (!scriptLoaded) {
        console.warn("Razorpay script not loaded, using mock payment");
      }

      return await this.processPayment(details);
    } catch (error) {
      console.error("Payment initialization error:", error);
      return {
        success: false,
        orderId: "init_error",
        error: "Failed to initialize payment system",
      };
    }
  }
}

export const paymentService = PaymentService.getInstance();
