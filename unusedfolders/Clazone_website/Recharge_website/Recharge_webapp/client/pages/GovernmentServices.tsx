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
  Award,
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  Upload,
  CreditCard,
  User,
  MapPin,
  Phone,
  Mail,
  Building,
  Search,
} from "lucide-react";

const governmentServices = [
  {
    category: "Identity Documents",
    services: [
      {
        id: "pan_card",
        name: "PAN Card",
        description: "Apply for new PAN card or reprint",
        fee: "₹110",
        processingTime: "15-20 days",
        documents: ["Aadhaar", "Address Proof", "Photo"],
        icon: CreditCard,
      },
      {
        id: "aadhaar",
        name: "Aadhaar Card",
        description: "New Aadhaar enrollment or updates",
        fee: "Free",
        processingTime: "60-90 days",
        documents: ["DOB Proof", "Address Proof", "Photo"],
        icon: User,
      },
      {
        id: "passport",
        name: "Passport",
        description: "Fresh passport or renewal",
        fee: "₹1,500",
        processingTime: "30-45 days",
        documents: ["Birth Certificate", "Address Proof", "PAN Card"],
        icon: FileText,
      },
    ],
  },
  {
    category: "Certificates",
    services: [
      {
        id: "birth_certificate",
        name: "Birth Certificate",
        description: "Birth certificate issuance",
        fee: "₹50",
        processingTime: "7-15 days",
        documents: ["Hospital Records", "Parents' ID"],
        icon: Award,
      },
      {
        id: "death_certificate",
        name: "Death Certificate",
        description: "Death certificate issuance",
        fee: "₹50",
        processingTime: "7-15 days",
        documents: ["Hospital Records", "Death Report"],
        icon: FileText,
      },
      {
        id: "income_certificate",
        name: "Income Certificate",
        description: "Income certificate for various purposes",
        fee: "₹30",
        processingTime: "10-15 days",
        documents: ["Salary Slips", "Income Tax Returns"],
        icon: Building,
      },
    ],
  },
  {
    category: "License & Permits",
    services: [
      {
        id: "driving_license",
        name: "Driving License",
        description: "Fresh DL or renewal",
        fee: "₹500",
        processingTime: "15-30 days",
        documents: ["Aadhaar", "Medical Certificate", "Photos"],
        icon: CreditCard,
      },
      {
        id: "trade_license",
        name: "Trade License",
        description: "Business trade license",
        fee: "₹2,000",
        processingTime: "30-45 days",
        documents: ["Shop Deed", "NOC", "PAN Card"],
        icon: Building,
      },
    ],
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Fill Application",
    description: "Complete the online form",
  },
  {
    step: 2,
    title: "Upload Documents",
    description: "Submit required documents",
  },
  { step: 3, title: "Make Payment", description: "Pay government fees" },
  { step: 4, title: "Submit Application", description: "Final submission" },
  {
    step: 5,
    title: "Track Status",
    description: "Monitor application progress",
  },
];

const recentApplications = [
  {
    id: "PAN202401001",
    service: "PAN Card",
    date: "2024-01-10",
    status: "In Progress",
    expectedDelivery: "2024-01-25",
  },
  {
    id: "DL202312001",
    service: "Driving License",
    date: "2023-12-15",
    status: "Completed",
    expectedDelivery: "2024-01-05",
  },
  {
    id: "BC202312002",
    service: "Birth Certificate",
    date: "2023-12-20",
    status: "Document Verification",
    expectedDelivery: "2024-01-10",
  },
];

