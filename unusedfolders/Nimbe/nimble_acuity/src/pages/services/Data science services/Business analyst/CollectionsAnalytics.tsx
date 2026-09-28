import React from "react";
import DSMainMenu from "../mainmenu";

const CollectionsAnalytics: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Collections Analytics Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Maximize collections decisions, reduce delinquencies, and improve cash
          flow with Nimble Acuity’s advanced collections analytics services.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          It is very important for companies dealing with risk behaviors,
          delinquencies, investments, and collections to thoroughly assess
          potential borrowers. Nimble Acuity provides best-in-class
          collections analytics services to help lenders make smarter, data-driven
          decisions.
        </p>
        <p>
          Every collections decision impacts financial outcomes. With our
          expertise, you can develop strategies, optimize resources, and
          strengthen collections processes to stay competitive in evolving
          market conditions.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Nimble Acuity's Collections Analytics Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Data Collection",
              desc: "We gather and structure relevant data into organized databases for deeper analysis.",
            },
            {
              title: "Quality Analysis",
              desc: "We cleanse and validate databases to ensure data is accurate and reliable.",
            },
            {
              title: "Pattern Recognition",
              desc: "Our analysts detect key patterns in collections data to guide critical decisions.",
            },
            {
              title: "Data Segmentation",
              desc: "We categorize data into meaningful groups to accelerate analysis and strategies.",
            },
            {
              title: "Principle Component Analysis",
              desc: "We discover predictive tools from data segments to improve collections outcomes.",
            },
            {
              title: "Predictive Analysis",
              desc: "We forecast debtor behavior to help allocate resources intelligently.",
            },
            {
              title: "Trend Analysis",
              desc: "We identify new market and debtor trends to improve collections practices.",
            },
            {
              title: "Customer Intelligence",
              desc: "We analyze customer behavior and habits using statistical tools to personalize collections approaches.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          8 Reasons to Choose Us for Collections Analytics Services
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            ✅ Skilled professionals trained to identify industry trends and
            optimize collections decisions.
          </li>
          <li>
            ✅ Experienced data analysts proficient in SPSS, SAS, R, and more.
          </li>
          <li>
            ✅ Cost-effective services with flexible pricing models.
          </li>
          <li>
            ✅ Strong NDAs and workstation security policies to protect your data.
          </li>
          <li>
            ✅ ISO-certified processes ensuring high-quality results.
          </li>
          <li>
            ✅ Proven record of delivering results within quick turnaround times.
          </li>
          <li>
            ✅ Experience across lending products such as personal finance,
            mortgages, cards, auto, leasing, and real estate.
          </li>
          <li>
            ✅ Robust processes that reduce delinquencies, boost profitability,
            and improve cash flow.
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Collections Analytics Services to Us
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          For 26+ years, Nimble Acuity has delivered world-class collections
          analytics services to global clients. Our solutions improve customer
          collections, reduce bad debts, and save costs by eliminating the need
          for in-house analytics teams.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CollectionsAnalytics;
