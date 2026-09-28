import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Headphones,
  PhoneCall,
  Users,
  ClipboardList,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const TollFreeSupport: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Auity Toll-Free Customer Support
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Resolve customer queries, reduce costs, and deliver uninterrupted
          services with our 24/7 toll-free support solutions.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-gray-200">
          Contact Us
        </Button>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Nimble Toll-Free Customer Support?
          </h2>
          <p className="text-gray-700 mb-4">
            For any organization, maintaining a full-fledged team of customer
            support executives is resource-intensive. The infrastructure, cost,
            and effort often become a burden. Nimble offers a smarter solution
            with our toll-free customer support services.
          </p>
          <p className="text-gray-700">
            At Nimble Auity, our services are structured under a Define,
            Measure, Analyze, Improve, and Control (DMAIC) lifecycle to ensure
            measurable service quality and process stability.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">
            Key Highlights of Our Services
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> 24/7
              Availability
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Skilled &
              Trained Executives
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Proven DMAIC
              Framework
            </li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nimble Toll-Free Support Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            { icon: PhoneCall, title: "Sales Support" },
            { icon: Headphones, title: "Post Sales Customer Support" },
            { icon: ClipboardList, title: "Appointment Setting" },
            { icon: Users, title: "Database Services" },
            { icon: BarChart3, title: "Telemarketing & Lead Generation" },
            { icon: CheckCircle, title: "Order Taking & Surveys" },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <service.icon className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-gray-700 mt-6">
          Apart from these services, if you have unique toll-free number
          requirements, Nimble will be more than willing to help.
        </p>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Customer Support Services",
            "Answering Services",
            "Lead Generation Services",
            "Virtual Assistant Services",
          ].map((srv, idx) => (
            <Card key={idx} className="shadow-sm hover:shadow-md">
              <CardContent className="p-4 font-medium text-center">{srv}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call Center Software */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">Call Center Software We Use</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "HubSpot",
            "Bitrix24",
            "Talkdesk",
            "Five9",
            "Zendesk",
            "Dixa",
            "Salesforce",
            "LiveAgent",
            "Avaya",
          ].map((tool, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Why Opt for Us */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Opt for Our Toll-Free Number Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Round-the-clock customer query support",
            "High-quality monitoring system",
            "Real-time reporting",
            "State-of-the-art technology and infrastructure",
            "Skilled and experienced customer support executives",
            "Top notch training facilities for agents",
            "100% call recording for customer reference",
            "Standardized and proven quality processes",
          ].map((point, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-5 rounded-2xl shadow-sm flex items-center"
            >
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Benefits of Choosing Nimble Toll-Free Support
        </h2>
        <ul className="max-w-4xl mx-auto space-y-4 text-gray-700">
          <li>
            ✅ Over 60% reduction in overhead and operational expenditure through
            optimized resource utilization.
          </li>
          <li>
            ✅ Target-oriented execution aligned with VoC-to-CTQ translation,
            enabling consistent performance tracking.
          </li>
          <li>
            ✅ DMAIC-led reduction of internal NVA burden—freeing your team to
            focus on core business functions.
          </li>
          <li>
            ✅ Elimination of managerial redundancies through process
            simplification and documented quality checks.
          </li>
          <li>
            ✅ Risk-free engagement ensured via audit-ready documentation and
            statistically proven security controls.
          </li>
        </ul>
      </section>

      {/* Testimonials / Portfolio */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Call Center Portfolio</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Dashboard | View Overview | View Campaign Stats | View Report Gross TPH
        </p>
        <h3 className="text-xl font-semibold mb-4">
          Call Center Staffing Calculator
        </h3>
        <p className="max-w-2xl mx-auto mb-6">
          Calculate staffing & costing for your project: inbound, outbound,
          email, or chat. Choose service type, country, and shift coverage.
        </p>
        <Button className="bg-white text-indigo-700 hover:bg-gray-200">
          Try Calculator
        </Button>
      </section>

      {/* Closing CTA */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Choose Nimble Auity for Toll-Free Customer Services
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Get a FREE Quote on our toll-free customer services and make your
          choice for an efficient, productive, and quality solution with Nimble
          Auity. With 26+ years of expertise, we’ve served over 18,000+
          customers globally.
        </p>
        <Button className="bg-blue-700 text-white hover:bg-blue-800">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default TollFreeSupport;
