import React from "react";
import DSMainMenu from "../mainmenu";


const InventoryRpaCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Navigation Bar */}
      <DSMainMenu />

      {/* ✅ Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Helped Streamline Inventory Management to an Electronics Firm
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on Robotic Process Automation (RPA) for Global Electronics Inventory Management
          </p>
        </header>

        {/* Client */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Client</h2>
          <p className="text-gray-700">
            The client is a renowned electronics solutions provider with operations in over{" "}
            <strong>80 countries</strong> and serving more than <strong>1 million customers</strong> worldwide.
          </p>
        </section>

        {/* Client Requirement */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Client’s Requirement</h2>
          <p className="text-gray-700">
            The client wanted a reliable RPA solutions provider to streamline their inventory management 
            process. They needed a system that would help their staff manage more clients and suppliers 
            simultaneously, while improving efficiency.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Immediate project initiation was required to implement automation systems quickly.</li>
            <li>
              The client processes over <strong>50,000 packages per day</strong> globally and wanted 
              streamlined, efficient systems.
            </li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Solution</h2>
          <p className="text-gray-700 mb-3">
            After evaluating the client’s needs, Nimble Acuity recommended the{" "}
            <strong>UiPath RPA system</strong> due to its simple, user-friendly interface.
          </p>
          <p className="text-gray-700">
            We deployed UiPath robots to process and update inventory codes within the client’s ERP system. 
            This ensured accurate, timely product dispatches without errors or delays.
          </p>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Results</h2>
          <p className="text-gray-700">
            The client was highly satisfied with the results. With Nimble Acuity’s help, they successfully deployed{" "}
            <strong>50+ robots</strong> globally, making their processes more efficient and cost-effective. 
            The client appreciated the quality, scalability, and affordability of our services.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Nimble UiPath RPA Services to Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity is a pioneer in delivering high-quality UiPath RPA services and a wide range of 
            data science solutions to clients worldwide. Our experienced UiPath RPA developers ensure 
            seamless automation using the latest tools and technologies.
          </p>
          <p className="text-gray-700 font-medium">
            📩 Looking for a reliable UiPath RPA partner? Contact us today to streamline your operations 
            with cost-effective automation solutions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default InventoryRpaCaseStudy;
