import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const EnterpriseApplicationIntegrationServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Enterprise Application Integration Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Eliminate redundancies, improve information sharing, consolidate data collection, and create reliable data storage by availing our enterprise application integration services at rates starting at just $20 an hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you facing challenges with enterprise application integration for your business? Are you falling short of skilled and experienced experts who can take care of all your needs? The best option for you would be to outsource enterprise application integration services to a skilled service provider.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is an enterprise application integration service providing company that can cater to all your requirements. We have some of the most experienced and skilled experts on board who can deliver the best quality services. We leverage the power of the latest tools and technologies to deliver top-notch services.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Enterprise Application Integration Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has been a pioneer in providing quality enterprise application integration services to global clients for over 26 years. We have gained enough experience to understand each client's unique requirements and provide them with customized solutions. Our key services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">API Integration</h4>
                                <p>
                                    We have the required skills and expertise to help clients with accurate and error-free API integration services. We use the latest tools and technologies to deliver top-notch services within a quick turnaround time.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Point-to-point Integration</h4>
                                <p>
                                    Our team of developers takes care of all your point-to-point integration requirements. We have the required infrastructure and technologies to enable us to deliver the best quality services to clients within a quick time.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Heterogeneous Data Integration</h4>
                                <p>
                                    We have the required skills to develop customized data management solutions and interfaces for different data assets. We make use of the latest data integration tools and ensure that we deliver the best quality services in a short time.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise App Integration</h4>
                                <p>
                                    Our team has some of the most skilled and experienced enterprise app experts who can understand your requirements and provide you with services that are tailored to suit your business needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Enterprise Application Integration?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing to Nimble Acuity gives you access to a series of benefits. Some of the major reasons to choose us are:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing:</strong> We provide highly flexible pricing options that will suit your business requirements and budget.</li>
                            <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS certified firm, you can rest assured that all your data is completely safe with us.</li>
                            <li><strong>Superior Quality:</strong> We are an ISO certified firm that ensures all services delivered by us are of the best quality and completely error-free.</li>
                            <li><strong>Experienced Team:</strong> Our team comprises some of the most skilled and experienced enterprise application experts who can cater to all your requirements with ease.</li>
                            <li><strong>Single Point of Contact (SPOC):</strong> When you choose us, we will assign you a dedicated project manager who will be the SPOC for all your needs.</li>
                            <li><strong>Scalable Services:</strong> We have the required skills and expertise to scale up the service requirements and increase the team size as and when you need it.</li>
                            <li><strong>Quick Turnaround Time:</strong> Our teams operate through several delivery centers spread across the globe, enabling us to deliver the best quality services within a quick time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Enterprise Application Integration to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been a pioneer in providing quality enterprise application integration services. We have some of the most skilled and experienced software developers on board who can take care of all your requirements with ease. We leverage the power of the latest enterprise application integration software while delivering top-notch services.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EnterpriseApplicationIntegrationServices;