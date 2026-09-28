import React from "react";
import NavigationMenu from "../MegaMenu";

const ResearchOutsourcingCenter: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <NavigationMenu/>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Nimble Research Services Outsourcing Center
      </h1>

      {/* Intro */}
      <p className="mb-6">
        We are in an age and time where there is an information overload. Finding,
        utilizing, streamlining, managing, and retrieving valid and essential
        information for your business has become a challenge on its own. Such
        extensive research activities can drain your time and finance and
        accounting resources. It can also shift your focus away from your core
        business activities.
      </p>

      {/* Why Nimble */}
      <h2 className="text-2xl font-semibold mb-4">Why Nimble Research Services?</h2>
      <p className="mb-6">
        Research and Analytics are two of the most useful tools that any business
        can rely on. By outsourcing research and analytics to Nimble Acuity,
        you can not only understand the existing desires of your customers, but
        also grasp the future requirements of potential customers. With our
        research and analysis services, you can prepare for the future of your
        product or service in the competitive business market.
      </p>
      <p className="mb-6">
        Our expert research services can give you an insight into your
        competitors' stance and business. It can help you test out new
        products/services, understand the strength and far-reaching potential of
        your product, gauge possible investment opportunities and identify
        unrealized business partners. With effective research and analysis, you
        can successfully resolve any type of business crisis.
      </p>

      {/* Techniques */}
      <h2 className="text-2xl font-semibold mb-4">Techniques Used in Research Services</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Factor Analysis</li>
        <li>Cluster Analysis</li>
        <li>Conjoint Analysis</li>
        <li>Multidimensional Analysis</li>
        <li>ANOVA Analysis Surveys</li>
        <li>Frequency Tables & Crosstab</li>
      </ul>

      {/* Expertise */}
      <h2 className="text-2xl font-semibold mb-4">
        Partner with the World's Most Sought after Outsourcing Center
      </h2>
      <p className="mb-6">
        Over the last 26+ years, we have developed a great understanding on how
        to design questionnaires, how to get the right answers to complex
        business problems and how to associate seemingly unrelated pieces of
        information by using research techniques and the skills of our expert
        intellectual resources.
      </p>
      <p className="mb-6">
        Irrespective of the nature of your business, type of industry, or the
        size of your company, we can provide you with apt research services. Our
        research services outsourcing center in India can offer you and your
        business enterprise with lasting research solutions that will transform
        the way your business works.
      </p>

      {/* CTA */}
      <div className="text-center mt-8">
        <p className="mb-4 text-lg font-medium">
          Contact us today to get started with outsourcing research and analysis
          services.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default ResearchOutsourcingCenter;
