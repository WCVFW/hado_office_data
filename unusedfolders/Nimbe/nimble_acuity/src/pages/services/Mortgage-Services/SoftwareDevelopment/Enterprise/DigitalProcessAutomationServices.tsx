import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DigitalProcessAutomationServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Digital Process Automation Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Increase your operational efficiency, streamline processes, and cut costs with reliable DPA services at prices starting at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            As the digital world becomes increasingly competitive, speed is key to staying relevant and growing. Optimizing business processes, automating repetitive tasks, and upskilling your workforce for more strategic jobs are crucial for digital growth.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading digital process automation service provider. We aim to offer enterprise-wide digital transformation solutions via effective DPA. By bringing together Artificial Intelligence (AI), ML-driven Robotic Process Automation (RPA), and Business Process Management, we are focused on elevating your complete business value chain, making processes faster and smarter.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Digital Process Automation Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our high-performance DPA solutions have resulted in phenomenal outcomes, and our service offerings include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business Process Automation</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Centralize data collection and storage.</li>
                                    <li>Enable predictive analytics and insights for data-driven decisions.</li>
                                    <li>Optimize process workflows.</li>
                                    <li>Monitor KPIs for compliance.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cognitive Automation</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Create ML-focused bots and chatbots to automate customer support.</li>
                                    <li>Build AI-driven models for back-end tasks like inventory management.</li>
                                    <li>Develop intelligent AI/ML software to detect errors and anomalies.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Robotic Process Automation (RPA)</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Implement a robust digital workforce to carry out end-to-end processes.</li>
                                    <li>Integrate automated analytics systems to tap sales and consumer behavior.</li>
                                    <li>Automate back-end processes and minimize manual intervention.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Desktop Automation</h4>
                                <p>
                                    We cover the automation of tasks related to:
                                </p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Word documents and presentations.</li>
                                    <li>Spreadsheets and PDFs.</li>
                                    <li>Emails and data analysis.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Workflow Management</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Automate the detection and validation of errors in workflows.</li>
                                    <li>Enable real-time tracking of workflows.</li>
                                    <li>Centralize storage for workflow tasks and related data.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Security & Cloud Automation</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Provide DevSecOps services for managed security assurance.</li>
                                    <li>Enable IDAM services for IoT infrastructure.</li>
                                    <li>Automate data storage and third-party capabilities in the cloud.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Hire Us As Your DPA Service Provider?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Here are the key differentiators that make us a reliable partner for outsourcing digital process automation services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Outstanding Domain Expertise:</strong> Nimble Acuity has been a leader in the market for digital automation and possesses both product and domain expertise.</li>
                            <li><strong>Competitive Pricing:</strong> We offer easy and flexible pricing options, allowing you to pay only for the services you sign up for.</li>
                            <li><strong>Assured Data Security:</strong> We have a zero-tolerance policy towards data breaches and undertake all necessary measures to safeguard your company's information at all times.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Choose Our Digital Process Automation Services
                        </h3>
                        <p className="text-700 mb-6">
                            Optimize and automate bulk, mundane, and repetitive processes with exceptional digital automation services from Nimble Acuity. Let our expert team amalgamate AI, ML, RPA, and other emerging technologies to enable efficient and futuristic DPA.
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

export default DigitalProcessAutomationServices;