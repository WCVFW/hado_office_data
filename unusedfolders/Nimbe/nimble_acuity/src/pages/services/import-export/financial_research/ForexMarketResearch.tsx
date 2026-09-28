import React from "react";
import NavigationMenu from "../MegaMenu";

const ForexMarketResearch: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      {/* Hero Section */}
      <NavigationMenu/>
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nimble Forex Market Research Services
        </h1>
        <p className="text-lg text-gray-600">
          Get access to high-quality forex market research services provided by
          highly-experienced and qualified researchers{" "}
          <span className="font-semibold">(starting at $14/hour)</span>
        </p>
      </header>

      {/* Intro */}
      <section className="mb-10">
        <p className="mb-4">
          Are you struggling to stay informed on the evolving global market and
          trade conditions and looking for high-quality forex market research
          services? Does your business have unique needs for which you would
          like customized forex market research? If so, you are in the right
          place.
        </p>
        <p className="mb-4">
          Outsourcing forex market research to a reliable and professional forex
          market research consultant like us can help you evaluate factors
          influencing the forex market environment, including geographical
          dispersion, large trading volumes, and profit margins.
        </p>
        <p>
          <span className="font-semibold">Nimble Acuity (Nimble Acuity)</span> is a
          leading forex market research service provider and has helped numerous
          enterprises with their forex market research needs. We have been
          providing financial research for the forex industry for many years now
          and have developed a lot of expertise in providing accurate forex
          market research.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Forex Market Research Services We Offer
        </h2>
        <p className="mb-6">
          With our services, you receive accurate forecasts and data on specific
          sectors of the forex market along with intelligence on crucial
          influencers like government fiscal policies, inflation levels and
          trends, trade levels, and political conditions.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Forex Advisory Services",
              desc: "We identify risks caused by volatility in currency markets, forecast trends, estimate risks, and advise on hedging with futures, forwards, and options.",
            },
            {
              title: "Currency Pair Research Services",
              desc: "We provide crucial insights into the most liquid and widely traded currency pairs, helping businesses with actionable intelligence.",
            },
            {
              title: "Market Research Services",
              desc: "Our team monitors forex markets and economic data releases, providing expert forecasts to help hedge risks effectively.",
            },
            {
              title: "Forward Pricing Research Services",
              desc: "We analyze forward pricing, interest costs, spot prices, and currency rate differences to deliver accurate research.",
            },
            {
              title: "Treasury Management Services",
              desc: "We help businesses negotiate with banks, lower interest rates, reduce financial costs, and improve treasury operations.",
            },
            {
              title: "Margin Requirements Research Services",
              desc: "We perform research on trade deposits, price fluctuations, and track usable margins across platforms.",
            },
            {
              title: "Forex Signals Services",
              desc: "We provide signals across all major pairs (EURUSD, GBPUSD, USDCAD, EURCAD, GBPJPY, USDCHF, and more).",
            },
            {
              title: "Forex Fundamental Analysis Services",
              desc: "We examine intrinsic value by analyzing economic factors, country health, and currency valuations.",
            },
            {
              title: "Forex Technical Analysis Services",
              desc: "We use data-driven analytics to predict future price movements with accuracy based on past indicators.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why Nimble Forex Market Research to Nimble Acuity?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Affordable Pricing Options</span> –
            Flexible, cost-effective, and tailored to your needs.
          </li>
          <li>
            <span className="font-medium">World-class Infrastructure</span> –
            Modern office spaces, strong connectivity, and robust backup.
          </li>
          <li>
            <span className="font-medium">High-quality Services</span> – We
            strive to exceed client expectations with exceptional quality.
          </li>
          <li>
            <span className="font-medium">Data Security</span> – ISO/IEC
            27001:2022 ISMS certified with strict confidentiality.
          </li>
          <li>
            <span className="font-medium">Quick Turnaround Time</span> –
            Services delivered on or before deadlines.
          </li>
          <li>
            <span className="font-medium">Advanced Software</span> – Access to
            the latest tools and financial databases.
          </li>
          <li>
            <span className="font-medium">Experienced Team</span> – Skilled
            finance professionals delivering quality results fast.
          </li>
        </ul>
      </section>

      {/* Case Study */}
      <section className="mb-12 bg-blue-50 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Customer Success Story
        </h2>
        <p className="mb-2">
          A leading California-based luxury air travel provider needed primary
          business research. Our team delivered{" "}
          <span className="font-medium">high-quality services</span> within a{" "}
          <span className="font-medium">quick turnaround time</span>.
        </p>
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline inline-block mt-2"
        >
          Read more →
        </a>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Testimonials</h2>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
          “The services that Nimble Acuity provided helped us achieve
          substantial cost and time savings on several difficult projects. Their
          prompt attention to our requests and attention to detail are
          excellent.”
        </blockquote>
        <p className="mt-2 text-sm text-gray-600">
          – Senior Vice President, Automotive & Transportation Industry
          Solutions Group
        </p>
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline mt-3 inline-block"
        >
          More Testimonials »
        </a>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gray-100 py-10 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Nimble Forex Market Research Services to Nimble Acuity
        </h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Nimble Acuity is a pioneer in providing high-quality forex financial
          market research services to clients in India and across the world. Our
          team leverages the best financial tools and technologies to deliver
          exceptional-quality services.
        </p>
        <a
          href="#"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get in Touch Today
        </a>
      </section>
    </div>
  );
};

export default ForexMarketResearch;
