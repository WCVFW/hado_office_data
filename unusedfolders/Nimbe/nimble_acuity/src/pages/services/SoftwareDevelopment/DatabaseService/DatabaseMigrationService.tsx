import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DatabaseMigrationService: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Database Migration Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Securely migrate your data to a new database without compromising quality. Nimble Acuity handles all your database migration needs so you can focus on core business functions.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            For over two decades, Nimble Acuity has been a leading provider of database migration services. We have the expertise to help you overcome the challenges of migrating your database. We carefully and securely move your existing database to its new location without compromising data integrity.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our team of highly qualified database administrators and migration experts understands the process inside-out. By outsourcing to us, you free up valuable time to focus on your core activities while we work to seamlessly migrate your database.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Database Migration Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We have the expertise to provide quick and efficient migration services for a wide range of database systems, including Oracle, IBM, DB2, Progress, and Sybase. Our services include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Database migration from a single source</li>
                            <li>Database migration from multiple sources</li>
                            <li>Database migration from the same vendor systems</li>
                            <li>Database migration from one vendor system to another</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Database Migration?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a leading data migration company for over two decades, Nimble Acuity offers clients the following benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Services:</strong> We offer flexible pricing so you only pay for the services you need.</li>
                            <li><strong>Experienced Team:</strong> Our team consists of highly qualified and skilled experts who have successfully managed database migration projects for leading organizations.</li>
                            <li><strong>Information Security:</strong> As an ISO/IEC 27001:2022 ISMS certified organization, we ensure all your confidential data is kept completely safe.</li>
                            <li><strong>Quick Turnaround:</strong> With multiple delivery centers, we deliver services quickly and efficiently.</li>
                            <li><strong>High-quality Solutions:</strong> As an ISO 9001 certified organization, we are committed to delivering the highest quality services.</li>
                            <li><strong>Ease of Scalability:</strong> We have the bandwidth and skills to rapidly scale up the migration process as your requirements change.</li>
                            <li><strong>Single Point of Contact:</strong> A dedicated project manager is assigned to every client to serve as a single point of contact.</li>
                            <li><strong>24/7 Availability:</strong> Our team is available around the clock to address your issues via phone or email.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Database Migration Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a pioneer in providing quality offshore database migration and other database services to clients worldwide. With over 26 years of experience in the software development industry, we have helped thousands of clients with hassle-free database migration services.
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

export default DatabaseMigrationService;