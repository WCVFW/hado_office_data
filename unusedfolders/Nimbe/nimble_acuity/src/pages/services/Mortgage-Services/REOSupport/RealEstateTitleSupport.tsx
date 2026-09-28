import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const RealEstateTitleSupport: React.FC = () => {
    return (
        <>
            {/* Header */}
            <MortgageHeader />

            <section className="py-16 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Real Estate Title Support Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get dedicated and timely title search and support services for real estate at budget-friendly rates.
                        </p>
                    </div>

                    {/* The Problem & Solution */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Mortgaging real estate involves high financial stakes, and even a small mistake can lead to huge monetary losses. To prevent future discrepancies, a careful inspection of title details is essential. Title ordering, insurance, financial analysis, and title transfers are all crucial aspects of a thorough review.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At **Nimble Acuity**, we offer meticulous and speedy real estate title support services to help you streamline the deal closing process. With extensive experience, our team of professionals follows a structured approach to help your business's core functions run smoothly.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Real Estate Title Support Services
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            From mortgage lenders to financial institutions, we cater to all industry types with complete confidentiality and accuracy. As a leading provider, we offer the following solutions:
                        </p>
                        <ul className="list-disc list-inside space-y-6 text-gray-700">
                            <li>
                                <strong>Title Search:</strong> We inspect the property, verify previous title owners, and compile details of all parties involved.
                            </li>
                            <li>
                                <strong>Title Ordering:</strong> We capture and validate title details and follow up with the settlement company to obtain the title report.
                            </li>
                            <li>
                                <strong>Title Review:</strong> Our experts examine all title policies and supporting documents to ensure there are no illegal deeds, analyze property ownership history, and mitigate transfer risks.
                            </li>
                            <li>
                                <strong>Title Commitment Preparation:</strong> We prepare and document all title search and examination reports, rectify any defects, and acquire necessary data to ensure a speedy transaction closure.
                            </li>
                            <li>
                                <strong>Title Insurance:</strong> We assist lenders in ordering property insurance, reviewing documents for defects, and coordinating with carriers to prepare the final policy.
                            </li>
                            <li>
                                <strong>Policy Production Services:</strong> We help companies create final title policies, conduct a final examination of records, and advance the policy to the new owner party.
                            </li>
                            <li>
                                <strong>Settlement Support and Closing:</strong> We help close the property deal by organizing all title documents, coordinating with all parties for signing, and managing policy costs and collateral issues.
                            </li>
                            <li>
                                <strong>REO Report Services:</strong> Our REO specialists can review property offers, generate reports, and handle property security and valuation for brokers and agents.
                            </li>
                        </ul>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Real Estate Title Support Process
                        </h3>
                        <ul className="list-decimal list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Examination:</strong> We carefully inspect the title and other supporting documents after establishing your specific needs.
                            </li>
                            <li>
                                <strong>Pre-qualification:</strong> All documents are verified and sent to you for approval.
                            </li>
                            <li>
                                <strong>Application:</strong> Our team begins drafting the application for the title policy and insurance.
                            </li>
                            <li>
                                <strong>Underwriting and Commitment:</strong> We document and transfer all necessary information and files between the involved parties.
                            </li>
                            <li>
                                <strong>Insurance and Pre-closure:</strong> Our team applies for the title insurance policy to safeguard the rights of all parties.
                            </li>
                            <li>
                                <strong>Deal Closure:</strong> We help all parties mutually close the deal and transfer the title.
                            </li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            With over two decades of expertise, we provide exceptional, cost-effective services tailored to the real estate industry.
                        </p>
                        <ul className="list-disc list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Access to Experts:</strong> You gain access to the best talent in the world, with a team that is our pride and your advantage.
                            </li>
                            <li>
                                <strong>High Accuracy and Quality:</strong> Our comprehensive work process and multi-level quality control measures lead to accurate title support services.
                            </li>
                            <li>
                                <strong>ISO-Certified:</strong> As an ISO-certified company, our processes and operations adhere to the highest statutory guidelines and compliances.
                            </li>
                            <li>
                                <strong>Data Security:</strong> We adhere to stringent information safety measures and protection for all our clients.
                            </li>
                            <li>
                                <strong>Fast Turnaround:</strong> With the aid of best-in-class infrastructure and automated technical support, we offer the fastest turnarounds.
                            </li>
                            <li>
                                <strong>Economical Packages:</strong> We offer favorable, economical packages for businesses of all sizes, from small to large.
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Get in Touch with Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Partner with us for quick, streamlined, and economical real estate title support services. Your work will be done accurately, expertly, and securely, allowing you to focus on your core business.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RealEstateTitleSupport;