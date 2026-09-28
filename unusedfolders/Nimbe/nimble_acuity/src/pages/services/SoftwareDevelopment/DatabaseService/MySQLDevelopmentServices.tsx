import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MySQLDevelopmentServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            MySQL Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Hire unparalleled expertise for your MySQL database development at prices starting at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Looking to build powerful web applications with the world's most popular open-source SQL technology? MySQL is trusted by top tech performers like Facebook, WordPress, and Google for its robust data security features. If you want to leverage its full potential, Nimble Acuity is here to help.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading MySQL development company with significant experience helping clients of all sizes with their database needs. We work closely with you to understand your requirements, business challenges, and opportunities, providing a solution that perfectly matches your needs.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            MySQL Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading MySQL development service provider that can help you with a wide range of solutions, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">MySQL Integration Services</h4>
                                <p>We have significant experience integrating MySQL databases with other technologies and web services to create a high-performing and robust connected system with powerful security features.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance and Support</h4>
                                <p>As part of our development services, we provide comprehensive MySQL maintenance and technical support, ensuring your databases are configured correctly and always optimized.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Database Auditing</h4>
                                <p>We perform thorough MySQL database auditing to identify and fix security vulnerabilities. We also analyze the system for optimization opportunities to strengthen its configuration.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Upgrading and Data Migration</h4>
                                <p>We help you seamlessly and efficiently migrate your existing databases to MySQL. We can also help modernize your legacy MySQL database to the latest version.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Optimization Services</h4>
                                <p>We leverage our development experience and use high-quality optimization tools to enhance the performance of your web application.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Backup and Restoration</h4>
                                <p>We help you perform regular backups and restore your databases from those versions. This prevents data loss and ensures your application continues to run smoothly.</p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for MySQL Development?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading provider of MySQL development services. Here's why outsourcing to us makes sense:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing Options:</strong> Our solutions are priced cost-effectively to ensure a high return on investment.</li>
                            <li><strong>High-quality Services:</strong> We are an ISO-certified service provider and use multi-level quality checks to ensure the highest quality.</li>
                            <li><strong>Tools and Technologies:</strong> Our team uses the latest tools, technologies, and methodologies to deliver cutting-edge services.</li>
                            <li><strong>Structured Process:</strong> We follow a streamlined and disciplined process to deliver all our services.</li>
                            <li><strong>Experienced Team:</strong> Our team is backed by over 26 years of solid experience in providing a wide range of database development services.</li>
                            <li><strong>Data Security:</strong> We take data security seriously with stringent processes in place to keep your data safe and secure.</li>
                            <li><strong>Short Turnaround:</strong> We understand how critical time can be, and we always deliver our services on time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource MySQL Development Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity provides efficient and effective MySQL development services that help our clients obtain the perfect solution for their needs. Our team of professionals provides world-class services because we employ only the best and brightest minds. This ensures all your requirements are addressed in a meticulous and thorough manner.
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

export default MySQLDevelopmentServices;