import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Users,
  CreditCard,
  TrendingUp,
  TrendingDown,
  Activity,
  DollarSign,
  UserCog,
  Settings,
  Database,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Smartphone,
  Bus,
  Train,
  Banknote,
  Zap,
  Award,
  Building,
  Eye,
  Download,
} from "lucide-react";

const dashboardStats = [
  {
    title: "Total Revenue",
    value: "₹12,45,890",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Total Commission",
    value: "₹41,355",
    change: "+15.2%",
    trend: "up",
    icon: TrendingUp,
    color: "text-blue-600",
  },
  {
    title: "Active Employees",
    value: "24",
    change: "+2",
    trend: "up",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "Success Rate",
    value: "98.5%",
    change: "+0.3%",
    trend: "up",
    icon: CheckCircle,
    color: "text-green-600",
  },
];

const serviceStats = [
  {
    name: "Mobile Recharge",
    transactions: 3245,
    revenue: "₹4,89,250",
    commission: "₹15,625",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Bus Tickets",
    transactions: 1876,
    revenue: "₹2,34,500",
    commission: "₹7,980",
    icon: Bus,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Train Tickets",
    transactions: 1432,
    revenue: "₹3,45,670",
    commission: "₹8,740",
    icon: Train,
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Mini ATM",
    transactions: 987,
    revenue: "₹1,23,450",
    commission: "₹4,250",
    icon: Banknote,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "EB Bill Payment",
    transactions: 765,
    revenue: "₹89,020",
    commission: "₹3,150",
    icon: Zap,
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Government Services",
    transactions: 234,
    revenue: "₹45,600",
    commission: "₹1,425",
    icon: Award,
    color: "bg-red-100 text-red-600",
  },
];

const recentTransactions = [
  {
    id: "TXN001",
    service: "Mobile Recharge",
    amount: "₹399",
    status: "Success",
    time: "2 mins ago",
  },
  {
    id: "TXN002",
    service: "Bus Ticket",
    amount: "₹850",
    status: "Success",
    time: "5 mins ago",
  },
  {
    id: "TXN003",
    service: "Train Ticket",
    amount: "₹1,200",
    status: "Pending",
    time: "8 mins ago",
  },
  {
    id: "TXN004",
    service: "EB Bill",
    amount: "��2,450",
    status: "Success",
    time: "12 mins ago",
  },
  {
    id: "TXN005",
    service: "PAN Card",
    amount: "₹110",
    status: "Processing",
    time: "15 mins ago",
  },
];

const systemAlerts = [
  {
    type: "warning",
    message: "High transaction volume detected on Mobile Recharge service",
    time: "10 mins ago",
  },
  {
    type: "info",
    message: "Scheduled maintenance for Train Booking API at 2:00 AM",
    time: "1 hour ago",
  },
  {
    type: "error",
    message: "Bus booking service experiencing intermittent issues",
    time: "2 hours ago",
  },
  {
    type: "success",
    message: "Government services integration successfully updated",
    time: "3 hours ago",
  },
];

const employeeActivity = [
  {
    name: "Rajesh Kumar",
    role: "Manager",
    lastActive: "2 mins ago",
    status: "online",
  },
  {
    name: "Priya Sharma",
    role: "Operator",
    lastActive: "5 mins ago",
    status: "online",
  },
  {
    name: "Amit Patel",
    role: "Support",
    lastActive: "1 hour ago",
    status: "away",
  },
  {
    name: "Sunita Singh",
    role: "Cashier",
    lastActive: "3 hours ago",
    status: "offline",
  },
];

