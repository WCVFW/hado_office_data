import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SQLServerManagedServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            SQL Server Managed Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Free your internal team from the responsibilities of SQL server management by outsourcing your requirements at rates starting at $20 per hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Is it proving difficult to manage every aspect of your SQL server? If your team lacks the bandwidth to handle SQL server management, hiring more people and training them won't make a difference because it eventually adds to your overhead cost and effort. Take the smarter step by outsourcing SQL server managed services to Nimble Acuity. We believe it's better to outsource SQL managed services because it reduces database maintenance cost, frees up internal resources, and sets the ball rolling in terms of performance.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity, being a professional SQL server managed service provider, can offer round-the-clock support in services and migration, SQL consultation solutions, daily maintenance of the SQL database, bug fixing, performance updates, troubleshooting, and more without disrupting your business.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            SQL Server Managed Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we take the best approach to deal with all types of SQL server managed services to address the database maintenance challenges faced by businesses. We offer end-to-end SQL server managed solutions that include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SQL Database Migration</h4>
                                <p>
                                    If you are prepared to scale your business, then you must have thought about SQL database migration. If so, letting us handle the SQL migration makes sure that the process is error-free and seamless. We also do it with agility to prevent downtime in your business.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Managed Data Backup</h4>
                                <p>
                                    SQL database backup and recovery are not for the faint of heart. Small lapses can contribute to bigger challenges and complications that become an endless nightmare for your IT team. So, if your team is already stretched between various responsibilities, leave SQL data backup and recovery roles to our experts. We will do it with care and due diligence to ensure the safety of your data.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SQL Server Maintenance</h4>
                                <p>
                                    Managing servers is like working in a matrix, especially when there is a need to run scheduled maintenance every other day. The process is endless, tiring, and demands attention to every aspect. If this is costing your team productivity, let us take over the responsibility of SQL server maintenance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SQL Monitoring and Bug Fix</h4>
                                <p>
                                    If your SQL system has bugs, it penalizes performance. If the bugs go unnoticed or if they are left unchecked, it can lead to major disruptions costing thousands of dollars to fix. So, proactive monitoring is the best way to be prepared. This is what we do best at Nimble Acuity. We offer SQL monitoring and bug fixes to stay ahead of all challenges, sometimes even before they occur.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our SQL Server Managed Implementation Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity follows a highly efficient process for SQL server managed services, ensuring all deliverables are achieved as per the SLA. Our process is as follows:
                        </p>
                        <ul className="list-decimal list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Strategy and Proposal:</strong> We interact with the client to understand their database challenge and determine ways to fix the issues.
                            </li>
                            <li>
                                <strong>Solution Proposal:</strong> After capturing the client's business challenges, we will propose a solution capable of providing managed services with a well-planned workflow.
                            </li>
                            <li>
                                <strong>SQL Server Managed Service:</strong> Once the approval is made, the SQL server managed services are carried out as per the client's requirement.
                            </li>
                            <li>
                                <strong>Quality Check:</strong> As a top provider of SQL server managed services, we ensure 100% compliance with quality standards.
                            </li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity For Outsourcing SQL Server Managed Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            What makes Nimble Acuity one of the topmost SQL Server managed service providers? Here are some of our key differentiators:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective pricing:</strong> We offer SQL server managed services at reasonable rates, and our services can be customized for your specific needs.</li>
                            <li><strong>High-quality Services:</strong> Quality is one area where we have excelled for many years. Our SQL server managed services ensure 100% client satisfaction.</li>
                            <li><strong>Rapid TAT:</strong> Our SQL server managed services are handled by people with professional experience and knowledge of the SQL server framework.</li>
                            <li><strong>Scalable Solutions:</strong> The SQL server managed solutions can be scaled to your project needs. If you lack the bandwidth to handle more server management roles, we have you covered.</li>
                            <li><strong>ISO Certified Provider:</strong> As a trusted provider of SQL server managed services, we are ISO 9001:2015 certified for quality, timeliness, and security.</li>
                            <li><strong>100% Data Security:</strong> The safety of your data is our highest priority, and we do what it takes to keep your data protected.</li>
                            <li><strong>Round-the-clock Support:</strong> We offer round-the-clock support to our clients to make sure you are supported by phone call, email, and web chat.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource SQL Server Managed Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, the teams behind our managed services are committed to the highest principles of SQL managed services. We are known as a top provider of SQL server managed services from an experience and success point of view. From basic monitoring to advanced analytics management, we offer complete SQL Server managed solutions. With over 26+ years of experience in database services, we have developed a strong reputation as a leading SQL server managed service provider. Our strength and achievements come from our team's ability to meet all business challenges with agility, quality, and efficiency.
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

export default SQLServerManagedServices;