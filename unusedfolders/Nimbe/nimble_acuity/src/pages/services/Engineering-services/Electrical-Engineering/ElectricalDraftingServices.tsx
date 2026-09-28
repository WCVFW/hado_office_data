import React from "react";
import { Menu } from "lucide-react";
import ESmainmenu from "../ESmainmenu";

const ElectricalDraftingServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-6 md:px-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Electrical Drafting Services
        </h2>
        <p className="max-w-4xl mx-auto text-lg md:text-xl mb-8">
          Designing robust electric systems for safety and smart automation —
          starting at just <span className="font-semibold">$9/hour</span>.
        </p>
        <a
          href="#contact"
          className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>

      {/* Intro */}
      <section id="intro" className="max-w-6xl mx-auto py-16 px-6 md:px-12">
        <p className="text-lg leading-relaxed">
          Are you looking for ways to turn electrical system plans into computer drafts?  
          If so, you need professional electrical engineers with process knowledge of 
          electrical drafting services to create an electrical system design that is 
          safe and durable. This is where <span className="font-semibold">Nimble Acuity</span> comes in.  
          When you outsource electrical drafting services to us, we take care of electrical 
          systems drafting using CAD/CAE tools. Additionally, we provide consultation for 
          wiring diagrams, schematics, and drafting — helping you implement building automation 
          and energy-efficient designs.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Nimble Acuity has 26+ years of experience in a wide range of electrical drafting 
          services. Outsourcing electrical systems design to us saves you time and money, 
          while ensuring 100% satisfaction with timeliness, quality, and scalability.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-100 py-16 px-6 md:px-12">
        <h3 className="text-3xl font-bold text-blue-700 text-center mb-10">
          Electrical Drafting Services We Offer
        </h3>

        <div className="space-y-8 max-w-6xl mx-auto text-lg leading-relaxed">
          <div>
            <h4 className="font-semibold text-xl mb-2">Electrical Schematics</h4>
            <p>We create layouts indicating where fittings on ceiling and walls are mapped, 
              with detailed wiring trails for receptacles, permanent services, and lighting.</p>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-2">Communication Systems Schematics</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Public address systems</li>
              <li>Intercom wiring layout</li>
              <li>In-plant communication systems</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-2">Architectural Plans</h4>
            <p>We create schematics for new plans, including riser diagrams, site plans, panel schedules, and distribution panels.</p>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-2">Exterior Lighting Drafting</h4>
            <p>Expert planning ensures outdoor lighting layouts are robust and architecturally optimized.</p>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-2">Power and Lighting Systems</h4>
            <p>Complex system plans with CAD tools to ensure appliances operate seamlessly without relocation.</p>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-2">Terminations Diagram Drafts</h4>
            <p>Using simple shapes and symbols, we illustrate circuits for electricians to install pipework and terminals.</p>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-2">Control Circuits</h4>
            <p>We map circuits in utility areas for enhanced functionality and safety.</p>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-2">3D Electrical Drafting</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Power cable layouts</li>
              <li>Motor Control Center detailing</li>
              <li>Transmission & distribution line schematics</li>
              <li>Control cable design & sizing</li>
              <li>Switchgear, transformers, MCCs, breakers, starters</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-2">2D Panel Drafting</h4>
            <p>High-quality drafting including single line diagrams and detailed panel wiring diagrams.</p>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-2">Earthing & Lightning Protection</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Earthing system layout</li>
              <li>Earthing strips & pits diagrams</li>
              <li>Lightning protection systems</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-2">Industrial Illumination Systems</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Photometric calculations</li>
              <li>Lighting design based on layouts</li>
              <li>Cable layout & schedule</li>
              <li>Material take-off detailing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-2">Fire Protection System Layouts</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Alarm/smoke detection system design</li>
              <li>Fire sprinkler & protection plans (NFPA / equivalent codes)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 px-6 md:px-12 bg-white">
        <h3 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Our Electrical Drafting Process
        </h3>
        <ol className="list-decimal pl-6 space-y-2 max-w-4xl mx-auto text-lg">
          <li>Input validation checks</li>
          <li>In-process quality checks</li>
          <li>Project leader supervision</li>
          <li>Independent review</li>
          <li>Project manager oversight</li>
          <li>Six Sigma trained personnel</li>
          <li>Defect tracking</li>
          <li>Customer satisfaction surveys</li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="bg-gray-100 py-16 px-6 md:px-12">
        <h3 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Why Choose Nimble Acuity?
        </h3>
        <ul className="list-disc pl-6 space-y-2 max-w-5xl mx-auto text-lg">
          <li>Affordable and customizable services</li>
          <li>Stringent quality control (ISO 9001:2015)</li>
          <li>Superb infrastructure for parallel projects</li>
          <li>ISO/IEC 27001:2022 compliance for data security</li>
          <li>Quick turnaround times</li>
          <li>Scalable services with cutting-edge technologies</li>
          <li>Expertise in AutoCAD, Revit, SolidWorks, Bentley, ESRI, etc.</li>
          <li>Round-the-clock multilingual support</li>
        </ul>
      </section>

      {/* Areas */}
      <section id="areas" className="py-16 px-6 md:px-12 bg-white">
        <h3 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Areas of Specialization
        </h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto text-lg">
          <ul className="list-disc pl-6 space-y-1">
            <li>Plant room/utility building layouts</li>
            <li>Equipment foundation drafting</li>
            <li>Sports field lighting</li>
            <li>Data centers</li>
            <li>Backup generators</li>
            <li>UPS systems</li>
          </ul>
          <ul className="list-disc pl-6 space-y-1">
            <li>Detention security systems</li>
            <li>Auxiliary system drafting</li>
            <li>Power & earthing grid layouts</li>
            <li>Multi-storied residential, commercial, institutional projects</li>
          </ul>
        </div>
      </section>

      {/* Software */}
      <section id="software" className="bg-gray-100 py-16 px-6 md:px-12">
        <h3 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Software & Tools We Use
        </h3>
        <ul className="list-disc pl-6 space-y-2 max-w-4xl mx-auto text-lg">
          <li>HVAC/Electrical tools: Elite, Wrightsoft</li>
          <li>Autodesk: AutoCAD, ADT, Revit</li>
          <li>Bentley: Microstation, Microstation J</li>
          <li>SolidWorks, ProE</li>
          <li>ESRI (Arc/Info, Arc/View), MapInfo</li>
          <li>Automation: Excel/macros, VBA, Visual Lisp</li>
        </ul>
      </section>

      {/* Case Studies */}
      <section id="success" className="py-16 px-6 md:px-12 bg-white">
        <h3 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Client Success Stories
        </h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-lg">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-xl mb-2">Manufacturing Firm</h4>
            <p>
              Nimble provided construction drawings using PTC Creo 4.0, creating 
              accurate 3D models and eliminating manufacturing errors.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-xl mb-2">Award-winning Design Firm</h4>
            <p>
              Delivered quick and cost-effective MEP services, converting 
              electrical SLD layouts into AutoCAD layouts.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-100 py-16 px-6 md:px-12 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-8">
          Testimonials
        </h3>
        <blockquote className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md italic">
          “The commitment and focus of Nimble Acuity's managers and engineers were 
          excellent and surpassed our expectations.”
          <span className="block font-semibold mt-4">
            – SVP & Co-Founder, Engineering Resource Company
          </span>
        </blockquote>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Outsource Electrical Drafting Services to Nimble Acuity
        </h3>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Nimble Acuity is dedicated to helping businesses with world-class electrical drafting 
          services. With the right people, tools, and process, we ensure your construction projects 
          are future-ready, energy-efficient, and safe.
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© {new Date().getFullYear()} Nimble Acuity. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ElectricalDraftingServices;
