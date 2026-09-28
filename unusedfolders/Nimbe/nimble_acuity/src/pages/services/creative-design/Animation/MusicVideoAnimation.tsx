import React from "react";
import CSmainmenu from "../CSmainmenu";

const MusicVideoAnimation: React.FC = () => {
  const services = [
    "Lyric Video Services",
    "Promo Video Services",
    "2D Animation Video Services",
    "3D Animation Video Services",
    "2.5D Animation Video Services",
    "Black & White Video Animation Services",
    "Combination of Animation and Live-action",
  ];

  const processSteps = [
    "Creative Brief",
    "Script",
    "Storyboard",
    "Characters",
    "Animation & SFX",
    "Quality Assurance/Testing",
    "Finalization",
  ];

  const benefits = [
    "Cost-effective Music Video Animation Service Provider",
    "ISO/ISMS Certified Music Video Animation Service Provider",
    "Access to Highly Skilled Professionals",
    "100% Unique Content",
    "Help Develop Your Ideas",
    "Fast Turnaround Time",
    "HD Animated Music Video",
    "24/7 Customer Support",
    "Single Point of Contact",
    "World Class Infrastructure",
    "High Scalability",
  ];

  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Music Video Animation Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Make your video stand out and give it a sense of character with professional music video animation services starting at $10/hour.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-pink-500 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get a Free Quote
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          Animation and music videos have become a crucial part of online video content promotion. Nimble Auity provides professional 2D, 3D, and 4D animation for music videos, helping artists and brands create engaging, memorable visuals to promote their music.
        </p>
        <p>
          Whether it is a lyric video, a promotional clip, or a full animation production, our expert team can craft videos that perfectly match your song's style, theme, and narrative.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Music Video Animation Services We Offer
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          {services.map((service) => (
            <div key={service} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{service}</h3>
              <p>
                {service === "Lyric Video Services" && "Cost-effective videos that allow fans to sing along and increase engagement on social media."}
                {service === "Promo Video Services" && "Promotional music videos for marketing your music on multiple social media platforms."}
                {service === "2D Animation Video Services" && "Bring music and ideas to life with two-dimensional motion graphics that captivate your audience."}
                {service === "3D Animation Video Services" && "Realistic and detailed animations with depth to leave a lasting impression."}
                {service === "2.5D Animation Video Services" && "Combination of 2D and 3D elements for a unique animated visual experience."}
                {service === "Black & White Video Animation Services" && "Stylized black & white music videos for a distinctive artistic effect."}
                {service === "Combination of Animation and Live-action" && "Blending live-action footage with animation to enhance storytelling and visual impact."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Music Video Animation Process We Follow</h2>
        <ul className="max-w-4xl mx-auto list-decimal list-inside space-y-4 text-gray-700">
          {processSteps.map((step, index) => (
            <li key={index}>
              <span className="font-semibold">{step}:</span> 
              {step === "Creative Brief" && " Provide details about your song, concept, sketches, and video length."}
              {step === "Script" && " Our scriptwriters create engaging drafts for your approval."}
              {step === "Storyboard" && " We break the script into scenes and visualize each segment."}
              {step === "Characters" && " Custom character designs are created and approved for each scene."}
              {step === "Animation & SFX" && " All elements are blended to produce the animated music video."}
              {step === "Quality Assurance/Testing" && " Testing across devices, OS, and browsers for optimal performance."}
              {step === "Finalization" && " Delivery of the final video, with revisions if requested."}
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
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Music Video Animation Services?</h2>
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
              Four full-time animation experts created high-quality holograms using 3DS Max & Maya software.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Create Your Animated Music Video Today</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity to produce high-quality, unique, and engaging animated music videos in 2D, 3D, 4D, and more.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-pink-500 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default MusicVideoAnimation;
