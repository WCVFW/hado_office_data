import React from "react";
import ESmainmenu from "../ESmainmenu";

const PointCloudServices: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Point Cloud Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-4">
          Capture millions of spatial coordinates with sub-millimeter precision using high-density LiDAR sensors, 
          drone-based photogrammetry, and multi-sensor fusion.
        </p>
        <p className="text-md max-w-3xl mx-auto">
          We are the leaders in providing high-quality point cloud services across the construction, surveying, 
          and industrial sectors.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-4">
          Our solutions include precise LiDAR scanning, advanced data processing, and 3D modeling customized for 
          your business needs. We provide seamless data integration extending to feature extraction and segmentation. 
          With advancements in AI, automation, and cloud computing, our services continue to grow.
        </p>
        <p>
          Connect with us to guarantee reliable and actionable insights that help empower your business.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Comprehensive Point Cloud Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Point Cloud Conversion Services",
              points: [
                "Transform raw data into actionable insights",
                "Enhance project visualization and planning",
                "Ensure data accuracy and integrity",
              ],
            },
            {
              title: "Point Cloud To BIM Services",
              points: [
                "Convert scans into intelligent BIM models",
                "Streamline workflows",
                "Improve collaboration and efficiency",
              ],
            },
            {
              title: "Point Cloud To 3D Modeling Services",
              points: [
                "Create detailed models from point clouds",
                "Support design and engineering processes",
                "Enhance project communication",
              ],
            },
            {
              title: "Point Cloud To CAD Services",
              points: [
                "Convert data into precise CAD drawings",
                "Facilitate accurate documentation",
                "Improve design efficiency",
              ],
            },
            {
              title: "Point Cloud Scan To BIM Services",
              points: [
                "Transform scans into comprehensive BIM frameworks",
                "Optimize project planning and execution",
                "Support facility lifecycle management",
              ],
            },
            {
              title: "Point Cloud To Mesh",
              points: [
                "Generate meshes from point cloud data",
                "Enhance surface detail representation",
                "Support visualization and analysis tasks",
              ],
            },
            {
              title: "Scan To 3D Modeling",
              points: [
                "Convert scans into detailed 3D models",
                "Support architecture & engineering projects",
                "Enhance design accuracy",
              ],
            },
            {
              title: "As-Built Drawings",
              points: [
                "Document existing conditions with precision",
                "Support renovation and refurbishment",
                "Ensure accurate compliance",
              ],
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                {service.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Software Our Professionals Leverage</h2>
        <div className="flex flex-wrap justify-center gap-6 font-medium">
          <span>Autodesk</span>
          <span>Autocad</span>
          <span>Autodesk Revit</span>
          <span>Cabinet Vision</span>
          <span>Inventor</span>
          <span>Microstation</span>
          <span>Revit</span>
          <span>Siemens NX</span>
          <span>Sketchup</span>
          <span>Solidedge</span>
          <span>Tekla</span>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          (Nimble Auity does not intend to endorse or have an official connection with these brands.)
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Auity For Your 3D Point Cloud Scanning Services?
        </h2>
        <ul className="space-y-6 text-lg leading-relaxed">
          <li><strong>High-Precision Revit Modeling:</strong> LOD 100–500 models for accurate as-builts and BIM integration.</li>
          <li><strong>Advanced Clash Detection:</strong> Optimized multidisciplinary coordination, reducing reworks and delays.</li>
          <li><strong>Advanced LiDAR Mapping:</strong> Achieve geospatial accuracy in topographical surveys and infrastructure projects.</li>
          <li><strong>AI-powered Workflows:</strong> Automatic feature extraction, classification, and georeferencing.</li>
          <li><strong>Scan-to-BIM Lifecycle Management:</strong> Intelligent data-rich BIM models for renovation and maintenance.</li>
          <li><strong>Improved Accuracy with Noise Reduction:</strong> Advanced filtering for cleaner datasets and precise analysis.</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Additional Services We Provide</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            "Revit Modeling Services",
            "Lidar Mapping Services",
            "Geospatial Services",
            "BIM Services",
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
        <p className="italic text-lg max-w-4xl mx-auto mb-4">
          "We have been using Nimble Auity's services for the past two years. We outsourced some critical engineering 
          work and saw excellent results, especially in transcribing civil and structural engineering calculations. 
          Nimble Auity's managers and engineers were highly committed and focused on meeting our expectations."
        </p>
        <p className="font-semibold">— SVP and Co-Founder, Engineering Resource Company</p>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold mb-2">
              InsurTech Giant Based in Texas Gets Interactive 3D Floor Plans
            </h3>
            <p className="text-sm text-gray-700">
              Delivered interactive 3D floor plans to accelerate claims settlement.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold mb-2">
              Nimble Auity Offered BIM Modeling Services to a UK Design Studio
            </h3>
            <p className="text-sm text-gray-700">
              Provided high-quality BIM modeling services for enhanced workflows.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Auity for Optimized Workflows
        </h2>
        <p className="text-lg mb-6">
          Eliminate errors, accelerate project timelines, and ensure compliance with our 
          commercial point cloud modeling services.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-2xl shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default PointCloudServices;
