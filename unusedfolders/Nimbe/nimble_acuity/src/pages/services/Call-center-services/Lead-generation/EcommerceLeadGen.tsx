import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Users, Database, Clock, Shield } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const EcommerceLeadGen: React.FC = () => {
  const services = [
    {
      title: "Demand Generation Marketing",
      description:
        "Boost awareness and demand for your e-commerce products with multichannel B2C campaigns, tailored promotions, and data-driven communication strategies.",
    },
    {
      title: "B2C Lead Generation",
      description:
        "Leverage AI, ML, and experienced agents to qualify and nurture leads that show genuine buying intent for your e-commerce store.",
    },
    {
      title: "Campaign Tracking & Reporting",
      description:
        "Track, measure, and optimize campaign performance with custom reporting dashboards that provide real-time insights.",
    },
  ];

  const steps = [
    { number: "01", title: "Requirement Analysis", description: "We assess your business needs and align with your sales team to define clear goals." },
    { number: "02", title: "Building Portal for Engagement", description: "We enhance your touchpoints to maximize engagement and visibility." },
    { number: "03", title: "Capture & Nurture Demand", description: "We push personalized campaigns online & offline to educate and engage prospects." },
    { number: "04", title: "Conversion of Traffic", description: "Responsive visitors are qualified into leads ready for outreach." },
    { number: "05", title: "Appointment Setting", description: "We schedule warm leads directly with your sales team for faster closure." },
    { number: "06", title: "Delivery of Lead Database", description: "Qualified leads are delivered securely in your preferred CRM-ready format." },
  ];

  const whyChooseUs = [
    { icon: Shield, title: "Certified & Secure", description: "ISO-certified processes ensure data security and confidentiality." },
    { icon: CheckCircle, title: "High Accuracy", description: "Validated and standardized leads for reliable outcomes." },
    { icon: Clock, title: "Quick Turnaround", description: "Fast and efficient lead generation without compromising quality." },
    { icon: Users, title: "Expert Team", description: "200+ skilled professionals with 10+ years of experience in lead generation." },
    { icon: Database, title: "Scalable Solutions", description: "Flexible and scalable services that grow with your e-commerce business." },
    { icon: Target, title: "Cost-Effective", description: "Pocket-friendly pricing tailored to your business requirements." },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Outsource E-commerce Lead Generation Services
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Drive high-quality leads, boost sales, and maximize ROI with our expert e-commerce lead generation services tailored for your business.
        </p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold hover:bg-gray-100">
          Get Started Today
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our E-commerce Lead Generation Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Lead Generation Process</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <Card key={idx} className="shadow-sm border-l-4 border-indigo-600">
              <CardHeader>
                <span className="text-indigo-600 font-bold text-lg">{step.number}</span>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
              <item.icon className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg text-gray-700">
          "I'm impressed! You ladies and gentlemen are doing fantastic work. Thank you so much!"
        </blockquote>
        <p className="mt-4 font-semibold">— Reservations Supervisor, Travel Website Company, CA</p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Boost Your E-commerce Sales Today</h2>
        <p className="text-lg mb-6">Partner with us to access high-quality leads, faster sales cycles, and better ROI.</p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold hover:bg-gray-100">
          Contact Us Now
        </Button>
      </section>
    </div>
  );
};

export default EcommerceLeadGen;
