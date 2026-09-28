import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ArangoDBService: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            ArangoDB Managed Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our ArangoDB managed services handle your DB systems while we create, monitor, and maintain your database, ensuring zero downtime, with rates starting at $20 per hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Looking for a professional ArangoDB managed service provider? Nimble Acuity offers DBaaS solutions to manage your system by harnessing the full functionality of the ArangoDB cluster. We use ArangoDB to run your databases on preferred cloud services like Amazon Web Services, Google Cloud Platform, or Microsoft Azure to control overhead costs and improve business productivity.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As a leading ArangoDB managed service provider, Nimble Acuity monitors your database to ensure availability and keeps it up to date by installing recent versions without causing service disruption. We also encrypt and back up your data to provide all-around protection. Our ArangoDB managed solutions are both high-quality and affordable.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            ArangoDB Managed Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we take a pragmatic, data-driven approach to address your database needs using the best methodologies. Our ArangoDB managed solutions include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Database Monitoring</h4>
                                <p>We offer both basic and advanced monitoring services to ensure your database is in optimal condition. We perform frequent health checks for anomalies and provide early warnings to take corrective measures before they become major disruptions.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Managed Data Backup</h4>
                                <p>If creating data backups is costing your team productive hours, we will do it for you. We prepare and execute detailed backup schedules to ensure high data availability and prevent backlogs.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Managed OS Optimization</h4>
                                <p>From basic tuning to updating security patches and hardening, we do it all on your behalf. We aim to completely free you from the burden of OS optimization while also monitoring applications and CPU response.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise-level Analytics and Dashboard</h4>
                                <p>Getting insights on database performance is both difficult and costly. By outsourcing to us, you save money and effort. We analyze app metrics and populate dashboards with the freshest information.</p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our ArangoDB Managed Implementation Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity follows a highly efficient ArangoDB managed and development process to ensure all deliverables meet the SLA. Our process is as follows:
                        </p>
                        <ul className="list-decimal list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Strategy and Proposal:</strong> We understand your business needs by engaging with you through your preferred channels.
                            </li>
                            <li>
                                <strong>Solution Proposal:</strong> After analyzing your needs, we will configure a solution and propose it for your approval.
                            </li>
                            <li>
                                <strong>ArangoDB Managed Service:</strong> The managed services are carried out by our team according to your exact requirements.
                            </li>
                            <li>
                                <strong>Quality Check:</strong> As a top provider of ArangoDB managed services, we debug our team's processes to ensure full compliance.
                            </li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity For Outsourcing ArangoDB Managed Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            What makes Nimble Acuity a top ArangoDB managed services provider? Here are our key differentiators:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective pricing:</strong> Our custom solutions are designed to be cost-effective, allowing you to choose services that fit your budget.</li>
                            <li><strong>High-quality Services:</strong> We never compromise on quality. We measure client satisfaction to continuously optimize our service levels.</li>
                            <li><strong>Rapid TAT:</strong> Our services are delivered by professionals with extensive knowledge of the ArangoDB framework, ensuring a rapid turnaround time.</li>
                            <li><strong>Scalable Solutions:</strong> Our solutions are scalable, so you can always approach us to scale your project to meet your exact needs.</li>
                            <li><strong>ISO Certified Provider:</strong> As an ISO 9001:2015 certified solutions provider, we adhere to high standards of quality, timeliness, and security.</li>
                            <li><strong>100% Data Security:</strong> The safety of your business data is part of our service contract, and we take the best steps to honor it.</li>
                            <li><strong>Round-the-clock Support:</strong> Our 24/7 support ensures you get the best value by talking to our agents from your time zone.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource ArangoDB Managed Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, our managed services teams have access to all the necessary technologies and infrastructure to stay aligned with the latest ArangoDB principles. We are known as a top provider of ArangoDB managed services, with a strong reputation built on experience and a high success rate. With over 26 years of experience in database services, our team's ability to meet business challenges with efficiency is our greatest strength.
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

export default ArangoDBService;