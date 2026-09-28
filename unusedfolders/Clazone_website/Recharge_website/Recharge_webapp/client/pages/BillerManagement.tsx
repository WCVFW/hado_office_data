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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  Search,
  Plus,
  Edit,
  Eye,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Building,
  Globe,
  Users,
  BarChart3,
} from "lucide-react";

const billerData = [
  {
    id: "BLR001",
    name: "Tata Power Delhi Distribution Ltd",
    category: "Electricity",
    status: "active",
    region: "Delhi",
    customerBase: "2.5M",
    avgTransactionValue: "2,450",
    monthlyVolume: "156K",
    lastSync: "2024-01-12 09:30:00",
    supportContact: "+91-11-39898989",
    apiVersion: "v2.1",
  },
  {
    id: "BLR002",
    name: "Reliance Jio Infocomm Ltd",
    category: "Mobile",
    status: "active",
    region: "Pan India",
    customerBase: "400M",
    avgTransactionValue: "599",
    monthlyVolume: "12.5M",
    lastSync: "2024-01-12 10:15:00",
    supportContact: "+91-22-33033000",
    apiVersion: "v2.0",
  },
  {
    id: "BLR003",
    name: "BSES Rajdhani Power Ltd",
    category: "Electricity",
    status: "maintenance",
    region: "Delhi",
    customerBase: "1.8M",
    avgTransactionValue: "1,850",
    monthlyVolume: "98K",
    lastSync: "2024-01-11 18:45:00",
    supportContact: "+91-11-19123456",
    apiVersion: "v1.9",
  },
  {
    id: "BLR004",
    name: "Bharti Airtel Ltd",
    category: "Mobile",
    status: "inactive",
    region: "Pan India",
    customerBase: "350M",
    avgTransactionValue: "799",
    monthlyVolume: "8.2M",
    lastSync: "2024-01-10 14:20:00",
    supportContact: "+91-124-4444444",
    apiVersion: "v2.1",
  },
];

const statusConfig = {
  active: {
    label: "Active",
    color: "bg-green-100 text-green-800",
    icon: CheckCircle,
  },
  inactive: {
    label: "Inactive",
    color: "bg-red-100 text-red-800",
    icon: XCircle,
  },
  maintenance: {
    label: "Maintenance",
    color: "bg-yellow-100 text-yellow-800",
    icon: AlertTriangle,
  },
};

