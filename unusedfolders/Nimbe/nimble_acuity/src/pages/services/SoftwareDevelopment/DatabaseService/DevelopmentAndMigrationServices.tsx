import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DevelopmentAndMigrationServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Development and Migration Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Achieve greater operational efficiency by tuning performance, optimizing queries, and balancing load. Increase availability and reduce latency with our database development and migration services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            We specialize in providing high-end database development and migration services for various industries, including healthcare, retail, finance, and manufacturing. Our end-to-end solutions cater to all your database requirements, from design and implementation to migration and optimization. We focus on advanced technologies that improve data management and performance, backed by a solid customized strategy.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our solutions include a complete database design, effective data migration, schema conversion, and thorough testing procedures, all to ensure data reliability and integrity.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Comprehensive List of Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our all-inclusive solutions transform your database design and implementation processes, supporting applications and business operations with expertise in a wide range of areas:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Database Administration</h4>
                                <ul className="list-disc list-inside">
                                    <li>Performance Tuning</li>
                                    <li>Automated Backup and Recovery</li>
                                    <li>Database Security and Compliance Management</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Database Design</h4>
                                <ul className="list-disc list-inside">
                                    <li>Schema Architecture</li>
                                    <li>Entity-Relationship Modeling</li>
                                    <li>Scalability Planning</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CouchDB Managed Services</h4>
                                <ul className="list-disc list-inside">
                                    <li>Automated Replication</li>
                                    <li>Clustering and Sharding</li>
                                    <li>Fault Tolerance</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Data Warehouse Services</h4>
                                <ul className="list-disc list-inside">
                                    <li>ETL Process Optimization</li>
                                    <li>Dimensional Modeling</li>
                                    <li>Historical Data Analysis</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">GraphDB Managed Services</h4>
                                <ul className="list-disc list-inside">
                                    <li>Traversal Algorithms</li>
                                    <li>Real-time Analytics</li>
                                    <li>Cypher Query Language Optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Our Database Development Solutions?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Collaborating with our database development company facilitates seamless data flow and integration into your current system.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Proactive Issue Resolution:</strong> We use advanced monitoring technologies to identify and resolve issues before they can negatively affect your operations.</li>
                            <li><strong>High Transactional Performance:</strong> Our advanced data design methods maintain data integrity even under high transactional volumes.</li>
                            <li><strong>Scalability Across Networks:</strong> Our expertise in managing distributed databases ensures consistent performance and seamless scaling, even as your global operations expand.</li>
                            <li><strong>Enhanced Data Analytics:</strong> Our sophisticated ETL processes and OLAP tools transform your data into actionable insights, empowering strategic decision-making.</li>
                            <li><strong>Insightful Relationship Analysis:</strong> Our optimized analysis of complex relationship data provides deeper insights, enabling innovative solutions and enhanced analytics.</li>
                            <li><strong>Comprehensive Security Measures:</strong> Our strong security protocols and adherence to standard guidelines protect your data with the utmost privacy and confidentiality.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Partner with Nimble Acuity for Quick & Efficient Database Development Services
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is one of the leading providers of database development and migration services. With over 18 years of experience in data processing, we have a rich history of helping clients with diverse database needs. Whether you need a new database created, an existing one upgraded, or a migration, we can help. Partner with us, and you can focus on your core activities while we handle all your database development and management needs.
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

export default DevelopmentAndMigrationServices;