import React from "react";
import { FileText, Clock, Users, CheckCircle, Database } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const SpreadsheetConversionPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Convert Scanned Spreadsheets/PDF into Excel Format
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          Nimble Auity delivers fast, accurate, and professional OCR-based
          spreadsheet to Excel conversion services, ensuring your data is
          error-free and ready to use.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            Spreadsheet to Excel Conversion
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Optical Character Recognition comes in as an intelligent solution
            for text-intensive images that require conversion into editable
            formats. OCR overcomes spreadsheet and image-to-Excel conversion
            limitations while ensuring accuracy.
          </p>
        </div>

        {/* Two-Column Layouts */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Web & Desktop OCR Tools
            </h3>
            <p className="text-gray-600">
              Quick solutions include free or paid online converters and
              downloadable tools. Some reliable options are Cogniview's PDF2XL,
              Blue Label Soft's PDF to Excel Converter, and Nitro’s PDF to Excel
              Online.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow-md text-center">
            <FileText className="mx-auto h-12 w-12 text-blue-600 mb-3" />
            <p className="text-gray-700">
              Choose from a variety of OCR software depending on accuracy, speed
              and data volume.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-100 rounded-xl p-6 shadow-md text-center">
            <Database className="mx-auto h-12 w-12 text-indigo-600 mb-3" />
            <p className="text-gray-700">
              Automate data conversion and reduce manual workload with Adobe
              Acrobat or VBA programming.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Acrobat & Programming
            </h3>
            <p className="text-gray-600">
              Use Adobe Acrobat for direct OCR recognition and Excel export, or
              write scripts in VBA/Visual Basic for custom OCR integration.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Manual Data Entry
            </h3>
            <p className="text-gray-600">
              Human-powered data entry ensures unbeatable accuracy by overcoming
              OCR challenges like poor image quality or unusual fonts.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow-md text-center">
            <Users className="mx-auto h-12 w-12 text-green-600 mb-3" />
            <p className="text-gray-700">
              Offshore teams deliver cost-effective manual conversion with
              multiple quality checks.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {[
            { value: "40%", label: "Cost Reduction" },
            { value: "8-24 Hrs", label: "Faster Turnaround" },
            { value: "500+", label: "Satisfied Clients" },
            { value: "350+", label: "Data Experts" },
            { value: "99%", label: "Accuracy" },
            { value: "21", label: "Years Experience" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h4 className="text-2xl font-bold text-indigo-700">
                {stat.value}
              </h4>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Our Related Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Document Scanning Services",
            "Data Extraction Services",
            "Data Mining Services",
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <CheckCircle className="h-8 w-8 text-blue-600 mb-3" />
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Give Our OCR Scanning Services a Try
        </h2>
        <p className="max-w-2xl mx-auto mb-6 opacity-90">
          Based in Bangalore, Nimble Auity offers a wide range of OCR and data
          conversion solutions. Get high-quality conversions and complete value
          for your investment.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default SpreadsheetConversionPage;
