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
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  FileText,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Search,
  Upload,
  Download,
  Clock,
  Shield,
  Eye,
  RefreshCw,
} from "lucide-react";

const validationRules = [
  {
    id: "consumer_id",
    name: "Consumer ID Format",
    description: "Validates consumer ID pattern and length",
  },
  {
    id: "amount_limit",
    name: "Amount Validation",
    description: "Checks minimum and maximum payment limits",
  },
  {
    id: "due_date",
    name: "Due Date Check",
    description: "Validates bill due date and late payment rules",
  },
  {
    id: "duplicate_check",
    name: "Duplicate Prevention",
    description: "Prevents duplicate payments for same bill",
  },
  {
    id: "biller_status",
    name: "Biller Status",
    description: "Verifies biller is active and accepting payments",
  },
  {
    id: "customer_status",
    name: "Customer Status",
    description: "Validates customer account status and restrictions",
  },
];

const sampleValidationResults = [
  {
    id: "VAL001",
    consumerId: "123456789",
    biller: "Tata Power",
    validationTime: "2024-01-12 14:30:25",
    status: "passed",
    rulesChecked: 6,
    rulesPassed: 6,
    rulesFailed: 0,
    details: {
      consumer_id: { status: "passed", message: "Valid format" },
      amount_limit: { status: "passed", message: "Within limits" },
      due_date: { status: "passed", message: "Valid due date" },
      duplicate_check: { status: "passed", message: "No duplicates found" },
      biller_status: { status: "passed", message: "Biller active" },
      customer_status: { status: "passed", message: "Customer verified" },
    },
  },
  {
    id: "VAL002",
    consumerId: "987654321",
    biller: "BSES Rajdhani",
    validationTime: "2024-01-12 13:45:12",
    status: "failed",
    rulesChecked: 6,
    rulesPassed: 4,
    rulesFailed: 2,
    details: {
      consumer_id: { status: "passed", message: "Valid format" },
      amount_limit: { status: "failed", message: "Amount exceeds daily limit" },
      due_date: { status: "passed", message: "Valid due date" },
      duplicate_check: {
        status: "failed",
        message: "Duplicate payment detected",
      },
      biller_status: { status: "passed", message: "Biller active" },
      customer_status: { status: "passed", message: "Customer verified" },
    },
  },
];

