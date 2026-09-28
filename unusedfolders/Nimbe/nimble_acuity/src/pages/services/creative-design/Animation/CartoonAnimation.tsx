import React from "react";
import CSmainmenu from "../CSmainmenu";

const CartoonAnimation: React.FC = () => {
  const services = [
    "2D Cartoon Animation",
    "3D Cartoon Animation",
    "Cartoon Motion Graphics",
    "Cartoon Explainer Videos",
  ];

  const otherServices = [
    "Animatics Services",
    "Visual Effects Services",
    "Rotoscoping Services",
    "Flash Animation Services",
  ];

  const benefits = [
    "Flexible Pricing",
    "Complete Data Security",
    "Quick Delivery",
    "World-class Infrastructure",
    "Round-the-clock Support",
  ];

  const clientStories = [
    {
      title: "2D Animation Services Provided to a UK-Based Children's Book Writer",
      desc: "A leading UK-based children's book writer was looking for high-quality 2D animation services. Nimble's team provided the services within a quick time."
    },
    {
      title: "Hologram Animation Services Provided to a Swiss Natural Product Dealer",
      desc: "Four full-time animation experts created high-quality holograms by making use of 3DS Max & Maya software."
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Cartoon Animation Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Enthrall your audience with Nimble Auity’s outstanding cartoon animations, starting at $10/hour! Bring characters and stories to life with expert animation solutions.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-orange-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get a Free Quote
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          Need high-quality cartoon animations for your brand, storybooks, or animated series? Nimble Auity’s expert cartoon animators cater to unique client requirements, delivering engaging and shareable animations worldwide.
        </p>
        <p>
          Using the latest tools and techniques, our team produces fun, interactive, and customized cartoons that effectively convey your message and boost audience engagement.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Cartoon Animation Services We Offer</h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          {services.map((service) => (
            <div key={service} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{service}</h3>
              <p>
                {service === "2D Cartoon Animation" && "Create visually appealing and easy-to-understand 2D animated cartoon videos using the best industry practices."}
                {service === "3D Cartoon Animation" && "Produce eye-catching 3D cartoon animations with rich visuals and animation effects for maximum engagement."}
                {service === "Cartoon Motion Graphics" && "Incorporate motion graphics to enhance the visual appeal and overall quality of your animation videos."}
                {service === "Cartoon Explainer Videos" && "Deliver cartoon explainer videos to clearly communicate your concepts without losing audience interest."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          {otherServices.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </div>

      {/* Benefits / Why Choose Us */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Cartoon Animation?</h2>
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
          {clientStories.map((story, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-xl mb-1">{story.title}</h3>
              <p>{story.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Create Memorable Cartoon Animations with Nimble Auity</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Ready to bring your concepts and characters to life? Nimble Auity delivers high-quality cartoon animations that engage and entertain your audience.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-orange-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CartoonAnimation;
