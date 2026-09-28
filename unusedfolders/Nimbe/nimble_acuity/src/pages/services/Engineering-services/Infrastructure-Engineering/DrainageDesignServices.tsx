import React from "react";
import { CheckCircle, ArrowRight, Quote } from "lucide-react";
import ESmainmenu from "../ESmainmenu";

const DrainageDesignServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
        <ESmainmenu/>
      <section className="relative bg-gradient-to-r from-blue-700 to-green-600 text-white py-20 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Storm & Sewer Drainage Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 opacity-90">
          Get access to high-quality storm and sewer drainage design services
          provided by highly experienced engineers starting at just{" "}
          <span className="font-bold text-yellow-300">$18/hour</span>.
        </p>
        <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition inline-flex items-center gap-2">
          Get Started <ArrowRight size={20} />
        </button>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto py-12 px-6 md:px-12 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Are you looking for high-quality storm and sewer drainage services for
          residential as well as commercial projects? Outsourcing can be
          time-consuming and expensive, but{" "}
          <span className="font-semibold text-green-700">Nimble Acuity</span>{" "}
          makes it simple and affordable. We provide precise, reliable drainage
          design solutions with attention to detail for housing projects,
          commercial developments, and more.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Storm & Sewer Drainage Design Services
          </h2>

          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Drainage Design Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              "Preliminary storm and sewer drainage design",
              "Detailed storm and sewer drainage design",
              "Creation of sustainable drainage systems",
              "Design of sewage treatment plants",
              "Design of stormwater storage",
              "Design of new foul and stormwater flow",
              "Hydraulic simulation modeling",
              "Detailed drainage layouts, schedules, and plans",
              "Implementing sustainable stormwater techniques",
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >
                <CheckCircle className="text-green-600 mb-3" size={28} />
                <p className="text-gray-700">{service}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Drainage Assessment Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Initial drainage assessment",
              "Storm & sewer drainage design audits",
              "Assessment of sewage treatment plants",
              "Assessing sewers for adoption",
              "Assessing existing drainage infrastructure",
              "Calculation of stormwater run-off",
              "Stormwater storage assessment",
              "Capacity check for additional flows",
              "Hydraulic analysis of drainage systems",
              "Simulation of on-line & off-line storage",
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >
                <CheckCircle className="text-green-600 mb-3" size={28} />
                <p className="text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gradient-to-r from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Other Services You Can Benefit From
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Land Development Design Services",
              "Town Planning Services",
              "Revit Modeling Services",
              "Laser Scan to BIM Services",
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition"
              >
                <p className="font-semibold text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Nimble Acuity?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Affordable pricing with hourly & FTE models",
              "High-quality ISO-certified services",
              "Robust infrastructure & disaster recovery",
              "Cutting-edge tools & technologies",
              "Structured, proven design process",
              "26+ years of engineering experience",
              "Strong data security (FTP, VPN, GDPR-compliant)",
              "Quick turnaround time",
            ].map((point, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition"
              >
                <CheckCircle className="text-green-600 mb-3" size={28} />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-10">
            Client Success Stories
          </h2>
          <div className="space-y-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">
                Nimble Acuity Provided MEP Design & Drafting to an Australian
                Company
              </h3>
              <p className="text-gray-700">
                We delivered advanced MEP design and drafting services to an
                Australian electric services firm, meeting all quality standards
                with precision.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">
                Nimble Acuity Provided BIM Services to Singapore Technology
                Giant
              </h3>
              <p className="text-gray-700">
                A top Singapore-based company required BIM modeling services,
                which we delivered with high accuracy and speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Quote size={40} className="mx-auto text-green-600 mb-4" />
          <blockquote className="italic text-lg text-gray-700 leading-relaxed">
            “Hyde Engineering is extremely satisfied with Nimble Acuity’s
            services. All our deadlines have been met and they have exceeded our
            expectations in quality. We truly consider them a valuable part of
            our team.”
          </blockquote>
          <p className="mt-4 font-semibold text-gray-900">
            — Spokesperson, Oil Exploration Company (US)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Nimble Your Storm & Sewer Drainage Projects
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
          With 26+ years of expertise, Nimble Acuity delivers top-quality storm
          and sewer drainage design services to global clients. Get in touch and
          let’s build sustainable, reliable, and efficient drainage solutions
          together.
        </p>
        <button className="px-10 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition inline-flex items-center gap-2">
          Contact Us <ArrowRight size={22} />
        </button>
      </section>
    </div>
  );
};

export default DrainageDesignServices;
