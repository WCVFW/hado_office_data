import React from "react";
import NavigationMenu from "../MegaMenu";

const PrimarySecondaryResearch: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Nimble Primary and Secondary Research Services
        </h1>
        <p className="text-lg mb-6">
          Gain competitive advantage with Nimble Acuity’s comprehensive suite of{" "}
          <span className="font-semibold">primary and secondary research</span>{" "}
          services. We help businesses make smarter decisions by providing
          accurate, data-driven insights.
        </p>
        <p>
          With 20+ years of expertise, Nimble Acuity delivers precise,
          cost-effective research using scientific frameworks, innovative tools,
          and a dedicated research team.
        </p>
      </section>

      {/* Services Offered */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Primary and Secondary Research Services We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Primary Research Services:</strong> Collecting original data
            through surveys, emails, interviews, and offline/web materials.
          </li>
          <li>
            <strong>Secondary Research Services:</strong> Compiling and
            synthesizing insights from pre-existing sources, reports, statistics,
            and models.
          </li>
          <li>
            <strong>Qualitative Research:</strong> Exploratory, social
            science–based analysis of behaviors, patterns, and market dynamics.
          </li>
          <li>
            <strong>Quantitative Research:</strong> Fact-based, computational,
            and systematic exploration for unbiased, reliable insights.
          </li>
        </ul>
      </section>

      {/* 8 Phases */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          8 Phases of Our Primary and Secondary Research
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Survey Design</li>
          <li>Target Audience Profiling</li>
          <li>Choosing Target Respondents</li>
          <li>Data Collection</li>
          <li>Data Processing</li>
          <li>Data Analysis</li>
          <li>Report Generation and Presentation</li>
          <li>Expert Insights</li>
        </ol>
      </section>

      {/* Advantages */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Advantages of Nimble Acuity’s Research Services
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Up to 60% cost savings</li>
          <li>
            Access to top research analysts specializing across multiple
            industries
          </li>
          <li>Free trial with high accuracy levels</li>
          <li>Quick turnaround and on-time delivery</li>
          <li>Regular updates on collected data and findings</li>
          <li>Risk-free outsourcing with strong data protection</li>
          <li>
            Advanced methodologies to profile target focus groups and audiences
          </li>
          <li>
            Fill gaps in information using combined primary and secondary
            research techniques
          </li>
        </ul>
      </section>

      {/* Case Study */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Case Study</h2>
        <p>
          Learn how Nimble Acuity provided exclusive research reports on the{" "}
          <strong>Travel Industry</strong> for a Marketing Strategy Firm,
          enabling them to build effective, data-backed strategies.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Contact Nimble Acuity for Expert Primary and Secondary Research
        </h2>
        <p className="mb-6">
          Be it <strong>B2B</strong> or <strong>B2C</strong>,{" "}
          <strong>qualitative</strong> or <strong>quantitative</strong>, Nimble Acuity
          ensures thorough research support with proven methodologies and
          experienced professionals.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default PrimarySecondaryResearch;
