import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ELearningServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            eLearning Services and Solutions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Boost productivity and streamline training workflows with cutting-edge, customized eLearning solutions.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity offers custom eLearning services and solutions for both corporations and other eLearning companies. Whether you need to create more engaging and interactive content or provide standardized training to a sales team spread across multiple locations, we can design, develop, and deploy highly effective, bespoke solutions to address your needs.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As a leading eLearning solutions provider, we have expertise in a wide variety of development and authoring tools. Our solutions are built using industry-standard software such as Macromedia Authorware, Macromedia Flash, Dreamweaver, Adobe Photoshop, Adobe Premiere, and many others.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Comprehensive eLearning Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We provide a full spectrum of services, from design and development to deployment and support. Our offerings include:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-gray-700">
                            <ul className="list-disc list-inside space-y-2">
                                <li>Mobile Application Development</li>
                                <li>Custom Application Development</li>
                                <li>Solution Implementation</li>
                                <li>Corporate Training Solutions</li>
                                <li>Performance Gap Solutions</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Training Product Development</li>
                                <li>Moodle Development Services</li>
                                <li>Product Demos</li>
                                <li>Instructional Design</li>
                                <li>Content Development</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Art, Design, and Animation</li>
                                <li>Game-Based e-Learning</li>
                                <li>Open Source Development</li>
                                <li>Content and Application Porting</li>
                                <li>Computer-Based Training (CBT)</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Web-Based Training (WBT)</li>
                                <li>Self-Paced Learning Tutorials</li>
                                <li>Instructor-Led Training (ILT)</li>
                                <li>Online Courses</li>
                                <li>Simulations</li>
                            </ul>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource eLearning Solutions to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Many companies are now realizing the significant savings from our custom eLearning services. With our corporate training solutions, a trainer can instruct an entire group remotely, eliminating expenses for travel and accommodation. Here are some additional reasons to partner with us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing:</strong> Our services are cost-effective and flexible, with prices starting at an affordable rate.</li>
                            <li><strong>High-Quality Services:</strong> With over two decades of experience, we are a trusted partner in providing high-quality, error-free eLearning services to clients worldwide.</li>
                            <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022-certified company, we prioritize data security with a robust ISMS system that prevents any unauthorized access.</li>
                            <li><strong>Experienced Team:</strong> Our team is composed of highly qualified designers, developers, and instructional specialists who provide top-quality eLearning services.</li>
                            <li><strong>Short Turnaround:</strong> Our experts provide seamless services with very quick turnaround times, ensuring we meet all deadlines without compromising quality.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your eLearning Requirements to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Our eLearning solutions can handle your end-to-end training needs. Our expert team can help you design, develop, and deliver effective and high-impact eLearning solutions that drive results for your business.
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

export default ELearningServices;