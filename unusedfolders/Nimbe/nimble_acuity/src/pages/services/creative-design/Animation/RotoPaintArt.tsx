import React from "react";
import CSmainmenu from "../CSmainmenu";

const RotoPaintArt: React.FC = () => {
  const services = [
    "Stereo Conversion",
    "Matte Creation",
    "Effects Painting",
    "Cloning & Touch-Ups",
    "Motion Tracking",
  ];

  const additionalServices = [
    "Graphic Design Services",
    "Animation Services",
    "Audio Editing Services",
    "Video Editing Services",
    "Artwork Services",
    "Storyboard Services",
  ];

  const clientStories = [
    {
      title: "Vector Artwork and Prepress Services to an Irish Client",
      desc: "A leading Dublin-based creative services firm required accurate and high-quality prepress and vector artwork tasks to be completed. Nimble Auity provided the required services at cost-effective rates and within a quick turnaround time.",
    },
    {
      title: "Unique Vector Artwork Services to an American Label Designer",
      desc: "A leading American designer required flawless and unique vector artwork services, which we provided much to the client's delight.",
    },
  ];

  const benefits = [
    "Faster Turnaround",
    "Skilled & Experienced Technical Team",
    "Uncompromised Quality",
    "Data Security",
    "Affordable Pricing Plans",
  ];

  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          RotoPaint Art Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Leverage Nimble Auity’s RotoPaint art services to transform your videos into stunning animations created using the best VFX and motion graphic tools.
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
          Want to convert average-looking videos into masterpieces with both animation and reality-based elements? Nimble Auity’s expert VFX and RotoPaint team can bring your vision to life, ensuring creative and high-quality animations for any industry.
        </p>
        <p>
          With over 26+ years in animation and VFX, our seasoned animators and designers have helped clients worldwide achieve business goals using cutting-edge tools and artistic expertise.
        </p>
      </div>

      {/* RotoPaint Services */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our RotoPaint Art Services</h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          {services.map((service) => (
            <div key={service} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{service}</h3>
              <p>
                {service === "Stereo Conversion" && "Create amazing stereo conversions using depth maps and advanced VFX techniques to produce visually stunning videos."}
                {service === "Matte Creation" && "Generate precise holdout mattes with mask overlays and professional VFX expertise to enhance your footage."}
                {service === "Effects Painting" && "Add artistic effects using RotoPaint to enhance your videos with automation and creative visuals."}
                {service === "Cloning & Touch-Ups" && "Remove unwanted logos, dust, scratches, and imperfections to deliver polished, professional-quality videos."}
                {service === "Motion Tracking" && "Digitize movement and apply motion tracking to integrate elements seamlessly into your videos."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for RotoPaint Art?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Creative Services</h2>
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          {additionalServices.map((service, idx) => (
            <li key={idx}>{service}</li>
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
      <div className="py-16 px-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Transform Your Videos with Nimble Auity</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Work with our expert team to deliver high-quality RotoPaint art and VFX solutions that bring your vision to life.
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

export default RotoPaintArt;
