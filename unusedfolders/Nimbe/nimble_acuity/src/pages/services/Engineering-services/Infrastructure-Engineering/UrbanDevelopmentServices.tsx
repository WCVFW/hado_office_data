import React from "react";
import { CheckCircle, ArrowRight, Quote } from "lucide-react";
import ESmainmenu from "../ESmainmenu";

const UrbanDevelopmentServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Outsource Urban Development Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 opacity-90">
          Hire expert urban development professionals starting at just{" "}
          <span className="font-bold text-yellow-300">$18/hour</span> to design
          smart, community-focused urban plans.
        </p>
        <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition inline-flex items-center gap-2">
          Get Started <ArrowRight size={20} />
        </button>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto py-12 px-6 md:px-12 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-green-700">Nimble Acuity</span>,
          we collaborate with governments, development firms, and agencies to
          deliver sustainable, innovative, and cost-effective urban planning
          strategies. Our services empower communities and transform cities into
          smarter, more livable spaces.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-10">
            Urban Development Services We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Smart Urban Infrastructure Plan Drafting",
              "Evaluation & Monitoring",
              "Spatial Planning and GIS",
              "Urban Regulatory & Institutional Reforms",
              "Water Supply & Sanitation Planning",
              "Urban Layout Planning & Management",
              "Affordable Housing, BSUP, and Community-Centric Planning",
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >
                <CheckCircle className="text-green-600 mb-3" size={28} />
                <h3 className="font-semibold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Urban Development Process
          </h2>
          <div className="space-y-8">
            {[
              "We discuss project challenges with clients and present ideas.",
              "Our experts brainstorm the best cost-effective approach.",
              "We finalize plan, cost, and turnaround time.",
              "Our team executes groundwork and end-to-end analysis.",
              "Quality team reviews and ensures compliance.",
              "Final deliverables & reports are shared with stakeholders.",
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tools We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              "AutoCAD",
              "Autodesk Civil 3D",
              "InfraWorks 360",
              "Bentley StormCAD",
              "Bentley SewerCAD V8i",
              "MicroStation Flowmaster",
            ].map((tool, i) => (
              <div
                key={i}
                className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
              >
                <span className="font-semibold text-gray-800">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Nimble Acuity?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "High-quality tailored services",
              "Affordable & flexible pricing",
              "Advanced infrastructure & tools",
              "ISO 9001:2015 Certified Provider",
              "100% Data Security (ISO/IEC 27001:2022)",
              "Quick Turnaround & Scalability",
              "Dedicated SPOC for communication",
              "24/7 Client Support",
            ].map((point, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition"
              >
                <CheckCircle className="text-green-600 mb-3" size={28} />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Quote size={40} className="mx-auto text-green-600 mb-4" />
          <blockquote className="italic text-lg text-gray-700 leading-relaxed">
            “We are very satisfied with Nimble Acuity’s services. They met all
            our deadlines and exceeded expectations. We consider them a valuable
            part of our team.”
          </blockquote>
          <p className="mt-4 font-semibold text-gray-900">
            — Spokesperson, Oil Exploration Company (US)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready to Transform Your Urban Projects?
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
          Partner with Nimble Acuity today and gain access to world-class urban
          development expertise, tools, and strategies. Let’s shape the future
          of cities together.
        </p>
        <button className="px-10 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition inline-flex items-center gap-2">
          Contact Us <ArrowRight size={22} />
        </button>
      </section>
    </div>
  );
};

export default UrbanDevelopmentServices;
