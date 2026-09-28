import React from "react";
import NavigationMenu from "../MegaMenu";

const BenchmarkingServices: React.FC = () => {
  return (
    <div className="px-6 py-12 md:px-16 lg:px-28 space-y-16">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Nimble Benchmarking Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Boost your performance metrics with accurate comparisons. Leverage our
          in-depth benchmarking analysis to identify actionable KPIs and
          strategic market positioning.
        </p>
      </section>

      {/* Introduction */}
      <section className="space-y-6 text-gray-700">
        <p>
          It is not always easy for companies operating in the transportation
          and logistics sector to cope with the frequent disruptions in service.
          Energy and utility providers particularly face exceptionally high
          operational costs and regulatory pressures, while hospitality and
          tourism firms face fluctuating levels of customer satisfaction.
          Organizations should therefore embrace industry-leading practices
          through effective benchmarking.
        </p>
        <p>
          Our advanced technology benchmarking services identify the best
          practices that suit you best. We ensure operations are more efficient
          and reliable by this strategy; transportation and logistics businesses
          can benchmark and optimize route planning to minimize delays. Energy
          providers can attain higher operational efficiency together with
          sustainability, while the guest experiences as well as booking
          processes of hospitality industries can be greatly improved.
        </p>
        <p>
          Experience our professional benchmarking services where you will find
          out how our solutions can change your operations. Contact us for a
          detailed quotation customized for you.
        </p>
      </section>

      {/* Client Success Stories */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
            <h3 className="font-semibold">
              Nimble Acuity Provided Primary Research Services to Top Chinese Trade
              Consultants
            </h3>
            <p className="text-gray-600 mt-2">
              A well-known Chinese client was looking for a team who could help
              them with primary research services. Our team at Nimble Acuity delivered
              cost-effective services to the client.
            </p>
            <a href="#" className="text-blue-600 mt-3 inline-block font-medium">
              Read more →
            </a>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
            <h3 className="font-semibold">
              Case Study on Secondary Research for Hospitality Provider
            </h3>
            <p className="text-gray-600 mt-2">
              A well-known Swiss hospitality firm was looking for a partner who
              could provide them with secondary research services. Our team
              provided the client with services within a quick time.
            </p>
            <a href="#" className="text-blue-600 mt-3 inline-block font-medium">
              Read more →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <blockquote className="italic text-gray-700">
          “Let me thank you for the professional way in which you are managing
          the project and meeting our deadlines. Unfortunately, our second
          supplier — I cannot say the same for and have let us down
          considerably.”
        </blockquote>
        <p className="mt-2 font-semibold">CEO, Technology Company, UK</p>
      </section>

      {/* Solutions We Offer */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Benchmarking Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Performance Benchmarking",
              points: [
                "KPI alignment & industry metrics",
                "Baseline establishment",
                "Peer comparison & percentile ranking",
                "Operational efficiency analysis",
              ],
            },
            {
              title: "Healthcare Benchmarking",
              points: [
                "Clinical outcomes & satisfaction indices",
                "Healthcare quality metrics",
                "Cost efficiency optimization",
                "Evidence-based practices",
              ],
            },
            {
              title: "Competitor Benchmarking",
              points: [
                "Market positioning & SWOT integration",
                "Competitive intelligence extraction",
                "Performance metrics contrast",
                "Best practices adoption",
              ],
            },
            {
              title: "Business Benchmarking",
              points: [
                "Financial ratios & profitability",
                "Workflow optimization",
                "Strategic alignment",
                "Agile methodologies",
              ],
            },
          ].map((solution, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-3">{solution.title}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {solution.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Our Advanced Process Flow
        </h2>
        <ol className="space-y-6">
          {[ 
            "Identify What to Benchmark",
            "Identify Benchmark Partners",
            "Collect Data",
            "Analyze the Data",
            "Implement Changes",
            "Review and Repeat",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start space-x-4">
              <div className="text-blue-600 font-bold text-xl">0{idx + 1}.</div>
              <p className="text-gray-700">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Industries & Tools */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Industries We Serve
        </h2>
        <p className="text-gray-700 mb-6">
          Healthcare, Manufacturing, Retail, Information Technology, Financial
          Services
        </p>
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Technologies & Platforms
        </h2>
        <p className="text-gray-700 mb-6">
          Prosci’s ADKAR Model, BenchMarking Pro, APQC, Oracle Hyperion, IBM
          Benchmarking, Peeriosity, Tableau, Google Analytics
        </p>
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Software We Leverage
        </h2>
        <p className="text-gray-700">
          Apache JMeter, Gatling, Selenium, Phoronix Test Suite, Geekbench
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 p-8 rounded-2xl shadow-sm space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Why Choose Us for Your Benchmarking Needs?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Improve performance with industry best practices.</li>
          <li>Know the industry standards and adopt optimum practices.</li>
          <li>Ensure cost efficiency through structured analysis.</li>
          <li>Enhance customer support with better insights.</li>
          <li>Manage risks with predictive benchmarking insights.</li>
          <li>Make strategic decisions with competitive advantage.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white p-10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Strategic Benchmarking Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Our experts focus on high-quality partner selection algorithms and
          complex data extraction techniques to ensure accuracy and relevance in
          benchmark comparisons. With expert-led approaches, maximize your
          strategic position and consistently exceed industry benchmarks.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default BenchmarkingServices;
