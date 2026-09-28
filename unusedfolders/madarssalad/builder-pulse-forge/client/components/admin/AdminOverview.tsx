"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Calendar,
  CreditCard,
  Package,
  TrendingUp,
  UserPlus,
  FileDown,
  AlertTriangle,
} from "lucide-react";

// Must match backend keys
interface OverviewStats {
  totalUsers: number;
  activeSubscriptions: number;
  pausedSubscriptions: number;
  totalOrders: number;
  monthlyRevenue: number;
  newSignupsThisWeek: number;
  totalProducts: number;
  todayDeliveries: number;
  todayCancellations: number;
  pendingPayments: number;
  csvExportsToday: number;
}

const AdminOverview = () => {
  const [stats, setStats] = useState<OverviewStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOverviewStats();
  }, []);

  const fetchOverviewStats = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/admin/dashboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // include cookies/session if Spring Security requires
      });

      if (!res.ok) throw new Error("Failed to fetch dashboard stats");

      const data = await res.json();

      // ✅ Map backend response to frontend
      setStats({
        totalUsers: data.totalUsers ?? 0,
        activeSubscriptions: data.activeSubscriptions ?? 0,
        pausedSubscriptions: data.subscriptionStatusCounts?.PAUSED ?? 0,
        totalOrders: data.totalOrders ?? 0,
        monthlyRevenue: data.totalRevenue ?? 0,
        newSignupsThisWeek: data.newUsersThisWeek ?? 0,
        totalProducts: data.totalProducts ?? 0,
        todayDeliveries: data.orderStatusCounts?.IN_TRANSIT ?? 0,
        todayCancellations: data.orderStatusCounts?.CANCELLED ?? 0,
        pendingPayments: data.pendingPayments ?? 0,
        csvExportsToday: data.csvExportsToday ?? 0,
      });
    } catch (error) {
      console.error("Error loading dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !stats) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="h-4 bg-muted rounded w-24 animate-pulse" />
                <div className="h-4 w-4 bg-muted rounded animate-pulse" />
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-muted rounded w-16 animate-pulse mb-1" />
                <div className="h-3 bg-muted rounded w-32 animate-pulse" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Main metric cards
  const statCards = [
    { title: "Total Users", value: stats.totalUsers, icon: Users, description: "Registered customers" },
    { title: "Active Subscriptions", value: stats.activeSubscriptions, icon: Calendar, description: "Currently active plans" },
    { title: "Paused Subscriptions", value: stats.pausedSubscriptions, icon: Calendar, description: "Temporarily paused" },
    { title: "Total Orders", value: stats.totalOrders, icon: TrendingUp, description: "All time orders" },
    { title: "Monthly Revenue", value: `₹${stats.monthlyRevenue.toLocaleString()}`, icon: CreditCard, description: "This month's earnings" },
    { title: "New Signups", value: stats.newSignupsThisWeek, icon: UserPlus, description: "This week" },
    { title: "Total Products", value: stats.totalProducts, icon: Package, description: "Available items" },
  ];

  // Daily summary
  const dailySummaryCards = [
    { title: "Today's Active Deliveries", value: stats.todayDeliveries, icon: Package, description: "Scheduled for today" },
    { title: "Today's Cancellations", value: stats.todayCancellations, icon: AlertTriangle, description: "Cancelled today" },
    { title: "Pending Payments", value: stats.pendingPayments, icon: CreditCard, description: "Awaiting payment" },
    { title: "CSV Exported Orders", value: stats.csvExportsToday, icon: FileDown, description: "Today's exports" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Dashboard Overview</h2>
        <p className="text-muted-foreground">Key metrics for your business (live from DB)</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Daily Summary */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Daily Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dailySummaryCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Card key={i} className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-foreground">{card.value}</div>
                  <p className="text-xs text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
