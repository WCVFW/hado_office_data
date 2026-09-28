import React from "react";
import DSMainMenu from "../mainmenu";

const RpaChatbots: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-16">
        <DSMainMenu/>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Introducing RPA and The Best RPA Chatbot Tools
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 mb-6">
          Chatbots have become increasingly popular in recent years due to the
          rising volume and complexity of customer queries. Businesses seeking
          round-the-clock engagement turn to AI-powered chatbots for a cheaper,
          more efficient solution than staffing live agents 24/7.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          RPA (Robotic Process Automation), when combined with AI, enables
          chatbots to provide intuitive, natural responses to customer questions.
          This technology reduces inefficiencies caused by human error and
          enhances customer experiences.
        </p>

        {/* What RPA does */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          What Does an RPA Do?
        </h2>
        <p className="text-gray-700 mb-8">
          RPA bots are programmed to execute preset tasks, process data quickly,
          recommend solutions, and sometimes even begin resolution processes.
          This combination is especially useful in industries like finance and
          insurance, where customers can retrieve policy or claim details
          instantly by interacting with RPA bots.
        </p>

        {/* Tools List */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          6 Most Popular RPA Chatbot Tools
        </h2>
        <div className="space-y-8">
          {/* IBM Watson */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              IBM Watson
            </h3>
            <p className="text-gray-700">
              Used by over 60% of businesses, IBM Watson offers neural
              network–driven chatbots that understand dialogue and intent. It
              supports English and Japanese, includes developer tools, and stores
              all conversations for future insights to improve performance.
            </p>
          </div>

          {/* Microsoft Bot */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Microsoft Bot
            </h3>
            <p className="text-gray-700">
              A free, cost-effective platform to create bots that integrate with
              Slack, Facebook, email, and more. Powered by Microsoft Cognitive
              Services, these bots can interpret speech, recognize images,
              translate languages, and even regulate content.
            </p>
          </div>

          {/* Amazon Lex */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Amazon Lex
            </h3>
            <p className="text-gray-700">
              Built with the same deep learning tech as Alexa, Amazon Lex
              provides speech-to-text, natural language comprehension, and
              intent recognition. It’s easy to deploy, scales automatically with
              AWS, and is ideal for transactions, device control, and enterprise
              productivity.
            </p>
          </div>

          {/* Dialogflow */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Dialogflow
            </h3>
            <p className="text-gray-700">
              Google’s Dialogflow provides advanced NLP for text and voice bots.
              With one-click deployment across 14 platforms, it’s highly
              versatile, though it requires significant coding skills for
              customization and scaling.
            </p>
          </div>

          {/* Oracle Chatbot */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Oracle Chatbot
            </h3>
            <p className="text-gray-700">
              Oracle’s intelligent bots maintain context with ML and intent
              detection, offering scalable enterprise solutions. They integrate
              across apps, sites, and voice assistants, with inbuilt analytics to
              measure bot and customer behavior performance.
            </p>
          </div>

          {/* Facebook Wit.ai */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Facebook Wit.ai
            </h3>
            <p className="text-gray-700">
              Wit.ai allows apps to respond to spoken or written queries,
              leveraging NLP for intent recognition. It’s best for simple B2C
              bots and integrates well with Facebook Messenger and other
              platforms.
            </p>
          </div>
        </div>

        {/* Nimble Acuity Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Nimble Your Chatbot Development to Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            With extensive experience across industries, Nimble Acuity delivers
            innovative AI-powered apps and chatbot solutions. Our ISO-certified
            teams specialize in mobile and software development, data science,
            and CPA services, ensuring top-quality custom solutions.
          </p>
          <p className="text-gray-700 mb-4">
            We help businesses leverage the right chatbot technology to enhance
            customer journeys and stay competitive in a rapidly evolving digital
            landscape.
          </p>
        </div>

        {/* CTA */}
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

export default RpaChatbots;
