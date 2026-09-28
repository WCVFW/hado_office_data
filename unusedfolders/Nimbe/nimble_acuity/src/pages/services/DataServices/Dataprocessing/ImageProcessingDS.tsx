import React from "react";
import { Image, Crop, Layers, RefreshCw, Database, CheckCircle } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const imageProcessingServices = [
  {
    title: "3D Image Processing",
    description: "Convert any image or object into 3-dimensional format with formatting, scaling, rendering, and enhancement.",
    icon: <Layers className="text-blue-600" size={32} />,
  },
  {
    title: "Image Conversion Services",
    description: "Convert images between formats like JPEG, GIF, PNG, TIFF, PSD to meet business requirements.",
    icon: <RefreshCw className="text-blue-600" size={32} />,
  },
  {
    title: "Scanning & Database Entry",
    description: "Scan and create structured databases for easy retrieval and storage of large image volumes.",
    icon: <Database className="text-blue-600" size={32} />,
  },
  {
    title: "Photo Scaling & Cropping",
    description: "Remove distortions and ensure high-quality output during scaling and cropping processes.",
    icon: <Crop className="text-blue-600" size={32} />,
  },
  {
    title: "Image Manipulation",
    description: "Perform airbrushing, hand coloring, retouching, color correction, double exposure, and more.",
    icon: <Image className="text-blue-600" size={32} />,
  },
];

const additionalServices = [
  "Data Conversion Services",
  "ePUB Solutions",
  "Property Management Back Office Services",
  "Optical Character Recognition",
];

const ImageProcessingDS: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Image Processing Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Access superior quality photo processing services to enhance your business value, starting at just $6/hr.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Core Image Processing Services */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Our Image Processing Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageProcessingServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="font-semibold text-xl mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Why Choose Nimble Auity
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Affordable Pricing Options",
              "Information Security",
              "State-of-the-art Infrastructure",
              "Talented Team",
              "High-quality Services",
              "24/7 Customer Support",
              "Easily Scalable Services",
              "Dedicated SPOC",
              "Quick Turnaround Time",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <CheckCircle className="text-blue-600 mb-2 mx-auto" size={32} />
                <p className="font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Additional Services
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {additionalServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex items-center"
            >
              <Database className="text-blue-600 mr-4" size={32} />
              <p className="font-semibold">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">
            Enhance Your Image Processing Capabilities
          </h3>
          <p className="text-white mb-6">
            Partner with Nimble Auity for reliable and high-quality image processing services. Focus on growth while we handle your media operations.
          </p>
          <a
            id="contact"
            href="#"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default ImageProcessingDS;
