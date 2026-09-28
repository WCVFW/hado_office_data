import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ServerManagementServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Server Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Outsource server management to us so we can take care of your servers, unburdening your in-house experts to focus on more critical tasks.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            As your company expands with more customers and data, it becomes a real challenge to handle and operate servers efficiently with a limited number of professionals. The pressure increases as teams must be proficient in handling different equipment while aligning operations to the goal of reducing costs. This is when outsourcing server management services becomes a game-changer, enhancing the way your servers are operated hassle-free.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a professional server management service provider that takes into account the diverse requirements of a company to lend complete support. With our robust experience and knowledge, we ensure you're always on top of technology and trends, helping you grow your business with zero worries.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Server Management Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity offers complete server management services to companies of all sizes and from different verticals. We handle server monitoring, hardening, and every bit of service to keep your business running smoothly.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Server Administration</h4>
                                <p>
                                    Our server administration services are aimed at taking care of server health in advance, preventing possible issues and ensuring optimum functioning.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Server Hardening</h4>
                                <p>
                                    This process consists of operations and techniques for tightening security and identifying possible threats to take preventive measures. We conduct security audits and check for vulnerabilities.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Server Configuration</h4>
                                <p>
                                    We conduct server configuration while taking into account your business requirements to optimize the infrastructure's effectiveness. We help with custom configuration, re-configuration, or mail server configuration.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Server Optimization</h4>
                                <p>
                                    We ensure your server is not slow by identifying and resolving any issues that hinder its speed. This is a crucial service to keep your business running smoothly.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Server Monitoring</h4>
                                <p>
                                    Our team of experts is dedicated to keeping a close eye on server operations so that any malicious activities can be identified for proactive measures.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Troubleshooting</h4>
                                <p>
                                    Our troubleshooting team is dedicated to checking for configuration errors and hardware issues, locating the root cause, and implementing tried and tested techniques for efficient resolution.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Server Updates</h4>
                                <p>
                                    We offer timely server updates to ensure that security is not compromised and is up-to-date, combatting threats and issues that increase downtime.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Server Management Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a trusted partner for outsourcing server management services at a reasonable price compared to hiring a team of full-time employees. Here are more reasons why you should opt for our services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Customized Pricing:</strong> We provide customized services so you only pay for the services you need, with no extra costs.</li>
                            <li><strong>Comprehensive Solutions:</strong> We provide complete server management services so our clients can find everything they need in one place.</li>
                            <li><strong>Trusted ISO-Certified Company:</strong> We are an ISO 9001:2015 certified company, meaning all our practices comply with industry regulations and quality standards.</li>
                            <li><strong>Cutting-edge Technology:</strong> We are equipped with the latest tools and infrastructure to provide the best services, helping your servers perform at their peak.</li>
                            <li><strong>Dedicated Project Manager:</strong> We assign a project manager to take care of your project so you have a single point of contact for all queries and updates.</li>
                            <li><strong>Scalable Services:</strong> Our team of professionals is capable of handling upscaling requirements, and we use tools that bring down the load on manpower, making our services more efficient.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Optimize Your Server Operations?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            When your business grows exponentially, you'll see increased loads on your servers and data centers. It's best to outsource server management to a company like Nimble Acuity that provides complete solutions characterized by precision and excellence while helping you save costs. We are a reliable and committed service provider, offering premium quality services that are accessible to both big and small-sized companies.
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

export default ServerManagementServices;