import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SpreadsheetValidationServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Spreadsheet Validation Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Verify all calculations on your spreadsheets for accurate outcomes and reliable data. Prices start at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Spreadsheets have proven to be an invaluable tool for calculations, data listing, and categorization. However, when your teams work with budgets, mathematical data, or complex formulas, manual validation can be time-consuming and prone to errors. Outsourcing this task to a professional spreadsheet validation company helps you avoid these pitfalls.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading validation service provider with experience catering to a variety of validation and optimization requirements for clients worldwide. Our team of professionals gains a complete understanding of your needs and works to deliver outcomes that ensure your spreadsheets are accurate and reliable.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Spreadsheet Validation Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has helped thousands of clients ensure their spreadsheets are compliant with all relevant guidelines and standards. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Spreadsheet Designing</h4>
                                <p>
                                    Our team of validation experts has the skills and knowledge to design compliant spreadsheets from the ground up, ensuring accuracy and efficiency from the start.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Compliance Risk Assessment</h4>
                                <p>
                                    If you have an existing spreadsheet, we can assess it to identify any compliance risks and help you resolve them efficiently to meet all necessary standards.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Validation Strategy</h4>
                                <p>
                                    Our experts will work with you to understand your existing processes and develop customized validation strategies that are a perfect fit for your operations. We can review calculations and VBA scripts to ensure everything fulfills your requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Validation Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing spreadsheet validation services to Nimble Acuity comes with a range of benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Pricing:</strong> We offer our services at competitive rates, ensuring you get high-quality and reliable service without high costs.</li>
                            <li><strong>Transparency:</strong> We ensure complete transparency by providing timely updates on the progress of your project.</li>
                            <li><strong>Dedicated Project Manager:</strong> You get a dedicated project manager who serves as a single point of contact for all your queries and updates.</li>
                            <li><strong>Data Security:</strong> We comply with all international data security guidelines to ensure your data is completely safe from any breaches.</li>
                            <li><strong>Quick Turnaround Time:</strong> Our multiple delivery locations worldwide ensure that projects are completed well within the stipulated timeframe.</li>
                            <li><strong>Scalability:</strong> We are fully equipped to handle and scale our services if your requirements grow.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Spreadsheet Validation to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been offering validation services to its global clientele for over 26 years. Our extensive experience provides us with great insights, allowing us to deliver flawless and dependable validation services that add immense value to your operations.
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

export default SpreadsheetValidationServices;