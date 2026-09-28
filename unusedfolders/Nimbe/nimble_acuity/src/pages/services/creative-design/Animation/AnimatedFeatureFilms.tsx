import React from "react";
import CSmainmenu from "../CSmainmenu";

const AnimatedFeatureFilms: React.FC = () => {
  const specializations = [
    "2D animation",
    "3D animation",
    "Storyboarding",
    "Whiteboard animation",
    "Scripting"
  ];

  const processSteps = [
    {
      step: "Clients Discussions and Research",
      description: "Nimble experts discuss requirements and conduct research to determine the best strategies for animated feature films."
    },
    {
      step: "Storyboarding",
      description: "Animators develop detailed storyboards or whiteboard designs based on research to ensure alignment with client vision."
    },
    {
      step: "Voice Over",
      description: "Professional voice-over artists record audio for your films, or clients may provide their preferred artists."
    },
    {
      step: "Feature Film Animation",
      description: "Creative animation experts design and edit 2D/3D animated feature films using the latest software and technologies."
    },
    {
      step: "Completion and Final Delivery",
      description: "Clients review final animation; feedback is incorporated and delivered securely via FTP."
    }
  ];

  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Animated Feature Films Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          We develop high-quality animated feature films in 2D and 3D to portray your message as a visually stimulating presentation at rates starting at $25 per second.
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
          Most businesses, from real estate to software, retail, e-commerce, and more, use animated feature films for training, marketing, and sales. Nimble Auity provides top-notch animated feature films for businesses without the need for in-house resources.
        </p>
        <p>
          With 26+ years of experience, Nimble has provided exceptional 2D and 3D animation services globally, producing unique and high-quality films for diverse industries.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Animated Feature Films Services We Offer
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">2D and 3D Animation Features</h3>
            <p>Our experts use the latest animation software to create compelling 2D and 3D animated feature films for any requirement.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Animated Storyboards</h3>
            <p>Mind-blowing animated storyboards envision your script and guide the final animation process, ensuring alignment with your style.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Character Creation Services</h3>
            <p>Create new characters or enhance existing models/sketches to match client expectations for animation films.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Character Animation Services</h3>
            <p>Bring characters to life using professional design and the latest animation tools for high-quality films.</p>
          </div>
        </div>
      </div>

      {/* Specializations */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Specializations</h2>
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 list-disc list-inside">
          {specializations.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
      </div>

      {/* Process */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Animated Feature Films Process</h2>
        <ol className="max-w-4xl mx-auto list-decimal list-inside space-y-4 text-gray-700">
          {processSteps.map((step, index) => (
            <li key={index}>
              <strong>{step.step}:</strong> {step.description}
            </li>
          ))}
        </ol>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Animated Feature Films?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          <li>Cost-efficient and customized pricing structure.</li>
          <li>ISO 9001:2015 certified for superior quality services.</li>
          <li>High data security via secure storage and FTP/VPN.</li>
          <li>Use of latest animation software and technologies.</li>
          <li>Skilled professionals with 26+ years of experience.</li>
          <li>Short turnaround times with multiple delivery centers.</li>
          <li>24/7 multilingual customer support.</li>
          <li>Single point of contact dedicated to each project.</li>
        </ul>
      </div>

      {/* Client Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-1">Hologram Animation for Swiss Natural Product Dealer</h3>
            <p>Nimble’s 4 animators crafted holograms using 3DS Max & Maya from PDF and PSD files, completing the project efficiently.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-1">2D Animation Services for UK-based Writer</h3>
            <p>A UK author outsourced 2D animation services to Nimble; skilled animators delivered top-notch animations on time and budget.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Your Animated Feature Film Today</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Nimble Auity helps businesses create visually compelling animated feature films to promote, train, or market their brand efficiently.
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

export default AnimatedFeatureFilms;
