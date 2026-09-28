import React from "react";
import CCmainmenu from "../CCmainmenu";

const CustomerRetention: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Customer Retention Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Effectively retain clients and enhance customer satisfaction with Nimble Auity’s expert customer retention solutions.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Want to turn consumer interactions into measurable retention results? Our Lean Six Sigma-guided approach maps VoC-to-CTQ metrics to detect early churn signs and proactively engage customers. Nimble Auity provides high-quality customer retention services designed to increase loyalty and satisfaction.
        </p>
        <p>
          Our strategies ensure every customer receives a personalized, timely service experience, preventing attrition and enhancing your brand reputation.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Customer Retention Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Professional & Courteous Representation",
              desc: "Agents greet customers with personalized scripts, confirm messages for accuracy, and handle basic issues to boost efficiency.",
            },
            {
              title: "Enhanced Customer Loyalty",
              desc: "Structured surveys and VoC-to-CTQ mapping convert data into focused retention actions for stronger loyalty.",
            },
            {
              title: "Enhanced Productivity",
              desc: "We manage calls, emails, and other communication channels so you can focus on core tasks.",
            },
            {
              title: "Reduced Costs",
              desc: "Remote agents leverage existing infrastructure and Lean processes to reduce expenses while delivering quality results.",
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
            "Debt Collection Services",
            "Customer Follow-up Services",
            "Market Intelligence Services",
            "Customer Satisfaction Surveys",
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
          Why Choose Nimble Customer Retention Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Affordable Pricing Options",
            "High-quality Services (ISO-certified)",
            "World-class Call Center Infrastructure",
            "Streamlined Structured Process",
            "Latest Tools & Technologies",
            "Experienced Team (26+ years)",
            "Data Security & GDPR Compliance",
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
              title: "Call Answering Support for a Pharma Company",
              desc: "Provided high-quality call answering services to address queries and upsell products.",
            },
            {
              title: "Appointment Setting Support for a US-based Client",
              desc: "Delivered prompt call center services to support IT sector client needs.",
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
      <section className="py-12 px-6 bg-green-50">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "Nimble Auity is a highly valuable resource for our company. They are meticulous and pay great attention to all our requirements."
          <footer className="mt-4 font-semibold">– General Partner, Manufacturing Company in the US</footer>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-teal-700 to-green-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Customer Retention to Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Ensure your customers remain loyal and satisfied with Nimble Auity’s professional customer retention services.
        </p>
        <button className="bg-white text-teal-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CustomerRetention;
