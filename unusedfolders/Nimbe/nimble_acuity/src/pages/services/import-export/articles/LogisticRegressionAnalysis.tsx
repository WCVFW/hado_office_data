import React from "react";
import NavigationMenu from "../MegaMenu";

const LogisticRegressionAnalysis: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Intro */}
      <NavigationMenu/>
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Understanding Logistic Regression Analysis & Why You Need It
        </h1>
        <p className="text-gray-700 leading-relaxed">
          Whether you are a market researcher predicting new product launches or
          a wildlife biologist studying wolf pack breeding in the Rocky
          Mountains, you can make reliable predictions using the powerful
          Logistic Regression Analysis (LRA) model.
        </p>
      </section>

      {/* Understanding LRA */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Understanding Logistic Regression Analysis (LRA)
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Logistic Regression Analysis is used when analyzing and predicting a
          discrete set of outcomes. For example, you may wish to predict the
          success or failure of a new product, or the likelihood of customer
          retention versus loss. In statistics, logistic regression predicts the
          result of a categorical dependent variable based on one or more
          predictors or independent variables.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Unlike linear regression models (which predict continuous outcomes),
          logistic regression models predict dichotomous categorical outcomes,
          often coded as <strong>0</strong> and <strong>1</strong>. Multinomial
          logistic regression, on the other hand, can handle three or more
          possible outcomes such as yes/no/maybe scenarios for purchasing
          products.
        </p>
      </section>

      {/* Applications */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          The Applications and Benefits of Using LRA
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Logistic regression is widely applied in marketing, healthcare, and
          social sciences. For example:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
          <li>
            Predicting voting behavior based on demographics such as age,
            gender, and location.
          </li>
          <li>
            Predicting customer retention in business analytics (e.g., whether a
            customer will return, not return, or maybe return).
          </li>
          <li>
            Identifying consumer behavior patterns to aid in product purchases
            or marketing strategies.
          </li>
        </ul>
      </section>

      {/* Related Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Related Services
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition text-gray-800 font-medium"
          >
            Market Research Services
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition text-gray-800 font-medium"
          >
            PowerPoint Presentation Support
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition text-gray-800 font-medium"
          >
            Database Creation Services
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-50 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Nimble Logistic Regression Analysis to Nimble Acuity
        </h2>
        <p className="text-gray-700 mb-6">
          Instead of building an in-house team, outsourcing logistic regression
          analysis to Nimble Acuity saves you cost, time, and effort — while
          giving you access to expert analysts, domain knowledge, and advanced
          data analytics capabilities. We help you make reliable predictions and
          gain a competitive advantage.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default LogisticRegressionAnalysis;
