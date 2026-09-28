import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const PrescriptiveAnalytics: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Prescriptive Analytics Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Harness the power of the most advanced form of business analytics to transform data into actionable, instant strategies for your organization.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Prescriptive analytics is an advanced form of business intelligence that provides organizations with the tools to analyze data and derive immediate, implementable action plans. This method uses various techniques, including neural networks, machine learning, simulation, and graph analysis. However, conducting prescriptive analytics in-house can be labor-intensive and prone to errors.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Outsourcing this is a smart business choice. Nimble Acuity is a leading provider of prescriptive and stochastic analytics solutions, helping clients worldwide make informed business decisions and achieve their strategic goals.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Prescriptive Analytics Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our business analysts are highly experienced and understand the importance of prescriptive analytics. With our robust infrastructure, skilled resources, and advanced technologies, we provide a range of key services:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Simulation Approach</h4>
                                <p className="leading-relaxed">
                                    Often used for design scenarios, this approach helps you study system behavior under specific configurations to ensure performance metrics are met.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Optimization Approach</h4>
                                <p className="leading-relaxed">
                                    Designed to support ongoing operational business planning, this advanced approach leverages linear programming to identify and recommend suitable business strategies, with a strong focus on data security.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Statistical Analysis</h4>
                                <p className="leading-relaxed">
                                    Our team can provide the necessary statistical analysis to validate your hypotheses and assumptions, testing them using a variety of statistical models.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Prescriptive Modeling</h4>
                                <p className="leading-relaxed">
                                    This process provides the capability to automatically create accurate predictive models for the future. We also offer multi-model evaluation to help you choose the best solution and make critical business decisions at the right time.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Prescriptive Model Deployment</h4>
                                <p className="leading-relaxed">
                                    We help you apply analytical results directly into your decision-making systems. Our team can also set up systems that automatically take actions based on the models, delivering desired results.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Stochastic Analytics Services</h4>
                                <p className="leading-relaxed">
                                    Our stochastic analytics services are designed to handle data uncertainty by altering statistical values when input parameters are random, ensuring robust decision-making.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            For over two decades, we have been providing efficient web and business analytics services to clients from various backgrounds. Our experience ensures we serve our customers in the best way possible. Here are some reasons to choose us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-Effective Rates:</strong> Our high-quality prescriptive analytics solutions are offered at highly competitive rates, helping you save without compromising on accuracy.</li>
                            <li><strong>Streamlined Process:</strong> We follow a systematic and efficient process to ensure we deliver only the best-quality services to our clients.</li>
                            <li><strong>Cutting-Edge Software:</strong> We use the latest and most updated business analytics software to deliver quick, accurate, and cost-effective services.</li>
                            <li><strong>Highly Accurate Results:</strong> Our services provide highly accurate results that empower your company to make the best possible business decisions.</li>
                            <li><strong>Data Security:</strong> We ensure your business-critical data is completely safe by strictly following stringent confidentiality agreements and data security policies.</li>
                            <li><strong>Quick Turnaround Time:</strong> We prioritize delivering our services as quickly as possible to ensure your business schedules are not affected.</li>
                            <li><strong>Experienced Team:</strong> Our team consists of highly experienced business analysts trained to handle any prescriptive analytics requirement.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Prescriptive Analytics to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading analytics company with over 26 years of experience. Our extensive knowledge helps us provide quality reporting and analytics services. We will quickly analyze your data and provide insights that empower you to make informed business decisions at the right time.
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

export default PrescriptiveAnalytics;