import React from "react";
import CSmainmenu from "../CSmainmenu";

const BookIllustrationServices: React.FC = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 py-16 px-6 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
          Nimble Book Illustration Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Choose our book illustration services for a strategic blend of
          full-page and spot illustrations, enhancing reader engagement without
          overwhelming the text.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-12 leading-relaxed space-y-6">
        <p>
          Are you in search of professional and captivating illustrations for
          written content? Our expert book illustration services are at your
          disposal, offering a blend of technical knowledge and artistic
          creativity to enrich narratives. Covering a vast array of genres, from
          technical and scientific to narrative and concept art books, our team
          of illustrators exhibit proficiency in a myriad of illustration
          techniques.
        </p>
        <p>
          They employ line art, spot illustrations, and full-page artwork,
          depending on the requirements and context of the text. The chosen
          techniques serve to underscore key points, simplify complex ideas, and
          infuse aesthetic appeal within the content. With a wealth of industry
          experience, we stay ahead of the curve, keeping up-to-date with the
          latest trends and styles in book illustration.
        </p>
        <p>
          Enable your clients with illustrations that enhance understanding and
          enrich the reading experience. Choose our services now, and let's
          create captivating books with illustrations together.
        </p>
      </div>

      {/* Success Stories */}
      <div className="bg-indigo-50 py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              Case Study on Illustration Services to US-based Client
            </h3>
            <p>
              US Illustration Company Cuts Costs by 60% with Our High-Speed
              Services. Leveraging a dedicated team and Adobe Illustrator, we
              delivered 50 daily Simpsons-themed illustrations, reducing the
              client's costs by 60%.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              Case Study on Illustration Services for Apparel Manufacturer
            </h3>
            <p>
              We Delivered 60% Cost Reduction for Paris-based Apparel
              Manufacturer. A prominent Parisian men's apparel firm achieved a
              60% cost-saving by using our efficient, high-quality illustration
              services for their t-shirt design templates.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto px-6 lg:px-20 py-12">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
          Testimonials
        </h2>
        <blockquote className="italic text-gray-700 border-l-4 border-indigo-500 pl-4">
          "The quality of artwork delivered during the trial period was
          exceptional and that helped us to decide on our new Nimble Partner
          from a couple of quotes from companies across the globe."
          <footer className="mt-2 font-semibold text-indigo-700">
            Director - Operations, Leading Pharmaceutical Company in Netherlands
          </footer>
        </blockquote>
      </div>

      {/* Services */}
      <div className="bg-indigo-50 py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-8">
          Harmonizing Aesthetics and Narratives with Book Illustration Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Image Illustration Services",
              desc: "Creating and manipulating digital images, applying color theory and composition, producing message-conveying illustrations.",
            },
            {
              title: "Comic Book Illustration Services",
              desc: "Excelling in character design, panel layout, and storytelling with tools like Clip Studio Paint and Procreate.",
            },
            {
              title: "Educational Illustration Services",
              desc: "Age-appropriate design with Adobe Illustrator and Photoshop, facilitating better understanding through visuals.",
            },
            {
              title: "Magazine Illustration Services",
              desc: "Industry-leading tools for precision, tailored designs, and eye-catching magazine art to convey messages effectively.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-12">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
          The Strategic Process Flow for Delivering Book Illustration Services
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Vision Interpretation – align illustrations with narrative tone.</li>
          <li>Storyboard Creation – visualize story flow & placement.</li>
          <li>Initial Sketch Design – provide artistic direction.</li>
          <li>Art Refinement – add details & vibrant colors.</li>
          <li>Review and Modification – refine with your feedback.</li>
          <li>Illustration Delivery – high-resolution, print-ready artwork.</li>
        </ol>
      </div>

      {/* Why Choose Us */}
      <div className="bg-indigo-100 py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
          Why Choose Nimble for Your Book Illustration Services?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
          <li>Expert illustration team proficient in multiple techniques.</li>
          <li>Tailored illustration styles from minimalistic to detailed.</li>
          <li>Precision-driven process ensuring visual consistency.</li>
          <li>Timely deliverables with advanced project management tools.</li>
          <li>Complete publishing support including editing & e-book conversion.</li>
          <li>Client-centered collaboration for refined outcomes.</li>
          <li>Cost-effective solutions with competitive pricing.</li>
        </ul>
      </div>

      {/* Industries */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-12">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
          Industries We Collaborate With
        </h2>
        <p className="text-gray-700">
          We extend our custom book illustration services to an array of
          industries, offering custom illustrated books that cater to unique
          aesthetic and storytelling needs.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-gray-800 font-semibold">
          {[
            "Publishing",
            "Advertising & Marketing",
            "Education",
            "Entertainment",
            "Fashion",
            "Gaming",
            "Tech",
          ].map((industry, idx) => (
            <div
              key={idx}
              className="bg-indigo-50 p-4 rounded-lg shadow text-center"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-indigo-50 py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
          Additional Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Graphic Design Services",
              desc: "Custom graphics that enhance aesthetics and add value to viewers.",
            },
            {
              title: "Storyboard Illustration Services",
              desc: "Sequential artwork to aid story planning and coherence.",
            },
            {
              title: "Writing Services",
              desc: "Engaging, grammatically accurate content for manuscripts.",
            },
            {
              title: "Advertising Services",
              desc: "Digital marketing strategies to boost brand visibility.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="text-center py-16 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">
          Nimble Book Illustration Services
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Book illustrations are a vital part of storytelling, often determining
          how readers perceive a narrative. As a leading provider, Nimble offers
          a comprehensive range of high-quality book illustration services,
          including children's books, educational textbooks, graphic novels, and
          cover designs.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default BookIllustrationServices;
