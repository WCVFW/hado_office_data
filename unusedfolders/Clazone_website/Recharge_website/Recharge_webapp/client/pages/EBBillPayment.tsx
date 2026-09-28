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
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Zap,
  Search,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Clock,
  FileText,
  CreditCard,
  Download,
  Eye,
} from "lucide-react";

const ebBoards = [
  { code: "TNEB", name: "Tamil Nadu Electricity Board", state: "Tamil Nadu" },
  {
    code: "BESCOM",
    name: "Bangalore Electricity Supply Company",
    state: "Karnataka",
  },
  {
    code: "MSEDCL",
    name: "Maharashtra State Electricity Distribution",
    state: "Maharashtra",
  },
  {
    code: "WBSEDCL",
    name: "West Bengal State Electricity Distribution",
    state: "West Bengal",
  },
  { code: "TPDDL", name: "Tata Power Delhi Distribution", state: "Delhi" },
  { code: "BSES", name: "BSES Rajdhani Power Limited", state: "Delhi" },
  { code: "PSPCL", name: "Punjab State Power Corporation", state: "Punjab" },
  { code: "UPCL", name: "Uttarakhand Power Corporation", state: "Uttarakhand" },
];

const sampleBillData = {
  consumerName: "John Doe",
  consumerNumber: "123456789012",
  billAmount: "2,450.00",
  dueDate: "2024-01-25",
  billDate: "2024-01-01",
  billPeriod: "Dec 2023",
  previousReading: "15,420",
  currentReading: "15,720",
  unitsConsumed: "300",
  tariffCategory: "Domestic",
  connectionType: "Single Phase",
  sanctionedLoad: "2 KW",
  outstandingAmount: "0.00",
  rebateAmount: "25.00",
  netAmount: "2,425.00",
};

const recentPayments = [
  {
    amount: "1,890",
    date: "2023-12-15",
    status: "success",
    board: "TNEB",
    period: "Nov 2023",
  },
  {
    amount: "2,150",
    date: "2023-11-14",
    status: "success",
    board: "TNEB",
    period: "Oct 2023",
  },
  {
    amount: "1,750",
    date: "2023-10-16",
    status: "success",
    board: "TNEB",
    period: "Sep 2023",
  },
];

