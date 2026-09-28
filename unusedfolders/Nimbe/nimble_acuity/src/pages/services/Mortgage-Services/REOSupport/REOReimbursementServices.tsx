import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const REOReimbursementServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <MortgageHeader />

            <section className="py-16 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            REO Reimbursement Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            The REO team at **Nimble Acuity** provides efficient and timely REO Bill Reimbursement services to REO Brokers.
                        </p>
                    </div>

                    {/* The Process */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            We help you maintain your books efficiently, ensuring that bills are processed quickly and payments are made on time. Bills submitted by vendors like plumbers, electricians, and gardeners are processed in QuickBooks as a bill, which we then submit to the property owner for reimbursement.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We understand the importance of quick processing and following all necessary steps in the right formats so that you receive a full refund. Our team is familiar with the different reimbursement methods followed by various banks.
                        </p>
                    </div>

                    {/* Advantages */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Advantages of Partnering with Nimble Acuity
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>
                                <strong>Cost Savings:</strong> Save up to 50% with our REO billing and reimbursement processing services.
                            </li>
                            <li>
                                <strong>Scalability:</strong> Our services offer the flexibility to scale up operations as needed to meet your business demands.
                            </li>
                            <li>
                                <strong>High Quality:</strong> We follow a stringent quality process to ensure there are no errors, speeding up your reimbursement process.
                            </li>
                            <li>
                                <strong>Timely Reimbursements:</strong> We process on an aggressive timeline with very short turnarounds, ensuring you receive submissions quickly.
                            </li>
                        </ul>
                    </div>

                    {/* The Submission Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our REO Bill Submission Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our teams have worked closely with REO brokers to establish robust back-office operations. We use the best tools and technology, including QuickBooks, QuickBase, and our in-house workflow automation tool, iBridge.
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li>REO Broker scans bills into a secure server.</li>
                            <li>Our process center prepares the bills.</li>
                            <li>You can print the checks and scan copies to be processed.</li>
                            <li>Our process center matches the checks and bills, preparing them for bank submission.</li>
                            <li>Our REO processors submit the bills directly to your clients.</li>
                            <li>The submitted files (bills & checks) are delivered to the broker, confirming submission.</li>
                        </ul>
                    </div>

                    {/* Our Team */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Bill Reimbursement Team
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            At **Nimble Acuity**, our REO team consists of graduates and post-graduates with an average of 6 months of work experience. The team receives tailor-made training on every aspect of the REO industry and is assigned to projects only after passing rigorous qualification tests.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Each team is headed by a Team Leader and an Account Manager. With robust tracking mechanisms and multiple quality checkpoints, our team has processed tens of thousands of bills, ensuring high-quality results for our clients.
                        </p>
                    </div>

                    {/* Security and Confidentiality */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Data Security and Confidentiality
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            We give the utmost importance to data security and confidentiality, providing specialized outsourcing solutions with stringent policies to protect your sensitive information.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Contact Nimble Acuity for REO Support
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Partner with us for streamlined and accurate REO reimbursement services that help you save time and improve your cash flow.
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

export default REOReimbursementServices;