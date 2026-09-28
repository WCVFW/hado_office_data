import React from "react";
import DSMainMenu from "../mainmenu";


const RouteOptimizationCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Navigation Bar */}
      <DSMainMenu />

      {/* ✅ Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity's Route Optimization Services Helped a Leading Dairy Supplier in the Middle East Streamline Their Product Delivery
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on Route Optimization to Streamline Product Delivery
          </p>
        </header>

        {/* Client */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Client</h2>
          <p className="text-gray-700">
            A <strong>leader in supplying milk and dairy products</strong> in the Middle East,
            and one of the top brands in <strong>production, sales, and distribution</strong> of
            high-quality food products approached Nimble Acuity. The company generates{" "}
            <strong>close to $400 million yearly sales</strong>, with{" "}
            <strong>500 sales routes, 35,000 customers, and 24 depots</strong> to be managed daily.
          </p>
        </section>

        {/* Challenge */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenge</h2>
          <p className="text-gray-700 mb-3">
            Managing <strong>500 routes daily</strong> was a big task, creating difficulties in
            streamlining delivery activities and optimizing daily routes. The company expected Nimble Acuity
            to provide:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Effective fleet management</li>
            <li>Optimized route plan for each driver/vehicle</li>
            <li>Operations under tighter budget constraints</li>
            <li>
              Delivery plans incorporating real-world constraints: specific routes, fixed times,
              driver unavailability, etc.
            </li>
            <li>Plans for longer durations — weekly, monthly, etc.</li>
            <li>Prevention of overlapping stores on different routes</li>
            <li>On-time delivery of <strong>perishable food products</strong></li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Solution</h2>
          <p className="text-gray-700 mb-3">
            Nimble Acuity resolved the problem using <strong>data science</strong> and{" "}
            <strong>applied engineering</strong>. Our route optimization experts implemented
            industry-best practices:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Grouped geography into <strong>homogeneous sub-regions</strong> using{" "}
              <strong>machine learning clustering techniques</strong>.
            </li>
            <li>
              Used <strong>actual distance</strong> between outlets and warehouses as inputs for
              optimization algorithms.
            </li>
            <li>
              Incorporated <strong>constraints</strong> based on time, fleet size, and store
              delivery frequency (daily, weekly, bi-weekly, monthly).
            </li>
            <li>
              Applied proprietary <strong>genetic algorithms</strong> to generate optimal delivery
              sequence plans.
            </li>
            <li>Accommodated dynamic constraints with real-time route resequencing.</li>
          </ul>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Result</h2>
          <p className="text-gray-700 mb-3">
            The project was a <strong>huge success</strong> and completed within the deadline.
            The client experienced:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Improved on-time deliveries with optimized routes</li>
            <li>Better resource utilization — <strong>fewer trucks</strong> handled more deliveries</li>
            <li>Reduced vehicle wear and tear</li>
            <li>Real-time delivery status visibility for dispatch</li>
            <li><strong>27% savings</strong> in travel distance</li>
            <li><strong>16% reduction</strong> in number of routes</li>
          </ul>
          <p className="text-gray-700 mt-3">
            For this client’s scale of operations, the results equated to{" "}
            <strong>substantial savings in operational costs</strong>.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Choose Nimble Acuity for Efficient & Reliable Route Optimization Services
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity is a <strong>leading outsourcing company</strong> providing{" "}
            <strong>data science and route optimization services</strong> to global clients.
            With multi-domain expertise, we precisely understand and address clients’ operational
            challenges.
          </p>
          <p className="text-gray-700 mb-4">
            Beyond route optimization, we also deliver solutions in{" "}
            <strong>lead scoring</strong>, <strong>automatic document classification</strong>, and
            more.
          </p>
          <p className="text-gray-700 font-medium">
            🚀 Reach out today to discuss your <strong>route optimization requirements</strong>{" "}
            with our experts.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RouteOptimizationCaseStudy;
