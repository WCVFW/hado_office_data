import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const PostgreSQLManagedServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            PostgreSQL Managed Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get the right database platform to safely store your data and optimize performance by outsourcing PostgreSQL managed services to Nimble Acuity, with rates starting at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Looking for a database system that can handle large data workloads with utmost efficiency? PostgreSQL is one of the best options for dealing with heavy loads, lending complete assistance to application developers, and ensuring data integrity. Working with a professional PostgreSQL managed service provider like Nimble Acuity will help your business leverage all the benefits of this powerful system.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a trusted PostgreSQL managed service provider with over a decade of experience. We offer comprehensive solutions, empowering companies and developers to build the best environments and handle heavy data loads with incredible uptime and efficiency. Partner with our industry experts and accelerate your business growth.
                        </p>
                    </div>

                    {/* What is PostgreSQL */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            What is PostgreSQL
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            PostgreSQL is a popular open-source, object-relational database system renowned for its powerful architecture, high-level data integrity, and ACID compliance. It uses SQL language and offers features that provide high-level security and scalability. Its compatibility with all major operating systems has made it a preferred choice for businesses worldwide. By outsourcing your managed services, you can fully utilize all the benefits of PostgreSQL to optimize your application development.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            PostgreSQL Managed Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity offers complete PostgreSQL managed solutions, taking the burden of handling database operations off your shoulders so you can focus on core competencies. Our team of professionals is thoroughly experienced in handling projects for countless companies. Our managed PostgreSQL services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Setup and Maintenance</h4>
                                <p>We handle the complete setup and ongoing maintenance of your PostgreSQL database to ensure seamless operations.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Daily Backups</h4>
                                <p>Regular, automated backups are performed to protect your critical data and minimize the risk of loss.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Failover Automation</h4>
                                <p>Our solutions include automated failover processes to ensure high availability and business continuity.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Insight Integration and Altering</h4>
                                <p>We integrate monitoring tools and provide actionable insights to proactively manage and alter your database environment for optimal performance.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Detailed Reports and Documentation</h4>
                                <p>You'll receive detailed reports and documentation, providing full transparency into the health and performance of your database.</p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity For PostgreSQL Managed Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading PostgreSQL managed service provider known for its comprehensive, professional approach. Here are some of the benefits of partnering with us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Budget-friendly Prices:</strong> Our services are priced affordably with customized solutions, ensuring you only pay for what you need.</li>
                            <li><strong>Data Security:</strong> We prioritize your data's confidentiality using secure channels and protocols, and our professionals sign confidentiality agreements.</li>
                            <li><strong>Cutting-edge Technology:</strong> We stay current with the latest trends and technologies, consistently updating our tools and infrastructure to deliver high-quality services.</li>
                            <li><strong>Round-the-clock Support:</strong> Our dedicated customer support team is available 24/7 to address your queries via call, email, and our website.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Partner with Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            PostgreSQL is an advanced open-source database becoming an integral part of daily business operations. Outsourcing your managed services to Nimble Acuity, an expert provider, will take this burden from your hands while you focus on other facets of your business. As an ISO-certified company, we are committed to quality and transparency, making us a reliable and trustworthy partner.
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

export default PostgreSQLManagedServices;