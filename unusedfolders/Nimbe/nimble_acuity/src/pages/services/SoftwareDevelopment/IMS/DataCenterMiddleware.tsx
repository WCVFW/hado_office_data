import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DataCenterMiddleware: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Data Center Middleware Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Effectively run business applications with excellent stability through our middleware and database services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Every business uses multiple applications, and **data center middleware** is the technology that connects them all. It's an essential mediator between application components in a business's distributed network, determining the performance and integration of business applications. **Nimble Acuity** is a leading data center middleware services provider with extensive experience in serving numerous organizations. Our team of experts has the skills and capabilities to tune middleware performance using advanced technologies, helping you align business processes through data and application integration to drive essential, actionable insights.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Middleware and Database Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity stands out as a market leader in the data center middleware service industry. With in-house technologies and human expertise, our team provides unbeatable services at the most affordable rates. Our comprehensive services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Database Migration & Alignment</h4>
                                <p>
                                    Our experts have the technical expertise to align business applications through data center middleware and ensure fast and secure data migration to your database.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Normalization</h4>
                                <p>
                                    We normalize your data to enhance effective lead management and empower the efficiency of your data management without any data loss.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automation of Routine Database Tasks</h4>
                                <p>
                                    We optimize your business processes by automating specific tasks, such as automated agent recovery and start-up/shut-down processes during maintenance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Security Management</h4>
                                <p>
                                    We ensure your data is completely protected through industry-leading security mechanisms to avoid, identify, and stop any security breach.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Backup and Restore</h4>
                                <p>
                                    We build safe and automated backup solutions to prevent significant data loss from technical glitches, and we can restore functions for your database.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Performance Tuning</h4>
                                <p>
                                    Our experts tune the performance of your data, servers, and applications by optimizing them to reduce response time and deployment time while improving migration speed.
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
                            As a reliable data center service provider, we undertake data management, migration, and upgrades to improve the efficiency of your business processes. With our unmatched expertise, you can enjoy the following advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Hand-picked Experts:</strong> Our services are delivered by domain experts with proven experience, ensuring top-notch quality.</li>
                            <li><strong>Superlative Service Quality:</strong> Our team is committed to delivering quality services that exceed customer expectations.</li>
                            <li><strong>Affordable and Transparent Pricing:</strong> We offer a variety of pricing plans to meet every client's requirements, maintaining transparent dealings.</li>
                            <li><strong>Round-the-clock Monitoring:</strong> With 24/7/365 monitoring, we reduce data center risks and offer valuable insights for streamlining future processes.</li>
                            <li><strong>Proactive Approach:</strong> Our experts have a proactive approach to providing seamless data management and uninterrupted use of business applications.</li>
                            <li><strong>Assured Data Protection:</strong> We maintain the highest security levels and industry-standard practices to ensure your data is not compromised.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Optimize Your Applications?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading data center middleware services company. By outsourcing your needs to us, you can build a robust application delivery platform that drives business process insights and helps you outperform your competitors.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Our Experts
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DataCenterMiddleware;