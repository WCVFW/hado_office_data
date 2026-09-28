import React from "react";
import {
  ShoppingCart,
  Mail,
  RefreshCw,
  Users,
  Star,
  Store,
  PhoneCall,
  Settings,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const RecommenderSystem: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Recommender System Development Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Build intelligent systems that boost cross-sell and up-sell by
          providing smart, personalized product recommendations based on
          customer interests, purchase history, and browsing patterns.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Smart Recommendations for E-commerce Growth
        </h2>
        <p className="text-gray-600">
          We develop intuitive AI-powered recommender systems that help
          e-commerce businesses engage customers with relevant product
          suggestions. Our solutions use deep learning and machine learning
          algorithms to personalize experiences and increase sales.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Key Features of Our Recommender Systems
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: RefreshCw,
              title: "Ad Recommendations for Re-targeting",
              desc: "Re-engage prospects with smart ads for products they showed interest in earlier.",
            },
            {
              icon: Mail,
              title: "After-sales Marketing",
              desc: "Keep customers engaged with offers and messages even after purchases.",
            },
            {
              icon: ShoppingCart,
              title: "Recommendations During Returns",
              desc: "Suggest alternative products, sizes, or styles during product returns.",
            },
            {
              icon: Star,
              title: "Out-of-stock Alternatives",
              desc: "Turn lost opportunities into conversions by recommending similar products.",
            },
            {
              icon: Users,
              title: "Personalized Merchandising",
              desc: "Show each customer products tailored to their unique preferences.",
            },
            {
              icon: Mail,
              title: "Follow-up Email Marketing",
              desc: "Send personalized follow-up emails with product suggestions.",
            },
            {
              icon: Store,
              title: "In-store or Proximity Marketing",
              desc: "Use NFC, Beacons, and GPS to attract nearby customers with offers.",
            },
            {
              icon: PhoneCall,
              title: "Customer Service Recommendations",
              desc: "Empower agents with AI-driven cross-sell and up-sell suggestions.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <item.icon className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Development Process
        </h2>
        <ol className="space-y-6">
          {[
            "Requirement Analysis – Understanding client needs and analyzing their platform.",
            "Solution Development – Building a custom recommender engine with AI & ML.",
            "Integration – Embedding the solution into your e-commerce website or app.",
            "Result Enhancement – Monitoring system performance and improving accuracy.",
            "Continuous Updates – Regular improvements for personalized marketing & retargeting.",
          ].map((step, idx) => (
            <li
              key={idx}
              className="flex items-start gap-4 bg-white shadow p-4 rounded-xl"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold">
                {idx + 1}
              </span>
              <p className="text-gray-700">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits of Partnering with Nimble Acuity
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Increased customer satisfaction through personalized offers.",
            "Easy cross-sell and up-sell with smart suggestions.",
            "Higher basket size and average order value.",
            "Improved search engine visibility through repeat visits.",
            "Cost-effective development with reduced operational costs.",
            "ISO-certified high-quality recommender software.",
            "Dedicated project manager as single point of contact.",
            "24/7 availability aligned with your time zone.",
          ].map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow"
            >
              <span className="w-3 h-3 mt-2 bg-purple-600 rounded-full"></span>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Boost Your E-commerce Sales?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Transform your online store with AI-powered recommendations that
          enhance customer experience, increase loyalty, and maximize revenue.
        </p>
        <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default RecommenderSystem;
