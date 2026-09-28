import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SoftwareAssetManagementServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Software Asset Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Manage, control, and protect your software assets throughout their lifecycle with our services, starting at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Software Asset Management (SAM) is the process of managing, controlling, and protecting software assets throughout their lifecycle. It helps an organization adapt to changing requirements without wasting money on unnecessary software costs. SAM also ensures optimal software utilization and absolute compliance for audit tests.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity has over 26 years of experience in software asset management. We've helped numerous organizations across domains manage their software assets to adapt to fast-changing market requirements without impacting the delivery process, leading to increased savings and productivity.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Software Asset Management Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer diverse software asset management services to enable our clients to manage end-to-end software needs. These services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Estimated License Position (ELP)</h4>
                                <p>
                                    We help you identify areas of under-license or over-license so you don't risk compliance or waste money on needless software purchases. We capture deployments and create routine reports to help your business stay compliant.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">License Report Generation</h4>
                                <p>
                                    Our reports will help you understand contractual obligations and rights for all installed software, consolidating all your licenses for better deployment and upgrades, leading to lower maintenance costs and 100% compliance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Review & Update of License Entitlements</h4>
                                <p>
                                    We help you review entitlements and get value-added advice on re-activating orphaned licenses, which can then be reused. This service helps you cut down on costs and avoid double buying.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cloud Usage Reporting (AWS, Azure, Office 365)</h4>
                                <p>
                                    We help you understand usage patterns and identify where to reassign or remove subscriptions to ensure a highly optimized usage pattern with zero waste from redundant costs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Contract Renewal Negotiation</h4>
                                <p>
                                    Our experience in software license negotiations gives us a fair understanding of how vendors function, helping us bring you the best possible deal when negotiating with a publisher on contract renewal.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Support for Publisher Audits</h4>
                                <p>
                                    We assist you in going through the process of software vendor audits. Our clients have leveraged our service to reduce initial audit findings significantly and minimize the time taken to finish audits.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Consultation Services</h4>
                                <p>
                                    With our on-demand consulting services, we enable our clients with inventory data management, license renewal management, vendor optimization, and compliance management. We assign a licensing specialist to overlook your requirements.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Self-Assessment Services</h4>
                                <p>
                                    We assist companies in proactively conducting internal software audits to ensure they are compliant with all contract renewals and software negotiation terms. This helps you foresee what auditors will look for and legally plug loopholes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Outsourcing to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing software asset management to us allows you to take your mind off a critical task and focus on your core business needs.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Expert Team:</strong> Our team consists of skilled software asset administrators, analysts, managers, and legal experts with extensive experience in providing IT Asset Management solutions.</li>
                            <li><strong>End-to-end Services:</strong> We handle every aspect of software asset management, from platform maintenance and compliance reviews to optimizing software usage and supporting strategic purchasing decisions.</li>
                            <li><strong>Fast Services:</strong> Our profound exposure to these services ensures your evaluation process is up and running in days, allowing you to quickly identify potential risks and improve ROI on purchase decisions.</li>
                            <li><strong>High-Account Savings:</strong> Our process leads to reduced licensing and maintenance costs, checks on future spending, and a reduction in non-compliance risks, all adding up to huge cost savings.</li>
                            <li><strong>Cost-Effective Solutions:</strong> Our streamlined process is less complicated and time-consuming, and our service delivery model allows us to pass on the cost-benefit to you.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Software Asset Management to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has an exemplary track record of reducing application procurement costs, streamlining software utilization, and reducing the risk of non-compliance in the event of a software audit. Our clients have leveraged our services to manage enterprise IT infrastructure on a flexible, agile basis and acquire key business outcomes without losing focus on their core business.
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

export default SoftwareAssetManagementServices;