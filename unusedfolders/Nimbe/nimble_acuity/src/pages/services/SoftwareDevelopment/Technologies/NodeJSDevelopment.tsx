import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const NodeJSDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Node.js Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Harness the full potential of Node.js to build high-performance applications, APIs, and other server-side projects with our expert services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Enterprises of all sizes leverage the Node.js framework to build fast, high-performance, and scalable applications and APIs. However, challenges such as scalability issues, performance problems, and complexity in code maintenance often stop them from harnessing the full potential of Node.js. Partnering with an experienced Node.js service provider is the best step to overcome these hurdles.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Node.js is one of the advanced platforms our highly skilled developers have been using to build and power client applications. Our developers are well-versed in a variety of programming languages and can help you strategize the most practical and effective approach to your project, providing comprehensive solutions for all your web and API development needs.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Node.js Development Solutions We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our expert team of Node.js developers uses a variety of methodologies to create client and server-side web applications that perfectly align with your business goals. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Node.js Consulting Services</h4>
                                <p>
                                    We help our clients understand the best practices for Node.js development and integration for their applications, APIs, and other systems. We also assist with performance optimization.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Node.js Web Application Development</h4>
                                <p>
                                    By leveraging Node.js frameworks and tools, we deliver high-quality, scalable, and secure web applications that can handle heavy traffic and real-time data processing with ease.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Node.js API Development</h4>
                                <p>
                                    We use Node.js frameworks and follow the best practices in API design to build powerful RESTful APIs, GraphQL APIs, and microservices for your applications.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IoT Application Development</h4>
                                <p>
                                    Our IoT applications, built with Node.js, ensure seamless connectivity and can handle real-time data processing from various sensors, devices, and platforms.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Node.js UX/UI Development</h4>
                                <p>
                                    We create engaging and intuitive user interfaces for web and mobile applications. Our designs focus on providing a better user experience and boosting overall application performance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Node.js Plugin Development</h4>
                                <p>
                                    Our developers can help you extend the functionality of your Node.js applications by creating custom plugins and modules, including libraries, utilities, and other tools.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Node.js Integration Solutions</h4>
                                <p>
                                    We provide custom integration solutions to help you seamlessly connect your existing systems, including databases, messaging systems, and cloud services, with Node.js.
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
                            Outsourcing your Node.js development to us gives you access to a plethora of benefits. Here are some key reasons to choose Nimble Acuity:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>State-of-the-art Infrastructure:</strong> We use the latest tools and technologies to deliver top-notch services to our clients.</li>
                            <li><strong>Experienced Team:</strong> Our team consists of some of the most experienced and skilled developers who can handle all your needs with ease.</li>
                            <li><strong>Error-free Services:</strong> As an ISO-certified company, we ensure that all the services delivered by our team are completely error-free and reliable.</li>
                            <li><strong>Short Turnaround Times:</strong> Our streamlined and efficient processes ensure the delivery of high-quality Node.js solutions with short turnaround times.</li>
                            <li><strong>Cost-effective Prices:</strong> We provide our clients with highly affordable and flexible pricing options that are tailored to their business requirements.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build Your Next Application?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We are one of the leading pioneers in providing Node.js and a series of other software development services. Our Node.js developers are known for creating solutions that help steer your business to new heights. Our commitment to long-term partnerships is reflected in our full-cycle services covering every aspect of development and implementation.
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

export default NodeJSDevelopment;