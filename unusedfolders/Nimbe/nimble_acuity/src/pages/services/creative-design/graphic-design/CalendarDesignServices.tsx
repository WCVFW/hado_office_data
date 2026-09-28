import React from "react";
import CSmainmenu from "../CSmainmenu";

const CalendarDesignServices: React.FC = () => {
  const services = [
    "Business Calendar Design Services",
    "Printable Wall Calendar Design Services",
    "Desk Calendar Design Services",
    "Calendar Planner Design Services",
    "Promotional Portfolio Calendar Design Services",
    "Personal Calendar Design Services",
    "Family Calendar Design Services",
  ];

  const processSteps = [
    "Identifying the Client's Design Needs: Understand the calendar creation requirements.",
    "Receiving Data From the Client: Collect logo, photos, branding guidelines, and other necessary information.",
    "Creating the First Draft: Prepare digital sample designs for review.",
    "Design Execution: Develop final design with all illustrations and features.",
    "Internal QC: Check for quality, color, composition, and printing results.",
    "Integrating Changes and File Format: Incorporate feedback and deliver editable/printable files.",
  ];

  const benefits = [
    "Flexible Pricing: Choose packages according to budget and needs.",
    "Great Concepts, Extraordinary Designs",
    "Committed Team: Talented specialists from across the globe.",
    "Fastest Turnarounds: Quickest TAT in the industry.",
    "Single Point of Contact: Dedicated project manager for communication.",
    "Data Safety: Robust systems to protect client data.",
  ];

  const caseStudies = [
    "Nimble Provided Prepress and Vector Artwork to a Dublin-based Client: Professional, high-quality artwork delivered in quick turnaround time.",
    "Nimble Provided Vector Artwork to US-based Label Designer: Flawless vector artwork services delivered quickly.",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-blue-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Calendar Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get top-quality custom calendar design services at superfast turnaround times for business or personal needs at rates starting at $10/hour. Nimble Auity ensures creativity and precision in every calendar.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Extend your brand identity with calendars that are aesthetically appealing and functional. Nimble Auity provides expert calendar design services for print and digital formats, ensuring your brand stays memorable all year.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Our Calendar Design Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Design Process */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Our Calendar Design Process
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-800">
            {processSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Why Choose Nimble for Calendar Design
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Client Case Studies */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Client Case Studies
          </h2>
          <ul className="space-y-4 text-gray-800">
            {caseStudies.map((caseStudy, index) => (
              <li key={index}>{caseStudy}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Eye-Catching Calendar Designs Today
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Nimble Auity’s team of expert designers creates digital, desk, wall, and personalized calendars for all business or personal needs. Contact us now for custom, high-quality calendar design services.
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CalendarDesignServices;
