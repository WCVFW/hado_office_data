import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const Windows365SetupServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Windows 365 Setup Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Empower your virtual teams to work more effectively on the go with our Windows 365 setup services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            In the post-pandemic world, a significant percentage of professionals work remotely. The efficacy of work will suffer without effective virtual business communication, and the outcome is bound to reflect on your company's figures.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            To avoid such a slack, enterprises must immediately upgrade their IT infrastructure and empower the workforce with tools and technologies to work effectively on the go. With our Windows 365 services, you can offer your virtual teams the platform they need to brainstorm together, collaborate on projects, and verify approvals in real time.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Windows 365 Setup Services
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Subscription Consultation</h4>
                                <p>
                                    Windows 365 offers a variety of packages and pricing options. Based on your requirements, we help you choose the subscription that will give you the best ROI.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Account Setup</h4>
                                <p>
                                    We assist you in setting up your Windows 365 organizational account, including filling out company information, adding payment details, and setting up the administrative dashboard.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Assigning Subscription</h4>
                                <p>
                                    Based on our understanding of your business needs, we help you purchase licenses. We also help you customize the assigning and transferring of licenses among your employees.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Setting Up User Accounts</h4>
                                <p>
                                    As a leading provider of Windows 365 setup services, our experts work as an extension of your in-house team, assisting with setting up the workflow for single users and creating administrator access for designated users.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Migrating Existing Accounts</h4>
                                <p>
                                    This stage is as important as it is complex. Our experts work with you to seamlessly migrate existing emails, contacts, and calendars to the newly set up Windows 365 environment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Windows 365 Setup Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing Windows 365 setup services to us is a smart choice for many reasons:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Services:</strong> We offer flexible payment options and charge only for the services relevant to your business.</li>
                            <li><strong>Team of Skilled Experts:</strong> We have highly experienced professionals across our global delivery centers who are certified to provide seamless Microsoft customization, setup, and migration services.</li>
                            <li><strong>High-quality Services:</strong> We guarantee that you will always receive the most cutting-edge and relevant solutions for your business.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Empower Your Virtual Teams?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We are a leading Windows 365 setup service provider with years of experience in implementing and customizing Microsoft products. We have serviced thousands of clients across our global delivery centers. You can count on us for scalable and cost-effective services that are customized to address your strategic business needs.
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

export default Windows365SetupServices;