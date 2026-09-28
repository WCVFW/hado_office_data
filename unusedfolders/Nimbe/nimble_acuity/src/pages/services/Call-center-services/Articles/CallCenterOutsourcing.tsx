import React from "react";
import { Users } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CallCenterOutsourcing = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <CCmainmenu/>
      <header className="bg-green-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Key Benefits of Outsourcing Call Center Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Smart companies are leveraging Nimble Auity to elevate their customer support, boost efficiency, and enhance brand value.
        </p>
        <div className="mt-8">
          <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-100 flex items-center justify-center mx-auto gap-2">
            <Users size={20} />
            Get Started with Nimble Auity
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-16 px-6 space-y-12">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Giving Importance to Core Responsibilities
          </h2>
          <p className="text-gray-700 mb-3">
            Outsourcing call center services allows your team to focus on core business functions while Nimble takes care of customer interactions. No need to multitask employees or deploy new resources for call handling.
          </p>
          <p className="text-gray-700">
            Focus on growing your business while a professional team connects with new leads and converts them into loyal customers.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">24/7 Customer Care & Support</h2>
          <p className="text-gray-700 mb-3">
            Nimble Auity ensures round-the-clock customer support. With teams covering different time zones, your business never misses a call, and customers always receive timely assistance.
          </p>
          <p className="text-gray-700">
            This service builds a strong brand image and enables global reach with multilingual support.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Latest Technologies Onboard</h2>
          <p className="text-gray-700 mb-3">
            Our call center services incorporate the latest technologies and best practices. With cross-platform knowledge systems, queries are resolved faster, ensuring efficiency and customer satisfaction.
          </p>
          <p className="text-gray-700">
            Stay ahead of competitors by leveraging tech-driven processes for seamless operations.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Expertise & Industry Knowledge</h2>
          <p className="text-gray-700 mb-3">
            Nimble Auity brings years of industry experience, helping you implement proven strategies, reduce induction time, and optimize customer service workflows.
          </p>
          <p className="text-gray-700">
            Our expertise ensures that your business benefits from effective decisions and industry-specific solutions.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">No Need to Set Up a New Team</h2>
          <p className="text-gray-700 mb-3">
            Save costs on hiring, training, and infrastructure. Nimble Auity provides budget-friendly solutions with high-quality service, removing the need for in-house setup.
          </p>
          <p className="text-gray-700">
            This makes outsourcing a cost-effective and scalable solution for your call center needs.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Call Center Services?
          </h2>
          <p className="text-gray-700 mb-6">
            Partner with Nimble Auity to streamline customer support, increase productivity, and provide top-notch service to your clients.
          </p>
          <button className="bg-green-600 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-green-700 flex items-center justify-center mx-auto gap-2">
            <Users size={24} />
            Contact Nimble Auity Today
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Nimble Auity. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CallCenterOutsourcing;
