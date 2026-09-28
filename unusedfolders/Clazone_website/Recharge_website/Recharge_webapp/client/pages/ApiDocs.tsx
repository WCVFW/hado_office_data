import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Search,
  Code,
  FileText,
  CheckCircle,
  AlertTriangle,
  Book,
  Globe,
  Zap,
  Settings,
  Download,
} from "lucide-react";

const apiCategories = [
  {
    id: "bill-payment",
    title: "Bill Payment APIs",
    description:
      "Core bill payment processing with fetch, validation, and payment APIs",
    methods: [
      {
        name: "Bill Fetch Request",
        method: "POST",
        endpoint: "/api/billfetch",
        description: "Fetch bill details from biller",
      },
      {
        name: "Bill Payment Request",
        method: "POST",
        endpoint: "/api/billpayment",
        description: "Process bill payment transaction",
      },
      {
        name: "Payment Reversal",
        method: "POST",
        endpoint: "/api/reversal",
        description: "Reverse payment transaction",
      },
    ],
    icon: Zap,
    color: "blue",
  },
  {
    id: "transaction-status",
    title: "Transaction Status & Complaints",
    description:
      "Transaction monitoring, status checking, and complaint management",
    methods: [
      {
        name: "Transaction Status Check",
        method: "GET",
        endpoint: "/api/transaction/status",
        description: "Check transaction status by ID or mobile",
      },
      {
        name: "Transaction Status (402)",
        method: "POST",
        endpoint: "/api/transaction/402",
        description: "Check pending transaction status",
      },
      {
        name: "Complaint Raise (501)",
        method: "POST",
        endpoint: "/api/complaint/raise",
        description: "Raise transaction-based complaint",
      },
      {
        name: "Complaint Status (506)",
        method: "GET",
        endpoint: "/api/complaint/status",
        description: "Check complaint status",
      },
      {
        name: "Complaint Closure (507)",
        method: "POST",
        endpoint: "/api/complaint/close",
        description: "Close complaint",
      },
    ],
    icon: Search,
    color: "green",
  },
  {
    id: "validation",
    title: "Bill Validation & Diagnostics",
    description: "Comprehensive bill validation and system diagnostic APIs",
    methods: [
      {
        name: "Bill Validation Request",
        method: "POST",
        endpoint: "/api/billvalidation",
        description: "Validate bill details before payment",
      },
      {
        name: "Diagnostic Request",
        method: "GET",
        endpoint: "/api/diagnostic",
        description: "System health and connectivity check",
      },
    ],
    icon: CheckCircle,
    color: "purple",
  },
  {
    id: "mdm",
    title: "Master Data Management",
    description: "Biller, agent, and plan master data management APIs",
    methods: [
      {
        name: "Biller Fetch MDM",
        method: "GET",
        endpoint: "/api/biller/mdm",
        description: "Fetch biller master data",
      },
      {
        name: "Agent MDM Fetch",
        method: "GET",
        endpoint: "/api/agent/mdm",
        description: "Fetch agent master data",
      },
      {
        name: "Plan MDM Push",
        method: "POST",
        endpoint: "/api/plan/mdm/push",
        description: "Push plan master data",
      },
      {
        name: "Plan MDM Pull",
        method: "GET",
        endpoint: "/api/plan/mdm/pull",
        description: "Pull plan master data",
      },
    ],
    icon: Settings,
    color: "orange",
  },
  {
    id: "biller-management",
    title: "Biller Management",
    description: "Biller status monitoring, activation, and configuration APIs",
    methods: [
      {
        name: "Biller Status Update",
        method: "POST",
        endpoint: "/api/biller/status/update",
        description: "Update biller operational status",
      },
      {
        name: "Biller Activation Check",
        method: "GET",
        endpoint: "/api/biller/activation",
        description: "Check biller activation status",
      },
      {
        name: "Biller Status Check",
        method: "GET",
        endpoint: "/api/biller/status",
        description: "Check biller status by ID",
      },
    ],
    icon: Shield,
    color: "indigo",
  },
];

const sampleApiResponse = {
  "Bill Fetch Request": {
    status: "success",
    billerResponse: {
      consumerName: "John Doe",
      billAmount: "2450.00",
      dueDate: "2024-01-15",
      billPeriod: "Dec 2023",
      outstandingAmount: "2450.00",
      billDate: "2024-01-01",
    },
    responseCode: "00",
    responseMessage: "Success",
  },
  "Bill Payment Request": {
    status: "success",
    transactionId: "TXN001234567890",
    referenceNumber: "REF123456789",
    timestamp: "2024-01-12T14:30:25Z",
    amount: "2450.00",
    responseCode: "00",
    responseMessage: "Payment processed successfully",
  },
};

