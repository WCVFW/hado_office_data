import React, {
  useState,
  useEffect,
  ReactNode,
  FormEvent,
  ChangeEvent,
  useMemo,
} from "react";
import { useAuth } from "../context/AuthContext"; // Make sure this path is correct
import { useNavigate, Link } from "react-router-dom";
import { api } from "../services/api";
import Swal from "sweetalert2";
import { format } from "date-fns";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

// --- Icons (Inline SVGs for crisp rendering) ---
const Icons = {
  Dashboard: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  ),
  Commission: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  ),
  Wallet: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
      <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
    </svg>
  ),
  Badge: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78"></path>
    </svg>
  ),
  User: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  Gift: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 12 20 22 4 22 4 12"></polyline>
      <rect x="2" y="7" width="20" height="5"></rect>
      <line x1="12" y1="22" x2="12" y2="7"></line>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
    </svg>
  ),
  Help: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  ),
  Search: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  Bell: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  ),
  Settings: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  ),
  TrendingUp: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  ),
  // Quick Action Icons
  Mobile: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  ),
  DTH: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20L12 4"></path>
      <path d="M12 4L8 8"></path>
      <path d="M12 4L16 8"></path>
      <path d="M20 14a8 8 0 1 0-16 0"></path>
    </svg>
  ),
  Fastag: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5"></path>
      <path d="M19 12l-4 4"></path>
      <path d="M19 12l-4-4"></path>
      <path d="M5 12l4 4"></path>
      <path d="M5 12l4-4"></path>
    </svg>
  ),
  Bill: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  ),
  Travel: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h20"></path>
      <path d="M2 12l5-5"></path>
      <path d="M2 12l5 5"></path>
      <path d="M22 12l-5-5"></path>
      <path d="M22 12l-5 5"></path>
    </svg>
  ),
  AEPS: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12.9V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3.9"></path>
      <path d="M4 12.9V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.1"></path>
      <path d="M12 12h.01"></path>
      <path d="M8 12h.01"></path>
      <path d="M16 12h.01"></path>
    </svg>
  ),
  MoneyTransfer: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  ),
  Insurance: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
  PAN: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
      <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
  ),
  Loan: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
    </svg>
  ),
  Logout: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  ),
  Download: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  ),
  Alert: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  ),
  Transactions: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 4v6h6"></path>
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
    </svg>
  ),
};

// --- TypeScript Interfaces for Data ---
interface Transaction {
  plan_amount: any;
  operator: ReactNode;
  agent_commission: any;
  id: number;
  service: string;
  created_at: string;
  status: "COMPLETED" | "PENDING" | "FAILED";
  recharge_status: "SUCCESS" | "PENDING" | "FAILED";
  amount: number;
  cashback: number;
}

interface WalletTransaction {
  id: number;
  amount: number;
  type: "CREDIT" | "DEBIT";
  description: string;
  created_at: string;
}

interface DashboardData {
  walletBalance: number;
  kycStatus: "APPROVED" | "PENDING" | "REJECTED" | "NOT_UPLOADED";
  memberId: string;
  todaysSalesCount: number;
  todaysSalesTotal: number;
  totalCommissionEarned: number;
  pendingAlerts: number;
  recentTransactions: Transaction[];
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalTransactions: number;
}

interface KycData {
  status: "APPROVED" | "PENDING" | "REJECTED" | "NOT_UPLOADED";
  aadhaarUrl: string;
  panUrl: string;
}

const EmployeeDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [walletHistory, setWalletHistory] = useState<WalletTransaction[]>([]);
  const [walletPagination, setWalletPagination] = useState<Pagination | null>(
    null
  );
  const [transactionsHistory, setTransactionsHistory] = useState<Transaction[]>(
    []
  );
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { auth, refreshUser, logout } = useAuth();
  const [isAddMoneyModalOpen, setAddMoneyModalOpen] = useState(false);
  const [addMoneyAmount, setAddMoneyAmount] = useState<string>("");
  const [profileData, setProfileData] = useState({ name: "", email: "" });
  const [profileMessage, setProfileMessage] = useState({ type: "", text: "" });
  const [kycData, setKycData] = useState<KycData | null>(null);
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  // KYC Form State
  const [kycForm, setKycForm] = useState({ aadhaar: "", pan: "", address: "" });
  const [kycFiles, setKycFiles] = useState<{ [key: string]: File | null }>({
    aadhaarFile: null,
    panFile: null,
    addressFile: null,
  });
  const [kycMessage, setKycMessage] = useState({ type: "", text: "" });

  // Support Form State
  const [supportForm, setSupportForm] = useState({ subject: "", message: "" });
  const [supportMessage, setSupportMessage] = useState({ type: "", text: "" });

  const navigate = useNavigate();

  // This effect synchronizes the profile form with the authenticated user's data
  useEffect(() => {
    if (auth.user) {
      setProfileData({ name: auth.user.name, email: auth.user.email });
    }
  }, [auth.user]);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    const fetchAllData = async () => {
      try {
        const { data } = await api.get<DashboardData>("/dashboard/employee");
        setDashboardData(data);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
        setError("Could not load dashboard data. Please try again later.");
      }
    };

    const fetchKycData = async () => {
      if (auth.user) {
        try {
          const statusRes = await api.get("/kyc/status");
          const status = statusRes.data.kyc_status || "NOT_UPLOADED";

          setKycData({
            status: status,
            aadhaarUrl: `http://localhost:3000/api/kyc/image/${auth.user.id}/aadhaar`,
            panUrl: `http://localhost:3000/api/kyc/image/${auth.user.id}/pan`,
          });

          // Pre-fill form if data exists
          if (statusRes.data.aadhaar_number) {
            setKycForm({
              aadhaar: statusRes.data.aadhaar_number,
              pan: statusRes.data.pan_number,
              address: statusRes.data.address
            });
          }
        } catch (error) {
          console.error("Failed to fetch KYC data:", error);
        }
      }
    };


    const initData = async () => {
      if (auth.user) {
        setLoading(true);
        await Promise.all([fetchAllData(), fetchKycData()]);
        setLoading(false);
      }
    };

    initData();
  }, [auth.user, refreshUser]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // Fetch data for the transactions tab if it hasn't been fetched yet
    if (tab === "transactions" && transactionsHistory.length === 0) {
      fetchAllTransactions(1);
    }
    if (tab === "wallet" && walletHistory.length === 0) {
      fetchWalletHistory(1);
    }
  };

  const quickActions = [
    { label: "Recharge", icon: <Icons.Mobile />, path: "/recharge/mobile" },
    { label: "DTH", icon: <Icons.DTH />, path: "/recharge/dth" },
    { label: "FASTag", icon: <Icons.Fastag />, path: "/recharge/fastag" },
    {
      label: "Bill Payment",
      icon: <Icons.Bill />,
      path: "/recharge/electricity",
    },
    { label: "Travel", icon: <Icons.Travel />, path: "/travel/bus" },
    { label: "AEPS", icon: <Icons.AEPS />, path: "/money/aeps" },
  ];

  const fetchAllTransactions = async (page = 1) => {
    try {
      setLoading(true);
      setError(null); // Clear previous errors

      const { data } = await api.get(
        `/payment/transactions?page=${page}&limit=10`
      );

      setTransactionsHistory(data.transactions);
      setPagination(data.pagination);
    } catch (err) {
      console.error("Failed to fetch transactions history:", err);
      setError("Could not load transactions history.");
    } finally {
      setLoading(false);
    }
  };

  const fetchWalletHistory = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await api.get(`/wallet/history?page=${page}&limit=10`);

      setWalletHistory(data.transactions);
      setWalletPagination(data.pagination);
    } catch (err) {
      console.error("Failed to fetch wallet history:", err);
      setError("Could not load wallet history.");
    } finally {
      setLoading(false);
    }
  };

  const handleProfileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async (e: FormEvent) => {
    e.preventDefault();
    setProfileMessage({ type: "", text: "" }); // Clear previous message
    try {
      const { data } = await api.put("/auth/profile", profileData);

      if (refreshUser) {
        await refreshUser();
      }

      setProfileMessage({ type: "success", text: data.message });
    } catch (err: any) {
      console.error("Failed to update profile:", err);
      setProfileMessage({
        type: "error",
        text: err.response?.data?.message || "An error occurred.",
      });
    }
  };

  const openRazorpayForWallet = (orderData: any) => {
    if (!(window as any).Razorpay) {
      Swal.fire({
        icon: "error",
        title: "Payment Gateway Error",
        text: "Razorpay SDK not loaded. Please check your connection and try again.",
      });
      return;
    }

    const options = {
      key: (import.meta as any).env.VITE_RAZORPAY_KEY_ID || "rzp_test_v9bZpQvmrVnUzZ",
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Calzone Pay Wallet",
      description: "Add Money to Wallet",
      order_id: orderData.id,
      handler: async (response: any) => {
        try {
          console.log("Razorpay Response:", response);

          Swal.fire({
            title: 'Verifying Payment...',
            text: 'Please wait while we update your wallet.',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            }
          });

          // Call backend to verify payment and update wallet
          const payload = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.order_id || orderData.order_id,
            razorpay_signature: response.razorpay_signature || "bypass_signature_for_test",
          };

          await api.post('/payment/verify-wallet-topup', payload);

          if (refreshUser) await refreshUser();
          setAddMoneyModalOpen(false);
          // Refresh wallet history if on that tab
          if (activeTab === 'wallet') {
            fetchWalletHistory(1);
          }

          Swal.fire({
            icon: "success",
            title: "Payment Successful!",
            text: "Your wallet has been updated successfully.",
            timer: 2000,
            showConfirmButton: false
          });

        } catch (error: any) {
          console.error("Payment verification failed:", error);
          Swal.fire({
            icon: "error",
            title: "Verification Failed",
            text: error.response?.data?.message || "Payment verification failed. Please contact support.",
          });
        }
      },
      prefill: {
        name: auth.user?.name,
        email: auth.user?.email,
      },
      theme: {
        color: "#4338ca",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();

    rzp.on("payment.failed", function (response: any) {
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: response.error.description || "The payment could not be completed.",
      });
    });
  };

  const handleAddMoney = async () => {
    if (!addMoneyAmount || +addMoneyAmount <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Amount',
        text: 'Please enter a valid amount greater than 0.'
      });
      return;
    }
    setLoading(true);
    try {
      // 1. Create an order on your backend
      const { data } = await api.post("/payment/create-order", {
        amount: Number(addMoneyAmount),
      });
      // 2. Open payment gateway (e.g., Razorpay) with order details
      if (data.order_id) {
        openRazorpayForWallet(data);
      }
    } catch (err) {
      console.error("Failed to create payment order", err);
      Swal.fire({
        icon: 'error',
        title: 'Order Creation Failed',
        text: 'Could not initiate payment. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleWithdrawCommission = async () => {
    const commissionAmount = dashboardData?.totalCommissionEarned ?? 0;

    if (commissionAmount <= 0) {
      Swal.fire({
        icon: 'info',
        title: 'No Commission',
        text: 'You do not have any commission earnings to withdraw.'
      });
      return;
    }

    const result = await Swal.fire({
      title: 'Withdraw Commission?',
      text: `Are you sure you want to withdraw ₹${commissionAmount.toFixed(2)} to your main wallet?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#10b981',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Withdraw it!'
    });

    if (result.isConfirmed) {
      setIsWithdrawing(true);
      try {
        const { data } = await api.post("/wallet/withdraw-commission");

        await Swal.fire({
          icon: 'success',
          title: 'Withdrawal Successful!',
          text: data.message || 'Commission has been transferred to your main wallet.',
          timer: 2000,
          showConfirmButton: false
        });

        // Refresh dashboard data to show updated balances
        if (refreshUser) {
          await refreshUser();
        }
      } catch (err: any) {
        console.error("Failed to withdraw commission:", err);
        const errorMessage =
          err.response?.data?.message || "An error occurred during withdrawal.";

        Swal.fire({
          icon: 'error',
          title: 'Withdrawal Failed',
          text: errorMessage
        });
      } finally {
        setIsWithdrawing(false);
      }
    }
  };

  const handleLogout = () => {
    if (logout) {
      logout(); // This function should clear the auth token and user state
    }
    navigate('/login'); // Redirect to the login page
  };

  const handleDownloadInvoice = async (transactionId: number) => {
    try {
      const response = await api.get(`/payment/invoice/${transactionId}`, {
        responseType: "blob", // Important: tells axios to expect binary data
      });

      // Create a URL for the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a temporary link element to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `invoice-${transactionId}.pdf`);
      document.body.appendChild(link);
      link.click();

      // Clean up by removing the link and revoking the URL
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download invoice:", error);
      alert("Could not download the invoice. Please try again.");
    }
  };

  // --- KYC Handlers ---
  const handleKycInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setKycForm({ ...kycForm, [e.target.name]: e.target.value });
  };

  const handleKycFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setKycFiles({ ...kycFiles, [e.target.name]: e.target.files[0] });
    }
  };

  const handleKycSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setKycMessage({ type: "", text: "" });

    if (!kycForm.aadhaar || !kycForm.pan || !kycForm.address || !kycFiles.aadhaarFile || !kycFiles.panFile || !kycFiles.addressFile) {
      setKycMessage({ type: "error", text: "All fields and documents are required." });
      return;
    }

    const formData = new FormData();
    formData.append("aadhaar", kycForm.aadhaar);
    formData.append("pan", kycForm.pan);
    formData.append("address", kycForm.address);
    formData.append("aadhaarFile", kycFiles.aadhaarFile);
    formData.append("panFile", kycFiles.panFile);
    formData.append("addressFile", kycFiles.addressFile);

    try {
      setLoading(true);
      const { data } = await api.post("/kyc/submit-all", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setKycMessage({ type: "success", text: data.message });
      // Refresh KYC status
      if (refreshUser) refreshUser();
    } catch (err: any) {
      console.error("KYC submit error:", err);
      setKycMessage({ type: "error", text: err.response?.data?.message || "KYC submission failed." });
    } finally {
      setLoading(false);
    }
  };

  // --- Support Handler ---
  const handleSupportSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSupportMessage({ type: "", text: "" });

    // Simulate API call
    setTimeout(() => {
      setSupportMessage({ type: "success", text: "Ticket submitted successfully! We will contact you shortly." });
      setSupportForm({ subject: "", message: "" });
    }, 1000);
  };

  const AddMoneyModal = () => (
    <div className="modal-overlay" onClick={() => setAddMoneyModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Add Money to Wallet</h3>
          <button
            onClick={() => setAddMoneyModalOpen(false)}
            className="modal-close-btn"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="add-money-form">
            <label htmlFor="amount" className="form-label">
              Enter Amount
            </label>
            <div className="amount-input-wrapper">
              <span className="amount-symbol">₹</span>
              <input
                type="number"
                id="amount"
                className="amount-input"
                placeholder="0.00"
                value={addMoneyAmount}
                onChange={(e) => setAddMoneyAmount(e.target.value)}
              />
            </div>
            <div className="quick-amounts">
              {[100, 500, 1000].map((amount) => (
                <button
                  key={amount}
                  className="quick-amount-btn"
                  onClick={() =>
                    setAddMoneyAmount((current) =>
                      String((Number(current) || 0) + amount)
                    )
                  }
                >
                  + ₹{amount}
                </button>
              ))}
            </div>
            <button className="btn-primary-full" onClick={handleAddMoney}>
              Proceed to Add Money
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Calculate transaction summaries for charts
  const transactionSummary = useMemo(() => {
    if (!transactionsHistory || transactionsHistory.length === 0) {
      return { statusData: [], commissionByServiceData: [] };
    }

    const statusCounts = transactionsHistory.reduce((acc, tx) => {
      const status = tx.recharge_status ?? "UNKNOWN";
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const statusData = Object.entries(statusCounts).map(([name, value]) => ({
      name,
      value,
    }));

    const commissionByService = transactionsHistory.reduce((acc, tx) => {
      const service = tx.service || "Unknown Service";
      const commission = Number(tx.agent_commission) || 0;
      if (tx.recharge_status === 'SUCCESS' && commission > 0) {
        acc[service] = (acc[service] || 0) + commission;
      }
      return acc;
    }, {} as Record<string, number>);

    const commissionByServiceData = Object.entries(commissionByService).map(
      ([name, value]) => ({
        name,
        value: parseFloat(value.toFixed(2)),
      })
    );

    return { statusData, commissionByServiceData };
  }, [transactionsHistory]);

  // Calculate commission summary for the main dashboard overview
  const overviewCommissionSummary = useMemo(() => {
    if (!dashboardData?.recentTransactions || dashboardData.recentTransactions.length === 0) {
      return [];
    }

    const commissionByService = dashboardData.recentTransactions.reduce((acc, tx) => {
      if (tx.recharge_status === 'SUCCESS') {
        const service = tx.service || 'Unknown Service';
        const commission = Number(tx.agent_commission) || 0;
        acc[service] = (acc[service] || 0) + commission;
      }
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(commissionByService).map(([name, value]) => ({
      name,
      value: parseFloat(value.toFixed(2)),
    }));

  }, [dashboardData?.recentTransactions]);

  return (
    <>
      {/* INTERNAL CSS FOR MODERN DESIGN */}
      <style>{`
        /* --- Modern Dashboard CSS --- */
        :root {
          --primary-color: #4338ca; /* Indigo 700 */
          --primary-hover: #3730a3; /* Indigo 800 */
          --bg-main: #f9fafb; /* Lighter background */
          --bg-card: #ffffff;
          --text-main: #111827; /* Gray 900 */
          --text-muted: #6b7280; /* Gray 500 */
          --border-light: #e5e7eb; /* Gray 200 */
          --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

          /* Status Colors */
          --success-bg: #dcfce7; --success-text: #166534;
          --warning-bg: #fef9c3; --warning-text: #854d0e;
          --danger-bg: #fee2e2; --danger-text: #991b1b;
          --info-bg: #e0f2fe; --info-text: #075985;
        }

        body {
          font-family: 'Poppins', sans-serif;
          color: var(--text-main);
          background-color: var(--bg-main);
        }

        .dashboard-layout {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        /* --- Sidebar --- */
        .sidebar {
          width: 280px;
          background-color: white;
          border-right: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          z-index: 10;
        }

        .logo-section {
          padding: 24px 32px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .logo-icon {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 20px;
          box-shadow: 0 4px 12px rgba(67, 56, 202, 0.3);
        }

        .logo-text {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          letter-spacing: -0.5px;
        }

        .nav-list {
          padding: 24px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          color: var(--text-muted);
          font-size: 15px;
          font-weight: 500;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          text-align: left;
        }

        .nav-item:hover {
          background-color: #f3f4f6;
          color: var(--text-main);
        }

        .nav-item.active {
          background-color: #eef2ff;
          color: var(--primary-color);
          font-weight: 600;
        }

        .sidebar-footer {
          padding: 20px;
          border-top: 1px solid var(--border-light);
          background-color: #f9fafb;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar-img {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid white;
          box-shadow: var(--shadow-sm);
        }

        .user-name { font-size: 14px; font-weight: 600; color: #374151; }
        .user-role { font-size: 12px; color: #6b7280; }

        .logout-btn {
          margin-left: auto;
          color: #9ca3af;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .logout-btn:hover { color: var(--danger-text); }


        /* --- Main Content --- */
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background-color: var(--bg-main);
        }

        .top-header {
          height: 72px;
          background-color: white;
          border-bottom: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          padding: 0 40px;
          justify-content: space-between;
        }

        .search-wrapper {
          position: relative;
          width: 380px;
        }
        .search-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #9ca3af; }
        .search-input {
          width: 100%;
          padding: 10px 12px 10px 40px;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          background-color: #ffffff;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .search-input:focus {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(67, 56, 202, 0.1);
        }

        .header-tools {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .header-tools .icon-button {
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }

        .header-tools .icon-button:hover {
          background: #f3f4f6;
          color: var(--primary-color);
          border-color: var(--primary-color);
        }

        .notification-dot {
          position: absolute;
          top: 8px;
          right: 10px;
          width: 8px;
          height: 8px;
          background-color: #ef4444;
          border-radius: 50%;
        }

        .scroll-area {
          padding: 40px;
          overflow-y: auto;
          flex: 1;
        }

        .page-header { margin-bottom: 32px; }
        .page-title { font-size: 26px; font-weight: 700; color: #111827; margin-bottom: 8px; }
        .page-subtitle { color: #6b7280; font-size: 15px; }

        /* Cards & Stats */
        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }
        .stat-box {
          background: white;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }
        .stat-label { font-size: 14px; font-weight: 500; color: #6b7280; margin-bottom: 4px; }
        .stat-number { font-size: 28px; font-weight: 700; color: #111827; }

        .user-overview {
           background: linear-gradient(120deg, var(--primary-color), #4f46e5);
           color: white;
           border-radius: 16px;
           padding: 32px;
           margin-bottom: 40px;
           box-shadow: var(--shadow-md);
           position: relative;
           overflow: hidden;
        }
        /* Abstract circles for decoration */
        .user-overview::before {
             content: "";
             position: absolute;
             top: -50px;
             right: -50px;
             width: 200px;
             height: 200px;
             border-radius: 50%;
             background: rgba(255,255,255,0.1);
        }

        /* Buttons & Badges */
        .btn-primary-full {
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          width: 100%;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .btn-primary-full:hover { background-color: var(--primary-hover); }

        .btn-outline {
          background: white;
          border: 1px solid #d1d5db;
          color: #374151;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-outline:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          background: #fdfdfd;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 600;
          line-height: 1;
        }
        .badge-success, .badge-verified, .badge-completed, .badge-credit { background-color: var(--success-bg); color: var(--success-text); }
        .badge-pending, .badge-processing { background-color: var(--warning-bg); color: var(--warning-text); }
        .badge-failed, .badge-rubbish, .badge-rejected, .badge-debit { background-color: var(--danger-bg); color: var(--danger-text); }

        /* Dashboard Grid Layout (New) */
        .dashboard-grid-row {
          display: grid;
          grid-template-columns: 2fr 1fr; /* 2:1 split for Wallet vs Commission */
          gap: 24px;
          margin-bottom: 24px;
        }

        .user-overview-card, .commission-overview-card {
           border-radius: 16px;
           padding: 24px;
           color: white;
           position: relative;
           overflow: hidden;
           box-shadow: var(--shadow-md);
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           min-height: 220px;
        }

        .user-overview-card {
           background: linear-gradient(120deg, var(--primary-color), #4f46e5);
        }
        .user-overview-card::before {
             content: "";
             position: absolute;
             top: -60px;
             right: -60px;
             width: 200px;
             height: 200px;
             border-radius: 50%;
             background: rgba(255,255,255,0.1);
        }

        .commission-overview-card {
           background: linear-gradient(135deg, #059669 0%, #047857 100%); /* Emerald */
        }

        .overview-header {
           display: flex;
           justify-content: space-between;
           align-items: flex-start;
           margin-bottom: 16px;
        }
        .overview-header h3 {
           font-size: 16px;
           font-weight: 500;
           opacity: 0.9;
           margin: 0;
        }

        .wallet-display {
           margin-bottom: 16px;
        }
        .wallet-display .currency {
           font-size: 24px;
           font-weight: 500;
           opacity: 0.7;
           margin-right: 4px;
        }
        .wallet-display .amount {
           font-size: 38px;
           font-weight: 700;
           letter-spacing: -1px;
        }

        .member-id {
           font-size: 13px;
           opacity: 0.7;
           margin-bottom: 20px;
        }

        .wallet-actions-inline .btn-action-primary {
           background: white;
           color: var(--primary-color);
           border: none;
           padding: 10px 20px;
           border-radius: 8px;
           font-weight: 600;
           cursor: pointer;
           transition: transform 0.2s;
        }
        .wallet-actions-inline .btn-action-primary:hover {
           transform: translateY(-2px);
           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .commission-actions .btn-action-outline {
           background: rgba(255,255,255,0.2);
           color: white;
           border: 1px solid rgba(255,255,255,0.3);
           padding: 10px 20px;
           border-radius: 8px;
           font-weight: 600;
           cursor: pointer;
           width: 100%;
           transition: background 0.2s;
        }
        .commission-actions .btn-action-outline:hover {
           background: rgba(255,255,255,0.3);
        }

        /* Quick Actions Grid */
        .quick-actions-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
           gap: 16px;
           margin-bottom: 32px;
        }

        .action-card {
           background: white;
           padding: 20px 10px;
           border-radius: 12px;
           border: 1px solid var(--border-light);
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           cursor: pointer;
           transition: all 0.2s;
           box-shadow: var(--shadow-sm);
           height: 100%;
        }
        .action-card:hover {
           border-color: var(--primary-color);
           transform: translateY(-3px);
           box-shadow: var(--shadow-md);
           background: #fdfdfd;
        }
        .action-icon {
           color: var(--primary-color);
           margin-bottom: 8px;
           display: flex;
           align-items: center;
           justify-content: center;
        }
        .action-icon svg {
           width: 24px;
           height: 24px;
        }
        .action-label {
           font-size: 13px;
           font-weight: 600;
           text-align: center;
           color: #374151;
           line-height: 1.3;
        }

        /* Quick Actions - Section Header */
        .section-header { margin: 32px 0 16px; }
        .section-title { font-size: 18px; font-weight: 600; color: #111827; }

        /* Dashboard Split Grid (Bottom) */
        .dashboard-split-grid {
           display: grid;
           grid-template-columns: 2fr 1fr; /* 2:1 for Table vs Chart */
           gap: 24px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
           .dashboard-grid-row, .dashboard-split-grid {
              grid-template-columns: 1fr; /* Stack on mobile/tablet */
           }
        }

        /* Tables */
        .table-card {
           background: white;
           border: 1px solid var(--border-light);
           border-radius: 12px;
           box-shadow: var(--shadow-sm);
           overflow: hidden;
           margin-bottom: 24px;
        }
        .table-header { padding: 20px 24px; border-bottom: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; }
        .table-title { font-size: 18px; font-weight: 600; color: #111827; }

        .data-table { width: 100%; border-collapse: collapse; }
        .data-table th {
            text-align: left;
            padding: 12px 24px;
            background-color: #f9fafb;
            color: #6b7280;
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 1px solid var(--border-light);
        }
        .data-table td {
            padding: 16px 24px;
            border-bottom: 1px solid var(--border-light);
            color: #374151;
            font-size: 14px;
        }
        .data-table tr:last-child td { border-bottom: none; }
        .data-table tr:hover td { background-color: #f9fafb; }

        .amount-cell { font-family: 'Inter', sans-serif; font-weight: 600; }
        
        /* Forms */
        .form-label { display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 6px; }
        .form-control, .form-input {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid #d1d5db; /* Gray 300 */
            border-radius: 8px;
            font-size: 15px;
            color: #111827;
            outline: none;
            transition: border-color 0.15s, box-shadow 0.15s;
        }
        .form-control:focus, .form-input:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(67, 56, 202, 0.1);
        }



        /* Wallet Summary Card */
        .wallet-summary-card {
            background: linear-gradient(105deg, var(--primary-color) 0%, #4338ca 100%);
            color: white;
            border-radius: 16px;
            padding: 32px;
            margin-bottom: 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .wallet-balance-section .balance-label {
            font-size: 16px;
            opacity: 0.8;
            margin-bottom: 8px;
        }
        .wallet-balance-section .balance-amount {
            font-size: 48px;
            font-weight: 700;
            letter-spacing: -1px;
        }
        .wallet-actions .btn-wallet-action {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 12px 24px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }
        .wallet-actions .btn-wallet-action:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        .wallet-actions {
            display: flex;
            gap: 16px;
        }

        /* Add Money Modal */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .modal-content {
            background: white;
            border-radius: 16px;
            width: 100%;
            animation: modal-fade-in 0.3s ease-out;
            max-width: 420px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .modal-header {
            padding: 20px 24px;
            border-bottom: 1px solid var(--border-light);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .modal-title { font-size: 18px; font-weight: 600; }
        .modal-close-btn { font-size: 28px; color: var(--text-muted); background: none; border: none; cursor: pointer; line-height: 1; }
        .modal-body { padding: 24px; }
        .form-label { font-size: 14px; font-weight: 500; color: var(--text-muted); margin-bottom: 8px; display: block; }
        .amount-input-wrapper { display: flex; align-items: center; border: 1px solid var(--border-light); border-radius: 12px; margin-bottom: 16px; }
        .amount-input-wrapper:focus-within { border-color: var(--primary-color); box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1); }
        .amount-symbol { font-size: 24px; font-weight: 600; color: var(--text-muted); padding-left: 16px; }
        .amount-input { border: none; outline: none; background: transparent; padding: 16px; font-size: 32px; font-weight: 700; width: 100%; }
        .quick-amounts { display: flex; gap: 12px; margin-bottom: 24px; }
        .quick-amount-btn { flex: 1; background: #f3f4f6; border: 1px solid var(--border-light); border-radius: 8px; padding: 10px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .quick-amount-btn:hover { background: #eef2ff; color: var(--primary-color); border-color: var(--primary-color); }
        .btn-primary-full {
            width: 100%;
            background: var(--primary-color);
            color: white;
            padding: 16px;
            border-radius: 12px;
            border: none;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }
        .btn-primary-full:hover { background: var(--primary-hover); }


        /* Profile Page Styles */
        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .form-group { margin-bottom: 20px; }
        .form-input {
            width: 100%;
            padding: 12px 16px;
            border-radius: 12px;
            border: 1px solid var(--border-light);
            background-color: #f9fafb;
            font-size: 14px;
            outline: none;
            transition: all 0.2s;
        }
        .form-input:focus {
            background-color: #fff;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
        .form-footer {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 12px;
            padding: 20px 24px;
            border-top: 1px solid var(--border-light);
        }
        .profile-message {
            padding: 10px 16px;
            border-radius: 8px;
            font-size: 14px;
        }
        .profile-message.success { background-color: var(--success-bg); color: var(--success-text); }
        .profile-message.error { background-color: var(--danger-bg); color: var(--danger-text); }

        @keyframes modal-fade-in {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Wallet Actions */
        .btn-wallet-action {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }
        .btn-wallet-action:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .sidebar {
            transform: translateX(-100%);
          }
          .main-content {
            margin-left: 0;
            width: 100%;
          }
          .search-wrapper {
            width: 250px;
          }
        }
      `}</style>
      {/* KYC Document Styles */}
      <style>{`
        .kyc-docs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            padding: 24px;
        }
        .doc-card {
            border: 1px solid var(--border-light);
            border-radius: 12px;
            padding: 16px;
        }
        .doc-card-header { font-weight: 600; margin-bottom: 12px; }
        .doc-image-placeholder {
            width: 100%;
            height: 180px;
            background-color: #f3f4f6;
            border-radius: 8px;
            overflow: hidden; /* To contain the image */
        }
        .doc-image-placeholder img { width: 100%; height: 100%; object-fit: cover; }
      `}</style>

      <div className="dashboard-layout">
        {isAddMoneyModalOpen && <AddMoneyModal />}
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo-section">
            {/* <div className="logo-icon">V</div> */}
            <span className="logo-text">Calzone Pay</span>
          </div>

          <nav className="nav-list">
            <button
              className={`nav-item ${activeTab === "dashboard" ? "active" : ""
                }`}
              onClick={() => handleTabClick("dashboard")}
            >
              <Icons.Dashboard /> Overview
            </button>
            <button
              className={`nav-item ${activeTab === "recharge" ? "active" : ""}`}
              onClick={() => {
                if (dashboardData?.kycStatus === "APPROVED") {
                  handleTabClick("recharge");
                } else {
                  alert("KYC Pending. Please complete your KYC verification to access this service.");
                }
              }}
            >
              <Icons.Bill /> Recharge & Bills
            </button>
            <button
              className={`nav-item ${activeTab === "wallet" ? "active" : ""}`}
              onClick={() => handleTabClick("wallet")}
            >
              <Icons.Wallet /> Wallet
            </button>
            <button
              className={`nav-item ${activeTab === "transactions" ? "active" : ""
                }`}
              onClick={() => handleTabClick("transactions")}
            >
              <Icons.Transactions /> Transactions
            </button>
            <button
              className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => handleTabClick("profile")}
            >
              <Icons.User /> Profile & KYC
            </button>
            <button
              className={`nav-item ${activeTab === "support" ? "active" : ""}`}
              onClick={() => handleTabClick("support")}
            >
              <Icons.Help /> Support
            </button>
          </nav>

          <div className="sidebar-footer">
            <div className="user-profile">
              <img
                src={`https://ui-avatars.com/api/?name=${auth.user?.name}&background=4f46e5&color=fff`}
                alt="User"
                className="avatar-img"
              />
              <div className="user-details">
                <p className="user-name">{auth.user?.name || "User"}</p>
                <p className="user-role">{auth.user?.role || "User"}</p>
              </div>
              <button
                className="icon-button logout-btn"
                onClick={handleLogout}
              >
                <Icons.Logout />
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          {/* Top Navigation Header */}
          <header className="top-header">
            <div className="search-wrapper">
              <span className="search-icon">
                <Icons.Search />
              </span>
              <input
                type="text"
                className="search-input"
                placeholder="Search transactions, customers..."
              />
            </div>

            <div className="header-tools">
              <button className="icon-button">
                <Icons.Bell />
                <span className="notification-dot"></span>
              </button>
              <button className="icon-button">
                <Icons.Settings />
              </button>
            </div>
          </header>

          {/* Scrollable Dashboard Body */}
          <div className="scroll-area">
            {activeTab === "dashboard" && (
              <>
                <div className="page-header">
                  <h1 className="page-title">Dashboard</h1>
                  <p className="page-subtitle">
                    Welcome back, {auth.user?.name?.split(" ")[0]}. Here's
                    what's happening with your account today.
                  </p>
                </div>

                {/* KYC Warning Banner */}
                {dashboardData?.kycStatus !== 'APPROVED' && (
                  <div style={{
                    background: '#fff1f2', // Rose 50
                    border: '1px solid #f43f5e', // Rose 500
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '32px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    boxShadow: '0 4px 6px -1px rgba(244, 63, 94, 0.1)'
                  }}>
                    <div style={{ color: '#e11d48', marginTop: '2px' }}>
                      <Icons.Alert />
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 700, color: '#be123c' }}>
                        Account Restricted: KYC Verification Required
                      </h4>
                      <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.5', color: '#9f1239' }}>
                        Your account is currently <strong>{dashboardData?.kycStatus || 'PENDING'}</strong>.
                        To access Recharge, Bill Payments, and Wallet services, you must complete your KYC verification.
                        <br />
                        <span
                          onClick={() => handleTabClick('profile')}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            marginTop: '12px',
                            color: '#be123c',
                            fontWeight: 600,
                            textDecoration: 'underline',
                            cursor: 'pointer'
                          }}
                        >
                          Go to Profile & KYC to upload documents &rarr;
                        </span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Top Section: Wallet & Commission */}
                <div className="dashboard-grid-row">
                  {/* Left: Main Wallet & Identity */}
                  <div className="user-overview-card">
                    <div className="overview-header">
                      <h3>Main Wallet</h3>
                      <span className={`badge badge-${dashboardData?.kycStatus.toLowerCase()}`}>
                        {dashboardData?.kycStatus ?? "N/A"}
                      </span>
                    </div>
                    <div className="wallet-display">
                      <span className="currency">₹</span>
                      <span className="amount">
                        {loading ? "..." : Number(dashboardData?.walletBalance).toFixed(2) ?? "0.00"}
                      </span>
                    </div>
                    <div className="member-id">
                      Member ID: {dashboardData?.memberId ?? "N/A"}
                    </div>
                    <div className="wallet-actions-inline">
                      <button className="btn-action-primary" onClick={() => setAddMoneyModalOpen(true)}>+ Add Money</button>
                    </div>
                  </div>

                  {/* Right: Commission Wallet */}
                  <div className="commission-overview-card">
                    <div className="overview-header">
                      <h3>Commission Wallet</h3>
                      <div className="icon-wrapper"><Icons.Commission /></div>
                    </div>
                    <div className="wallet-display">
                      <span className="currency">₹</span>
                      <span className="amount">
                        {loading ? "..." : Number(dashboardData?.totalCommissionEarned).toFixed(2) ?? "0.00"}
                      </span>
                    </div>
                    <div className="commission-actions">
                      <button
                        className="btn-action-outline"
                        onClick={handleWithdrawCommission}
                        disabled={isWithdrawing || (dashboardData?.totalCommissionEarned ?? 0) <= 0}
                      >
                        {isWithdrawing ? "Processing..." : "Withdraw to Wallet"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="section-header">
                  <h2 className="section-title">Quick Actions</h2>
                </div>
                <div className="quick-actions-grid">
                  {quickActions.map((action) => {
                    const isKycVerified = dashboardData?.kycStatus === "APPROVED";
                    return isKycVerified ? (
                      <Link
                        key={action.label}
                        to={action.path}
                        className="action-card"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="action-icon">{action.icon}</div>
                        <span className="action-label">{action.label}</span>
                      </Link>
                    ) : (
                      <div
                        key={action.label}
                        className="action-card"
                        onClick={() => alert("KYC Pending. Please complete your KYC verification to access this service.")}
                        style={{ cursor: "pointer", opacity: 0.7 }}
                      >
                        <div className="action-icon">{action.icon}</div>
                        <span className="action-label">{action.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Widgets Row */}
                <div className="stats-container">
                  {/* Today's Transactions */}
                  <div className="stat-box">
                    <div className="stat-top">
                      <span className="stat-label">Today's Transactions</span>
                      <div className="stat-icon-wrapper icon-blue">
                        <Icons.Transactions />
                      </div>
                    </div>
                    <div className="stat-number">
                      {loading ? "..." : dashboardData?.todaysSalesCount ?? 0}
                    </div>
                    <div className="stat-footer">
                      <span className="trend-neutral">
                        Updated in real-time
                      </span>
                    </div>
                  </div>

                  {/* Monthly Summary */}
                  <div className="stat-box">
                    <div className="stat-top">
                      <span className="stat-label">Monthly Summary</span>
                      <div className="stat-icon-wrapper icon-purple">
                        <Icons.Commission />
                      </div>
                    </div>
                    <div className="stat-number">
                      ₹
                      {loading
                        ? "..."
                        : Number(dashboardData?.todaysSalesTotal).toFixed(2) ?? "0.00"}
                    </div>
                    <div className="stat-footer">
                      <span className="trend-neutral">
                        For {format(new Date(), "MMMM")}
                      </span>
                    </div>
                  </div>

                  {/* Failed/Pending Alerts */}
                  <div className="stat-box">
                    <div className="stat-top">
                      <span className="stat-label">
                        Pending / Failed Alerts
                      </span>
                      <div className="stat-icon-wrapper icon-orange">
                        <Icons.Alert />
                      </div>
                    </div>
                    <div className="stat-number">
                      {loading ? "..." : dashboardData?.pendingAlerts ?? 0}
                    </div>
                    <button
                      className="btn-text-link"
                      onClick={() => handleTabClick("transactions")}
                      style={{ color: "#ea580c", fontSize: "13px", fontWeight: "600", border: 'none', background: 'none', padding: 0, marginTop: '8px', cursor: 'pointer' }}
                    >
                      View Issues &rarr;
                    </button>
                  </div>
                </div>

                {/* Main Data Split: Table & Chart */}
                <div className="dashboard-split-grid">
                  {/* Left: Recent Activity Table */}
                  <div className="table-card">
                    <div className="table-header">
                      <h3 className="table-title">Recent Activity</h3>
                      <button
                        className="btn-outline"
                        onClick={() => handleTabClick("transactions")}
                      >
                        View All
                      </button>
                    </div>
                    <div className="table-wrapper">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>Service</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Receipt</th>
                          </tr>
                        </thead>
                        <tbody>
                          {loading ? (
                            <tr><td colSpan={4} className="text-center p-4">Loading...</td></tr>
                          ) : (dashboardData?.recentTransactions?.length ?? 0) === 0 ? (
                            <tr><td colSpan={4} className="text-center p-4">No recent activity.</td></tr>
                          ) : (
                            dashboardData?.recentTransactions?.slice(0, 5).map((tx) => (
                              <tr key={tx.id}>
                                <td>
                                  <div style={{ fontWeight: '500' }}>{tx.service}</div>
                                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{format(new Date(tx.created_at), "MMM dd, h:mm a")}</div>
                                </td>
                                <td className="amount-cell">₹{Number(tx.amount).toFixed(2)}</td>
                                <td>
                                  <span className={`badge badge-${tx.recharge_status.toLowerCase()}`}>
                                    {tx.recharge_status}
                                  </span>
                                </td>
                                <td>
                                  <button className="icon-button" style={{ width: '32px', height: '32px' }} onClick={() => handleDownloadInvoice(tx.id)}>
                                    <Icons.Download />
                                  </button>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Right: Commission Chart */}
                  <div className="table-card">
                    <div className="table-header">
                      <h3 className="table-title">Commission</h3>
                    </div>
                    <div style={{ height: "300px", padding: "16px", position: "relative" }}>
                      {overviewCommissionSummary.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={overviewCommissionSummary}
                              dataKey="value"
                              nameKey="name"
                              cx="50%"
                              cy="50%"
                              outerRadius={70}
                              innerRadius={40}
                              paddingAngle={5}
                            >
                              {overviewCommissionSummary.map((entry, index) => {
                                // Vibrant modern palette
                                const COLORS = ["#6366f1", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
                                return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />;
                              })}
                            </Pie>
                            <Tooltip formatter={(value: any) => `₹${Number(value).toFixed(2)}`} />
                            <Legend verticalAlign="bottom" height={36} />
                          </PieChart>
                        </ResponsiveContainer>
                      ) : (
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--text-muted)', textAlign: 'center' }}>
                          <p style={{ fontSize: '14px' }}>No commission data yet.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "recharge" && (
              <>
                <div className="page-header">
                  <h1 className="page-title">Recharge & Bill Payments</h1>
                  <p className="page-subtitle">
                    Pay for all your essential services in one place.
                  </p>
                </div>
                <div className="quick-actions-grid" style={{ padding: '20px' }}>
                  {[
                    { label: "Mobile", icon: <Icons.Mobile />, path: "/recharge/mobile" },
                    { label: "DTH", icon: <Icons.DTH />, path: "/recharge/dth" },
                    { label: "Electricity", icon: <Icons.Bill />, path: "/recharge/electricity" },
                    { label: "Water", icon: <Icons.Bill />, path: "/recharge/water" },
                    { label: "Piped Gas", icon: <Icons.Bill />, path: "/recharge/gas" },
                    { label: "Broadband", icon: <Icons.Bill />, path: "/recharge/broadband" },
                    { label: "Landline Bill", icon: <Icons.Bill />, path: "/recharge/landline" },
                    { label: "FASTag", icon: <Icons.Fastag />, path: "/recharge/fastag" },
                    { label: "LPG Booking", icon: <Icons.Bill />, path: "/recharge/lpg" },
                    { label: "Insurance", icon: <Icons.Insurance />, path: "/recharge/insurance" },
                    { label: "Education", icon: <Icons.Loan />, path: "/recharge/education" },
                    { label: "Municipal Tax", icon: <Icons.Badge />, path: "/recharge/municipal" },
                  ].map((action) => (
                    <Link
                      key={action.label}
                      to={action.path}
                      className="action-card"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="action-icon">{action.icon}</div>
                      <span className="action-label">{action.label}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {activeTab === "wallet" && (
              <>
                <div className="page-header">
                  <h1 className="page-title">Wallet & Transactions</h1>
                  <p className="page-subtitle">
                    Manage your funds and view your complete transaction
                    history.
                  </p>
                </div>

                <div className="wallet-summary-card">
                  <div className="wallet-balance-section">
                    <div className="balance-label">Available Balance</div>
                    <div className="balance-amount">
                      ₹
                      {loading
                        ? "..."
                        : Number(dashboardData?.walletBalance).toFixed(2) ?? "0.00"}
                    </div>
                  </div>
                  <div className="wallet-actions">
                    <button
                      className="btn-wallet-action"
                      onClick={() => setAddMoneyModalOpen(true)}
                    >
                      + Add Money
                    </button>
                    <button
                      className="btn-wallet-action"
                      onClick={() =>
                        alert("Withdraw functionality coming soon!")
                      }
                    >
                      Withdraw
                    </button>
                  </div>
                </div>
                {/* Wallet History Table */}
                <div className="table-card">
                  <div className="table-header">
                    <h3 className="table-title">Wallet History</h3>
                  </div>
                  <div className="table-wrapper">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Description</th>
                          <th>Type</th>
                          <th style={{ textAlign: "right" }}>Amount</th>
                        </tr>
                      </thead>
                      {loading ? (
                        <tbody>
                          <tr>
                            <td
                              colSpan={4}
                              style={{ textAlign: "center", padding: "40px" }}
                            >
                              Loading...
                            </td>
                          </tr>
                        </tbody>
                      ) : error ? (
                        <tbody>
                          <tr>
                            <td
                              colSpan={4}
                              style={{
                                textAlign: "center",
                                padding: "40px",
                                color: "red",
                              }}
                            >
                              {error}
                            </td>
                          </tr>
                        </tbody>
                      ) : (
                        <tbody>
                          {walletHistory.map((tx) => (
                            <tr key={tx.id}>
                              <td style={{ color: "#6b7280" }}>
                                {format(
                                  new Date(tx.created_at),
                                  "MMM dd, yyyy, h:mm a"
                                )}
                              </td>
                              <td>{tx.description}</td>
                              <td>
                                <span
                                  className={`badge badge-${tx.type === "CREDIT"
                                    ? "completed"
                                    : "failed"
                                    }`}
                                >
                                  {tx.type}
                                </span>
                              </td>
                              <td
                                className="amount-cell"
                                style={{
                                  textAlign: "right",
                                  color:
                                    tx.type === "CREDIT"
                                      ? "#16a34a"
                                      : "#991b1b",
                                }}
                              >
                                {tx.type === "CREDIT" ? "+" : "-"} ₹
                                {Number(tx.amount).toFixed(2)}
                              </td>
                            </tr>
                          ))}
                          {walletHistory.length === 0 && (
                            <tr>
                              <td
                                colSpan={4}
                                style={{ textAlign: "center", padding: "40px" }}
                              >
                                No wallet transactions found.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      )}
                    </table>
                  </div>
                  {/* Pagination for Wallet History */}
                  {walletPagination && walletPagination.totalPages > 1 && (
                    <div className="pagination-controls">
                      <span className="pagination-info">
                        Page {walletPagination.currentPage} of{" "}
                        {walletPagination.totalPages}
                      </span>
                      <div className="pagination-buttons">
                        <button
                          className="btn-outline"
                          onClick={() =>
                            fetchWalletHistory(walletPagination.currentPage - 1)
                          }
                          disabled={walletPagination.currentPage <= 1}
                        >
                          Previous
                        </button>
                        <button
                          className="btn-outline"
                          onClick={() =>
                            fetchWalletHistory(walletPagination.currentPage + 1)
                          }
                          disabled={
                            walletPagination.currentPage >=
                            walletPagination.totalPages
                          }
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {activeTab === "transactions" && (
              <>
                <div className="page-header">
                  <h1 className="page-title">All Transactions</h1>
                  <p className="page-subtitle">
                    A complete record of all your account activity.
                  </p>
                </div>

                <div className="table-card">
                  <div className="table-wrapper">
                    <table className="data-table">
                      {/* Table structure is the same as recent activity */}
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Service</th>
                          <th style={{ textAlign: "right" }}>Amount</th>
                          <th>Commission</th>
                          <th>Status</th>
                          <th>Invoice</th>
                        </tr>
                      </thead>
                      {/* Table Body for History */}
                      {loading ? (
                        <tbody>
                          <tr>
                            <td
                              colSpan={6}
                              style={{ textAlign: "center", padding: "40px" }}
                            >
                              Loading Transactions...
                            </td>
                          </tr>
                        </tbody>
                      ) : error ? (
                        <tbody>
                          <tr>
                            <td
                              colSpan={6}
                              style={{
                                textAlign: "center",
                                padding: "40px",
                                color: "red",
                              }}
                            >
                              {error}
                            </td>
                          </tr>
                        </tbody>
                      ) : (
                        <tbody>
                          {transactionsHistory.map((tx) => (
                            <tr key={tx.id}>
                              <td style={{ color: "#6b7280" }}>
                                {format(
                                  new Date(tx.created_at),
                                  "MMM dd, yyyy, h:mm a"
                                )}
                              </td>
                              <td>{tx.operator}</td>
                              <td
                                className="amount-cell"
                                style={{ textAlign: "right" }}
                              >
                                ₹{Number(tx.plan_amount).toFixed(2)}
                              </td>
                              <td
                                className="amount-cell"
                                style={{ color: "#16a34a" }}
                              >
                                ₹{Number(tx.agent_commission).toFixed(2)}
                              </td>
                              <td>
                                <span
                                  className={`badge badge-${tx.recharge_status.toLowerCase()}`}
                                >
                                  {tx.recharge_status}
                                </span>
                              </td>
                              <td>
                                <button
                                  className="icon-button"
                                  style={{ width: "36px", height: "36px" }}
                                  onClick={() => handleDownloadInvoice(tx.id)}
                                >
                                  <Icons.Download />
                                </button>
                              </td>
                            </tr>
                          ))}
                          {transactionsHistory.length === 0 && (
                            <tr>
                              <td
                                colSpan={6}
                                style={{ textAlign: "center", padding: "40px" }}
                              >
                                No transactions found.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      )}
                    </table>
                  </div>
                  {/* Pagination Controls */}
                  {pagination && pagination.totalPages > 1 && (
                    <div className="pagination-controls">
                      <span className="pagination-info">
                        Page {pagination.currentPage} of {pagination.totalPages}
                      </span>
                      <div className="pagination-buttons">
                        <button
                          className="btn-outline"
                          onClick={() =>
                            fetchAllTransactions(pagination.currentPage - 1)
                          }
                          disabled={pagination.currentPage <= 1}
                        >
                          Previous
                        </button>
                        <button
                          className="btn-outline"
                          onClick={() =>
                            fetchAllTransactions(pagination.currentPage + 1)
                          }
                          disabled={
                            pagination.currentPage >= pagination.totalPages
                          }
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Transaction Summary Charts Section */}
                {transactionsHistory.length > 0 && (
                  <div
                    className="stats-container"
                    style={{ marginTop: "32px" }}
                  >
                    {/* Status Breakdown Pie Chart */}
                    <div className="table-card">
                      <div className="table-header">
                        <h3 className="table-title">Status Breakdown</h3>
                      </div>
                      <div style={{ height: "300px", padding: "24px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={transactionSummary.statusData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              nameKey="name"
                              label={(entry) => `${entry.name}: ${entry.value}`}
                            >
                              {transactionSummary.statusData.map(
                                (entry, index) => (
                                  <Cell
                                    key={`cell-${index}`}
                                    fill={
                                      {
                                        SUCCESS: "#22c55e", // green-500
                                        PENDING: "#f59e0b", // amber-500
                                        FAILED: "#ef4444", // red-500
                                      }[entry.name] || "#6b7280"
                                    } // gray-500
                                  />
                                )
                              )}
                            </Pie>
                            <Tooltip />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Commission by Service Pie Chart */}
                    <div className="table-card">
                      <div className="table-header">
                        <h3 className="table-title">Commission by Service</h3>
                      </div>
                      <div style={{ height: "300px", padding: "24px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={transactionSummary.commissionByServiceData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              nameKey="name"
                              label={(entry) => `₹${entry.value}`}
                            >
                              {transactionSummary.commissionByServiceData.map(
                                (entry, index) => {
                                  const COLORS = [
                                    "#0ea5e9",
                                    "#8b5cf6",
                                    "#14b8a6",
                                    "#f97316",
                                    "#ec4899",
                                  ];
                                  return (
                                    <Cell
                                      key={`cell-${index}`}
                                      fill={COLORS[index % COLORS.length]}
                                    />
                                  );
                                }
                              )}
                            </Pie>
                            <Tooltip formatter={(value: any) => `₹${Number(value).toFixed(2)}`} />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {activeTab === "profile" && (
              <>
                <div className="page-header">
                  <h1 className="page-title">Profile & KYC</h1>
                  <p className="page-subtitle">
                    Manage your personal information and complete your KYC.
                  </p>
                </div>
                <div className="table-card" style={{ marginBottom: "32px" }}>
                  <div className="table-header">
                    <h3 className="table-title">Personal Information</h3>
                  </div>
                  <form onSubmit={handleUpdateProfile}>
                    <div style={{ padding: "24px" }}>
                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            value={profileData.name}
                            onChange={handleProfileInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            value={profileData.email}
                            onChange={handleProfileInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-footer">
                      {profileMessage.text && (
                        <span
                          className={`profile-message ${profileMessage.type}`}
                        >
                          {profileMessage.text}
                        </span>
                      )}
                      <button
                        type="submit"
                        className="btn-outline"
                        style={{
                          backgroundColor: "var(--primary-color)",
                          color: "white",
                          borderColor: "var(--primary-color)",
                        }}
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>

                {/* Verified KYC Details - Show if approved */}
                {kycData?.status === "APPROVED" && (
                  <div className="table-card" style={{ marginTop: "32px" }}>
                    <div className="table-header">
                      <h3 className="table-title">Verified KYC Documents</h3>
                      <span className="badge badge-approved">VERIFIED</span>
                    </div>
                    <div className="kyc-docs-grid">
                      <div className="doc-card">
                        <div className="doc-card-header">Aadhaar Card</div>
                        <div className="doc-image-placeholder">
                          {kycData.aadhaarUrl ? (
                            <iframe src={kycData.aadhaarUrl} title="Aadhaar" style={{ width: '100%', height: '100%', border: 'none' }} />
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>No document</div>
                          )}
                        </div>
                        <div style={{ marginTop: '12px', textAlign: 'center' }}>
                          <a href={kycData.aadhaarUrl} target="_blank" rel="noopener noreferrer" className="btn-text-link">View Full Document</a>
                        </div>
                      </div>
                      <div className="doc-card">
                        <div className="doc-card-header">PAN Card</div>
                        <div className="doc-image-placeholder">
                          {kycData.panUrl ? (
                            <iframe src={kycData.panUrl} title="PAN" style={{ width: '100%', height: '100%', border: 'none' }} />
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>No document</div>
                          )}
                        </div>
                        <div style={{ marginTop: '12px', textAlign: 'center' }}>
                          <a href={kycData.panUrl} target="_blank" rel="noopener noreferrer" className="btn-text-link">View Full Document</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* KYC Upload Form - Only show if not approved */}
                {(kycData?.status === "PENDING" || kycData?.status === "NOT_UPLOADED" || kycData?.status === "REJECTED") && (
                  <div className="table-card" style={{ marginTop: "32px" }}>
                    <div className="table-header">
                      <h3 className="table-title">Submit KYC Documents</h3>
                    </div>
                    <form onSubmit={handleKycSubmit} style={{ padding: "24px" }}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Aadhaar Number</label>
                          <input type="text" name="aadhaar" className="form-control form-input" value={kycForm.aadhaar} onChange={handleKycInputChange} placeholder="Enter 12-digit Aadhaar" maxLength={12} required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">PAN Number</label>
                          <input type="text" name="pan" className="form-control form-input" value={kycForm.pan} onChange={handleKycInputChange} placeholder="Enter PAN Number" maxLength={10} required />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Full Address</label>
                          <textarea name="address" className="form-control form-input" rows={3} value={kycForm.address} onChange={handleKycInputChange} placeholder="Enter your full address" required></textarea>
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Upload Aadhaar (Front & Back)</label>
                          {kycData?.status !== "NOT_UPLOADED" && (
                            <div className="mb-2">
                              <a href={kycData?.aadhaarUrl} target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-underline" style={{ fontSize: '13px' }}>View Current Aadhaar</a>
                            </div>
                          )}
                          <input type="file" name="aadhaarFile" className="form-control form-input" onChange={handleKycFileChange} accept="image/*,.pdf" required={kycData?.status === "NOT_UPLOADED"} />
                          <small className="text-muted d-block mt-1">Max 5MB (JPG, PNG, PDF)</small>
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Upload PAN Card</label>
                          {kycData?.status !== "NOT_UPLOADED" && (
                            <div className="mb-2">
                              <a href={kycData?.panUrl} target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-underline" style={{ fontSize: '13px' }}>View Current PAN</a>
                            </div>
                          )}
                          <input type="file" name="panFile" className="form-control form-input" onChange={handleKycFileChange} accept="image/*,.pdf" required={kycData?.status === "NOT_UPLOADED"} />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Upload Address Proof</label>
                          {kycData?.status !== "NOT_UPLOADED" && (
                            <div className="mb-2">
                              <a href={`/api/kyc/image/${auth.user?.id}/address`} target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-underline" style={{ fontSize: '13px' }}>View Current Address Proof</a>
                            </div>
                          )}
                          <input type="file" name="addressFile" className="form-control form-input" onChange={handleKycFileChange} accept="image/*,.pdf" required={kycData?.status === "NOT_UPLOADED"} />
                        </div>
                      </div>


                      <div className="form-footer mt-4">
                        {kycMessage.text && <div className={`alert ${kycMessage.type === 'success' ? 'alert-success' : 'alert-danger'} w-100 mb-3`}>{kycMessage.text}</div>}
                        <button type="submit" className="btn-primary-full" disabled={loading}>
                          {loading ? "Submitting..." : "Submit KYC Documents"}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </>
            )}

            {activeTab === "support" && (
              <>
                <div className="page-header">
                  <h1 className="page-title">Help & Support</h1>
                  <p className="page-subtitle">
                    Get help with your account and transactions.
                  </p>
                </div>
                <div className="table-card">
                  <div className="table-header">
                    <h3 className="table-title">Contact Support</h3>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <form onSubmit={handleSupportSubmit}>
                      <div className="row g-3">
                        <div className="col-12">
                          <label className="form-label">Subject</label>
                          <input
                            type="text"
                            className="form-control form-input"
                            placeholder="Briefly describe your issue"
                            value={supportForm.subject}
                            onChange={(e) => setSupportForm({ ...supportForm, subject: e.target.value })}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Message</label>
                          <textarea
                            className="form-control form-input"
                            rows={5}
                            placeholder="Detailed explanation of your issue..."
                            value={supportForm.message}
                            onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-footer mt-4">
                        {supportMessage.text && <div className={`alert ${supportMessage.type === 'success' ? 'alert-success' : 'alert-danger'} w-100 mb-3`}>{supportMessage.text}</div>}
                        <button type="submit" className="btn-primary-full">
                          Submit Ticket
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="table-card" style={{ marginTop: "32px" }}>
                  <div className="table-header">
                    <h3 className="table-title">Frequently Asked Questions</h3>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <details style={{ marginBottom: "16px", cursor: "pointer" }}>
                      <summary style={{ fontWeight: "600", marginBottom: "8px" }}>How do I add money to my wallet?</summary>
                      <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>Go to the Wallet tab and click on "Add Money". You can use UPI, Credit Card, or Net Banking via Razorpay.</p>
                    </details>
                    <details style={{ marginBottom: "16px", cursor: "pointer" }}>
                      <summary style={{ fontWeight: "600", marginBottom: "8px" }}>When will my commission be credited?</summary>
                      <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>Commissions are credited to your Commission Wallet immediately after a successful transaction. You can withdraw them to your main wallet anytime.</p>
                    </details>
                    <details style={{ marginBottom: "16px", cursor: "pointer" }}>
                      <summary style={{ fontWeight: "600", marginBottom: "8px" }}>My recharge failed but money was deducted.</summary>
                      <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>If a recharge fails, the amount is usually refunded to your wallet instantly. If not, please raise a support ticket with the Transaction ID.</p>
                    </details>
                  </div>
                </div>
              </>
            )}
          </div>
        </main >
      </div >
    </>
  );
};

export default EmployeeDashboard;
