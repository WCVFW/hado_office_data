import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CustomerManagementServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Customer Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Enrich the customer experience with each delightful interaction. Nimble Acuity's customer management services positively impact your business growth.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            With technology leveling the competitive advantage across industries, businesses are increasingly considering customer experience as their key differentiator. Since companies are now shifting their focus towards a customer-centric approach, it becomes crucial to implement strategies that manage customers throughout their journey. However, most businesses lack the expertise to master it. Hence, they partner with an experienced and skilled customer management service providing company like Nimble Acuity.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity provides superior customer management services to build successful processes and procedures that add value to your customers. We understand the need for a consistent and superior customer experience across all touchpoints. By leveraging digital interventions, AI/ML-driven automation, and Robotic Process Automation (RPA), Nimble Acuity offers much more than traditional customer management solutions.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Customer Management Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is one of the leading customer management service providers offering the finest solutions. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Multi-channel Contact Optimization</h4>
                                <p>
                                    We help business enterprises effectively optimize and streamline their operations across different customer interaction channels.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Contact Centre Optimization</h4>
                                <p>
                                    We offer a thorough analysis of your customer support center's operational environment to identify processes, people, and technical improvement opportunities.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Care Assessment</h4>
                                <p>
                                    Our anticipatory care assessment service helps our clients to better focus on the customer while significantly reducing costs. We provide a detailed analysis of existing call drivers and root causes.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Social Media Care Assessment</h4>
                                <p>
                                    We provide holistic audit assessments for our client's social media operations and customer interactions. We provide feedback and improvements to enhance social media strategies.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom-made Communication</h4>
                                <p>
                                    We offer personalized communication through a variety of offers, service upgrades, and other propositions to effectively manage your customers.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Built-in CRM System</h4>
                                <p>
                                    We have an integrated CRM system in place that helps us in tracking the progress of your project and viewing real-time data.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Customer Journey Analytics</h4>
                                <p>
                                    After benchmarking the customer satisfaction levels, we carefully identify the prime causes that result in either high or low customer satisfaction scores.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Comprehensive Reports</h4>
                                <p>
                                    We provide detailed weekly/monthly reports at your convenience. Our comprehensive reports allow you to perform gap analysis and apply business best practices.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Consultations</h4>
                                <p>
                                    We offer consulting services that are derived from industry thought leadership and practical experience. Our expert consultants can make a lasting impact on your organization.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Industries We Cater To */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Industries We Cater To
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We at Nimble Acuity offer adaptable customer management services to fit the unique needs of each industry and vertical, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                            <ul className="list-disc list-inside space-y-1">
                                <li>Banking and Finance</li>
                                <li>Healthcare</li>
                                <li>Entertainment and Media</li>
                                <li>Insurance</li>
                                <li>Travel and Hospitality</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Market Research</li>
                                <li>Retail</li>
                                <li>E-Commerce</li>
                                <li>IT and Telecommunications</li>
                                <li>Transportation</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Manufacturing</li>
                                <li>Logistics</li>
                                <li>Education and E-learning</li>
                            </ul>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading customer management services provider with years of experience. The top reasons to outsource to us include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Flexible Pricing Options:</strong> We provide affordable and flexible pricing options so you don't have to worry about the cost.</li>
                            <li><strong>High-quality Service:</strong> We apply the Six Sigma approach to all our processes, which ensures high team productivity and quality.</li>
                            <li><strong>A Dedicated Team of Experts:</strong> Our recruitment process hires and educates only the best talent in the industry.</li>
                            <li><strong>High Data Security:</strong> We comply with ISO/IEC 27001:2022 guidelines to ensure the security of your confidential information.</li>
                            <li><strong>World-Class Infrastructure:</strong> We house Telco-grade data centers and other state-of-the-art infrastructure to ensure seamless operations.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Improve Your Business Performance Today
                        </h3>
                        <p className="text-gray-700 mb-6">
                            As a leading customer management services provider, Nimble Acuity offers advanced solutions tailored to your needs. We create unique contact strategies that help you generate improved revenue for your business. Our cost-effective and reliable solutions provide you with actionable insights about promotions, reward points, and subscription renewals.
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

export default CustomerManagementServices;