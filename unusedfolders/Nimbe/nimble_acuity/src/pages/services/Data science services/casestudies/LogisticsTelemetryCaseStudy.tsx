import React from "react";
import DSMainMenu from "../mainmenu";


const LogisticsTelemetryCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Navigation Bar */}
      <DSMainMenu />

      {/* ✅ Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Helped a Logistics and Security Services Company Dynamically Collect Telemetry Data from Vehicles
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on Dynamic Data Collection for Logistics Firm
          </p>
        </header>

        {/* Client */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Client</h2>
          <p className="text-gray-700">
            A <strong>global secure logistics, cash management, and security services provider</strong> 
            with revenue over <strong>3.9 billion USD</strong> and more than <strong>1000 fleet vehicles</strong>, 
            approached Nimble Acuity for a customized route optimization solution. Operating mainly across 
            <strong> North America and Latin America</strong>, the company delivers highly secure assets to 
            over <strong>20,000 retail locations</strong>.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenges</h2>
          <p className="text-gray-700 mb-3">
            The client faced difficulties in identifying the most efficient routes in non-grid street areas, 
            which led to <strong>backtracking and inefficiencies</strong>. Challenges included:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Drivers crossing delivery locations and later backtracking</li>
            <li>Security concerns involving valuable assets</li>
            <li>Dependence on telemetry, GPS, and other dynamic vehicle data</li>
            <li>Real-time constraints involving drivers, field staff, managers, and clients</li>
            <li>Need for multiple route options factoring in environmental conditions</li>
            <li>Immediate demand for <strong>optimized, secure, and planned routes</strong></li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Solution</h2>
          <p className="text-gray-700 mb-3">
            Nimble Acuity designed a solution to <strong>capture and process telemetry data in real time</strong> 
            using a Big Data cluster. This enabled:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Optimized delivery routes with fewer trucks</li>
            <li>Alerts and warnings for potential fraud cases</li>
            <li>Real-time delivery visibility for dispatch managers</li>
            <li>Reports on <strong>security compliance</strong>, enriched with image/voice analytics</li>
          </ul>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Result</h2>
          <p className="text-gray-700">
            The solution was <strong>implemented successfully</strong>, yielding immediate and measurable benefits:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
            <li>Increased revenue and reduced security incidents</li>
            <li>Drivers covered more routes in a single day</li>
            <li>Improved operational effectiveness and performance</li>
            <li>Enhanced client satisfaction through secure, timely deliveries</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Get Customized Route Optimization Services at Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            With over <strong>18 years of industry experience</strong>, Nimble Acuity is a trusted partner 
            for <strong>complex route optimization projects</strong>. We also provide other data science 
            services, including <strong>automatic document classification</strong> and 
            <strong> lead scoring</strong>.
          </p>
          <p className="text-gray-700 font-medium">
            🚀 Have unique requirements? We have the <strong>team, infrastructure, and expertise</strong> 
            to deliver tailored solutions. <br /> Get in touch with us today to find the perfect fit for 
            your needs.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LogisticsTelemetryCaseStudy;
