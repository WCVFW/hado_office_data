import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const Windows365Migration: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Migration to Windows 365 Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Effortlessly switch to a seamless digital workplace by migrating to Windows 365 with our expert services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Windows 365 combines the power and security of the cloud with the versatility and simplicity of a PC. It offers new-age solutions for all employees, from contractors to software developers. Forget complicated legacy platforms. At Nimble Acuity, we offer effortless migration services that help you switch to Windows 365 with no downtime or data loss. Our certified Windows 365 experts create a solid migration plan tailored to your specific needs.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Migration to Windows 365 Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As your dedicated migration service provider, Nimble Acuity offers a full suite of services to ensure a smooth transition. We simplify the entire process, helping you cut costs, increase productivity, and gain flexibility. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mailbox Migration</h4>
                                <p>
                                    Our team of experts will move your entire mailbox, including calendar, emails, and contacts, to Windows 365 for all users.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Email Migration</h4>
                                <p>
                                    We provide the expertise of Internet Message Access Protocol (IMAP) to simplify moving your user emails to the cloud with minimal disruption.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Stream to Any Device</h4>
                                <p>
                                    As your migration partner, our team will make it easier for you to access your desktops, applications, and data from anywhere in the world on any device.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Azure Subscription Setup</h4>
                                <p>
                                    We'll set you up with an Azure subscription and ensure all your servers are properly configured and wired up to the Azure network for a seamless experience.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C] capitalize">Cloud PC Setup</h4>
                                <p>
                                    Once you're connected to the Azure Network, we can help you set up and assign the Cloud PC to all users in your company, along with providing the necessary licenses.
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
                            Despite receiving basic support from Microsoft, hiring a professional migration service provider is crucial. Here are the benefits of partnering with us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>24/7 Customer Support:</strong> Our remote teams effectively monitor your IT environment and provide round-the-clock support for any emergencies or disruptions.</li>
                            <li><strong>Cost-Efficient Solutions:</strong> By relying on our IT support, you can save on costs for additional staff, storage, space, and resources while receiving commendable migration services.</li>
                            <li><strong>Quick Turnaround Time:</strong> With our global expertise, there will be no delay in the entire migration process. We offer seamless services with the shortest possible turnaround times.</li>
                            <li><strong>Improved Productivity:</strong> With our state-of-the-art tools and expert support, we deliver high-end operations, allowing you to focus on your core tasks and get them done ahead of time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Make the Switch to Windows 365?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Outsourcing your migration to Windows 365 to Nimble Acuity will simplify the process, helping you cut costs, increase productivity, and provide flexibility. We offer a wide range of software development services to global clients.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Our Experts
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Windows365Migration;