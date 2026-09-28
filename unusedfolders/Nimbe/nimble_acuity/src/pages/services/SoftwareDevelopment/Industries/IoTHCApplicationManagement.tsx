import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const IoTHCApplicationManagement: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            IoT Application Management for Healthcare
                        </h2>
                        <p className="text-lg text-gray-600">
                            Leverage emerging communication technologies to enhance data connection, efficient delivery, and improve overall standards of care and patient experiences.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The benefits of the Internet of Things (IoT) in healthcare include improved diagnostic precision and better patient care. In hospitals, IoT has enhanced the efficiency of clinical tasks, operations, and administration, all while creating better patient experiences.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is uniquely positioned to be a leading provider of healthcare application management services in IoT. We understand the value and importance of IoT and have extended our services to ensure its seamless integration into healthcare systems worldwide. If you're looking to outsource to expert developers who can build and manage IoT applications for healthcare, we are a premier option.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our IoT Healthcare Application Management Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading provider of IoT healthcare application management services that deliver illuminating insights into patient activities and hospital operations. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Tracking</h4>
                                <p className="leading-relaxed">
                                    We implement solutions to ensure your IoT devices are connected for tracking different patient activities. Our solutions provide a penetrating insight into patient movements and activities at healthcare facilities.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Development</h4>
                                <p className="leading-relaxed">
                                    A key application of IoT in healthcare is the ability to assist in developing mobile and web applications that can connect in motion using IoT capabilities. We offer these efficient services to improve the entire healthcare system.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Reporting</h4>
                                <p className="leading-relaxed">
                                    Our professionals provide accurate reporting for IoT healthcare applications. With our services, your healthcare facility will get precise patient reports and medical statistics with seamless internet connectivity.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Monitoring</h4>
                                <p className="leading-relaxed">
                                    Different devices within a hospital can be connected using IoT to monitor patients' conditions. We ensure all monitoring activities are carried out effectively, enhancing patient safety and care.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Analytics</h4>
                                <p className="leading-relaxed">
                                    A crucial part of our services includes big data analytics. We analyze data from healthcare systems to extract valuable insights for incorporating IoT and achieving better results.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource IoT Healthcare Application Management to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Choosing Nimble Acuity for your IoT healthcare application management services provides significant benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Flexible Cost Quotes:</strong> We facilitate collaboration for businesses of any size, ensuring that budget is never an issue.</li>
                            <li><strong>High Data Security:</strong> With our strict data security measures, you have complete peace of mind that all information you share with us remains secure from external parties.</li>
                            <li><strong>Fast Turnaround Time:</strong> Our experienced professionals are fully supported by the necessary tools, skills, and resources to develop and manage top-notch IoT healthcare apps quickly.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource IoT Healthcare Application Management to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            As a leading IoT healthcare application development company, we are committed to achieving success in all we do. With over 26 years in this business, we have developed the expertise to manage our clients' diverse requirements. Contact us today to get a free quote and understand how we can help.
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

export default IoTHCApplicationManagement;