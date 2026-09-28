import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const InfrastructureApplicationSupportServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Infrastructure Application Support Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Ensure your mission-critical infrastructure applications are running smoothly, securely, and are always up-to-date with our comprehensive support services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            In today's dynamic business environment, how do you make sure that your mission-critical infrastructure applications are running smoothly, while being up-to-date, integrated, and secure? Growing businesses often do not have a well-thought strategy when it comes to infrastructure application support, and this leads to inefficient functioning of vital applications, loss of time and money, and unplanned disruption in business activities.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            It is important to have infrastructure application support to ensure the smooth functioning of your business. However, in-house application support can be cost-centric with no real returns. By outsourcing the management and maintenance of IT infrastructure applications, businesses can make sure they are ready to face any challenge and grow along with the market. At Nimble Acuity, we offer reliable infrastructure application support services to global clients.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Infrastructure Application Support Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has been offering IT infrastructure management services for years, and application support is a part of our wide service portfolio. We can customize our offerings for your business needs and help you align your operations with your objectives. Our infrastructure application support services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Application Support Strategy</h4>
                                <p>
                                    Our team works with global companies to provide a defined strategy for application support services, ensuring your business applications remain effective and useful while reducing costs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Application Production Support Services</h4>
                                <p>
                                    From application architecture and production design to day-to-day infrastructure application support, we handle everything. We bring our experience to the table to help you implement and operate your applications smoothly.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Application Enhancement Support Services</h4>
                                <p>
                                    As businesses grow, there's a constant need for enhancements. Our services include change management, product upgrades, technology migration, configuration changes, and third-party tools implementation.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Application Integration Services</h4>
                                <p>
                                    We ensure new tools, features, and apps are integrated with your infrastructure applications quickly, seamlessly, and without any downtime or loss of productivity.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Preventive Application Maintenance</h4>
                                <p>
                                    Proactive and preventive maintenance is a necessity for mission-critical enterprise applications. We help you minimize and control downtime, ensuring your business runs without interruption.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Incident Management, Troubleshooting, & RCA</h4>
                                <p>
                                    When incidents happen, our expert team manages them based on priority, resolves the issue, and generates a root cause analysis report with corrective measures to avoid future failures.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automation of Application Support Services</h4>
                                <p>
                                    We tailor-make automated parts of the application support function based on your business requirements, which saves time and cost for daily processes.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Application Compliance Management</h4>
                                <p>
                                    We ensure that all your applications are secure and in compliance with the safety norms and other standards relevant to your industry.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity offers services for all aspects of infrastructure management, including network, server, and security infrastructure. By outsourcing to us, you can take advantage of:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Flexible Support Model:</strong> Our customized support model ensures top-quality services at extremely affordable rates.</li>
                            <li><strong>Remote & On-Premise Support:</strong> We provide both remote and on-premise support for all types of business applications.</li>
                            <li><strong>24/7 Monitoring:</strong> We offer 24x7x365 monitoring to improve the availability of your infrastructure applications.</li>
                            <li><strong>Strict SLAs:</strong> We adhere strictly to pre-defined Service Level Agreements (SLAs) to ensure a high level of service.</li>
                            <li><strong>Enhanced Experience:</strong> We focus on reducing the number of incidents and issues, leading to an enhanced end-user experience.</li>
                            <li><strong>Secure Infrastructure:</strong> Our processes ensure a safe and secure application infrastructure for your business.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Partner with Nimble Acuity for Reliable Application Support
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of infrastructure application support services. Our services also include remote monitoring, IT helpdesk, and data center services. We have in-house professionals with years of experience working with popular infrastructure apps like Oracle, SAP, and Microsoft. We offer a managed services model where we take end-to-end responsibility, allowing you to free up resources for other business functions.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InfrastructureApplicationSupportServices;