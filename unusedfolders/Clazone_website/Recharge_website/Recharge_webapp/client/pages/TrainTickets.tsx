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
  Train,
  MapPin,
  Calendar,
  Clock,
  Users,
  Star,
  Armchair,
  Coffee,
  Wifi,
  Search,
} from "lucide-react";

const classes = [
  { code: "1A", name: "First AC", price: "2x" },
  { code: "2A", name: "Second AC", price: "1.5x" },
  { code: "3A", name: "Third AC", price: "1.2x" },
  { code: "SL", name: "Sleeper", price: "Base" },
  { code: "CC", name: "Chair Car", price: "1.1x" },
  { code: "2S", name: "Second Sitting", price: "0.8x" },
];

const sampleTrains = [
  {
    trainNumber: "12001",
    trainName: "Shatabdi Express",
    departure: "06:00",
    arrival: "12:30",
    duration: "6h 30m",
    classes: [
      { code: "CC", seats: 45, price: 1200, waitingList: 0 },
      { code: "EC", seats: 12, price: 2400, waitingList: 2 },
    ],
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    type: "Superfast",
  },
  {
    trainNumber: "12002",
    trainName: "Rajdhani Express",
    departure: "17:55",
    arrival: "07:10",
    duration: "13h 15m",
    classes: [
      { code: "1A", seats: 8, price: 4500, waitingList: 0 },
      { code: "2A", seats: 25, price: 3200, waitingList: 5 },
      { code: "3A", seats: 35, price: 2100, waitingList: 12 },
    ],
    runsOn: ["Daily"],
    type: "Rajdhani",
  },
  {
    trainNumber: "12003",
    trainName: "Mail Express",
    departure: "23:45",
    arrival: "14:20",
    duration: "14h 35m",
    classes: [
      { code: "SL", seats: 85, price: 800, waitingList: 25 },
      { code: "3A", seats: 18, price: 1600, waitingList: 8 },
      { code: "2A", seats: 12, price: 2400, waitingList: 3 },
    ],
    runsOn: ["Daily"],
    type: "Mail/Express",
  },
];

const stations = [
  "New Delhi (NDLS)",
  "Mumbai Central (BCT)",
  "Chennai Central (MAS)",
  "Howrah (HWH)",
  "Bangalore City (SBC)",
  "Hyderabad (HYB)",
  "Pune (PUNE)",
  "Ahmedabad (ADI)",
  "Jaipur (JP)",
  "Lucknow (LKO)",
  "Kanpur Central (CNB)",
  "Nagpur (NGP)",
  "Indore (INDB)",
  "Bhopal (BPL)",
  "Patna (PNBE)",
  "Gwalior (GWL)",
];

const popularRoutes = [
  { from: "New Delhi", to: "Mumbai", trains: "25+ trains", duration: "15-20h" },
  { from: "Delhi", to: "Bangalore", trains: "8+ trains", duration: "32-36h" },
  { from: "Mumbai", to: "Chennai", trains: "12+ trains", duration: "20-24h" },
  { from: "Delhi", to: "Kolkata", trains: "20+ trains", duration: "17-22h" },
];

