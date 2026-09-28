import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const SignageDesignServices: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white px-6 md:px-16 py-16">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Nimble Signage Design Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Eye-catching and attractive signage designs from experienced creative designers, starting at just $10/hr.
        </p>
        <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition">
          Contact Nimble Now
        </button>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto space-y-6 text-gray-700 mb-16">
        <p>
          Is your organization struggling to produce attractive signage for marketing collaterals? Nimble Audity offers expert signage design services, leveraging the latest tools and technologies to deliver high-quality results.
        </p>
        <p>
          Our skilled designers handle all your signage requirements efficiently, ensuring visually compelling designs for outdoor, indoor, and digital signage.
        </p>
      </div>

      {/* Signage Services Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Outdoor Signage Design",
            desc: "Accurate and flawless outdoor signage designs that communicate effectively with your audience and boost sales.",
          },
          {
            title: "Indoor Signage Design",
            desc: "Eye-catching indoor signage designs, customized to client needs with quick turnaround using latest design tools.",
          },
          {
            title: "Digital Signage Design",
            desc: "Impactful digital signage designs delivered promptly using cutting-edge tools for maximum audience engagement.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Other Services */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
          Other Creative Services
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-gray-700">
          {["Brochure Design", "Flyer Design", "Banner Design", "Hoarding Design"].map(
            (service, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl shadow hover:shadow-2xl transition"
              >
                <h3 className="font-bold text-blue-700">{service}</h3>
              </div>
            )
          )}
        </div>
      </div>

      {/* Why Choose Nimble */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold text-blue-700">Why Choose Nimble?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Affordable pricing, data security, high-quality services, skilled designers, dedicated managers, scalable services, 24/7 support, and quick turnaround times make Nimble the trusted choice for signage design.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              "Affordable Pricing",
              "Data Security",
              "High-Quality Services",
              "World-Class Infrastructure",
              "Skilled Creative Designers",
              "Dedicated Manager",
              "Highly Scalable Services",
              "24/7 Support",
              "Short Turnaround Time",
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition flex items-start space-x-3">
                <FaCheckCircle className="text-blue-600 mt-1" />
                <span className="text-gray-700 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Case Studies */}
      <div className="max-w-5xl mx-auto my-16">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Client Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition">
            <h3 className="font-bold text-xl mb-2">Vector Artwork Services to US-based Label Designer</h3>
            <p>
              A leading US-based label designer sought a reliable vector artwork service provider. Nimble delivered cost-effective, high-quality services on time.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition">
            <h3 className="font-bold text-xl mb-2">Prepress and Vector Artwork for Dublin-based Client</h3>
            <p>
              Nimble provided timely and reliable prepress and artwork services to a Dublin-based client, meeting all requirements efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Testimonials</h2>
        <blockquote className="text-gray-700 italic">
          "The effort spent on my DTP project with a very quick turnaround helped my company reap immense profits. Looking forward to a successful business relationship."
        </blockquote>
        <p className="mt-2 font-semibold">Graphics Manager, Electronics Company, South Korea</p>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Ready to Get Stunning Signage Designs?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Partner with Nimble Audity for reliable, cost-effective, and eye-catching signage design services.
        </p>
        <button className="bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-800 transition">
          Contact Nimble Now
        </button>
      </div>
    </section>
  );
};

export default SignageDesignServices;
