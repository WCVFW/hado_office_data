import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const AlfrescoDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Alfresco Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to complete Alfresco development services, from designing themes and templates to creating customized web parts.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Many organizations have started leveraging **Alfresco**, an Enterprise Content Management System that comes loaded with a variety of features, from managing records and web content to media and documentation. As an open-source ECM solution, Alfresco offers scalability and flexibility, requiring only support and maintenance expenses for long-term use. To get the best results, you need a professional Alfresco development service provider.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With over 26 years of experience in offering **Alfresco design and development services** to clients from all around the world, Nimble Acuity guarantees satisfaction. We are a leading provider of Alfresco services, with the skills and experience to implement a seamless integration of Alfresco ECM in your business operations using technologies such as JSON and AJAX.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Alfresco Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a specialized Alfresco development services provider, we offer a wide range of solutions, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Configuration and Development</h4>
                                <p>
                                    When you communicate your requirements, we plan the Alfresco design and development accordingly, configuring the platform to help you make the most out of Alfresco's capabilities.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Alfresco Integration</h4>
                                <p>
                                    With all the skills and expertise our team possesses, you can completely depend on our Alfresco integration solutions that help you seamlessly connect Alfresco with all your preferred tools.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Alfresco Consulting Services</h4>
                                <p>
                                    Our team of Alfresco consultants has extensive experience in providing solutions to enterprises to help meet their content management process needs and, as a result, improve business revenue.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Alfresco Process Management Services</h4>
                                <p>
                                    Our process management services are geared toward offering you insights for creating customized document workflows that simplify your processes and improve efficiency.
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
                            We work with a team of capable Alfresco developers who are committed to understanding your requirements. Some other reasons to work with us include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Prices:</strong> Our services are offered at budget-friendly rates, so your budget is never a constraint, regardless of your enterprise's size.</li>
                            <li><strong>Data Security:</strong> As an ISO-certified company, we ensure all the information you share with us is kept completely confidential. We strictly adhere to international security standards.</li>
                            <li><strong>Single Point of Contact:</strong> We assign you a dedicated project manager as a single point of contact so you can communicate all your queries and receive timely updates.</li>
                            <li><strong>Scalability:</strong> We have all the resources and bandwidth to accommodate your upscaling requirements at any given point.</li>
                            <li><strong>24/7 Services:</strong> Our team of customer care and support executives is available 24/7 to answer your queries and address your concerns.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Optimize Your Content?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading Alfresco development service provider with extensive experience and expertise in simplifying the platform's features to make it easy to understand and leverage. We are committed to providing solutions that add true value to your enterprise operations with the help of highly specialized developers. Whether it's development, implementation, or maintenance, we have you completely covered.
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

export default AlfrescoDevelopment;