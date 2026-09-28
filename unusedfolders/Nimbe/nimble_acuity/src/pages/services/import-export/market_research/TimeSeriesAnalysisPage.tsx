import { motion } from "framer-motion";
import { LineChart, BarChart3, Database, ShieldCheck, Clock, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function TimeSeriesAnalysisPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Nimble Time Series Analysis Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg">
          We monitor and analyze key business metrics to predict future trends, sales, and revenue. Solutions start at just{" "}
          <span className="font-semibold">$14/hour</span>.
        </p>
        <Button className="mt-6">Get Started</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Time Series Analysis Services We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Quantitative Analysis</h3>
              <p>
                Using regression analysis, we forecast future growth by comparing historic data. Covers seasonal vs. non-seasonal, 
                univariate vs. multivariate, and stationary vs. non-stationary models.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Qualitative Analysis</h3>
              <p>
                Based on executive opinions, Delphi method, and customer surveys to forecast growth, risks, and customer behavior.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our 5-Step Process</h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {[
            "Data Preparation",
            "Pattern Recognition",
            "Time Series Analytics",
            "Quality Check & Layout",
            "Result Sharing",
          ].map((step, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <p className="font-semibold">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of Time Series Analysis</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: TrendingUp, title: "Seasonal Patterns", desc: "Plan production & delivery based on demand fluctuations." },
            { icon: LineChart, title: "Trend Estimates", desc: "Understand demand/supply changes & adapt marketing strategies." },
            { icon: BarChart3, title: "Growth Prediction", desc: "Forecast organizational & financial growth accurately." },
            { icon: ShieldCheck, title: "Business Reliability", desc: "Make data-driven business decisions with confidence." },
          ].map((benefit, idx) => (
            <Card key={idx}>
              <CardContent className="p-6 flex items-start space-x-4">
                <benefit.icon className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Applications of Time Series Analysis</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            "Stock Market Analysis",
            "Demand Forecasting",
            "Budgetary Analysis",
            "Price Optimization",
            "Inventory Analysis",
            "Financial Forecasting",
            "Census Analysis",
            "Yield Projection",
            "Sales Forecasting",
            "Competitor Analysis",
          ].map((app, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">{app}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Award, title: "Certified Experts", desc: "Instant access to certified data analysts with decades of experience." },
            { icon: Users, title: "360° Support", desc: "We work as your extended team, providing end-to-end analytics support." },
            { icon: Clock, title: "Quick Turnaround", desc: "Fast project delivery with round-the-clock global support." },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardContent className="p-6 flex items-start space-x-4">
                <item.icon className="h-8 w-8 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Nimble Time Series Analysis Services to Nimble Acuity</h2>
        <p className="max-w-3xl mx-auto mb-6">
          With 26+ years of experience, we help businesses predict trends, optimize strategies, and achieve growth using big data and AI-powered analytics.
        </p>
        <Button size="lg" variant="secondary">Talk to Us</Button>
      </section>
    </div>
  );
}
