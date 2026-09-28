import React from "react";
import NavigationMenu from "../MegaMenu";

const DeskAndWebResearch: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      {/* Title */}
      <NavigationMenu/>
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        7 Reasons to Nimble Desk and Web Research
      </h1>

      {/* Intro */}
      <p className="mb-6">
        The advantages of web & online research make it the ideal technique to
        obtain valuable market and industry insights that support decision
        making. Its high speed, cost-effectiveness, scalability, and ability to
        target audience profiling make web research a preferred choice for many
        organizations. However, leveraging these benefits requires skilled
        professionals with expertise and a keen eye for detail.
      </p>

      <p className="mb-6">
        At Nimble Acuity, our trained team of web research specialists spot,
        collect, and organize relevant market-related information. We have
        successfully worked with industries including finance, automation,
        automobile, government, FMCG, media, publishing, public relations,
        transportation, and healthcare.
      </p>

      {/* Section: 7 Benefits */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        7 Benefits of Outsourcing Desk Research and Web Research to Nimble Acuity
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          Detailed analysis or concise answers to technology, market, and
          customer behavior-related questions, as well as company & competitor
          profiles
        </li>
        <li>A dedicated team of trained web researchers</li>
        <li>
          Process-oriented approach ensuring the highest quality levels with
          quick turnaround times
        </li>
        <li>
          Backed by our extensive market research and report publishing
          experience, involving strong use of desk & web research sources
        </li>
        <li>Vast domain expertise across multiple industries</li>
        <li>Cost effectiveness</li>
        <li>Faster turnaround time</li>
      </ul>

      {/* Section: Services */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Desk and Web Research Services Offered at Nimble Acuity
      </h2>
      <p className="mb-6">
        Nimble Acuity can handle any type of web research across all industries—whether
        you need competitor details, market intelligence, or literature research
        (magazines, business reports, newsletters, case studies, journals, etc.).
      </p>

      <p className="mb-6">
        Our research is conducted by professionals with wide domain expertise
        using state-of-the-art infrastructure and tools. We deliver customized
        research solutions for global audiences across diverse industries,
        including competitor analysis, customer surveys, background checks,
        patent analysis, and SWOT analysis.
      </p>

      {/* Section: Methodologies */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Methodologies Incorporated for Web Research
      </h2>
      <p className="mb-4">
        At Nimble Acuity, we rely on Secondary Research methodologies using trusted
        sources of information, such as:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Government Publications</li>
        <li>General Press</li>
        <li>Industry Journals</li>
        <li>Trade Associations</li>
        <li>Public Company SEC Filings</li>
        <li>Investment Brokerages & Information Services</li>
        <li>Newsgroups and UseNet</li>
      </ul>

      {/* Section: CTA */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Avail Web Research and Desk Services Expertise
      </h2>
      <p className="mb-6">
        If you would like to focus on your core business and let professionals
        handle your desk & web research, consider outsourcing this work to
        Nimble Acuity. With over 26+ years of experience in Research Services
        outsourcing, we provide reliable, cost-effective, and timely solutions.
      </p>

      <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">
          Ready to Nimble Your Desk & Web Research?
        </h3>
        <p className="mb-4">
          Partner with Nimble Acuity to gain actionable insights, faster
          turnaround, and significant cost savings.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition">
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default DeskAndWebResearch;
