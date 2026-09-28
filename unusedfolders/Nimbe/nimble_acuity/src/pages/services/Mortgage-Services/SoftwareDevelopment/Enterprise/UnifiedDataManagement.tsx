import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const UnifiedDataManagement: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Unified Data Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Increase your business efficiency and cut costs by half with our Enterprise Data Management (EDM) services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you struggling to make objective and data-driven business decisions? To find answers to your questions, you need to replace disparate data silos with a unified data management system. This provides adequate data access to all internal and external stakeholders. A unified data architecture makes it easier for your team to leverage real-time information about products, stock availability, client invoices, and other data points.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a UDM service provider with extensive industry experience. Our UDM services consolidate your organizational data and identify integration factors to enhance data utility. To initiate a rational system of data integration, we store your enterprise data in a common data repository. Our globally certified experts leverage the latest data integration tools to merge multiple data integration teams into a unified data center of excellence.
                        </p>
                    </div>

                    {/* Solutions We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Unified Data Management (UDM) Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our UDM frameworks combine business needs with IT technology to procure consistent and accurate business data. We help businesses leverage this data to make insightful decisions. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Master Data Management</h4>
                                <p>
                                    We ensure that our technological expertise meets your business goals. Our master data management services focus on strategies and programs to increase your enterprise data efficiency.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Setting Up Data Accesses</h4>
                                <p>
                                    We set up data accesses for all your stakeholders to provide them with updated access to product information, purchase and manufacturing details, and other relevant information at their fingertips.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Analytics Reports</h4>
                                <p>
                                    We ensure that your data analytics reports are based on flawless and complete data. Our UDM systems help businesses identify new opportunities, gain real-time insights, and make data-optimized business decisions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data and Information Governance</h4>
                                <p>
                                    Our unified data models provide data categorization, information security, and data lifecycle solutions. We plan and decide ways to manage and maintain your enterprise data.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business Insights & Trend Analysis</h4>
                                <p>
                                    We clean data, transform it, and create usable datasets to make enterprise data far more usable for insights and trend analysis.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">UDM Framework Adoption</h4>
                                <p>
                                    We integrate your data and enable your business to get accustomed to the UDM framework. Our experts adhere to international standards of delivery in our services.
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
                            We are a unified data management company with a sterling global presence. Outsource UDM services to us to leverage the following benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Minimize Costs:</strong> Save time and money with our UDM solutions. We offer customized prices and flexible payment modules.</li>
                            <li><strong>Increase Profitability:</strong> Basing business decisions on inaccurate data can lead to expensive mistakes. Outsourcing UDM to us will reduce operational costs, drive efficiency, and increase profitability.</li>
                            <li><strong>Advanced Software Team:</strong> Our team offers top-notch data integration services and will work with you from the initial design to the final implementation of your customized UDM systems.</li>
                            <li><strong>Highly Scalable Solutions:</strong> We offer highly scalable services and can adjust our services with short notice at no additional costs. Our solutions do not adversely affect project timelines.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Get Your UDM Solutions Today
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a software development service provider with extensive industry experience. We understand your unique requirements and provide best-in-class data integration and analyses. We offer a rich and interactive experience for customers based on data-driven business decisions and provide stringent security protocols for data safety. Reach out to us to know more about our UDM data architecture solutions.
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

export default UnifiedDataManagement;