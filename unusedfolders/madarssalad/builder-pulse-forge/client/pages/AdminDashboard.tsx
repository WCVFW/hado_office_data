import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
  Users,
  ShoppingCart,
  CreditCard,
  TrendingUp,
  Search,
  Eye,
  Edit,
  Trash2,
  Download,
  Plus,
  MoreHorizontal,
  Calendar,
  Package,
  DollarSign,
  Activity,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AdminAnalytics from "@/components/admin/AdminAnalytics";
import ProductManagement from "@/components/admin/ProductManagement";
import AdminOverview from "@/components/admin/AdminOverview";
import AdminUsers from "@/components/admin/AdminUsers";
import adminService, {
  DashboardStats,
  User,
  Order,
  Subscription,
} from "@/services/adminService";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(
    null,
  );
  const [users, setUsers] = useState<User[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedStatus, setSelectedStatus] = useState("all");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  useEffect(() => {
    if (activeTab === "users") {
      fetchUsers();
    } else if (activeTab === "orders") {
      fetchOrders();
    } else if (activeTab === "subscriptions") {
      fetchSubscriptions();
    }
  }, [activeTab, currentPage, selectedStatus]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const stats = await adminService.getDashboardStats();
      setDashboardStats(stats);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      // Fallback to demo data
      setDashboardStats({
        totalUsers: 1247,
        totalOrders: 3456,
        activeSubscriptions: 823,
        totalProducts: 120,
        totalRevenue: 156780,
        subscriptionRevenue: 89320,
        orderStatusCounts: {
          DELIVERED: 2800,
          IN_TRANSIT: 350,
          PREPARING: 200,
          SCHEDULED: 106,
        },
        subscriptionStatusCounts: {
          ACTIVE: 823,
          PAUSED: 89,
          CANCELLED: 45,
          EXPIRED: 12,
        },
        recentOrdersCount: 156,
        recentRevenue: 15600,
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await adminService.getUsers(currentPage, 20, searchTerm);
      setUsers(response.content);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
      // Fallback to demo data
      setUsers([
        {
          id: "1",
          fullName: "John Doe",
          email: "john@example.com",
          phoneNumber: "+1234567890",
          role: "USER",
          isActive: true,
          emailVerified: true,
          createdAt: "2024-01-15T10:00:00",
          lastLogin: "2024-01-20T15:30:00",
        },
        {
          id: "2",
          fullName: "Jane Smith",
          email: "jane@example.com",
          phoneNumber: "+1234567891",
          role: "USER",
          isActive: true,
          emailVerified: false,
          createdAt: "2024-02-10T09:15:00",
          lastLogin: "2024-02-15T12:45:00",
        },
      ]);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await adminService.getOrders(
        currentPage,
        20,
        selectedStatus,
      );
      setOrders(response.content);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Error fetching orders:", error);
      // Fallback to demo data
      setOrders([
        {
          id: "1001",
          orderNumber: "ORD1001",
          user: {
            id: "1",
            fullName: "John Doe",
            email: "john@example.com",
          },
          status: "DELIVERED",
          paymentStatus: "COMPLETED",
          totalAmount: 29.98,
          orderDate: "2024-01-10",
          deliveryDate: "2024-01-12",
          createdAt: "2024-01-10T10:00:00",
          orderItems: [
            {
              product: { name: "Mediterranean Bowl", price: 14.99 },
              quantity: 1,
              price: 14.99,
            },
            {
              product: { name: "Grilled Salmon", price: 14.99 },
              quantity: 1,
              price: 14.99,
            },
          ],
        },
      ]);
    }
  };

  const fetchSubscriptions = async () => {
    try {
      const response = await adminService.getSubscriptions(
        currentPage,
        20,
        selectedStatus,
      );
      setSubscriptions(response.content);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      // Fallback to demo data
      setSubscriptions([
        {
          id: "1",
          user: {
            id: "1",
            fullName: "John Doe",
            email: "john@example.com",
          },
          subscriptionPlan: {
            id: "1",
            name: "Family Plan",
            price: 179,
            duration: "weekly",
          },
          status: "ACTIVE",
          startDate: "2024-01-15",
          endDate: "2024-12-15",
          nextDeliveryDate: "2024-01-20",
          createdAt: "2024-01-15T10:00:00",
        },
      ]);
    }
  };

  const handleToggleUserStatus = async (userId: string) => {
    try {
      await adminService.toggleUserStatus(userId);
      fetchUsers();
    } catch (error) {
      console.error("Error toggling user status:", error);
    }
  };

  const handleUpdateOrderStatus = async (orderId: string, status: string) => {
    try {
      await adminService.updateOrderStatus(orderId, status);
      fetchOrders();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: any = {
      ACTIVE: "default",
      PAUSED: "secondary",
      CANCELLED: "destructive",
      EXPIRED: "outline",
      DELIVERED: "default",
      IN_TRANSIT: "secondary",
      PREPARING: "outline",
      SCHEDULED: "outline",
      COMPLETED: "default",
      PENDING: "secondary",
      FAILED: "destructive",
    };
    return (
      <Badge variant={variants[status] || "outline"}>
        {status.replace("_", " ")}
      </Badge>
    );
  };

  const StatCard = ({
    title,
    value,
    change,
    icon: Icon,
    format = "number",
  }: any) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {format === "currency"
            ? `$${value?.toLocaleString() || 0}`
            : value?.toLocaleString() || 0}
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="text-green-600">+{change || 0}%</span> from last
          month
        </p>
      </CardContent>
    </Card>
  );

  if (loading && !dashboardStats) {
    return (
      <ProtectedRoute requireAdmin>
        <div className="min-h-screen bg-background">
          <Header />
          <div className="container py-12">
            <div className="text-center">Loading dashboard...</div>
          </div>
          <Footer />
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute requireAdmin>
      <div className="min-h-screen bg-background">
        <Header />

        <div className="container py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-muted-foreground">
                  Manage your meal delivery service
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Quick Actions
                </Button>
              </div>
            </div>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-6"
            >
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <AdminOverview />
              </TabsContent>

              {/* Users Tab */}
              <TabsContent value="users" className="space-y-6">
                <AdminUsers />
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Order Management</CardTitle>
                        <CardDescription>
                          Track and manage meal delivery orders
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Select
                          value={selectedStatus}
                          onValueChange={setSelectedStatus}
                        >
                          <SelectTrigger className="w-40">
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Orders</SelectItem>
                            <SelectItem value="DELIVERED">Delivered</SelectItem>
                            <SelectItem value="IN_TRANSIT">
                              In Transit
                            </SelectItem>
                            <SelectItem value="PREPARING">Preparing</SelectItem>
                            <SelectItem value="SCHEDULED">Scheduled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Payment</TableHead>
                          <TableHead>Order Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">
                              #{order.orderNumber}
                            </TableCell>
                            <TableCell>
                              <div>
                                <p className="font-medium">
                                  {order.user.fullName}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {order.user.email}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>${order.totalAmount}</TableCell>
                            <TableCell>
                              {getStatusBadge(order.status)}
                            </TableCell>
                            <TableCell>
                              {getStatusBadge(order.paymentStatus)}
                            </TableCell>
                            <TableCell>
                              {new Date(order.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                  <DropdownMenuItem>
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleUpdateOrderStatus(
                                        order.id,
                                        "PREPARING",
                                      )
                                    }
                                  >
                                    <Edit className="h-4 w-4 mr-2" />
                                    Mark Preparing
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleUpdateOrderStatus(
                                        order.id,
                                        "IN_TRANSIT",
                                      )
                                    }
                                  >
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Mark In Transit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleUpdateOrderStatus(
                                        order.id,
                                        "DELIVERED",
                                      )
                                    }
                                  >
                                    <Package className="h-4 w-4 mr-2" />
                                    Mark Delivered
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Subscriptions Tab */}
              <TabsContent value="subscriptions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Subscription Management</CardTitle>
                        <CardDescription>
                          Monitor and manage customer subscriptions
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Select
                          value={selectedStatus}
                          onValueChange={setSelectedStatus}
                        >
                          <SelectTrigger className="w-40">
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">
                              All Subscriptions
                            </SelectItem>
                            <SelectItem value="ACTIVE">Active</SelectItem>
                            <SelectItem value="PAUSED">Paused</SelectItem>
                            <SelectItem value="CANCELLED">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead>Plan</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Start Date</TableHead>
                          <TableHead>Next Delivery</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {subscriptions.map((subscription) => (
                          <TableRow key={subscription.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">
                                  {subscription.user.fullName}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {subscription.user.email}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">
                              {subscription.subscriptionPlan.name}
                            </TableCell>
                            <TableCell>
                              ${subscription.subscriptionPlan.price}/
                              {subscription.subscriptionPlan.duration}
                            </TableCell>
                            <TableCell>
                              {getStatusBadge(subscription.status)}
                            </TableCell>
                            <TableCell>
                              {new Date(
                                subscription.startDate,
                              ).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              {subscription.nextDeliveryDate
                                ? new Date(
                                    subscription.nextDeliveryDate,
                                  ).toLocaleDateString()
                                : "N/A"}
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                  <DropdownMenuItem>
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Modify Plan
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Activity className="h-4 w-4 mr-2" />
                                    Change Status
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Products Tab */}
              <TabsContent value="products" className="space-y-6">
                <ProductManagement />
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-6">
                <AdminAnalytics />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}
