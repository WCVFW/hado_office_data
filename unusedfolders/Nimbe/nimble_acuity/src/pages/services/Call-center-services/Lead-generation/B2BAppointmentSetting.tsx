import React from "react";
import CCmainmenu from "../CCmainmenu";

const B2BAppointmentSetting: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Acuity B2B Appointment Setting Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Save Time, Increase ROI, and Seize Strategic Opportunities with Our
          Expert B2B Appointment Setting Services: Discover the power of
          precision, quality, and efficiency in boosting your bottom line.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Managing B2B appointment setting internally can turn into a formidable
          challenge. Hiring and managing a high-performing sales team and
          providing the necessary tools can be a substantial financial burden.
          Recruiting, training, and managing a proficient team of appointment
          setters can rapidly escalate costs.
        </p>
        <p>
          Our Lean Six Sigma-trained teams relieve organizations from
          resource-heavy scheduling processes by deploying CTQ-aligned
          strategies and VoC-mapped scripts. Our solutions use standardized
          workflows, predictive analytics, and targeted lead qualification
          models that drive measurable improvements across the conversion
          pipeline.
        </p>
        <p>
          Whether you require warm lead follow-ups, cold prospect engagement, or
          campaign-specific appointments, we’ve got you covered. With over two
          decades of efficiency and expertise, Nimble Acuity ensures that your
          appointments are not just set—but set with prospects genuinely
          interested in your offerings.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Discover Our B2B Lead Generation and Appointment Setting Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Lead Qualification Services",
              desc: "We direct your sales efforts toward prospects with the greatest conversion potential using VoC-mapped criteria and lead scoring systems.",
            },
            {
              title: "Lead Nurturing Appointment Setting",
              desc: "Systematic nurturing flows reduce dropouts and shorten sales cycles under Improve and Control phases.",
            },
            {
              title: "Call Answering Services",
              desc: "24/7 availability with SOP-aligned call handling protocols that enhance satisfaction and reduce missed opportunities.",
            },
            {
              title: "Cold Calling Services",
              desc: "Analytics-driven scripting and advanced technology initiate impactful conversations with new prospects.",
            },
            {
              title: "Outbound Appointment Setting",
              desc: "We combine CRM solutions and predictive dialing systems to sharpen coordination and boost connections.",
            },
            {
              title: "B2C Appointment Setting",
              desc: "Automated confirmations and reminders reduce no-shows and optimize staff time management.",
            },
            {
              title: "Inbound Appointment Setting",
              desc: "Quick response and professional handling available 24/7 for efficient appointment booking.",
            },
            {
              title: "Multi-Channel Appointment Setting",
              desc: "Phone, email, and social media strategies ensure extended reach and stronger engagement.",
            },
            {
              title: "B2B Lead Qualification",
              desc: "Tailored scoring and profiling ensure sales teams only focus on high-quality prospects.",
            },
            {
              title: "Virtual Assistant Services",
              desc: "Our VAs manage scheduling, research, and email while you focus on growth.",
            },
            {
              title: "B2B Survey Services",
              desc: "Unbiased feedback collection and analysis to deliver actionable insights.",
            },
            {
              title: "B2B Data Mining Services",
              desc: "Predictive analytics, cleansing, segmentation, and competitive insights to keep you ahead.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Process We Follow for B2B Appointment Setting
        </h2>
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            "Understanding the Requirement",
            "Target Audience Identification",
            "Lead Generation",
            "Lead Qualification",
            "Initial Contact",
            "Appointment Scheduling",
            "Appointment Confirmation",
            "Follow-Up and Nurture",
            "Post-Appointment Follow-Up",
            "Reporting and Analytics",
            "Ongoing Lead Nurturing",
          ].map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg mb-2">
                {String(idx + 1).padStart(2, "0")}. {step}
              </h3>
              <p>
                {/* Simplified content placeholder */}
                Detailed explanation of the {step.toLowerCase()} phase ensuring
                precision, VoC integration, and measurable outcomes.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity as Your B2B Appointment Setting Company?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "ISO-Certified & GDPR Compliant Solutions",
            "Data Security with strict confidentiality",
            "High Accuracy and Quality-focused services",
            "Short Turnaround with no lost opportunities",
            "Scalability to meet growing demand",
            "Single-point Dedicated Contact",
            "Experienced Team of data scientists & specialists",
            "Modern Secure Infrastructure",
            "Fast & Secure Data Exchange Options",
            "Round-the-Clock Availability",
            "Pocket-friendly Pricing Plans",
          ].map((point, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 bg-gray-50 rounded-xl p-4 shadow"
            >
              <span className="text-blue-600 font-bold">✔</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Testimonials
        </h2>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="italic text-lg">
            "We utilize Nimble Acuity to reach out to our clients and potential
            clients to pre-screen for eligibility and transfer clients over to
            us. Nimble has made this process extremely easy. They are highly
            motivated and responsive."
          </p>
          <p className="font-semibold">
            - President, Medicare Insurance Company (US)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Acuity B2B Appointment Setting Services
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Gain more than just lead coordination—you gain access to a
          CTQ-driven, industry-specific engagement strategy. Partner with Nimble
          Acuity to accelerate your sales cycle, amplify ROI, and secure your
          position as an industry leader.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default B2BAppointmentSetting;
