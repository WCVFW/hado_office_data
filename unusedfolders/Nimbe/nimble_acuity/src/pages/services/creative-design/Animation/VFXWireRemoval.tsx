import React from "react";
import CSmainmenu from "../CSmainmenu";

const VFXWireRemoval: React.FC = () => {
  const services = [
    "Rotoscoping",
    "Masking",
    "Compositing",
    "2D Background Replacement",
    "3D Environment Replacement",
  ];

  const techniques = [
    "Painting Frame by Frame",
    "Clone and Paint",
    "Stabilize and Paint Back",
    "Patching Over the Top",
  ];

  const software = ["Autodesk Maya", "3ds Max", "Adobe After Effects", "Silhouette", "Nuke"];

  const benefits = [
    "Business Continuity",
    "Creative Process Control",
    "Trust and Compliance",
    "Dedicated Team of Professionals",
    "Cost-Effective Solutions",
  ];

  const additionalServices = [
    "Rotoscoping Services",
    "Visual Effect Services",
    "3D Video Animation Services",
    "Motion Graphics Design Services",
  ];

  const clientStories = [
    {
      title: "Rotoscoping Services Provided to A Leading Film Production Company",
      desc: "The UK office of a leading film production company required additional support for the rotoscoping aspect of their video clips. Nimble Auity produced high-quality rotoscoping deliverables for them in a short amount of time.",
    },
    {
      title: "2D Animation Services Provided to a Canada-Based Video Production Company",
      desc: "We delivered world-class 2D animation creation services to a leading video production using the latest technologies. Our services helped the client reach a wider audience and increase profitability.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          VFX Wire Removal Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Streamline your post-production process and access flawless visuals with Nimble Auity’s VFX wire removal services.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get a Free Quote
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          Wire removal is time-consuming and challenging in post-production. Nimble Auity leverages cutting-edge tools and a dedicated team to erase wires and rigs with precision, ensuring flawless deliverables for any type of footage.
        </p>
        <p>
          As an ISO-certified and GDPR-compliant company, we combine technical expertise and data security to deliver high-quality VFX wire removal services globally.
        </p>
      </div>

      {/* Services */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">High-Quality VFX Wire Removal Services</h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          {services.map((service) => (
            <div key={service} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{service}</h3>
              <p>
                {service === "Rotoscoping" && "Trace wires or rigs in each frame to remove them while preserving scene integrity."}
                {service === "Masking" && "Create precise masks to cover wires or rigs for seamless footage."}
                {service === "Compositing" && "Combine cloning, tracking, and painting techniques for seamless integration."}
                {service === "2D Background Replacement" && "Replace existing backgrounds to hide wires and rigs in 2D scenes."}
                {service === "3D Environment Replacement" && "Replace greenscreens and rigs with fully immersive 3D environments."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Techniques */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Techniques We Use</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          {techniques.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </div>

      {/* Software */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Software We Leverage</h2>
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
          {software.map((sw, idx) => (
            <li key={idx}>{sw}</li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Wire Removal</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Services</h2>
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          {additionalServices.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </div>

      {/* Client Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Case Studies</h2>
        <div className="space-y-6 text-gray-700">
          {clientStories.map((story, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-xl mb-1">{story.title}</h3>
              <p>{story.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Streamline Your Post-Production</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity for precise and high-quality VFX wire removal services that save time, reduce costs, and deliver flawless results.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default VFXWireRemoval;