export default function ApiDocs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("bill-payment");
  const [selectedMethod, setSelectedMethod] = useState<any>(null);

  const filteredCategories = apiCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.methods.some((method) =>
        method.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const getMethodBadge = (method: string) => {
    const colors = {
      GET: "bg-green-100 text-green-800",
      POST: "bg-blue-100 text-blue-800",
      PUT: "bg-orange-100 text-orange-800",
      DELETE: "bg-red-100 text-red-800",
    };
    return (
      <Badge
        className={
          colors[method as keyof typeof colors] || "bg-slate-100 text-slate-800"
        }
      >
        {method}
      </Badge>
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
                API Documentation
              </h1>
              <p className="text-slate-600">
                Comprehensive BBPS API reference with detailed specifications
                and examples
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download OpenAPI Spec
              </button>
            </div>
          </div>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search APIs, endpoints, or methods..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* API Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  API Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {filteredCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        selectedCategory === category.id
                          ? "bg-blue-100 border-blue-300 border"
                          : "hover:bg-slate-100 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-5 h-5 ${
                            selectedCategory === category.id
                              ? "text-blue-600"
                              : "text-slate-600"
                          }`}
                        />
                        <div>
                          <div
                            className={`font-medium ${
                              selectedCategory === category.id
                                ? "text-blue-900"
                                : "text-slate-900"
                            }`}
                          >
                            {category.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {category.methods.length} endpoints
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* API Documentation Content */}
          <div className="lg:col-span-3">
            {filteredCategories.map(
              (category) =>
                selectedCategory === category.id && (
                  <div key={category.id} className="space-y-6">
                    {/* Category Header */}
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center`}
                          >
                            <category.icon
                              className={`w-6 h-6 text-${category.color}-600`}
                            />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">
                              {category.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {category.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>

                    {/* API Methods */}
                    <div className="space-y-4">
                      {category.methods.map((method, index) => (
                        <Card
                          key={index}
                          className="hover:shadow-md transition-shadow"
                        >
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {getMethodBadge(method.method)}
                                <div>
                                  <CardTitle className="text-lg">
                                    {method.name}
                                  </CardTitle>
                                  <CardDescription>
                                    {method.description}
                                  </CardDescription>
                                </div>
                              </div>
                              <button
                                onClick={() => setSelectedMethod(method)}
                                className="px-4 py-2 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                              >
                                View Details
                              </button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm">
                              <span className="text-green-400">
                                {method.method}
                              </span>{" "}
                              <span className="text-blue-400">
                                {method.endpoint}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>

        {/* API Method Detail Modal */}
        {selectedMethod && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {getMethodBadge(selectedMethod.method)}
                      <CardTitle>{selectedMethod.name}</CardTitle>
                    </div>
                    <CardDescription>
                      {selectedMethod.description}
                    </CardDescription>
                  </div>
                  <button
                    onClick={() => setSelectedMethod(null)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <AlertTriangle className="w-5 h-5" />
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="space-y-6">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          Endpoint
                        </h4>
                        <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono">
                          <span className="text-green-400">
                            {selectedMethod.method}
                          </span>{" "}
                          <span className="text-blue-400">
                            {selectedMethod.endpoint}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          Description
                        </h4>
                        <p className="text-slate-600">
                          {selectedMethod.description}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          Authentication
                        </h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm">
                            Requires API Key and digital signature
                          </span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="request">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          Headers
                        </h4>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <pre className="text-sm">
                            {`Content-Type: application/xml
Authorization: Bearer {api_key}
X-Request-ID: {unique_request_id}
X-Timestamp: {timestamp}`}
                          </pre>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          Request Body
                        </h4>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <pre className="text-sm">
                            {`<?xml version="1.0" encoding="UTF-8"?>
<BillFetchRequest>
  <Head>
    <msgId>MSG001234567890</msgId>
    <orgId>BBPOU001</orgId>
    <ts>2024-01-12T14:30:25.000Z</ts>
  </Head>
  <Body>
    <billerId>TPDDL00001</billerId>
    <consumerId>123456789</consumerId>
    <mobile>9876543210</mobile>
  </Body>
</BillFetchRequest>`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="response">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          Success Response (200)
                        </h4>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <pre className="text-sm">
                            {`<?xml version="1.0" encoding="UTF-8"?>
<BillFetchResponse>
  <Head>
    <msgId>MSG001234567890</msgId>
    <orgId>BBPCU001</orgId>
    <ts>2024-01-12T14:30:26.000Z</ts>
    <result>
      <resultType>SUCCESS</resultType>
      <code>00</code>
      <desc>Success</desc>
    </result>
  </Head>
  <Body>
    <consumerName>John Doe</consumerName>
    <billAmount>2450.00</billAmount>
    <dueDate>2024-01-15</dueDate>
    <billPeriod>Dec 2023</billPeriod>
  </Body>
</BillFetchResponse>`}
                          </pre>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          Error Response (400)
                        </h4>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <pre className="text-sm text-red-800">
                            {`{
  "error": {
    "code": "INVALID_CONSUMER_ID",
    "message": "Consumer ID format is invalid",
    "details": "Consumer ID must be numeric and 10 digits long"
  }
}`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="examples">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          cURL Example
                        </h4>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg">
                          <pre className="text-sm">
                            {`curl -X ${selectedMethod.method} \\
  https://api.bbps.npci.org.in${selectedMethod.endpoint} \\
  -H "Content-Type: application/xml" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "X-Request-ID: unique-request-id" \\
  -d @request.xml`}
                          </pre>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          Response Example
                        </h4>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <pre className="text-sm">
                            {JSON.stringify(
                              sampleApiResponse[
                                selectedMethod.name as keyof typeof sampleApiResponse
                              ] || {},
                              null,
                              2,
                            )}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Start Guide */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Quick Start Guide
            </CardTitle>
            <CardDescription>
              Get started with BBPS APIs in minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  1. Get API Credentials
                </h4>
                <p className="text-sm text-slate-600">
                  Register and obtain your API key and digital certificates
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  2. Make Your First API Call
                </h4>
                <p className="text-sm text-slate-600">
                  Start with bill fetch API to retrieve customer bill details
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  3. Process Payments
                </h4>
                <p className="text-sm text-slate-600">
                  Use payment APIs to process secure bill payments
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
