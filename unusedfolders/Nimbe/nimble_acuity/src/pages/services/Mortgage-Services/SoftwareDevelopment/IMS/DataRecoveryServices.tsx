import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DataRecoveryServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Data Recovery Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to efficient, quick, and highly secure data recovery services by choosing our team of qualified and experienced data recovery experts at competitive prices.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Is your organization unable to recover data from various devices quickly and efficiently? Are you looking for skilled and experienced data recovery experts who can take care of all your data recovery needs? Then, the best step for you would be to outsource data recovery services to an experienced and skilled data recovery service provider.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading data recovery service providing company that can be your one-stop-shop for all your requirements. We have some of the most experienced and talented data recovery specialists who can cater to all your requirements with ease. We leverage the latest data recovery tools and technologies while delivering top-notch services to clients.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Data Recovery Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has been one of the leading providers of data recovery services to global clients for years. We have gained enough experience to understand each client's specific requirements and provide them with services that will suit their business needs.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">RAID Data Recovery Services</h4>
                                <p>
                                    We leverage the latest imaging processes to provide clients with accurate RAID data recovery services. We have the required expertise to deliver the best quality data recovery services within a quick time.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">NAS Data Recovery Services</h4>
                                <p>
                                    NAS systems require professional data recovery methods to recover your files promptly. We leverage the latest tools and software to ensure that all your data is recovered with zero data loss.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Server Data Recovery Services</h4>
                                <p>
                                    Server data loss can prove to be costly to any organization. Our team at Nimble Acuity can provide you with accurate and error-free server data recovery to ensure that you don't lose any critical data.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Database Data Recovery Services</h4>
                                <p>
                                    Database data loss can be a critical loss to your company. Our team of professional data recovery experts can help you recover your crucial business data from your databases and ensure that your business processes continue smoothly.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Encrypted Data Recovery Services</h4>
                                <p>
                                    Our team at Nimble Acuity has the required skills and bandwidth to provide you with the best quality encrypted data recovery services. We excel in encrypted data recovery and deliver error-free services within a short time.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Other Specialized Services</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Hard Drive Data Recovery</li>
                                    <li>Apple Mac Data Recovery</li>
                                    <li>Laptop Data Recovery</li>
                                    <li>Desktop Data Recovery</li>
                                    <li>Tape Data Recovery</li>
                                    <li>Remote Data Recovery</li>
                                    <li>On-site Data Recovery</li>
                                    <li>Email & File Data Recovery</li>
                                    <li>Mobile Data Recovery</li>
                                    <li>Digital Forensics</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing data recovery services to Nimble Acuity can give you access to a series of benefits. Some of the major factors for you to choose us as your data recovery service providing company are listed here:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Flexible Pricing Options:</strong> We help our clients with highly flexible and affordable pricing options which will suit their business requirements and budget perfectly.</li>
                            <li><strong>High-quality Services:</strong> We are an ISO certified firm that ensures all the services delivered by us will be completely error-free and of superior quality.</li>
                            <li><strong>World-class Infrastructure:</strong> We have access to the latest tools and world-class workspaces to deliver top-notch services.</li>
                            <li><strong>Information Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified firm, ensuring all data you share is kept in completely secure locations.</li>
                            <li><strong>Experienced Team:</strong> We have some of the most experienced and skilled data recovery experts on board who can take care of all your requirements with ease.</li>
                            <li><strong>Dedicated Manager:</strong> We assign a dedicated manager who will be your single point of contact for all your needs.</li>
                            <li><strong>Highly Scalable Services:</strong> We have the required bandwidth to scale up service requirements and increase the project team size as needed.</li>
                            <li><strong>24/7 Support:</strong> Our teams are available at all times to answer your queries.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Recover Your Critical Data?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been a pioneer in providing the best quality data recovery services to global clients. We have some of the most talented and skilled data recovery experts on board who can take care of all your requirements in a hassle-free manner. We leverage the latest tools and technologies while delivering the best quality services to clients.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get a Free Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DataRecoveryServices;