import React from "react";
import NavigationMenu from "../MegaMenu";

const MediaResearchServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Media Research Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Media exposure is just the beginning. With Nimble Acuity&apos;s
          dynamic media research and monitoring solutions, you can track,
          analyze, and strengthen your brand identity through positive
          publicity.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Media Research Services</h2>
        <p className="mb-4">
          Today&apos;s media landscape—both online and offline—offers unmatched
          opportunities to connect with your audience. Recognizing the
          importance of media presence, Nimble Acuity delivers specialized
          media intelligence services that align your exposure with revenue
          goals.
        </p>
        <p>
          With a diverse clientele including media agencies, production
          companies, advertisers, PR firms, and analytics organizations, we
          provide comprehensive, actionable insights that support brand growth
          and strategy.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Our Media Research Services
          </h2>
          <p className="mb-6">
            Our experts help you analyze how different regions, markets, and
            communities consume and shape media. We track consumer opinions,
            tastes, and preferences in real-time to optimize your strategies.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
            <li>News</li>
            <li>Public Affairs Content</li>
            <li>Sports</li>
            <li>Sponsorships</li>
            <li>Advertising</li>
            <li>Video/Audio News Releases</li>
            <li>Product Placement</li>
            <li>Use of Copyrighted Media</li>
            <li>Infomercials</li>
            <li>Billboards</li>
          </ul>
        </div>
      </section>

      {/* Monitoring Solutions */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">
          Media Monitoring Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Print Publications</h3>
            <p>
              Track media coverage across global newspapers and magazines,
              including editorials, ads, tenders, and press releases.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">TV News Channels</h3>
            <p>
              Monitor representation on leading television channels, including
              interviews, business news, reports, tickers, and stock updates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Online Media Monitoring
            </h3>
            <p>
              Keep tabs on financial portals, news websites, and
              opinion-based platforms to assess brand presence online.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Blog Monitoring</h3>
            <p>
              Get comprehensive coverage across millions of blogs with automated
              tracking and a digital clip book for instant access.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Nimble Acuity */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose Nimble Acuity for Media Research Services?
          </h2>
          <p className="mb-4">
            At Nimble Acuity, we tailor solutions to match your precise needs.
            Our team extracts insights from diverse media channels—radio,
            television, magazines, and online platforms—so you stay ahead of
            market perceptions.
          </p>
          <p>
            With a global presence and decades of expertise, Nimble Acuity ensures
            high-quality results, cost-effective delivery, and quick
            turnarounds.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Media Research Services to India
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Partner with one of the most trusted media research companies with a
          global presence. Let Nimble Acuity track, analyze, and optimize your
          media exposure to deliver measurable brand impact.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default MediaResearchServices;
