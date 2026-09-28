import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Headphones, Monitor, Server, Shield } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const RemoteITSupport: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Auity Remote IT Support Services</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Resolve technical issues and provide uninterrupted customer service with our remote IT support services.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-gray-200">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Remote IT Support?</h2>
          <p className="text-gray-700 mb-4">
            Are you looking for trained IT professionals who can provide remote technical support and assist you with after-sales customer service? Then, Nimble remote IT support services are what you need!
          </p>
          <p className="text-gray-700">
            We specialize in providing 24/7 remote IT support services worldwide. Our experts troubleshoot through remote assistance and help you deliver uninterrupted services to your customers.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Highlights</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> 24/7 Remote Support</li>
            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Multi-platform Troubleshooting</li>
            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Pre-installation Training</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Remote Tech Support Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { icon: Monitor, title: "Setup & Installation", desc: "Microsoft DHS/DHCP, Server Migration, Desktop & Laptop, Printers, Peripherals, Windows/Exchange Server." },
            { icon: Headphones, title: "Incident-based Support", desc: "Support for Exchange Server, Windows Server, Small Business Server." },
            { icon: Server, title: "Managed Services", desc: "Help Desk, Server Deployment, DBA Support, Remote Backup, IT Asset Management, Consulting." },
            { icon: Shield, title: "Monitoring Support", desc: "Server & Network Monitoring, Virus Removal, Data Retrieval, Performance Tuning, Malware Removal." }
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <service.icon className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call Center Software */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Call Center Software We Use</h2>
        <p className="text-gray-700 mb-4">We use industry-leading tools for seamless support:</p>
        <div className="flex flex-wrap gap-3">
          {["HubSpot","Bitrix24","Talkdesk","Five9","Zendesk","Dixa","Salesforce","LiveAgent","Avaya"].map((tool, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl text-sm font-medium">
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Industries We Cater To</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {["Retail","Broadcasting","Online Printing","Real Estate","Software/IT/ITES","Food","Healthcare","Manufacturing","E-Commerce","Finance"].map((industry, idx) => (
            <Card key={idx} className="shadow-sm">
              <CardContent className="p-4 font-medium">{industry}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Nimble */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">What Makes Us the Preferred Remote IT Support Company?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "State-of-the-art Infrastructure", desc: "Low-defect, high-availability IT support aligned with Lean Six Sigma standards." },
            { title: "High Quality", desc: "DMAIC lifecycle control ensures repeatability and defect reduction." },
            { title: "Multilingual IT Support", desc: "Support available in multiple languages for seamless communication." },
            { title: "24/7 Availability", desc: "Always-on IT support structured around customer priorities." },
            { title: "Experienced Team", desc: "27+ years of domain experience, 200+ IT experts." },
            { title: "Flexible Pricing Options", desc: "Custom pricing models based on issue complexity, duration, and volume." }
          ].map((reason, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <p className="max-w-3xl mx-auto text-lg">
          "I am proud to personally recommend the services of Nimble Auity Solutions to organizations seeking a top-notch partner who can quickly and efficiently deploy effective outbound communication campaigns."
        </p>
        <p className="mt-4 text-sm">- Operations Specialist, Scientific Innovations Company, Korea</p>
      </section>
    </div>
  );
};

export default RemoteITSupport;