export default function AdminPanel() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("today");

  const getStatusBadge = (status: string) => {
    const configs = {
      Success: { color: "bg-green-100 text-green-800", icon: CheckCircle },
      Pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock },
      Processing: { color: "bg-blue-100 text-blue-800", icon: Activity },
      Failed: { color: "bg-red-100 text-red-800", icon: AlertTriangle },
    };

    const config = configs[status as keyof typeof configs];
    const Icon = config.icon;

    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {status}
      </Badge>
    );
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "error":
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Activity className="w-4 h-4 text-blue-500" />;
    }
  };

  const getEmployeeStatusBadge = (status: string) => {
    const colors = {
      online: "bg-green-100 text-green-800",
      away: "bg-yellow-100 text-yellow-800",
      offline: "bg-slate-100 text-slate-800",
    };

    return (
      <Badge className={colors[status as keyof typeof colors]}>{status}</Badge>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Admin Panel
              </h1>
              <p className="text-slate-600">
                Comprehensive system overview and management dashboard
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-slate-900">
                        {stat.value}
                      </p>
                      <div className="flex items-center mt-1">
                        <TrendIcon
                          className={`w-4 h-4 mr-1 ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}
                        />
                        <span
                          className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}
                        >
                          {stat.change}
                        </span>
                        <span className="text-sm text-slate-500 ml-1">
                          vs last week
                        </span>
                      </div>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        stat.color === "text-green-600"
                          ? "bg-green-100"
                          : stat.color === "text-blue-600"
                            ? "bg-blue-100"
                            : stat.color === "text-purple-600"
                              ? "bg-purple-100"
                              : "bg-slate-100"
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Performance */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Service Performance</CardTitle>
                    <CardDescription>
                      Transaction volume and revenue by service
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {serviceStats.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border border-slate-200"
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${service.color}`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-900">
                              {service.name}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {service.transactions} transactions
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-slate-900">
                            {service.revenue}
                          </p>
                          <p className="text-sm text-green-600">
                            {service.commission} commission
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>
                  Latest transactions across all services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-slate-200"
                    >
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm text-slate-600">
                            {transaction.id}
                          </span>
                          <span className="font-medium text-slate-900">
                            {transaction.service}
                          </span>
                          {getStatusBadge(transaction.status)}
                        </div>
                        <p className="text-sm text-slate-600 mt-1">
                          {transaction.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-slate-900">
                          {transaction.amount}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  System Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemAlerts.map((alert, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-50"
                    >
                      {getAlertIcon(alert.type)}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">
                          {alert.message}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">
                          {alert.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Employee Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCog className="w-5 h-5 mr-2" />
                  Employee Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {employeeActivity.map((employee, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-slate-900">
                          {employee.name}
                        </p>
                        <p className="text-sm text-slate-600">
                          {employee.role}
                        </p>
                      </div>
                      <div className="text-right">
                        {getEmployeeStatusBadge(employee.status)}
                        <p className="text-xs text-slate-600 mt-1">
                          {employee.lastActive}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Employees
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Commission Management
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Building className="w-4 h-4 mr-2" />
                  Manage Billers
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Settings
                </Button>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Server Status</span>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-600">
                      Online
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Database</span>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-600">
                      Connected
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">API Services</span>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-600">
                      Operational
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    Payment Gateway
                  </span>
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium text-yellow-600">
                      Slow Response
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Analytics */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Detailed Analytics</CardTitle>
            <CardDescription>
              Comprehensive data analysis and reporting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="revenue">Revenue</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-900">
                        45,678
                      </div>
                      <div className="text-sm text-slate-600">
                        Total API Calls
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Activity className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-900">
                        99.2%
                      </div>
                      <div className="text-sm text-slate-600">
                        System Uptime
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-900">
                        156ms
                      </div>
                      <div className="text-sm text-slate-600">
                        Avg Response Time
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="services">
                <div className="text-center py-8 text-slate-500">
                  Service analytics will be displayed here with detailed charts
                  and metrics
                </div>
              </TabsContent>

              <TabsContent value="users">
                <div className="text-center py-8 text-slate-500">
                  User analytics and behavior patterns will be shown here
                </div>
              </TabsContent>

              <TabsContent value="revenue">
                <div className="text-center py-8 text-slate-500">
                  Revenue analytics and financial reports will be displayed here
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
