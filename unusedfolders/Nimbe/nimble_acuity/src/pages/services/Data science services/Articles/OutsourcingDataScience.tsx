import React from "react";
import DSMainMenu from "../mainmenu";

const OutsourcingDataScience: React.FC = () => {
  const pros = [
    {
      title: "Access to Expert Skills",
      content:
        "Outsourcing gives you access to globally certified experts in big data, analytics, cloud computing, and data science—helping bridge internal skill gaps.",
    },
    {
      title: "Efficient Expertise Related to Specific Industries",
      content:
        "Vendors specializing in your sector offer tailored services that address industry-specific challenges, giving your business a competitive edge.",
    },
    {
      title: "Increased Scalability",
      content:
        "Third-party vendors provide flexibility to scale up quickly without straining your in-house team or infrastructure.",
    },
  ];

  const cons = [
    {
      title: "Risks Associated with Making the Wrong Choice",
      content:
        "Choosing the wrong partner can lead to risks, including missed timelines and security breaches. Careful evaluation is crucial.",
    },
    {
      title: "Value Vs. Cost Trade-Offs",
      content:
        "Predictive models require ongoing maintenance. Over time, costs may outweigh the value if updates are frequent and expensive.",
    },
    {
      title: "Not Having Complete Control Over Enterprise Data",
      content:
        "Sharing data with vendors may pose security risks. A reputable partner with strong ISMS and NDA agreements is essential to mitigate this.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-16">
        <DSMainMenu/>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Pros and Cons of Outsourcing Data Science Services
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 mb-8">
          Businesses are increasingly outsourcing services to boost growth and
          revenue. While outsourcing has clear benefits, it also comes with
          risks. Whether outsourcing data science helps or harms depends on your
          choice of service provider and terms of engagement. Let’s explore the
          pros and cons.
        </p>

        {/* Pros and Cons Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Pros */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              ✅ Pros
            </h2>
            <div className="space-y-6">
              {pros.map((pro, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {pro.title}
                  </h3>
                  <p className="text-gray-700">{pro.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cons */}
          <div>
            <h2 className="text-2xl font-semibold text-red-700 mb-4">
              ❌ Cons
            </h2>
            <div className="space-y-6">
              {cons.map((con, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow p-5 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {con.title}
                  </h3>
                  <p className="text-gray-700">{con.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            The Conclusion
          </h2>
          <p className="text-gray-700 mb-4">
            Outsourcing data science has both advantages and risks, but success
            hinges on choosing the right provider. A reliable partner ensures
            that the benefits outweigh the downsides, enabling smarter,
            data-driven business decisions.
          </p>
        </div>

        {/* Nimble to Nimble Acuity */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Nimble Software Development Services to Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            At Nimble Acuity, we prioritize data security with NDAs, real-time rogue
            access detection, and encrypted processes. Our experts work closely
            with your team to deliver custom data science solutions across
            industries. Available 24/7, we’re committed to turning raw business
            data into actionable insights.
          </p>
        </div>

        {/* Contact Us Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default OutsourcingDataScience;
