import React from "react";
import CSmainmenu from "../CSmainmenu";

const ImageIllustrationServices: React.FC = () => {
  return (
    <main className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-100 to-pink-100 py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Image Illustration Services
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto">
          Captivate your audience and take your business to the next level by weaving brand stories using
          unique image illustrations at rates starting at just{" "}
          <span className="font-semibold">$12/hour</span>.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <p>
          It is said a picture speaks a thousand words, but if it's an illustration, then it is much more
          than a simple picture. Illustrators understand and know they need to bring words to life by
          drawing images that are close to the imagination of the readers. At{" "}
          <strong>Nimble Auity</strong>, our talented illustrators and artists create illustrations that
          bring out the character, the meaning, and the emotion. With expansive creativity and experience,
          our team has allowed us to offer a wide spectrum of styles and tones.
        </p>
        <p>
          Our image illustration services allow us to work with our clients on projects like websites,
          magazines, book covers, CGI's, etc. Regardless of the budget you have,{" "}
          <strong>Nimble</strong> will provide you with the skills that you need to get high-quality image
          illustration services.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Image Illustration Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            "Product Illustration",
            "Sports Illustration",
            "Fashion Illustration",
            "Custom Illustration",
            "Scientific Illustration",
            "Medical Illustration",
            "Book Cover Illustration",
            "Storyboard Illustration",
            "Architectural Illustration",
            "Portrait Illustration",
            "Character Illustration",
            "Comic Illustration",
            "Infographics",
            "Poster Illustration",
            "3D Illustration",
            "Guide Illustration",
            "Pop Art Illustration",
            "Personal Touch Illustrations",
            "Intricate Designing",
            "Fine Art Illustrations",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{service}</h3>
              <p className="text-sm">
                Detailed description of {service.toLowerCase()} as provided in Nimble’s service
                documentation.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Image Illustration Process We Follow
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-6 text-center">
          {[
            { step: "01", title: "Scope" },
            { step: "02", title: "Design" },
            { step: "03", title: "Quality Assurance" },
            { step: "04", title: "Development" },
            { step: "05", title: "Delivery" },
          ].map((p, i) => (
            <div key={i} className="p-4 bg-white rounded-xl shadow">
              <div className="text-3xl font-bold text-indigo-600">{p.step}</div>
              <h3 className="mt-2 font-semibold">{p.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Industries We Serve</h2>
        <ul className="grid md:grid-cols-3 gap-4 list-disc list-inside">
          {[
            "Advertising Agencies",
            "Medical Agencies",
            "Magazines",
            "Newspaper",
            "Event Management Companies",
            "Children's Book Publishers",
            "Scientific Communities",
            "Pharmaceutical Companies",
          ].map((item, i) => (
            <li key={i} className="p-3 bg-green-50 rounded">{item}</li>
          ))}
        </ul>
      </section>

      {/* Other Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Other Services You Can Benefit From
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Scientific Illustration Services",
            "Sports Illustration Services",
            "Architectural Illustration Services",
            "Product Illustration Services",
          ].map((service, i) => (
            <span key={i} className="px-4 py-2 bg-gray-100 rounded shadow">
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* Why Nimble Section */}
      <section className="bg-indigo-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Nimble Image Illustration Services?
        </h2>
        <div className="max-w-5xl mx-auto space-y-4">
          <p><strong>Cost-effective Pricing</strong> – Affordable services with the highest standards.</p>
          <p><strong>Original Illustrations</strong> – 100% unique, custom-created illustrations.</p>
          <p><strong>ISO Certification</strong> – High-quality services meeting international standards.</p>
          <p><strong>Experienced Illustrators</strong> – Skilled professionals with years of expertise.</p>
          <p><strong>Dedicated Project Manager</strong> – Real-time updates and communication.</p>
          <p><strong>One-stop Solution</strong> – All illustration needs under one roof.</p>
          <p><strong>World-class Infrastructure</strong> – Secure, reliable, and scalable setup.</p>
          <p><strong>Latest Tools & Technologies</strong> – Intricate, detailed, and appealing artworks.</p>
          <p><strong>Flexibility & Customization</strong> – Tailored services for every client.</p>
          <p><strong>Quick Turnaround Time</strong> – Timely delivery, even for bulk projects.</p>
          <p><strong>Data Security</strong> – Complete confidentiality and secure delivery.</p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Client Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Nimble Provided Prepress and Vector Artwork to a Dublin-based Client
            </h3>
            <p>
              A client from Dublin offshored prepress and vector artwork requirement to us. Our team created
              designs as per the client's expectation and delivered results on time.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Nimble Provided Vector Artwork to US-based Label Designer
            </h3>
            <p>
              A leading US label and sticker designer offshored vector artwork requirement. Our team delivered
              solutions in record time with high quality.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-pink-50 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic max-w-3xl mx-auto">
          "The quality of Artwork delivered during the trial period was exceptional and that helped us to
          decide on our new Nimble Partner from a couple of quotes from companies across the globe."
          <footer className="mt-4 font-semibold">
            – Director of Operations, Leading Pharmaceutical Company, Netherlands
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-200 to-pink-200 py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Nimble Image Illustration Services
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Whether you are a start-up or a Fortune 500 company, our Photo Illustration Services will leave
          you impressed with quick turnaround times and unmatched quality. Let{" "}
          <strong>Nimble</strong> bring your ideas to life with world-class illustrations.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-indigo-700">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default ImageIllustrationServices;
