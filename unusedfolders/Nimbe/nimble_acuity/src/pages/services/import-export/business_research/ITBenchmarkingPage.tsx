import React from "react";
import NavigationMenu from "../MegaMenu";

const ITBenchmarkingPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble IT Benchmarking Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Gain insights into how businesses tackle IT initiatives, optimize
          investments, and improve performance with our IT benchmarking services
          starting at <span className="font-semibold">$14/hour</span>.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Benchmark Your IT Performance for Better Outcomes
          </h2>
          <p className="text-gray-700 leading-relaxed">
            IT benchmarking helps businesses improve efficiency and quality by
            comparing metrics with industry standards. It’s not a one-time
            activity but an ongoing process for continuous improvement. With
            26+ years of expertise, Nimble Acuity leverages best practices and
            global insights to ensure your IT functions perform at world-class
            levels.
          </p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-6 shadow">
          <p className="text-lg italic">
            “Benchmarking is a game-changer for enterprises that prioritize
            efficiency and quality in IT.”
          </p>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          IT Benchmarking Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Market Alignment Framework
            </h3>
            <p className="text-gray-600">
              Evidence-based model to structure, compare IT services, and
              understand service levels and costs. Access up-to-date IT pricing
              and quality insights to make informed decisions.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Market Conformity Check
            </h3>
            <p className="text-gray-600">
              Provides actionable, bottom-up insights for improvements across IT
              processes. More detailed and cost-effective than traditional peer
              group comparisons.
            </p>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Business Research Services",
            "Market Research Services",
            "Financial Research Report Services",
            "Research Reports Services",
          ].map((service) => (
            <div
              key={service}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Affordable Solutions",
              desc: "Custom IT benchmarking tailored to your needs at cost-effective rates.",
            },
            {
              title: "Data Security",
              desc: "Strict policies and measures ensure your sensitive data remains safe.",
            },
            {
              title: "Well-established Infrastructure",
              desc: "Best-in-class facilities with advanced tools, uninterrupted networks, and backup.",
            },
            {
              title: "Quick Turnaround",
              desc: "Efficient processes deliver outcomes faster than industry timelines.",
            },
            {
              title: "ISO-Certified",
              desc: "ISO 9001-certified processes for consistent quality services.",
            },
            {
              title: "Single Point of Contact",
              desc: "Dedicated project manager for smooth communication and updates.",
            },
            {
              title: "24/7 Support",
              desc: "Round-the-clock assistance across time zones via calls, emails, and chat.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Research Support for Global Marketing Firm
            </h3>
            <p className="text-gray-600">
              Nimble Acuity provided robust research services from online and offline
              sources, supporting a leading strategy consulting firm.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              KOL Identification for UK Healthcare Provider
            </h3>
            <p className="text-gray-600">
              Nimble Acuity leveraged proprietary methodology to collate and analyze KOL
              information for a top UK-based healthcare organization.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic text-gray-700">
          “The services that Nimble Acuity provided helped us achieve substantial cost and
          time savings on several difficult projects.”
        </blockquote>
        <p className="mt-4 font-semibold text-gray-800">
          Senior Vice President, Transportation Industry Solutions Group
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
          More Testimonials »
        </button>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble IT Benchmarking Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          Optimize your IT operations, avoid overspending, and improve outcomes
          with our specialized benchmarking expertise. Partner with Nimble Acuity for
          reliable, efficient, and affordable IT benchmarking solutions.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default ITBenchmarkingPage;
