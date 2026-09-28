import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart2, Globe2, Users, FileText, Phone } from "lucide-react";
import NavigationMenu from "../MegaMenu";

export default function IndustryAnalysisServices() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="w-full bg-purple-100 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-900">
          Nimble Industry Analysis Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-6">
          With our ingenious analytics and research services, Nimble Acuity helps
          enterprises understand the current position of a specific business in the
          market today. We provide exhaustive and highly reliable industry analysis
          services covering customer behavior, technology shifts, demographics,
          and more.
        </p>
        <Button size="lg" className="bg-purple-700 text-white">
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
              icon: <CheckCircle className="h-10 w-10 text-purple-600" />,
              title: "Proven Expertise",
              desc: "20+ years delivering industry analysis across multiple sectors.",
            },
            {
              icon: <Globe2 className="h-10 w-10 text-purple-600" />,
              title: "Global Reach",
              desc: "Robust global delivery model with research expertise and analytics.",
            },
            {
              icon: <Users className="h-10 w-10 text-purple-600" />,
              title: "Dedicated Team",
              desc: "Expert analysts and a dedicated manager ensure accuracy and efficiency.",
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
          Industry Analysis Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Training and Development",
            "Industry Market Research",
            "Clinical Research",
            "R&D",
            "Writing and Content Development",
            "Technical Analysis",
            "Medical Services",
            "Learning Solutions",
            "IP Research",
            "Legal Research",
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl border shadow-md">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-semibold mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive insights and analysis tailored for your business needs.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="max-w-6xl w-full py-16 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Our Approach to Industry Research and Analysis
        </h2>
        <ol className="space-y-6 max-w-3xl mx-auto text-gray-700 text-lg list-decimal list-inside">
          <li><strong>Defining Objective & Scope:</strong> Understand business goals such as expansion, demand-supply, or competitor performance.</li>
          <li><strong>Information Gathering:</strong> Collect data from KPO research, customer info, competitor info, and demographic analysis.</li>
          <li><strong>Data Cleansing:</strong> Filter, correct, and refine raw data for accuracy and focus.</li>
          <li><strong>Analysis:</strong> Apply correlation and standards to derive rivalry indexes, substitutes, and global insights.</li>
          <li><strong>Reporting:</strong> Deliver clear, actionable reports aligned with initial objectives, including SWOT analysis.</li>
        </ol>
      </section>

      {/* Process Section */}
      <section className="w-full bg-purple-50 py-16 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Industry Analysis Process We Follow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[ 
            { step: "01", title: "Project Initiation", desc: "Define scope, timeline, and objectives." },
            { step: "02", title: "Industry Analysis", desc: "Identify resources, gather online/offline data." },
            { step: "03", title: "Data Cleansing", desc: "Filter and format data for focused results." },
            { step: "04", title: "Final Deliverable", desc: "Send reports, incorporate changes, and signoff." },
          ].map((phase, idx) => (
            <Card key={idx} className="rounded-2xl border shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-purple-700 mb-2">{phase.step}</h3>
                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                <p className="text-sm text-gray-600">{phase.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-900">
          Ready to Nimble Your Industry Analysis?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">
          Partner with Nimble Acuity and leverage expert insights across industries.
          Discuss your core objectives with our specialized research team today!
        </p>
        <Button size="lg" className="bg-purple-700 text-white flex items-center gap-2">
          <Phone className="h-5 w-5" /> Contact Us
        </Button>
      </section>
    </div>
  );
}
