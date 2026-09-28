import React from "react";
import NavigationMenu from "../MegaMenu";

const StatisticalAnalysis: React.FC = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Hero Section */}
       <NavigationMenu/>
      <h1 className="text-3xl font-bold mb-4">
        Nimble Statistical Analysis Services
      </h1>
      <p className="text-lg mb-6">
        We collect, examine, and analyze your business data to gain deep
        industrial insights and predict future trends to help you make
        profitable business decisions at rates starting at $14 per hour.
      </p>

      {/* Intro */}
      <p className="mb-4">
        Statistical data interpretation is imperative for the success and growth
        of every business. Not only does it help organizations understand and
        evaluate their current marketing and business efforts, but a thorough
        statistical analysis of their data also helps them understand their
        customer behavior and predict future market trends.
      </p>
      <p className="mb-6">
        At Nimble Acuity, we provide customized statistical analysis services
        to help businesses understand their data and gain valuable insights from
        their big data matrix. Our professional statisticians leverage their
        extensive experience and rich industrial knowledge to collect, organize,
        and examine your quantitative data to bring out meaningful results and
        derivations. Using powerful technologies, our experts offer cutting-edge
        solutions across the digital value chain.
      </p>

      {/* Services */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Statistical Analysis Services We Offer
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Descriptive Statistical Analysis</strong> – Analyze and
          summarize your data using visualization software to clean, filter, and
          streamline business data.
        </li>
        <li>
          <strong>Inferential Statistical Analysis</strong> – Estimate and infer
          trends from large populations, test hypotheses, and draw conclusions
          from samples.
        </li>
        <li>
          <strong>Predictive Analysis</strong> – Use statistical analytics and ML
          technologies to forecast trends and customer behaviors.
        </li>
        <li>
          <strong>Exploratory Data Analysis</strong> – Identify patterns,
          discover connections, and detect errors for business profitability.
        </li>
        <li>
          <strong>Prescriptive Analysis</strong> – Apply simulation, graph
          analysis, algorithms, and ML to recommend optimal decisions.
        </li>
      </ul>

      {/* Process */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Statistical Analysis Process We Follow
      </h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong>Defining the Project</strong> – Understand requirements,
          define scope, deliverables, and timelines.
        </li>
        <li>
          <strong>Collecting Data</strong> – Gather data from existing records or
          fresh questionnaires, field reviews, and observations.
        </li>
        <li>
          <strong>Analyzing Data</strong> – Apply statistical models and tools to
          find patterns and derive insights.
        </li>
        <li>
          <strong>Sharing the Results</strong> – Present evaluated data with
          charts and insights for decision-making.
        </li>
      </ol>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Benefits of Statistical Analysis Services
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Superior understanding of customers and their needs</li>
        <li>Improved decision making</li>
        <li>Aligned resources and strategies</li>
        <li>Reduced overhead costs</li>
        <li>Superior understanding of future trends</li>
        <li>Improved organizational competitiveness</li>
        <li>Better efficiency and ROI</li>
      </ul>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Why Nimble Statistical Analysis Services to Nimble Acuity?
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>✔ Cost-effective Services</li>
        <li>✔ Certified Team of Experts</li>
        <li>✔ Complete Quality Assurance</li>
        <li>✔ Absolute Data Security (HIPAA compliant)</li>
        <li>✔ Faster Turnaround Time</li>
        <li>✔ Customized Solutions</li>
        <li>✔ 24/7 Customer Service Support</li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Testimonials</h2>
      <blockquote className="border-l-4 border-gray-400 pl-4 italic mb-4">
        “The services that Nimble Acuity provided helped us achieve
        substantial cost and time savings on several difficult projects. Their
        prompt attention to our requests and attention to detail is excellent.”
        <br />– Senior Vice President, Automotive & Transportation Industry
        Solutions Group
      </blockquote>

      {/* CTA */}
      <p className="mt-6">
        With 26+ years of experience, Nimble Acuity has been a trusted
        provider of statistical analysis services, working with Fortune 500
        companies and beyond. Our expert statisticians use the latest tools and
        technologies to deliver comprehensive, end-to-end consulting for
        effective, fact-based decision-making.
      </p>
      <p className="mt-2 font-semibold">
        Simply let us know your business requirements and we'll get back to you
        with a customized service plan tailored just for you. Call Now!
      </p>
    </div>
  );
};

export default StatisticalAnalysis;
