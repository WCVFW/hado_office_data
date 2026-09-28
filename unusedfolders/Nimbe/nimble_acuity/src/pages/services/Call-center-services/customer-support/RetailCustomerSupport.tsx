import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  Users,
  Headphones,
  ClipboardList,
  CheckCircle,
  Clock,
  Shield,
  Building,
  UserCheck,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const RetailCustomerSupport: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Auity Retail Customer Support Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Get access to world-class, hassle-free retail customer support from
          highly experienced agents at prices starting at just $8/hour.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-gray-200">
          Contact Us
        </Button>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Retail Outsourcing?
          </h2>
          <p className="text-gray-700 mb-4">
            If managing retail customer support in-house is leading to
            inefficiencies and inconsistent service, it may be time to consider
            Nimble Auity’s validated model. We implement Lean Six Sigma-aligned
            practices, ensuring Voice of the Customer (VoC)-to-Critical to
            Quality (CTQ) mapping drives every interaction.
          </p>
          <p className="text-gray-700">
            Our workflows are standardized to reduce cycle time and eliminate
            error-prone steps, delivering reliable and scalable support.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Highlights</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> 25+ Years
              of Experience
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> DMAIC
              Lifecycle Principles
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Proven
              Global Client Engagements
            </li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Retail Customer Support Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: PhoneCall,
              title: "Telemarketing Customer Support",
              desc: "Qualified telemarketers to handle all your telemarketing support with ease.",
            },
            {
              icon: Headphones,
              title: "Inbound Customer Support",
              desc: "Validated improvement cycles reduced ticket resolution cycle time by 32.2%.",
            },
            {
              icon: Users,
              title: "Outbound Customer Support",
              desc: "Efficient outbound services customized to client requirements, delivered hassle-free.",
            },
          ].map((srv, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <srv.icon className="w-10 h-10 mx-auto mb-4 text-blue-700" />
                <h3 className="font-semibold text-lg mb-2">{srv.title}</h3>
                <p className="text-sm text-gray-600">{srv.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">
          Other Services You May Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Technical Support Services",
            "Remote IT Support Services",
            "Toll-Free Customer Support",
            "Email Support Services",
          ].map((srv, idx) => (
            <Card key={idx} className="shadow-sm hover:shadow-md">
              <CardContent className="p-4 font-medium text-center">
                {srv}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Auity for Retail Customer Support?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: ClipboardList,
              title: "Flexible Pricing Packages",
              desc: "Highly affordable and tailored pricing to fit business needs.",
            },
            {
              icon: CheckCircle,
              title: "Error-Free Services",
              desc: "ISO-certified with Six Sigma-driven quality controls.",
            },
            {
              icon: Building,
              title: "World-Class Infrastructure",
              desc: "Access to global-standard tools and facilities.",
            },
            {
              icon: Shield,
              title: "Information Security",
              desc: "ISO/IEC 27001:2022 certified, ensuring complete data safety.",
            },
            {
              icon: Users,
              title: "Experienced Team",
              desc: "Qualified and skilled retail support experts.",
            },
            {
              icon: UserCheck,
              title: "Dedicated Manager",
              desc: "One SPOC managing CTQ tracking and DMAIC governance.",
            },
            {
              icon: Users,
              title: "Scalable Services",
              desc: "Easily ramp up team size as per client requirements.",
            },
            {
              icon: Clock,
              title: "Short Turnaround",
              desc: "Global delivery centers reduce turnaround time.",
            },
            {
              icon: Headphones,
              title: "24/7 Support",
              desc: "Always-available sales, project management & support teams.",
            },
          ].map((reason, idx) => (
            <Card key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md">
              <CardContent>
                <reason.icon className="w-8 h-8 text-blue-700 mb-3" />
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-gray-700">{reason.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Call Quality Monitoring for a Tech Firm
              </h3>
              <p className="text-gray-700 mb-2">
                Provided monitoring to a US-based tech firm, improving call
                quality and client satisfaction.
              </p>
              <Button variant="link" className="text-blue-700 p-0">
                Read Case Study
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Ticketing & Email Support for Home Furnishing Brand
              </h3>
              <p className="text-gray-700 mb-2">
                Helped streamline internal ticketing and email support, reducing
                workflow disruptions.
              </p>
              <Button variant="link" className="text-blue-700 p-0">
                Read Case Study
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <p className="max-w-3xl mx-auto text-lg">
          "I'm impressed! :) You ladies and gentlemen are doing fantastic work.
          Thank you so much!"
        </p>
        <p className="mt-4 text-sm">
          - Reservations Supervisor, Travel Website Company, CA
        </p>
      </section>

      {/* Closing CTA */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Elevate Your Retail Customer Support?
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Nimble Auity has been a pioneer in retail customer support for over 25
          years. With skilled experts and cutting-edge tools, we deliver
          measurable improvements and faster results. Partner with us today for
          efficient, scalable retail support.
        </p>
        <Button className="bg-blue-700 text-white hover:bg-blue-800">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default RetailCustomerSupport;
