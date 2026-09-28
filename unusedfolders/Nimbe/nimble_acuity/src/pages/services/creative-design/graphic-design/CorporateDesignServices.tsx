import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const CorporateDesignServices: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-16 py-16">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
          Nimble Corporate Design Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Enhance your brand image with professional corporate design services from Nimble Audity.
        </p>
        <button className="mt-6 bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-800 transition">
          Get a Free Quote
        </button>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto space-y-6 text-gray-700 mb-16">
        <p>
          Over the past two decades, Nimble Audity has helped companies—from global powerhouses to startups—enhance their brand image.
        </p>
        <p>
          Partnering with Nimble allows you to save time and costs, develop an immediately recognizable corporate identity, and obtain 100% original and customized designs for all your corporate collaterals.
        </p>
        <p>
          Our corporate branding suite includes logos, newsletters, websites, stationery, business cards, letterheads, envelopes, and more.
        </p>
      </div>

      {/* Services Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Business Card Design",
            desc: "Custom business cards reflecting the vision and personality of your business.",
          },
          {
            title: "Annual Report Design",
            desc: "Expertly designed annual reports with fonts, colors, imagery, and finishing touches.",
          },
          {
            title: "Logo Design",
            desc: "Hundreds of corporate logos created with attention to font, color, and imagery selection.",
          },
          {
            title: "Website Design",
            desc: "User-friendly, 100% original corporate websites designed to impact readers and drive sales.",
          },
          {
            title: "Newsletter Design",
            desc: "Professional newsletters designed for clients across industries and verticals.",
          },
          {
            title: "Stationery & Letterhead",
            desc: "Custom corporate stationery and letterheads that enhance brand recognition.",
          },
          {
            title: "Business Form Design",
            desc: "Forms aligned with your brand's logo, colors, fonts, and contact info.",
          },
          {
            title: "Direct Mailer & Thank You Cards",
            desc: "Designs that capture attention and leave a lasting impression on clients.",
          },
          {
            title: "Rebranding Services",
            desc: "Visual audits and design updates to reposition your brand in the marketplace.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
          >
            <h3 className="text-xl font-bold text-purple-700 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Corporate Design Process */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6 text-center">
          Our Corporate Design Process
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          {[
            "Briefing: Nimble receives a briefing from the client on design requirements.",
            "Target Audience: Gather all customer information and data from the client.",
            "Project Managers: Assign resources and designate managers as single point of contact.",
            "Design Creation: Designers create designs considering turnaround time and requirements.",
            "Review: Multi-stage internal review with zero-tolerance for errors.",
            "Output: Deliver final output in client-preferred format.",
          ].map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Why Choose Nimble */}
      <div className="bg-purple-50 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold text-purple-700">Why Choose Nimble?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            With two decades of experience, Nimble offers consistent corporate designs, short delivery times, up to 60% cost savings, skilled designers, 24/7 support, ISO quality processes, and complete transparency.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              "Consistent Designs",
              "Project-Based Engagement",
              "Short Delivery Times",
              "Branding Adherence",
              "24/7 Support",
              "Dedicated Account Manager",
              "Skilled Design Team",
              "ISO Quality Processes",
              "Up to 3 Revisions",
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition flex items-start space-x-3">
                <FaCheckCircle className="text-purple-600 mt-1" />
                <span className="text-gray-700 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Success Stories */}
      <div className="max-w-5xl mx-auto my-16">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition">
            <h3 className="font-bold text-xl mb-2">
              Sticker Design for Advertising Firm
            </h3>
            <p>
              Nimble assisted a Melbourne advertising agency with 753 sticker designs matching each Rugby Club brand.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition">
            <h3 className="font-bold text-xl mb-2">
              Logo Vectorization for Australian Company
            </h3>
            <p>
              Nimble provided 100% accurate logo vectorization for an Australian startup in just 24 hours, aiding marketing and web development efforts.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">Testimonials</h2>
        <blockquote className="text-gray-700 italic">
          "The quality of artwork delivered during the trial period was exceptional, helping us decide on our new outsourced partner."
        </blockquote>
        <p className="mt-2 font-semibold">
          Director - Operations, Leading Pharmaceutical Company, Netherlands
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">
          Ready to Elevate Your Corporate Branding?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Partner with Nimble Audity for original, impactful, and professional corporate design services. Get your free quote today!
        </p>
        <button className="bg-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-purple-800 transition">
          Contact Nimble Now
        </button>
      </div>
    </section>
  );
};

export default CorporateDesignServices;
