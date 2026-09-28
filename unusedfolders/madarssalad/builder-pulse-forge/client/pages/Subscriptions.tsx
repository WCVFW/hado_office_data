import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/hooks/useAuth";
import {
  Calendar as CalendarIcon,
  Pause,
  Play,
  X,
  Edit,
  Plus,
  Clock,
  MapPin,
  Utensils,
  CreditCard,
  AlertCircle,
  CheckCircle,
  RefreshCw,
} from "lucide-react";
import { format } from "date-fns";

interface Subscription {
  id: string;
  planName: string;
  planDescription: string;
  price: number;
  mealsPerWeek: number;
  mealsPerDay: number;
  status: "active" | "paused" | "cancelled";
  startDate: string;
  nextDelivery: string;
  deliveryDays: string[];
  mealPreference: "veg" | "non-veg" | "mixed";
  deliveryAddress: {
    flatHouseNumber: string;
    streetAddress: string;
    city: string;
    state: string;
    pincode: string;
  };
  pauseHistory: Array<{
    pausedDate: string;
    resumedDate?: string;
    reason: string;
  }>;
}

export default function Subscriptions() {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [pauseReason, setPauseReason] = useState("");
  const [loading, setLoading] = useState(false);

  // Mock subscription data - replace with actual API calls
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: "1",
      planName: "Family Plan",
      planDescription: "Perfect for families with comprehensive meal coverage",
      price: 179,
      mealsPerWeek: 21,
      mealsPerDay: 3,
      status: "active",
      startDate: "2024-01-15",
      nextDelivery: "2024-01-20",
      deliveryDays: ["monday", "wednesday", "friday"],
      mealPreference: "mixed",
      deliveryAddress: {
        flatHouseNumber: "123",
        streetAddress: "456 Oak Street",
        city: "San Francisco",
        state: "CA",
        pincode: "94102",
      },
      pauseHistory: [],
    },
  ]);

  const handlePauseSubscription = async (subscriptionId: string) => {
    setLoading(true);
    try {
      // API call to pause subscription
      setSubscriptions((prev) =>
        prev.map((sub) =>
          sub.id === subscriptionId
            ? {
                ...sub,
                status: "paused",
                pauseHistory: [
                  ...sub.pauseHistory,
                  {
                    pausedDate: new Date().toISOString().split("T")[0],
                    reason: pauseReason || "User requested pause",
                  },
                ],
              }
            : sub,
        ),
      );
      console.log(`Paused subscription ${subscriptionId}`);
    } catch (error) {
      console.error("Error pausing subscription:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleResumeSubscription = async (subscriptionId: string) => {
    setLoading(true);
    try {
      // API call to resume subscription
      setSubscriptions((prev) =>
        prev.map((sub) =>
          sub.id === subscriptionId
            ? {
                ...sub,
                status: "active",
                nextDelivery: selectedDate
                  ? format(selectedDate, "yyyy-MM-dd")
                  : sub.nextDelivery,
                pauseHistory: sub.pauseHistory.map((pause, index) =>
                  index === sub.pauseHistory.length - 1 && !pause.resumedDate
                    ? {
                        ...pause,
                        resumedDate: new Date().toISOString().split("T")[0],
                      }
                    : pause,
                ),
              }
            : sub,
        ),
      );
      console.log(`Resumed subscription ${subscriptionId}`);
    } catch (error) {
      console.error("Error resuming subscription:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelSubscription = async (subscriptionId: string) => {
    setLoading(true);
    try {
      // API call to cancel subscription
      setSubscriptions((prev) =>
        prev.map((sub) =>
          sub.id === subscriptionId ? { ...sub, status: "cancelled" } : sub,
        ),
      );
      console.log(`Cancelled subscription ${subscriptionId}`);
    } catch (error) {
      console.error("Error cancelling subscription:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: any = {
      active: "default",
      paused: "secondary",
      cancelled: "destructive",
    };
    const colors: any = {
      active: "text-green-700 bg-green-100",
      paused: "text-yellow-700 bg-yellow-100",
      cancelled: "text-red-700 bg-red-100",
    };

    return (
      <Badge variant={variants[status]} className={colors[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const formatDeliveryDays = (days: string[]) => {
    return days
      .map((day) => day.charAt(0).toUpperCase() + day.slice(1))
      .join(", ");
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />

        <div className="container py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">My Subscriptions</h1>
                <p className="text-muted-foreground">
                  Manage your meal delivery subscriptions
                </p>
              </div>
              <Button asChild>
                <Link to="/plans">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Subscription
                </Link>
              </Button>
            </div>

            {subscriptions.length > 0 ? (
              <div className="space-y-6">
                {subscriptions.map((subscription) => (
                  <Card key={subscription.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl">
                            {subscription.planName}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {subscription.planDescription}
                          </CardDescription>
                        </div>
                        {getStatusBadge(subscription.status)}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Subscription Details */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="space-y-2">
                          <h4 className="font-semibold flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            Pricing
                          </h4>
                          <p className="text-2xl font-bold text-primary">
                            ${subscription.price}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            per week
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold flex items-center gap-2">
                            <Utensils className="h-4 w-4" />
                            Meals
                          </h4>
                          <p className="text-lg font-semibold">
                            {subscription.mealsPerWeek} meals
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {subscription.mealsPerDay} per day
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            Delivery
                          </h4>
                          <p className="text-sm">
                            {formatDeliveryDays(subscription.deliveryDays)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Next: {subscription.nextDelivery}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            Address
                          </h4>
                          <p className="text-sm">
                            {subscription.deliveryAddress.flatHouseNumber},{" "}
                            {subscription.deliveryAddress.streetAddress}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {subscription.deliveryAddress.city},{" "}
                            {subscription.deliveryAddress.state}
                          </p>
                        </div>
                      </div>

                      {/* Status-specific alerts */}
                      {subscription.status === "paused" && (
                        <Alert>
                          <Clock className="h-4 w-4" />
                          <AlertDescription>
                            Your subscription is currently paused. You can
                            resume it anytime.
                            {subscription.pauseHistory.length > 0 && (
                              <span className="block mt-1 text-sm">
                                Paused on:{" "}
                                {
                                  subscription.pauseHistory[
                                    subscription.pauseHistory.length - 1
                                  ].pausedDate
                                }
                              </span>
                            )}
                          </AlertDescription>
                        </Alert>
                      )}

                      {subscription.status === "cancelled" && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>
                            This subscription has been cancelled. You can start
                            a new subscription anytime.
                          </AlertDescription>
                        </Alert>
                      )}

                      {subscription.status === "active" && (
                        <Alert>
                          <CheckCircle className="h-4 w-4" />
                          <AlertDescription>
                            Your subscription is active. Next delivery on{" "}
                            {subscription.nextDelivery}.
                          </AlertDescription>
                        </Alert>
                      )}

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-4 border-t">
                        {subscription.status === "active" && (
                          <>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Pause className="h-4 w-4 mr-2" />
                                  Pause Subscription
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Pause Subscription</DialogTitle>
                                  <DialogDescription>
                                    You can pause your subscription temporarily.
                                    You can resume it anytime.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <label className="text-sm font-medium">
                                      Reason for pausing (optional)
                                    </label>
                                    <Select
                                      value={pauseReason}
                                      onValueChange={setPauseReason}
                                    >
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select a reason" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="vacation">
                                          Going on vacation
                                        </SelectItem>
                                        <SelectItem value="financial">
                                          Financial reasons
                                        </SelectItem>
                                        <SelectItem value="dissatisfied">
                                          Not satisfied with meals
                                        </SelectItem>
                                        <SelectItem value="too-much-food">
                                          Too much food
                                        </SelectItem>
                                        <SelectItem value="other">
                                          Other
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button
                                    onClick={() =>
                                      handlePauseSubscription(subscription.id)
                                    }
                                    disabled={loading}
                                  >
                                    {loading
                                      ? "Pausing..."
                                      : "Pause Subscription"}
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>

                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-2" />
                              Modify Plan
                            </Button>
                          </>
                        )}

                        {subscription.status === "paused" && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm">
                                <Play className="h-4 w-4 mr-2" />
                                Resume Subscription
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Resume Subscription</DialogTitle>
                                <DialogDescription>
                                  When would you like to resume your meal
                                  deliveries?
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <label className="text-sm font-medium">
                                    Resume Date
                                  </label>
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <Button
                                        variant="outline"
                                        className="w-full justify-start text-left font-normal"
                                      >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {selectedDate
                                          ? format(selectedDate, "PPP")
                                          : "Pick a date"}
                                      </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                      <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={setSelectedDate}
                                        disabled={(date) => date < new Date()}
                                        initialFocus
                                      />
                                    </PopoverContent>
                                  </Popover>
                                </div>
                              </div>
                              <DialogFooter>
                                <Button
                                  onClick={() =>
                                    handleResumeSubscription(subscription.id)
                                  }
                                  disabled={loading || !selectedDate}
                                >
                                  {loading
                                    ? "Resuming..."
                                    : "Resume Subscription"}
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        )}

                        {subscription.status !== "cancelled" && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <X className="h-4 w-4 mr-2" />
                                Cancel Subscription
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Cancel Subscription</DialogTitle>
                                <DialogDescription>
                                  Are you sure you want to cancel this
                                  subscription? This action cannot be undone.
                                  You'll stop receiving deliveries after your
                                  current billing period.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <Button variant="outline">
                                  Keep Subscription
                                </Button>
                                <Button
                                  variant="destructive"
                                  onClick={() =>
                                    handleCancelSubscription(subscription.id)
                                  }
                                  disabled={loading}
                                >
                                  {loading
                                    ? "Cancelling..."
                                    : "Cancel Subscription"}
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        )}

                        <Button variant="outline" size="sm">
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Update Delivery Address
                        </Button>
                      </div>

                      {/* Pause History */}
                      {subscription.pauseHistory.length > 0 && (
                        <div className="pt-4 border-t">
                          <h4 className="font-semibold mb-3">Pause History</h4>
                          <div className="space-y-2">
                            {subscription.pauseHistory.map((pause, index) => (
                              <div
                                key={index}
                                className="text-sm p-3 bg-muted rounded-lg"
                              >
                                <p>
                                  <strong>Paused:</strong> {pause.pausedDate}
                                  {pause.resumedDate && (
                                    <span>
                                      {" "}
                                      • <strong>Resumed:</strong>{" "}
                                      {pause.resumedDate}
                                    </span>
                                  )}
                                </p>
                                <p>
                                  <strong>Reason:</strong> {pause.reason}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Utensils className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  No Active Subscriptions
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  You don't have any meal subscriptions yet. Start your healthy
                  eating journey today!
                </p>
                <Button asChild>
                  <Link to="/plans">Browse Subscription Plans</Link>
                </Button>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}
