import React from "react";
import Imainmenu from "./Insurance BPO services/Imainmenu";

const MarketingSalesCreativeMedia: React.FC = () => {
  const mgaSolutions = [
    {
      title: "Issuing Policies",
      desc: "Accurate issuance and prompt servicing for multiple carriers with expert clerical and technical support for Binding Units.",
    },
    {
      title: "Servicing Policies",
      desc: "Ensure timely renewals and servicing, following issuance instructions from underwriters with high-quality standards.",
    },
    {
      title: "Effective BU Assistance",
      desc: "Dedicated support for branch/binding units to quickly resolve queries and provide expert guidance.",
    },
    {
      title: "Consistent Customer Service",
      desc: "Highly trained professionals provide consistent, high-quality customer service aligned with insurance standards.",
    },
    {
      title: "Timely Documentation Updates",
      desc: "Prompt updates of all policy documentation, identification of missing information, and consistent SLA adherence.",
    },
    {
      title: "Constant Policy Monitoring",
      desc: "Review and monitor all company-issued policies and provide clerical support to underwriting teams as needed.",
    },
  ];

  const otherServices = [
    "Underwriting",
    "Claims Management",
    "Policy Issuance",
    "Marketing",
    "Loss Control",
    "Binding",
    "Premium Collection",
    "Data Processing / Data Entry",
  ];

  const benefits = [
    {
      title: "Streamlined Processes",
      desc: "Smooth issuing and renewing of policies with fully optimized internal workflows.",
    },
    {
      title: "High-Quality Policy",
      desc: "ISO-standard processes ensure superior quality services for your MGA operations.",
    },
    {
      title: "Data Security",
      desc: "Mandatory data security policies and confidentiality agreements safeguard your insurance data.",
    },
    {
      title: "Easy Scalability",
      desc: "Multiple delivery centers and skilled resources to handle fluctuating volumes efficiently.",
    },
    {
      title: "Faster Turnaround Time",
      desc: "Quick, high-quality services through multiple global delivery centers.",
    },
    {
      title: "Round-the-Clock Service",
      desc: "Experienced specialists available 24/7 for consistent MGA support.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <Imainmenu />

      {/* Hero Section */}
      <section className="bg-[#F0FAFB] py-24 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#006A7C] mb-6">
          Nimble Insurance Services for MGAs
        </h1>
        {/* Hero Image */}
        <div className="mb-8 flex justify-center">
          <img
            src="/images/img10.jpg" // replace with your image
            alt="Insurance MGA Services"
            className="rounded-lg shadow-lg max-h-80 w-full max-w-4xl object-cover"
          />
        </div>

        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
          Adapt to change, capitalize on new opportunities, and accelerate growth with our insurance back-office services. Reduce costs, improve accuracy, and focus on generating better revenues.
        </p>
        <button className="mt-6 bg-[#006A7C] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#005662] transition">
          Get Started Today
        </button>
      </section>

      {/* MGA Solutions */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#006A7C]">
          MGA Insurance Solutions We Offer
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mgaSolutions.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#006A7C] mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-[#F0FAFB] py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#006A7C]">
          Other Services We Offer
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center font-medium transition"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#006A7C]">
          Why Choose Our Insurance Services for MGAs?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#006A7C] mb-3">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#006A7C] text-white py-16 px-6 md:px-20 text-center rounded-t-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Avail 1 WEEK FREE TRIAL on any Service!
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg">
          TRY before you BUY! Experience our insurance services for MGAs firsthand and witness quick, reliable, and high-quality solutions.
        </p>
        <button className="bg-white text-[#006A7C] font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#E0F7F9] transition">
          Start Your Free Trial
        </button>
      </section>
    </div>
  );
};

export default MarketingSalesCreativeMedia;
