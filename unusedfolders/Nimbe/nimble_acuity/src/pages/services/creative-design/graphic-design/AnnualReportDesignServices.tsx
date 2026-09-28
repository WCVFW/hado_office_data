import React from "react";
import CSmainmenu from "../CSmainmenu";

const AnnualReportDesignServices: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <section className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 md:px-16 lg:px-32">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Nimble Annual Report Design Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Professional Annual Reports that create lasting impressions with
          partners, stakeholders, and investors, showcasing company goals,
          performance, and culture.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto mb-12 space-y-4 text-justify leading-relaxed">
        <p>
          Annual Reports help businesses of any size create lasting impressions
          with partners and stakeholders. At Nimble Auity, our professionally
          designed Annual Reports can be used to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Serve as a marketing tool to convey objectives, financial reviews,
            projects, and other business information
          </li>
          <li>
            Stimulate interest in venture capitalists and investors through
            evidence of growth and company progress
          </li>
          <li>Enable better business planning and strategic decisions</li>
        </ul>
        <p>
          Over the last two decades, our creative team has delivered 10,000+
          Annual Report designs and catered to 19,000+ clients globally.
        </p>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Nimble Auity Annual Report Design Services
      </h2>
      <p className="text-gray-700 mb-6 text-justify">
        Our Annual Reports are not just charts, tables, or numbers—they tell a
        compelling story of an organization's performance, goals, aspirations,
        brand values, and culture. Nimble designers assist in selecting fonts,
        colors, images, chart styles, and finishing touches to present company
        information clearly and accurately.
      </p>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        {[
          "Interim Reports",
          "Whitepapers",
          "Financial Statements",
          "Investor Relations Reports",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <p className="text-gray-700 font-medium">{item}</p>
          </div>
        ))}
      </div>

      {/* Process */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Nimble Annual Report Design Process
      </h2>
      <ol className="space-y-6 text-gray-700">
        <li>
          <strong>01 Briefing:</strong> Receive client brief, previous samples,
          and copy to include.
        </li>
        <li>
          <strong>02 Input:</strong> Receive client input via email or secure
          Dropbox.
        </li>
        <li>
          <strong>03 Work Allocation:</strong> Assign designers, illustrators,
          and Account Manager to the project.
        </li>
        <li>
          <strong>04 Design:</strong> Professional graphic designers execute
          Annual Report design using Adobe Photoshop and Illustrator.
        </li>
        <li>
          <strong>05 Quality Check:</strong> QA team performs multi-stage checks
          to meet ISO standards and SLA benchmarks.
        </li>
        <li>
          <strong>06 Output:</strong> Final designs uploaded via Dropbox in
          client-preferred format for review.
        </li>
      </ol>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-green-700 mt-12 mb-6">
        Benefits of Partnering with Nimble
      </h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>
          <strong>Affordable Pricing:</strong> Hourly/FTE pricing and bulk
          discounts without compromising quality.
        </li>
        <li>
          <strong>Talented Designers:</strong> Skilled and experienced team
          capable of handling any project.
        </li>
        <li>
          <strong>Quality Infrastructure:</strong> State-of-the-art tools to
          deliver precise and visually compelling Annual Reports.
        </li>
        <li>
          <strong>Latest Tools:</strong> MS PowerPoint, Adobe Photoshop,
          Illustrator for high-quality reports.
        </li>
        <li>
          <strong>ISO Processes:</strong> Streamlined processes adhering to ISO
          standards.
        </li>
        <li>
          <strong>Quick Turnaround:</strong> Efficient processes ensure timely
          delivery depending on complexity and client inputs.
        </li>
      </ul>

      {/* Case Studies */}
      <h2 className="text-2xl font-semibold text-green-700 mt-12 mb-6">
        Case Studies
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="font-semibold text-green-600">
            Sticker Design Services for an Advertising Firm
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Top Scandinavian medical research company received 3200 full-time
            Nimble work hours and delivery of fully-functional 3D animation and
            3D modeled video.
          </p>
          <a href="#" className="text-green-600 text-sm font-medium mt-3 block">
            Read the case study →
          </a>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="font-semibold text-green-600">
            Logo Vectorization for an Australian Company
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Australian startup specializing in marketing and web development
            received timely and cost-efficient logo vectorization services.
          </p>
          <a href="#" className="text-green-600 text-sm font-medium mt-3 block">
            Read the case study →
          </a>
        </div>
      </div>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-green-700 mt-12 mb-6">
        Testimonials
      </h2>
      <blockquote className="bg-white shadow-md rounded-xl p-6 italic text-gray-700 max-w-4xl">
        “The quality of artwork delivered during the trial period was exceptional
        and helped us select our new Nimble partner from multiple quotes across
        the globe.”
        <footer className="mt-4 text-sm font-medium text-green-600">
          – Director of Operations, Leading Pharmaceutical Company (Netherlands)
        </footer>
      </blockquote>

      {/* Closing */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Choose Nimble Auity for Annual Report Design Services
        </h3>
        <p className="max-w-3xl mx-auto text-gray-600">
          Nimble Auity creates structured, visually compelling Annual Reports
          with effective graphics and visualizations, helping readers understand
          your company clearly. We also provide design assistance for labels,
          brochures, flyers, banners, and more. Contact us today to discuss your
          requirements and get a free quote within one business day.
        </p>
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition">
          Contact Us
        </button>
      </div>
    </section>
    </div>
  );
};

export default AnnualReportDesignServices;
