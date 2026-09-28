import React from "react";
import DSmainmenu from "../DSmainmenu";

const FoodNutritionDataEntry: React.FC = () => {
  const services = [
    "Serving size",
    "Product Ingredients",
    "Brand Logos",
    "Number of servings",
    "Product Brand Claims",
    "Food Serving Size",
    "Production Manufacturer",
    "Weight Information",
    "Packaging Directions",
    "Allergen Information",
    "Nutrition Facts",
    "Product Size",
    "Country of Origin & Manufacture",
    "Amount of various nutrients",
    "Food Flavor",
    "Photo/Images",
    "Calories",
    "Allergen Warnings",
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const process = [
    { step: "Upload", description: "Client uploads nutrition label images/screenshots via FTP, Dropbox, or email." },
    { step: "Conversion", description: "Nimble Acuity converts files into PDFs or requested formats." },
    { step: "File Forwarding", description: "Files forwarded to Nimble Acuity's data entry operators." },
    { step: "Information Populating", description: "Data is populated into client's CMS, Excel, or Word." },
    { step: "Delivery", description: "Final deliverables sent to the client for verification." },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Food Nutrition Scale Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Accurate, secure, and cost-effective food nutrition data entry for labels, helping you save up to 60% in costs.
        </p>
        <p className="text-gray-600">
          Nimble Acuity has processed over 5000 labels globally, ensuring precise nutrition facts, allergen warnings, packaging directions, and more.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Food Nutrition Data Entry Services We Offer</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-700">
          {services.map((service, idx) => (
            <li key={idx} className="p-3 border-l-4 border-green-600 bg-green-50 rounded hover:bg-green-100 transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Stats Section */}
      <section className="mb-16 text-center">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-green-50 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-green-700">{stat.value}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Food Nutrition Data Entry Process</h2>
        <div className="space-y-6">
          {process.map((step, idx) => (
            <div key={idx} className="p-4 border-l-4 border-green-600 bg-green-50 rounded hover:bg-green-100 transition">
              <h3 className="text-xl font-bold mb-2">{step.step}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105">
          Contact Us for Food Nutrition Scale Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default FoodNutritionDataEntry;
