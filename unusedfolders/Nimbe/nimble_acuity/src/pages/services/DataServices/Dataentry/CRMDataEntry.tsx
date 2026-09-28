import React from "react";
import DSmainmenu from "../DSmainmenu";

const CRMDataEntry: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-indigo-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble CRM Data Entry Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Protect your sensitive customer data with our secure and reliable CRM
          data entry services. Our experts handle increasing volumes without
          compromising on quality.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-4">
        <p>
          Did you know that CRM data entry services guarantee precision,
          efficiency, and scalability? Integrating CRM data entry into your
          business plan can be a calculated move that drives creativity and
          growth.
        </p>
        <p>
          Businesses using streamlined CRM systems report higher{" "}
          <span className="font-semibold">customer retention</span> and{" "}
          <span className="font-semibold">increased sales prospects</span>.
          Optimize your data management strategy with our data validation,
          real-time updates, and error-free data feed.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our CRM Data Entry Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "CRM Software Data Entry",
              desc: "Efficient and accurate data input with organized CRM records.",
            },
            {
              title: "CRM Data Cleansing",
              desc: "Eliminate duplicates and outdated entries for consistency.",
            },
            {
              title: "CRM Data Migration",
              desc: "Seamlessly transfer data across CRM systems with minimal downtime.",
            },
            {
              title: "CRM Data Validation",
              desc: "Ensure reliable insights and maintain integrity of CRM data.",
            },
            {
              title: "CRM Data Enrichment",
              desc: "Augment CRM with high-value info to enhance customer profiles.",
            },
            {
              title: "Salesforce Data Entry",
              desc: "Specialized input for Salesforce to maximize its utilization.",
            },
            {
              title: "CRM Lead Management",
              desc: "Efficient lead lifecycle management and nurturing strategies.",
            },
            {
              title: "CRM Data Integration",
              desc: "Unify data sources and streamline workflows with automation.",
            },
            {
              title: "CRM Contact Management",
              desc: "Organize customer contacts for better accessibility and communication.",
            },
          ].map((service, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our CRM Data Entry Process
        </h2>
        <ol className="space-y-6">
          {[
            "Data Acquisition & Integration – Collect and seamlessly integrate high-quality data into CRM.",
            "Automated Data Parsing & Transformation – Convert unstructured data into structured formats quickly.",
            "AI-Driven Validation & Cleansing – Identify anomalies and correct inaccuracies.",
            "Systematic Data Enrichment – Enhance CRM data with external attributes for deeper insights.",
            "Seamless Data Integration & Synchronization – Maintain consistency across platforms in real-time.",
            "Continuous Monitoring & Optimization – Ensure sustained data quality with proactive optimization.",
          ].map((step, i) => (
            <li key={i} className="flex items-start">
              <span className="text-indigo-900 font-bold mr-3">{`0${i + 1}.`}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Our CRM Data Entry Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Precision Data Capture – Every entry documented with utmost accuracy.",
            "Enhanced Data Integrity – Robust validation ensures consistency and completeness.",
            "Scalable Data Solutions – Cloud-based services tailored to your growth.",
            "Predictive Customer Insights – Transform data into actionable forecasts.",
            "Streamlined Resource Allocation – Free up internal teams with automation.",
            "Real-Time Data Synchronization – Always updated and consistent CRM records.",
          ].map((point, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-2xl">
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Robust Tools We Leverage</h2>
        <p className="mb-6">
          Pipedrive • Freshsales • Salesforce • HubSpot CRM • Zoho CRM
        </p>
      </section>

      {/* Industries Section */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Clients We Work With</h2>
        <p>
          Real Estate • Healthcare • Financial Services • E-commerce • Education
          • IT & Software • Manufacturing • Travel & Hospitality
        </p>
      </section>

      {/* Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title:
                "Auckland Client Optimized Purchase Order Processing with Custom Data Extraction",
              desc: "We streamlined purchase order operations for an IT solutions provider, boosting revenue and profitability.",
            },
            {
              title:
                "Tampa-based Legal Consultant Bulk-Imports Job Postings with Data Extraction",
              desc: "We enabled quick and accurate job posting imports for a legal consultancy, improving efficiency.",
            },
          ].map((story, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p>{story.desc}</p>
              <a
                href="#"
                className="text-indigo-700 font-semibold mt-2 inline-block"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
        <blockquote className="italic text-lg bg-white p-6 rounded-2xl shadow max-w-3xl mx-auto">
          “They have the right mix of technical knowledge and business acumen.
          Over the last year, we’ve found your organization to be a reliable
          partner as we grow and execute our strategy.”
        </blockquote>
        <p className="mt-4 font-semibold">– VP, Source International</p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Offshore Your CRM Data Entry Requirements
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Transform your business with precision, scalability, and AI-driven CRM
          data entry services. Contact us today to Nimble and get a free
          quote within 24 hours.
        </p>
        <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CRMDataEntry;
