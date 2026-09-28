import React from "react";
import CSmainmenu from "../CSmainmenu";

const KineticTypography: React.FC = () => {
  const services = [
    "Motion Graphics Typography Services",
    "Fluid Typography Services",
    "Dynamic Typography",
    "Explainer Videos",
    "Logo Animation",
    "2D Text Animation",
    "3D Text Animation",
    "Whiteboard Animation",
    "Animated Infographics",
    "Title Sequences",
    "Text-To-Voice Animations",
  ];

  const processSteps = [
    "Understanding the Scope of the Project",
    "Allocation of Appropriate Resources",
    "Kinetic Typography Production or Execution",
    "Quality Assurance",
    "Final Delivery",
  ];

  const benefits = [
    "ISO Certified Typography Animation Services",
    "High-Quality Service",
    "Specially Skilled Typography Experts",
    "A Dedicated Manager",
    "Quick Turnaround Time",
    "High Scalability",
    "Cost-effective Service",
  ];

  const additionalServices = [
    "Rotoscoping Services",
    "Visual Effect Services",
    "3D Video Animation Services",
    "Motion Graphics Design Services",
  ];

  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Kinetic Typography Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Transform your static content into powerful, eye-catching visuals! Connect with your audience like never before with Nimble Auity’s innovative kinetic typography services.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get a Free Quote
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          Static text can be unengaging if poorly placed or designed. Nimble’s kinetic typography services bring movement and animation to your text, highlighting key points and emphasizing important information to boost brand awareness and engagement.
        </p>
        <p>
          Our team of expert typographers leverages over 20 years of experience to deliver captivating animated text, improving client presentations, marketing campaigns, and video content.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Kinetic Typography Solutions We Offer
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          {services.map((service) => (
            <div key={service} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{service}</h3>
              <p>
                {service === "Motion Graphics Typography Services" && "Create visually appealing text animations using After Effects to build a unique brand identity."}
                {service === "Fluid Typography Services" && "Ensure content is readable and accessible across devices to improve engagement."}
                {service === "Dynamic Typography" && "Produce attention-grabbing animated text to clearly communicate brand messages."}
                {service === "Explainer Videos" && "Develop captivating visuals with clear messaging for effective communication."}
                {service === "Logo Animation" && "Add movement and dimension to your client’s logo for enhanced brand presence."}
                {service === "2D Text Animation" && "Custom 2D text animations for videos, presentations, and social media content."}
                {service === "3D Text Animation" && "Eye-catching 3D text effects to capture viewer attention."}
                {service === "Whiteboard Animation" && "Creative whiteboard animations to boost marketing and social media presence."}
                {service === "Animated Infographics" && "Combine text, imagery, graphs, and charts into engaging visuals."}
                {service === "Title Sequences" && "Well-structured title sequences to capture audience attention."}
                {service === "Text-To-Voice Animations" && "Convert static text into animated videos for higher engagement."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Kinetic Typography Process</h2>
        <ul className="max-w-4xl mx-auto list-decimal list-inside space-y-4 text-gray-700">
          {processSteps.map((step, index) => (
            <li key={index}>
              <span className="font-semibold">{step}:</span> 
              {step === "Understanding the Scope of the Project" && " Gather detailed project requirements to develop a clear action plan."}
              {step === "Allocation of Appropriate Resources" && " Assign the right typographers and tools for your project."}
              {step === "Kinetic Typography Production or Execution" && " Create innovative, visually engaging text animations."}
              {step === "Quality Assurance" && " Ensure 100% accuracy and top-quality output through rigorous QA."}
              {step === "Final Delivery" && " Deliver the finalized animations promptly to clients."}
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Kinetic Typography Services?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Additional Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Services We Offer</h2>
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          {additionalServices.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </div>

      {/* Client Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-1">
              2D Animation Services Provided to a Canada-Based Video Production Company
            </h3>
            <p>
              Our team delivered world-class 2D animation services using the latest technology, helping the client reach a wider audience and increase profitability.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-1">
              End-to-end Animation Services for Social Awareness Campaign
            </h3>
            <p>
              We provided full animation services for a French social campaign aimed at raising awareness about drugs and alcohol among European youth.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bring Your Text to Life with Nimble Auity</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity to create visually captivating kinetic typography animations that elevate your brand’s communication and engagement.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default KineticTypography;
