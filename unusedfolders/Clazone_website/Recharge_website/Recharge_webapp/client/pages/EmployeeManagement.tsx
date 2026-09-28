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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Users,
  Plus,
  Search,
  Edit,
  Eye,
  CheckCircle,
  XCircle,
  AlertTriangle,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Settings,
} from "lucide-react";

const roles = [
  {
    id: "admin",
    name: "Administrator",
    description: "Full system access",
    permissions: ["all"],
  },
  {
    id: "manager",
    name: "Manager",
    description: "Service management access",
    permissions: [
      "mobile_recharge",
      "bill_payment",
      "transaction_status",
      "reports",
    ],
  },
  {
    id: "operator",
    name: "Operator",
    description: "Basic service operations",
    permissions: [
      "mobile_recharge",
      "bill_payment",
      "bus_tickets",
      "train_tickets",
    ],
  },
  {
    id: "support",
    name: "Support Agent",
    description: "Customer support access",
    permissions: ["transaction_status", "customer_support", "reports"],
  },
  {
    id: "cashier",
    name: "Cashier",
    description: "ATM and cash services",
    permissions: ["mini_atm", "cash_deposit", "balance_inquiry"],
  },
];

const permissions = [
  { id: "mobile_recharge", name: "Mobile Recharge", category: "Services" },
  { id: "bus_tickets", name: "Bus Tickets", category: "Services" },
  { id: "train_tickets", name: "Train Tickets", category: "Services" },
  { id: "mini_atm", name: "Mini ATM", category: "Services" },
  { id: "eb_bill_payment", name: "EB Bill Payment", category: "Services" },
  {
    id: "government_services",
    name: "Government Services",
    category: "Services",
  },
  { id: "bill_payment", name: "Bill Payment", category: "Services" },
  {
    id: "transaction_status",
    name: "Transaction Status",
    category: "Management",
  },
  { id: "bill_validation", name: "Bill Validation", category: "Management" },
  { id: "customer_support", name: "Customer Support", category: "Management" },
  { id: "reports", name: "Reports & Analytics", category: "Management" },
  {
    id: "employee_management",
    name: "Employee Management",
    category: "Administration",
  },
  {
    id: "biller_management",
    name: "Biller Management",
    category: "Administration",
  },
  {
    id: "agent_management",
    name: "Agent Management",
    category: "Administration",
  },
  {
    id: "system_settings",
    name: "System Settings",
    category: "Administration",
  },
];

