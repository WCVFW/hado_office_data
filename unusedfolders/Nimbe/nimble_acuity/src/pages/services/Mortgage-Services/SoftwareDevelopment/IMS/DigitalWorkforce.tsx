import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DigitalWorkforce: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Digital Workforce Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Track worker productivity, identify skill gaps, and access management reports to optimize your remote workforce.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Automation can be a complicated process, but it's tremendously useful for virtual workforce management. Managing an organization's digital workforce requires top-tier technical expertise. We help you implement **RPA (Robotic Process Automation)** processes to streamline your business functions. If you are looking for efficient digital workforce management services, **Nimble Acuity** is your best choice. We have a long track record of helping clients manage their digital workforce, and we understand what's needed to make your team stronger and more efficient.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Digital Workforce Management Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we offer the best services for intelligent digital workforce management. Our offerings include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Workforce Enhancement</h4>
                                <p>
                                    We help ensure your digital workforce's RPA management techniques remain relevant to your business needs, identifying areas for improvement to make your systems more efficient.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Collaborative Process Management</h4>
                                <p>
                                    Our professional team works closely with your team to ensure the effective management of digital processes, providing improvement methodologies for the best digital workforce solution.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automation Migration</h4>
                                <p>
                                    We provide fully-automated systems to boost your team's efficiency and save on expenses. Our experts deliver superior solutions with streamlined migration and other automation options.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Digital Workforce Consulting</h4>
                                <p>
                                    Our experts provide top-notch consultation services for virtual workforce management. With our guidance, there is no room for error in your strategy.
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
                            By choosing Nimble Acuity for your digital workforce management, you gain a variety of benefits, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Solutions:</strong> Our efficient virtual workforce management services are offered at competitive rates, making them accessible to companies of all sizes.</li>
                            <li><strong>Single Point of Contact:</strong> You'll be provided with a dedicated project manager who will keep you updated on all the details of your projects.</li>
                            <li><strong>Latest Technology:</strong> We leverage the latest technology, resources, and tools to offer high-quality, top-notch services and are constantly upgrading our infrastructure to provide you with the best outcomes.</li>
                            <li><strong>Data Security:</strong> We understand the importance of data security. As an ISO-certified company, we assure you that your business data is completely safe with us.</li>
                            <li><strong>24/7 Assistance:</strong> Have a workforce management emergency? Our support team is available at any time for instant assistance and guidance.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Enhance Your Digital Workforce?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With years of industry experience serving global clients, Nimble Acuity is a reliable and trustworthy digital workforce management company. We provide quick and commendable services that lead to maximum savings. We offer customized solutions for your software development and implementation requirements.
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

export default DigitalWorkforce;