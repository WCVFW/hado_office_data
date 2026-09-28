import React from "react";
import NavigationMenu from "../MegaMenu";

const ConsumerMarketResearch: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      {/* Hero Section */}
       <NavigationMenu/>
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Nimble Consumer Market Research Services
        </h1>
        <p className="text-lg mb-6">
          Spot emerging trends, identify opportunities, and minimize risk with
          our services, starting at <span className="font-semibold">$14/hour</span>!
        </p>
        <p className="text-base">
          Struggling to develop and implement sales and marketing strategies
          that work? Do you want to understand what your consumers seek and make
          the necessary improvements to boost sales? Consumer market research is
          the solution for all your concerns.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Consumer Market Research Solutions We Offer
        </h2>
        <p className="mb-6">
          Our services help you analyze the behavior, purchase patterns, pain
          points, and other aspects of your consumers' journey. Some of our
          services include:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Customer Behavior Market Research:</strong> Analyze consumer
            behaviors, understand what they want, identify pain points, and
            devise strategies to drive sales.
          </li>
          <li>
            <strong>Consumer Electronics Market Research:</strong> Understand
            consumers in the booming electronics industry to create tailored
            products.
          </li>
          <li>
            <strong>Consumer Market Research Survey:</strong> Gain valuable
            target market insights with detailed surveys.
          </li>
          <li>
            <strong>Consumer Market Research Reports:</strong> Identify
            profitable trends and strategies to improve your business standards.
          </li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Nimble Acuity?
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>✅ Cost-effective with flexible pricing models</li>
          <li>✅ Complete data security and compliance</li>
          <li>✅ Access to experienced professionals</li>
          <li>✅ Modern infrastructure and global delivery centers</li>
          <li>✅ High-quality results with faster turnaround time</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              Nimble Acuity Provided Top-quality Primary Research Services to Leading
              Trade Advisors in China
            </h3>
            <p>
              A client from Shanghai wanted primary research services. Our
              market researchers delivered results quickly and efficiently.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Nimble Acuity Developed a Forecasting Model for a Healthcare Firm
            </h3>
            <p>
              A US-based healthcare firm partnered with us to create a reliable
              forecasting model for their business.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <blockquote className="italic">
          “The services that Nimble Acuity provided helped us achieve
          substantial cost and time savings on several difficult projects.”
        </blockquote>
        <p className="mt-2 font-medium">
          — Senior Vice President, Automotive & Transportation Industry
          Solutions Group
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble Consumer Market Research Services
        </h2>
        <p className="mb-6">
          With 26+ years of expertise, we help you plan research, analyze data,
          and identify valuable insights. Get measurable intelligence at every
          step of your market research journey.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default ConsumerMarketResearch;
