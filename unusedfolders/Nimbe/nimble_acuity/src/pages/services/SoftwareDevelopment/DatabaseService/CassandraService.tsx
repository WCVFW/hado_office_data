import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CassandraService: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Cassandra Managed Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Effortlessly manage large amounts of data with our reliable Cassandra managed services at a reasonable price, starting at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Some of the world's biggest companies use Cassandra to handle large, active data sets. Known for its high scalability and performance, Cassandra is designed for businesses that deal with a massive amount of data daily. With Cassandra, you get high data availability and no single point of failure. Outsourcing Cassandra managed services to a professional company like Nimble Acuity can handle everything for you.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading Cassandra Managed Service provider with a team of expert Cassandra engineers. They know how to leverage Cassandra's features to benefit your company, helping you manage your applications and environment more effectively.
                        </p>
                    </div>

                    {/* What is Cassandra */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            What is Cassandra?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Apache Cassandra is a free, open-source NoSQL database management system that handles large data sets across various servers and data centers. It allows you to manage data, develop applications, and transform conventional databases into open-source ones more efficiently. It's a popular choice for software engineering, web development, and data analysis companies.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Cassandra Managed Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity offers complete Cassandra managed services for high-performance, reliable applications. While we run Cassandra for you, you can focus on other aspects of your application. As a superlative Cassandra managed service provider, we guarantee low latency and improved performance. We leverage the following features of Apache Cassandra:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Continuous Availability</h4>
                                <p>Cassandra offers zero downtime and continuous availability. We also offer a 100% SLA for uptime, ensuring your services are always operational, which significantly enhances application performance.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Dynamic Scaling</h4>
                                <p>With our services, we can both upscale and downscale your cluster's processing capacity. This scaling takes less than half an hour, saving you a great deal of cost and effort.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Alerts and Monitoring</h4>
                                <p>We offer comprehensive monitoring services, tracking hundreds of metrics from each managed node. This allows us to proactively manage your clusters and address issues before they become major disruptions.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automated Health Checks</h4>
                                <p>We use automated systems to monitor Cassandra usage and schema. These reports help us assess your application's health and adapt best practices to enhance performance.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Analytics</h4>
                                <p>We can carry out analytics on Cassandra to optimize your applications using various methods, including integrated search, batch analytics, and real-time analytics.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Fault Tolerance</h4>
                                <p>Cassandra offers fault-tolerant storage by replicating data across multiple locations. We can specify the number of replications to ensure your data is always accessible, even in case of server failure.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Optimized Configuration</h4>
                                <p>We develop operating systems and select configurations that are best for running Cassandra, ensuring the underlying infrastructure is deployed in the most efficient way possible.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Round-the-Clock Technical Support</h4>
                                <p>Our Cassandra engineers and professionals are available 24/7 to help you with technical matters and coding queries.</p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Cassandra Managed Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a top Cassandra managed service provider with the experience and expertise required to deliver impeccable services. Our services complement your efforts in building applications and provide numerous benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing Solutions:</strong> We offer customized services and packages at affordable rates, ensuring you get the best value for your investment.</li>
                            <li><strong>Data Security:</strong> We take stringent measures to ensure complete data security, using protected systems and having our team sign a confidentiality clause.</li>
                            <li><strong>ISO Certification:</strong> As an ISO 9001:2015 certified company, our commitment to quality is validated by our standard procedures and methodologies.</li>
                            <li><strong>Impressive Infrastructure:</strong> We work with the latest systems and tools, including automated systems, to provide unparalleled services.</li>
                            <li><strong>Single Point of Contact:</strong> We assign a single project manager to your project, ensuring clear and convenient communication.</li>
                            <li><strong>24/7 Availability:</strong> Our customer support is available around the clock to promptly address your queries, no matter your location or time zone.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Cassandra Managed Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Since its conception, the demand for Cassandra services has increased significantly. It's the ideal database for those who handle large amounts of data daily. However, managing it requires specific skills and expertise, making outsourcing a natural choice. Nimble Acuity is your ideal partner, driven to offer top-notch services that benefit your business and ensure complete client satisfaction.
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

export default CassandraService;