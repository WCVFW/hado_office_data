import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SpringBootDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Spring Boot Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to world-class Spring Boot services provided by an expert team of software developers.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            With the advancement of digital interactions, it is crucial to create scalable digital solutions that offer the best results. Nimble Acuity can be your partner in providing the best Spring Boot services to meet this demand.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity specializes in creating skillful digital solutions that are feature-rich and results-driven for companies around the world. By choosing us as your service provider, you open up a world of possibilities for your brand and gain access to a team with decades of experience in the industry.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Spring Boot Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When you partner with Nimble Acuity, you can be sure you're getting comprehensive Spring Boot services from a reliable team. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Spring Boot Design and Development</h4>
                                <p>
                                    Our professional team will help you develop custom applications that are perfectly suited to your business needs, ensuring a reliable and dependable final product.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Spring Boot Migration</h4>
                                <p>
                                    We ensure that your data is properly and safely shifted from your existing system to the Java Spring Boot platform, providing the best digital solutions for a seamless transition.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Spring Boot Microservices</h4>
                                <p>
                                    Using our services, you can build feature-rich and user-friendly applications with microservices for easy and efficient development results.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Spring Boot Web Development</h4>
                                <p>
                                    Our team of skilled developers provides custom solutions for web development, ensuring you get the best digital services available for your websites.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Spring Boot API Development</h4>
                                <p>
                                    We offer comprehensive API development and testing to ensure your applications and web pages are completely free of errors and bugs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Support & Maintenance</h4>
                                <p>
                                    As one of the best companies for Spring Boot rapid application development, we have a fully certified and reliable team that is ready to offer ongoing support and maintenance options.
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
                            Choosing Nimble Acuity for your Spring Boot services comes with a number of key advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Services:</strong> Our flexible pricing system means you only pay for the services you need, making our rates pocket-friendly.</li>
                            <li><strong>Amazing Expertise:</strong> Nimble Acuity is an ISO-certified company, recognized for quality by various associations and delegations.</li>
                            <li><strong>State-of-the-Art Infrastructure:</strong> We have all the necessary resources and technologies required for Spring Boot test-driven development.</li>
                            <li><strong>Data Security:</strong> We are fully committed to the best security practices, ensuring your data is always safeguarded with us.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Enhance Your Digital Presence?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been a leader in providing high-quality and reliable Spring Boot services for over two decades. By choosing to partner with us, your brand will benefit from the scalable and robust applications we develop.
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

export default SpringBootDevelopment;