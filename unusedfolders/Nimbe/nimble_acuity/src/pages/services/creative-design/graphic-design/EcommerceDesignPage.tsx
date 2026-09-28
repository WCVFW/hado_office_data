import React from "react";
import CSmainmenu from "../CSmainmenu";

const EcommerceDesign: React.FC = () => {
  return (
    <div> <CSmainmenu/>
   
    <section className="w-full min-h-screen bg-gray-50 text-gray-800 px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
       
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-green-700">
            Outsource E-commerce Design Services
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            E-commerce Design Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            A customer focused e-commerce site design is ideal to kick-start sales
            and maximize profits. The design is a key component in providing immersive
            virtual experience to visitors and influencing their buying decision. From
            exceptional product thumbnails to flexible look and feel, every minute
            detail of your website is important for engaging the customers.
          </p>
        </header>

        {/* Intro */}
        <div className="space-y-4">
          <p>
            Creating high-quality e-commerce website designs in-house can add up to your
            overhead costs without adding any value. So, the best option is to outsource
            e-commerce website design to a nimble firm.{" "}
            <span className="font-semibold">Nimble Auity</span> is one of the leading
            e-commerce design companies offering global clients with solutions to
            simplify and streamline the management of their online business.
          </p>
        </div>

        {/* Services */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-green-700">
            E-commerce Design Services We Offer
          </h3>
          <p>
            At <span className="font-semibold">Nimble Auity</span>, we deliver
            performance-driven e-commerce website designs for growing your business.
            From initial design consulting to implementation, our design specialists
            provide you with mind-blowing designs that specifically cater to your
            business needs. We develop custom e-commerce website template designs that
            put your website above its competitors.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Lead-generation Website Designing",
                desc: "A professional e-commerce design is the key to carving opportunities that lead to successful sales. We specialize in customized website designs that help you promote your brand voice and stand apart."
              },
              {
                title: "Mobile e-commerce Website Designing",
                desc: "Today, ~40% of website visits come from mobile devices. If your site is not mobile-ready, you’re losing profits. Nimble Auity also designs mobile and tablet-friendly sites."
              },
              {
                title: "Custom e-commerce Website Designing",
                desc: "The best way to align online retail with today’s requirements is to customize websites with advanced designs. Our designs attract target customers and ensure high engagement."
              },
              {
                title: "Web Portal Designing",
                desc: "E-commerce web designs differ by business type. Our experts customize portals with all the essential details for your business."
              },
              {
                title: "E-commerce Web Template Designing",
                desc: "We design templates that attract and engage your target audience. Templates are customized to suit your business needs."
              },
              {
                title: "Static Website Designing",
                desc: "Our professionals design cost-effective static websites that showcase your business online and can be updated as needed."
              },
              {
                title: "Dynamic Website Designs",
                desc: "We blend innovation and creativity to build dynamic websites that ensure better engagement and generate more leads."
              },
              {
                title: "Graphic E-commerce Design Services",
                desc: "Images speak louder than words. We create graphics that clearly present your products with strong calls-to-action."
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

        {/* Tools */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-green-700">
            E-commerce Website Design Tools We Leverage
          </h3>
          <p>
            With vast design vocabulary and latest tools, we make your website design
            responsive and engaging. Our experts create provoking designs that reflect
            your business. Tools we leverage include:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Atomic</li>
            <li>Macaw</li>
            <li>Avocode</li>
            <li>Pixlr</li>
            <li>Affinity Designer</li>
            <li>Antetype</li>
            <li>Sketch</li>
            <li>Marvel</li>
          </ul>
        </section>

        {/* Why Us */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-green-700">
            Why Should You Outsource E-commerce Design to Us?
          </h3>
          <p>
            Our e-commerce website design services drive engagement, acquire new
            customers, increase profitability, and build loyalty. Partnering with{" "}
            <span className="font-semibold">Nimble Auity</span> assures creativity,
            quality, and affordability.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Flexible Pricing Structure:</span> Custom
              pricing based on your project.
            </li>
            <li>
              <span className="font-semibold">Skilled Designers:</span> Experienced
              designers work exclusively on your project.
            </li>
            <li>
              <span className="font-semibold">Latest Technology:</span> Advanced tools
              for responsive, engaging designs.
            </li>
            <li>
              <span className="font-semibold">Quick Turnaround:</span> On-time delivery
              without delays.
            </li>
            <li>
              <span className="font-semibold">Integrated Design Services:</span>{" "}
              Coordinated web and graphic design for the best results.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="bg-green-100 p-8 rounded-2xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-green-700">
            Choose Nimble Auity for Professional User-centric E-commerce Design Services
          </h3>
          <p>
            Nimble Auity offers a full range of creative design services and e-commerce
            solutions to global clients. With 18+ years in the industry, our designs
            help you stay ahead of competitors while connecting with your clients. Our
            innovative designs ensure customer engagement, new customer acquisition,
            increased profits, and long-term loyalty.
          </p>
          <p className="font-semibold text-gray-800">
            If you’re looking for top-quality e-commerce designs, you’ve come to the
            right place. Get in touch with us now to discuss your project needs.
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

export default EcommerceDesign;
