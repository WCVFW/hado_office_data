import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const JanusGraphService: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            JanusGraph Managed Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Implement, operate, and maintain your JanusGraph database and support concurrent users in real-time with our managed services starting at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Considering scaling your business to the JanusGraph database? Instead of hiring specialized experts at steep salaries, save thousands of dollars by outsourcing your JanusGraph managed services to Nimble Acuity. Our team can handle everything from elastic and linear data scaling and incorporating search capabilities to ensuring multi-storage functionality without extensive overhauls.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity excels at architecting custom JanusGraph managed services that cover planning, deployment, and ongoing scheduled maintenance. We ensure your database operates with unmatched agility and real-time performance.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            JanusGraph Managed Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we address all challenges tied to JanusGraph by understanding your business, pain points, and budget. Our expert solutions leverage the best JanusGraph management methodologies to ensure unwavering productivity. Our solutions include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise-level JanusGraph Security</h4>
                                <p>We implement security layers for your database and applications, configuring encryption or adding a security layer to protect data points managed within JanusGraph.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Lifecycle Support for JanusGraph</h4>
                                <p>Our teams analyze how your applications use the database to create a custom lifecycle support plan. We frequently push patches and updates to keep your applications current and optimized.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Flexibility & Control with Cloud Integration</h4>
                                <p>We enhance performance by finding the ideal settings for your use cases and streamlining database operations through cloud integration.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Self-help & Ticketing System</h4>
                                <p>We harness the JanusGraph database to enhance ticketing performance, ensuring bugs and glitches are flagged and resolved quickly. We also ensure all reported issues can be tracked efficiently.</p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our JanusGraph Managed Services Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity follows a highly streamlined process for JanusGraph managed services to meet all deliverables according to the SLA. Our process is as follows:
                        </p>
                        <ul className="list-decimal list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Strategy and Proposal:</strong> We collaborate to understand your JanusGraph service needs and existing challenges.
                            </li>
                            <li>
                                <strong>Solution Proposal:</strong> After a thorough analysis, we prescribe targeted JanusGraph solutions that fit your budget and service preferences.
                            </li>
                            <li>
                                <strong>JanusGraph Managed Service:</strong> Our services are delegated to qualified professionals with years of experience.
                            </li>
                            <li>
                                <strong>Quality Check:</strong> We implement stringent quality control processes to ensure full compliance with the SLA.
                            </li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity For JanusGraph Managed Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            What makes Nimble Acuity a top JanusGraph managed services provider? Here are some of our key differentiators:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective pricing:</strong> Our services are reasonably priced without compromising on quality.</li>
                            <li><strong>High-quality Services:</strong> We offer services that are 100% compliant with ISO quality standards.</li>
                            <li><strong>Rapid TAT:</strong> We are known for our agility and quick turnaround times.</li>
                            <li><strong>Scalable Solutions:</strong> Our solutions are completely scalable to grow with your business needs.</li>
                            <li><strong>ISO Certified Provider:</strong> Our ISO 9001:2015 certification demonstrates our commitment to quality, timeliness, and security.</li>
                            <li><strong>100% Data Security:</strong> Your data is in safe hands with our unparalleled data security infrastructure.</li>
                            <li><strong>Round-the-clock Support:</strong> We offer 24/7 support, providing timely help in the language of your choice.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource JanusGraph Managed Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, we have a well-managed infrastructure and team. We follow the best JanusGraph methodologies to ensure continuous project success. With over 26 years of experience in database services, we have a strong reputation as a top JanusGraph managed services provider. From preliminary database consultation to complete backend function management, we handle it all.
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

export default JanusGraphService;