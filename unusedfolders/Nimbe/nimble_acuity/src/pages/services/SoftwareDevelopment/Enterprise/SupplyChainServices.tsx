import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SupplyChainServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Supply Chain Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We develop intelligent supply chain management software to help you manage your company's supply chain operations more efficiently.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            In today's digitally driven economy, the supply chain has evolved into a large interconnected network that needs to stay in touch for seamless business operations. Therefore, supply chain management is one of the main pillars of an organization, and for its optimal regulation, companies need efficiently developed, task-targeted software solutions.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is one of the leading supply chain management app development companies, recruiting the most prolific and visionary minds dedicated to creating top-of-the-line applications for your business. Our smart business applications can metamorphose your supply chain management software into a dynamic, multi-pronged system.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Supply Chain Management Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our end-to-end services encompass software packages and application solutions for managing the entire process, from product life cycle management to keeping track of orders.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Logistics</h4>
                                <p>
                                    We use specialized logistics management software to help you manage warehousing operations, transportation, and node-to-node connectivity, making sure you get the most efficient strategies and incur the least possible cost.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Procurement</h4>
                                <p>
                                    Our applications include procurement as a key feature, allowing you to get in touch with vendors and suppliers in the most optimized manner through smooth communication and payment automation.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Supply Chain Planning</h4>
                                <p>
                                    Our software's core objective is to systematically conduct supply chain management. It keeps you ahead of the competition by analyzing market changes, simulating growth patterns, and devising revenue generation strategies.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Stakeholder Collaboration</h4>
                                <p>
                                    A large part of supply chain management depends on successful communication. Our software allows you to maintain a good rapport with third parties across the world, bridging gaps created by geographical distance and time differences.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IoT and Cloud Applications</h4>
                                <p>
                                    Your supply chain management will be incomplete without the benefits of our IoT and cloud applications, which help you harness the power of automation and real-time data insights, providing a low-cost, scalable solution.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Warehouse Management</h4>
                                <p>
                                    Managing all the operations in your warehouse becomes simple when you opt for our supply chain management software, which helps with inventory visibility and efficient product flow.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Advantages of Outsourcing to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, you get a comprehensive digital support system for your entire supply chain, making it more strategic, secure, and streamlined.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Strategic Solutions:</strong> We help you identify glitches and loopholes in your system and provide cost-effective solutions to fix them with diligence.</li>
                            <li><strong>Competitive Edge:</strong> Our services help you gain a competitive edge by enabling you to take your supply chain operations a notch higher with real-time decisions.</li>
                            <li><strong>Resource Optimization:</strong> We take up responsibility for your supply chain management entirely, allowing you to save money and human labor for core business operations.</li>
                            <li><strong>Expert Team:</strong> We take pride in the proficiency and speed of our services, backed by the skills of our expert team.</li>
                            <li><strong>Scalable & Reliable:</strong> Our services are designed to be scalable and reliable, ensuring your system grows with your business needs.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Supply Chain Management Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of supply chain management services, guaranteeing nothing less than the best. Our collective experience in this domain will help you streamline your service and make the most of the digitalization of operations.
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

export default SupplyChainServices;