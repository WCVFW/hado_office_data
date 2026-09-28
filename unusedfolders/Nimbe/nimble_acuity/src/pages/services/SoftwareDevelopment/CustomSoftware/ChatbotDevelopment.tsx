import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ChatbotDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Chatbot Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get smart chatbots developed for your business to enhance client interaction and make your site user-friendly.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to streamline customer interaction using chatbots? Chatbots offer a revolutionary way to take client relationships to the next level using NLP, AI, and ML technologies. At Nimble Acuity, we offer a range of chatbot development services for social media, web apps, e-commerce, and more.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading chatbot development service provider with decades of experience. We design chatbots that parse context, intent, and action to frame the correct response. Our proven expertise and social proof of our success are among many reasons why we are the best chatbot development service provider.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Chatbot Development Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Chatbot Conversation Design</h4>
                <p className="text-gray-700">We make conversation possible by interfacing Natural Language Interface (NLI) with user touchpoints like navigation buttons and menus, creating dynamic and user-oriented designs.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Natural Language Processing Support</h4>
                <p className="text-gray-700">Our NLP experts build chatbots that identify user intent, action, and context through precision parsing to frame instant and relevant responses, customizing NLP for constant learning.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Custom Chatbot Architecture</h4>
                <p className="text-gray-700">Our chatbot architects have a proven track record of building architectures made of APIs, frameworks, and plugins. They build custom architectures tailored to your business requirements.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Chatbot Consultant Support</h4>
                <p className="text-gray-700">If you have queries about implementing and adapting to chatbots, our consultants will be glad to assist you in every manner.</p>
              </div>
              {/* Service Card 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Chatbot Integration Support</h4>
                <p className="text-gray-700">We provide full-fledged integration support to launch your chatbot, offering on-premise or cloud-based support for a seamless integration with your workflow.</p>
              </div>
              {/* Service Card 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Chatbot Pipeline Processing</h4>
                <p className="text-gray-700">As part of custom chatbot development, we take great care to avoid false-negative and false-positive results by developing processing pipelines that solve all parsing errors.</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Chatbot Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Strategy and Proposal:</strong> We communicate with clients to understand their business requirements and challenges.</li>
              <li><strong>Designing:</strong> We strategize chatbot development without exceeding the client's budget.</li>
              <li><strong>Client Approval:</strong> The concept is presented to the client for their approval and feedback.</li>
              <li><strong>Development and Integration:</strong> Once approved, the project commences, and the chatbot is implemented and integrated into a test environment.</li>
              <li><strong>Quality Check:</strong> The implementation is thoroughly tested to ensure bot responses are relevant to user queries.</li>
              <li><strong>Go-live:</strong> If all test parameters are cleared, we help in deploying the chatbot outside the test environment.</li>
              <li><strong>Support and Maintenance:</strong> We routinely evaluate the chatbot system and provide timely support.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Pricing:</strong> Our services are affordable and customizable to your budget.</li>
              <li><strong>High-quality Services:</strong> We ensure 100% client satisfaction before the project is signed off.</li>
              <li><strong>Seamless Integration:</strong> We provide full integration support to ensure the chatbot works flawlessly in your end-user environment.</li>
              <li><strong>Rapid Turnaround Time:</strong> Our services are implemented swiftly without delaying your schedule.</li>
              <li><strong>Scalable Solutions:</strong> Our chatbot solutions are highly scalable to keep up with your business needs.</li>
              <li><strong>ISO Certified Provider:</strong> We are ISO 9001:2015 certified, pursuing quality, timeliness, and security in all our practices.</li>
              <li><strong>100% Data Security:</strong> Your business data is 100% safe, and we ensure it is not exposed to risks.</li>
              <li><strong>Round-the-clock Support:</strong> We support our clients from nearly all geographies via phone, email, and web chat.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Enhance Your Customer Interactions?
            </h3>
            <p className="text-gray-700 mb-6">
              At Nimble Acuity, our development teams have access to superb infrastructure and advanced chatbot development technologies. We have over 26 years of experience in software development, creating high-quality solutions that have earned us the reputation as a top chatbot service provider.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              To know more about outsourcing chatbot development services, get in touch with us now. We guarantee to provide a free quote.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ChatbotDevelopment;