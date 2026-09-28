import React from "react";
import CSmainmenu from "../CSmainmenu";

const VlogVideoEditing: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <section className="bg-white text-gray-800 px-6 md:px-16 py-12">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Outsource Vlog Video Editing Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Convert your raw footage into beautiful vlogs by partnering with{" "}
          <span className="font-semibold">Outsource2india</span> at prices
          starting at <span className="text-green-600">$10/hour</span>
        </p>
      </header>

      {/* Intro */}
      <div className="max-w-5xl mx-auto text-lg text-gray-700 space-y-6 mb-16">
        <p>
          Do you have raw vlog footage that you would like to convert into
          professional-grade vlogs? Do you need help with editing your vlogs or
          other YouTube videos? Are you finding that you are having fun while
          shooting your vlogs but there is too much raw footage for you to edit
          alone? Are you looking to partner with a reliable and experienced
          provider of vlog video editing services so that you can better focus
          your time on creating more interesting videos? If so, you are in the
          right place.
        </p>
        <p>
          <span className="font-semibold">Outsource2india (O2I)</span> is a
          leading vlog video editing service provider and can help you convert
          your raw footage into extremely high-quality and interesting vlogs
          that are sure to keep your audience enthralled. Irrespective of
          whether you are a business owner, marketing professional, or just an
          individual with a YouTube channel, we can help you because video
          editing is what we excel at.
        </p>
      </div>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Vlog Video Editing Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Professional Vlog Video Editing",
              desc: "We provide specialist editors, streamlined workflows, and quick turnaround times with direct client collaboration.",
            },
            {
              title: "Basic Vlog Video Editing",
              desc: "Covers ~30 mins raw footage: pro cuts, transitions, color correction, sound adjustments, music, and headers.",
            },
            {
              title: "Advanced Vlog Video Editing",
              desc: "For footage over 30 mins: includes basic features plus photos, animated text, and custom titles.",
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
          Why Outsource Vlog Video Editing Services to Outsource2india?
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <ul className="space-y-4 list-disc list-inside">
            <li>Affordable pricing with bulk discounts</li>
            <li>ISO-certified, high-quality editing processes</li>
            <li>Advanced infrastructure & disaster recovery</li>
            <li>Use of latest vlog editing tools</li>
          </ul>
          <ul className="space-y-4 list-disc list-inside">
            <li>Structured, systematic workflow</li>
            <li>26+ years of editing expertise</li>
            <li>Data security with safe storage</li>
            <li>Fast turnaround times</li>
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
              cost-effective live video editing services, which we delivered
              quickly.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Photo & Video Editing for Italian Wedding Photographer
            </h3>
            <p className="text-gray-600">
              Edited 70 weddings with 3,000+ images each, delivering
              professional-grade photo and video editing services.
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
          Outsource Vlog Video Editing Services to Outsource2india
        </h2>
        <p className="text-gray-700 mb-6">
          If you are looking for professional, reliable, and cost-effective vlog
          video editing services, get in touch with us today!
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
          Contact Us
        </button>
      </section>
    </section>
    </div>
  );
};

export default VlogVideoEditing;
