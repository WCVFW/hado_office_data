import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DigitalQueryAssistantServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Digital Query Assistant Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Increase your chances of upselling and cross-selling with our digital query assistant services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            With increasing interaction channels, it is becoming harder for brands to meet customer service expectations. Inefficiencies in addressing consumer concerns can hurt your brand reputation. Digital query assistant (DQA) services may be the only way to fill the cavities as they integrate interactions across disparate communication channels. This AI-powered self-knowledge system enables brands to optimize customer interactions, reduce call resolution time, and boost productivity.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity has extensive experience offering DQA solutions to international clients. With every interaction, our chatbots provide relevant and contextualized content to customers. They integrate effortlessly with service center software, ticketing systems, and CRMs. Reach out to our experts now to discuss your specific business needs, and we will deliver customized, industry-specific DQA solutions that deliver on your business KPIs.
                        </p>
                    </div>

                    {/* Solutions We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Digital Query Assistant (DQA) Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our predictive chatbots are an advanced computer program that stimulates engaging conversations with your customers; they help and guide them intuitively through every step of the way. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Service Digital Assistant</h4>
                                <p>
                                    Our digital assistants guide your customers seamlessly through processes and functions. Thanks to our services, chores like personalized credit card approvals can now take minutes instead of days. Our chatbots can also reduce call center L1 calls by a significant margin.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Super-Agent Virtual Assistant</h4>
                                <p>
                                    Our bots, powered by cognitive learning, assemble knowledge and use it for instant query resolutions. It increases agent productivity and reduces onboarding time by a significant percentage.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Airport Virtual Steward</h4>
                                <p>
                                    Our virtual assistants improve the passenger experience by intuitively guiding them through boarding and navigation processes. For better customer engagement, these bots are programmed with the ability to book meals, reserve taxis, and shop at the airport while at home.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">In-moment Virtual Advisors</h4>
                                <p>
                                    Our in-moment virtual advisors help customers with travel guides, product recommendations, and the like. They accumulate knowledge, provide guidance, and assist in personalized sales.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Financial Research Virtual Assistant</h4>
                                <p>
                                    Our digital assistants can serve as virtual research aids. Researchers can leverage them to create accurate reports on any topic. End users can also get correct answers to personalized queries on research.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are a digital query assistant company with extensive industry experience in dealing with global clients. Outsource DQA services to us to leverage the following benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Effective Pricing:</strong> We offer customized pricing to our clients. Our flexible payment modules enable you to hire qualified experts at reasonable rates.</li>
                            <li><strong>Increase Profitability:</strong> The cost of retaining a customer is much less than that of acquiring new ones. Save costs and increase your profitability by enhancing the customer experience with our digital assistants.</li>
                            <li><strong>Highly Scalable Solutions:</strong> We offer highly scalable DQA solutions. We can dial our services up or down with short notice at no additional costs, without adversely affecting project timelines.</li>
                            <li><strong>State-of-the-art Infrastructure:</strong> Our global delivery centers have top-notch equipment and the latest software. We leverage our world-class infrastructure to deliver international quality standards.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Enhance Your Customer Experience?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a software development service provider with extensive industry experience. By outsourcing digital query assistant services to us, you get an ISO-certified company with global experts, best-in-class digital assistants, and a rich, interactive experience for your customers. We also ensure stringent security protocols for absolute data safety and provide 24/7 customer service support.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get a Free Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DigitalQueryAssistantServices;