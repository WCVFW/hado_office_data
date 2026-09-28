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
import {
  Users,
  Search,
  Plus,
  Edit,
  Eye,
  CheckCircle,
  XCircle,
  AlertTriangle,
  User,
  MapPin,
  Phone,
  Mail,
  Building,
  Calendar,
} from "lucide-react";

const agentData = [
  {
    id: "AGT001",
    name: "Rahul Kumar",
    email: "rahul.kumar@example.com",
    phone: "+91-9876543210",
    status: "active",
    type: "individual",
    location: "Delhi",
    joinDate: "2023-06-15",
    lastActive: "2024-01-12 10:30:00",
    transactionVolume: "15.2K",
    monthlyCommission: "₹45,600",
    billerAccess: ["Electricity", "Mobile", "Gas"],
    kycStatus: "verified",
    rating: 4.8,
  },
  {
    id: "AGT002",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+91-9123456789",
    status: "active",
    type: "individual",
    location: "Mumbai",
    joinDate: "2023-04-20",
    lastActive: "2024-01-12 09:15:00",
    transactionVolume: "22.8K",
    monthlyCommission: "₹68,400",
    billerAccess: ["Electricity", "Mobile", "Water"],
    kycStatus: "verified",
    rating: 4.9,
  },
  {
    id: "AGT003",
    name: "Tech Solutions Pvt Ltd",
    email: "contact@techsolutions.com",
    phone: "+91-11-12345678",
    status: "pending",
    type: "corporate",
    location: "Bangalore",
    joinDate: "2024-01-10",
    lastActive: "2024-01-11 16:45:00",
    transactionVolume: "0",
    monthlyCommission: "₹0",
    billerAccess: [],
    kycStatus: "pending",
    rating: 0,
  },
  {
    id: "AGT004",
    name: "Amit Patel",
    email: "amit.patel@example.com",
    phone: "+91-9988776655",
    status: "suspended",
    type: "individual",
    location: "Ahmedabad",
    joinDate: "2023-08-12",
    lastActive: "2024-01-05 14:20:00",
    transactionVolume: "8.5K",
    monthlyCommission: "₹0",
    billerAccess: ["Mobile"],
    kycStatus: "verified",
    rating: 3.2,
  },
];

const statusConfig = {
  active: {
    label: "Active",
    color: "bg-green-100 text-green-800",
    icon: CheckCircle,
  },
  pending: {
    label: "Pending",
    color: "bg-yellow-100 text-yellow-800",
    icon: AlertTriangle,
  },
  suspended: {
    label: "Suspended",
    color: "bg-red-100 text-red-800",
    icon: XCircle,
  },
};

const kycStatusConfig = {
  verified: { label: "Verified", color: "bg-green-100 text-green-800" },
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-800" },
};

