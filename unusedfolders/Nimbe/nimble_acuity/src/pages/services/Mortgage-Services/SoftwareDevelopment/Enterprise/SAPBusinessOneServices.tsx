import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SAPBusinessOneServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            SAP Business One Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Make your business more transparent and streamlined with our SAP Business One services, starting as low as $2200 /minimum 160 hours.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            SAP Business One is a low-cost, user-friendly business management system intended particularly for expanding small to medium-sized enterprises. It enables you to better oversee all elements of your business, from sales and customer interactions to budgets and operations, while giving clear insight throughout your whole organization. Acquiring real-time data allows you to make more informed and timely decisions.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            A Business One partner offers the capabilities to assist you in transforming your business by utilizing information to improve productivity, attract new clients, and generate profitable revenue. Business One is a tried-and-true and scalable solution. Nimble Acuity is an ISO 9001:2015 certified global solution provider that can reduce the risk of improper Business One deployment and administration.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            SAP Business One Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When you outsource Business One services, you can rely on the finest team to offer software development services. Our services include the following components:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SAP Business One Implementation</h4>
                                <p>
                                    Our expertise and Business One knowledge are unparalleled, and this is evident in the simplicity with which we deploy. We help your company begin accelerating profitable development with the industry's best enterprise resource planning solution.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business One Training</h4>
                                <p>
                                    As a leading provider of Business One services, we'll show you how to get the most out of Business One with customizable training solutions for end-users, managers, and programmers.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business One Support</h4>
                                <p>
                                    Getting the answers you require is now only a step away. Get your concerns addressed, including technical difficulties, in a way that is convenient for you. Our multilingual support specialists can help you with everything from phone and email assistance to on-site visits.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business One Integration</h4>
                                <p>
                                    If your company runs several apps with industry-specific features, we can boost productivity by integrating all of your systems into a single, secure platform. We can link Business One with any other third-party application.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for SAP Business One Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has over two decades of experience and can design add-ons for apps across a variety of verticals with high throughput.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Services:</strong> Our configurable pricing gives you complete control over costs.</li>
                            <li><strong>ISO Compliant:</strong> We adhere to ISO standards as a well-known custom Business One solution provider.</li>
                            <li><strong>Secure Data Management:</strong> We take great efforts to keep your data safe by utilizing modern data management technologies.</li>
                            <li><strong>High-quality Support:</strong> We offer our clients the best available help and quick turnaround times.</li>
                            <li><strong>Experienced Consultants:</strong> You will work with highly qualified professionals with years of experience.</li>
                            <li><strong>24/7 Support:</strong> We provide round-the-clock customer service by phone, email, and web chat.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Get High-Performance SAP Business One Services
                        </h3>
                        <p className="text-gray-700 mb-6">
                            The first step is to guarantee that your firm provides excellent customer service with our comprehensive solutions that help organizations grow faster. Choose Nimble Acuity as your service provider and benefit from our high-performance services.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SAPBusinessOneServices;