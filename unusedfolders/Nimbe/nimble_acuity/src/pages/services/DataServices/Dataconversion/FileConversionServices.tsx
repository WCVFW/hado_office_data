import React from "react";
import DSmainmenu from "../DSmainmenu";

const FileConversionServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          File Conversion Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Transform your digital files into easily editable and retrievable formats. Our skilled team and world-class infrastructure help convert images, videos, audio, and documents into formats tailored for your business needs.
        </p>
      </section>

      {/* Services Overview */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Struggling to convert large and complex enterprise files? Leverage our file conversion services to systematically convert all file types into desired formats efficiently, securely, and accurately.
        </p>
      </section>

      {/* File Format Conversion Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          File Format Conversion Services We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>PDF Conversion Services:</strong> Convert PDFs efficiently with advanced tools.</li>
          <li><strong>Document Conversion Services:</strong> Convert non-digital or non-editable documents securely.</li>
          <li><strong>XML Conversion Services:</strong> Make data presentable, reusable, and user-friendly.</li>
          <li><strong>Video Conversion Services:</strong> Correct and transfer videos to multiple digital formats.</li>
          <li><strong>Image Conversion Services:</strong> Convert images to JPEG, PNG, TIFF, Bitmap, and more.</li>
          <li><strong>Text Conversion Services:</strong> Transform text from older formats to modern formats.</li>
        </ul>
      </section>

      {/* Metrics */}
      <section className="mb-12 text-gray-700 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-blue-600">40%</p>
          <p>Cost Reduction</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">8-24 Hrs</p>
          <p>Faster Turnaround</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">500+</p>
          <p>Satisfied Clients</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">99%</p>
          <p>Accuracy</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose Our File Conversion Services?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Skilled Team:</strong> Access to trained professionals with 99.95% accuracy.</li>
          <li><strong>Data Security:</strong> VPN, encrypted files, NDA & GDPR compliance.</li>
          <li><strong>Quick Turnaround:</strong> Globally located delivery centers ensure timely completion.</li>
          <li><strong>Quality Assurance:</strong> Experts monitor every stage to maintain accuracy.</li>
          <li><strong>Flexible Input & Output:</strong> Convert multiple source formats to any required output.</li>
          <li><strong>Affordable Pricing:</strong> Flexible models including FTEs and hourly rates.</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Additional Services You Can Benefit From
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Data Entry Services</li>
          <li>Data Conversion Services</li>
          <li>Data Processing Services</li>
          <li>OCR Services</li>
          <li>Catalog Processing Services</li>
          <li>eBook Conversion Services</li>
        </ul>
      </section>

      {/* Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Customer Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>PDF to Excel Data Conversion:</strong> Florida-based professor received cost-effective, timely conversion services.
          </li>
          <li>
            <strong>XML Conversion:</strong> Norwegian academic literature publisher benefited from quick XML conversion services.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble File Conversion Services for Quick and Accurate Conversion
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Reduce operational overhead, organize large volumes of data, and leverage advanced tools and skilled resources to convert, store, and secure your data files efficiently.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default FileConversionServices;
