import React from "react";
import CSmainmenu from "../CSmainmenu";

const OphthalmologyIllustration: React.FC = () => {
  return (
    <main className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Outsource Ophthalmology Illustration Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Avail high-quality Ophthalmology illustrations from experienced illustrators to educate patients, doctors at prices starting at just <span className="font-semibold">$10/hour</span>
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <p>
          Whether you're teaching ophthalmology or practicing it, proper illustrations are essential. 
          Not only must they be clear and detailed, but they must be accurate, especially when you're educating someone else. 
          The eyes are particularly tricky to work with, too, as they are so small and intricate. 
          This means a lot of time and skill is required to create good illustrations, which is not something everyone has both of. 
          It also requires knowledge of anatomy.
        </p>
        <p>
          <strong>Nimble Auity</strong> provides ophthalmology illustrations following the exact medical specifications and requirements. 
          With a team of experienced illustrators backed by subject-matter experts, outsourcing ophthalmology illustration to <strong>Nimble</strong> 
          can provide many benefits along with cost and quality. No additional work or editing will be needed when you work with our ophthalmological illustrations.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Ophthalmology Illustration Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Surgical Illustration",
              desc: "Eye surgery is a precise and delicate procedure, and there is very little room for error..."
            },
            {
              title: "Neuro Illustration",
              desc: "Neuro-ophthalmology is a special branch that deals with eye issues related to the nervous system..."
            },
            {
              title: "Glaucoma Ophthalmology Illustration",
              desc: "Glaucoma occurs when fluid builds up at the front of your eye and damages the optic nerve..."
            },
            {
              title: "Plastic Surgery Illustration",
              desc: "There are many different kinds of plastic surgery for the eye. Some are reconstructive, others cosmetic..."
            },
            {
              title: "Pediatric Ophthalmology",
              desc: "Some eye conditions only affect children and require unique illustrations with child-specific procedures..."
            },
            {
              title: "Retina Illustration",
              desc: "The retina is a small but vital part of the eye with many potential issues, requiring high precision illustrations..."
            }
          ].map((service, i) => (
            <div key={i} className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Other Services You Can Benefit From</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {["Product Illustration Services", "Book Illustration Services", "Scientific Illustration Services", "Sports Illustration Services"].map((item, i) => (
            <li key={i} className="p-4 bg-green-50 rounded-xl shadow hover:shadow-md">{item}</li>
          ))}
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Benefits of Outsourcing Ophthalmology Illustration Services to Nimble
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <p><strong>You'll save time and money</strong> – focus on other parts of your project while we handle illustrations.</p>
          <p><strong>Everything will be accurate</strong> – our professionals ensure medical precision and clarity.</p>
          <p><strong>You can use them with confidence</strong> – once complete, illustrations are reliable and ready to use.</p>
          <p><strong>They'll look great</strong> – accuracy combined with aesthetic appeal for students, patients, and professionals.</p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Client Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold mb-2">Nimble Provided Paris-based Men's Apparel Manufacturer Illustration Services</h3>
            <p>We provided illustrations for 200 images, delivering four images per day via Dropbox in EPS and PDF formats, resulting in 60% cost savings.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold mb-2">Nimble Provided Illustrations for a Denmark-based Writer</h3>
            <p>A leading Denmark-based writer required high-quality illustrations for a children's book. Our team delivered very high-quality and affordable services.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic max-w-3xl mx-auto">
          "Thank you for the fast turnaround time and attention to detail. We highly appreciate your hard work."
          <footer className="mt-4 font-semibold">– CEO, Digital Marketing Agency, Australia</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-200 to-blue-200 py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Choose Nimble For Ophthalmology Illustration Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          With so much pressure on medical illustrations to contain correct images and information, creating them can be a stressful job. 
          Let the creative and capable professionals at <strong>Nimble</strong> take care of it and take the weight off your shoulders.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-green-700">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default OphthalmologyIllustration;
