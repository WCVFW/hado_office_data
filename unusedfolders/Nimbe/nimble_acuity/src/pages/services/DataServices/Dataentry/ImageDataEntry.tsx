import React from "react";
import DSmainmenu from "../DSmainmenu";

const ImageDataEntry: React.FC = () => {
  const services = [
    "Scanned Image Data Entry",
    "Image to Spreadsheet",
    "Image to Database",
    "Catalogue Data Entry",
    "Scanned Legal Data Entry",
    "Book Entry",
    "Hand Written Card Entry",
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
    { step: "Client Discussion", description: "Business Development Manager obtains project brief from the client." },
    { step: "Input", description: "Client transfers samples (if any) in JPEG format via Dropbox or FTP." },
    { step: "Image Data Entry", description: "Data entry specialists perform image data entry using customized software." },
    { step: "Final Output", description: "Completed output is sent via FTP or Dropbox for client verification." },
  ];

  const advantages = [
    "Faster Turnarounds: Complete projects quickly without compromising quality.",
    "Security: Confidentiality ensured with NDAs, FTPs, and strict protocols.",
    "Reasonable Pricing: Flexible pricing including FTE, hourly rates, and custom packages.",
    "Quality Standards: Batch file review, image quality checks, and QC reports.",
    "Customer Support: 24/6 support for client queries.",
    "Skilled Workforce: Experienced personnel handling all image data entry tasks.",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Image Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Accurate, cost-effective, and secure image data entry services for global clients.
        </p>
        <p className="text-gray-600">
          Our specialists capture data from scanned images and key it into your desired format with 99% accuracy.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Image Data Entry Services We Offer</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-700">
          {services.map((service, idx) => (
            <li key={idx} className="p-3 border-l-4 border-blue-600 bg-blue-50 rounded hover:bg-blue-100 transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Stats Section */}
      <section className="mb-16 text-center">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-blue-700">{stat.value}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Image Data Entry Process</h2>
        <div className="space-y-6">
          {process.map((step, idx) => (
            <div key={idx} className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded hover:bg-blue-100 transition">
              <h3 className="text-xl font-bold mb-2">{step.step}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Advantages of Our Image Data Entry Services</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-700">
          {advantages.map((adv, idx) => (
            <li key={idx} className="p-3 border-l-4 border-blue-600 bg-blue-50 rounded hover:bg-blue-100 transition">
              {adv}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us for Image Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default ImageDataEntry;
