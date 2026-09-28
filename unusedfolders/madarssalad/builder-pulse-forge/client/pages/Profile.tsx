import { useState, useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/hooks/useAuth";
import {
  User,
  CreditCard,
  MapPin,
  Calendar,
  Settings,
  Pause,
  Play,
  X,
  Edit,
  Plus,
  Truck,
  Clock,
  Check,
  AlertCircle,
} from "lucide-react";

interface Subscription {
  id: string;
  planName: string;
  price: number;
  mealsPerWeek: number;
  status: "active" | "paused" | "cancelled";
  nextDelivery: string;
  deliveryDays: string[];
  mealPreference: string;
}

interface Order {
  id: string;
  date: string;
  items: string[];
  total: number;
  status: "delivered" | "in-transit" | "preparing" | "scheduled";
}

interface Address {
  id: string;
  type: "home" | "office";
  flatHouseNumber: string;
  streetAddress: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export default function Profile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
  });

  // Mock data - replace with actual API calls
  const [subscriptions] = useState<Subscription[]>([
    {
      id: "1",
      planName: "Family Plan",
      price: 179,
      mealsPerWeek: 21,
      status: "active",
      nextDelivery: "2024-01-15",
      deliveryDays: ["monday", "wednesday", "friday"],
      mealPreference: "mixed",
    },
  ]);

  const [orders] = useState<Order[]>([
    {
      id: "1001",
      date: "2024-01-10",
      items: ["Grilled Chicken Salad", "Vegetable Curry", "Quinoa Bowl"],
      total: 45.99,
      status: "delivered",
    },
    {
      id: "1002",
      date: "2024-01-12",
      items: ["Mediterranean Bowl", "Lentil Soup", "Salmon Teriyaki"],
      total: 52.99,
      status: "in-transit",
    },
  ]);

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      type: "home",
      flatHouseNumber: "123",
      streetAddress: "456 Oak Street",
      city: "San Francisco",
      state: "CA",
      pincode: "94102",
      isDefault: true,
    },
  ]);

  const handleProfileUpdate = () => {
    // Update profile logic here
    setEditingProfile(false);
  };

  const handleSubscriptionAction = (
    subscriptionId: string,
    action: "pause" | "resume" | "cancel",
  ) => {
    console.log(`${action} subscription ${subscriptionId}`);
    // Implement subscription management logic
  };

  const getStatusBadge = (status: string) => {
    const variants: any = {
      active: "default",
      paused: "secondary",
      cancelled: "destructive",
      delivered: "default",
      "in-transit": "secondary",
      preparing: "outline",
      scheduled: "outline",
    };
    return <Badge variant={variants[status]}>{status.replace("-", " ")}</Badge>;
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />

        <div className="container py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">
                  Welcome back, {user?.fullName}
                </h1>
                <p className="text-muted-foreground">
                  Manage your subscription and account preferences
                </p>
              </div>
              <Button asChild>
                <Link to="/plans">
                  <Plus className="h-4 w-4 mr-2" />
                  New Subscription
                </Link>
              </Button>
            </div>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-6"
            >
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
                <TabsTrigger value="orders">Order History</TabsTrigger>
                <TabsTrigger value="addresses">Addresses</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Active Subscriptions
                      </CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {
                          subscriptions.filter((s) => s.status === "active")
                            .length
                        }
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Orders
                      </CardTitle>
                      <Truck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{orders.length}</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Next Delivery
                      </CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Jan 15</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Subscription</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {subscriptions.length > 0 ? (
                        <div className="space-y-4">
                          {subscriptions.map((subscription) => (
                            <div
                              key={subscription.id}
                              className="flex items-center justify-between p-4 border rounded-lg"
                            >
                              <div>
                                <h3 className="font-semibold">
                                  {subscription.planName}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {subscription.mealsPerWeek} meals/week • $
                                  {subscription.price}/week
                                </p>
                              </div>
                              {getStatusBadge(subscription.status)}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-muted-foreground mb-4">
                            No active subscriptions
                          </p>
                          <Button asChild>
                            <Link to="/plans">Start a Subscription</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {orders.slice(0, 3).map((order) => (
                          <div
                            key={order.id}
                            className="flex items-center justify-between p-4 border rounded-lg"
                          >
                            <div>
                              <h3 className="font-semibold">
                                Order #{order.id}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {order.date}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">${order.total}</p>
                              {getStatusBadge(order.status)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Subscriptions Tab */}
              <TabsContent value="subscriptions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Subscriptions</CardTitle>
                    <CardDescription>
                      View and manage your meal subscription plans
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {subscriptions.length > 0 ? (
                      <div className="space-y-6">
                        {subscriptions.map((subscription) => (
                          <Card key={subscription.id} className="border">
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <div>
                                  <CardTitle className="text-xl">
                                    {subscription.planName}
                                  </CardTitle>
                                  <CardDescription>
                                    {subscription.mealsPerWeek} meals per week •
                                    ${subscription.price}/week
                                  </CardDescription>
                                </div>
                                {getStatusBadge(subscription.status)}
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                  <p className="text-sm font-medium">
                                    Next Delivery
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {subscription.nextDelivery}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium">
                                    Delivery Days
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {subscription.deliveryDays.join(", ")}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium">
                                    Meal Preference
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {subscription.mealPreference}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Status</p>
                                  <p className="text-sm text-muted-foreground">
                                    {subscription.status}
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-2 pt-4 border-t">
                                {subscription.status === "active" && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                      handleSubscriptionAction(
                                        subscription.id,
                                        "pause",
                                      )
                                    }
                                  >
                                    <Pause className="h-4 w-4 mr-2" />
                                    Pause
                                  </Button>
                                )}
                                {subscription.status === "paused" && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                      handleSubscriptionAction(
                                        subscription.id,
                                        "resume",
                                      )
                                    }
                                  >
                                    <Play className="h-4 w-4 mr-2" />
                                    Resume
                                  </Button>
                                )}
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4 mr-2" />
                                  Modify
                                </Button>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() =>
                                    handleSubscriptionAction(
                                      subscription.id,
                                      "cancel",
                                    )
                                  }
                                >
                                  <X className="h-4 w-4 mr-2" />
                                  Cancel
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">
                          No Subscriptions Yet
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Start your healthy eating journey today
                        </p>
                        <Button asChild>
                          <Link to="/plans">Browse Plans</Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                    <CardDescription>
                      View your past and upcoming meal deliveries
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <Card key={order.id} className="border">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <h3 className="font-semibold">
                                  Order #{order.id}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {order.date}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold">${order.total}</p>
                                {getStatusBadge(order.status)}
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-2">Items:</p>
                              <ul className="text-sm text-muted-foreground">
                                {order.items.map((item, index) => (
                                  <li key={index}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Addresses Tab */}
              <TabsContent value="addresses" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Delivery Addresses</CardTitle>
                        <CardDescription>
                          Manage your delivery locations
                        </CardDescription>
                      </div>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Address
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {addresses.map((address) => (
                        <Card key={address.id} className="border">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="font-semibold capitalize">
                                    {address.type}
                                  </h3>
                                  {address.isDefault && (
                                    <Badge variant="secondary">Default</Badge>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {address.flatHouseNumber},{" "}
                                  {address.streetAddress}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {address.city}, {address.state}{" "}
                                  {address.pincode}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Account Tab */}
              <TabsContent value="account" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Update your personal information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {editingProfile ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            value={profileData.fullName}
                            onChange={(e) =>
                              setProfileData({
                                ...profileData,
                                fullName: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) =>
                              setProfileData({
                                ...profileData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={profileData.phoneNumber}
                            onChange={(e) =>
                              setProfileData({
                                ...profileData,
                                phoneNumber: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={handleProfileUpdate}>
                            Save Changes
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setEditingProfile(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label>Full Name</Label>
                            <p className="mt-1">{user?.fullName}</p>
                          </div>
                          <div>
                            <Label>Email</Label>
                            <p className="mt-1">{user?.email}</p>
                          </div>
                          <div>
                            <Label>Phone Number</Label>
                            <p className="mt-1">
                              {user?.phoneNumber || "Not provided"}
                            </p>
                          </div>
                          <div>
                            <Label>Member Since</Label>
                            <p className="mt-1">
                              {new Date(
                                user?.createdAt || "",
                              ).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Button onClick={() => setEditingProfile(true)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Email Notifications</Label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All notifications</SelectItem>
                          <SelectItem value="important">
                            Important only
                          </SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Delivery Time Preference</Label>
                      <Select defaultValue="morning">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">
                            Morning (8AM - 12PM)
                          </SelectItem>
                          <SelectItem value="afternoon">
                            Afternoon (12PM - 6PM)
                          </SelectItem>
                          <SelectItem value="evening">
                            Evening (6PM - 9PM)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}
