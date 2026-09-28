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
  CreditCard,
  Smartphone,
  Zap,
  Shield,
  CheckCircle,
  AlertCircle,
  Search,
  Eye,
  Calendar,
} from "lucide-react";

const billerCategories = [
  { id: "electricity", name: "Electricity", icon: Zap, count: "250+ Billers" },
  { id: "mobile", name: "Mobile", icon: Smartphone, count: "15+ Operators" },
  { id: "gas", name: "Gas", icon: AlertCircle, count: "45+ Providers" },
  { id: "water", name: "Water", icon: Search, count: "180+ Utilities" },
];

const popularBillers = [
  { id: "tata_power", name: "Tata Power", category: "Electricity", logo: "TP" },
  { id: "reliance_jio", name: "Reliance Jio", category: "Mobile", logo: "JIO" },
  {
    id: "bharti_airtel",
    name: "Bharti Airtel",
    category: "Mobile",
    logo: "AIR",
  },
  { id: "bses", name: "BSES Rajdhani", category: "Electricity", logo: "BSES" },
];

export default function BillPayment() {
  const [selectedBiller, setSelectedBiller] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [customerDetails, setCustomerDetails] = useState({
    consumerId: "",
    mobileNumber: "",
    amount: "",
  });
  const [billDetails, setBillDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchBill = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setBillDetails({
        consumerName: "John Doe",
        billAmount: "2,450.00",
        dueDate: "2024-01-15",
        billPeriod: "Dec 2023",
        status: "Pending",
      });
      setIsLoading(false);
    }, 2000);
  };

  const handlePayBill = async () => {
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      // Show success message
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Bill Payment
          </h1>
          <p className="text-slate-600">
            Secure and instant bill payment processing for all your utilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Payment Form */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="quick-pay" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="quick-pay">Quick Payment</TabsTrigger>
                <TabsTrigger value="bulk-pay">Bulk Payment</TabsTrigger>
              </TabsList>

              <TabsContent value="quick-pay" className="space-y-6">
                {/* Biller Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Search className="w-5 h-5 mr-2" />
                      Select Biller
                    </CardTitle>
                    <CardDescription>
                      Choose your service provider from our extensive list of
                      billers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Categories */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {billerCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              selectedCategory === category.id
                                ? "border-blue-500 bg-blue-50"
                                : "border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <Icon
                              className={`w-6 h-6 mx-auto mb-2 ${
                                selectedCategory === category.id
                                  ? "text-blue-600"
                                  : "text-slate-600"
                              }`}
                            />
                            <div className="text-sm font-medium text-slate-900">
                              {category.name}
                            </div>
                            <div className="text-xs text-slate-500">
                              {category.count}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Biller Selection */}
                    <div>
                      <Label htmlFor="biller">Select Biller</Label>
                      <Select
                        value={selectedBiller}
                        onValueChange={setSelectedBiller}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose your service provider" />
                        </SelectTrigger>
                        <SelectContent>
                          {popularBillers.map((biller) => (
                            <SelectItem key={biller.id} value={biller.id}>
                              <div className="flex items-center">
                                <div className="w-6 h-6 bg-blue-100 rounded text-xs font-bold flex items-center justify-center mr-2">
                                  {biller.logo}
                                </div>
                                {biller.name}
                                <Badge
                                  variant="secondary"
                                  className="ml-2 text-xs"
                                >
                                  {biller.category}
                                </Badge>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Customer Details */}
                {selectedBiller && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Eye className="w-5 h-5 mr-2" />
                        Customer Details
                      </CardTitle>
                      <CardDescription>
                        Enter your customer information to fetch bill details
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="consumerId">Consumer ID</Label>
                          <Input
                            id="consumerId"
                            placeholder="Enter your consumer ID"
                            value={customerDetails.consumerId}
                            onChange={(e) =>
                              setCustomerDetails({
                                ...customerDetails,
                                consumerId: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobileNumber">Mobile Number</Label>
                          <Input
                            id="mobileNumber"
                            placeholder="Enter mobile number"
                            value={customerDetails.mobileNumber}
                            onChange={(e) =>
                              setCustomerDetails({
                                ...customerDetails,
                                mobileNumber: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <Button
                        onClick={handleFetchBill}
                        disabled={!customerDetails.consumerId || isLoading}
                        className="w-full"
                      >
                        {isLoading ? "Fetching Bill..." : "Fetch Bill Details"}
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {/* Bill Details */}
                {billDetails && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                        Bill Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>Consumer Name</Label>
                          <div className="p-2 bg-slate-50 rounded text-sm">
                            {billDetails.consumerName}
                          </div>
                        </div>
                        <div>
                          <Label>Bill Amount</Label>
                          <div className="p-2 bg-slate-50 rounded text-sm font-semibold">
                            ₹{billDetails.billAmount}
                          </div>
                        </div>
                        <div>
                          <Label>Due Date</Label>
                          <div className="p-2 bg-slate-50 rounded text-sm">
                            {billDetails.dueDate}
                          </div>
                        </div>
                        <div>
                          <Label>Bill Period</Label>
                          <div className="p-2 bg-slate-50 rounded text-sm">
                            {billDetails.billPeriod}
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="amount">Payment Amount</Label>
                        <Input
                          id="amount"
                          placeholder="Enter amount to pay"
                          value={customerDetails.amount}
                          onChange={(e) =>
                            setCustomerDetails({
                              ...customerDetails,
                              amount: e.target.value,
                            })
                          }
                        />
                      </div>

                      <Button
                        onClick={handlePayBill}
                        disabled={!customerDetails.amount || isLoading}
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        {isLoading ? "Processing Payment..." : "Pay Now"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="bulk-pay">
                <Card>
                  <CardHeader>
                    <CardTitle>Bulk Payment</CardTitle>
                    <CardDescription>
                      Upload multiple bills for batch processing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                      <div className="text-slate-500 mb-4">
                        Drag and drop your CSV file here, or click to browse
                      </div>
                      <Button variant="outline">Select File</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Billers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Billers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {popularBillers.map((biller) => (
                  <button
                    key={biller.id}
                    onClick={() => setSelectedBiller(biller.id)}
                    className="w-full flex items-center p-3 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-sm font-bold text-blue-600">
                        {biller.logo}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-slate-900">
                        {biller.name}
                      </div>
                      <div className="text-sm text-slate-500">
                        {biller.category}
                      </div>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Security Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  256-bit SSL encryption
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  PCI DSS compliant
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Real-time fraud detection
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Instant transaction alerts
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
