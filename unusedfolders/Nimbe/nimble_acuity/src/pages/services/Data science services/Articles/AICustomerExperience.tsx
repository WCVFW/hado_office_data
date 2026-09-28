import React from "react";
import DSMainMenu from "../mainmenu";


const AICustomerExperience: React.FC = () => {
  return (
    <div>
      {/* ✅ Sticky Navigation Bar */}
      <DSMainMenu />

      {/* ✅ Page Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Title */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            How Can AI Help in Reshaping Customer Experiences?
          </h1>
          <h2 className="text-xl text-gray-600">
            Customers, today, are tech-savvy and demand seamless interactions.
          </h2>
        </header>

        {/* Intro */}
        <section className="space-y-4 text-gray-700">
          <p>
            Customers today use multiple channels to search, purchase, and get
            information. Unfortunately, many companies still rely on outdated
            engagement methods, which can frustrate or disappoint customers.
          </p>
          <p>
            To provide exciting and convenient customer experiences, businesses
            must leverage artificial intelligence (AI). AI can create deeply
            personal customer journeys that feel natural and engaging like never
            before.
          </p>
        </section>

        {/* Need for AI */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            The Need for AI in Customer Experience
          </h2>
          <p className="text-gray-700 mb-4">
            Customer experience can be a double-edged sword: done poorly, it
            leads to failure; done right, it delivers huge competitive
            advantages. Real-time, actionable insights are critical, but messy,
            unstructured datasets make this hard. This is where AI shines.
          </p>
          <p className="text-gray-700">
            AI helps businesses identify patterns, understand preferences, and
            deliver consistent experiences across every touchpoint.
          </p>
        </section>

        {/* Adoption of AI */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Adopting AI in Businesses
          </h2>
          <p className="text-gray-700 mb-4">
            Industry experts predict enterprise investment in AI will grow by
            over 300% in the coming year. But AI affects three main groups:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>The developers and teams implementing the AI systems</li>
            <li>Employees whose tasks may be partially automated</li>
            <li>The customers who directly interact with AI-driven services</li>
          </ul>
          <p className="text-gray-700 mt-3">
            Younger generations may adopt AI naturally, while older employees
            and customers may face a steeper learning curve. Regulations like
            GDPR also shape how businesses collect and use customer data.
          </p>
        </section>

        {/* Collaboration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Collaborating with AI
          </h2>
          <p className="text-gray-700 mb-4">
            Human-machine collaboration can produce great outcomes. Natural
            language processing and machine learning allow organizations to
            analyze conversations, detect complaints, and improve customer
            experiences over time.
          </p>
          <p className="text-gray-700">
            Employees will need new skills to work effectively with intelligent
            systems, but human expertise in business and customer domains will
            always be essential.
          </p>
        </section>

        {/* Ways AI Enhances CX */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How AI Enhances Customer Experience
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Seamless Delivery:</strong> AI ensures smooth, natural
              customer journeys where decisions feel effortless.
            </li>
            <li>
              <strong>Enhanced eCommerce Accuracy:</strong> AI powers dynamic
              pricing, product recommendations, and personalized journeys.
            </li>
            <li>
              <strong>More Channels for Personalization:</strong> From voice and
              facial recognition to chatbots, AI enables engaging, customized
              interactions.
            </li>
            <li>
              <strong>Balancing Security & Convenience:</strong> AI minimizes
              fraud risks while ensuring customers enjoy frictionless
              experiences.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Contact Nimble Acuity for Your AI Requirements
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity has delivered digital and AI-driven solutions for
            over a decade, from lead scoring and process automation to big data,
            predictive analytics, and recommender systems.
          </p>
          <p className="text-gray-700 mb-4">
            Our ISO-certified team of data scientists and software developers
            can build tailor-made AI solutions for any domain or industry.
          </p>
          <p className="text-gray-700 font-medium">
            📩 Contact us today — we’ll get back to you with a quote within 24
            hours.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AICustomerExperience;
