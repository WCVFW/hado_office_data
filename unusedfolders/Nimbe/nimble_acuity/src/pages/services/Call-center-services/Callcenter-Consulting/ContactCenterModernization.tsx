import React from "react";
import { CheckCircle, Cloud, Users, PhoneCall, Settings, Shield, Zap, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

export default function ContactCenterModernization() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Acuity Contact Center Modernization Services
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-6">
          Engage, enhance, and streamline your customers' call center experience through our modernization services. Get your contact center transformed into a revenue-generating machine starting at $10 per hour.
        </p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-800">
        <p className="mb-6">
          Customer care has advanced significantly. Today’s customers demand flexible communication solutions, reaching businesses through the medium and time they prefer. To meet these growing demands, it is essential for contact centers to refurbish their services according to the latest norms.
        </p>
        <p>
          Nimble Acuity’s contact center modernization services help you improve productivity and performance for higher customer satisfaction and profitability. Leveraging the latest technology, we revitalize legacy processes and infrastructure across all touchpoints.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Center Modernization Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Multi-channel Customer Engagement",
              desc: "Build reliable platforms like chat, email, and forums for proactive customer query resolution.",
              icon: Users,
            },
            {
              title: "Self-service Portals",
              desc: "Integrate AI & chatbots to automate services, reduce voice calls, and boost satisfaction.",
              icon: Settings,
            },
            {
              title: "CRM/Agent Desktop Integrations",
              desc: "Provide agents with 360° customer profiles for faster, efficient resolutions.",
              icon: PhoneCall,
            },
            {
              title: "Cloud Enablement",
              desc: "Take your contact center to the cloud, enabling real-time analytics and IoT integration.",
              icon: Cloud,
            },
            {
              title: "System Integrations",
              desc: "Seamlessly integrate ticketing, CRM, HRIS, and ERP for unified business operations.",
              icon: Zap,
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6 text-center">
                <service.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Modernization Process</h2>
        <ol className="space-y-6">
          {[
            {
              step: "01. Team Meet",
              desc: "Understand requirements, call rates, and existing applications to identify gaps.",
            },
            {
              step: "02. Devising the Strategy",
              desc: "Create a result-oriented strategy to improve customer experience and reduce costs.",
            },
            {
              step: "03. Optimization",
              desc: "Deploy the modernization model with tools, software, and interfaces for better interactions.",
            },
            {
              step: "04. Training & Support",
              desc: "Train your teams on unified communication, FCR improvement, and customer satisfaction.",
            },
          ].map((p, i) => (
            <li key={i} className="flex items-start space-x-4">
              <div className="text-blue-600 font-bold text-xl">{p.step}</div>
              <p className="text-gray-700">{p.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Benefits of Contact Center Modernization</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Improve first call resolution rates",
            "Increase customer satisfaction & retention",
            "Save costs from outdated processes",
            "Reduce call volume & wait times",
            "Boost agent productivity & job satisfaction",
            "Enable analytics-powered decisions",
            "Drive operational efficiency & profitability",
          ].map((b, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Affordable Pricing", desc: "Competitive rates make our services accessible for all businesses." },
            { title: "Latest Tools & Software", desc: "From AI to analytics, we bring cutting-edge technology to your contact center." },
            { title: "Data Security", desc: "Encrypted servers & strict norms ensure your data stays secure." },
            { title: "Certified Experts", desc: "Our team consists of highly trained professionals ready to optimize your center." },
            { title: "Customized Solutions", desc: "We tailor solutions to your specific business needs and goals." },
            { title: "24/7 Support", desc: "Global delivery centers enable quick service and round-the-clock support." },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Case Study on IT Support for UK Motorcycle Insurance Company</h3>
              <p className="text-gray-600 mb-2">
                Nimble Acuity provided advanced IT support, scaling service levels from 30% to 90%.
              </p>
              <Button variant="link" className="text-blue-700 px-0">Read More →</Button>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Inbound Technical Support for IT Services Company</h3>
              <p className="text-gray-600 mb-2">
                Our contact center executives resolved complex technical issues efficiently.
              </p>
              <Button variant="link" className="text-blue-700 px-0">Read More →</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Modernize Your Contact Center Today</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Don’t let outdated technologies hold you back. Partner with Nimble Acuity and unleash the true potential of your contact center across all channels.
        </p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold hover:bg-gray-100">
          Get in Touch
        </Button>
      </section>
    </div>
  );
}
