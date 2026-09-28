import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceOperationsServices: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Nimble Insurance Operations Services
          </h1>
          <p className="text-lg text-gray-700">
            Improve your business performance with our insurance service operations services. We streamline your legacy processes and offer cost-effective strategies for operating model enhancements.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 text-gray-700 space-y-4">
          <p>
            For companies that want to make it big in the insurance sector, efficiency in operations is key. From insurance agents to brokers, everyone should be managed properly to ensure growth and proficiency. Nimble Acuity, with 26+ years of experience, caters to all your insurance operations needs with highly skilled professionals.
          </p>
          <p>
            Whether it’s policy management, quotes, or renewals, our professionals streamline your operations while ensuring accuracy and efficiency.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Insurance Service Operations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Streamlined Technologies and Legacy Processes",
                description:
                  "We elevate employee morale, customer service, and cost efficiencies by upgrading legacy processes through advanced policy administration."
              },
              {
                title: "Enhancement of Operating Model",
                description:
                  "We assess processes and organize management systems to enhance operational performance against competitors."
              },
              {
                title: "Performance Benchmarking",
                description:
                  "Evaluate your operations against industry leaders to identify areas of improvement."
              },
              {
                title: "Strategic Underwriting",
                description:
                  "Execute risk selection and sound underwriting decisions to balance price and risk while strengthening customer relationships."
              },
              {
                title: "Enterprise Cost Management",
                description:
                  "Develop cost-effective and sustainable goals for resource management to optimize operations."
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white shadow p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Other Services You Can Benefit From
          </h2>
          <div className="grid md:grid-cols-4 gap-4 text-center text-gray-700">
            {[
              "Insurance Appointment Setting Services",
              "Insurance Reporting Services",
              "Insurance Data Entry",
              "Insurance Analytics Services",
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Nimble Insurance Operations Services to Nimble Acuity?
          </h2>
          {[
            {
              title: "High-Quality Work",
              description:
                "Expect superior-quality work with accuracy and precision in optimizing insurance operations."
            },
            {
              title: "Affordable Rates",
              description:
                "Our pricing is flexible and suitable for businesses of all sizes."
            },
            {
              title: "Quick Turnaround Times",
              description:
                "Leverage our 10+ global delivery centers for super-fast delivery."
            },
            {
              title: "World-class Infrastructure",
              description:
                "We use advanced tools and technologies to ensure seamless operations for our clients."
            },
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Business Processing Services to An Insurance Firm",
                description:
                  "We offered reliable and cost-effective services to help the client handle their business processing needs."
              },
              {
                title: "Policy Checking Services to A Leading Insurance Company",
                description:
                  "Our services exceeded client expectations with endorsement and COI support."
              },
            ].map((story, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-600">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Insurance Operations Solutions to Nimble Acuity
        </h2>
        <p className="mb-6">
          Save costs and focus on your core business matters. Reach out to us for reliable insurance BPO services today!
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default InsuranceOperationsServices;
