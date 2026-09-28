import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SAPApplicationDevelopmentServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            SAP Application Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to world-class and thoroughly reliable ERP solutions using SAP to future-proof your business. Prices start at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            When your business expands, a major amount of productivity and systematic management comes from compartmentalizing departments and keeping them organized. This is when SAP applications can be extremely helpful in streamlining your business processes so that you are constantly connected with your workers and operations. SAP development services can be immensely useful for meeting your needs across human resources, sales, finance, and accounts.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Working with a professional SAP application development company not only helps you manage enterprise processes systematically, but also reduces complexities and provides greater stability while being cost-effective. Nimble Acuity is a leading SAP application development service provider with years of experience in offering a variety of SAP services to clients from small, medium, and large-scale businesses.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            SAP Application Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our services include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Custom reports and transaction development in the existing ERP.</li>
                            <li>Mobile application development.</li>
                            <li>Fiori app development.</li>
                            <li>Development and assistance with software that deploys SAP APIs.</li>
                            <li>Optimizing or establishing communication between the ERP and other software through HTTPS requests by developing middleware.</li>
                            <li>Integration of ERP into the enterprise ecosystem.</li>
                            <li>Customization.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource SAP Development Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As an experienced and professional SAP development company, Nimble Acuity offers top-notch services that are just right for your business. Some key reasons to choose our services are:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Flexible Pricing:</strong> We charge clients based on factors such as project complexity and the expertise of the professionals. This ensures you get top-quality services at budget-friendly rates.</li>
                            <li><strong>Latest Tools and Technologies:</strong> We leverage the latest tools and technologies to provide quick, accurate, and reliable SAP development services that are perfect for your organization.</li>
                            <li><strong>Global Delivery Centers:</strong> We provide the advantage of multi-location outsourcing with delivery centers set up in strategic countries to meet the engineering requirements of our global clients.</li>
                            <li><strong>Stringent Quality Checks:</strong> We carry out multiple levels of quality checks to ensure errors are kept to a minimum in each of our assignments, and your data is kept safe.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource SAP Development Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been a leading SAP development service provider, offering a whole range of SAP solutions. With a team of skilled and experienced SAP experts, we are capable of providing you with quick, reliable, and accurate services. Our multi-domain experience helps us provide the best of services, ensuring our clients are completely satisfied with our solutions.
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

export default SAPApplicationDevelopmentServices;