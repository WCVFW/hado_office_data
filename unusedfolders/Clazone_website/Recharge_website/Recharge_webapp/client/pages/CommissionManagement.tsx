import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Calendar,
  Download,
  Eye,
  Smartphone,
  Bus,
  Train,
  Banknote,
  Zap,
  Award,
  CreditCard,
  Users,
  Percent,
} from "lucide-react";

const commissionRates = {
  mobile_recharge: { rate: 2.5, type: "percentage", min: 2, max: 50 },
  bus_tickets: { rate: 3.0, type: "percentage", min: 10, max: 100 },
  train_tickets: { rate: 2.0, type: "percentage", min: 15, max: 150 },
  mini_atm: { rate: 5, type: "flat", min: 5, max: 5 },
  eb_bill_payment: { rate: 1.5, type: "percentage", min: 3, max: 25 },
  government_services: { rate: 15, type: "flat", min: 15, max: 50 },
  bill_payment: { rate: 1.8, type: "percentage", min: 2, max: 30 },
};

const serviceIcons = {
  mobile_recharge: Smartphone,
  bus_tickets: Bus,
  train_tickets: Train,
  mini_atm: Banknote,
  eb_bill_payment: Zap,
  government_services: Award,
  bill_payment: CreditCard,
};

const todayCommissions = [
  {
    service: "mobile_recharge",
    serviceName: "Mobile Recharge",
    transactions: 45,
    volume: "₹18,750",
    commission: "₹468.75",
    employee: "Rajesh Kumar",
    time: "10:30 AM",
  },
  {
    service: "bus_tickets",
    serviceName: "Bus Tickets",
    transactions: 12,
    volume: "₹8,400",
    commission: "₹252.00",
    employee: "Priya Sharma",
    time: "11:15 AM",
  },
  {
    service: "train_tickets",
    serviceName: "Train Tickets",
    transactions: 8,
    volume: "₹15,600",
    commission: "₹312.00",
    employee: "Amit Singh",
    time: "12:45 PM",
  },
  {
    service: "mini_atm",
    serviceName: "Mini ATM",
    transactions: 25,
    volume: "₹45,000",
    commission: "₹125.00",
    employee: "Sunita Singh",
    time: "2:20 PM",
  },
  {
    service: "government_services",
    serviceName: "Government Services",
    transactions: 6,
    volume: "₹660",
    commission: "₹90.00",
    employee: "Rajesh Kumar",
    time: "3:10 PM",
  },
];

const monthlyStats = [
  {
    service: "Mobile Recharge",
    transactions: 1250,
    commission: "₹15,625",
    growth: "+12%",
  },
  {
    service: "Bus Tickets",
    transactions: 380,
    commission: "₹7,980",
    growth: "+8%",
  },
  {
    service: "Train Tickets",
    transactions: 290,
    commission: "₹8,740",
    growth: "+15%",
  },
  {
    service: "Mini ATM",
    transactions: 850,
    commission: "₹4,250",
    growth: "+5%",
  },
  {
    service: "EB Bill Payment",
    transactions: 420,
    commission: "₹3,150",
    growth: "+22%",
  },
  {
    service: "Government Services",
    transactions: 95,
    commission: "₹1,425",
    growth: "+35%",
  },
];

const employeeCommissions = [
  {
    name: "Rajesh Kumar",
    role: "Manager",
    totalCommission: "₹8,750",
    transactions: 485,
    services: 5,
  },
  {
    name: "Priya Sharma",
    role: "Operator",
    totalCommission: "₹6,250",
    transactions: 320,
    services: 4,
  },
  {
    name: "Amit Singh",
    role: "Operator",
    totalCommission: "₹5,890",
    transactions: 295,
    services: 3,
  },
  {
    name: "Sunita Singh",
    role: "Cashier",
    totalCommission: "₹4,250",
    transactions: 250,
    services: 2,
  },
];

