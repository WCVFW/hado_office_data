import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const GraphDBService: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            GraphDB Managed Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our team can manage your GraphDB systems, updating and maintaining your database without your intervention at rates as low as $20 per hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            If your business needs scalable, high-performance DBaaS, the best solution is to outsource GraphDB managed services to Nimble Acuity. This reduces the time and expense of hiring in-house resources. If your staff is already stretched across multiple functions, outsourcing your GraphDB managed services is the one-stop solution you need.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a top GraphDB Managed service provider with over 26 years of experience. We have a community of GraphDB experts who use the latest database software and technology. We offer our GraphDB managed services at affordable rates to improve your productivity without the overhead.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            GraphDB Managed Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we use a proven approach to manage semantic graph databases and address specific business needs. Our world-class database solutions include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Full-text Search</h4>
                                <p>We implement a system where GraphDB acts as an interface to Lucene, Elasticsearch, and Slor, enabling you to run queries at lightning speed.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Load Balancing Solutions</h4>
                                <p>We implement load balancing to maximize cluster utilization and enhance performance. We also enable automatic failover to safeguard your data and processes if faults are detected.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cluster Elasticity</h4>
                                <p>We design a system that enhances your ability to add or remove nodes in a distributed network. This streamlines access to and management of consolidated data and distributes query loads across nodes.</p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our GraphDB Managed Implementation Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity follows a highly efficient GraphDB managed and development process to ensure all deliverables meet the SLA. Our process is as follows:
                        </p>
                        <ul className="list-decimal list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Strategy and Proposal:</strong> We engage with clients to capture their business needs and challenges through their preferred channels.
                            </li>
                            <li>
                                <strong>Solution Proposal:</strong> After understanding your GraphDB needs, we design an optimized solution and propose it for your approval.
                            </li>
                            <li>
                                <strong>GraphDB Managed Service:</strong> Our team of database experts, who have signed a non-disclosure agreement (NDA), implements the services according to your requirements.
                            </li>
                            <li>
                                <strong>Quality Check:</strong> We take all necessary steps to ensure compliance with quality standards before project sign-off.
                            </li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity For Outsourcing GraphDB Managed Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            What makes Nimble Acuity a top GraphDB managed services provider? Here are our key differentiators:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective pricing:</strong> Our services are offered in custom options that fit your budget and service needs.</li>
                            <li><strong>High-quality Services:</strong> We consistently deliver managed services that meet or exceed prescribed quality standards.</li>
                            <li><strong>Rapid TAT:</strong> Our services come with a rapid turnaround time to help you avoid delays.</li>
                            <li><strong>Scalable Solutions:</strong> Our solutions are completely scalable, allowing you to easily accommodate growing needs.</li>
                            <li><strong>ISO Certified Provider:</strong> As an ISO 9001:2015 certified partner, we are a trusted provider of GraphDB managed services.</li>
                            <li><strong>100% Data Security:</strong> Our team signs an NDA to ensure your data is secure and protected.</li>
                            <li><strong>Round-the-clock Support:</strong> We offer close-knit 24/7 support to help you get your concerns addressed quickly and in any language.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource GraphDB Managed Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has a successful record of offering top-notch GraphDB managed services. We undertake all requirements and consistently exceed client expectations. With over 26 years of experience, we have developed high-quality database solutions, becoming a top GraphDB managed services provider.
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

export default GraphDBService;