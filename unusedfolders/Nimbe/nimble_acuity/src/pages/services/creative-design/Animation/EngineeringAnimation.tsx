import React from "react";
import CSmainmenu from "../CSmainmenu";

const EngineeringAnimation: React.FC = () => {
  const services = [
    "Industrial Design Visualization",
    "Industrial Automation Process Animation",
    "Machine Design Animation",
    "3D Machine Parts",
  ];

  const processFlow = [
    "Consultation",
    "Planning & Researching",
    "2D Design",
    "3D Design",
    "Animation",
    "Presentation",
    "Re-Evaluation (if necessary)",
  ];

  const benefits = [
    "Affordable pricing options",
    "High-quality Services provided by ISO-certified company",
    "Superlative infrastructure",
    "Advanced tools and technologies",
    "Structured and transparent process",
    "Experienced team with 10+ years",
    "Complete data security and safety",
    "Short turnaround while maintaining high quality",
  ];

  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Engineering Animation Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Create a clear vision of your engineering designs and process automations using expert animation services starting at just $10/hour.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-teal-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get a Free Quote
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          Creating an industrial automation process requires precision, investment, and planning. Nimble Auity provides engineering animation services to visualize designs, optimize processes, and impress investors before actual implementation.
        </p>
        <p>
          Our animation solutions help you conceptualize industrial designs, automate processes, animate machines, and render 3D machine parts with clarity and accuracy.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Engineering Animation Services We Offer
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
          {services.map((service) => (
            <div key={service} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{service}</h3>
              <p>
                {service === "Industrial Design Visualization" &&
                  "Custom designs of processes, machines, and machine parts to visualize and plan industrial setups."}
                {service === "Industrial Automation Process Animation" &&
                  "Animated videos of industrial automation processes to optimize and evaluate the workflow."}
                {service === "Machine Design Animation" &&
                  "Bring machine drawings and ideas to life, illustrating custom-built or modified machinery."}
                {service === "3D Machine Parts" &&
                  "Accurate, scalable, and manipulatable 3D renderings of individual mechanical components."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3D Engineering Animation Process Flow */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our 3D Engineering Animation Process Flow</h2>
        <ul className="max-w-4xl mx-auto list-decimal list-inside space-y-4 text-gray-700">
          {processFlow.map((step, index) => (
            <li key={index}>
              <span className="font-semibold">{step}:</span> 
              {step === "Consultation" &&
                " We discuss your project goals and understand your requirements."}
              {step === "Planning & Researching" &&
                " We plan your process, machine, or component using your data and our expertise."}
              {step === "2D Design" &&
                " For clients without existing 2D designs, we create an initial 2D rendering."}
              {step === "3D Design" &&
                " We convert approved 2D designs into full 3D models."}
              {step === "Animation" &&
                " We animate the 3D models to visualize each process and stage clearly."}
              {step === "Presentation" &&
                " The final animated products are presented for your use."}
              {step === "Re-Evaluation (if necessary)" &&
                " We incorporate feedback and adjustments to perfect the process before implementation."}
            </li>
          ))}
        </ul>
      </div>

      {/* Other Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          <li>Animatics Services</li>
          <li>Visual Effects Services</li>
          <li>Rotoscoping Services</li>
          <li>Flash Animation Services</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Engineering Animation Services?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Client Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-1">
              UK-based Children's Book Writer Obtains 2D Animation Services
            </h3>
            <p>
              Our team delivered high-quality 2D animation services within a quick turnaround for a leading UK-based children's book writer.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-1">
              Swiss Natural Product Dealer Obtains Hologram Animation Services
            </h3>
            <p>
              Four animation experts created high-quality holograms using 3DS Max & Maya software for a Swiss natural product dealer.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-teal-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Your Engineering Animation Today</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity to create accurate, clear, and visually engaging engineering and industrial process animations.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-teal-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default EngineeringAnimation;
