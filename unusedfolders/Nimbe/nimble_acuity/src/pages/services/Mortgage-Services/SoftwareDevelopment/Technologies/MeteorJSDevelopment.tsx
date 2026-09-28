import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MeteorJSDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Meteor.js Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We build highly intuitive and responsive web and mobile apps using the isomorphic Meteor.js framework for fluid form and function.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Experience full-throttle performance in your scalable web and mobile app by partnering with Nimble Acuity for Meteor.js development services. We specialize in rapid prototyping and the production of cross-platform code. Whether you need a full-suite Meteor app or a specific web framework, we provide the best solutions because we are a leading Meteor.js development company.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity provides the expertise to build secure and scalable web apps that are functional across a range of devices. We build apps that are lightweight, agile, and easy to maintain in the long run. Our ability to incorporate all these features makes us the best partner for your Meteor.js development needs.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Meteor.js Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When you choose a Meteor.js development service provider like Nimble Acuity, you get access to a team that will work with you to capture your exact project vision and make the outcome just as you envisioned. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Meteor.js Application Development</h4>
                                <p>
                                    Meteor.js is a powerful JavaScript framework that simplifies and accelerates web application development. We can add real-time data capabilities to your existing web apps or create new ones from scratch.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Backend and Dashboard Development</h4>
                                <p>
                                    Using the Meteor.js framework, we build custom dashboards to capture and interpret data from real-time traffic, enabling you to make business decisions faster.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Chatbot App Development</h4>
                                <p>
                                    We develop custom AI-powered chatbot apps that make users feel like they are speaking to a human agent. Our chatbots are implemented with a training module that self-learns through engaging conversations.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Responsive App Development</h4>
                                <p>
                                    We use the Meteor.js framework to create fluid and robust responsive apps that transform your digital experience and deliver personalized content on any device.
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
                            Choosing Nimble Acuity is a great decision because we are a leading Meteor.js development company. Here are some of the benefits of partnering with us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Customized Services:</strong> We offer service packages that are customized to your budget, ensuring the project is developed as per your expectations.</li>
                            <li><strong>High Quality:</strong> Our development services are authentic and aim to limit risk. Our solutions are ISO 9001:2015 certified for quality.</li>
                            <li><strong>Experienced and Professional:</strong> We have highly specialized web development professionals with extensive knowledge of the latest Meteor.js development strategies.</li>
                            <li><strong>Exceptionally Agile:</strong> Our speedy workflow ensures a great development experience with a tight turnaround time.</li>
                            <li><strong>Data Security:</strong> We are compliant with the ISO/IEC 27001:2022 standards of data protection, keeping your data secure.</li>
                            <li><strong>Maintainable and Scalable:</strong> We always take measures to ensure that your website is scalable for future growth.</li>
                            <li><strong>Friendly Support:</strong> We offer reliable customer support via phone, email, and webchat to serve clients in all geographies.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build with Meteor.js?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, we recommend custom software development solutions that are affordable and top-notch in quality. Our strategic approach, coupled with intuitive web features, drives market penetration and growth.
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

export default MeteorJSDevelopment;