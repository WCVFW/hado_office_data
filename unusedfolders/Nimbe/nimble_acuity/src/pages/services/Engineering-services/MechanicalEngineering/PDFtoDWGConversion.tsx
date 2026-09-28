import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const PDFtoDWGConversion: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            PDF to DWG Conversion Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Convert your PDF files to editable DWG formats with exceptional accuracy and at a fraction of the cost.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Enterprises often need to create editable design libraries from their existing PDF drawings. This large-scale conversion to AutoCAD formats can be a substantial cost. Nimble Acuity offers a simpler, more cost-effective solution. As a professional conversion service provider with a wide range of engineering services, we help you convert your PDF files to DWG format with nearly 100% accuracy and at half the cost.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With our efficient team of designers and draftsmen, we provide fully editable, detailed, and multi-layer images. Using the latest global technologies, we function as a seamless extension of your in-house team. Our clients consistently vouch for the quality of our work, and we have honed our skills to meet difficult and complex requirements without delay.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our PDF to DWG Conversion Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we provide straightforward solutions for PDF file conversions, including converting legacy drawings and computer-aided designs to updated CAD formats. Our services are defined by:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Multiple levels of quality checks and a stringent workflow process.</li>
                            <li>Experience with various industry standards.</li>
                            <li>Strict adherence to customer specifications.</li>
                            <li>Creation of scalable DWG files using the latest CAD tools.</li>
                            <li>A combination of manual and automated redrafting to ensure dimensional accuracy.</li>
                            <li>Post-conversion, we update old images to your in-house standards regarding sheet borders, title blocks, symbols, and more.</li>
                        </ul>
                    </div>

                    {/* Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Conversion Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We follow a streamlined, step-by-step process to ensure a smooth and efficient conversion project:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Free Quote:</strong> You provide your project details, and we deliver a detailed quote.</li>
                            <li><strong>Quote Approval:</strong> Once you approve the timeline and quote, we set up a secure link for file sharing.</li>
                            <li><strong>Image Processing:</strong> Our team downloads your files and specifications to begin the conversion process.</li>
                            <li><strong>Quality Check & Delivery:</strong> We perform a rigorous quality check and send the converted files to you for review and approval.</li>
                            <li><strong>Final Delivery & Sign-off:</strong> After your final approval, we upload the completed, high-quality files and finalize the project.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource PDF to DWG Conversion to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            With over two decades of experience in providing engineering services, we work with you closely and follow your instructions to ensure the highest quality output. We take your specific requirements into account to provide a seamless and effective partnership. We guarantee:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Cost-effective solutions and competitive pricing.</li>
                            <li>Adherence to global quality standards.</li>
                            <li>Rapid deployment of resources to meet your needs.</li>
                            <li>Quick turnaround for legacy drawings.</li>
                            <li>24/6 technical support.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your PDF to DWG Conversions to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Choosing Nimble Acuity for your PDF to DWG conversion services is the best decision for your business. Our skilled team ensures high-quality results, and our streamlined process saves you time and resources.
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

export default PDFtoDWGConversion;