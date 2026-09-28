import React from "react";
import CSmainmenu from "../CSmainmenu";

const EditorialDesignServices: React.FC = () => {
  const serviceTypes = [
    "Book and Magazine Editorial Designs",
    "Marketing Editorial Design",
    "Brochure Editorial Designs",
    "Catalogue Editorial Designs",
    "Corporate Editorial Design",
    "Newsletter Editorial Designs",
  ];

  const benefits = [
    "Affordable Designs: Hourly or FTE options with up to 60% cost savings",
    "Talented Team: Experienced editorial designers catering to all requirements",
    "ISO Compliant Processes: Adherence to ISO and industry standards",
    "Quality Checks: Multi-level internal quality assurance",
    "Dedicated Project Managers: Regular updates at every project stage",
    "Customized Designs: 100% tailored to client requirements",
    "Quick Turnaround: Fast delivery dependent on project scope",
    "Support: 24/6 support for any design requirements",
    "Security: NDA, GDPR compliance and other protocols",
    "Design Revisions: Up to 2 revisions at no extra cost",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-blue-700 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Editorial Design Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Eye-catching editorial designs for magazines, books, newsletters, flyers, and corporate materials that enhance readability, impact sales, and strengthen brand identity.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Nimble Auity professional editorial designers create layouts that increase readability and drive results. We help individuals, publishers, and corporates improve existing designs, launch new publications, and craft innovative editorial layouts.
        </p>
        <p>
          With over 20 years of experience, our trained designers provide fully customizable editorial designs that blend text, images, and other elements to make your content visually appealing.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Our Editorial Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceTypes.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Benefits of Choosing Nimble Editorial Design Services</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Partner with Nimble Auity to get original, attractive, and cost-effective editorial designs. Contact us now for a free quote within one business day.
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default EditorialDesignServices;
