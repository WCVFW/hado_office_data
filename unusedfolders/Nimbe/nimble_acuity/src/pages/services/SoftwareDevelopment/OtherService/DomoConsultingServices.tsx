import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DomoConsultingServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Domo Consulting Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Connect and combine critical business data into actionable insights in a matter of a few seconds. Optimize your investment with our Domo solutions.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Domo is a business intelligence solution designed to bring business and user data together in a single platform. It also offers a wide range of services to help you keep your data safe. If you need dashboards tailored to the departments in your organization, approaching a certified Domo service provider is the best way to stay competitive and achieve your goals efficiently.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Whether you're exploring new business intelligence platforms, deploying Domo to a new division of your company, or looking for a custom application for a unique challenge, our team is here to help. At Nimble Acuity, our teams include fully accredited Domo-certified business advisors, technical advisors, and analysts ready to help you unleash the full potential of Domo.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Domo Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity's Domo solutions include a wide range of SaaS services to simplify data access for better business decision-making. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Strategy Consulting</h4>
                                <p className="leading-relaxed">
                                    Our services can help you develop a data strategy, define business goals, and identify opportunities to improve business performance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Implementation Consulting</h4>
                                <p className="leading-relaxed">
                                    Once you have your strategy, we start the Domo implementation service for your business. It includes data integration, data architecture, and security governance. We help you get set up and implemented in the best way possible.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Training and Development</h4>
                                <p className="leading-relaxed">
                                    As a reliable Domo consulting firm, we provide adequate training for your employees. We use different options like in-person training, webinars, and thorough documentation.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Support and Maintenance</h4>
                                <p className="leading-relaxed">
                                    We provide you with ongoing support and maintenance, including 24/7 customer support, access to the Domo Knowledge Base, and help from experts.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Additional Services</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Refreshing Data - Keeping your data up-to-date with the latest information.</li>
                                    <li>Backup Data - Creating duplicates and copies of your data for safekeeping.</li>
                                    <li>Archiving Data - Storing your data in a secure location.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Outsource to Nimble Acuity */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Domo Consulting Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading Domo consulting services provider that can help you make the best of your data. Here are some reasons why you should choose our services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>**Easy Accessibility:** Our team of experts is easy to approach and is always ready to answer your queries related to your Domo implementation.</li>
                            <li>**High Data Security:** We are an ISO/IEC 27001:2022-certified company and take the security of your data very seriously.</li>
                            <li>**Access to a Certified Team:** Our team is fully certified and accredited and can help you launch your Domo services, connect to hundreds of data sources, and build solutions for your data.</li>
                            <li>**High Scalability:** Outsourcing Domo consulting services to Nimble Acuity means you are working with a team that can be scaled as per the demands of the work volume.</li>
                            <li>**Affordable Costs:** We provide our Domo services at a highly affordable cost, which will help you tackle your budget challenges.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Domo Consulting Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a Domo consulting services provider that can help you develop a data strategy, define business goals, and identify opportunities to improve business performance. We offer a range of software development solutions to clients globally. Our services enable you to cut costs and offer you the best ROI.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DomoConsultingServices;