import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  Users,
  CheckCircle,
  Globe,
  Headphones,
  ClipboardList,
  BarChart3,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const MultilingualCallCenter: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Auity Multilingual Call Center Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Increase your business reach globally and boost sales by leveraging
          multilingual call center services starting at just $8/hour.
        </p>
        <Button className="mt-6 bg-white text-indigo-700 hover:bg-gray-200">
          Contact Us
        </Button>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Multilingual Support?
          </h2>
          <p className="text-gray-700 mb-4">
            Language barrier-related customer attrition can be reduced with
            DMAIC-aligned multilingual call center systems. At Nimble Auity, our
            Voice of the Customer (VoC)-to-CTQ mapping models use skilled agents
            to bridge regional communication gaps.
          </p>
          <p className="text-gray-700">
            We have some of the most experienced multilingual call center agents
            on board, leveraging the latest tools and software to deliver
            top-notch services.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Highlights</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> 25+ Years
              of Expertise
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Lean Six
              Sigma Driven Processes
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Global
              Client Base
            </li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Multilingual Call Center Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: PhoneCall,
              title: "Multilingual Outbound Call Center",
              desc: "CATI services, loyalty management, market intelligence, customer follow-up, database selling.",
            },
            {
              icon: Headphones,
              title: "Multilingual Inbound Call Center",
              desc: "Order taking, upselling, IVR with real-time dashboards and standardized scripts.",
            },
            {
              icon: BarChart3,
              title: "Multilingual Lead Generation",
              desc: "Quality leads from diverse regions by communicating in native languages.",
            },
            {
              icon: Users,
              title: "Multilingual Telemarketing",
              desc: "CTQ-driven telemarketing across demographics with real-time process controls.",
            },
            {
              icon: ClipboardList,
              title: "Multilingual Appointment Setting",
              desc: "Seamless appointment scheduling in multiple languages.",
            },
            {
              icon: Globe,
              title: "Multilingual Monitoring Support",
              desc: "Call monitoring, reporting, and analytics in multiple languages.",
            },
            {
              icon: Users,
              title: "Multilingual Virtual Assistant",
              desc: "LSS checklists and SOPs for native-language task handling.",
            },
          ].map((srv, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <srv.icon className="w-10 h-10 mx-auto mb-4 text-indigo-700" />
                <h3 className="font-semibold text-lg mb-2">{srv.title}</h3>
                <p className="text-sm text-gray-600">{srv.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Other Services You May Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Technical Support Services",
            "Remote IT Support Services",
            "Toll-Free Customer Support",
            "Email Support Services",
          ].map((srv, idx) => (
            <Card key={idx} className="shadow-sm hover:shadow-md">
              <CardContent className="p-4 font-medium text-center">{srv}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Auity for Multilingual Call Center Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Affordable Pricing",
              desc: "Flexible and affordable options to match your business requirements.",
            },
            {
              title: "Superior Quality",
              desc: "ISO certified, ensuring services are error-free and high-quality.",
            },
            {
              title: "Best Infrastructure",
              desc: "State-of-the-art facilities aligned with CTQ mapping.",
            },
            {
              title: "Data Security",
              desc: "ISO/IEC 27001:2022 certified with strict data protection policies.",
            },
            {
              title: "Skilled Team",
              desc: "Talented multilingual agents to meet all your requirements.",
            },
            {
              title: "SPOC",
              desc: "Dedicated single point of contact for streamlined communication.",
            },
            {
              title: "Scalable Services",
              desc: "Easily ramp up team size as your business grows.",
            },
            {
              title: "Quick Turnaround",
              desc: "Faster cycle times benchmarked by Lean Six Sigma frameworks.",
            },
            {
              title: "24/7 Support",
              desc: "Always-available teams for sales, support, and project management.",
            },
          ].map((reason, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Call Quality Monitoring for a Tech Firm
              </h3>
              <p className="text-gray-700 mb-2">
                Provided call monitoring to a US-based tech firm using audio
                recording devices, improving quality and client satisfaction.
              </p>
              <Button variant="link" className="text-indigo-700 p-0">
                Read Case Study
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Ticketing & Email Support for a Home Furnishing Brand
              </h3>
              <p className="text-gray-700 mb-2">
                Helped a manufacturer streamline internal ticketing and email
                support, reducing workflow disruptions.
              </p>
              <Button variant="link" className="text-indigo-700 p-0">
                Read Case Study
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <p className="max-w-3xl mx-auto text-lg">
          "The Nimble Auity team has provided excellent support and always gone
          the extra mile in their efforts. From the outset, it has been a great
          experience to work with them."
        </p>
        <p className="mt-4 text-sm">- Co-Founder, Tech-startup, UK</p>
      </section>

      {/* Closing CTA */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Customer Communication?
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Nimble Auity has been a pioneer in providing multilingual call center
          services for over 25 years. With skilled agents and the latest tools,
          we deliver measurable quality improvements. Let’s run a Lean Six Sigma
          diagnostic to identify areas for improvement.
        </p>
        <Button className="bg-indigo-700 text-white hover:bg-indigo-800">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default MultilingualCallCenter;
