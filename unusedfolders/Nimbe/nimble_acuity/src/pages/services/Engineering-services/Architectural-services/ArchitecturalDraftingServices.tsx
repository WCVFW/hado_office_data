import React from "react";
import ESmainmenu from "../ESmainmenu";

const ArchitecturalDraftingServices: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Architectural Drafting Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Optimize Your Architectural Workflow with Our Reliable and Proficient Drafting Services.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Streamline your construction documentation with our professional architectural drafting services. 
          We support architects, contractors, and construction firms by turning design concepts into accurate CAD drawings. 
          From initial floor plans to complete construction documents, our drafting services are built to match real project demands.
        </p>
        <p>
          Our team carefully prepares permit sets, interior and exterior elevations, site plans, section details, and as-built drawings. 
          Whether it's a residential, commercial, or mixed-use project, we ensure that each drawing meets local codes and project requirements.
        </p>
        <p>
          Outsourcing your drafting needs allows your team to focus on design development and client coordination while we handle the 
          technical documentation with care. Partner with Nimble Acuity to expand your drafting capabilities and keep every stage of 
          your project moving forward with confidence.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Extensive Architectural Drafting Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Construction Drafting",
              items: [
                "Floor Plans, Elevations & Sections: Accurate layout and vertical views for effective planning.",
                "Roof, Ceiling & Detail Drawings: Clear top-down and sectional insights for execution.",
                "Door, Window & Finish Schedules: Organized fixture specs for smooth project flow."
              ]
            },
            {
              title: "As-Built Drawing Drafting",
              items: [
                "Drafting from Redlines, Markups & Measurements: Turn field inputs into accurate CAD drawings.",
                "Post-Construction Updates: Reflect as-built changes with precise revisions.",
                "Scan to CAD Conversion: Convert scanned plans into editable, detailed CAD files."
              ]
            },
            {
              title: "Design Development Drafting",
              items: [
                "Schematic to Design Development: Evolve early concepts into detailed design sets.",
                "Massing Studies & Spatial Planning: Define form, scale, and functional layouts.",
                "Sketch to CAD Conversion: Transform conceptual sketches into precise CAD drafts."
              ]
            },
            {
              title: "Interior Detailing Drafting",
              items: [
                "Millwork & Furniture Layouts: Detailed drawings for built-ins and furniture placement.",
                "Reflected Ceiling Plans (RCPs): Ceiling layouts showing fixtures, finishes, and patterns.",
                "Wall Elevations & Finish Details: Visualize wall surfaces with material and finish specs."
              ]
            },
            {
              title: "Permit and Approval Drawing Sets",
              items: [
                "Permit Drawing Packages: Code-compliant sets for city and regional approvals.",
                "Site Plans & Egress Layouts: Outline site use, access, and occupancy flow.",
                "Zoning & Code Annotations: Highlight compliance with zoning and building regulations."
              ]
            },
            {
              title: "Site Plan and Master Plan Drafting",
              items: [
                "Plot Layouts: Map setbacks, topography, and site access clearly.",
                "Landscaping & Grading Plans: Design outdoor spaces with proper elevation flow.",
                "Parking, Utility & Drainage Layouts: Coordinate essential infrastructure for site efficiency."
              ]
            },
            {
              title: "CAD Conversion and Standardization",
              items: [
                "PDF to DWG Conversion: Convert paper or PDF drawings into editable DWG formats.",
                "Layer Standardization: Align drawings with AIA, ISO, or client-specific CAD standards.",
                "Title Block & Annotation Setup: Customize title blocks, symbols, and annotations to project templates."
              ]
            },
            {
              title: "Retail Space Design",
              items: [
                "Retail Layout Drafting: Plan retail spaces for efficient use and visual appeal.",
                "Circulation & Zoning Plans: Design layouts to guide customer movement and engagement.",
                "Operational Integration: Align space design with functional retail requirements."
              ]
            }
          ].map((service, idx) => (
            <div key={idx} className="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2 text-sm">
                {service.items.map((item, i) => (
                  <li key={i} className="list-disc ml-4">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Should You Choose Our Architectural Drafting Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Precision-driven Drafting: Our precise and detail-oriented drafting guarantees perfect execution, reducing mistakes and enabling smooth project progression.",
            "Personalized Solutions for Your Company: We offer personalized architectural drafting to your specific project requirements, enhancing efficiency and effectiveness.",
            "Leading-edge Technology: With the latest CAD technology, we bring cutting-edge solutions that keep your projects ahead in the competitive market today.",
            "Expertise in Complex Projects: Our staff is skilled in the management of intricate architectural designs, seeing that all detail counts to meet industry requirements and client satisfaction.",
            "Collaborative Partnership Approach: We engage with your staff to identify what you need, offering insight and assistance during the drafting process.",
            "Timely Delivery and Reliability: Our adherence to timelines has your projects running on schedule to ensure you keep clients happy and the project moving forward.",
            "Cost-effective Solutions: We provide top-class drafting services to meet your financial limits by making the best use of resources and lowering overheads."
          ].map((reason, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Additional Services You Can Benefit From</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-sm">
          {[
            "Architectural Construction Drawings",
            "Construction Documentation",
            "Shop Drawings",
            "Architectural 3D Modeling",
            "Fabrication Drawings",
            "CAD Conversion",
            "PDF To CAD",
            "Architectural BIM Services"
          ].map((service, idx) => (
            <li key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Customer Testimonials</h2>
        <blockquote className="bg-white p-6 rounded-2xl shadow italic text-gray-700">
          “Nimble Acuity has been a tremendous resource for our engineering department. 
          They are very precise and attentive to all our needs and have been able to learn our procedures 
          quicker than I ever thought possible.”
        </blockquote>
        <p className="mt-4 text-right font-semibold">— General Partner, Manufacturing company in US</p>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Customer Success Stories</h2>
        <div className="space-y-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Nimble Provided AS Built Drawings to US Architectural Firm</h3>
            <p>
              A US architectural firm contacted us to build CAD models complete with electrical layouts, switch positions, RCP etc. 
              We worked for 230 sites within 2 months using just 11 members.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Case Study on Architectural Rendering for Civil Engineering Client</h3>
            <p>
              A Wisconsin-based Civil Engineering Company received architectural rendering. 
              A top architectural firm based in Wisconsin needed rendering service support. 
              Our team at Nimble served the client as per SLA and within quick time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Outsource Architectural Drafting Services to Us</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Transform your designs into reality. Partner with us to start your architectural drafting journey and elevate your business success.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Get Started with Nimble Acuity
        </button>
      </section>
    </div>
  );
};

export default ArchitecturalDraftingServices;
