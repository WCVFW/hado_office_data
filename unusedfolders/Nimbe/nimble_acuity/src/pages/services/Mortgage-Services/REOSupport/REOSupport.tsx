import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const REOSupport: React.FC = () => {
    return (
        <>
            {/* Header */}
            <MortgageHeader />

            <section className="py-16 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            REO Support from Nimble Acuity
                        </h2>
                        <p className="text-lg text-gray-600">
                            Nimble Acuity offers streamlined, cost-effective support for REO brokers. Outsource your REO support to us and save up to 60% on costs and time.
                        </p>
                    </div>

                    {/* The Problem */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            REO (Real Estate Owned) operations come with a host of challenges. Are you spending too much money processing and submitting bills? Do you find it hard to track countless assets or keep up with ever-changing protocols?
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We have the solutions to all these issues with our accurate **REO (Real Estate Owned) support services**.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our REO Support Services
                        </h3>
                        <ul className="list-disc list-inside space-y-6 text-gray-700">
                            <li>
                                <strong>REO Reimbursement Services:</strong> As a core competency, our end-to-end reimbursement services help you process and submit bills accurately and on time, improving your cash flow and allowing you to focus on building your business.
                            </li>
                            <li>
                                <strong>REO Listing Support Services:</strong> Looking for a reliable and experienced provider? Our cost-effective solutions help your business remain competitive and improve efficiency, even during market uncertainty.
                            </li>
                            <li>
                                <strong>Lease Abstraction Support:</strong> Accurately documenting and interpreting lease contracts can be tough. We help real estate businesses, tenants, and lessors mitigate complications and liabilities that can arise from improper or incomplete lease documents.
                            </li>
                            <li>
                                <strong>Real Estate Title Support Services:</strong> As a leading REO support company, we offer cost-effective solutions to streamline your real estate process and improve business efficiency.
                            </li>
                            <li>
                                <strong>REO Administrative Services:</strong> Our team handles dozens of time-sensitive administrative tasks for REO brokers and professionals, saving you time. This includes:
                                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-700 mt-2">
                                    <li>**MLS Entry** - We can place your assets on the local MLS, generate attractive marketing comments, and upload photos.</li>
                                    <li>**Prospect Management/Buyer Leads** - We conduct buyer lead follow-ups and make calls from your lead generation system.</li>
                                    <li>**Marketing** - Our team can create flyers, website posts, and tap other marketing sources.</li>
                                    <li>**Upcoming Services:** Utilities Connection and Disconnections, HOA Research.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>REO Valuation Services:</strong> Our team works to drastically shorten delivery times for asset valuation. We support a range of services, including Third Party Fee BPO, Listing BPO, and Monthly Marketing Reports (MMR/MSR).
                            </li>
                            <li>
                                <strong>REO Agent Bank Sign-up:</strong> We can help you grow your REO business by registering your name with over 90 active banks and networks, saving you between 45-60 hours of work.
                            </li>
                            <li>
                                <strong>Customized REO Solutions:</strong> For any additional tasks you might need help with, we can outline a specific process. If we can't process a special request, we can connect you with one of our Virtual Employees for dedicated assistance.
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Partner with Nimble Acuity for Your REO Needs
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Our specialized support services are designed to streamline your REO operations, save you money, and free up your time so you can focus on growing your business.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Us Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default REOSupport;