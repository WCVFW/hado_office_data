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
  Search,
  Calendar,
  Download,
  Filter,
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  Eye,
  RefreshCw,
} from "lucide-react";

const transactionStatuses = {
  success: {
    label: "Success",
    color: "bg-green-100 text-green-800",
    icon: CheckCircle,
  },
  pending: {
    label: "Pending",
    color: "bg-yellow-100 text-yellow-800",
    icon: Clock,
  },
  failed: { label: "Failed", color: "bg-red-100 text-red-800", icon: XCircle },
  processing: {
    label: "Processing",
    color: "bg-blue-100 text-blue-800",
    icon: RefreshCw,
  },
};

const sampleTransactions = [
  {
    id: "TXN001234567890",
    customerName: "John Doe",
    biller: "Tata Power",
    amount: "2,450.00",
    status: "success",
    date: "2024-01-12",
    time: "14:30:25",
    method: "UPI",
    reference: "REF123456789",
  },
  {
    id: "TXN001234567891",
    customerName: "Jane Smith",
    biller: "Reliance Jio",
    amount: "599.00",
    status: "pending",
    date: "2024-01-12",
    time: "13:45:12",
    method: "Credit Card",
    reference: "REF123456790",
  },
  {
    id: "TXN001234567892",
    customerName: "Mike Johnson",
    biller: "BSES Rajdhani",
    amount: "1,850.00",
    status: "failed",
    date: "2024-01-12",
    time: "12:15:08",
    method: "Net Banking",
    reference: "REF123456791",
  },
  {
    id: "TXN001234567893",
    customerName: "Sarah Wilson",
    biller: "Bharti Airtel",
    amount: "799.00",
    status: "processing",
    date: "2024-01-12",
    time: "11:20:45",
    method: "Debit Card",
    reference: "REF123456792",
  },
];

