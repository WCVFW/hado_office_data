import React from "react";
import ESmainmenu from "../ESmainmenu";

const RetailVisualMerchandising: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Retail Visual Merchandising Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Attract customers to your store and compel them to buy your products or services with effective retail visual merchandising solutions.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Struggling to attract customers or maximize sales? Nimble Acuity provides innovative and creative retail visual merchandising solutions using the latest tools and technologies.
        </p>
      </section>

      {/* Capabilities Table */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Retail Visual Merchandising Capabilities</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white rounded-xl shadow-md">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-4 py-2">Client Need</th>
                <th className="px-4 py-2">Activities</th>
                <th className="px-4 py-2">Tools</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="px-4 py-2">Design Development & Project Management</td>
                <td className="px-4 py-2">Detailed Package, Nesting Board, Legacy Data Conversion to 3D</td>
                <td className="px-4 py-2">AutoCAD / SolidWorks / Inventor</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2">Prototype & Store Seasonal Update</td>
                <td className="px-4 py-2">Fixture Design, Vacuum Form, 3D Planogram, CNC Programming</td>
                <td className="px-4 py-2">SolidWorks / Inventor / CAMworks / NESTfab / ePDMS</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Sales Back-office Support</td>
                <td className="px-4 py-2">Summary Sheet, Instructional Manual / Catalog, AMC – Sales Order & Invoice Update</td>
                <td className="px-4 py-2">Client Web Portal / MS Office / SolidWorks Composer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Retail Visual Merchandising Services We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Backlit Signage Services", desc: "Innovative and eye-catching backlit signages that attract customers and enhance store branding." },
            { title: "Pop Designing and Deployment", desc: "End-to-end solution for point-of-sale merchandise designing, deployment, and maintenance." },
            { title: "Merchandise Material Maintenance", desc: "Routine and periodic maintenance with options for updating or replacing displays." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Expertise */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Our Service Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "Metal Designs: Backbone of displays for stores.",
            "Wood Designs: Accurate wood designs with CNC precision.",
            "Interactive Displays: Eye-catching displays to improve engagement.",
            "Acrylic Designs: Enhance retail merchandising impact.",
            "Design & Engineering: Turn ideas into reality with professional designs.",
            "Digital Print & Signage: Powerful messaging for stores.",
            "Delivery Support: From design to final product delivery.",
            "Installation: Expert installation of final products.",
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Clients We Cater To</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
          {[
            "Sales Agencies",
            "Vendors",
            "Retailers",
            "Retail Consultancies",
            "E-Commerce Firms",
            "Retail Solution Providers",
            "Architectural Planners",
          ].map((client, idx) => (
            <li key={idx}>{client}</li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-50 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Retail Visual Merchandising Process</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4">
          <li><strong>Requirement Analysis:</strong> Meet client to understand products, services, and requirements.</li>
          <li><strong>Planning:</strong> Create project plan addressing client challenges.</li>
          <li><strong>Designing:</strong> Design retail visual merchandise and get client approval.</li>
          <li><strong>Development:</strong> Develop the approved displays.</li>
          <li><strong>Deployment:</strong> Deploy final displays after quality check.</li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "Building Information Modeling",
            "3D Furniture Modeling",
            "3D Rendering & Walkthrough Services",
            "Point Cloud Services",
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p>{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Acuity?</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "Affordable Pricing Packages",
            "State-of-the-art Infrastructure",
            "Error-free Services",
            "Short Turnaround Time",
            "Data Security (ISO/IEC 27001:2022 ISMS Certified)",
            "Dedicated Project Manager (SPOC)",
            "Round the Clock Support",
            "Skilled Architectural Engineers",
            "Easily Scalable Services",
          ].map((item, idx) => (
            <li key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-indigo-600">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Retail Space Drafting for a US-based Client</h3>
            <p>Delivered services within quick turnaround time for a US architectural firm.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Retail Design & Drafting for a Store Management Company</h3>
            <p>Provided cost-effective retail design and drafting services.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Hire Nimble Acuity for Retail Visual Merchandising Services</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Nimble Acuity delivers precise and cost-effective retail visual merchandising services globally. Contact us today to get started!
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default RetailVisualMerchandising;
