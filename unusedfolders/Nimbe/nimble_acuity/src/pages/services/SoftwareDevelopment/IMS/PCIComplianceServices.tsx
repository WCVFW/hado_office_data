import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const PCIComplianceServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            PCI Compliance Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            PCI compliance greatly decreases the risk of cyber attackers gaining access to cardholder data, with our solutions starting at a competitive price.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Any business that accepts credit or debit cards as a method of payment must adhere to the Payment Card Industry (PCI) Standards Security Council's guidelines. Noncompliance can result in penalties, increased transaction costs, reputational damage, and the loss of banking connections. The PCI services provided by Nimble Acuity assist organizations in complying with PCI standards.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity provides action plans to help organizations stay compliant with PCI. Our forensic analysis services detect and respond to attacks that aim to breach your network's defenses. As a leading provider of PCI Compliance Services, our solution is available as a security consulting service or as a managed security solution.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            PCI Compliance Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            PCI compliance is essential for every firm that processes or maintains payment card data. This guarantees that the information on their servers is safe and secure. If you lack the expertise in this area, we have the right resources for you.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Vulnerability Assessment for PCI ASV</h4>
                                <p>
                                    This evaluation uses automated techniques to identify known network, operating system, and application flaws, allowing your company to proactively address vulnerabilities.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Recurring Compliance</h4>
                                <p>
                                    Our service provides year-round support to help your business fulfill PCI's recurring obligations and track compliance requirements to minimize rework and ensure continuous adherence.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Assessment for PCI Readiness</h4>
                                <p>
                                    Our readiness assessment includes a checklist of critical areas of vulnerability and noncompliance, helping you prepare for an on-site Report on Compliance (RoC) examination.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">PCI Report on Compliance (RoC) and SAQ</h4>
                                <p>
                                    A PCI RoC is a risk assessment performed to establish the ability of your organization to secure cardholder data. We assist with this to ensure your business meets its yearly compliance requirements.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Quarterly Review of PCI Service Providers</h4>
                                <p>
                                    All PCI service providers are required to have quarterly audits. Our Security Assessors will work with you to support all of your compliance activities, ensuring your employees are following security requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PCI Compliance Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            PCI Compliance Process We Follow
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Regardless of the number of transactions, PCI compliance rules apply to every firm or organization that accepts, transmits, or maintains cardholder data. Here's Nimble Acuity's process for outsourcing PCI compliance services:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">01. Need Analysis</h4>
                                <p>
                                    We start with a detailed needs analysis to understand your specific PCI compliance requirements and identify any necessary regulatory steps.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">02. Strategizing the Plan</h4>
                                <p>
                                    We strategize a plan that includes identifying cardholder data, inventorying IT assets and business procedures for payment card processing, and conducting a thorough vulnerability analysis.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">03. Remediate</h4>
                                <p>
                                    We work to repair flaws and prevent the storage of cardholder data unless absolutely required, strengthening your security posture.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">04. Quality Testing</h4>
                                <p>
                                    As a leading PCI compliance service provider, we assess the quality of compliance to ensure your company is meeting all prescribed standards.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">05. Reporting and Support</h4>
                                <p>
                                    We curate and send the necessary reports to the relevant acquiring bank and card brands, and provide ongoing support to maintain your compliance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource PCI Compliance Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a prominent provider of PCI Compliance services. Our team of professionals has years of experience implementing and managing complex PCI Compliance projects, helping businesses change their services for an unparalleled digital experience.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Prices and Plans:</strong> We offer a variety of PCI Compliance solutions designed to work with any budget.</li>
                            <li><strong>Access to Modern Infrastructure:</strong> Our PCI Compliance team works out of world-class facilities to ensure seamless service delivery.</li>
                            <li><strong>Capable and Efficient Team:</strong> Our professionals have years of expertise in detecting and fixing vulnerability issues, employing cutting-edge technology to provide the best-in-class solution.</li>
                            <li><strong>Scalable Solutions:</strong> Get flexible assistance to match your changing needs as you grow and adapt.</li>
                            <li><strong>Short Turnaround:</strong> Our global delivery centers and operational team help us complete assignments quickly and efficiently.</li>
                            <li><strong>Complete Data Security:</strong> Your data is kept safe and secure on our encrypted servers.</li>
                            <li><strong>24/7 Customer Support:</strong> Our support staff is dedicated to assisting our customers in addressing their problems around the clock.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Ensure Your Business is PCI Compliant?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            It's impossible to fix all of a company's non-compliance issues at once. This is why it is critical to invest time and effort in identifying the most serious issues that might affect a firm. This is what we achieve at Nimble Acuity. We offer a low-cost version of PCI Compliance, allowing organizations to swiftly implement a risk-based security strategy.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get a Free Consultation
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PCIComplianceServices;