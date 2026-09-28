import React from "react";
import { TrendingUp, BarChart3, ClipboardList, CheckCircle, Shield, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import NavigationMenu from "../MegaMenu";

const MarketForecast: React.FC = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12 space-y-12">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
          Nimble Market Forecast and Analysis Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Strategic forecasting and analysis to help pharmaceutical companies
          innovate, identify opportunities, and stay ahead in an unpredictable
          market.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto text-gray-700 space-y-4 text-lg">
        <p>
          With unpredictable markets and intense competition in healthcare and
          pharmaceuticals, companies need powerful forecasting tools to survive
          and thrive. Nimble Acuity (Nimble Acuity) provides detailed, high-level
          research at cost-effective prices, helping both startups and Fortune
          1000 giants make data-driven decisions with confidence.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          Market Forecast & Analysis Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Baseline Forecasting",
              desc: "Data on volume, sales, and patients to create baseline forecasts for stakeholders and markets.",
              icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
            },
            {
              title: "Market Event Analysis",
              desc: "Event-driven insights on product launches, regulations, and LoE to shape strategy.",
              icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
            },
            {
              title: "Consensus Forecasting",
              desc: "Accurate monetary projections on revenue, profit, and shareholder incentives.",
              icon: <ClipboardList className="w-6 h-6 text-blue-600" />,
            },
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 space-y-3">
                <div>{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          Our Market Forecast & Analysis Process
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Assembling Data",
            "Determine Goals",
            "Define Research Strategy",
            "Execute Research",
            "Analyze Research",
            "Report Results",
          ].map((step, idx) => (
            <Card key={idx} className="rounded-xl shadow hover:shadow-lg transition bg-blue-50">
              <CardContent className="p-4 flex items-center space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700 font-medium">{step}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          Benefits of Outsourcing to Nimble Acuity
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Shield className="w-6 h-6 text-blue-600" />,
              title: "Confidentiality Assured",
              desc: "All projects are protected under strict confidentiality and data security norms.",
            },
            {
              icon: <Zap className="w-6 h-6 text-blue-600" />,
              title: "Economic Pricing Model",
              desc: "Highly skilled experts at cost-effective rates without compromising quality.",
            },
            {
              icon: <Users className="w-6 h-6 text-blue-600" />,
              title: "Skilled Manpower",
              desc: "Data scientists capable of handling complex projects with quick turnaround.",
            },
            {
              icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
              title: "Quality & Efficiency",
              desc: "Thoroughly analyzed data delivered on time, ensuring actionable insights.",
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
              title: "Premium Research",
              desc: "Unique, detailed, and actionable research to guide business strategies.",
            },
          ].map((benefit, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 space-y-3">
                <div>{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-6 bg-blue-50 p-10 rounded-2xl shadow-inner">
        <h2 className="text-3xl font-bold text-blue-800">
          Choose Nimble Acuity for Accurate Market Forecasting & Analysis Services
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Our skilled team delivers reliable, objective, and accurate insights to
          help pharmaceutical companies excel in the competitive market.
          Nimble your market research needs to us for efficiency, accuracy,
          and cost-effectiveness.
        </p>
        <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default MarketForecast;
