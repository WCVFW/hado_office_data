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
  Banknote,
  CreditCard,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  Eye,
  EyeOff,
  Smartphone,
  Users,
} from "lucide-react";

const withdrawalAmounts = [100, 200, 500, 1000, 2000, 5000, 10000];

const banks = [
  { code: "SBI", name: "State Bank of India", logo: "SBI" },
  { code: "HDFC", name: "HDFC Bank", logo: "HDFC" },
  { code: "ICICI", name: "ICICI Bank", logo: "ICICI" },
  { code: "AXIS", name: "Axis Bank", logo: "AXIS" },
  { code: "PNB", name: "Punjab National Bank", logo: "PNB" },
  { code: "BOI", name: "Bank of India", logo: "BOI" },
];

const recentTransactions = [
  {
    amount: 2000,
    date: "2024-01-12",
    time: "14:30",
    status: "success",
    bank: "SBI",
  },
  {
    amount: 1000,
    date: "2024-01-11",
    time: "10:15",
    status: "success",
    bank: "HDFC",
  },
  {
    amount: 500,
    date: "2024-01-10",
    time: "16:45",
    status: "failed",
    bank: "ICICI",
  },
];

export default function MiniATM() {
  const [cardNumber, setCardNumber] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [amount, setAmount] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1); // 1: Card details, 2: Amount selection, 3: Confirmation

  const handleCardVerification = async () => {
    setIsProcessing(true);
    // Simulate card verification
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 2000);
  };

  const handleWithdrawal = async () => {
    setIsProcessing(true);
    // Simulate withdrawal processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 3000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const resetTransaction = () => {
    setStep(1);
    setCardNumber("");
    setPin("");
    setAmount("");
    setSelectedBank("");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Mini ATM</h1>
          <p className="text-slate-600">
            Withdraw cash using your debit card with secure authentication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main ATM Interface */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Banknote className="w-5 h-5 mr-2" />
                  Cash Withdrawal
                </CardTitle>
                <CardDescription>
                  Follow the steps to withdraw cash securely
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Step Indicator */}
                <div className="flex items-center mb-6">
                  {[1, 2, 3].map((stepNum) => (
                    <div key={stepNum} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          step >= stepNum
                            ? "bg-blue-600 text-white"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {step > stepNum ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          stepNum
                        )}
                      </div>
                      {stepNum < 3 && (
                        <div
                          className={`w-20 h-1 mx-2 ${
                            step > stepNum ? "bg-blue-600" : "bg-slate-200"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 1: Card Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="bank">Select Bank</Label>
                      <Select
                        value={selectedBank}
                        onValueChange={setSelectedBank}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose your bank" />
                        </SelectTrigger>
                        <SelectContent>
                          {banks.map((bank) => (
                            <SelectItem key={bank.code} value={bank.code}>
                              <div className="flex items-center">
                                <div className="w-6 h-6 bg-blue-100 rounded text-xs font-bold flex items-center justify-center mr-2">
                                  {bank.logo}
                                </div>
                                {bank.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="cardNumber">Debit Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) =>
                          setCardNumber(formatCardNumber(e.target.value))
                        }
                        maxLength={19}
                      />
                    </div>

                    <div>
                      <Label htmlFor="pin">ATM PIN</Label>
                      <div className="relative">
                        <Input
                          id="pin"
                          type={showPin ? "text" : "password"}
                          placeholder="Enter 4-digit PIN"
                          value={pin}
                          onChange={(e) =>
                            setPin(
                              e.target.value.replace(/\D/g, "").slice(0, 4),
                            )
                          }
                          maxLength={4}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                          onClick={() => setShowPin(!showPin)}
                        >
                          {showPin ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <Button
                      onClick={handleCardVerification}
                      disabled={
                        !selectedBank ||
                        cardNumber.length < 19 ||
                        pin.length < 4 ||
                        isProcessing
                      }
                      className="w-full"
                    >
                      {isProcessing ? "Verifying Card..." : "Verify Card"}
                    </Button>
                  </div>
                )}

                {/* Step 2: Amount Selection */}
                {step === 2 && (
                  <div className="space-y-6">
                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        Card verified successfully. Please select withdrawal
                        amount.
                      </AlertDescription>
                    </Alert>

                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-sm text-blue-700 font-medium mb-1">
                        Commission Information
                      </div>
                      <div className="text-xs text-blue-600">
                        Earn ₹5 commission per withdrawal transaction
                        (regardless of amount)
                      </div>
                    </div>

                    <div>
                      <Label>Quick Amount Selection</Label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-2">
                        {withdrawalAmounts.map((quickAmount) => (
                          <Button
                            key={quickAmount}
                            variant={
                              amount === quickAmount.toString()
                                ? "default"
                                : "outline"
                            }
                            onClick={() => setAmount(quickAmount.toString())}
                            className="h-12"
                          >
                            ₹{quickAmount}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="customAmount">Custom Amount</Label>
                      <Input
                        id="customAmount"
                        placeholder="Enter amount (₹100 - ₹25,000)"
                        value={amount}
                        onChange={(e) =>
                          setAmount(e.target.value.replace(/\D/g, ""))
                        }
                        type="number"
                        min="100"
                        max="25000"
                      />
                      <div className="text-sm text-slate-600 mt-1">
                        Daily limit: ₹25,000 | Transaction limit: ₹10,000
                      </div>
                    </div>

                    <Button
                      onClick={handleWithdrawal}
                      disabled={
                        !amount ||
                        parseInt(amount) < 100 ||
                        parseInt(amount) > 25000 ||
                        isProcessing
                      }
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      {isProcessing
                        ? "Processing Withdrawal..."
                        : `Withdraw ₹${amount || "0"}`}
                    </Button>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <div className="space-y-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        Transaction Successful!
                      </h3>
                      <p className="text-slate-600">
                        ₹{amount} has been debited from your account
                      </p>
                    </div>

                    <Card className="bg-slate-50">
                      <CardContent className="p-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Transaction ID:</span>
                            <span className="font-mono">
                              ATM{Date.now().toString().slice(-8)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Amount:</span>
                            <span className="font-semibold">₹{amount}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Date & Time:</span>
                            <span>{new Date().toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bank:</span>
                            <span>
                              {banks.find((b) => b.code === selectedBank)?.name}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Button onClick={resetTransaction} className="w-full">
                      New Transaction
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Recent Withdrawals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentTransactions.map((txn, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <div className="font-medium">₹{txn.amount}</div>
                      <div className="text-sm text-slate-600">
                        {txn.bank} • {txn.date}
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                          txn.status === "success"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {txn.status === "success" ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <AlertTriangle className="w-3 h-3 mr-1" />
                        )}
                        {txn.status}
                      </div>
                      <div className="text-xs text-slate-500">{txn.time}</div>
                    </div>
                  </div>
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
                  OTP verification
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Real-time fraud detection
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Transaction alerts
                </div>
              </CardContent>
            </Card>

            {/* Supported Banks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Supported Banks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {banks.map((bank) => (
                    <div
                      key={bank.code}
                      className="flex items-center p-2 border rounded"
                    >
                      <div className="w-6 h-6 bg-blue-100 rounded text-xs font-bold flex items-center justify-center mr-2">
                        {bank.logo}
                      </div>
                      <span className="text-sm">{bank.code}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
