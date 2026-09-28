import React from "react";
import CSmainmenu from "../CSmainmenu";

const SalesPitchVideoEditing: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Sales Pitch Video Editing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Our sales pitch video editing ensures every video you send to prospects has the
          best presentation and quality to drive them to sales decisions — starting from{" "}
          <span className="font-semibold">$12 per hour</span>.
        </p>
      </div>

      {/* Intro Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          Telesales has become old-school marketing now. Today, media is helping marketers
          build customer relationships to increase the impact several-fold. So if you want
          to convert customers who are looking for value in an easier language, Nimble
          sales pitch video editing services are the solution. We turn your pitch into
          successful videos that get responses from the segment that matters most.
        </p>
        <p>
          Nimble Auity understands the importance of a dynamic and powerful brand voice.
          With our proven framework aimed at attention-grabbing messaging, we tailor your
          content to achieve specific business goals.
        </p>
      </div>

      {/* Services We Offer */}
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Sales Pitch Video Editing Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Corporate Presentation",
              desc: "We accelerate prospect conversion through custom videos for social media and other platforms."
            },
            {
              title: "Noise Reduction and Audio Manipulation",
              desc: "We remove disturbances, fix scratchy audio, and ensure accurate lip sync."
            },
            {
              title: "Audio Video Syncing",
              desc: "Multilingual audio-video syncing for a global audience with precision matching."
            },
            {
              title: "Title Animation Support",
              desc: "We add 3D texts, sliding animations, color transitions, and more."
            },
            {
              title: "Video Stitching Solution",
              desc: "Merge clips, adjust perspective, and create unique blended effects."
            },
            {
              title: "Multi-cam Editing",
              desc: "Sync narration, align clips, and adjust camera angles for impactful delivery."
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
          Why Choose Nimble Auity?
        </h2>
        <ul className="space-y-4 list-disc pl-6">
          <li>Cost-efficient pricing delivering maximum value.</li>
          <li>ISO certified video editing house adhering to global standards.</li>
          <li>High data security with strict confidentiality measures.</li>
          <li>Use of the latest tools and software for professional editing.</li>
          <li>Fast turnaround times to meet tight schedules.</li>
          <li>Scalable team to handle projects of any size.</li>
          <li>24/7 customer support via phone, email, and chat.</li>
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
              Nimble Provided Live Video Editing to a Swedish Film Production House
            </h3>
            <p>
              A leading film production company from Sweden needed robust and affordable
              live video editing. They outsourced the project to Nimble Auity and had the
              results delivered on time.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Italian Wedding Photographer Gets High-quality Editing
            </h3>
            <p>
              After a trial service, the client contracted seventy wedding video and photo
              editing projects to Nimble — reducing costs by 70% without compromising on
              quality.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg">
          “I am overwhelmed with the support & level of understanding of your team. The
          effort you spent working on my DTP project diligently with a very quick turnaround
          has helped my company reap immense profits.”
        </blockquote>
        <p className="mt-4 font-semibold">
          — Graphics Manager, Leading Electronics Company from South Korea
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-indigo-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6">
          Wow your marketing audience through high-quality sales pitch videos, edited by
          professional video editors at Nimble Auity.
        </p>
        <form className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4 text-gray-900 bg-white p-6 rounded-2xl shadow">
          <input type="text" placeholder="Name*" className="p-3 rounded border" />
          <input type="email" placeholder="Email*" className="p-3 rounded border" />
          <input type="tel" placeholder="Phone*" className="p-3 rounded border md:col-span-2" />
          <textarea
            placeholder="Enter your requirements*"
            className="p-3 rounded border md:col-span-2"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded md:col-span-2"
          >
            Get a Free Quote
          </button>
        </form>
      </div>
    </section>
  );
};

export default SalesPitchVideoEditing;
