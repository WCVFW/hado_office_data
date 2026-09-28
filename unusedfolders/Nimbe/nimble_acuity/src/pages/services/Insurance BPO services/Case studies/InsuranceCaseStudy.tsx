import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceCaseStudy: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Nimble Acuity Back-office Support Helped a Florida-based Insurance Giant Scale with Cost Efficiency
          </h1>
          <p className="text-lg text-gray-700">
            Learn how Nimble Acuity provided scalable, cost-efficient back-office solutions to a leading Florida-based insurance company, enhancing operational efficiency and customer satisfaction.
          </p>
        </div>
      </section>

      {/* The Client */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Client</h2>
        <p>
          The client, headquartered in Florida, is a trusted insurance giant with a century-long legacy. They provide personal and commercial coverage and employee benefit plans. Representing a diverse portfolio of nationwide and regional carriers, they negotiate rates and customize coverage to meet client needs.
        </p>
      </section>

      {/* The Requirement */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">The Requirement</h2>
          <p>
            The client needed a scalable insurance support solution that could quickly adjust capacity and improve cost efficiency. They required a reliable partner to address challenges left unresolved by previous service providers.
          </p>
        </div>
      </section>

      {/* The Challenges */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Challenges</h2>
        <p>The client faced multiple operational hurdles due to previous providers:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Lack of skilled and trained professionals</li>
          <li>Persistent price increases year after year</li>
          <li>Reluctance to scale operations for seasonal fluctuations</li>
        </ul>
        <p>
          The client sought a partner capable of quickly assembling, training, and deploying a dedicated team to improve scalability and cost efficiency.
        </p>
      </section>

      {/* The Solution */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">The Solution</h2>
          <p>
            Operating in Eastern Standard Time (EST) enhanced collaboration with the client. Our strategic solutions included:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Dedicated, highly skilled professionals trained for client-specific requirements</li>
            <li>Transparent and stable fixed FTE pricing locked in for 3 years</li>
            <li>Rapid hiring, training, and deployment of skilled resources</li>
            <li>Seamless transition and quality audits to ensure smooth operations</li>
          </ul>
          <p>
            This comprehensive solution allowed the client to focus on core business activities while enjoying efficient insurance back-office support.
          </p>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Outcome</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Swift turnaround and seamless transition with production-ready resources</li>
          <li>Increased availability of skilled personnel and ability to handle additional tasks</li>
          <li>Significant cost savings compared to previous providers</li>
          <li>Comprehensive package solution without extra support costs</li>
        </ul>
        <p>
          The client requested additional resources due to trust in our capabilities, demonstrating the value and confidence we delivered.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Maximize Cost Efficiency and Drive Success with Our Insurance Back-office Solutions
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Delegate insurance support tasks to focus on core business activities. Outsourcing enhances efficiency, reduces operational risks, and drives growth with round-the-clock support.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default InsuranceCaseStudy;