export default function CommissionManagement() {
  const [selectedPeriod, setSelectedPeriod] = useState("today");
  const [selectedService, setSelectedService] = useState("all");

  const calculateCommission = (service: string, amount: number) => {
    const rate = commissionRates[service as keyof typeof commissionRates];
    if (!rate) return 0;

    let commission = 0;
    if (rate.type === "percentage") {
      commission = (amount * rate.rate) / 100;
    } else {
      commission = rate.rate;
    }

    return Math.min(Math.max(commission, rate.min), rate.max);
  };

  const getTotalCommissionToday = () => {
    return todayCommissions.reduce((total, item) => {
      return (
        total + parseFloat(item.commission.replace("₹", "").replace(",", ""))
      );
    }, 0);
  };

  const getTotalTransactionsToday = () => {
    return todayCommissions.reduce(
      (total, item) => total + item.transactions,
      0,
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
                Commission Management
              </h1>
              <p className="text-slate-600">
                Track earnings and commission distribution across all services
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View Rates
              </Button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Today's Commission</p>
                  <p className="text-2xl font-bold text-slate-900">
                    ₹{getTotalCommissionToday().toLocaleString()}
                  </p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                    <span className="text-sm font-medium text-green-600">
                      +8.2%
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Transactions</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {getTotalTransactionsToday()}
                  </p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1 text-blue-500" />
                    <span className="text-sm font-medium text-blue-600">
                      +12%
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Active Employees</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {employeeCommissions.length}
                  </p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1 text-purple-500" />
                    <span className="text-sm font-medium text-purple-600">
                      +2
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Avg Commission Rate</p>
                  <p className="text-2xl font-bold text-slate-900">2.1%</p>
                  <div className="flex items-center mt-1">
                    <TrendingDown className="w-4 h-4 mr-1 text-orange-500" />
                    <span className="text-sm font-medium text-orange-600">
                      -0.1%
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Percent className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Commission Rates */}
            <Card>
              <CardHeader>
                <CardTitle>Commission Rates by Service</CardTitle>
                <CardDescription>
                  Current commission structure for all services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(commissionRates).map(([serviceKey, rate]) => {
                    const ServiceIcon =
                      serviceIcons[serviceKey as keyof typeof serviceIcons];
                    const serviceName = serviceKey
                      .replace(/_/g, " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase());

                    return (
                      <div
                        key={serviceKey}
                        className="flex items-center justify-between p-4 rounded-lg border border-slate-200"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <ServiceIcon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-900">
                              {serviceName}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {rate.type === "percentage"
                                ? "Percentage based"
                                : "Flat rate"}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-slate-900">
                            {rate.rate}
                            {rate.type === "percentage" ? "%" : " ₹"}
                          </p>
                          <p className="text-sm text-slate-600">
                            Min: ₹{rate.min} | Max: ₹{rate.max}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Today's Commission Details */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Commission Transactions</CardTitle>
                <CardDescription>Real-time commission tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todayCommissions.map((item, index) => {
                    const ServiceIcon =
                      serviceIcons[item.service as keyof typeof serviceIcons];
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-200"
                      >
                        <div className="flex items-center space-x-3">
                          <ServiceIcon className="w-5 h-5 text-blue-600" />
                          <div>
                            <div className="font-medium text-slate-900">
                              {item.serviceName}
                            </div>
                            <div className="text-sm text-slate-600">
                              {item.transactions} transactions • {item.employee}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-green-600">
                            {item.commission}
                          </div>
                          <div className="text-sm text-slate-600">
                            {item.time}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Monthly Service Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
                <CardDescription>
                  Commission by service this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyStats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <div className="font-medium text-slate-900">
                          {stat.service}
                        </div>
                        <div className="text-sm text-slate-600">
                          {stat.transactions} transactions
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-900">
                          {stat.commission}
                        </div>
                        <div
                          className={`text-sm ${stat.growth.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                        >
                          {stat.growth}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Performers */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>
                  Employees by commission earned
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {employeeCommissions.map((employee, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-50"
                    >
                      <div>
                        <div className="font-medium text-slate-900">
                          {employee.name}
                        </div>
                        <div className="text-sm text-slate-600">
                          {employee.role} • {employee.services} services
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">
                          {employee.totalCommission}
                        </div>
                        <div className="text-sm text-slate-600">
                          {employee.transactions} txns
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Commission Calculator */}
            <Card>
              <CardHeader>
                <CardTitle>Commission Calculator</CardTitle>
                <CardDescription>
                  Calculate commission for any amount
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Service</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(commissionRates).map((service) => (
                        <SelectItem key={service} value={service}>
                          {service
                            .replace(/_/g, " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Transaction Amount</Label>
                  <Input placeholder="Enter amount" type="number" />
                </div>
                <Button className="w-full">Calculate Commission</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Analytics */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Commission Analytics</CardTitle>
            <CardDescription>
              Detailed performance metrics and trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="trends">Trends</TabsTrigger>
                <TabsTrigger value="employees">By Employee</TabsTrigger>
                <TabsTrigger value="services">By Service</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-900">
                        ₹41,355
                      </div>
                      <div className="text-sm text-slate-600">
                        Total Monthly Commission
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-900">
                        3,290
                      </div>
                      <div className="text-sm text-slate-600">
                        Total Transactions
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-900">
                        2.1%
                      </div>
                      <div className="text-sm text-slate-600">
                        Average Commission Rate
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="trends">
                <div className="text-center py-8 text-slate-500">
                  Commission trend analytics and charts will be displayed here
                </div>
              </TabsContent>

              <TabsContent value="employees">
                <div className="text-center py-8 text-slate-500">
                  Employee-wise commission breakdown and performance metrics
                </div>
              </TabsContent>

              <TabsContent value="services">
                <div className="text-center py-8 text-slate-500">
                  Service-wise commission analysis and profitability metrics
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
