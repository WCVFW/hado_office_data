import React from "react";
import CSmainmenu from "../CSmainmenu";

const Product3DPackageDesign: React.FC = () => {
  const servicesList = [
    "Boxes and containers",
    "Cases and shells",
    "Labels and sleeves",
    "Cartons (plain, folded, duplex board, etc.)",
    "Pouches",
    "Cans",
  ];

  const processSteps = [
    "Briefing: Receive client briefing on 3D product package design requirements.",
    "Target Audience: Collect target customer information and data from the client.",
    "Resource Allocation: Allocate resources, assign tasks, and appoint a Project Manager.",
    "Design Creation: Designers create 3D designs considering turnaround time and requirements.",
    "Review: Multi-stage internal review with zero-tolerance quality checks.",
    "Output: Deliver final output in requested format (PDF, JPEG, TIFF, PNG, FPX, OBJ).",
  ];

  const advantages = [
    "Flexible and faster time-to-market with minimal rework.",
    "Fully textured 3D package models in multiple formats (PDF, JPEG, TIFF, PNG, FPX, OBJ).",
    "Security with NDA and GDPR compliance.",
    "Fast turnaround (24-36 hours depending on project complexity).",
    "Team of 30+ skilled visualizers, designers, graphic artists, and illustrators.",
    "ISO quality design processes with 99% SLA adherence.",
    "Up to 3 design revisions.",
    "Free trial to test service quality.",
    "Work in your time zone with fluent English-speaking Account Managers.",
    "24/6 support.",
    "Hourly, project rates, and full-time equivalent (FTE) options.",
    "Custom pricing packages to suit budget requirements.",
  ];

  const caseStudies = [
    {
      title: "Creative Artwork Services for Investment Firm",
      desc: "Ireland-based finance and investment business with high-volume creative artwork for brochures, financial reports, and corporate presentations.",
    },
    {
      title: "Sticker Design Services for an Advertising Firm",
      desc: "Top Scandinavian medical research company received 3200 full-time Nimble work hours and delivery of fully-functional 3D animation and 3D modeled video.",
    },
  ];

  return (
    <div><CSmainmenu/>
    <section className="bg-gray-50 px-6 py-12 md:px-16 lg:px-32 text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Nimble 3D Product Package Design Services
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Convey the right message to your clients with high-quality 3D product package designs from our experienced team of designers at Nimble.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto mb-12 space-y-4 text-justify leading-relaxed">
        <p>
          Product package design plays a critical role in communicating the value of a product to potential consumers. At Nimble Auity, we create eye-catching package designs that are practical, innovative, and establish brand identity.
        </p>
        <p>
          Our skilled designers help innovators and manufacturers improve existing packaging, enhance shelf visibility, launch new products, and ensure packaging is functional, appealing, and within production timelines and budgets.
        </p>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        3D Product Package Design Services Offered
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-12 max-w-3xl mx-auto text-gray-700">
        {servicesList.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>

      {/* Process */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Nimble 3D Product Package Design Process Flow
      </h2>
      <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-12 max-w-3xl mx-auto">
        {processSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      {/* Advantages */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Advantages of Choosing Nimble for 3D Product Package Design
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-12 max-w-4xl mx-auto">
        {advantages.map((adv, index) => (
          <li key={index}>{adv}</li>
        ))}
      </ul>

      {/* Case Studies */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Client Case Studies
      </h2>
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-green-600 mb-2">{caseStudy.title}</h3>
            <p className="text-gray-700">{caseStudy.desc}</p>
          </div>
        ))}
      </div>

      {/* Closing CTA */}
      <div className="mt-12 text-center">
        <p className="max-w-3xl mx-auto text-gray-600 mb-6 text-justify">
          For 3D product packaging designs that attract your customers, contact us at Nimble Auity. Get a free quote within one business day and access high-quality, ISO-certified design services with international standards.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition">
          Contact Us
        </button>
      </div>
    </section>
    </div>
  );
};

export default Product3DPackageDesign;
