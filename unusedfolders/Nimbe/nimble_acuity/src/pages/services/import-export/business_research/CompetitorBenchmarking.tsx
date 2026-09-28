import React from "react";
import NavigationMenu from "../MegaMenu";

const CompetitorBenchmarking: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Nimble Competitor Benchmarking Services
        </h1>
        <p className="text-lg mb-6">
          Assess the overall performance and understand the competitive scenario
          in the industry by choosing our services at prices starting at just{" "}
          <span className="font-semibold">$14/hour</span>.
        </p>
        <p>
          Looking to assess key performance metrics and gain clarity on your
          competitors? Our team of skilled experts leverages the best tools to
          deliver accurate, insightful, and timely competitor benchmarking
          services.
        </p>
      </section>

      {/* Services Offered */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Competitor Benchmarking Services We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Competitor Media Monitoring:</strong> Track competitor media
            presence and stay updated on the latest industry moves.
          </li>
          <li>
            <strong>Competitor SWOT Analysis:</strong> Analyze competitor
            strengths, weaknesses, opportunities, and threats to fine-tune your
            strategies.
          </li>
          <li>
            <strong>Competitor Financial Data Benchmarking:</strong> Gain
            insights into competitors’ financials for better decision-making.
          </li>
          <li>
            <strong>Competitor Market Share Analysis:</strong> Understand market
            share distribution to plan expansion and growth strategies.
          </li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Why Choose Nimble Acuity for Competitor Benchmarking Services?
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>✅ Flexible and affordable pricing options</li>
          <li>✅ ISMS-certified for complete information security</li>
          <li>✅ Skilled and experienced research professionals</li>
          <li>✅ ISO-certified for high-quality, error-free services</li>
          <li>✅ Access to world-class infrastructure and tools</li>
          <li>✅ Highly scalable services tailored to your needs</li>
          <li>✅ Dedicated project manager as SPOC</li>
          <li>✅ 24/7 customer, sales & project support</li>
          <li>✅ Fast turnaround times with global delivery centers</li>
        </ul>
      </section>

      {/* Other Services */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Other Services You Can Benefit From
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Market Research Services</li>
          <li>Business Research Services</li>
          <li>Scientific Research Services</li>
          <li>Research Reports Services</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Client Success Stories</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              Primary Research Services to Top Chinese Trade Consultants
            </h3>
            <p>
              A Chinese client required primary research services. Our team
              delivered cost-effective and reliable support.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Secondary Research for a Swiss Hospitality Company
            </h3>
            <p>
              A leading Swiss hospitality provider sought secondary research.
              We delivered insights with a quick turnaround time.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="italic">
          “We have carefully reviewed your documents and are suitably impressed
          with the meticulous details with which you are conducting your audits
          to ensure exceptionally high quality for the extracted data
          delivered.”
        </blockquote>
        <p className="mt-2 font-medium">
          — VP, Leading STM Publisher, USA
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble Competitor Benchmarking Services to Nimble Acuity
        </h2>
        <p className="mb-6">
          Nimble Acuity is a leading provider of competitor benchmarking
          services in India. With expert teams, world-class tools, and
          client-centric delivery, we ensure superior quality insights tailored
          to your business.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default CompetitorBenchmarking;