export default function AgentManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [selectedAgent, setSelectedAgent] = useState<any>(null);
  const [agents] = useState(agentData);

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || agent.status === statusFilter;
    const matchesType = typeFilter === "all" || agent.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
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

  const getKycBadge = (status: string) => {
    const config = kycStatusConfig[status as keyof typeof kycStatusConfig];
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  const statsData = [
    { label: "Total Agents", value: agents.length, icon: Users },
    {
      label: "Active Agents",
      value: agents.filter((a) => a.status === "active").length,
      icon: CheckCircle,
    },
    {
      label: "Pending Approval",
      value: agents.filter((a) => a.status === "pending").length,
      icon: AlertTriangle,
    },
    { label: "Monthly Volume", value: "46.5K", icon: Building },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Agent Management
              </h1>
              <p className="text-slate-600">
                Manage agent profiles, approvals, and monitor performance
                metrics
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add New Agent
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
                  <Label htmlFor="search">Search Agents</Label>
                  <Input
                    id="search"
                    placeholder="Search by name, ID, or email..."
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
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Agent Type</Label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" className="w-full">
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Agent List */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Agent Directory</CardTitle>
                    <CardDescription>
                      {filteredAgents.length} of {agents.length} agents shown
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    Export Data
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredAgents.map((agent) => (
                    <Card
                      key={agent.id}
                      className="border border-slate-200 hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              {agent.type === "corporate" ? (
                                <Building className="w-6 h-6 text-blue-600" />
                              ) : (
                                <User className="w-6 h-6 text-blue-600" />
                              )}
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-semibold text-slate-900">
                                  {agent.name}
                                </h3>
                                {getStatusBadge(agent.status)}
                                {getKycBadge(agent.kycStatus)}
                                <Badge
                                  variant="secondary"
                                  className="text-xs capitalize"
                                >
                                  {agent.type}
                                </Badge>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-slate-600">
                                <div className="flex items-center">
                                  <Mail className="w-4 h-4 mr-2" />
                                  {agent.email}
                                </div>
                                <div className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  {agent.phone}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  {agent.location}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  Joined: {agent.joinDate}
                                </div>
                                <div>
                                  <span className="font-medium">Volume:</span>{" "}
                                  {agent.transactionVolume}
                                </div>
                                <div>
                                  <span className="font-medium">
                                    Commission:
                                  </span>{" "}
                                  {agent.monthlyCommission}
                                </div>
                              </div>

                              {agent.billerAccess.length > 0 && (
                                <div className="mt-3">
                                  <span className="text-sm text-slate-600">
                                    Biller Access:{" "}
                                  </span>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {agent.billerAccess.map((biller, index) => (
                                      <Badge
                                        key={index}
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        {biller}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedAgent(agent)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                            {agent.status === "pending" && (
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Approve
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {filteredAgents.length === 0 && (
                    <div className="text-center py-12">
                      <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-slate-900 mb-2">
                        No agents found
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

        {/* Agent Details Modal */}
        {selectedAgent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      {selectedAgent.type === "corporate" ? (
                        <Building className="w-8 h-8 text-blue-600" />
                      ) : (
                        <User className="w-8 h-8 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <CardTitle>{selectedAgent.name}</CardTitle>
                      <CardDescription>
                        Agent ID: {selectedAgent.id}
                      </CardDescription>
                      <div className="flex gap-2 mt-2">
                        {getStatusBadge(selectedAgent.status)}
                        {getKycBadge(selectedAgent.kycStatus)}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedAgent(null)}
                  >
                    <XCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Email:</span>
                        <span className="font-medium">
                          {selectedAgent.email}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Phone:</span>
                        <span className="font-medium">
                          {selectedAgent.phone}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Location:</span>
                        <span className="font-medium">
                          {selectedAgent.location}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Agent Type:</span>
                        <span className="font-medium capitalize">
                          {selectedAgent.type}
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Performance Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">
                          Transaction Volume:
                        </span>
                        <span className="font-medium">
                          {selectedAgent.transactionVolume}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">
                          Monthly Commission:
                        </span>
                        <span className="font-medium">
                          {selectedAgent.monthlyCommission}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Rating:</span>
                        <span className="font-medium">
                          {selectedAgent.rating > 0
                            ? `${selectedAgent.rating}/5.0`
                            : "N/A"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Join Date:</span>
                        <span className="font-medium">
                          {selectedAgent.joinDate}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Biller Access</CardTitle>
                    <CardDescription>
                      Categories this agent can process payments for
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {selectedAgent.billerAccess.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {selectedAgent.billerAccess.map(
                          (biller: string, index: number) => (
                            <Badge
                              key={index}
                              className="bg-blue-100 text-blue-800"
                            >
                              {biller}
                            </Badge>
                          ),
                        )}
                      </div>
                    ) : (
                      <div className="text-slate-500 text-center py-4">
                        No biller access assigned yet
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="flex justify-end gap-2">
                  {selectedAgent.status === "pending" && (
                    <>
                      <Button
                        variant="outline"
                        className="text-red-600 border-red-200"
                      >
                        Reject Application
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700">
                        Approve Agent
                      </Button>
                    </>
                  )}
                  {selectedAgent.status === "active" && (
                    <Button
                      variant="outline"
                      className="text-yellow-600 border-yellow-200"
                    >
                      Suspend Agent
                    </Button>
                  )}
                  {selectedAgent.status === "suspended" && (
                    <Button className="bg-green-600 hover:bg-green-700">
                      Reactivate Agent
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
