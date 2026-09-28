import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const RealEstateLeadGeneration: React.FC = () => {
  const services = [
    {
      title: "Real Estate Cold Calling",
      desc: "Never miss an opportunity with our real estate cold-calling services.",
    },
    {
      title: "Appointment Setting",
      desc: "Partner with us to nurture leads while you focus on core operations.",
    },
    {
      title: "B2C Lead Generation",
      desc: "Develop trust and rapport with your targeted audience to influence buying decisions.",
    },
    {
      title: "B2B Lead Generation",
      desc: "Eliminate inefficiencies and redirect resources toward validated sales outcomes.",
    },
    {
      title: "Content Marketing",
      desc: "Engage your audience with attractive and valuable content.",
    },
    {
      title: "Pay-Per-Click (PPC)",
      desc: "Produce quick results with accurate targeting and easy control.",
    },
    {
      title: "Social Media Marketing (SMM)",
      desc: "Boost outreach, brand awareness, and customer satisfaction.",
    },
    {
      title: "Marketing Automation",
      desc: "Digitization with error-proofing mechanisms to ensure smooth workflows.",
    },
    {
      title: "Email Marketing",
      desc: "Support online marketing initiatives and strengthen client relationships.",
    },
    {
      title: "Search Advertising",
      desc: "Put your promotion where it’s guaranteed to be seen and engaged with.",
    },
    {
      title: "Display Advertising",
      desc: "Attract, retain, and engage customers with smart advertising strategies.",
    },
  ];

  const process = [
    "Understanding the Requirement",
    "Determining the Right Action-Plan",
    "Implementing the Strategies",
    "Tracking the Progress",
    "Lead Qualification",
    "Delivery",
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Outsource Real Estate Lead Generation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Attract ideal prospects. Streamline your lead conversion process and drive success with our practical, result-driven real estate lead generation services.
        </p>
        <Button className="mt-6 bg-white text-indigo-700 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Commercial Real Estate Lead Generation Services We Offer
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-indigo-700">{service.title}</h3>
                <p className="mt-3 text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Lead Generation Process
        </h2>
        <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, idx) => (
            <Card key={idx} className="rounded-xl border-indigo-200">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-extrabold text-indigo-600 mb-3">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <h3 className="text-lg font-semibold">{step}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us?
        </h2>
        <ul className="grid gap-4 md:grid-cols-2 text-gray-700">
          <li>✅ ISO/IEC 27001:2022 Certified – Maximum Data Security</li>
          <li>✅ High Accuracy & International Quality Standards</li>
          <li>✅ Quick Turnaround Time</li>
          <li>✅ Scalable Solutions for Long-Term Growth</li>
          <li>✅ 20+ Years of Experience</li>
          <li>✅ Modern Infrastructure & Automation</li>
          <li>✅ Competitive Pricing</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get High-Quality Real Estate Leads That Convert
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Collaborate with us to optimize your campaigns, reduce inefficiencies, and
          generate a steady stream of qualified real estate leads.
        </p>
        <Button className="bg-white text-indigo-700 hover:bg-gray-200">
          Start Your Project Today
        </Button>
      </section>
    </div>
  );
};

export default RealEstateLeadGeneration;
