import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ScyllaDBService: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            ScyllaDB Managed Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We are well-equipped to handle all challenges associated with scaling to ScyllaDB systems under one roof, with rates starting at $20 per hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            As demand for cloud migration continues to grow, there's a persistent debate about whether to outsource ScyllaDB managed services or hire in-house professionals. While scaling has its costs, outsourcing to Nimble Acuity offers benefits like low latency and timely support. We harness ScyllaDB on Amazon Web Services to address all concerns plaguing your business.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a top ScyllaDB managed service provider with extensive experience in deploying and scaling applications without the overhead. Our primary goal is to optimize your ScyllaDB database on web service platforms for peak performance.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            ScyllaDB Managed Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we effectively address issues in ScyllaDB managed services by determining feasibility and benefits. Our expert methodologies ensure durable backend performance. Our solutions include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ScyllaDB Database Security</h4>
                                <p>We create encrypted backups to keep your data secure in ScyllaDB. Our team ensures single-tenant occupancy and offers better key management to avoid compliance risks.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C] capitalize">ScyllaDB Monitoring</h4>
                                <p>Nimble Acuity's ScyllaDB engineers monitor your system and data to create automatic backups and run scheduled maintenance on your behalf. We replicate data to ensure it's always available without failure points, saving you the overhead of hiring and paying full-time engineers.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ScyllaDB Updates</h4>
                                <p>As a top ScyllaDB managed service provider, we have competent engineers who can develop updates and apply security patches. This process is transparent and won't interfere with your day-to-day performance.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ScyllaDB Integration</h4>
                                <p>If you have an existing codebase, we'll help you integrate it with the ScyllaDB Cloud. This comes complete with CQL drivers for a variety of languages like Python, Java, and Rust.</p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our ScyllaDB Managed Implementation Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has a highly efficient process that ensures all deliverables for ScyllaDB managed services meet the SLA. Our process is as follows:
                        </p>
                        <ul className="list-decimal list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Strategy and Proposal:</strong> We collaborate with you to capture your business needs and specific challenges.
                            </li>
                            <li>
                                <strong>Solution Proposal:</strong> After acknowledging your business needs, we propose a custom ScyllaDB solution that stays within your chosen budget.
                            </li>
                            <li>
                                <strong>ScyllaDB Managed Service:</strong> Our services are carried out by veteran ScyllaDB engineers with the right qualifications and years of experience.
                            </li>
                            <li>
                                <strong>Quality Check:</strong> As a top provider of ScyllaDB managed services, we stick to prescribed quality standards to avoid expensive errors.
                            </li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for ScyllaDB Managed Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            What makes Nimble Acuity a top ScyllaDB managed services company? Here are our key differentiators:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective pricing:</strong> Our solutions are affordable, and we can customize them to help you derive benefits without exceeding your budget.</li>
                            <li><strong>High-quality Services:</strong> We are unwavering in our commitment to quality, and our QA teams conduct multi-tier checks to ensure it.</li>
                            <li><strong>Rapid TAT:</strong> Our teams can replicate data, run scheduled checks, and do more within the stipulated time, ensuring a rapid turnaround.</li>
                            <li><strong>Scalable Solutions:</strong> Our solutions are easy to scale on demand. We offer additional resources as needed to speed up the outcome.</li>
                            <li><strong>ISO Certified Provider:</strong> As an ISO 9001:2015 certified provider, we are trusted for ensuring timeliness, quality, and security.</li>
                            <li><strong>100% Data Security:</strong> Transparency is a key benefit of partnering with us. We offer 100% data security, especially for business-critical datasets.</li>
                            <li><strong>Round-the-clock Support:</strong> We offer 24/7 support to answer your queries and provide assistance, no matter where you are based.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource ScyllaDB Managed Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, our team, infrastructure, and technology are well-managed, and we adhere to the best industry practices. Our stringent service management policy and rich experience have earned us recognition as a world-class provider of ScyllaDB managed services. From database consultation to full-fledged backend management, we offer all types of ScyllaDB solutions.
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

export default ScyllaDBService;