import React from "react";
import Imainmenu from "../Imainmenu";

const LossRunProcessing: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Loss Run Processing for Insurance Carriers
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get error-free loss run processing reports created by experienced
          insurance experts in the shortest possible time by partnering with{" "}
          <span className="font-semibold">Nimble Acuity</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6 text-lg">
        <p>
          Struggling to get highly accurate and quick loss run reports for your
          insurance business? Falling short of skilled resources to manage your
          processing needs? Nimble Acuity is your one-stop shop for all
          insurance back-office needs.
        </p>
        <p>
          With 100+ man-years of combined expertise, our team can handle any
          work volume with ease. We ensure delivery of accurate reports within
          the shortest turnaround time.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Loss Run Processing Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Loss Run Report Processing",
              desc: "We generate reports based on client requirements and deliver them with speed and accuracy."
            },
            {
              title: "Distributing Loss Run Reports",
              desc: "We distribute reports to carriers and brokers, ensuring timely and accurate delivery."
            },
            {
              title: "Claims Report Preparation",
              desc: "We analyze claims data, provide accurate insights, and highlight risks for carriers."
            },
            {
              title: "Claims Reports Submission",
              desc: "When loss run reports aren’t available, we prepare and submit claims reports promptly."
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Loss Run Processing Process
        </h2>
        <ol className="max-w-4xl mx-auto space-y-6 text-lg list-decimal list-inside">
          <li>
            <strong>Contact Carriers:</strong> We reach out to carriers to
            procure renewal or migration reports.
          </li>
          <li>
            <strong>Report Analysis:</strong> Reports are analyzed, validated,
            and segregated by claim stage.
          </li>
          <li>
            <strong>Claims Report Preparation:</strong> We prepare detailed
            claim reports highlighting risks.
          </li>
          <li>
            <strong>Liaise with Underwriters:</strong> We work with underwriting
            teams to resolve queries and support evaluations.
          </li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Insurance Commission Management Services",
            "Insurance Reporting Services",
            "Insurance Analytics Services",
            "Insurance BPO Customer Support"
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose Nimble Acuity for Loss Run Processing?
        </h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-lg text-gray-700">
          <li>
            <strong>Flexible Pricing:</strong> Affordable packages tailored to
            your budget.
          </li>
          <li>
            <strong>World-class Infrastructure:</strong> Access to modern tools,
            secure networks, and robust systems.
          </li>
          <li>
            <strong>Experienced Experts:</strong> Qualified insurance
            professionals to meet diverse needs.
          </li>
          <li>
            <strong>Dedicated Manager:</strong> A single point of contact for
            smooth communication.
          </li>
          <li>
            <strong>Data Security:</strong> ISO/IEC 27001:2022 certified to
            ensure your data is safe.
          </li>
          <li>
            <strong>Scalability:</strong> Flexible resources to meet peak
            demand.
          </li>
          <li>
            <strong>Quick Turnaround:</strong> Global delivery centers ensure
            speed.
          </li>
          <li>
            <strong>24/7 Support:</strong> Always-on support for clients across
            time zones.
          </li>
          <li>
            <strong>High Accuracy:</strong> 98%+ accuracy backed by ISO quality
            standards.
          </li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Client Success Stories</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">
              Back-office Operations – Miami-based Client
            </h3>
            <p>
              Helped a Miami-based insurance agency streamline operations with
              cost-effective back-office services.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">
              Back-office Solutions – Insurance Company
            </h3>
            <p>
              Delivered tailored solutions for a health insurance firm, ensuring
              faster processing and reliable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Loss Run Processing Services to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-3xl mx-auto text-lg">
          With skilled experts, advanced tools, and proven processes, we deliver
          cost-effective, accurate, and fast loss run processing services.
        </p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default LossRunProcessing;
