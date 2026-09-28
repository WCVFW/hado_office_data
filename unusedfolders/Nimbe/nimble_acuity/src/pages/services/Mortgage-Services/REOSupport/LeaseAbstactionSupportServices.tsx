import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const LeaseAbstactionSupportServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <MortgageHeader />

            <section className="py-16 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Lease Abstraction Support Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We prepare summaries of lease documents to help real estate companies, lessees, and lessors easily evaluate key information at affordable rates.
                        </p>
                    </div>

                    {/* The Problem & Solution */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            A well-made lease abstract helps property managers, tenants, and investors make informed decisions. We ensure that lease terms are easy to interpret by creating a standard format that's reasonable and simple to update.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            By outsourcing lease abstraction support to **Nimble Acuity**, we help you identify errors, inconsistencies, and partial information that could otherwise lead to a financial burden. We've accumulated extensive experience in simple and complex lease abstraction processes, enabling us to deliver high-quality insights that help you make swift and well-informed decisions.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Lease Abstraction Support Services We Offer
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            When you partner with us, we compile summaries that are elaborate, accurate, and help discover possible discrepancies.
                        </p>
                        <ul className="list-disc list-inside space-y-6 text-gray-700">
                            <li>
                                <strong>Lease Data Abstraction:</strong> We empower your decision-making by scanning and compiling all crucial data, from critical dates and lease rights to clauses and deadlines, into a simple and easy-to-digest format.
                            </li>
                            <li>
                                <strong>Crucial Date Lease Abstraction:</strong> We collect information on monthly or annual rental schedules, helping you stay informed about updated terms and possible renewal options.
                            </li>
                            <li>
                                <strong>CAM Costs and Audit Terms:</strong> We provide a detailed summary of CAM charges, tax brackets, and pro-rata shares, as well as possible exclusions and grace terms for rental payments.
                            </li>
                            <li>
                                <strong>Fee Schedules Lease Abstraction:</strong> We round up all information on miscellaneous fees, late fees, processing rates, and other non-upfront costs involved in your lease contracts.
                            </li>
                            <li>
                                <strong>Lease Abstraction of Obligations:</strong> We outline policies covering insurance obligations, notice dates, user restrictions, and subletting terms.
                            </li>
                        </ul>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Lease Abstraction Process
                        </h3>
                        <ul className="list-decimal list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Lease Record Data Capture:</strong> We source your lease document, whether it is a digital file or a paper copy.
                            </li>
                            <li>
                                <strong>Sorting Lease Data into Template:</strong> We use advanced software like Yardi, ProLease, and Colliers 360 to scan your lease data and sort it into the appropriate templates.
                            </li>
                            <li>
                                <strong>Sanitization of Lease Abstract:</strong> We identify the relevant abstract, ensure data accuracy, and flag and rectify any errors.
                            </li>
                            <li>
                                <strong>Comprehensive Quality Control:</strong> We carry out extensive quality control checks on the final abstract to ensure a faster decision-making process for you.
                            </li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource to Nimble Acuity?
                        </h3>
                        <ul className="list-disc list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Affordable & Customizable Pricing:</strong> Our services are highly customizable, providing you with a significant cost advantage.
                            </li>
                            <li>
                                <strong>ISO-Certified:</strong> We are an ISO-certified service provider, ensuring that our professionals focus on delivering quality at every step.
                            </li>
                            <li>
                                <strong>High Data Security:</strong> Our teams sign NDAs and take all necessary precautions to protect your data from falling into the wrong hands.
                            </li>
                            <li>
                                <strong>Highly Scalable:</strong> With our large bandwidth, scaling up or down is easy and flexible to accommodate your requests.
                            </li>
                            <li>
                                <strong>Short Turnaround:</strong> We handle your project with priority, ensuring fast, error-free delivery.
                            </li>
                            <li>
                                <strong>Expert Professionals:</strong> Our team consists of highly qualified specialists with decades of cumulative experience.
                            </li>
                            <li>
                                <strong>World-Class Infrastructure:</strong> We use sophisticated software with AI functions and a secure infrastructure to double our efficiency.
                            </li>
                            <li>
                                <strong>24/7 Customer Support:</strong> Our team is always agile and ready to provide continuous support via your preferred communication channel.
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Lease Abstraction to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Lease abstraction demands significant time and dedication. This is why most homeowners, real estate companies, and tenants find it convenient to outsource to us. It's a key part of our larger REO services that helps businesses prevent financial burdens.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Us Right Away
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LeaseAbstactionSupportServices;