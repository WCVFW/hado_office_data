
import React from "react";
import NavigationMenu from "../MegaMenu";

const BusinessValuation: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <NavigationMenu/>
      {/* Heading */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Nimble Business Valuation Services
        </h1>
        <p className="text-blue-700 font-medium">
          Choose our business valuation services and get access to specialized
          valuation expertise provided by seasoned professionals — starting at
          just $14/hour.
        </p>
      </header>

      {/* Intro */}
      <p className="mb-4 leading-relaxed">
        With fast-changing regulatory and accounting requirements, almost every
        enterprise needs to know the value of its tangible and intangible
        assets, products, intellectual property, and customer/vendor
        relationships. Nimble Acuity assists organizations in identifying and
        evaluating assets in a more specialized and comprehensive manner to make
        better-informed investment and business decisions.
      </p>

      <p className="mb-6 leading-relaxed">
        Our team of skilled business valuation professionals helps quantify and
        articulate value for taxation, financing, transactions, litigation, and
        strategic management purposes. With extensive experience across diverse
        industries — manufacturing, retail, healthcare, finance, technology,
        media, hospitality, and more — we deliver practical insight into both
        strategic and complex financial/legal issues.
      </p>

      {/* Services */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Business Valuation Services
      </h2>
      <p className="mb-6 leading-relaxed">
        Nimble Acuity is a trusted valuation partner for Fortune 1000
        companies and beyond. We help businesses comply with national and
        international regulations while understanding their true market value.
        Our key services include:
      </p>

      <ul className="space-y-4 list-disc list-inside">
        <li>
          <strong>Transaction Advisory</strong> – Model validation, DCF and LBO
          modeling, synergy/M&A analysis, debt/equity structuring, pitch reports,
          and information memorandums.
        </li>
        <li>
          <strong>Audit Support</strong> – Assistance with model validations,
          composite security pricing, fair value appraisals, and audit
          documentation.
        </li>
        <li>
          <strong>Startup Valuations</strong> – Equity ownership negotiations and
          valuation for fundraising support.
        </li>
        <li>
          <strong>Due Diligence Support</strong> – Data collection, data room
          setup, investigation, and communication with stakeholders.
        </li>
        <li>
          <strong>Portfolio Valuations</strong> – Guidance on fixed-income assets,
          derivatives, side pocket investments, and equity portfolios.
        </li>
        <li>
          <strong>Real Estate Valuations</strong> – Support for purchase price
          allocations, lease financing, sale lease-backs, and financial
          reporting valuations.
        </li>
        <li>
          <strong>Compensation Valuation</strong> – Valuation for employee
          incentives, compensation plans, awards, and revenue-sharing
          structures.
        </li>
      </ul>

      {/* Additional Services */}
      <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
        Additional Services
      </h3>
      <p className="mb-4 leading-relaxed">
        We also provide specialized solutions for diverse valuation
        requirements, including:
      </p>
      <ul className="space-y-2 list-disc list-inside">
        <li>Capital Asset Advisory</li>
        <li>Key Indicator Reports</li>
        <li>Transaction Valuation Compliance</li>
        <li>Scenario Analysis</li>
        <li>Tax Advisory</li>
        <li>Financial Statements Analysis</li>
        <li>Industry Reports</li>
        <li>Third-party Validations</li>
      </ul>

      {/* Why Choose */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Why Choose Nimble Acuity for Business Valuation?
      </h2>
      <ul className="space-y-3 list-disc list-inside">
        <li>
          <strong>Flexible Pricing</strong> – Affordable services starting from
          $14/hour.
        </li>
        <li>
          <strong>Extensive Experience</strong> – Over 26 years of expertise
          across industries and valuation models.
        </li>
        <li>
          <strong>Flexible Resource Deployment</strong> – Right-fit experts
          assigned based on project needs.
        </li>
        <li>
          <strong>Strategic Approach</strong> – Timely and precise delivery using
          proven frameworks.
        </li>
        <li>
          <strong>ISO-certified Processes</strong> – ISO 9001:2015-certified for
          quality and reliability.
        </li>
        <li>
          <strong>Data Security</strong> – Strict confidentiality agreements and
          robust security protocols.
        </li>
      </ul>

      {/* Client Success */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Client Success Stories
      </h2>
      <p className="mb-4">
        Our proven expertise has helped global clients achieve significant cost
        and time savings. Examples include:
      </p>
      <ul className="space-y-3 list-disc list-inside">
        <li>
          Research support for a leading international marketing strategy firm —
          delivering validated reports on consumer benefits, store data, product
          details, and more.
        </li>
        <li>
          KOL identification and mapping solutions for a UK-based healthcare
          provider — leveraging a proprietary process to collate and analyze KOL
          data.
        </li>
      </ul>

      {/* CTA */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Nimble Business Valuation Services to Nimble Acuity
      </h2>
      <p className="mb-4 leading-relaxed">
        Nimble Acuity is equipped to handle complex business valuation needs
        in multiple languages with a strong global presence to serve clients
        efficiently. We understand diverse business models and ensure accurate,
        reliable, and timely financial research.
      </p>
      <p className="text-blue-600 font-semibold">
        If you are looking for a reliable and proactive valuation service
        provider, get in touch with us today to learn how we can help you.
      </p>
    </section>
  );
};

export default BusinessValuation;