export default function TransactionStatus() {
  const [searchType, setSearchType] = useState("transactionId");
  const [searchValue, setSearchValue] = useState("");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [statusFilter, setStatusFilter] = useState("all");
  const [transactions, setTransactions] = useState(sampleTransactions);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  const handleSearch = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Filter based on search criteria
      let filtered = sampleTransactions;
      if (searchValue) {
        filtered = filtered.filter(
          (txn) =>
            txn.id.toLowerCase().includes(searchValue.toLowerCase()) ||
            txn.customerName
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            txn.reference.toLowerCase().includes(searchValue.toLowerCase()),
        );
      }
      if (statusFilter !== "all") {
        filtered = filtered.filter((txn) => txn.status === statusFilter);
      }
      setTransactions(filtered);
    }, 1500);
  };

  const getStatusBadge = (status: string) => {
    const statusInfo =
      transactionStatuses[status as keyof typeof transactionStatuses];
    const Icon = statusInfo.icon;
    return (
      <Badge className={`${statusInfo.color} flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {statusInfo.label}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Transaction Status
          </h1>
          <p className="text-slate-600">
            Track and monitor all your bill payment transactions in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Search and Filters */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Search & Filter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search Type */}
                <div>
                  <Label>Search By</Label>
                  <Select value={searchType} onValueChange={setSearchType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="transactionId">
                        Transaction ID
                      </SelectItem>
                      <SelectItem value="reference">
                        Reference Number
                      </SelectItem>
                      <SelectItem value="mobile">Mobile Number</SelectItem>
                      <SelectItem value="customerName">
                        Customer Name
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Search Value */}
                <div>
                  <Label>Search Value</Label>
                  <Input
                    placeholder="Enter search term..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>

                {/* Date Range */}
                <div className="space-y-2">
                  <Label>Date Range</Label>
                  <div className="grid grid-cols-1 gap-2">
                    <Input
                      type="date"
                      value={dateRange.from}
                      onChange={(e) =>
                        setDateRange({ ...dateRange, from: e.target.value })
                      }
                    />
                    <Input
                      type="date"
                      value={dateRange.to}
                      onChange={(e) =>
                        setDateRange({ ...dateRange, to: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <Label>Status</Label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="success">Success</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleSearch}
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? "Searching..." : "Search Transactions"}
                </Button>

                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Export Results
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Transaction Results */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="list" className="space-y-6">
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="list">List View</TabsTrigger>
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                </TabsList>
                <div className="text-sm text-slate-600">
                  {transactions.length} transactions found
                </div>
              </div>

              <TabsContent value="list" className="space-y-4">
                {transactions.map((transaction) => (
                  <Card
                    key={transaction.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-slate-900">
                              {transaction.id}
                            </h3>
                            {getStatusBadge(transaction.status)}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-slate-600">
                            <div>
                              <span className="font-medium">Customer:</span>{" "}
                              {transaction.customerName}
                            </div>
                            <div>
                              <span className="font-medium">Biller:</span>{" "}
                              {transaction.biller}
                            </div>
                            <div>
                              <span className="font-medium">Amount:</span> ₹
                              {transaction.amount}
                            </div>
                            <div>
                              <span className="font-medium">Date:</span>{" "}
                              {transaction.date} {transaction.time}
                            </div>
                            <div>
                              <span className="font-medium">Method:</span>{" "}
                              {transaction.method}
                            </div>
                            <div>
                              <span className="font-medium">Reference:</span>{" "}
                              {transaction.reference}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedTransaction(transaction)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                          {transaction.status === "failed" && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-orange-600 border-orange-200"
                            >
                              <AlertTriangle className="w-4 h-4 mr-1" />
                              Raise Complaint
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {transactions.length === 0 && !isLoading && (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-slate-900 mb-2">
                        No transactions found
                      </h3>
                      <p className="text-slate-600">
                        Try adjusting your search criteria or date range
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="summary">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">
                            Total Transactions
                          </p>
                          <p className="text-2xl font-bold text-slate-900">
                            {transactions.length}
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Search className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Successful</p>
                          <p className="text-2xl font-bold text-green-600">
                            {
                              transactions.filter((t) => t.status === "success")
                                .length
                            }
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Pending</p>
                          <p className="text-2xl font-bold text-yellow-600">
                            {
                              transactions.filter(
                                (t) =>
                                  t.status === "pending" ||
                                  t.status === "processing",
                              ).length
                            }
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-6 h-6 text-yellow-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Failed</p>
                          <p className="text-2xl font-bold text-red-600">
                            {
                              transactions.filter((t) => t.status === "failed")
                                .length
                            }
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <XCircle className="w-6 h-6 text-red-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Transaction Volume by Status</CardTitle>
                    <CardDescription>
                      Overview of transaction status distribution
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(transactionStatuses).map(
                        ([status, info]) => {
                          const count = transactions.filter(
                            (t) => t.status === status,
                          ).length;
                          const percentage =
                            transactions.length > 0
                              ? (count / transactions.length) * 100
                              : 0;
                          return (
                            <div key={status}>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="flex items-center gap-2">
                                  <info.icon className="w-4 h-4" />
                                  {info.label}
                                </span>
                                <span>
                                  {count} ({percentage.toFixed(1)}%)
                                </span>
                              </div>
                              <div className="w-full bg-slate-200 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full ${
                                    status === "success"
                                      ? "bg-green-500"
                                      : status === "pending" ||
                                          status === "processing"
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                  }`}
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          );
                        },
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Transaction Detail Modal */}
        {selectedTransaction && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Transaction Details</CardTitle>
                    <CardDescription>{selectedTransaction.id}</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedTransaction(null)}
                  >
                    <XCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Status</Label>
                    <div className="mt-1">
                      {getStatusBadge(selectedTransaction.status)}
                    </div>
                  </div>
                  <div>
                    <Label>Amount</Label>
                    <div className="mt-1 text-lg font-semibold">
                      ₹{selectedTransaction.amount}
                    </div>
                  </div>
                  <div>
                    <Label>Customer Name</Label>
                    <div className="mt-1">
                      {selectedTransaction.customerName}
                    </div>
                  </div>
                  <div>
                    <Label>Biller</Label>
                    <div className="mt-1">{selectedTransaction.biller}</div>
                  </div>
                  <div>
                    <Label>Date & Time</Label>
                    <div className="mt-1">
                      {selectedTransaction.date} {selectedTransaction.time}
                    </div>
                  </div>
                  <div>
                    <Label>Payment Method</Label>
                    <div className="mt-1">{selectedTransaction.method}</div>
                  </div>
                  <div className="md:col-span-2">
                    <Label>Reference Number</Label>
                    <div className="mt-1 font-mono text-sm bg-slate-100 p-2 rounded">
                      {selectedTransaction.reference}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
