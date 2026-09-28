import React from "react";
import { FileText, Clock, Users, CheckCircle, Database } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const MicrofilmScanningPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Microfilm Scanning and Conversion
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          Nimble Auity provides professional microfilm scanning and digitization services, transforming paper-based archives into accessible, searchable digital records.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            Overview
          </h2>
          <p className="text-gray-600 leading-relaxed">
            For over 100 years, organizations have used microfilms to store critical records. The common formats include 16mm rolls for government and corporate records, and 35mm rolls for blueprints, drawings, and publishing materials. With the rise of digital media, converting microfilms to electronic formats has become essential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Why Microfilm Scanning?
            </h3>
            <p className="text-gray-600">
              Microfilms require specialized equipment for access, and only one person can use them at a time. Digitizing microfilms allows multiple users to access information easily, frees physical storage space, and enhances efficiency.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow-md text-center">
            <FileText className="mx-auto h-12 w-12 text-indigo-600 mb-3" />
            <p className="text-gray-700">
              Convert microfilms into searchable, shareable digital formats like PDF, CD-ROM, or online databases.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">
            Benefits of Microfilm Digitization
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Complete indexing by name, date, or document number</li>
            <li>Ability to store color images separately</li>
            <li>Remote access capability</li>
            <li>Linking and publishing via multiple formats (web, PDF, CD-ROM)</li>
            <li>Preserves original film while enabling digital access</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-100 rounded-xl p-6 shadow-md text-center">
            <Database className="mx-auto h-12 w-12 text-blue-600 mb-3" />
            <p className="text-gray-700">
              Microfilms scanned at high resolutions (2000dpi) preserve image quality, while digital versions ensure quick access and sharing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Combining Traditional & Digital Archiving
            </h3>
            <p className="text-gray-600">
              While microfilms remain durable and reliable (500-year lifespan), digital versions on DVDs or cloud storage allow flexibility, remote access, and enhanced security for archival content.
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
            { value: "350+", label: "Skilled Data Experts" },
            { value: "99%", label: "Accuracy" },
            { value: "21", label: "Years Experience" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h4 className="text-2xl font-bold text-indigo-700">{stat.value}</h4>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Digitize Your Microfilms Today
        </h2>
        <p className="max-w-2xl mx-auto mb-6 opacity-90">
          Nimble Auity offers professional microfilm scanning and OCR conversion services to ensure your archives are accessible, secure, and error-free.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default MicrofilmScanningPage;
