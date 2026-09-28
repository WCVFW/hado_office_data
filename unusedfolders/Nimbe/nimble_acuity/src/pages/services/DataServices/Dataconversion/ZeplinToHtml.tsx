import React from "react";
import DSmainmenu from "../DSmainmenu";

const ZeplinToHtml: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero */}
      <DSmainmenu/>
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Zeplin to HTML Conversion Services</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Get accurate, SEO-friendly markups and clean code to make your website responsive and accessible — starting at $6/hour.
        </p>
        <div className="mt-6">
          <a href="#contact" className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:opacity-95">
            Get a Free Quote
          </a>
        </div>
      </header>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <p className="text-lg leading-relaxed text-center">
          Zeplin bridges the gap between designers and developers. Nimble Zeplin to HTML conversion to a specialist team so you can focus on strategy while we deliver pixel-perfect, maintainable, and optimized HTML output.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Zeplin to HTML Conversion Services We Offer</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Clean & Accurate Code</h3>
            <p className="text-gray-600">Readable, well-commented HTML that your team can understand and maintain — with interactive comments on demand.</p>
          </article>

          <article className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Responsive Coding</h3>
            <p className="text-gray-600">Pixel-perfect responsive layouts that render beautifully on phones, tablets and desktops.</p>
          </article>

          <article className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Search Engine Semantic Markups</h3>
            <p className="text-gray-600">Semantic HTML tags and structured markup to improve SEO and machine readability.</p>
          </article>

          <article className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Accurate Markups</h3>
            <p className="text-gray-600">Pixel-perfect translation of Zeplin designs into HTML while preserving the original look and feel.</p>
          </article>

          <article className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Image & Asset Optimization</h3>
            <p className="text-gray-600">Optimized images and assets (srcset, responsive sizes) for faster load times and better UX.</p>
          </article>

          <article className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Customization & Widgets</h3>
            <p className="text-gray-600">Customizable widgets and easy-to-use controls so non-technical users can tweak UI elements with clicks.</p>
          </article>

          <article className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
            <p className="text-gray-600">Ongoing support during and after delivery — we answer queries and help integrate the output into your stack.</p>
          </article>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our Zeplin to HTML Conversion Process</h2>
        <ol className="space-y-6 max-w-4xl mx-auto text-lg">
          <li><strong>01. Requirement Analysis:</strong> We discuss scope, timeline and decide the team that will handle your project.</li>
          <li><strong>02. Planning & Implementation:</strong> We create a blueprint and begin converting designs into HTML with best practices.</li>
          <li><strong>03. Feedback & Corrections:</strong> You review the first draft, we refine based on your feedback and run QA.</li>
          <li><strong>04. Delivery:</strong> Final deliverables are handed over and we remain available for post-delivery support.</li>
        </ol>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {[
            { value: "40%", label: "Cost Reduction" },
            { value: "8-24 Hrs", label: "Faster Turnaround" },
            { value: "500+", label: "Satisfied Clients" },
            { value: "350+", label: "Skilled Experts" },
            { value: "99%", label: "Accuracy" },
            { value: "21", label: "Years Experience" },
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="text-2xl font-bold text-indigo-600">{s.value}</div>
              <div className="mt-2 text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Nimble Acuity for Zeplin to HTML?</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Customizable Services</h3>
            <p className="text-gray-600">Pick only what you need. Services tailored for your budget and goals.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">Transparent pricing: pay only for selected services.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">ISO Certified</h3>
            <p className="text-gray-600">Processes aligned with international quality standards.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Robust Infrastructure</h3>
            <p className="text-gray-600">Large in-house team and modern tools for precise delivery.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">24/7 Availability</h3>
            <p className="text-gray-600">Round-the-clock support across time zones.</p>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Other Services You Can Benefit From</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">Data Entry Services</div>
          <div className="bg-white p-6 rounded-2xl shadow">Data Conversion Services</div>
          <div className="bg-white p-6 rounded-2xl shadow">Data Processing Services</div>
          <div className="bg-white p-6 rounded-2xl shadow">Catalog Conversion Services</div>
        </div>
      </section>

      {/* Case Studies & Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Client Success Stories</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold">XML Conversion for a Norwegian Publisher</h3>
            <p className="text-gray-600 mt-2">Delivered compliant XML conversions quickly for an academic publisher in Norway.</p>
            <a className="inline-block mt-4 text-indigo-600 font-medium" href="#">Read more →</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold">PDF to Excel for a Florida Professor</h3>
            <p className="text-gray-600 mt-2">Converted complex PDFs into clean Excel datasets for academic research use.</p>
            <a className="inline-block mt-4 text-indigo-600 font-medium" href="#">Read more →</a>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 p-6 rounded-xl text-center">
          <blockquote className="italic text-gray-700 max-w-3xl mx-auto">“We were very satisfied with the quality of service Nimble Acuity provided. They were able to meet our requests with great professionalism and flexibility.”</blockquote>
          <p className="mt-4 font-semibold">— Spokesperson, Online health lessons company in Canada</p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Nimble Zeplin to HTML Conversion?</h2>
        <p className="max-w-2xl mx-auto mb-6">Convert your Zeplin projects to clean, maintainable HTML with expert support and fast turnaround.</p>
        <a href="#" className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow">Contact Us</a>
      </section>
    </div>
  );
};

export default ZeplinToHtml;
