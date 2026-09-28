import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DevSecOpsServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            DevSecOps Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We have the best security practices to ensure the overall development and management of your DevOps strategies. Outsource DevSecOps managed services at competitive rates.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for professionals to handle your DevSecOps requirements? Do you want to outsource these needs to a reliable software development company to facilitate the growth and success of your business? Do you want your digital transformation journey to go without a glitch and need some professionals to help you with that? The best way to achieve this is to opt for reliable DevSecOps services.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a pioneer in offering the best DevSecOps framework services globally. With our tailored approach that works according to your unique needs, you can increase your company's agility and efficiency by adopting the best security methods.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            DevSecOps Solutions that We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our DevSecOps services and solutions include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Rapid DevSecOps Implementation</h4>
                                <p>
                                    We assist in the seamless management of all the compliance requirements that are crucial for proper DevOps management.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automatic Validation</h4>
                                <p>
                                    When you choose our DevSecOps security services, we ensure thorough compliance scans at every stage of the process. This provides proper quality and complete compliance throughout the development process.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">24/7 Monitoring</h4>
                                <p>
                                    We offer DevSecOps as a service, providing you with real-time insights and results throughout the development process.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise Risk Assessment</h4>
                                <p>
                                    Our services provide a full assessment and analysis of all potential security risks that might impede proper DevOps management.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Planning</h4>
                                <p>
                                    Rely on our services, and we will offer a customized plan tailored to your specific needs. Outsourcing DevSecOps services to us will lead to fantastic results.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Consulting Services</h4>
                                <p>
                                    We will advise you on the best strategies and methods to employ for the successful fulfillment of your DevSecOps management plan.
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
                            Outsourcing DevSecOps solutions to our company will enable your business to experience a plethora of benefits. Here are some reasons why you should choose our services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>ISO-Certified Company:</strong> We practice the best methods to ensure proper security practices are used, allowing you to focus on the development of your business.</li>
                            <li><strong>Data Security:</strong> When you choose us for DevSecOps as a service, rest assured that your company's data will be kept safe and secure.</li>
                            <li><strong>Affordable Rates:</strong> We have cost-effective pricing packages for our clients to ensure they only pay for the services they need.</li>
                            <li><strong>Robust Infrastructure:</strong> We are equipped with the latest tools and technologies to ensure efficient results and the best services.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Get Reliable DevSecOps Consulting Services
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of DevSecOps managed services, extending reliable solutions to a plethora of clients worldwide. Backed by a skilled team and efficient technology, we ensure all your project requirements are fulfilled on time and with no compromise on quality.
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

export default DevSecOpsServices;