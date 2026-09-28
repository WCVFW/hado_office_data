import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const MortgageLoanServicing: React.FC = () => {
    return (
        <>
            {/* Header */}
            <MortgageHeader />

            <section className="py-16 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Mortgage Loan Servicing
                        </h2>
                        <p className="text-lg text-gray-600">
                            Access unified mortgage loan servicing solutions that optimize your loan lifecycle and reduce the time and resources required for handling underperforming loans.
                        </p>
                    </div>

                    {/* The Problem & Solution */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The servicing of mortgage loans requires time and specialized expertise, and it can be extremely resource-intensive. If you're looking for a competitive advantage and better margins, you can benefit from partnering with us—a premier mortgage loan servicer.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With extensive experience in the mortgage industry, we have the expertise to offer comprehensive loan servicing solutions. We leverage tools, technology, and the knowledge of expert mortgage specialists to ensure seamless services for our clients and manage your collections for both performing and non-performing mortgage loans.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Mortgage Servicing Solutions
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Our unified solutions can streamline the mortgage loan servicing process for you. We offer specialized solutions for residential mortgage loan servicing, including:
                        </p>
                        <ul className="list-disc list-inside space-y-6 text-gray-700">
                            <li>
                                <strong>Mortgage Default Servicing:</strong> We provide comprehensive back-office support to ensure minimal losses in the case of delinquent or defaulting homebuyers.
                            </li>
                            <li>
                                <strong>Loss Mitigation Services:</strong> We offer all-inclusive services that take over administrative tasks such as documentation and borrower monitoring, plan origination, and loan re-servicing.
                            </li>
                            <li>
                                <strong>Home Retention Servicing:</strong> Our solutions aim at foreclosure prevention and homeownership preservation, covering support for loan deferrals and modifications.
                            </li>
                            <li>
                                <strong>Home Non-Retention Servicing:</strong> If a borrower can no longer retain their property, we can help you proceed with loss mitigation options such as mortgage release or short sale.
                            </li>
                            <li>
                                <strong>Property Preservation (REO):</strong> With our REO services, you can ensure that foreclosed property retains its value through maintenance and degradation prevention.
                            </li>
                            <li>
                                <strong>Performing Loan Servicing:</strong> We help move loans from the delinquent program back to the performing loan program when the borrower resumes payments.
                            </li>
                            <li>
                                <strong>General Services:</strong> Our general services include sending monthly statements, managing collections, maintaining balance sheets, and managing escrow funds.
                            </li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <ul className="list-disc list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Streamlined Loan Servicing:</strong> Our solutions follow optimized processes, ensuring high-quality services with fast turnaround times.
                            </li>
                            <li>
                                <strong>Experienced Professionals:</strong> Our team of financial and mortgage experts is well-versed in all matters of loan servicing.
                            </li>
                            <li>
                                <strong>Scalability:</strong> Our extensive resources allow us to easily scale our operations to meet your requirements.
                            </li>
                            <li>
                                <strong>Data Security:</strong> As an ISO-certified organization, we understand the importance of data confidentiality in the mortgage loan servicing process.
                            </li>
                            <li>
                                <strong>Reasonable Prices:</strong> Our services are offered at reasonable prices, with a transparent and flexible pricing structure to meet your unique needs.
                            </li>
                        </ul>
                    </div>

                    {/* Additional Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Additional Mortgage Services You May Benefit From
                        </h3>
                        <ul className="list-disc list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Mortgage Underwriting Support:</strong> Our team of skilled and certified underwriters provides accurate solutions to reduce margin compression.
                            </li>
                            <li>
                                <strong>Mortgage Closing Support:</strong> We streamline your mortgage closing process with back-office support and critical document handling.
                            </li>
                            <li>
                                <strong>Mortgage Post-Closing Support:</strong> We ensure seamless closing and post-closing processes with our review and audit support.
                            </li>
                            <li>
                                <strong>Mortgage Title Support:</strong> We help with title transfers and provide support for ordering, financial analysis, and property insurance.
                            </li>
                            <li>
                                <strong>Mortgage Appraisal Support:</strong> We help you determine the market value for your mortgage client's collateral with comprehensive reports.
                            </li>
                            <li>
                                <strong>Reverse Mortgage Support:</strong> Our experts can efficiently handle reverse mortgage support, including loan application review and verification.
                            </li>
                            <li>
                                <strong>Mortgage Software Solutions:</strong> Our AI-based software solutions support specialized mortgage functions and offer seamless integration with your existing systems.
                            </li>
                            <li>
                                <strong>Digital Marketing for Mortgage:</strong> We offer tailor-made digital marketing strategies for mortgage brokers, lenders, banks, and credit unions to improve engagement and conversion.
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Mortgage Servicing to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Our consolidated mortgage servicing solutions offer scalability, flexibility, and advanced measures for loss mitigation. Our expertise in industry regulations makes us your ideal partner. Outsource your mortgage servicing requirements to us and benefit from a streamlined process, reliable risk evaluation, and better loss mitigation.
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

export default MortgageLoanServicing;