import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BarChart3, LineChart, Building2, TrendingUp } from "lucide-react";
import NavigationMenu from "../MegaMenu";

const BusinessModelingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center py-16 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">
          Nimble Business Modeling Services
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          We fine-tune your business model so you gain a competitive advantage
          by aligning operations with business strategy.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Contact Us
        </Button>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          Want to accelerate your business growth? Our experts provide investment
          and operational forecasts, helping you make sound business decisions.
          We build precise business models, optimize data, and use advanced
          analytics tools to project your growth curve.
        </p>
        <p>
          Nimble Acuity supports companies across 160+ countries with financial
          planning, business growth consultations, and financial modeling. Our
          business models help clients overcome complex challenges and capture
          future opportunities.
        </p>
      </section>

      {/* Solutions Section */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
            Business Modeling Solutions We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Business Market Research",
                desc: "Stay ahead of competition and discover product/service enhancement opportunities.",
                icon: BarChart3,
              },
              {
                title: "Competitive Business Valuation",
                desc: "Evaluate marketing strategies and analyze strengths to outsmart competitors.",
                icon: TrendingUp,
              },
              {
                title: "Company Profiling",
                desc: "Get insights into financial performance, stock trends, product segments, and competition.",
                icon: Building2,
              },
              {
                title: "Budgeting & Forecasting",
                desc: "Analyze historical data and predict future results while mitigating risks.",
                icon: LineChart,
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="shadow-md hover:shadow-lg transition rounded-2xl"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <item.icon className="w-10 h-10 mx-auto text-blue-600" />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
          Why Choose Nimble Acuity for Business Modeling?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "ISO-Certified processes ensuring quality delivery",
            "100% Data Security with NDA agreements",
            "Shortest Turnaround Times with expert teams",
            "Flexible pricing starting at just $14/hour",
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 w-6 h-6 mt-1" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-800">
            Client Testimonials
          </h2>
          <blockquote className="italic text-lg text-gray-700">
            “The services that Nimble Acuity provided helped us achieve
            substantial cost and time savings on several difficult projects.”
          </blockquote>
          <p className="text-gray-600">
            – Senior Vice President, Automotive & Transportation Industry
            Solutions Group
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          Ready to Optimize Your Business Model?
        </h2>
        <p className="text-gray-700 mb-6">
          Partner with us for accurate insights, detailed evaluations, and a
          dedicated global team that drives results.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Get in Touch
        </Button>
      </section>
    </div>
  );
};

export default BusinessModelingPage;
