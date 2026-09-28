import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MySQLManagedServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            MySQL Managed Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Reap the benefits of MySQL managed services to handle large data sets and host them on the cloud by outsourcing to Nimble Acuity, starting at just $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            MySQL is a powerful, secure, and easy-to-use database management system that provides comprehensive support for building database applications. However, developing an application comes with a significant workload, and many companies can't afford a full-time team to ensure high database performance. Outsourcing MySQL managed services to an experienced company like Nimble Acuity allows you to focus on your core operations.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity has over 26 years of experience offering complete MySQL managed services at a fraction of the cost of an in-house team. As a leading MySQL managed service provider, we handle all the setup, administration, backups, and updates so you can focus on building amazing apps.
                        </p>
                    </div>

                    {/* What is MySQL */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            What is MySQL?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Based on Structured Query Language (SQL), MySQL is an open-source relational database management system. It's used for web databases, data warehousing, logging applications, and e-commerce. Its advanced features, including high performance, 24/7 uptime, and strong data security, make it a top choice for companies that handle large amounts of data.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            MySQL Managed Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a professional MySQL managed service provider and your one-stop solution for all MySQL operation requirements. Our team of Database Administrators (DBAs) offers comprehensive MySQL managed solutions, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Installation</h4>
                                <ul className="list-disc list-inside">
                                    <li>Prepare the server for application services based on OS parameters.</li>
                                    <li>Install MySQL server, MSA monitoring, and additional features.</li>
                                    <li>Harden the MySQL server and conduct quality checks.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Configuration</h4>
                                <ul className="list-disc list-inside">
                                    <li>Create and configure MySQL server service accounts and supported protocols.</li>
                                    <li>Configure database storage engines and replication.</li>
                                    <li>Set up database backups, maintenance, and monitoring operations.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Administration</h4>
                                <ul className="list-disc list-inside">
                                    <li>Rebuild broken replication sets and provide database backups and restoration.</li>
                                    <li>Monitor MySQL logs and perform audits.</li>
                                    <li>Conduct high-availability tests.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Licensing</h4>
                                <p>We also manage MySQL licensing and ensure software assurance.</p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for MySQL Managed Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a reliable and trustworthy MySQL managed service provider. Our team of professionals is meticulous in their work, and our goal is to deliver superlative services that ensure complete client satisfaction. The benefits of working with us include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Pocket-Friendly Prices:</strong> We offer flexible pricing based on your needs, ensuring you only pay for the services you use.</li>
                            <li><strong>Data Security:</strong> We strictly adhere to data security regulations. Our team signs confidentiality agreements to guarantee your data is private and secure.</li>
                            <li><strong>Cutting-edge Technology:</strong> Our team uses the latest tools and software to deliver precise services. We regularly update our systems to stay aligned with current market trends.</li>
                            <li><strong>Reduced Turnaround Time:</strong> Our experienced professionals and systematic procedures ensure thorough and timely delivery of services.</li>
                            <li><strong>Round-the-clock Support:</strong> Our customer service team is available 24/7 via email, calls, or our website to help solve your queries.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource MySQL Managed Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Many businesses are implementing MySQL for its reliability and efficiency. When you outsource your MySQL managed services to Nimble Acuity, you can be confident you're receiving the highest quality service. With our team of experts, cutting-edge tools, and client-focused approach, we ensure services are delivered to your exact requirements while also considering market trends.
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

export default MySQLManagedServices;