import React from "react";
import NavigationMenu from "../MegaMenu";

const CustomResearchReports: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Nimble Custom Research Report Services
        </h1>
        <p className="text-lg mb-6">
          Having the right information at your fingertips is key to making
          faster and more informed decisions. Our{" "}
          <strong>custom research reports</strong> provide in-depth insights on
          market trends, opportunities, and future directions across industries.
        </p>
        <p>
          Leveraging domain expertise, proprietary techniques, and advanced KPO
          practices, Nimble Acuity ensures clients receive data-rich,
          actionable reports tailored to their needs.
        </p>
      </section>

      {/* Services Offered */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Nimble Acuity&apos;s Custom Research Report Services
        </h2>
        <p className="mb-4">
          We combine research objectivity, industry insight, and cutting-edge
          tools like Bloomberg and Zawya to deliver customized reports that
          empower firms, agencies, and researchers.
        </p>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
          <li>Market Research Reports</li>
          <li>Pharma & Life Science Research Reports</li>
          <li>International Research Reports</li>
          <li>Brand Research Reports</li>
          <li>Consumer Research Reports</li>
          <li>Competitor Research Reports</li>
          <li>Media Research Reports</li>
          <li>Custom Industry Profiling Reports</li>
          <li>Macroeconomic Research Reports</li>
          <li>SWOT / PESTLE / PORTER’s 5 Forces Analyses</li>
        </ul>
      </section>

      {/* Process Flow */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Custom Research Report Process Flow We Follow
        </h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Project Initiation:</strong> Define project scope, timeline,
            and objectives.
          </li>
          <li>
            <strong>Industry Analysis:</strong> Finalize resources, get client
            approval, and gather data.
          </li>
          <li>
            <strong>Data Cleansing:</strong> Filter and format required data for
            accuracy.
          </li>
          <li>
            <strong>Report Preparation:</strong> Design reports in Word, PPT, or
            InDesign; add infographics, charts, and graphs; finalize after
            client review.
          </li>
          <li>
            <strong>Final Deliverable:</strong> Deliver completed report,
            incorporate revisions, and sign off.
          </li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Benefits of Custom Research Report Services
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            Make smarter, ROI-driven decisions using comprehensive insights.
          </li>
          <li>
            Build competitive intelligence and align strategies for sustained
            growth.
          </li>
          <li>
            Gain clarity on complex competitor, consumer, and market data with
            quick turnaround.
          </li>
          <li>
            Focus efforts on correct market segments with precise, relevant
            insights.
          </li>
          <li>
            Reduce risks through detailed competitor profiling and macroeconomic
            mapping.
          </li>
          <li>
            Receive proprietary, data-driven reports with actionable strategies.
          </li>
          <li>
            Target specific subjects or audiences with reports customized to
            your business needs.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble High-quality Custom Research Report Services to Nimble Acuity
        </h2>
        <p className="mb-6">
          With <strong>26+ years of experience</strong>, Nimble Acuity delivers
          smart, accurate research reports that enable better information
          utilization and risk-free decision making. Our global delivery centers
          and expert research team ensure timely, reliable, and actionable
          insights.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default CustomResearchReports;
