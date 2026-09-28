import React from "react";
import NavigationMenu from "../MegaMenu";

const BusinessBenchmarking: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Nimble Business Benchmarking Services
        </h1>
        <p className="text-lg mb-6">
          Evaluate your business performance relative to the business strategy
          and value by choosing our services at prices starting at just{" "}
          <span className="font-semibold">$14/hour</span>.
        </p>
        <p>
          Looking to evaluate your business’s performance against competitors?
          Our skilled team leverages advanced benchmarking tools to deliver
          accurate, tailored insights that help you stay competitive.
        </p>
      </section>

      {/* Services Offered */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Business Benchmarking Services We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Qualitative Business Benchmarking:</strong> Benchmark
            qualitative measures like technology adoption, client readiness, and
            goal alignment.
          </li>
          <li>
            <strong>Quantitative Business Benchmarking:</strong> Assess
            quantitative metrics like FTW effort, costs, resource usage,
            application complexity, and cycle times for process optimization.
          </li>
        </ul>
      </section>

      {/* Other Services */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Other Services You Can Benefit From
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Market Research Services</li>
          <li>Financial Research Report Services</li>
          <li>Scientific Research Services</li>
          <li>Pharmaceutical Research Services</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Why Choose Nimble Acuity for Business Benchmarking Services?
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>✅ Affordable and cost-effective pricing packages</li>
          <li>✅ ISMS-certified for guaranteed data security</li>
          <li>✅ Skilled and experienced benchmarking experts</li>
          <li>✅ ISO-certified, ensuring high-quality, error-free services</li>
          <li>✅ Access to latest benchmarking tools and infrastructure</li>
          <li>✅ Dedicated project manager as SPOC</li>
          <li>✅ Scalable services to match evolving requirements</li>
          <li>✅ Quick turnaround with global delivery centers</li>
          <li>✅ 24/7 customer, sales, and project support</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Client Success Stories</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              Secondary Research for a Swiss Hospitality Company
            </h3>
            <p>
              A Switzerland-based hospitality provider needed secondary research
              services. Our team delivered top-quality, timely insights.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Business Plans for an Australian Taxation Company
            </h3>
            <p>
              A leading Australian taxation and consulting firm sought business
              plan services. We provided cost-effective and reliable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="italic">
          “The services that Nimble Acuity provided helped us achieve
          substantial cost and time savings on several difficult projects. Their
          prompt attention to our requests and attention to detail is
          excellent.”
        </blockquote>
        <p className="mt-2 font-medium">
          — Senior VP, Automotive & Transportation Industry Solutions Group
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble Business Benchmarking Services to Nimble Acuity
        </h2>
        <p className="mb-6">
          Nimble Acuity is a trusted leader in business benchmarking services,
          backed by 20+ years of experience. Our experts ensure top-quality
          insights, tailored solutions, and cost-effective delivery.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default BusinessBenchmarking;