export default function EBBillPayment() {
  const [selectedBoard, setSelectedBoard] = useState("");
  const [consumerNumber, setConsumerNumber] = useState("");
  const [billData, setBillData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [showBillDetails, setShowBillDetails] = useState(false);

  const handleFetchBill = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setBillData(sampleBillData);
      setPaymentAmount(sampleBillData.netAmount.replace(/,/g, ""));
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

  const calculateDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getDueDateBadge = (dueDate: string) => {
    const days = calculateDaysUntilDue(dueDate);
    if (days < 0) {
      return (
        <Badge className="bg-red-100 text-red-800">
          Overdue by {Math.abs(days)} days
        </Badge>
      );
    } else if (days <= 7) {
      return (
        <Badge className="bg-yellow-100 text-yellow-800">
          Due in {days} days
        </Badge>
      );
    } else {
      return (
        <Badge className="bg-green-100 text-green-800">
          Due in {days} days
        </Badge>
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            EB Bill Payment
          </h1>
          <p className="text-slate-600">
            Pay your electricity bills instantly across all state electricity
            boards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Payment Form */}
          <div className="lg:col-span-2">
            {/* Bill Fetch Section */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Fetch Electricity Bill
                </CardTitle>
                <CardDescription>
                  Enter your details to fetch the latest electricity bill
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="board">Electricity Board</Label>
                  <Select
                    value={selectedBoard}
                    onValueChange={setSelectedBoard}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your electricity board" />
                    </SelectTrigger>
                    <SelectContent>
                      {ebBoards.map((board) => (
                        <SelectItem key={board.code} value={board.code}>
                          <div>
                            <div className="font-medium">{board.name}</div>
                            <div className="text-sm text-slate-600">
                              {board.state}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="consumerNumber">Consumer Number</Label>
                  <Input
                    id="consumerNumber"
                    placeholder="Enter your consumer number"
                    value={consumerNumber}
                    onChange={(e) => setConsumerNumber(e.target.value)}
                  />
                  <div className="text-sm text-slate-600 mt-1">
                    Usually found on your previous electricity bill
                  </div>
                </div>

                <Button
                  onClick={handleFetchBill}
                  disabled={!selectedBoard || !consumerNumber || isLoading}
                  className="w-full"
                >
                  {isLoading ? "Fetching Bill..." : "Fetch Bill"}
                </Button>
              </CardContent>
            </Card>

            {/* Bill Details */}
            {billData && (
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        Bill Details
                      </CardTitle>
                      <CardDescription>
                        {billData.billPeriod} • Consumer:{" "}
                        {billData.consumerName}
                      </CardDescription>
                    </div>
                    {getDueDateBadge(billData.dueDate)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">
                        ₹{billData.billAmount}
                      </div>
                      <div className="text-sm text-slate-600">Total Amount</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-900">
                        ₹{billData.netAmount}
                      </div>
                      <div className="text-sm text-blue-700">Net Payable</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-900">
                        {billData.unitsConsumed}
                      </div>
                      <div className="text-sm text-green-700">
                        Units Consumed
                      </div>
                    </div>
                  </div>

                  {/* Detailed Bill View */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-slate-900">
                        Bill Summary
                      </h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowBillDetails(!showBillDetails)}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        {showBillDetails ? "Hide" : "View"} Details
                      </Button>
                    </div>

                    {showBillDetails && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Consumer Number:</span>
                            <span className="font-medium">
                              {billData.consumerNumber}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Bill Date:</span>
                            <span className="font-medium">
                              {billData.billDate}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Due Date:</span>
                            <span className="font-medium">
                              {billData.dueDate}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Tariff Category:</span>
                            <span className="font-medium">
                              {billData.tariffCategory}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Connection Type:</span>
                            <span className="font-medium">
                              {billData.connectionType}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Previous Reading:</span>
                            <span className="font-medium">
                              {billData.previousReading} kWh
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Current Reading:</span>
                            <span className="font-medium">
                              {billData.currentReading} kWh
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Sanctioned Load:</span>
                            <span className="font-medium">
                              {billData.sanctionedLoad}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Outstanding Amount:</span>
                            <span className="font-medium">
                              ₹{billData.outstandingAmount}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Rebate:</span>
                            <span className="font-medium text-green-600">
                              -₹{billData.rebateAmount}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Payment Section */}
                    <div className="border-t pt-4">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="paymentAmount">Payment Amount</Label>
                          <Input
                            id="paymentAmount"
                            value={paymentAmount}
                            onChange={(e) => setPaymentAmount(e.target.value)}
                            placeholder="Enter amount to pay"
                          />
                          <div className="flex gap-2 mt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                setPaymentAmount(
                                  billData.netAmount.replace(/,/g, ""),
                                )
                              }
                            >
                              Pay Full Amount
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                setPaymentAmount(
                                  billData.billAmount.replace(/,/g, ""),
                                )
                              }
                            >
                              Pay Total Amount
                            </Button>
                          </div>
                        </div>

                        {/* Commission Display */}
                        {paymentAmount && (
                          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-green-700">
                                Your Commission:
                              </span>
                              <span className="font-semibold text-green-800">
                                ₹
                                {Math.min(
                                  Math.max(
                                    (parseFloat(paymentAmount) * 1.5) / 100,
                                    3,
                                  ),
                                  25,
                                ).toFixed(2)}
                              </span>
                            </div>
                            <div className="text-xs text-green-600 mt-1">
                              1.5% commission rate (Min: ₹3, Max: ₹25)
                            </div>
                          </div>
                        )}

                        {calculateDaysUntilDue(billData.dueDate) <= 7 && (
                          <Alert>
                            <AlertTriangle className="h-4 w-4" />
                            <AlertDescription>
                              Bill is due soon. Pay before {billData.dueDate} to
                              avoid late fees.
                            </AlertDescription>
                          </Alert>
                        )}

                        <Button
                          onClick={handlePayBill}
                          disabled={
                            !paymentAmount ||
                            parseFloat(paymentAmount) <= 0 ||
                            isLoading
                          }
                          className="w-full bg-green-600 hover:bg-green-700 h-12"
                        >
                          {isLoading
                            ? "Processing Payment..."
                            : `Pay ₹${paymentAmount || "0"}`}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download Previous Bills
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Bill History
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Set Auto-Pay
                </Button>
              </CardContent>
            </Card>

            {/* Recent Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Recent Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentPayments.map((payment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <div className="font-medium">₹{payment.amount}</div>
                      <div className="text-sm text-slate-600">
                        {payment.board} • {payment.period}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Success
                      </div>
                      <div className="text-xs text-slate-500">
                        {payment.date}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Boards */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Boards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {ebBoards.slice(0, 5).map((board) => (
                  <button
                    key={board.code}
                    onClick={() => setSelectedBoard(board.code)}
                    className="w-full text-left p-2 rounded border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-sm">{board.code}</div>
                    <div className="text-xs text-slate-600">{board.state}</div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Bill Payment Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <div>• Pay before due date to avoid late fees</div>
                <div>• Check meter reading accuracy</div>
                <div>• Keep payment receipts safe</div>
                <div>• Set up auto-pay for convenience</div>
                <div>• Report meter issues promptly</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
