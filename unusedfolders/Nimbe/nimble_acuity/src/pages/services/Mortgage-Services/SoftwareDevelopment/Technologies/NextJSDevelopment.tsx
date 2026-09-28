import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const NextJSDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Next.js Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Create high-performing and feature-rich web applications using the Next.js platform.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Do you want to create high-performing and custom web applications using the Next.js platform? Are you looking for a company that can help you build feature-rich and functional business websites that meet your needs? Look no further, because Nimble Acuity is here to help you. Our expert team focuses on the design, development, and deployment of essential web solutions using the latest web technologies and best practices.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is the right Next.js development company for your needs. We help your business create scalable and high-performing web applications that succeed in the long run. With the increasing digital interactions among users, expectations for websites and applications are at an all-time high. This creates a huge demand for high-performance websites that fulfill customer expectations.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Next.js Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We provide a range of custom Next.js development services, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Next.js Web App Development</h4>
                                <p>
                                    Our skilled Next.js team will help you create dynamic and static web applications that are easy to update and fast-loading, with a quicker time-to-market.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Strategy & Planning</h4>
                                <p>
                                    Before we start the development process, we will provide you with a strategy that incorporates the best practices of the Next.js framework to ensure you achieve the online presence you need.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">App Upgrading</h4>
                                <p>
                                    As a leading company for Next.js development, we also ensure that your system is set up for the best upgrades to your web application.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Plugin Development</h4>
                                <p>
                                    Nimble Acuity is known for its reliable Next.js plugin development services. Our team will determine which plugins are best suited for your website.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance & Support</h4>
                                <p>
                                    When you partner with us, we ensure you receive the best support and maintenance. Our team of Next.js experts will help identify and resolve bugs and errors in your web applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            By outsourcing Next.js development services to our company, your business will gain a lot of important benefits, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-Effective Pricing:</strong> With our flexible pricing options, you will only pay for the services you require, and nothing more.</li>
                            <li><strong>High-Performing Applications:</strong> Our services and solutions incorporate the best practices of the Next.js framework to ensure you get high-performing web applications.</li>
                            <li><strong>Superior Infrastructure:</strong> We are equipped with the latest tools and technologies required for superior Next.js design and development.</li>
                            <li><strong>100% Data Security:</strong> We are committed to protecting all your valuable information and company data.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build Your High-Performing App?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading name in the industry for providing high-quality and reliable Next.js design and development services. By opting for our solutions, you can ensure your business has a strong online presence. We will create the best strategy for your web app development needs using our expert resources.
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

export default NextJSDevelopment;