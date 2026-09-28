import React from "react";
import NavigationMenu from "../MegaMenu";

const HealthcareBenchmarking: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Healthcare Benchmarking Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Identify the strengths and weaknesses of your healthcare system, locate performance gaps, and bridge them with new technologies and training methodologies.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Driving Healthcare Excellence</h2>
          <p className="mb-4">
            Our healthcare benchmarking services help you identify inefficiencies and streamline efforts towards improvement, boosting both operational efficiency and service quality.
          </p>
          <p>
            Gain a clear perspective of your performance indicators and foster a culture of continuous improvement with our hospital benchmarking solutions.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-bold mb-2">Why Choose Nimble Acuity?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Expert-led healthcare benchmarking services</li>
            <li>Comprehensive multi-dimensional analysis</li>
            <li>Actionable data-driven recommendations</li>
          </ul>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Healthcare IT Contact Database for a US-based Manpower Solutions Provider</h3>
            <p className="mt-2 text-gray-600">
              We curated a comprehensive set of healthcare IT companies from specific client-recommended locations to develop an all-inclusive database.
            </p>
            <a href="#" className="text-blue-600 mt-3 inline-block font-medium">Read more →</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Healthcare Market Research Study for a Market Intelligence Firm in Sweden</h3>
            <p className="mt-2 text-gray-600">
              Delivered quick, reliable, and consolidated healthcare research services to create a detailed report on medical care delivery.
            </p>
            <a href="#" className="text-blue-600 mt-3 inline-block font-medium">Read more →</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Clients Speak</h2>
        <blockquote className="bg-blue-50 p-6 rounded-xl shadow text-gray-700 italic">
          “Let me thank you for the professional way in which you are managing the project and meeting our deadlines. Unfortunately, our second supplier I cannot say the same for and have let us down considerably.”
          <footer className="mt-4 not-italic font-bold">– CEO, Technology Company, UK</footer>
        </blockquote>
      </section>

      {/* Healthcare Benchmarking Solutions */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Healthcare Benchmarking Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Internal Benchmarking",
              points: [
                "Inter-departmental performance metrics",
                "Efficiency of internal processes",
                "Compliance with health protocols",
                "Best practice identification internally",
              ],
            },
            {
              title: "Competitor Benchmarking",
              points: [
                "Patient satisfaction indices comparison",
                "Healthcare outcomes of competitors",
                "Industry cost structure benchmarks",
                "Technology adoption rates among competitors",
              ],
            },
            {
              title: "Functional Benchmarking",
              points: [
                "Cross-industry best practice examination",
                "Efficiency in billing processes",
                "Staff productivity standards",
                "Functional compliance rates",
              ],
            },
            {
              title: "Generic Benchmarking",
              points: [
                "Innovation across industry boundaries",
                "Universal performance metrics",
                "Non-healthcare excellence model adaptation",
                "Broad management strategy exploration",
              ],
            },
            {
              title: "Strategic Benchmarking",
              points: [
                "Alignment of services with strategic goals",
                "Leadership and governance structure benchmarks",
                "Long-term sustainability initiatives",
                "Strategic resource allocation comparisons",
              ],
            },
            {
              title: "Global Benchmarking",
              points: [
                "International healthcare system evaluations",
                "Global health outcome metric comparisons",
                "Worldwide health innovation practices",
                "Global patient care standards analysis",
              ],
            },
          ].map((solution) => (
            <div key={solution.title} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-3">{solution.title}</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                {solution.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Approach to Healthcare Benchmarking</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Initial Consultation and Requirements Gathering",
            "Data Collection from Diverse Healthcare Sources",
            "Development of Clear and Relevant Benchmarks",
            "Comparative Analysis and Gap Identification",
            "Comprehensive Reporting and Actionable Insights",
            "Continuous Monitoring for Process Optimization",
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="text-blue-600 font-bold text-xl mb-2">{`0${i + 1}`}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Should You Choose Our Healthcare Benchmarking Company?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Benchmarking Quality", desc: "Accurate and reliable benchmarking data using latest healthcare trends and practices." },
            { title: "Software Proficiency", desc: "Expertise in leading benchmarking software for efficient data analysis." },
            { title: "Expert Research Analysts", desc: "Skilled analysts with deep healthcare domain knowledge." },
            { title: "24/7 Research Support", desc: "Round-the-clock assistance to answer queries and support decisions." },
            { title: "Competitive Pricing", desc: "Flexible, affordable pricing models without compromising quality." },
          ].map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Improve Your Healthcare Outcomes?</h2>
        <p className="mb-6">
          Partner with Nimble Acuity for professional, reliable, and cost-effective healthcare benchmarking services.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default HealthcareBenchmarking;
