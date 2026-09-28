import React from "react";
import ESmainmenu from "../ESmainmenu";

const PlumbingDesignServices: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Nimble Auity Plumbing Design Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Get access to high-quality and accurate plumbing design services to
          enhance the effectiveness of your projects, starting at{" "}
          <strong>$12/hour</strong>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <p className="text-lg leading-relaxed">
          Are you an architect, engineer, builder, or developer looking for
          top-quality mechanical, electrical, and plumbing (MEP) services, as
          well as building information modeling (BIM) services? Do you want to
          ensure your plumbing system is designed to global standards and
          optimizes water and energy resources? Then Nimble Auity’s plumbing
          design solutions are the right choice.
        </p>
        <p className="text-lg leading-relaxed">
          Nimble Auity is a leading plumbing design company with extensive
          experience working alongside consultants, engineers, contractors,
          architects, and developers worldwide. Our certified plumbing designers
          deliver ISO 9001:2015-compliant solutions that save both water and
          energy resources.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
          Plumbing Design Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Vent Piping Design Services",
            "Water Supply System Design Services",
            "Plumbing Shop Drawing Creation Services",
            "Hot Water System Drawings",
            "Cold Water System Drawings",
            "Domestic Plumbing Design and Drafting Services",
            "Designing Gas Pipe Layouts",
            "Pipe Layout Design Services",
            "Water Recycling System Design Services",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-2xl border shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {service}
              </h3>
              <p className="text-gray-700">
                Professional, efficient, and cost-effective design solutions to
                meet global standards.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Other Services You Can Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-lg">
          <li>Civil Engineering Services</li>
          <li>Architectural Design Services</li>
          <li>Mechanical Engineering Services</li>
          <li>Structural Engineering Services</li>
        </ul>
      </section>

      {/* Why Nimble */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
          Why Choose Nimble Auity for Plumbing Design?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Affordable Pricing Options",
            "High-quality ISO-certified Services",
            "Superb Infrastructure",
            "Cutting-edge Tools & Technologies",
            "Structured & Robust Process",
            "26+ Years Experienced Team",
            "GDPR-compliant Data Security",
            "Short Turnaround Times",
          ].map((reason, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl border shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-indigo-600">{reason}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Client Success Stories
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Nimble Provided Accurate CAD Drawings for Insulated Panel
              Manufacturer
            </h3>
            <p>
              Our CAD engineers created robust drawings for a US-based panel
              manufacturer, saving them over $145,000 and increasing business
              efficiency.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Nimble Delivered High-quality 3D Revit Models for Design Agency
            </h3>
            <p>
              Using point cloud technology, we provided a leading agency with
              sustainable architectural Revit models in record time.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">
          What Our Clients Say
        </h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic text-gray-700">
          “They have been able to learn our procedures quicker than I ever
          thought possible.” <br />
          <span className="font-semibold">– General Partner, US Manufacturer</span>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Outsource Plumbing Design Services to Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Nimble Auity delivers meticulously crafted plumbing designs for all
          types of projects using advanced engineering software, workflows, and
          technologies. Get in touch with us today for a professional and
          cost-effective solution.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PlumbingDesignServices;
