import React from "react";
import DSmainmenu from "../DSmainmenu";

const RestaurantMenuDataEntry: React.FC = () => {
  const services = [
    "Data Entry Services for Restaurants",
    "Restaurant Menu Design",
    "Restaurant Menu Conversion",
    "Restaurant Menu Formatting",
    "Restaurant Order Management",
  ];

  const processSteps = [
    "Send File: Client sends scanned documents, PDFs, eFax, etc.",
    "Perform OCR: Transcribe the data into electronic form via OCR or manual entry",
    "Separate Menu: Identify menu items, specials, combo meals, etc.",
    "Output Files: Deliver in client-chosen format - MS Excel, MySQL, CSV, XML, etc.",
  ];

  const benefits = [
    "Experienced data entry professionals with 5+ years' experience",
    "Reduced operational costs via offshore outsourcing",
    "One-stop-shop for restaurant management needs",
    "Reduced printing costs with constant online menu updates",
    "Better profits via attractive menu images and upselling",
    "Comprehensive reporting: daily, weekly, and monthly updates",
    "Quick updates for new deals, offers, and seasonal menus",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Restaurant Menu Digitization Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Make your restaurant’s menu available online with up-to-date pricing, images, and item descriptions. Enhance customer satisfaction and grow your F&B sales with Nimble Acuity’s restaurant menu data entry services.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Menu Data Entry Services for Restaurants
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
          {services.map((service, idx) => (
            <li key={idx} className="hover:text-blue-600 transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Data Entry Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Restaurant Menu Data Entry Process
        </h2>
        <ol className="list-decimal pl-5 text-gray-700 space-y-3 md:text-left text-center">
          {processSteps.map((step, idx) => (
            <li key={idx} className="bg-gray-50 p-3 rounded border-l-4 border-blue-600">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-5 gap-6 text-center mb-16">
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">40%</h3>
          <p className="text-gray-600">Cost Reduction</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">8-24 Hrs</h3>
          <p className="text-gray-600">Faster Turnaround</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-gray-600">Satisfied Clients</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">350+</h3>
          <p className="text-gray-600">Skilled Data Experts</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">99%</h3>
          <p className="text-gray-600">Accuracy</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Benefits of Outsourcing Restaurant Menu Data Entry to Nimble Acuity
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-green-50 p-3 rounded border-l-4 border-green-600 hover:bg-green-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105">
          Contact Nimble Acuity for Restaurant Menu Digitization Services
        </button>
      </section>
    </div>
  );
};

export default RestaurantMenuDataEntry;
