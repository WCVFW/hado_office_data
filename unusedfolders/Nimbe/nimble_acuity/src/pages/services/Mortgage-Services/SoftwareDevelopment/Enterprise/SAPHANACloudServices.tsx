import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SAPHANACloudServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            SAP HANA Cloud Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Scale as per your requirements, process all types of business data, and perform advanced analytics on live transactions.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking to leverage the power of the SAP HANA cloud database to make faster, better-informed decisions by acting on live data? Do you need to process business data of multiple types and perform advanced analytics on transactions to aid in better decision-making? Do you want to integrate your data from across your enterprise by using the SAP HANA cloud database? If so, outsourcing SAP HANA cloud services to us is a wise choice.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading provider of SAP HANA cloud services globally. We help our clients leverage the full power of the SAP HANA cloud database to connect to distributed data natively and develop tools and applications across on-premise locations and the cloud. With our services, you can put your full trust in your business data and analysis, and leverage business-ready information by establishing one source of truth. You can also ensure security and privacy with enterprise-grade reliability.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our SAP HANA Cloud Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading SAP HANA cloud services company that can help you address a wide range of SAP HANA cloud requirements. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SAP HANA Upgrade Services</h4>
                                <p>
                                    If you have an existing SAP ERP system and want to migrate it to the latest SAP HANA business suites, such as the SAP S/4HANA business suite, we can do it for you with ease. We will help you run new business processes using SAP HANA cloud's impressive performance capabilities.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SAP HANA Test Cloud Services</h4>
                                <p>
                                    We can help you leverage the full power of SAP HANA Cloud to provide you with insights into your future performance. With our test cloud services, you can experience the full power of the SAP HANA cloud suite live and develop robust strategies for the future.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SAP HANA Cloud Services</h4>
                                <p>
                                    We will walk you through the process of deploying the SAP HANA cloud suite so you can utilize its functionality to reduce a large amount of administrative effort. We will set up the SAP HANA cloud solution to enable you to start enjoying everything this suite has to offer.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SAP HANA Managed Cloud Services</h4>
                                <p>
                                    Our SAP HANA managed cloud service is a comprehensive solution that takes care of monitoring, hosting, maintenance, and support for a wide range of SAP applications.
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
                            As a leading provider of SAP cloud platform services, we offer many benefits when you choose to outsource SAP HANA cloud services to us. These include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing Options:</strong> Our solutions are extremely affordable and flexible with both hourly and FTE pricing models.</li>
                            <li><strong>High-quality Services:</strong> We are ISO-certified and incorporate all the latest best practices to provide our SAP cloud application services.</li>
                            <li><strong>Superb Infrastructure:</strong> We have the infrastructure and technology to provide exceptional quality SAP HANA cloud solutions.</li>
                            <li><strong>Structured Process:</strong> We make use of a streamlined and systematic process for the delivery of all our SAP HANA services.</li>
                            <li><strong>Experienced Team:</strong> Our SAP HANA cloud team has extensive experience in providing a wide range of software design and development services.</li>
                            <li><strong>Data Security:</strong> We always follow international protocols to safeguard all your data.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Enhance Your Business Insights?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a pioneer in providing high-quality SAP HANA cloud services and other enterprise solutions. We use all the latest best practices and lessons learned over our years of operations to ensure that our clients get only the most advanced and cutting-edge services at a very competitive and cost-effective rate. If you are looking for professional, reliable, and affordable SAP HANA cloud services, get in touch with us today!
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get a Free Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SAPHANACloudServices;