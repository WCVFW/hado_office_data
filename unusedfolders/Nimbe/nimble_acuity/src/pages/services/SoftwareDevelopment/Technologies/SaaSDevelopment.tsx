import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SaaSDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            SaaS Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get fast, secure, and scalable SaaS web development services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Traditionally, companies have purchased or developed their own software, but **Software as a Service (SaaS)** is a modern model where they can access and use remotely hosted software over a network. This means companies pay to 'use' the software rather than to 'buy' it, making it a cost-effective alternative.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity provides top-quality **SaaS development services** to clients around the globe. Many independent software vendors (ISVs) have switched to the SaaS model, particularly in fields like video conferencing, content management, human resources, sales, and customer relationship management. We can help you make this transition seamlessly.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our SaaS Application Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            SaaS application development requires a strong understanding of configurability, multi-tenancy, and security. We have the expertise to build a true application that can serve various customers from different industries. Some of our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SaaS Solution Development</h4>
                                <p>
                                    Our software developers are trained to provide the best SaaS solution development. We can help you transform your packaged software into a web-based solution with similar features and capabilities, ensuring seamless integration and deployment.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SaaS Hosting</h4>
                                <p>
                                    Since SaaS applications are hosted on the cloud, you need a managed hosting provider with high uptime. We have the expertise and state-of-the-art infrastructure to help you build and deploy a customized SaaS solution to a hosting service of your choice.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SaaS Solution Upgrade</h4>
                                <p>
                                    Our team can upgrade an existing SaaS solution to a newer version with better features and security. We can also rebuild the entire application from scratch if required, based on your needs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SaaS Solution Management</h4>
                                <p>
                                    If you already have a SaaS solution but need a team to manage it, we can help. We assist with managing, maintaining, updating, and resolving issues with your existing SaaS solution to ensure seamless interoperability.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            8 Reasons to Partner with Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity's extensive experience with software professionals from around the world has given us the confidence to handle any kind of SaaS development request. Here are some reasons to choose our services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Scalable Solutions:</strong> We provide highly scalable SaaS solutions that can cater to the needs of your clients efficiently.</li>
                            <li><strong>Rapid Prototyping:</strong> We provide clients with a quick glimpse of how the required SaaS application will look and work.</li>
                            <li><strong>Customized and On-demand:</strong> We offer highly customized and on-demand services at very cost-effective prices.</li>
                            <li><strong>Timely Delivery:</strong> We provide the best services within the stipulated time, ensuring you don't suffer losses from project delays.</li>
                            <li><strong>Expertise in New Tech:</strong> Our team of software engineers is trained to work on the latest software tools and technologies to develop innovative solutions.</li>
                            <li><strong>State-of-the-Art Infrastructure:</strong> We have access to the latest tools, technologies, and infrastructure to provide high-quality services.</li>
                            <li><strong>Strict Agreements:</strong> We follow strict SLAs and confidentiality agreements, so you can be assured that your data is safe with us.</li>
                            <li><strong>Proven Experience:</strong> Our over 26 years of experience in the industry gives us the ability to handle any challenge.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Adopt the SaaS Model?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been providing top-quality SaaS development solutions and a plethora of other software development services for over two decades. If you are an ISV, you can take advantage of our SaaS solutions to offer a cost-effective alternative to your customers and venture into new markets. We can handle the entire development or work in sync with your in-house team.
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

export default SaaSDevelopment;