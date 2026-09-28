import React from "react";
import CSmainmenu from "../CSmainmenu";

const OutsourcingCreativeDesign: React.FC = () => {
  const benefits = [
    {
      title: "Strategic Advantage of Outsourcing",
      points: [
        "Access specialized creative skills without long-term commitment.",
        "Bring fresh perspectives and innovation to your projects.",
        "Aligns design initiatives with broader business goals for growth and agility."
      ],
    },
    {
      title: "Cost-Efficiency and Resource Optimization",
      points: [
        "Reduce overheads associated with in-house creative teams.",
        "Convert fixed costs into variable expenses for better financial flexibility.",
        "Reallocate internal resources to core business functions like strategy and innovation."
      ],
    },
    {
      title: "Enhancing Innovation and Quality",
      points: [
        "Fresh perspectives challenge conventional thinking and introduce groundbreaking strategies.",
        "Access to latest design tools and technology ensures high-quality output.",
        "Boost brand equity and customer engagement through superior creative solutions."
      ],
    },
    {
      title: "Flexibility and Scalability",
      points: [
        "Scale creative resources up or down based on business needs.",
        "Meet tight deadlines with specialized external teams.",
        "Adapt quickly to product launches, campaigns, or rebranding initiatives."
      ],
    },
    {
      title: "Overcoming Common Concerns",
      points: [
        "Maintain brand consistency with clear guidelines and communication.",
        "Protect intellectual property through confidentiality agreements and reliable partners."
      ],
    },
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          How Can Outsourcing Creative Design Services Benefit Your Company?
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Creative design services are essential for brand identity and customer engagement. Nimble Auity helps businesses leverage outsourcing to gain innovation, efficiency, and a competitive edge.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          Large businesses seeking long-term success must balance innovation with operational efficiency. Outsourcing creative design services allows companies to access specialized talent, advanced technologies, and fresh perspectives without the commitment of an internal team.
        </p>
        <p>
          By strategically outsourcing design tasks, businesses can focus on growth, improve agility, and adapt more quickly to market shifts—boosting both performance and competitive positioning.
        </p>
      </section>

      {/* Benefits Sections */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Key Benefits of Outsourcing Creative Design
        </h2>
        <div className="space-y-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {benefit.points.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">The Conclusion</h2>
        <p className="mb-4">
          Outsourcing creative design services offers multiple advantages: increased innovation, operational flexibility, cost savings, and access to global talent. By partnering with Nimble Auity, your company can achieve better market positioning, accelerate strategic growth, and gain a sustainable competitive advantage.
        </p>
        <p>
          For a consultation on how outsourcing can enhance your company's creative strategy, <strong>contact Nimble Auity today</strong> and unlock the full potential of your brand.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Transform Your Creative Strategy with Nimble Auity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Partner with us to access top-tier creative talent, meet tight deadlines, and deliver exceptional results that strengthen your brand and drive business success.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get a Free Consultation
        </button>
      </section>
    </div>
  );
};

export default OutsourcingCreativeDesign;
