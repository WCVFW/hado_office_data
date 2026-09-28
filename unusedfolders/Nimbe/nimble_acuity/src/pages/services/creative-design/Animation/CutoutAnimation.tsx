import React from "react";
import CSmainmenu from "../CSmainmenu";

const CutoutAnimation: React.FC = () => {
  const services = [
    "Complete Script Development",
    "Expert Storyboarding",
    "Voiceover Services",
    "Audio Creation",
    "Character Creation",
  ];

  const benefits = [
    "Affordable Pricing Options",
    "High-quality Services",
    "Superb Infrastructure",
    "Tools and Technologies",
    "Structured Process",
    "Experienced Team",
    "Data Security",
    "Short Turnaround",
  ];

  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Cutout Animation Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Grab the attention of your existing and prospective customers with high-quality cutout animation services starting at just $10/hour.
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
          Nimble Auity is a leading cutout animation service provider, experienced in 2D and 3D animation techniques. Our team uses the latest tools and technologies to create high-quality cutout animations that captivate your target audience.
        </p>
        <p>
          From concept development to delivery, Nimble ensures personalized cutout animation services tailored to your business needs.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Cutout Animation Services We Offer
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          {services.map((service) => (
            <div key={service}>
              <h3 className="font-semibold text-xl mb-2">{service}</h3>
              <p>
                {service === "Complete Script Development" &&
                  "We convert your idea, story, or concept into a high-quality script for seamless animation."}
                {service === "Expert Storyboarding" &&
                  "Our team prepares detailed storyboards, including angles and transitions, ensuring a smooth narrative flow."}
                {service === "Voiceover Services" &&
                  "Seasoned voice-over artists provide high-quality audio, with multilingual options for global reach."}
                {service === "Audio Creation" &&
                  "Our audio engineers use advanced digital audio workstations to produce clear and impactful sound effects."}
                {service === "Character Creation" &&
                  "Talented artists develop personalized characters that effectively communicate your brand's story."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Other Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
          <li>Animated Feature Films Services</li>
          <li>Architectural Animation Services</li>
          <li>Product Animation Services</li>
          <li>Stop Motion Animation Services</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Cutout Animation Services?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Client Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-1">
              Hologram Animation Services for Swiss Natural Product Dealer
            </h3>
            <p>
              Nimble animators used 3DS Max & Maya to create high-resolution holograms from PDF and PSD files, delivering on-time and within budget.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-1">
              2D Animation Services for UK-based Children's Book Writer
            </h3>
            <p>
              Nimble provided professional 2D animation services, delivering exceptional results with quick turnaround time.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Your Cutout Animation Today</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity to create captivating cutout animations that attract, engage, and convert your target audience efficiently.
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

export default CutoutAnimation;
