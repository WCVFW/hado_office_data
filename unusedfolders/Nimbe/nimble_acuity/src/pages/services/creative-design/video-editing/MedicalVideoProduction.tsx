import React from "react";
import CSmainmenu from "../CSmainmenu";

const MedicalVideoProduction: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Medical Video Production Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get exceptional and tailor-made healthcare videos to communicate your
          message to patients and for marketing purposes — starting from{" "}
          <span className="font-semibold">$10 per hour</span>.
        </p>
      </div>

      {/* Intro Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          The medical industry has begun to notice the vast marketing potential
          that healthcare videos have. Medical device video production is a
          promising strategy that helps break down complex ideas into easily
          understandable visuals. It also allows healthcare firms to leverage
          them for marketing through internet platforms to attract more patients.
        </p>
        <p>
          Unfortunately, most medical professionals lack the expertise to create
          videos. Thus, the best option is to partner with an expert like Nimble
          Auity. For over 26 years, we’ve been delivering medical video
          production services to healthcare organizations — creating animation,
          3D, and explainer videos that deliver your message thoroughly.
        </p>
      </div>

      {/* Services We Offer */}
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Medical Video Production Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Healthcare Video Production for Business",
              desc: "We create videos to educate patients on insurance, how it works, and how to use medical devices."
            },
            {
              title: "Public Health and Safety Videos",
              desc: "We produce awareness videos (live or animated) for public health campaigns such as Covid-19."
            },
            {
              title: "Medical Process Explainer Videos",
              desc: "High-quality explainer videos for students, patients, and healthcare procedures using animation."
            },
            {
              title: "Storytelling Videos",
              desc: "Bring important healthcare stories like organ donation awareness to life with visual storytelling."
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble Auity for Healthcare Video Production?
        </h2>
        <ul className="space-y-4 list-disc pl-6">
          <li>ISO certified partner delivering global quality standards.</li>
          <li>Cost-effective and customized pricing options.</li>
          <li>Quick turnaround without compromising quality.</li>
          <li>ISMS-certified data security protocols.</li>
          <li>Dedicated project manager as your single point of contact.</li>
          <li>Teams across multiple delivery centers for faster outputs.</li>
          <li>24/7 customer support through email and phone.</li>
        </ul>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Nimble Provided Video Editing to a Leading Italian Studio
            </h3>
            <p>
              A leading Italian studio needed video clipping and editing for
              100,000 drone videos. Nimble Auity delivered best-quality services
              on time and within budget.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Nimble Provided Vector Artwork Services to a US-based Label Designer
            </h3>
            <p>
              A US-based label designer required cost-effective vector artwork.
              Nimble delivered high-quality services that met their exact needs.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg">
          “The quality of artwork delivered during the trial period was
          exceptional and helped us finalize Nimble Auity as our trusted
          outsourced partner.”
        </blockquote>
        <p className="mt-4 font-semibold">
          — Director of Operations, Leading Pharmaceutical Company, Netherlands
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-cyan-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6">
          Looking for a reliable, qualified, and affordable healthcare and
          medical video production company? Nimble Auity is here to help.
        </p>
        <form className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4 text-gray-900 bg-white p-6 rounded-2xl shadow">
          <input type="text" placeholder="Name*" className="p-3 rounded border" />
          <input type="email" placeholder="Email*" className="p-3 rounded border" />
          <input
            type="tel"
            placeholder="Phone*"
            className="p-3 rounded border md:col-span-2"
          />
          <textarea
            placeholder="Enter your requirements*"
            className="p-3 rounded border md:col-span-2"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded md:col-span-2"
          >
            Get a Free Quote
          </button>
        </form>
      </div>
    </section>
  );
};

export default MedicalVideoProduction;
