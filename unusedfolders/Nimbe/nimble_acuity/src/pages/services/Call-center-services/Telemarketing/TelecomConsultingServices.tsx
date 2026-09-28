import React from "react";
import CCmainmenu from "../CCmainmenu";

const TelecomConsultingServices: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Telecommunication Consulting Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Optimize your telecommunications network and infrastructure with expert consulting starting at $8/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Looking for expert telecom consulting to monitor, evaluate, and enhance your operations? O2I delivers world-class services that help organizations streamline telecom workflows, eliminate Non-Value Added (NVA) tasks, and achieve measurable improvements using Lean-optimized frameworks.
        </p>
        <p>
          With over 25 years of experience, our telecommunication consultants help businesses align processes with Voice of the Customer (VoC)–mapped Critical to Quality (CTQ) metrics, delivering outcomes that optimize performance, reduce costs, and enhance overall infrastructure efficiency.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Our Telecommunication Consulting Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Planning",
              desc: "Our experts help you plan strategic advancements in telecom operations to align with your organizational goals."
            },
            {
              title: "Marketing",
              desc: "Telecommunication consultants assist in designing and executing robust marketing campaigns for your telecom requirements."
            },
            {
              title: "Training",
              desc: "We provide world-class telecom training to your employees to improve productivity and performance according to international standards."
            }
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Other Services You May Benefit From</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-gray-700 font-medium">
          {["Cold Calling Services","Real Estate Cold Calling","B2B Cold Calling","Teleprospecting Services"].map((service, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Hire Our Telecom Consulting Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Flexible Pricing Models: Optimized to fit your budget requirements.",
            "Highly Experienced Team: Industry-trained telecom consultants with 25+ years of experience.",
            "High Quality: Best-in-class consultation to revamp company operations.",
            "Multilingual Language Support: Consultations offered in multiple languages.",
            "Great Infrastructure: Access to tools and resources to maximize client benefits."
          ].map((adv, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <p>{adv}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 bg-blue-50">
        <h2 className="text-2xl font-bold text-center mb-6">Client Success Stories</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Call Quality Monitoring for a Leading Tech Firm</h3>
            <p>Moderate and robust call quality monitoring services improved operational efficiency and client satisfaction.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Live Video, Audio & Text Monitoring for a Major Internet Company in Singapore</h3>
            <p>Integrated backend monitoring reduced costs and improved productivity for the client.</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-6 bg-gray-50">
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "Outsource2india will have a positive effect on any company's turnover. I do not doubt that."
          <footer className="mt-4 font-semibold">– Marketing Director, Insulation Company, UK</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-teal-500 to-green-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Outsource Telecommunication Consulting Services</h2>
        <p className="max-w-2xl mx-auto mb-6">
          We execute telecom consulting solutions using validated Lean Six Sigma processes, converting strategies into measurable operational gains aligned with VoC and CTQ metrics.
        </p>
        <button className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default TelecomConsultingServices;
