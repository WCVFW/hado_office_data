import React from "react";
import CSmainmenu from "../CSmainmenu";

const WebDesign: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <section className="w-full min-h-screen bg-gray-50 text-gray-800 px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-green-700">
            Outsource Web Design Services
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            Web Design Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Web designs which are innovatively created based on your specific
            requirements and brand philosophy can be a valuable advertising tool for
            generating new business. Having a good website is one of the best ways to
            communicate with your potential customers, partners, etc. However,
            maintaining a team of in-house creative web designers can not only add up to
            your overhead costs, but might also not yield the desired results.
          </p>
        </header>

        {/* Intro */}
        <div className="space-y-4">
          <p>
            Therefore, the best option is to outsource web design services that precisely
            cater to your needs. Professional website design experts will come up with
            captivating designs that instantly appeal to the customers who visit your
            website. At <span className="font-semibold">Nimble Auity</span>, we offer
            professional web design services that precisely cater to the needs of our
            clients. We also provide webpage layout design services that create unique
            website visual identity.
          </p>
        </div>

        {/* Services */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-green-700">
            Website Graphic Design Services We Offer
          </h3>
          <p>
            We carry extensive experience in website designing and provide our clients
            with e-commerce and creative web designs that attract the customers. Our web
            designs encompass your marketing and brand message while making the designs
            look totally enticing to your target audience. Following are some of the web
            design services we offer -
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Flat Website Design",
                desc: "A minimalistic design featuring bright colors, crisp edges, and open space with flat two-dimensional illustrations. Simple yet impactful designs that uphold your brand and convey your message."
              },
              {
                title: "Single-page Website Design",
                desc: "Highly effective for short attention spans. Although not suited for every purpose, refined designs with interesting layouts make single-page sites powerful."
              },
              {
                title: "Typographic Web Design",
                desc: "Typography impresses users even before they read a word. Carefully chosen fonts elicit emotions like tone of voice. Optimized typography improves loading speed across devices."
              },
              {
                title: "Simple Minimalistic Website Design",
                desc: "Highlights the essence of a website by removing distractions and showcasing only the most important elements in their purest form."
              },
              {
                title: "Illustrative Website Design",
                desc: "Illustrations convey ideas visually and influence purchase decisions. Balanced, rich designs make elements stand out without overwhelming users."
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-lg font-semibold text-green-600 mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-green-700">
            Why Should You Choose Our Web Design Services?
          </h3>
          <p>
            At <span className="font-semibold">Nimble Auity</span>, we create custom web
            designs that address your business requirements and fully cater to your
            needs. This ensures all clients get visually compelling designs. You can
            also outsource e-commerce web design requirements to us for persuasive,
            user-focused experiences. Advantages include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Affordable Pricing Structure:</span>{" "}
              Flexible and affordable pricing while reducing operational costs.
            </li>
            <li>
              <span className="font-semibold">On-time Delivery:</span> Serving global
              clients with punctual project delivery every time.
            </li>
            <li>
              <span className="font-semibold">Expert Web Designers:</span> Skilled,
              experienced designers deliver unique, top-quality solutions at minimal
              costs.
            </li>
            <li>
              <span className="font-semibold">Complete Operational Control:</span> Full
              transparency and timely updates throughout the project lifecycle.
            </li>
            <li>
              <span className="font-semibold">State-of-the-art Infrastructure:</span>{" "}
              High-quality designs supported by modern infrastructure.
            </li>
            <li>
              <span className="font-semibold">Leverage Latest Technologies:</span> Use
              of cutting-edge tools for unique designs that connect with your audience.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="bg-green-100 p-8 rounded-2xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-green-700">
            Get Professional Web Design Services at Nimble Auity
          </h3>
          <p>
            Nimble Auity is a leading outsourcing company offering creative design and
            web design services from India to global clients for over 26+ years. Our
            expert designers first understand your requirements and then craft custom
            solutions. Our thoughtful web designs ensure engagement, traffic, and
            conversions. Whether small or large, our global experience and diverse
            designs are exactly what you need.
          </p>
          <p className="font-semibold text-gray-800">
            If you are looking for professional and innovative web design services,
            reach out and discuss your design requirements with us today.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
            Contact Us
          </button>
        </section>
      </div>
    </section>
    </div>
  );
};

export default WebDesign;
