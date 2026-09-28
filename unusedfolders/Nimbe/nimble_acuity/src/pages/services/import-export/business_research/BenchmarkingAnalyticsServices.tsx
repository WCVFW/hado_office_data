import React from "react";
import NavigationMenu from "../MegaMenu";

const BenchmarkingAnalyticsServices: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Benchmarking Analytics Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Choose our advanced benchmarking analytics services and gain better
          visibility into where you can improve your business processes at prices
          starting at <span className="font-semibold">$14/hour</span>
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <p className="mb-6">
          Is your firm looking for ways in which you can improve the performance
          of your various departments and functions? Are you interested in
          uncovering ways in which you can identify opportunities for improvement?
          Are you struggling to identify areas where you can achieve cost savings?
          Would you like to know how the performance metrics of your company
          measure up against your peers? Are you interested in partnering with a
          reliable and experienced benchmarking analytics service provider? If so,
          you can benefit significantly from our benchmarking analytics solutions.
        </p>
        <p>
          Nimble Acuity (Nimble Acuity) is a leading benchmarking analytics services
          company and has been catering to the requirements of a diverse and
          growing clientele for 26+ years. With our benchmarking analytics
          studies, companies can identify tangible steps to improve processes and
          productivity. We will design an actionable blueprint, provide detailed
          recommendations for improvement, establish a robust implementation plan,
          and help you assign specific responsibilities to ensure that the action
          plan is implemented effectively.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Benchmarking Analytics Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Process Benchmarking Analytics</h3>
            <p>
              We focus on benchmarking the metrics for specific work processes and
              workflows. We gather requirements, collect benchmarking data from
              reliable providers, and compare this against your metrics to identify
              performance gaps.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">
              Performance Benchmarking Analytics
            </h3>
            <p>
              Our experts assess your competitive position by analyzing your
              performance data across finance, working controls, and internal
              controls, then provide recommendations to improve efficiency and cut
              costs.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">
              Strategy Benchmarking Analytics
            </h3>
            <p>
              We collate data to reveal strategies of successful companies and help
              you align yours accordingly. For example, if you plan to expand
              operations into new geographies, we provide insights into how similar
              firms succeeded.
            </p>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Other Services You Can Benefit From
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Business Research Services",
            "Market Research Services",
            "Financial Research Report Services",
            "Scientific Research Services",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Nimble */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Nimble Benchmarking Analytics Services to Nimble Acuity?
        </h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside">
          <li>Affordable pricing options with cost-effective solutions.</li>
          <li>
            ISO-certified company employing proprietary methodologies and
            workflows.
          </li>
          <li>World-class infrastructure and talented resources.</li>
          <li>Time-tested processes with industry best practices.</li>
          <li>26+ years of experience across industries and clients.</li>
          <li>Robust data security practices ensuring safety at all times.</li>
          <li>Short turnaround with timely and reliable services.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold mb-2">
              Nimble Acuity Provided Accurate Primary Research Services
            </h3>
            <p>
              A leading US-based technology firm required accurate and reliable
              primary research services. We delivered high-quality services within
              a quick turnaround time.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold mb-2">
              Nimble Acuity Provided Primary Research for Air Travel Provider
            </h3>
            <p>
              A luxury air travel services provider in the US contacted us for
              primary business research. We delivered reliable services at
              cost-effective rates.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="max-w-2xl mx-auto italic text-lg text-gray-700">
          “They have been able to learn our procedures quicker than I ever thought
          possible.”
        </blockquote>
        <p className="mt-4 font-medium">General Partner, Manufacturing Firm in the US</p>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Benchmarking Analytics Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          We provide professional and cost-effective benchmarking analytics
          services, helping global clients gain actionable intelligence that drives
          success. Get in touch with us today!
        </p>
        <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default BenchmarkingAnalyticsServices;
