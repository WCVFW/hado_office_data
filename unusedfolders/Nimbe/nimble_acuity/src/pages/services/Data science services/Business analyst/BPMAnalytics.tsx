import React from "react";
import DSMainMenu from "../mainmenu";

const BPMAnalytics: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble BPM Analytics Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Leverage the power of data and our domain expertise and technological
          prowess to unlock value across your enterprise by choosing our BPM
          analytics services.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Are you looking to make your business processes and workflows more
          effective and efficient? Do you want to improve outcomes across
          business units? Are you struggling to incorporate BPM analytics into
          workflows? If so, our BPM analytics solutions can help you leverage
          data for improved productivity and profitability.
        </p>
        <p>
          Nimble Acuity (Nimble Acuity) is a leading BPM analytics service provider. We
          unlock business value by combining analytics with domain expertise. Our
          services span BPM advisory, model development, support, maintenance,
          and data science.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          BPM Analytics Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Finance and Accounting Analytics",
              desc: "Manage cash flow, improve margins, meet compliance, and enhance ROI with advanced BPM analytics.",
            },
            {
              title: "Sales, Marketing, and Digital Analytics",
              desc: "Get insights to target the right audience, track campaigns, and analyze sentiments across channels.",
            },
            {
              title: "Human Resource Analytics",
              desc: "Improve hiring, reduce turnover, forecast recruitment, and analyze HR datasets for better decisions.",
            },
            {
              title: "Analytics and Reporting Services",
              desc: "Set up robust reporting infrastructure, track information flow, and build models for faster decisions.",
            },
            {
              title: "Supply Chain Analytics",
              desc: "Analyze supply chain data, quantify risks, optimize inventory, and improve customer service.",
            },
            {
              title: "Sourcing and Procurement Analytics",
              desc: "Reduce sourcing spend, enhance contract utilization, and consolidate spend with data-driven insights.",
            },
            {
              title: "Embedded Analytics Services",
              desc: "Leverage embedded analytics to enhance operating metrics and decision-making across domains.",
            },
            {
              title: "Operations and Services Analytics",
              desc: "Improve customer experience, loyalty, and revenue through actionable operations insights.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Artificial Intelligence Services",
              desc: "Integrate AI-driven solutions to transform processes and decision-making.",
            },
            {
              title: "AI-Driven Digital Transformation",
              desc: "Enhance efficiency and outcomes with AI-powered digital transformation strategies.",
            },
            {
              title: "Computer Vision Services",
              desc: "Leverage CV for image recognition, automation, and smarter decision-making.",
            },
            {
              title: "Cognitive Process Automation",
              desc: "Automate complex business processes with AI and cognitive computing.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Nimble Acuity for BPM Analytics Services?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto list-disc pl-6 text-gray-700">
          {[
            "Affordable pricing models – hourly and FTE options.",
            "ISO-certified and high-quality services.",
            "World-class infrastructure and delivery facilities.",
            "Use of latest BPM analytics tools and technologies.",
            "Streamlined and structured delivery process.",
            "26+ years of experience in analytics services.",
            "Full compliance with GDPR and data security laws.",
            "Quick turnaround with timely project delivery.",
          ].map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title:
                "Case Study on Document Processing Automation Platform Development",
              desc: "We created a big data platform to automate document processing for a banking firm within a short time.",
            },
            {
              title:
                "Case Study on Open Source Analytics Workbench Creation",
              desc: "We designed and implemented an open-source analytics platform for a finance provider to manage structured and unstructured data.",
            },
          ].map((story, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p className="text-gray-600">{story.desc}</p>
              <button className="mt-4 text-blue-700 font-semibold hover:underline">
                Read the case study →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble BPM Analytics Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Our BPM analytics services are designed to drive efficiency, enhance
          decision-making, and unlock value across your enterprise. Partner with
          us for reliable, cost-effective, and future-ready analytics solutions.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default BPMAnalytics;
