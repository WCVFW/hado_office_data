import React from "react";
import NavigationMenu from "../MegaMenu";

const CommoditiesRealEstateReports: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Commodities and Real Estate Reports Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Make use of actionable intelligence by accessing professional and
          comprehensive commodities & real estate reports and emerge ahead of
          the competition. Prices start at <span className="font-semibold">$14/hour</span>.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <p className="mb-6">
          Are you looking for ways to position your organization's trading,
          investment, and financial directives? Do you need the latest
          statistics and trends analysis in easy-to-understand integrated
          reports? We provide detailed global and local commodity markets and
          real estate property insights so you can make better business
          decisions.
        </p>
        <p>
          Nimble Acuity is a leading provider of commodities and real estate
          reports services worldwide. Our solutions help businesses better
          navigate both global and local landscapes with flexible and
          cost-effective reporting.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Commodities and Real Estate Reports Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Future Market Report Services",
              desc: "Highly-visual, interactive reports with technical and fundamental analysis to forecast trends and reduce risks.",
            },
            {
              title: "Commodity Trading Reports",
              desc: "Comprehensive, actionable insights to support commodity trading opportunities with clear visual data.",
            },
            {
              title: "Risk Management Reports",
              desc: "Recognize, analyze, and prioritize risks for commodities and real estate investments.",
            },
            {
              title: "Commodity Trends Reports",
              desc: "Convert insights into effective trading positions with real-time market triggers and intelligence.",
            },
            {
              title: "Real Estate Trends Reports",
              desc: "Forecast future real estate scenarios using historical and current data for accurate insights.",
            },
            {
              title: "Regional Trends Reports",
              desc: "Reports covering regional-level commodity and real estate trends, including public policy changes.",
            },
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

      {/* Benefits */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Benefits of Using Our Commodities and Real Estate Reports
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          {[
            "Identify and track price movements in real estate properties.",
            "Gain insights on diversification of investments.",
            "Reports backed by latest visualization technologies.",
            "Understand economic factors impacting growth trajectories.",
            "Obtain custom monthly, quarterly, or annual reports.",
            "Track commodity and real estate indexes effectively.",
            "Access intelligence on wide-ranging topics and trends.",
            "Powerful visualizations for accurate decision-making.",
          ].map((benefit, idx) => (
            <li
              key={idx}
              className="p-4 bg-gray-50 rounded-lg border hover:shadow"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Commodities and Real Estate Reports Creation Process
        </h2>
        <ol className="max-w-4xl mx-auto space-y-6">
          {[
            "Requirement Analysis – Understand client needs in detail.",
            "Planning – Define scope, extent, and reach of the project.",
            "Strategizing – Outline approach and research methodology.",
            "Research in Phases – Analysts conduct research per plan.",
            "Analysis and Data Collation – Filter, sort, and analyze data.",
            "Report Creation – Draft report shared for client feedback.",
            "Final Delivery – Incorporate feedback and deliver final report.",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start">
              <span className="flex-shrink-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                {idx + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Cost-effective pricing without compromising quality.",
            "World-class infrastructure and modern technology.",
            "ISO-certified high-quality services.",
            "Strict data security (ISO/IEC 27001:2022 certified).",
            "Fast turnaround times for all deliverables.",
            "Experienced team with robust methodologies.",
            "Dedicated project manager as single point of contact.",
          ].map((reason, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md"
            >
              {reason}
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Research Report for Top UK-based Headhunting Firm
            </h3>
            <p>
              We conducted due diligence using financial magazines, FSA Register,
              and company websites to deliver an in-depth candidate research
              report.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Market Research and Analysis for US Footcare Major
            </h3>
            <p>
              Delivered a detailed South African market entry strategy spanning
              23 cities in just 15 days.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
        <blockquote className="bg-gray-100 p-6 rounded-xl italic">
          “Let me thank you for the professional way in which you are managing
          the project and meeting our deadlines. Unfortunately, our second
          supplier cannot say the same and has let us down considerably.”
          <br />
          <span className="font-semibold block mt-4">
            – CEO, Technology Company, UK
          </span>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Commodities and Real Estate Reports Services to Nimble Acuity
        </h2>
        <p className="mb-6">
          Get customized, in-depth reports that provide actionable intelligence
          and boost your bottom line.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
        >
          Get in Touch Today
        </a>
      </section>
    </div>
  );
};

export default CommoditiesRealEstateReports;