export default function BillerManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedBiller, setSelectedBiller] = useState<any>(null);
  const [billers] = useState(billerData);

  const filteredBillers = billers.filter((biller) => {
    const matchesSearch =
      biller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      biller.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || biller.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || biller.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    const config = statusConfig[status as keyof typeof statusConfig];
    const Icon = config.icon;
    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>
    );
  };

  const statsData = [
    { label: "Total Billers", value: billers.length, icon: Building },
    {
      label: "Active Billers",
      value: billers.filter((b) => b.status === "active").length,
      icon: CheckCircle,
    },
    {
      label: "Categories",
      value: [...new Set(billers.map((b) => b.category))].length,
      icon: Globe,
    },
    { label: "Total Customers", value: "756M+", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Biller Management
              </h1>
              <p className="text-slate-600">
                Manage biller profiles, monitor status, and configure payment
                services
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add New Biller
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {stat.value}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search & Filter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="search">Search Billers</Label>
                  <Input
                    id="search"
                    placeholder="Search by name or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div>
                  <Label>Status</Label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Category</Label>
                  <Select
                    value={categoryFilter}
                    onValueChange={setCategoryFilter}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Electricity">Electricity</SelectItem>
                      <SelectItem value="Mobile">Mobile</SelectItem>
                      <SelectItem value="Gas">Gas</SelectItem>
                      <SelectItem value="Water">Water</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" className="w-full">
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Biller List */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Biller Directory</CardTitle>
                    <CardDescription>
                      {filteredBillers.length} of {billers.length} billers shown
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Export Data
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredBillers.map((biller) => (
                    <Card
                      key={biller.id}
                      className="border border-slate-200 hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold text-slate-900">
                                {biller.name}
                              </h3>
                              {getStatusBadge(biller.status)}
                              <Badge variant="secondary" className="text-xs">
                                {biller.category}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-600">
                              <div>
                                <span className="font-medium">Biller ID:</span>{" "}
                                {biller.id}
                              </div>
                              <div>
                                <span className="font-medium">Region:</span>{" "}
                                {biller.region}
                              </div>
                              <div>
                                <span className="font-medium">Customers:</span>{" "}
                                {biller.customerBase}
                              </div>
                              <div>
                                <span className="font-medium">
                                  Monthly Volume:
                                </span>{" "}
                                {biller.monthlyVolume}
                              </div>
                              <div>
                                <span className="font-medium">
                                  Avg. Transaction:
                                </span>{" "}
                                ₹{biller.avgTransactionValue}
                              </div>
                              <div>
                                <span className="font-medium">
                                  API Version:
                                </span>{" "}
                                {biller.apiVersion}
                              </div>
                              <div>
                                <span className="font-medium">Last Sync:</span>{" "}
                                {biller.lastSync}
                              </div>
                              <div>
                                <span className="font-medium">Support:</span>{" "}
                                {biller.supportContact}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedBiller(biller)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className={
                                biller.status === "active"
                                  ? "text-yellow-600 border-yellow-200"
                                  : "text-green-600 border-green-200"
                              }
                            >
                              <Settings className="w-4 h-4 mr-1" />
                              {biller.status === "active"
                                ? "Deactivate"
                                : "Activate"}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {filteredBillers.length === 0 && (
                    <div className="text-center py-12">
                      <Building className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-slate-900 mb-2">
                        No billers found
                      </h3>
                      <p className="text-slate-600">
                        Try adjusting your search criteria or filters
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Biller Details Modal */}
        {selectedBiller && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      {selectedBiller.name}
                    </CardTitle>
                    <CardDescription>
                      Biller ID: {selectedBiller.id}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedBiller(null)}
                  >
                    <XCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="space-y-6">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="api">API Config</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="support">Support</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">
                            Basic Information
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-600">Status:</span>
                            {getStatusBadge(selectedBiller.status)}
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Category:</span>
                            <span className="font-medium">
                              {selectedBiller.category}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Region:</span>
                            <span className="font-medium">
                              {selectedBiller.region}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">API Version:</span>
                            <span className="font-medium">
                              {selectedBiller.apiVersion}
                            </span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">
                            Business Metrics
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-600">
                              Customer Base:
                            </span>
                            <span className="font-medium">
                              {selectedBiller.customerBase}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">
                              Monthly Volume:
                            </span>
                            <span className="font-medium">
                              {selectedBiller.monthlyVolume}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">
                              Avg. Transaction:
                            </span>
                            <span className="font-medium">
                              ₹{selectedBiller.avgTransactionValue}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Last Sync:</span>
                            <span className="font-medium">
                              {selectedBiller.lastSync}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="api">
                    <Card>
                      <CardHeader>
                        <CardTitle>API Configuration</CardTitle>
                        <CardDescription>
                          Integration settings and endpoints
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label>API Version</Label>
                              <div className="mt-1 p-2 bg-slate-100 rounded text-sm font-mono">
                                {selectedBiller.apiVersion}
                              </div>
                            </div>
                            <div>
                              <Label>Environment</Label>
                              <div className="mt-1 p-2 bg-slate-100 rounded text-sm">
                                Production
                              </div>
                            </div>
                          </div>
                          <div>
                            <Label>Endpoint URL</Label>
                            <div className="mt-1 p-2 bg-slate-100 rounded text-sm font-mono">
                              https://api.bbps.npci.org.in/biller/
                              {selectedBiller.id.toLowerCase()}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="analytics">
                    <Card>
                      <CardHeader>
                        <CardTitle>Performance Analytics</CardTitle>
                        <CardDescription>
                          Transaction and success metrics
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-8 text-slate-500">
                          Analytics dashboard will be displayed here
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="support">
                    <Card>
                      <CardHeader>
                        <CardTitle>Support Information</CardTitle>
                        <CardDescription>
                          Contact details and support resources
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <Label>Support Contact</Label>
                            <div className="mt-1 font-medium">
                              {selectedBiller.supportContact}
                            </div>
                          </div>
                          <div>
                            <Label>Technical Support Email</Label>
                            <div className="mt-1 font-medium">
                              tech-support@{selectedBiller.id.toLowerCase()}.com
                            </div>
                          </div>
                          <div>
                            <Label>Business Hours</Label>
                            <div className="mt-1">24/7 Support Available</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
