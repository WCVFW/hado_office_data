import React from "react";
import DSmainmenu from "../DSmainmenu";

const FormCreationBenefits: React.FC = () => {
  const benefits = [
    {
      title: "Forms Assist in Brand Building",
      desc: "With the right customizable form creation software you can utilize colors, fonts, graphics and logos that align with your website. Simple, on-brand forms strengthen your online presence and reduce friction for visitors.",
    },
    {
      title: "Targeted Notifications",
      desc: "Automated notifications are far more effective when backed by accurate, segmented data. Customized forms let you target specific audience segments with relevant messages rather than flooding everyone.",
    },
    {
      title: "Integration of Apps Helps Examine Leads",
      desc: "When forms integrate with third-party apps (CRM, marketing tools), submitted data auto-populates those systems — eliminating manual entry and freeing time to qualify and serve leads.",
    },
    {
      title: "Avoid Unnecessary Data",
      desc: "Visitors won’t share extra info unless they get value. Use A/B testing to optimize forms so they ask only for necessary fields, improving completion rates and data quality.",
    },
    {
      title: "Automatic Collection of Data",
      desc: "Directing form submissions into databases and CRMs automates data capture, removes human transcription errors, and keeps formats and spellings consistent.",
    },
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-10 space-y-12">
      {/* Header */}
      <DSmainmenu/>
      <header className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
          How Efficient Form Creation Helps Data Entry
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Data entry success depends on data quality. Customizable, well-designed forms accelerate workflows, reduce errors, and boost productivity by collecting the right data in the right format.
        </p>
      </header>

      {/* Intro */}
      <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
        <p className="text-gray-700 mb-3">
          Data entry is a cornerstone of data management — and the single greatest influence on data quality is how the data is collected. Efficient form creation reduces inaccuracies and inconsistencies, improving downstream analysis and decision-making.
        </p>
        <p className="text-gray-700">
          Customizable forms speed up workflows by gathering appropriate fields, validating inputs, and integrating with other systems so data flows automatically where it's needed.
        </p>
      </section>

      {/* Benefits Cards */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ways Form Creation Helps</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 border border-gray-50"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{b.title}</h3>
              <p className="text-gray-600 leading-relaxed">{b.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Practical notes */}
      <section className="grid sm:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-2">Best practices</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Keep forms short and focused — ask only what you need.</li>
            <li>Validate input client-side and server-side to prevent bad data.</li>
            <li>Use conditional fields to show relevant questions only when needed.</li>
            <li>Provide clear value (download, demo, coupon) to encourage sharing accurate data.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-2">Integrations that matter</h4>
          <p className="text-gray-700 mb-3">
            Connect forms to CRM, support systems, analytics, and cloud storage. That reduces manual entry, keeps records synchronized, and speeds follow-ups.
          </p>
          <p className="text-sm text-gray-500">Example integrations: Salesforce, HubSpot, Zoho, Google Sheets, Slack, and custom APIs.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl p-6 grid sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">{s.value}</div>
            <div className="text-gray-600 text-sm">{s.label}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Choose Nimble for Flawless Data Entry Services</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-4">
          Nimble Auity has been providing high-quality data entry services to global clients for over 26 years. Our specialists handle a variety of data entry needs with strict security — we sign NDAs and protect your data.
        </p>
        <p className="text-gray-600 mb-4">If you need a reliable partner, talk to a Nimble representative — we typically respond within 24 hours.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md shadow hover:bg-teal-600 transition">
            Talk to Sales
          </button>
          <button className="border border-gray-200 px-5 py-2 rounded-md hover:bg-gray-50 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default FormCreationBenefits;
