import React from "react";
import DSmainmenu from "../DSmainmenu";

const IPadIPhoneConversionPage: React.FC = () => {
  const inputFormats = [
    "Hard copy",
    "Scanned copy",
    "Microsoft Word",
    "PDF",
    "Adobe InDesign",
    "HTML",
    "Text files",
    "XML",
    "QuarkXPress",
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nimble iPad & iPhone e-Book Conversions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nimble Auity provides expert e-book conversion services from any format (hard copy, PDF, Word, InDesign, Quark etc.) to ePUB formats compatible with iPad, iPhone, and iPod Touch. Get error-free and professional e-book conversions.
          </p>
        </div>
      </section>

      {/* Input Formats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Supported Input Formats
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          {inputFormats.map((format) => (
            <li
              key={format}
              className="bg-gray-100 p-4 rounded-lg text-center hover:bg-blue-50 transition"
            >
              {format}
            </li>
          ))}
        </ul>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            iPad & iPhone e-Book Conversion Services by Nimble
          </h2>
          <p className="text-gray-600">
            Our skilled team can convert from any file format to ePUB formats compatible with screen sizes of iPad, iPhone, and iPod Touch. We ensure all formatting like images, tables, and graphs are converted without errors.
          </p>
          <p className="text-gray-600">
            We handle even complex conversions and large volumes efficiently. Tight deadlines are met with our scalable infrastructure and dedicated QA team ensures Apple validation compliance.
          </p>
          <p className="text-gray-600">
            Our team also creates professional book covers for iTunes, iBookstore, and cover flow displays.
          </p>
        </div>
      </section>

      {/* Interactive QA / Validation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Quality & Device Testing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">QA Testing</h3>
            <p className="text-gray-600">All e-books are reviewed by our QA team for flawless formatting and display.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Device Testing</h3>
            <p className="text-gray-600">We test e-books on iPad, iPhone, and iPod Touch for a perfect reading experience.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Cover Design</h3>
            <p className="text-gray-600">Book covers are designed for iTunes, iBookstore, and cover flow displays for maximum impact.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-12 text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Get Your iPad & iPhone e-Book Conversion Now
        </h2>
        <p className="mb-6">
          Nimble Auity delivers professional, cost-effective, and high-quality ePUB conversions for mobile devices.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default IPadIPhoneConversionPage;
