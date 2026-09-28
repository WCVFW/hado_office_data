import React from "react";
import CSmainmenu from "../CSmainmenu";

const PictureToVideoEditing: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <section className="bg-white text-gray-800 px-6 md:px-16 py-12">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Picture to Video Editing Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Create a visually stunning video from your pictures by choosing our{" "}
          <span className="font-semibold">picture to video editing services</span>{" "}
          provided at prices starting at{" "}
          <span className="text-green-600">$10/hour</span>
        </p>
      </header>

      {/* Intro */}
      <div className="max-w-5xl mx-auto text-lg text-gray-700 space-y-6 mb-16">
        <p>
          Do you want to turn your photographs into fun, creative video stories
          that you can share with family and friends? Are you looking to partner
          with a reliable and experienced picture to video editing service
          provider that can turn your photos into stunning videos that perfectly
          capture the mood you are looking for? Are you looking to partner with
          a provider of picture to video editing solutions that can provide you
          with many different templates to choose from? If so, you are in the
          right place.
        </p>
        <p>
          <span className="font-semibold">Nimble Auity</span> is a leading
          provider of picture to video editing services in India and abroad and
          can help you with a wide range of picture to video editing
          requirements. Our picture to video editing team uses the latest and
          best software tools and technologies to create stunning videos from
          photos. Whatever be your picture to video editing requirement, our
          professionals will use the most appropriate video maker technology to
          turn your pictures into a compelling visual journey filled with
          effects and audio.
        </p>
      </div>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Picture to Video Editing Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Creating Videos of Your Child's Growth",
              desc: "Transform your child’s photos into creative, high-quality videos that showcase their growth journey using artistic templates.",
            },
            {
              title: "Creating Videos of Your Travel Photos",
              desc: "Convert your holiday photos into long-lasting, artistic videos with templates designed to capture your travel memories.",
            },
            {
              title: "Creating Stunning Videos of Wedding Photographs",
              desc: "Turn your wedding day photos into high-quality videos, or surprise loved ones with special wedding and proposal edits.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-50 py-12 px-6 md:px-16 rounded-2xl max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Nimble Picture to Video Editing Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <ul className="space-y-4 list-disc list-inside">
            <li>Affordable pricing with excellent value for money</li>
            <li>ISO-certified workflows ensuring high-quality output</li>
            <li>World-class infrastructure with modern facilities</li>
            <li>Cutting-edge editing tools and software</li>
          </ul>
          <ul className="space-y-4 list-disc list-inside">
            <li>Systematic and structured editing processes</li>
            <li>26+ years of professional editing experience</li>
            <li>Data security and confidentiality guaranteed</li>
            <li>Fast delivery within stipulated deadlines</li>
          </ul>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Live Video Editing for a Swedish Film Production House
            </h3>
            <p className="text-gray-600">
              A leading Swedish film production firm required high-quality and
              cost-effective live video editing services, which Nimble delivered
              within a short time frame.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Photo & Video Editing for Italian Wedding Photographer
            </h3>
            <p className="text-gray-600">
              A client outsourced seventy weddings, each with 3,000+ images. Our
              team delivered professional-grade photo and video editing services
              at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-6 md:px-16 rounded-2xl max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="text-lg text-gray-700 italic">
          “Thanks for your fast turnaround time, high-quality, and attention to
          detail. We greatly appreciate all your hard work.”
        </blockquote>
        <p className="mt-4 font-semibold">CEO, Digital Marketing Agency, Australia</p>
      </section>

      {/* CTA */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Nimble Picture to Video Editing Services
        </h2>
        <p className="text-gray-700 mb-6">
          If you are looking for professional, reliable, and cost-effective
          picture to video editing services, get in touch with us today!
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
          Contact Us
        </button>
      </section>
    </section>
    </div>
  );
};

export default PictureToVideoEditing;