export default function BillValidation() {
  const [validationType, setValidationType] = useState("single");
  const [validationData, setValidationData] = useState({
    consumerId: "",
    billerId: "",
    amount: "",
    dueDate: "",
  });
  const [validationResults, setValidationResults] = useState(
    sampleValidationResults,
  );
  const [isValidating, setIsValidating] = useState(false);
  const [selectedResult, setSelectedResult] = useState<any>(null);

  const handleValidation = async () => {
    setIsValidating(true);
    // Simulate API call
    setTimeout(() => {
      const newResult = {
        id: `VAL${String(validationResults.length + 1).padStart(3, "0")}`,
        consumerId: validationData.consumerId,
        biller: "Selected Biller",
        validationTime: new Date().toISOString().slice(0, 19).replace("T", " "),
        status: Math.random() > 0.3 ? "passed" : "failed",
        rulesChecked: 6,
        rulesPassed: Math.floor(Math.random() * 6) + 1,
        rulesFailed: 0,
        details: {},
      };
      newResult.rulesFailed = newResult.rulesChecked - newResult.rulesPassed;

      setValidationResults([newResult, ...validationResults]);
      setIsValidating(false);
    }, 2000);
  };

  const getStatusBadge = (status: string) => {
    const configs = {
      passed: {
        label: "Passed",
        color: "bg-green-100 text-green-800",
        icon: CheckCircle,
      },
      failed: {
        label: "Failed",
        color: "bg-red-100 text-red-800",
        icon: XCircle,
      },
      warning: {
        label: "Warning",
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

  const getRuleStatusIcon = (status: string) => {
    switch (status) {
      case "passed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <Clock className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Bill Validation
          </h1>
          <p className="text-slate-600">
            Comprehensive bill validation with real-time rule checking and
            compliance verification
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Validation Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Validation Request
                </CardTitle>
                <CardDescription>
                  Enter bill details for comprehensive validation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Validation Type */}
                <Tabs value={validationType} onValueChange={setValidationType}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="single">Single Bill</TabsTrigger>
                    <TabsTrigger value="bulk">Bulk Upload</TabsTrigger>
                  </TabsList>

                  <TabsContent value="single" className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="consumerId">Consumer ID</Label>
                      <Input
                        id="consumerId"
                        placeholder="Enter consumer ID"
                        value={validationData.consumerId}
                        onChange={(e) =>
                          setValidationData({
                            ...validationData,
                            consumerId: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="billerId">Select Biller</Label>
                      <Select
                        value={validationData.billerId}
                        onValueChange={(value) =>
                          setValidationData({
                            ...validationData,
                            billerId: value,
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose biller" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tata_power">Tata Power</SelectItem>
                          <SelectItem value="bses">BSES Rajdhani</SelectItem>
                          <SelectItem value="reliance_jio">
                            Reliance Jio
                          </SelectItem>
                          <SelectItem value="bharti_airtel">
                            Bharti Airtel
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        placeholder="Enter amount"
                        value={validationData.amount}
                        onChange={(e) =>
                          setValidationData({
                            ...validationData,
                            amount: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="dueDate">Due Date</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        value={validationData.dueDate}
                        onChange={(e) =>
                          setValidationData({
                            ...validationData,
                            dueDate: e.target.value,
                          })
                        }
                      />
                    </div>

                    <Button
                      onClick={handleValidation}
                      disabled={
                        !validationData.consumerId ||
                        !validationData.billerId ||
                        isValidating
                      }
                      className="w-full"
                    >
                      {isValidating ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Validating...
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4 mr-2" />
                          Validate Bill
                        </>
                      )}
                    </Button>
                  </TabsContent>

                  <TabsContent value="bulk" className="space-y-4 mt-4">
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <div className="text-sm text-slate-600 mb-2">
                        Upload CSV file for bulk validation
                      </div>
                      <Button variant="outline" size="sm">
                        Select File
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Validation Rules */}
                <div className="mt-6">
                  <h4 className="font-medium text-slate-900 mb-3">
                    Validation Rules
                  </h4>
                  <div className="space-y-2">
                    {validationRules.map((rule) => (
                      <div key={rule.id} className="flex items-start text-xs">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-slate-700">
                            {rule.name}
                          </div>
                          <div className="text-slate-500">
                            {rule.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Validation Results */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Validation Results</CardTitle>
                    <CardDescription>
                      Real-time validation results with detailed rule checking
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export Results
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {validationResults.map((result) => (
                    <Card
                      key={result.id}
                      className="border-l-4 border-l-blue-500"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <h4 className="font-medium text-slate-900">
                              {result.id}
                            </h4>
                            {getStatusBadge(result.status)}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedResult(result)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-slate-600">Consumer ID:</span>
                            <div className="font-medium">
                              {result.consumerId}
                            </div>
                          </div>
                          <div>
                            <span className="text-slate-600">Biller:</span>
                            <div className="font-medium">{result.biller}</div>
                          </div>
                          <div>
                            <span className="text-slate-600">
                              Validation Time:
                            </span>
                            <div className="font-medium">
                              {result.validationTime}
                            </div>
                          </div>
                          <div>
                            <span className="text-slate-600">
                              Rules Status:
                            </span>
                            <div className="font-medium">
                              {result.rulesPassed}/{result.rulesChecked} passed
                            </div>
                          </div>
                        </div>

                        {result.status === "failed" && (
                          <Alert className="mt-3">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertDescription>
                              This bill failed validation. Please review the
                              rule details before proceeding with payment.
                            </AlertDescription>
                          </Alert>
                        )}
                      </CardContent>
                    </Card>
                  ))}

                  {validationResults.length === 0 && (
                    <div className="text-center py-12">
                      <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-slate-900 mb-2">
                        No validations yet
                      </h3>
                      <p className="text-slate-600">
                        Start by validating a bill using the form on the left
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Result Modal */}
        {selectedResult && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Validation Details - {selectedResult.id}
                    </CardTitle>
                    <CardDescription>
                      Comprehensive rule-by-rule validation results
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedResult(null)}
                  >
                    <XCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Summary */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-slate-900">
                        {selectedResult.rulesChecked}
                      </div>
                      <div className="text-sm text-slate-600">Total Rules</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {selectedResult.rulesPassed}
                      </div>
                      <div className="text-sm text-slate-600">Passed</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-red-600">
                        {selectedResult.rulesFailed}
                      </div>
                      <div className="text-sm text-slate-600">Failed</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold">
                        {getStatusBadge(selectedResult.status)}
                      </div>
                      <div className="text-sm text-slate-600">
                        Overall Status
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Rule Details */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-4">
                    Rule Validation Details
                  </h4>
                  <div className="space-y-3">
                    {validationRules.map((rule) => {
                      const ruleResult = selectedResult.details[rule.id] || {
                        status: "pending",
                        message: "Not checked",
                      };
                      return (
                        <div
                          key={rule.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            {getRuleStatusIcon(ruleResult.status)}
                            <div>
                              <div className="font-medium text-slate-900">
                                {rule.name}
                              </div>
                              <div className="text-sm text-slate-600">
                                {rule.description}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`text-sm font-medium ${
                                ruleResult.status === "passed"
                                  ? "text-green-600"
                                  : ruleResult.status === "failed"
                                    ? "text-red-600"
                                    : "text-yellow-600"
                              }`}
                            >
                              {ruleResult.message}
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
