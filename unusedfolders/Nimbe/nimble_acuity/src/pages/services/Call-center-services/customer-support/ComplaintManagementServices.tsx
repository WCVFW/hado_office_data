import React from "react";
import { CheckCircle, Phone, Mail, MessageSquare, Clock } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const ComplaintManagementServices: React.FC = () => {
  return (
    <div className="w-full text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Complaint Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Nimble complaint management services for efficient customer
          relationship management starting at $8 an hour — retain your clients
          with prompt action on their complaints.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p>
          Complaint management plays a Critical-to-Quality (CTQ) role in
          retaining clients by addressing VoC (Voice of the Customer) signals
          early. If this non-core process lacks structured governance,
          outsourcing to a Lean Six Sigma–aligned partner like Nimble can ensure
          complaint resolution workflows are standardized and CTQ-compliant.
        </p>
        <p>
          Nimble has rich experience working with companies in India and across
          the globe to improve their complaint management processes. With our
          services, you can resolve client complaints quickly without missing
          any, strengthening your brand reputation while focusing on core
          business areas.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Complaint Management Services We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Automated Complaint Management System",
                desc: `We use best-in-class automated complaint management systems with
                  features like report exporting, reducing turnaround times and
                  workloads for precise, efficient complaint handling.`,
              },
              {
                title: "Multichannel Complaint Management",
                desc: `We manage complaints across multiple channels with suitable software,
                  ensuring every customer issue is addressed, no matter the
                  platform.`,
              },
              {
                title: "Complaint Management Dashboard Development",
                desc: `Our experts develop centralized dashboards to monitor and control
                  complaints seamlessly, enabling easier oversight and faster
                  resolutions.`,
              },
              {
                title: "Real-time Reports",
                desc: `Real-time reporting enables faster cycle times, reduces missed
                  complaints, and improves resolution quality using statistical
                  root cause visibility.`,
              },
              {
                title: "Ticket Creation and Reaction",
                desc: `Automatic ticket creation from surveys alerts our teams instantly,
                  ensuring faster reactions and resolutions of critical issues.`,
              },
              {
                title: "Integration",
                desc: `We integrate CRM and ERP systems using Lean Six Sigma Value Stream
                  Mapping (VSM) to align complaint tracking with CTQ metrics.`,
              },
              {
                title: "Improvements",
                desc: `We track improvements with monitoring dashboards and Lean metrics,
                  reducing errors and validating continuous enhancements.`,
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Nimble for Complaint Management?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Affordable Pricing Solutions",
              desc: `We design fair, scalable pricing models using CVA-BVA-NVA mapping to
                align costs with true business value.`,
            },
            {
              title: "Information Security",
              desc: `As an ISO/IEC 27001:2022 certified provider, we ensure stringent data
                protection across all processes.`,
            },
            {
              title: "Prompt Action",
              desc: `Our skilled managers and executives respond quickly to client
                complaints, minimizing resolution delays.`,
            },
            {
              title: "Cutting-edge Technology",
              desc: `We deploy and update the latest systems to provide accurate,
                efficient complaint management services.`,
            },
            {
              title: "Round-the-clock Assistance",
              desc: `Our teams are available 24/7 via phone, email, or web to support your
                business needs.`,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">
                Appointment Setting Services to a US-based Client
              </h3>
              <p>
                A leading US-based client was looking for appointment setting
                services. Nimble delivered quickly and efficiently, meeting all
                client expectations.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">
                Telemarketing Services to a Leading Insurance Firm
              </h3>
              <p>
                Nimble partnered with a top insurance firm to provide
                cost-effective telemarketing services, improving their outreach
                and customer engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg max-w-3xl mx-auto">
          “Nimble will have a positive effect on any company's turnover, I do not
          doubt that.”
        </blockquote>
        <p className="mt-4 font-semibold">— Marketing Director, Spray Foam Insulation Company, UK</p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Nimble Complaint Management Services
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Give your business the reliable, CTQ-driven complaint management
          solutions it deserves. Focus on growth while we handle client
          concerns.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ComplaintManagementServices;