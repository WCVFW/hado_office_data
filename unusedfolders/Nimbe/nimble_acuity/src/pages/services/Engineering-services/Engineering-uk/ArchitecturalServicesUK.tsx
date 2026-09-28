import React from "react";
import {
  Building2,
  Layers,
  ClipboardList,
  Users,
  Star,
  FileText,
  CheckCircle2,
} from "lucide-react";
import ESmainmenu from "../ESmainmenu";

const ArchitecturalServicesUK: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          3D Architectural Modelling, Drafting and Rendering Services in the UK
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Unlock innovation in architectural design with precise CAD (Computer
          Aided Design), innovative BIM (Building Information Modelling), and
          high-quality rendering! Elevate your projects with our collaborative
          solutions and detailing in the UK.
        </p>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Nimble provides expert architectural 3D modelling, drafting, and
          rendering services to support your construction ventures. Whether your
          project is residential or commercial, no matter the complexity, we've
          got you covered. Our skilled team of engineers and architects employs
          advanced techniques for 2D to 3D conversion, 3D visualization of
          concept plans, and design modification utilizing innovative Revit BIM
          modelling and SketchUp modelling. Our 4D modelling planning and photo
          realistic 3D furniture modelling and interior rendering services are
          sure to meet your requirements.
        </p>
        <p>
          Choosing Nimble as your partner grants you access to 24 years of
          industry experience. Our team of accomplished designers, modellers,
          and 3D visual artists consistently elevate the standards of
          excellence. They have successfully met the requirements of a myriad of
          customers across various industries globally.
        </p>
        <p>
          We offer a comprehensive range of architectural visualization and 3D
          rendering services for comprehensive exterior/interior designing and
          architectural modelling. Our 3D industrial modelling services enable
          you to renovate and reinvent interiors and exteriors with interactive,
          photo realistic 3D architectural features. Employing leading software
          such as 3DS Max, V-Ray, Revit, Maya, and SketchUp, we provide
          precision and realism in our renders.
        </p>
        <p>
          When you choose Nimble as your innovation partner, you can expect a
          productivity surge, risk minimization, and an increase in your
          enterprise's intrinsic value. Our services aid in enhancing operational
          efficiency, nurturing positive customer interactions, and providing a
          competitive edge that will propel your business to the top of your
          industry.
        </p>
        <p>
          Take the first step towards achieving architectural excellence today
          and let's create your vision in 3D together. Join hands with Nimble
          and transform your architectural ideas into reality. Contact us now!
        </p>
      </section>

      {/* Solutions Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Architectural Solutions You Can Use for Your Problems
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Architectural 3D Modelling Services",
              desc: "Utilizing AutoCAD, SketchUp, Revit, and 3DS Max, we create 3D digital architectural models that enhance visualization, enable error detection, and aid project planning.",
            },
            {
              title: "3D Furniture Modelling Services",
              desc: "We create detailed, true-to-life furniture models with SketchUp and 3D Max, allowing clients to visualize furniture placement before production.",
            },
            {
              title: "3D Revit Modelling Services",
              desc: "Comprehensive solutions for architectural and MEP design, streamlining collaboration and reducing errors in construction documents.",
            },
            {
              title: "CAD Modelling Services",
              desc: "Detailed 3D CAD models with data on material, dimensions, reflectivity, and conductivity. Improve design efficiency and reduce errors.",
            },
            {
              title: "Parametric 3D Modelling Services",
              desc: "Using SolidWorks and Inventor, we automate design processes and create complex geometries through parametric rules.",
            },
            {
              title: "CAD Drafting Services",
              desc: "High-accuracy technical blueprints solving design issues such as spatial conflicts and tolerance stacks.",
            },
            {
              title: "Revit Modelling Services",
              desc: "Detailed 3D BIM-based models that enhance collaboration, planning, and documentation accuracy.",
            },
            {
              title: "Architectural Drafting Services",
              desc: "Precise AutoCAD and Revit drafting for better communication, efficient construction, and reduced errors.",
            },
            {
              title: "Architectural 3D Rendering Services",
              desc: "High-resolution, realistic 3D images showcasing textures, shadows, lighting, and finishes.",
            },
            {
              title: "3D Furniture Rendering Services",
              desc: "Hyper-realistic renders with 360° views, customization options, and animations for multifunctional furniture.",
            },
            {
              title: "3D Product Rendering Services",
              desc: "Photorealistic renderings with ray tracing and global illumination using 3ds Max and Blender.",
            },
            {
              title: "3D Interior Rendering Services",
              desc: "Visualize interiors with patterns, textures, lighting, and furniture placements.",
            },
            {
              title: "Photorealistic 3D Rendering Services",
              desc: "360° panorama renders compatible with HMDs, including animations and walkthroughs.",
            },
            {
              title: "3D CAD Drafting Services",
              desc: "Intricate CAD drafting for architecture, manufacturing, and product development.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Systematic Process Flow
        </h2>
        <ol className="space-y-6 border-l-4 border-blue-600 pl-6">
          {[
            "Definition of Work Parameters",
            "Time, Cost, and Resources Evaluation",
            "Delegation of Project Tasks",
            "Understanding the Idea",
            "Ideation",
            "3D Model Development",
            "Adding Texture and Light",
            "Sharing Initial Drafts",
            "Revision & Quality Assurance",
            "Final Rendering",
            "Review and Approval",
            "Final Handover",
            "Post-Delivery Support",
          ].map((step, idx) => (
            <li key={idx} className="relative">
              <span className="absolute -left-7 top-2 w-4 h-4 bg-blue-600 rounded-full"></span>
              <p className="text-gray-700">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Sectors */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Sectors We Cater To</h2>
        <p className="max-w-4xl mx-auto text-gray-700">
          Commercial • Residential • Industrial • Healthcare • Education •
          Government • Sports & Entertainment • Hospitality • Transportation •
          Urban Planning • Landscape Architecture • Interior Design •
          Architectural Studios
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Why Choose Nimble for 3D Architecture, Modelling, and Drafting?
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Your Information is Safe with Us – ISO/IEC 27001:2022 certified.",
            "Advanced Infrastructure – round-the-clock access to modern tools.",
            "Uncompromising Quality – Six Sigma methodology for excellence.",
            "Compliance to International Standards – thorough documentation.",
            "Comprehensive Services – piping, HVAC, wiring, interiors, and more.",
            "24/7 Customer Support – always available to resolve concerns.",
            "Skilled Team of Professionals – 200+ staff with 20+ years’ experience.",
            "Scalability to Match Your Needs – flexible services for business growth.",
            "Cost-Effective Services – flexible pricing for high-quality outputs.",
          ].map((point, idx) => (
            <li
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Engineering Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Experience the Spectrum of Our Proficient Engineering Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Mechanical Engineering Services – Reverse Engineering, Product Design, Analysis.",
            "Civil Engineering Services – MEP, Geospatial, HVAC for infrastructure.",
            "Structural Engineering Services – conceptualizing, designing, stability evaluation.",
            "Electrical Engineering Services – aerospace, mining, power generation, PCB layout.",
          ].map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p>{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Case Study on 3D BIM Modeling Services
            </h3>
            <p>
              We assembled a dedicated team and offered a trial run, creating
              exterior rendering models to align with the client’s needs. After
              approval, we developed 3D BIM models under tight deadlines. Our
              models expedited hotel development and saved the client time and
              money.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Case Study on CAD Drawings
            </h3>
            <p>
              Our expert team delivered exceptional CAD drawings to a prominent
              UK-based construction consultancy. The project was completed with
              remarkable speed and 100% accuracy, showcasing our efficiency and
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <p className="mb-4">
            “Ante Architecture + Design has used Nimble on numerous occasions
            for our CAD drafting needs. Nimble has turned around drawings
            quickly with excellent drafting skill and attention to detail. We
            enjoy working directly with their team and recommend Nimble services
            for architectural CAD-drafting needs.”
          </p>
          <p className="font-semibold">
            Principal - Design and Architecture company in US
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Join Us for a Journey to Architectural Excellence!
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Maximize your ROI with our 3D modelling and rendering services. Our
          in-house engineering team is prepared to assist you in reducing costs
          and optimizing project processes.
        </p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ArchitecturalServicesUK;