const sampleEmployees = [
  {
    id: "EMP001",
    name: "Rajesh Kumar",
    email: "rajesh@company.com",
    phone: "+91-9876543210",
    role: "manager",
    status: "active",
    joinDate: "2023-06-15",
    lastLogin: "2024-01-12 10:30",
    department: "Operations",
    location: "Delhi",
    permissions: [
      "mobile_recharge",
      "bill_payment",
      "transaction_status",
      "reports",
    ],
  },
  {
    id: "EMP002",
    name: "Priya Sharma",
    email: "priya@company.com",
    phone: "+91-9123456789",
    role: "operator",
    status: "active",
    joinDate: "2023-08-20",
    lastLogin: "2024-01-12 09:15",
    department: "Customer Service",
    location: "Mumbai",
    permissions: [
      "mobile_recharge",
      "bill_payment",
      "bus_tickets",
      "train_tickets",
    ],
  },
  {
    id: "EMP003",
    name: "Amit Patel",
    email: "amit@company.com",
    phone: "+91-9988776655",
    role: "support",
    status: "inactive",
    joinDate: "2023-04-10",
    lastLogin: "2024-01-05 16:45",
    department: "Customer Support",
    location: "Bangalore",
    permissions: ["transaction_status", "customer_support", "reports"],
  },
  {
    id: "EMP004",
    name: "Sunita Singh",
    email: "sunita@company.com",
    phone: "+91-9555443322",
    role: "cashier",
    status: "active",
    joinDate: "2023-09-12",
    lastLogin: "2024-01-12 11:00",
    department: "Cash Services",
    location: "Chennai",
    permissions: ["mini_atm", "cash_deposit", "balance_inquiry"],
  },
];

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState(sampleEmployees);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    department: "",
    location: "",
    permissions: [] as string[],
  });

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || emp.status === statusFilter;
    const matchesRole = roleFilter === "all" || emp.role === roleFilter;

    return matchesSearch && matchesStatus && matchesRole;
  });

  const getStatusBadge = (status: string) => {
    const configs = {
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
      pending: {
        label: "Pending",
        color: "bg-yellow-100 text-yellow-800",
        icon: AlertTriangle,
      },
    };

    const config = configs[status as keyof typeof configs];
    const Icon = config.icon;

    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>
    );
  };

  const handlePermissionChange = (permissionId: string, checked: boolean) => {
    setNewEmployee((prev) => ({
      ...prev,
      permissions: checked
        ? [...prev.permissions, permissionId]
        : prev.permissions.filter((p) => p !== permissionId),
    }));
  };

  const handleRoleChange = (roleId: string) => {
    const role = roles.find((r) => r.id === roleId);
    if (role) {
      setNewEmployee((prev) => ({
        ...prev,
        role: roleId,
        permissions: role.permissions.includes("all")
          ? permissions.map((p) => p.id)
          : role.permissions,
      }));
    }
  };

  const handleAddEmployee = () => {
    const employeeId = `EMP${String(employees.length + 1).padStart(3, "0")}`;
    const newEmp = {
      ...newEmployee,
      id: employeeId,
      status: "active",
      joinDate: new Date().toISOString().split("T")[0],
      lastLogin: "Never",
    };
    setEmployees([...employees, newEmp]);
    setNewEmployee({
      name: "",
      email: "",
      phone: "",
      role: "",
      department: "",
      location: "",
      permissions: [],
    });
    setShowAddForm(false);
  };

  const statsData = [
    { label: "Total Employees", value: employees.length, icon: Users },
    {
      label: "Active",
      value: employees.filter((e) => e.status === "active").length,
      icon: CheckCircle,
    },
    {
      label: "Inactive",
      value: employees.filter((e) => e.status === "inactive").length,
      icon: XCircle,
    },
    {
      label: "Departments",
      value: [...new Set(employees.map((e) => e.department))].length,
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Employee Management
              </h1>
              <p className="text-slate-600">
                Manage employee registration, roles, and service access
                permissions
              </p>
            </div>
            <Button
              onClick={() => setShowAddForm(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Employee
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
                  <Label htmlFor="search">Search Employees</Label>
                  <Input
                    id="search"
                    placeholder="Search by name, email, or ID..."
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
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Role</Label>
                  <Select value={roleFilter} onValueChange={setRoleFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      {roles.map((role) => (
                        <SelectItem key={role.id} value={role.id}>
                          {role.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" className="w-full">
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Employee List */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Employee Directory</CardTitle>
                    <CardDescription>
                      {filteredEmployees.length} of {employees.length} employees
                      shown
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    Export Data
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredEmployees.map((employee) => (
                    <Card
                      key={employee.id}
                      className="border border-slate-200 hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-blue-600" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-semibold text-slate-900">
                                  {employee.name}
                                </h3>
                                {getStatusBadge(employee.status)}
                                <Badge variant="secondary" className="text-xs">
                                  {
                                    roles.find((r) => r.id === employee.role)
                                      ?.name
                                  }
                                </Badge>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-slate-600">
                                <div className="flex items-center">
                                  <Mail className="w-4 h-4 mr-2" />
                                  {employee.email}
                                </div>
                                <div className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  {employee.phone}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  {employee.location}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  Joined: {employee.joinDate}
                                </div>
                                <div>
                                  <span className="font-medium">
                                    Department:
                                  </span>{" "}
                                  {employee.department}
                                </div>
                                <div>
                                  <span className="font-medium">
                                    Last Login:
                                  </span>{" "}
                                  {employee.lastLogin}
                                </div>
                              </div>

                              <div className="mt-3">
                                <span className="text-sm text-slate-600">
                                  Permissions:{" "}
                                </span>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {employee.permissions
                                    .slice(0, 3)
                                    .map((permission, index) => (
                                      <Badge
                                        key={index}
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        {
                                          permissions.find(
                                            (p) => p.id === permission,
                                          )?.name
                                        }
                                      </Badge>
                                    ))}
                                  {employee.permissions.length > 3 && (
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      +{employee.permissions.length - 3} more
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedEmployee(employee)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className={
                                employee.status === "active"
                                  ? "text-red-600 border-red-200"
                                  : "text-green-600 border-green-200"
                              }
                            >
                              {employee.status === "active"
                                ? "Deactivate"
                                : "Activate"}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {filteredEmployees.length === 0 && (
                    <div className="text-center py-12">
                      <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-slate-900 mb-2">
                        No employees found
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

        {/* Add Employee Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Add New Employee</CardTitle>
                    <CardDescription>
                      Register a new employee with role-based access
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAddForm(false)}
                  >
                    <XCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="personal" className="space-y-6">
                  <TabsList>
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="role">Role & Permissions</TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={newEmployee.name}
                          onChange={(e) =>
                            setNewEmployee({
                              ...newEmployee,
                              name: e.target.value,
                            })
                          }
                          placeholder="Enter full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={newEmployee.email}
                          onChange={(e) =>
                            setNewEmployee({
                              ...newEmployee,
                              email: e.target.value,
                            })
                          }
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={newEmployee.phone}
                          onChange={(e) =>
                            setNewEmployee({
                              ...newEmployee,
                              phone: e.target.value,
                            })
                          }
                          placeholder="Enter phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="department">Department *</Label>
                        <Select
                          value={newEmployee.department}
                          onValueChange={(value) =>
                            setNewEmployee({
                              ...newEmployee,
                              department: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="operations">
                              Operations
                            </SelectItem>
                            <SelectItem value="customer_service">
                              Customer Service
                            </SelectItem>
                            <SelectItem value="customer_support">
                              Customer Support
                            </SelectItem>
                            <SelectItem value="cash_services">
                              Cash Services
                            </SelectItem>
                            <SelectItem value="administration">
                              Administration
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="location">Location *</Label>
                        <Select
                          value={newEmployee.location}
                          onValueChange={(value) =>
                            setNewEmployee({ ...newEmployee, location: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Delhi">Delhi</SelectItem>
                            <SelectItem value="Mumbai">Mumbai</SelectItem>
                            <SelectItem value="Bangalore">Bangalore</SelectItem>
                            <SelectItem value="Chennai">Chennai</SelectItem>
                            <SelectItem value="Kolkata">Kolkata</SelectItem>
                            <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="role" className="space-y-4">
                    <div>
                      <Label>Select Role</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                        {roles.map((role) => (
                          <button
                            key={role.id}
                            onClick={() => handleRoleChange(role.id)}
                            className={`p-4 rounded-lg border text-left transition-all ${
                              newEmployee.role === role.id
                                ? "border-blue-500 bg-blue-50"
                                : "border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <div className="font-medium text-slate-900">
                              {role.name}
                            </div>
                            <div className="text-sm text-slate-600">
                              {role.description}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Custom Permissions</Label>
                      <div className="mt-2 space-y-4">
                        {["Services", "Management", "Administration"].map(
                          (category) => (
                            <div key={category}>
                              <h4 className="font-medium text-slate-900 mb-2">
                                {category}
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {permissions
                                  .filter((p) => p.category === category)
                                  .map((permission) => (
                                    <div
                                      key={permission.id}
                                      className="flex items-center space-x-2"
                                    >
                                      <Checkbox
                                        id={permission.id}
                                        checked={newEmployee.permissions.includes(
                                          permission.id,
                                        )}
                                        onCheckedChange={(checked) =>
                                          handlePermissionChange(
                                            permission.id,
                                            !!checked,
                                          )
                                        }
                                      />
                                      <Label
                                        htmlFor={permission.id}
                                        className="text-sm"
                                      >
                                        {permission.name}
                                      </Label>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-end gap-2 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleAddEmployee}
                    disabled={
                      !newEmployee.name ||
                      !newEmployee.email ||
                      !newEmployee.role
                    }
                  >
                    Add Employee
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Employee Details Modal */}
        {selectedEmployee && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>{selectedEmployee.name}</CardTitle>
                      <CardDescription>
                        Employee ID: {selectedEmployee.id}
                      </CardDescription>
                      <div className="flex gap-2 mt-2">
                        {getStatusBadge(selectedEmployee.status)}
                        <Badge variant="secondary">
                          {
                            roles.find((r) => r.id === selectedEmployee.role)
                              ?.name
                          }
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedEmployee(null)}
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
                          {selectedEmployee.email}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Phone:</span>
                        <span className="font-medium">
                          {selectedEmployee.phone}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Location:</span>
                        <span className="font-medium">
                          {selectedEmployee.location}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Department:</span>
                        <span className="font-medium">
                          {selectedEmployee.department}
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Employment Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Join Date:</span>
                        <span className="font-medium">
                          {selectedEmployee.joinDate}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Last Login:</span>
                        <span className="font-medium">
                          {selectedEmployee.lastLogin}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Role:</span>
                        <span className="font-medium">
                          {
                            roles.find((r) => r.id === selectedEmployee.role)
                              ?.name
                          }
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Status:</span>
                        {getStatusBadge(selectedEmployee.status)}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Service Permissions
                    </CardTitle>
                    <CardDescription>
                      Services this employee can access
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {selectedEmployee.permissions.map(
                        (permissionId: string) => {
                          const permission = permissions.find(
                            (p) => p.id === permissionId,
                          );
                          return permission ? (
                            <div
                              key={permissionId}
                              className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200"
                            >
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                              <span className="text-sm font-medium text-green-900">
                                {permission.name}
                              </span>
                            </div>
                          ) : null;
                        },
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
