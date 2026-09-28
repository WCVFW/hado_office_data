import React from "react";
import DSMainMenu from "./mainmenu";

const DataScienceTraining: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Data Science Training for Corporates
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Build a data-driven workforce with our customized training programs.
          Empower CXOs, managers, and analysts with hands-on, industry-focused
          learning to leverage data science effectively.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Data Science Training for Corporates?
          </h2>
          <p className="mb-4">
            As data grows, so does the need for professionals who can understand
            and apply it. Whether you’re a large enterprise or a startup, our
            tailored programs enhance employee skills, turning analysts into
            industry-ready data scientists who deliver quantifiable,
            data-driven insights.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Upskill existing analysts and teams</li>
            <li>Identify trends and opportunities faster</li>
            <li>Empower management with informed decision-making</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">
            Training Formats We Offer
          </h3>
          <ul className="space-y-3">
            <li>
              <strong>Classroom Training:</strong> Tailored for CXOs, managers,
              and technologists with real-world use cases.
            </li>
            <li>
              <strong>Digital Learning Academy:</strong> E-learning modules with
              certifications, credits, and HR tool integration.
            </li>
            <li>
              <strong>Hybrid Training:</strong> Combine online and classroom
              modules with hands-on projects and case studies.
            </li>
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">
            4-Step Corporate Training Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirement Analysis",
                desc: "Assess organizational needs and skill gaps.",
              },
              {
                step: "02",
                title: "Custom Module Design",
                desc: "Build tailored training programs aligned to goals.",
              },
              {
                step: "03",
                title: "Proposal & Planning",
                desc: "Share structured plan and finalize pre-requisites.",
              },
              {
                step: "04",
                title: "Training Execution",
                desc: "Conduct training on-site, online, or hybrid format.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="text-blue-600 font-bold text-lg mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Benefits of Our Data Science Training
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <ul className="list-disc list-inside space-y-2">
            <li>Customizable and industry-focused content</li>
            <li>Hands-on assignments and lab projects</li>
            <li>Interactive classroom & online modules</li>
            <li>Regular assessments and feedback</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Faster adoption of data science practices</li>
            <li>Insights into real-world business challenges</li>
            <li>Preparation for global-level certifications</li>
            <li>Direct impact on key performance indicators</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-600 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose Nimble Acuity?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-lg mb-2">Affordable Programs</h3>
              <p>
                Pay only for the expertise you need with flexible, targeted
                training packages.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                High-Quality Training
              </h3>
              <p>
                Feedback-driven improvements and expert-designed content ensure
                relevance and quality.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Best Infrastructure
              </h3>
              <p>
                Cloud-based digital academies and integrated on-premise learning
                portals for seamless training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Upskill Your Workforce?
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Partner with Nimble Acuity to deliver world-class corporate data
          science training programs. Empower your teams with the skills to
          harness data for business growth.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default DataScienceTraining;
