import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceAppointmentSetting: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Insurance Appointment Setting Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Experience the convenience of our reminder system, sending automated
          SMS or email notifications to clients, reducing no-shows, and improving
          customer satisfaction.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <p className="mb-6">
          Securing meaningful connections with potential clients is a game
          changer for businesses in the insurance sector. The task of setting
          appointments with key decision-makers necessitates effective
          communication, strategic planning, and a solid understanding of the
          industry landscape.
        </p>
        <p>
          Our professional insurance appointment setting service provides a{" "}
          <span className="font-semibold">streamlined, cost-effective
          solution</span> that drives growth. We engage prospects via{" "}
          <span className="font-semibold">emails, calls, and social media</span>,
          ensuring seamless interactions between your insurance specialists and
          potential clients.
        </p>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title:
                "Insurance Back Office Solutions for Healthcare Client",
              desc: "A health insurance firm in San Francisco streamlined operations and boosted profits by offshoring back-office tasks.",
            },
            {
              title: "Document Processing Automation Platform Development",
              desc: "A US-based insurance agency cut back-office costs by 40% with our appointment setting services.",
            },
          ].map((story, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
              <p className="text-gray-600">{story.desc}</p>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Read the case study
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <blockquote className="italic text-gray-700">
          “Nimble Acuity has helped my business by providing a reliable and organized
          back-office team to assist me in my day-to-day activities. They are
          very responsive and their communication is excellent.”
        </blockquote>
        <p className="mt-4 font-semibold">
          — President, Insurance Agency, Florida
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Optimize Your Business with Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Lead Generation Services",
              points: [
                "Identifying potential customers",
                "Multi-channel marketing strategies",
                "Lead qualification based on requirements",
              ],
            },
            {
              title: "Customized Scripting",
              points: [
                "Tailored communication scripts",
                "Aligned with brand and style",
                "Regular updates based on feedback",
              ],
            },
            {
              title: "Appointment Scheduling",
              points: [
                "Synchronize meetings with prospects",
                "Use scheduling software",
                "Timely reminders to maximize attendance",
              ],
            },
            {
              title: "Appointment Settings With CRM",
              points: [
                "CRM software integration",
                "Comprehensive tracking",
                "Personalized communications",
              ],
            },
            {
              title: "Follow-up and Relationship Building",
              points: [
                "Post-appointment communication",
                "Long-term relationship building",
                "Lead nurturing for conversions",
              ],
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {service.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Detailed Process Flow
        </h2>
        <ol className="space-y-6">
          {[
            "Target Market Identification",
            "Customized Communication Strategy",
            "Initial Contact and Engagement",
            "Appointment Scheduling",
            "Appointment Confirmation and Reminder",
            "Post-Appointment Follow-Up",
          ].map((step, idx) => (
            <li
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md"
            >
              <h3 className="font-semibold">
                {String(idx + 1).padStart(2, "0")}. {step}
              </h3>
            </li>
          ))}
        </ol>
      </section>

      {/* Software */}
      <section className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Software We Use</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Vertafore",
            "Nexsure",
            "Insurance Pro",
            "Applied Agency Management",
            "Agency Systems",
            "Insly",
          ].map((tool, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-white rounded-lg shadow text-gray-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Benefits of Choosing Our Services
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-gray-700">
          <li>Expertise-Driven Experience</li>
          <li>Personalized Services with AI-powered lead verification</li>
          <li>Efficient Communication Infrastructure</li>
          <li>Data-driven Campaigns</li>
          <li>Absolute Data Security</li>
          <li>Productivity Enhancement</li>
          <li>Cost-Effective Outsourcing</li>
          <li>Assured Revenue Growth</li>
        </ul>
      </section>

      {/* Sectors */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Sectors We Cater To
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">
          {[
            "Health Insurance",
            "Life Insurance",
            "Auto Insurance",
            "Home Insurance",
            "Commercial/Business Insurance",
          ].map((sector, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-md"
            >
              {sector}
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Insurance BPO Services for Carriers",
            "Insurance Back-Office Management",
            "Insurance Data Entry Services",
            "Insurance Analytics Services",
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Stay Informed with Our Must-Read Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title:
                "Maintenance of Insurance Accounts for US-based Insurance Agency",
              desc: "Why should you Nimble insurance services to a professional provider?",
            },
            {
              title:
                "Nimble Acuity Provided Insurance Back-office Operations for a Miami-based Client",
              desc: "Top 6 ways data analytics is transforming the insurance industry.",
            },
          ].map((article, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
              <p className="text-gray-600">{article.desc}</p>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Read more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white text-center py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Nimble Insurance Appointment Setting Services to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          We leverage analytics, CRM technology, and industry expertise to
          generate high-quality leads and smoothly coordinate appointments. Ready
          to transform your sales pipeline? Let’s collaborate.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InsuranceAppointmentSetting;
