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
import {
  Bus,
  MapPin,
  Calendar,
  Clock,
  Users,
  Star,
  Wifi,
  Snowflake,
  Armchair,
  Shield,
  Search,
} from "lucide-react";

const popularRoutes = [
  {
    from: "Delhi",
    to: "Manali",
    duration: "12h",
    price: "₹800",
    distance: "540 km",
  },
  {
    from: "Mumbai",
    to: "Pune",
    duration: "3h",
    price: "₹400",
    distance: "150 km",
  },
  {
    from: "Bangalore",
    to: "Goa",
    duration: "11h",
    price: "₹1200",
    distance: "560 km",
  },
  {
    from: "Chennai",
    to: "Bangalore",
    duration: "6h",
    price: "₹600",
    distance: "350 km",
  },
];

const sampleBuses = [
  {
    id: "1",
    operator: "Volvo Express",
    type: "A/C Sleeper",
    departure: "22:30",
    arrival: "06:00",
    duration: "7h 30m",
    price: 1200,
    seatsAvailable: 15,
    rating: 4.5,
    amenities: ["wifi", "ac", "blanket", "charging"],
    busNumber: "KA-01-AB-1234",
  },
  {
    id: "2",
    operator: "Super Deluxe Travels",
    type: "Non A/C Seater",
    departure: "06:00",
    arrival: "12:30",
    duration: "6h 30m",
    price: 800,
    seatsAvailable: 25,
    rating: 4.2,
    amenities: ["charging", "music"],
    busNumber: "MH-12-CD-5678",
  },
  {
    id: "3",
    operator: "Luxury Coaches",
    type: "A/C Semi Sleeper",
    departure: "14:15",
    arrival: "20:45",
    duration: "6h 30m",
    price: 1000,
    seatsAvailable: 8,
    rating: 4.8,
    amenities: ["wifi", "ac", "blanket", "charging", "tv"],
    busNumber: "DL-08-EF-9012",
  },
];

const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
];

export default function BusTickets() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [buses, setBuses] = useState(sampleBuses);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      setBuses(sampleBuses);
    }, 2000);
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi":
        return <Wifi className="w-4 h-4" />;
      case "ac":
        return <Snowflake className="w-4 h-4" />;
      case "blanket":
        return <Armchair className="w-4 h-4" />;
      case "charging":
        return <Bus className="w-4 h-4" />;
      case "tv":
        return <Users className="w-4 h-4" />;
      default:
        return <Shield className="w-4 h-4" />;
    }
  };

  const swapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Bus Tickets
          </h1>
          <p className="text-slate-600">
            Book bus tickets for all major routes across India
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Search Buses
            </CardTitle>
            <CardDescription>
              Find and book bus tickets for your journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <Label htmlFor="from">From</Label>
                <Select value={fromCity} onValueChange={setFromCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Departure city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city.toLowerCase()}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="relative">
                <Label htmlFor="to">To</Label>
                <Select value={toCity} onValueChange={setToCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Destination city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city.toLowerCase()}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={swapCities}
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
                <Label htmlFor="passengers">Passengers</Label>
                <Select value={passengers} onValueChange={setPassengers}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} Passenger{num > 1 ? "s" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  onClick={handleSearch}
                  disabled={!fromCity || !toCity || !journeyDate || isSearching}
                  className="w-full"
                >
                  {isSearching ? "Searching..." : "Search Buses"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Bus Results */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {buses.map((bus) => (
                <Card
                  key={bus.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900">
                              {bus.operator}
                            </h3>
                            <p className="text-sm text-slate-600">
                              {bus.type} • {bus.busNumber}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">
                              {bus.rating}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-slate-500 mr-2" />
                            <div>
                              <div className="font-medium">{bus.departure}</div>
                              <div className="text-sm text-slate-600">
                                Departure
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 text-slate-500 mr-2" />
                            <div>
                              <div className="font-medium">{bus.arrival}</div>
                              <div className="text-sm text-slate-600">
                                Arrival
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center">
                            <Users className="w-4 h-4 text-slate-500 mr-2" />
                            <div>
                              <div className="font-medium">
                                {bus.seatsAvailable} seats
                              </div>
                              <div className="text-sm text-slate-600">
                                Available
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-slate-500 mr-2" />
                            <div>
                              <div className="font-medium">{bus.duration}</div>
                              <div className="text-sm text-slate-600">
                                Duration
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Amenities */}
                        <div className="mt-3">
                          <div className="flex flex-wrap gap-2">
                            {bus.amenities.map((amenity, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="flex items-center gap-1"
                              >
                                {getAmenityIcon(amenity)}
                                {amenity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="lg:text-right">
                        <div className="text-2xl font-bold text-slate-900 mb-2">
                          ₹{bus.price}
                        </div>
                        <div className="text-sm text-green-600 mb-2">
                          Commission: ₹
                          {Math.min(
                            Math.max((bus.price * 3) / 100, 10),
                            100,
                          ).toFixed(0)}
                        </div>
                        <div className="space-y-2">
                          <Button className="w-full lg:w-auto">
                            Select Seats
                          </Button>
                          <div className="text-xs text-slate-500">
                            Per person • 3% commission
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {buses.length === 0 && !isSearching && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Bus className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-slate-900 mb-2">
                      No buses found
                    </h3>
                    <p className="text-slate-600">
                      Try searching with different cities or dates
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
                      setFromCity(route.from.toLowerCase());
                      setToCity(route.to.toLowerCase());
                    }}
                    className="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div className="font-medium text-slate-900">
                        {route.from} → {route.to}
                      </div>
                      <div className="text-sm font-semibold text-blue-600">
                        {route.price}
                      </div>
                    </div>
                    <div className="text-sm text-slate-600">
                      {route.duration} • {route.distance}
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Safety Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Safety First
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start text-sm">
                  <Shield className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <div className="font-medium">COVID-19 Safety</div>
                    <div className="text-slate-600">
                      All buses sanitized regularly
                    </div>
                  </div>
                </div>
                <div className="flex items-start text-sm">
                  <Shield className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <div className="font-medium">Verified Operators</div>
                    <div className="text-slate-600">
                      All bus operators verified
                    </div>
                  </div>
                </div>
                <div className="flex items-start text-sm">
                  <Shield className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <div className="font-medium">24/7 Support</div>
                    <div className="text-slate-600">
                      Customer support available
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Booking Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <div>• Book in advance for better prices</div>
                <div>• Check cancellation policies</div>
                <div>• Carry valid ID for travel</div>
                <div>• Arrive 30 minutes early</div>
                <div>• Keep ticket handy</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
