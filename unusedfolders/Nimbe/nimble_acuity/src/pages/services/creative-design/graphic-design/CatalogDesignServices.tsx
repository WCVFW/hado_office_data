import React from "react";
import CSmainmenu from "../CSmainmenu";

const CatalogDesignServices: React.FC = () => {
  const services = [
    "Cover Designing Services",
    "Brand Integration Services",
    "Picture Designing Services",
    "Content Creation Services",
    "Print Process Advisory Services",
    "Digital Catalog Creation Services",
  ];

  const benefits = [
    "Affordable Pricing Options: FTE, hourly rates, bulk discounts",
    "Experienced Team: Skilled in Adobe Illustrator, Photoshop, InDesign",
    "High-quality Services: ISO-certified processes",
    "World-class Infrastructure: Modern workstations & office spaces",
    "Data Security: FTP, VPN, GDPR compliance",
    "Quality Checks: Multi-stage checks to ensure top quality",
    "Ease of Work: 24/6 support, customizations, up to 2 revisions",
    "Short Turnaround: 24–48 hours depending on project scope",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-blue-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Catalog Design Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Eye-catching and highly customized catalogs starting at just $10/hour. Expand your reach and effectively communicate your products/services.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Looking to create attention-grabbing catalogs? Nimble Auity helps design and produce catalogs in both print and digital formats that drive sales and keep your customers engaged.
        </p>
        <p>
          Our professional designers combine creativity, brand integration, and sales-focused layouts to ensure your catalogs leave a lasting impression.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Our Catalog Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                {/* You can add brief descriptions if needed */}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Why Choose Nimble Catalog Design Services</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Client Case Studies */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Client Case Studies</h2>
        <ul className="space-y-4 text-gray-800">
          <li>
            <strong>Audio Speakers Catalog for Hong Kong Client:</strong> Designed and delivered within 24 hours.
          </li>
          <li>
            <strong>Online Sales Catalogs for Australian Sofa Manufacturer:</strong> Provided cropping and color grading with fast turnaround.
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Custom Catalog Today</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Partner with Nimble Auity to design professional catalogs that boost engagement and sales. Contact us now for a free quote.
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CatalogDesignServices;