export default function TrainTickets() {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [classType, setClassType] = useState("SL");
  const [passengers, setPassengers] = useState("1");
  const [trains, setTrains] = useState(sampleTrains);
  const [isSearching, setIsSearching] = useState(false);
  const [quotaType, setQuotaType] = useState("general");

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      setTrains(sampleTrains);
    }, 2000);
  };

  const swapStations = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);
  };

  const getAvailabilityStatus = (seats: number, waitingList: number) => {
    if (seats > 0) {
      return {
        status: "available",
        text: `${seats} Available`,
        color: "bg-green-100 text-green-800",
      };
    } else if (waitingList > 0) {
      return {
        status: "waiting",
        text: `WL ${waitingList}`,
        color: "bg-yellow-100 text-yellow-800",
      };
    } else {
      return { status: "full", text: "RAC", color: "bg-red-100 text-red-800" };
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Train Tickets
          </h1>
          <p className="text-slate-600">
            Book confirmed train tickets across India with IRCTC integration
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Search Trains
            </CardTitle>
            <CardDescription>
              Find and book train tickets for your journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="book-ticket" className="space-y-4">
              <TabsList>
                <TabsTrigger value="book-ticket">Book Ticket</TabsTrigger>
                <TabsTrigger value="pnr-status">PNR Status</TabsTrigger>
                <TabsTrigger value="live-status">Live Train Status</TabsTrigger>
              </TabsList>

              <TabsContent value="book-ticket">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                  <div>
                    <Label htmlFor="from">From Station</Label>
                    <Select value={fromStation} onValueChange={setFromStation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Departure station" />
                      </SelectTrigger>
                      <SelectContent>
                        {stations.map((station) => (
                          <SelectItem
                            key={station}
                            value={station.toLowerCase()}
                          >
                            {station}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="relative">
                    <Label htmlFor="to">To Station</Label>
                    <Select value={toStation} onValueChange={setToStation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Destination station" />
                      </SelectTrigger>
                      <SelectContent>
                        {stations.map((station) => (
                          <SelectItem
                            key={station}
                            value={station.toLowerCase()}
                          >
                            {station}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={swapStations}
                      className="absolute top-8 right-12 h-8 w-8 p-0 rounded-full"
                    >
                      ⇄
                    </Button>
                  </div>

                  <div>
                    <Label htmlFor="date">Journey Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={journeyDate}
                      onChange={(e) => setJourneyDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div>
                    <Label htmlFor="class">Class</Label>
                    <Select value={classType} onValueChange={setClassType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {classes.map((cls) => (
                          <SelectItem key={cls.code} value={cls.code}>
                            {cls.name} ({cls.code})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="quota">Quota</Label>
                    <Select value={quotaType} onValueChange={setQuotaType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="tatkal">Tatkal</SelectItem>
                        <SelectItem value="ladies">Ladies</SelectItem>
                        <SelectItem value="senior">Senior Citizen</SelectItem>
                        <SelectItem value="physically_handicapped">
                          Divyangjan
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button
                      onClick={handleSearch}
                      disabled={
                        !fromStation ||
                        !toStation ||
                        !journeyDate ||
                        isSearching
                      }
                      className="w-full"
                    >
                      {isSearching ? "Searching..." : "Search"}
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pnr-status">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="pnr">PNR Number</Label>
                    <Input
                      id="pnr"
                      placeholder="Enter 10-digit PNR number"
                      maxLength={10}
                    />
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">Check PNR Status</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="live-status">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="train-number">Train Number</Label>
                    <Input id="train-number" placeholder="Enter train number" />
                  </div>
                  <div>
                    <Label htmlFor="running-date">Running Date</Label>
                    <Input
                      id="running-date"
                      type="date"
                      defaultValue={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="station">Station</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select station" />
                      </SelectTrigger>
                      <SelectContent>
                        {stations.slice(0, 5).map((station) => (
                          <SelectItem
                            key={station}
                            value={station.toLowerCase()}
                          >
                            {station}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">Track Train</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Train Results */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {trains.map((train) => (
                <Card
                  key={train.trainNumber}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {train.trainName} ({train.trainNumber})
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-slate-600">
                            <Badge variant="secondary">{train.type}</Badge>
                            <span>Runs: {train.runsOn.join(", ")}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-slate-500 mr-2" />
                          <div>
                            <div className="font-medium">{train.departure}</div>
                            <div className="text-sm text-slate-600">
                              Departure
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-slate-500 mr-2" />
                          <div>
                            <div className="font-medium">{train.arrival}</div>
                            <div className="text-sm text-slate-600">
                              Arrival
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <Train className="w-4 h-4 text-slate-500 mr-2" />
                          <div>
                            <div className="font-medium">{train.duration}</div>
                            <div className="text-sm text-slate-600">
                              Duration
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Class-wise availability */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-slate-900">
                        Available Classes
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {train.classes.map((cls) => {
                          const availability = getAvailabilityStatus(
                            cls.seats,
                            cls.waitingList,
                          );
                          return (
                            <div
                              key={cls.code}
                              className="border rounded-lg p-4"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className="font-medium">{cls.code}</div>
                                <Badge className={availability.color}>
                                  {availability.text}
                                </Badge>
                              </div>
                              <div className="text-lg font-bold text-slate-900 mb-1">
                                ₹{cls.price}
                              </div>
                              <div className="text-sm text-green-600 mb-2">
                                Commission: ₹
                                {Math.min(
                                  Math.max((cls.price * 2) / 100, 15),
                                  150,
                                ).toFixed(0)}
                              </div>
                              <Button
                                size="sm"
                                className="w-full"
                                disabled={availability.status === "full"}
                              >
                                {availability.status === "full"
                                  ? "Not Available"
                                  : "Book Now"}
                              </Button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {trains.length === 0 && !isSearching && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Train className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-slate-900 mb-2">
                      No trains found
                    </h3>
                    <p className="text-slate-600">
                      Try searching with different stations or dates
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Routes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Routes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {popularRoutes.map((route, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setFromStation(route.from.toLowerCase());
                      setToStation(route.to.toLowerCase());
                    }}
                    className="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-slate-900 mb-1">
                      {route.from} → {route.to}
                    </div>
                    <div className="text-sm text-slate-600">
                      {route.trains} • {route.duration}
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Class Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Class Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {classes.map((cls) => (
                  <div
                    key={cls.code}
                    className="flex items-center justify-between text-sm"
                  >
                    <div>
                      <div className="font-medium">{cls.code}</div>
                      <div className="text-slate-600">{cls.name}</div>
                    </div>
                    <div className="text-slate-600">{cls.price}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Booking Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Booking Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <div>• Advance booking up to 120 days</div>
                <div>• Tatkal booking opens at 10:00 AM</div>
                <div>• Premium Tatkal at 10:30 AM</div>
                <div>• Carry valid ID for travel</div>
                <div>• E-tickets accepted</div>
                <div>• Check PNR before travel</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
