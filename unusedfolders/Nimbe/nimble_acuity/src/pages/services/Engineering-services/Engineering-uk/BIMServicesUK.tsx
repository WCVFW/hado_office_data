import React from "react";
import {
  Building2,
  ClipboardCheck,
  Layers,
  Users,
  Zap,
  Wrench,
  FileText,
  CheckCircle2,
} from "lucide-react";
import ESmainmenu from "../ESmainmenu";

const BIMServicesUK: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          BIM Services UK
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Revolutionize construction with our tailored UK BIM services - Experience seamless structural design, optimal energy efficiency, and precise site analysis for superior project outcomes.
        </p>
        <p className="max-w-4xl mx-auto text-gray-200">
          Efficiency in design and project management is a constant concern for businesses when managing Building Information Modeling (BIM) internally. The demands for design accuracy have never been higher, as minor errors can cascade into costly rework and delays. Moreover, collaboration, often involving diverse teams of architects, engineers, contractors, and stakeholders, presents a significant hurdle. That&apos;s precisely where our specialized UK-focused BIM services play a crucial role.
        </p>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Expertise</h2>
        <p className="text-lg text-gray-700 mb-4">
          With our extensive experience and expertise as BIM specialists, we offer tailored solutions that empower businesses to thrive. As a UK BIM service provider, Nimble Auity offers comprehensive solutions including 3D/4D/5D modeling, laser scanning, BIM for facility management, and regulatory compliance. Our expertise extends to BIM training, custom software development, and integrating VR/AR technologies for immersive project visualization.
        </p>
        <p className="text-lg text-gray-700">
          We streamline construction workflows, increase efficiency, and drive cost savings, ensuring projects meet the highest standards of precision and quality from conception through to operation.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          BIM Solutions We Offer
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {[
            { title: "BIM Coordination Services", desc: "Experience seamless project collaboration with our UK-centric BIM coordination services. Our expert team ensures all project elements align flawlessly, eliminating clashes, errors, and costly rework." },
            { title: "BIM Clash Detection Services", desc: "By proactively mitigating issues, we prevent costly disruptions and delays. We employ advanced software to identify and resolve clashes within your design before construction begins." },
            { title: "BIM Visualization Services", desc: "Transform complex data into vivid 3D visualizations for improved communication, design understanding, and early identification of improvements." },
            { title: "BIM Cost Estimation Services", desc: "Mitigate financial risks, avoid overruns, and optimize financial efficiency while maintaining high standards of accuracy." },
            { title: "BIM 4D (Time) and 5D (Cost) Services", desc: "Add scheduling and cost dimensions to BIM models to visualize timelines, avoid delays, cut costs, and reduce risks." },
            { title: "BIM Design Services", desc: "Enhanced visualization, collaboration, and efficient iterations that transform your ideas into architectural marvels." },
            { title: "BIM Drafting Services", desc: "Error-free, efficiently modifiable drawings that streamline the construction process." },
            { title: "BIM Drawing Services", desc: "Up-to-date, accurate drawings that ensure compliance and minimize costs." },
            { title: "3D BIM Services", desc: "Professional 3D models ensuring transparency and improved communication." },
            { title: "MEP BIM Services", desc: "Practical designs that help engineers visualize and optimize mechanical, electrical, and plumbing stages." },
            { title: "Revit BIM Services", desc: "Harnessing Revit’s full potential for precise design and streamlined workflows." },
            { title: "HVAC BIM Services", desc: "Precise 3D HVAC models that improve efficiency and integration." },
            { title: "Scan To BIM Services", desc: "Laser scanning to capture 3D data of your built environment and transform it into accurate BIM models." },
            { title: "Architectural BIM Services", desc: "Generate accurate cost estimates, reduce delivery times, and improve building lifecycle management." },
            { title: "Structural BIM Services", desc: "Flexible structural design solutions that enhance quality and visualization." },
          ].map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Building Information Modeling Services Process Flow
        </h2>
        <ol className="space-y-6 border-l-4 border-blue-600 pl-6">
          {[
            "Project Initiation – Understanding your project's unique requirements and objectives.",
            "BIM Execution Plan (BEP) Development – Crafting a comprehensive execution strategy.",
            "Requirement Analysis – Deep analysis of project specifics.",
            "Planning – Allocating resources and setting timelines.",
            "Implementation and Quality Check – Executing with a strong focus on quality assurance.",
            "Delivery – Meeting deadlines and exceeding expectations."
          ].map((step, idx) => (
            <li key={idx} className="relative">
              <span className="absolute -left-7 top-2 w-4 h-4 bg-blue-600 rounded-full"></span>
              <p className="text-gray-700 text-lg">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Sectors & Customers */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Sectors We Cater To</h2>
        <p className="text-gray-700 mb-10">
          Commercial • Residential • Industry • Hospitality • Education • Healthcare • Retail • Airports • Infrastructure • Metro Rail
        </p>

        <h2 className="text-3xl font-bold mb-6">Customers We Assist</h2>
        <p className="text-gray-700">
          Architects • Structural Engineers • Construction Professionals • Contractors • Engineers • Interior Designers
        </p>
      </section>

      {/* Consulting Services */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          BIM Consulting Services
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Within our specialized suite of BIM services, we offer design-centric solutions tailored to client needs. We perform strategic planning, project management, clash detection, cost estimation, sustainability analysis, facility management integration, and custom content creation.
        </p>
        <p className="text-lg text-gray-700">
          Our consultancy services assist businesses to make informed design decisions, optimize workflows, mitigate risks, and achieve cost-effective excellence across each phase.
        </p>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Why Choose Nimble Auity as Your BIM Service Provider?
        </h2>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            "World Class Infrastructure – State-of-the-art facilities.",
            "Quality Services – ISO 9001:2015 certified precision.",
            "Leading-Edge Tools – Latest BIM technologies.",
            "Expert Team – Skilled engineers and Revit specialists.",
            "Specialized Services – Tailored to industries like healthcare, hospitality, and construction.",
            "3D Model Using Virtual Intelligence – Enhanced digital visualization.",
            "Clashes and Risk Mitigation – Using tools like Navisworks.",
            "Cost-Effective Prices – Competitive pricing without compromise."
          ].map((point, idx) => (
            <li
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700">{point}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Mechanical Engineering Services – Optimize production.",
            "Architectural Engineering Services – Structurally resilient designs.",
            "Civil Engineering Services – Infrastructure rebuild and repair.",
            "Structural Engineering Services – Flexible design solutions.",
            "Electrical Engineering Services – Power, mining, aerospace support.",
            "Infrastructure Engineering Services – IT infrastructure deployment."
          ].map((s, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Case Study on 3D BIM Modeling Services
            </h3>
            <p className="text-gray-700">
              We partnered with a UK-based design studio to provide cutting-edge 3D BIM models for their hotel projects. Our cost-effective services helped them revolutionize design and achieve outstanding results.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Case Study on CAD Drawings
            </h3>
            <p className="text-gray-700">
              We delivered precision CAD drawings to a UK construction consultancy with speed and 100% accuracy, showcasing our commitment to efficiency and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 mb-4">
              “Nimble Auity has been a tremendous resource for our engineering department. They are very precise and attentive to all our needs and learned our procedures quicker than I ever thought possible.”
            </p>
            <p className="font-semibold">SVP and Co-Founder - Engineering Resource Company</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Embrace the Future of Construction
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Partner with Nimble Auity for bespoke UK BIM services. Drive innovation, ensure compliance, and enhance project success with our expertly crafted solutions.
        </p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default BIMServicesUK;
