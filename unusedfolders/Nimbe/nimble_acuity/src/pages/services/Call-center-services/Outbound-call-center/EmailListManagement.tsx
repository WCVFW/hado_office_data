import React from "react";
import CCmainmenu from "../CCmainmenu";

const EmailListManagement: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Email List Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Improve ROI for your marketing and transactional emails with clean, validated, and well-managed email lists.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          Looking to convert your existing email lists into a well-managed, high-performing asset? Nimble Auity helps you stay on top of email list management, improving productivity, sales, and ROI for your campaigns.
        </p>
        <p className="text-lg leading-relaxed">
          Our email list management services ensure emails reach the intended audience, avoiding unsubscribed or spam-flagged addresses.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Email List Management Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Email Address Validation Services",
              desc: "Comprehensive verification and multi-step validation to maintain sender reputation and eliminate invalid addresses.",
            },
            {
              title: "List Segmentation Services",
              desc: "Enhance open and click rates by segmenting lists based on demographics, company size, and other criteria for targeted campaigns.",
            },
            {
              title: "Email List Management Consulting Services",
              desc: "Dedicated account managers provide guidance, technical API support, IP & domain reputation management, and advanced issue detection.",
            },
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Other Services You May Benefit From
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            "Technical Support Services",
            "Remote IT Support Services",
            "Toll-Free Customer Support",
            "Email Support Services",
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Nimble Email List Management Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Affordable Pricing Options",
            "High-quality Services (ISO 9001:2015)",
            "World-class Infrastructure",
            "Structured Process for Accurate Execution",
            "Latest Tools & Technologies",
            "Experienced Team (26+ years)",
            "Data Security (ISO/IEC 27001:2022)",
            "Short Turnaround Times",
          ].map((point, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Telemarketing Solutions to a Leading Insurance Firm",
              desc: "Provided cost-effective telemarketing services and optimized client outreach for better ROI.",
            },
            {
              title: "Appointment Setting Services to a US-based Client",
              desc: "Delivered prompt and reliable appointment setting services for efficient lead conversion.",
            },
          ].map((story, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">{story.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{story.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-blue-50">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "Nimble Auity is a highly valuable resource for our company. They are meticulous and pay great attention to all our requirements."
          <footer className="mt-4 font-semibold">– General Partner, Manufacturing Company in the US</footer>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-700 to-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Email List Management to Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Ensure your email campaigns are accurate, targeted, and effective with Nimble Auity’s professional email list management services.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default EmailListManagement;
