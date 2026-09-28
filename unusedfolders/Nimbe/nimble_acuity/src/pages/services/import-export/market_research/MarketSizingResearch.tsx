import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart2, Globe2, Users, Phone } from "lucide-react";
import NavigationMenu from "../MegaMenu";

export default function MarketSizingResearch() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="w-full bg-blue-100 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">
          Nimble Market Sizing Research Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-6">
          Get access to accurate market sizing analysis while expanding to a new
          market by outsourcing your requirements at cost-effective rates
          (Starts at $14/hour).
        </p>
        <Button size="lg" className="bg-blue-700 text-white">
          Contact Us
        </Button>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-6xl w-full py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose Our Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
              title: "Affordable Pricing",
              desc: "Flexible packages starting at $14/hour tailored to your needs.",
            },
            {
              icon: <Globe2 className="h-10 w-10 text-blue-600" />,
              title: "Global Expertise",
              desc: "Researchers with 20+ years of experience in market sizing insights.",
            },
            {
              icon: <Users className="h-10 w-10 text-blue-600" />,
              title: "Dedicated Team",
              desc: "Get a project manager as your single point of contact.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Market Sizing Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[ 
            "Primary Research Services",
            "Market Forecasting",
            "Spend Data Analysis",
            "Revenue Analysis",
            "Market Trend Analysis",
            "Competitor Research",
            "Market Risk Assessment",
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl border shadow-md">
              <CardContent className="p-6">
                <BarChart2 className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  Detailed insights tailored to help you understand market size
                  and opportunities effectively.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl w-full py-16 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Benefits of Market Sizing Research
        </h2>
        <ul className="space-y-4 max-w-3xl mx-auto text-gray-700 text-lg">
          <li>✔ Develop creative strategies with accurate estimations.</li>
          <li>✔ Determine potential profits before launching new offerings.</li>
          <li>✔ Target customers more effectively with new strategies.</li>
          <li>✔ Stay competitive and plan future business strategies.</li>
          <li>✔ Position your company for revenue growth post-investment.</li>
          <li>✔ Identify new business opportunities through segmentation.</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="max-w-3xl mx-auto text-lg italic text-gray-700">
          “Let me thank you for the professional way in which you are managing
          the project and meeting our deadlines. Unfortunately, our second
          supplier - I cannot say the same for and have let us down considerably.”
        </p>
        <p className="mt-4 font-semibold text-blue-900">CEO, Technology Company, UK</p>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-900">
          Ready to Nimble Your Market Sizing Research?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">
          Partner with Nimble Acuity and gain accurate insights into market
          size and opportunities. Get in touch today!
        </p>
        <Button size="lg" className="bg-blue-700 text-white flex items-center gap-2">
          <Phone className="h-5 w-5" /> Contact Us
        </Button>
      </section>
    </div>
  );
}