export default function GovernmentServices() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    fatherName: "",
    dateOfBirth: "",
    email: "",
    mobile: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      "In Progress": "bg-blue-100 text-blue-800",
      Completed: "bg-green-100 text-green-800",
      "Document Verification": "bg-yellow-100 text-yellow-800",
      Rejected: "bg-red-100 text-red-800",
    };

    return (
      <Badge
        className={
          statusColors[status as keyof typeof statusColors] ||
          "bg-slate-100 text-slate-800"
        }
      >
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Government Services
          </h1>
          <p className="text-slate-600">
            Apply for government certificates, licenses, and identity documents
            online
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Services List */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Available Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {governmentServices.map((category) => (
                  <div key={category.category}>
                    <h4 className="font-medium text-slate-900 mb-3">
                      {category.category}
                    </h4>
                    <div className="space-y-2">
                      {category.services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <button
                            key={service.id}
                            onClick={() => handleServiceSelect(service)}
                            className={`w-full text-left p-3 rounded-lg border transition-all ${
                              selectedService?.id === service.id
                                ? "border-blue-500 bg-blue-50"
                                : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center mb-2">
                              <Icon className="w-4 h-4 mr-2 text-blue-600" />
                              <span className="font-medium text-sm">
                                {service.name}
                              </span>
                            </div>
                            <div className="text-xs text-slate-600">
                              {service.description}
                            </div>
                            <div className="flex justify-between mt-2 text-xs">
                              <span className="font-medium text-green-600">
                                {service.fee}
                              </span>
                              <span className="text-slate-500">
                                {service.processingTime}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-3">
            {!selectedService ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Award className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-900 mb-2">
                    Select a Service
                  </h3>
                  <p className="text-slate-600">
                    Choose a government service from the list to start your
                    application
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* Service Details */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          <selectedService.icon className="w-6 h-6 mr-2" />
                          {selectedService.name} Application
                        </CardTitle>
                        <CardDescription>
                          {selectedService.description}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          {selectedService.fee}
                        </div>
                        <div className="text-sm text-slate-600">
                          {selectedService.processingTime}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Progress Steps */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      {applicationSteps.map((step) => (
                        <div key={step.step} className="flex items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                              currentStep >= step.step
                                ? "bg-blue-600 text-white"
                                : "bg-slate-200 text-slate-600"
                            }`}
                          >
                            {currentStep > step.step ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              step.step
                            )}
                          </div>
                          {step.step < 5 && (
                            <div
                              className={`w-16 h-1 mx-2 ${
                                currentStep > step.step
                                  ? "bg-blue-600"
                                  : "bg-slate-200"
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <h3 className="font-medium text-slate-900">
                        {applicationSteps[currentStep - 1].title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {applicationSteps[currentStep - 1].description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Application Form Steps */}
                <Card>
                  <CardContent className="p-6">
                    <Tabs value={`step-${currentStep}`} className="space-y-6">
                      {/* Step 1: Personal Details */}
                      <TabsContent value="step-1" className="space-y-4">
                        <h4 className="font-medium text-slate-900 mb-4">
                          Personal Information
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                              id="fullName"
                              value={applicationData.fullName}
                              onChange={(e) =>
                                setApplicationData({
                                  ...applicationData,
                                  fullName: e.target.value,
                                })
                              }
                              placeholder="Enter full name as per documents"
                            />
                          </div>
                          <div>
                            <Label htmlFor="fatherName">
                              Father's/Spouse Name *
                            </Label>
                            <Input
                              id="fatherName"
                              value={applicationData.fatherName}
                              onChange={(e) =>
                                setApplicationData({
                                  ...applicationData,
                                  fatherName: e.target.value,
                                })
                              }
                              placeholder="Enter father's or spouse name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                            <Input
                              id="dateOfBirth"
                              type="date"
                              value={applicationData.dateOfBirth}
                              onChange={(e) =>
                                setApplicationData({
                                  ...applicationData,
                                  dateOfBirth: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="mobile">Mobile Number *</Label>
                            <Input
                              id="mobile"
                              value={applicationData.mobile}
                              onChange={(e) =>
                                setApplicationData({
                                  ...applicationData,
                                  mobile: e.target.value,
                                })
                              }
                              placeholder="10-digit mobile number"
                              maxLength={10}
                            />
                          </div>
                          <div className="md:col-span-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={applicationData.email}
                              onChange={(e) =>
                                setApplicationData({
                                  ...applicationData,
                                  email: e.target.value,
                                })
                              }
                              placeholder="Enter email address"
                            />
                          </div>
                        </div>
                      </TabsContent>

                      {/* Step 2: Address Details */}
                      <TabsContent value="step-2" className="space-y-4">
                        <h4 className="font-medium text-slate-900 mb-4">
                          Address Information
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <Label htmlFor="address">Complete Address *</Label>
                            <Input
                              id="address"
                              value={applicationData.address}
                              onChange={(e) =>
                                setApplicationData({
                                  ...applicationData,
                                  address: e.target.value,
                                })
                              }
                              placeholder="House/Flat No., Street, Area"
                            />
                          </div>
                          <div>
                            <Label htmlFor="state">State *</Label>
                            <Select
                              value={applicationData.state}
                              onValueChange={(value) =>
                                setApplicationData({
                                  ...applicationData,
                                  state: value,
                                })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="maharashtra">
                                  Maharashtra
                                </SelectItem>
                                <SelectItem value="karnataka">
                                  Karnataka
                                </SelectItem>
                                <SelectItem value="tamil_nadu">
                                  Tamil Nadu
                                </SelectItem>
                                <SelectItem value="west_bengal">
                                  West Bengal
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="district">District *</Label>
                            <Input
                              id="district"
                              value={applicationData.district}
                              onChange={(e) =>
                                setApplicationData({
                                  ...applicationData,
                                  district: e.target.value,
                                })
                              }
                              placeholder="Enter district"
                            />
                          </div>
                          <div>
                            <Label htmlFor="pincode">PIN Code *</Label>
                            <Input
                              id="pincode"
                              value={applicationData.pincode}
                              onChange={(e) =>
                                setApplicationData({
                                  ...applicationData,
                                  pincode: e.target.value,
                                })
                              }
                              placeholder="6-digit PIN code"
                              maxLength={6}
                            />
                          </div>
                        </div>
                      </TabsContent>

                      {/* Step 3: Document Upload */}
                      <TabsContent value="step-3" className="space-y-4">
                        <h4 className="font-medium text-slate-900 mb-4">
                          Required Documents
                        </h4>
                        <div className="space-y-4">
                          {selectedService.documents.map(
                            (doc: string, index: number) => (
                              <div
                                key={index}
                                className="border border-dashed border-slate-300 rounded-lg p-6"
                              >
                                <div className="flex items-center justify-between mb-4">
                                  <div>
                                    <h5 className="font-medium text-slate-900">
                                      {doc}
                                    </h5>
                                    <p className="text-sm text-slate-600">
                                      Upload clear scanned copy (PDF/JPG)
                                    </p>
                                  </div>
                                  <Button variant="outline" size="sm">
                                    <Upload className="w-4 h-4 mr-2" />
                                    Upload
                                  </Button>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </TabsContent>

                      {/* Step 4: Payment */}
                      <TabsContent value="step-4" className="space-y-4">
                        <h4 className="font-medium text-slate-900 mb-4">
                          Payment Details
                        </h4>
                        <Card className="bg-slate-50">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center mb-4">
                              <span className="font-medium">
                                Government Fee
                              </span>
                              <span className="text-lg font-bold">
                                {selectedService.fee}
                              </span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                              <span>Service Charge</span>
                              <span>₹10</span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-green-700">
                                Your Commission
                              </span>
                              <span className="font-semibold text-green-800">
                                ₹15
                              </span>
                            </div>
                            <div className="border-t pt-4">
                              <div className="flex justify-between items-center">
                                <span className="font-semibold">
                                  Total Amount
                                </span>
                                <span className="text-xl font-bold text-green-600">
                                  ₹
                                  {parseInt(
                                    selectedService.fee
                                      .replace("₹", "")
                                      .replace(",", ""),
                                  ) + 10}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      {/* Step 5: Confirmation */}
                      <TabsContent value="step-5" className="space-y-4">
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">
                            Application Submitted Successfully!
                          </h3>
                          <p className="text-slate-600 mb-4">
                            Your application for {selectedService.name} has been
                            submitted.
                          </p>
                          <Card className="max-w-md mx-auto">
                            <CardContent className="p-4">
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span>Application ID:</span>
                                  <span className="font-mono">
                                    {selectedService.id.toUpperCase()}202401
                                    {Math.floor(Math.random() * 1000)
                                      .toString()
                                      .padStart(3, "0")}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Expected Delivery:</span>
                                  <span>
                                    {new Date(
                                      Date.now() + 15 * 24 * 60 * 60 * 1000,
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Status:</span>
                                  <span className="text-blue-600">
                                    Under Review
                                  </span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </TabsContent>
                    </Tabs>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6 border-t">
                      <Button
                        variant="outline"
                        onClick={() =>
                          setCurrentStep(Math.max(1, currentStep - 1))
                        }
                        disabled={currentStep === 1}
                      >
                        Previous
                      </Button>
                      <Button
                        onClick={handleNextStep}
                        disabled={currentStep === 5}
                      >
                        {currentStep === 4 ? "Submit & Pay" : "Next"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Recent Applications */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Recent Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((app) => (
                    <div
                      key={app.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <div className="font-medium text-slate-900">
                          {app.service}
                        </div>
                        <div className="text-sm text-slate-600">
                          Application ID: {app.id}
                        </div>
                        <div className="text-sm text-slate-600">
                          Applied: {app.date}
                        </div>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(app.status)}
                        <div className="text-sm text-slate-600 mt-1">
                          Expected: {app.expectedDelivery}
                        </div>
                      </div>
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
