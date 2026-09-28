import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const BizTalkDevelopmentServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            BizTalk Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Combine all your heterogeneous data into a single business process to streamline your operations.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Every business uses different software products to meet various needs, including ERP, CRM, databases, and financial systems. The biggest challenge is making all this software work together seamlessly. This is where BizTalk—a powerful middleware product—comes to your rescue. However, to ensure a smooth interface, you need to work with an experienced BizTalk company that deeply understands each underlying system and a host of data formats.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity offers top-notch BizTalk design and development services to help clients worldwide integrate their systems and business processes. As a professional BizTalk development company with extensive experience in software development, you can be assured that collaborating with us will significantly ease your business operations.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            BizTalk Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We work with a team of professional BizTalk experts who are adept at understanding your requirements and have complete knowledge of various system interfaces and software. They create a BizTalk interface that helps you integrate all your major software for hassle-free business processes.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Adapter Development</h4>
                                <p>
                                    We assist you in the application integration process by developing custom adapters tailored to your specific needs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Ports and Pipelines</h4>
                                <p>
                                    Our BizTalk developer team creates customized send and receive ports and pipelines to streamline your data flow.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Migration and Upgrades</h4>
                                <p>
                                    If you have existing BizTalk applications, we can help you migrate or upgrade them to the latest versions for improved performance and security.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business Orchestration</h4>
                                <p>
                                    We can develop business orchestrations that automate your business processes, freeing up your team to focus on core tasks.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cloud Integration</h4>
                                <p>
                                    We provide complete assistance with integrating various servers and systems within cloud environments, ensuring a flexible and scalable solution.
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
                            Nimble Acuity is a leading BizTalk development service provider with a proven track record of catering to businesses of all sizes. We are the right choice for a variety of reasons:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Prices:</strong> Our BizTalk services are priced competitively, giving you access to premium-quality solutions without budget constraints.</li>
                            <li><strong>Great Infrastructure:</strong> With our superb infrastructure, we have access to all the latest tools and technologies required for our BizTalk design and development processes.</li>
                            <li><strong>High-Quality & Secure:</strong> As an ISO-certified company, data security is our priority. You can rest assured that all information you share with us is kept confidential at all times.</li>
                            <li><strong>Expert Team:</strong> Our team of professional BizTalk experts is dedicated to understanding your specific requirements and delivering a solution that works flawlessly.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Simplify Your Business Operations?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity offers expert BizTalk development services to our global clientele. Our team has the knowledge and skills required to develop BizTalk interfaces that make it easier for you to engage in your day-to-day business operations.
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

export default BizTalkDevelopmentServices;