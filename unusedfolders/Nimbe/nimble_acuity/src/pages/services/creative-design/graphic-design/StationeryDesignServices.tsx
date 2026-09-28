import React from "react";
import CSmainmenu from "../CSmainmenu";

const StationeryDesignServices: React.FC = () => {
  const services = [
    "Business Cards",
    "Letterheads",
    "ID Cards",
    "Corporate Envelopes",
    "Invoices",
    "Notepads",
    "Folders",
    "Brochures",
    "CD Covers",
    "Posters & Banners",
    "Cups & Mugs",
    "Flyers & Pamphlets",
    "Cards and Calendars",
    "Compliment Slips",
    "Thank You Cards",
    "Bags & Boxes",
    "Address & Mailing Labels",
  ];

  const formats = [
    "Vector Format: Perfect for professional printing and resizable",
    "JPEG Format: Standard image format for web and print",
    "PDF Format: High-resolution files good for printing",
    "PNG, BMP, GIF Format: Transparent backgrounds, usable on any surface",
  ];

  const benefits = [
    "Affordable Prices",
    "Uniqueness: Distinct creatives that stand out",
    "Expert Team: 5-7 years experienced graphic designers",
    "Knowledge of Latest Tools: CorelDraw, InDesign, Photoshop, Illustrator",
    "Unlimited Revisions",
    "Money-Back Guarantee",
    "24/7 Customer Support",
    "On-Time Delivery",
  ];

  const caseStudies = [
    "Nimble Provided Prepress and Vector Artwork to an Ireland-based Client: Delivered high-quality services within quick turnaround.",
    "Nimble Performed Live Video Editing for a Swedish Production House: Provided reliable and high-quality live video editing services on time.",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-blue-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Stationery Design Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Give your stationery a professional look and create a distinct brand identity with high-quality designs from Nimble Auity.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Stationery is crucial for written and printed communication. Nimble provides expert stationery design services to help your brand appear professional, reputable, and reliable.
        </p>
        <p>
          Every business interaction, invoice, or correspondence becomes a branding opportunity with our custom designs.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Our Stationery Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Formats Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Formats You Will Receive</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            {formats.map((format, index) => (
              <li key={index}>{format}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Why Choose Nimble Stationery Design Services</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Client Case Studies */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Client Case Studies</h2>
        <ul className="space-y-4 text-gray-800">
          {caseStudies.map((caseStudy, index) => (
            <li key={index}>{caseStudy}</li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Custom Stationery Today</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Work with Nimble Auity to transform your business stationery into professional, branded designs. Contact us today for a free consultation and quote.
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default StationeryDesignServices;
