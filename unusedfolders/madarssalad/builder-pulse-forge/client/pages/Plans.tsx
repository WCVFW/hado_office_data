import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  useSubscription,
  SubscriptionPlan,
} from "@/contexts/SubscriptionContext";
import { useAuth } from "@/hooks/useAuth";
import {
  CheckCircle,
  Star,
  CreditCard,
  MapPin,
  Phone,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Utensils,
} from "lucide-react";

const DAYS_OF_WEEK = [
  { id: "monday", label: "Monday" },
  { id: "tuesday", label: "Tuesday" },
  { id: "wednesday", label: "Wednesday" },
  { id: "thursday", label: "Thursday" },
  { id: "friday", label: "Friday" },
  { id: "saturday", label: "Saturday" },
  { id: "sunday", label: "Sunday" },
];

function PlanCard({
  plan,
  onSelect,
  selected,
}: {
  plan: SubscriptionPlan;
  onSelect: (plan: SubscriptionPlan) => void;
  selected: boolean;
}) {
  return (
    <Card
      className={`relative cursor-pointer transition-all ${
        selected ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
      }`}
      onClick={() => onSelect(plan)}
    >
      {plan.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Star className="h-3 w-3 mr-1" />
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">{plan.name}</CardTitle>
            <CardDescription className="mt-2">
              {plan.description}
            </CardDescription>
          </div>
          {selected && <CheckCircle className="h-6 w-6 text-primary" />}
        </div>
        <div className="mt-4">
          <span className="text-3xl font-bold">${plan.price}</span>
          <span className="text-muted-foreground">/week</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function Plans() {
  const [currentStep, setCurrentStep] = useState(1);
  const { plans, selectedPlan, formData, setSelectedPlan, updateFormData } =
    useSubscription();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handlePlanSelect = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    updateFormData({ planId: plan.id });
  };

  const handleDayToggle = (dayId: string, checked: boolean) => {
    const updatedDays = checked
      ? [...formData.selectedDays, dayId]
      : formData.selectedDays.filter((day) => day !== dayId);
    updateFormData({ selectedDays: updatedDays });
  };

  const handleAddressChange = (field: string, value: string) => {
    updateFormData({
      deliveryAddress: {
        ...formData.deliveryAddress,
        [field]: value,
      },
    });
  };

  const handleNext = () => {
    if (currentStep === 1 && !selectedPlan) return;
    if (currentStep === 2 && formData.selectedDays.length === 0) return;
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubscribe = () => {
    if (!isAuthenticated) {
      navigate("/auth", { state: { from: { pathname: "/plans" } } });
      return;
    }
    // Process subscription - integrate with payment
    console.log("Processing subscription:", { selectedPlan, formData });
    navigate("/profile", { state: { subscriptionCreated: true } });
  };

  const canProceedFromStep2 =
    formData.selectedDays.length > 0 && formData.mealPreference;
  const canProceedFromStep3 =
    formData.deliveryAddress.flatHouseNumber &&
    formData.deliveryAddress.streetAddress &&
    formData.deliveryAddress.city &&
    formData.deliveryAddress.pincode &&
    formData.phoneNumber;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Choose Your Perfect Plan
            </h1>
            <p className="text-xl text-muted-foreground">
              Select a subscription plan and customize it to fit your lifestyle
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      currentStep >= step
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-16 h-0.5 mx-2 ${
                        currentStep > step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Tabs value={currentStep.toString()} className="w-full">
            {/* Step 1: Plan Selection */}
            <TabsContent value="1" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Select Your Plan</h2>
                <p className="text-muted-foreground">
                  Choose the subscription plan that works best for you
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    onSelect={handlePlanSelect}
                    selected={selectedPlan?.id === plan.id}
                  />
                ))}
              </div>

              <div className="flex justify-center">
                <Button onClick={handleNext} disabled={!selectedPlan} size="lg">
                  Continue to Preferences
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            {/* Step 2: Preferences */}
            <TabsContent value="2" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  Customize Your Preferences
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your meal preferences and delivery schedule
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Delivery Days
                    </CardTitle>
                    <CardDescription>
                      Select the days you want your meals delivered
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {DAYS_OF_WEEK.map((day) => (
                        <div
                          key={day.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={day.id}
                            checked={formData.selectedDays.includes(day.id)}
                            onCheckedChange={(checked) =>
                              handleDayToggle(day.id, checked as boolean)
                            }
                          />
                          <Label
                            htmlFor={day.id}
                            className="text-sm font-medium"
                          >
                            {day.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Utensils className="h-5 w-5" />
                      Meal Preference
                    </CardTitle>
                    <CardDescription>
                      Choose your dietary preference
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Select
                      value={formData.mealPreference}
                      onValueChange={(value: any) =>
                        updateFormData({ mealPreference: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="veg">Vegetarian</SelectItem>
                        <SelectItem value="non-veg">Non-Vegetarian</SelectItem>
                        <SelectItem value="mixed">
                          Mixed (Both Veg & Non-Veg)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <Label htmlFor="instructions">
                    Special Instructions (Optional)
                  </Label>
                  <Textarea
                    id="instructions"
                    placeholder="Any allergies, dietary restrictions, or special requests..."
                    value={formData.specialInstructions}
                    onChange={(e) =>
                      updateFormData({ specialInstructions: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={handlePrevious}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button onClick={handleNext} disabled={!canProceedFromStep2}>
                  Continue to Address
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            {/* Step 3: Address & Contact */}
            <TabsContent value="3" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  Delivery Information
                </h2>
                <p className="text-muted-foreground">
                  Where should we deliver your fresh meals?
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Delivery Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="flatHouse">Flat/House Number *</Label>
                        <Input
                          id="flatHouse"
                          value={formData.deliveryAddress.flatHouseNumber}
                          onChange={(e) =>
                            handleAddressChange(
                              "flatHouseNumber",
                              e.target.value,
                            )
                          }
                          placeholder="Enter flat/house number"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">Pincode *</Label>
                        <Input
                          id="pincode"
                          value={formData.deliveryAddress.pincode}
                          onChange={(e) =>
                            handleAddressChange("pincode", e.target.value)
                          }
                          placeholder="Enter pincode"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="street">Street Address *</Label>
                      <Input
                        id="street"
                        value={formData.deliveryAddress.streetAddress}
                        onChange={(e) =>
                          handleAddressChange("streetAddress", e.target.value)
                        }
                        placeholder="Enter street address"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.deliveryAddress.city}
                          onChange={(e) =>
                            handleAddressChange("city", e.target.value)
                          }
                          placeholder="Enter city"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={formData.deliveryAddress.state}
                          onChange={(e) =>
                            handleAddressChange("state", e.target.value)
                          }
                          placeholder="Enter state"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          updateFormData({ phoneNumber: e.target.value })
                        }
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Order Summary */}
                {selectedPlan && (
                  <Card className="mt-6 border-primary">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Order Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">
                            {selectedPlan.name} Plan
                          </span>
                          <span className="font-bold">
                            ${selectedPlan.price}/week
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p>• {selectedPlan.mealsPerWeek} meals per week</p>
                          <p>• {selectedPlan.mealsPerDay} meals per day</p>
                          <p>
                            • Delivery on: {formData.selectedDays.join(", ")}
                          </p>
                          <p>• Meal preference: {formData.mealPreference}</p>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center font-bold">
                            <span>Weekly Total</span>
                            <span>${selectedPlan.price}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="flex justify-center gap-4 mt-8">
                  <Button variant="outline" onClick={handlePrevious}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    onClick={handleSubscribe}
                    disabled={!canProceedFromStep3}
                    size="lg"
                    className="px-8"
                  >
                    {isAuthenticated ? "Subscribe Now" : "Sign Up & Subscribe"}
                    <CreditCard className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
