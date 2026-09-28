import React from "react";
import NavigationMenu from "../MegaMenu";

const CustomerSegmentation: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      {/* Hero Section */}
       <NavigationMenu/>
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Nimble Customer Segmentation Services
        </h1>
        <p className="text-lg mb-6">
          Enable better engagement and reach out to the right audience by
          choosing our customer segmentation services at prices starting at just{" "}
          <span className="font-semibold">$6/hour</span>.
        </p>
        <p>
          Are you looking to target the right set of customers and enable better
          engagement? Our experienced customer segmentation experts leverage the
          latest tools and technologies to deliver top-notch services.
        </p>
      </section>

      {/* Services Offered */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Customer Segmentation Services We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Persona Creation:</strong> We craft tailored personas to
            match your business requirements and target audience precisely.
          </li>
          <li>
            <strong>Customer Mapping:</strong> Visualize customer distribution
            and understand segments better with our mapping services.
          </li>
          <li>
            <strong>Geographic Profiling:</strong> Identify opportunities in
            specific regions with accurate profiling and analysis.
          </li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Why Choose Nimble Acuity for Customer Segmentation Services?
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>✅ Affordable pricing with flexible models</li>
          <li>✅ ISO/IEC 27001:2022 certified data security</li>
          <li>✅ Dedicated manager as single point of contact</li>
          <li>✅ Short turnaround times with global delivery centers</li>
          <li>✅ Experienced team using latest tools & technologies</li>
          <li>✅ World-class infrastructure for seamless operations</li>
          <li>✅ High-quality services with strict quality checks</li>
          <li>✅ 24/7 support across customer, sales & project teams</li>
          <li>✅ Scalable services to match growing requirements</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Client Success Stories</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              Online Data Entry Services to a Kansas-based Client
            </h3>
            <p>
              A Kansas-based client required online data entry support. Our team
              delivered accurate and timely results.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Data Extraction Services for a Tampa-based Legal Client
            </h3>
            <p>
              A legal client in Tampa approached us for data extraction
              services. We ensured superior quality delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="italic">
          “We are most pleased and satisfied with our team at Nimble Acuity.
          They have proven that a small business such as ours can take advantage
          of the great benefits of outsourcing.”
        </blockquote>
        <p className="mt-2 font-medium">
          — Project Manager, US Insurance Company
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble Customer Segmentation Services to Nimble Acuity
        </h2>
        <p className="mb-6">
          With our expert team and cutting-edge tools, we deliver efficient and
          high-quality customer segmentation services tailored to your business
          needs. Scale smarter, engage better, and grow faster with Nimble Acuity.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default CustomerSegmentation;
