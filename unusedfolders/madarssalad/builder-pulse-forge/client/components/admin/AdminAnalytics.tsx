import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  Package,
  Calendar,
  Download,
  RefreshCw,
} from "lucide-react";

interface AnalyticsData {
  revenue: {
    total: number;
    growth: number;
    monthlyData: Array<{ month: string; amount: number }>;
  };
  subscriptions: {
    active: number;
    new: number;
    cancelled: number;
    growth: number;
  };
  orders: {
    total: number;
    completed: number;
    pending: number;
    growth: number;
  };
  customers: {
    total: number;
    new: number;
    retention: number;
    growth: number;
  };
}

export default function AdminAnalytics() {
  const [timeRange, setTimeRange] = useState("30d");
  const [loading, setLoading] = useState(false);

  // Mock analytics data - replace with actual API calls
  const analyticsData: AnalyticsData = {
    revenue: {
      total: 156780,
      growth: 15.3,
      monthlyData: [
        { month: "Jan", amount: 45200 },
        { month: "Feb", amount: 52100 },
        { month: "Mar", amount: 59480 },
      ],
    },
    subscriptions: {
      active: 823,
      new: 127,
      cancelled: 23,
      growth: 12.8,
    },
    orders: {
      total: 3456,
      completed: 3201,
      pending: 255,
      growth: 8.7,
    },
    customers: {
      total: 1247,
      new: 89,
      retention: 94.2,
      growth: 6.4,
    },
  };

  const refreshData = async () => {
    setLoading(true);
    // Mock data refresh
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  const StatCard = ({
    title,
    value,
    change,
    icon: Icon,
    format = "number",
    subtitle,
  }: any) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {format === "currency"
            ? `₹${value.toLocaleString()}`
            : format === "percentage"
              ? `${value}%`
              : value.toLocaleString()}
        </div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
        <p className="text-xs text-muted-foreground">
          {change > 0 ? (
            <span className="text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />+{change}%
            </span>
          ) : (
            <span className="text-red-600 flex items-center">
              <TrendingDown className="h-3 w-3 mr-1" />
              {change}%
            </span>
          )}{" "}
          from last period
        </p>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <p className="text-muted-foreground">
            Business insights and performance metrics
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={refreshData} disabled={loading}>
            <RefreshCw
              className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={analyticsData.revenue.total}
          change={analyticsData.revenue.growth}
          icon={DollarSign}
          format="currency"
        />
        <StatCard
          title="Active Subscriptions"
          value={analyticsData.subscriptions.active}
          change={analyticsData.subscriptions.growth}
          icon={Package}
          subtitle={`${analyticsData.subscriptions.new} new this month`}
        />
        <StatCard
          title="Total Orders"
          value={analyticsData.orders.total}
          change={analyticsData.orders.growth}
          icon={ShoppingCart}
          subtitle={`${analyticsData.orders.pending} pending`}
        />
        <StatCard
          title="Customer Retention"
          value={analyticsData.customers.retention}
          change={2.1}
          icon={Users}
          format="percentage"
          subtitle={`${analyticsData.customers.new} new customers`}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.revenue.monthlyData.map((data, index) => (
                <div
                  key={data.month}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm font-medium">{data.month}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: `${(data.amount / Math.max(...analyticsData.revenue.monthlyData.map((d) => d.amount))) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ₹{data.amount.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subscription Status</CardTitle>
            <CardDescription>Current subscription distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm">Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    {analyticsData.subscriptions.active}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {Math.round(
                      (analyticsData.subscriptions.active /
                        (analyticsData.subscriptions.active +
                          analyticsData.subscriptions.cancelled)) *
                        100,
                    )}
                    %
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="text-sm">New This Month</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    {analyticsData.subscriptions.new}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    +{analyticsData.subscriptions.growth}%
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-sm">Cancelled</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    {analyticsData.subscriptions.cancelled}
                  </span>
                  <Badge variant="destructive" className="text-xs">
                    {Math.round(
                      (analyticsData.subscriptions.cancelled /
                        (analyticsData.subscriptions.active +
                          analyticsData.subscriptions.cancelled)) *
                        100,
                    )}
                    %
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Completion Rate</span>
              <span className="font-semibold">
                {Math.round(
                  (analyticsData.orders.completed /
                    analyticsData.orders.total) *
                    100,
                )}
                %
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Average Order Value</span>
              <span className="font-semibold">₹453</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Delivery Success Rate</span>
              <span className="font-semibold">98.2%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Customers</span>
              <span className="font-semibold">
                {analyticsData.customers.total}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Avg. Lifetime Value</span>
              <span className="font-semibold">₹12,500</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Churn Rate</span>
              <span className="font-semibold">5.8%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Items</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Mediterranean Bowl</span>
              <Badge variant="secondary">234 orders</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Grilled Salmon</span>
              <Badge variant="secondary">198 orders</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Thai Curry</span>
              <Badge variant="secondary">176 orders</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Time-based Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Time-based Analysis
          </CardTitle>
          <CardDescription>Peak hours and delivery patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Peak Order Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">12:00 PM - 2:00 PM</span>
                  <span className="text-sm font-medium">45% of orders</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">6:00 PM - 8:00 PM</span>
                  <span className="text-sm font-medium">38% of orders</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">8:00 AM - 10:00 AM</span>
                  <span className="text-sm font-medium">17% of orders</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Busiest Days</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Monday</span>
                  <span className="text-sm font-medium">22% of deliveries</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Friday</span>
                  <span className="text-sm font-medium">19% of deliveries</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Wednesday</span>
                  <span className="text-sm font-medium">18% of deliveries</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
