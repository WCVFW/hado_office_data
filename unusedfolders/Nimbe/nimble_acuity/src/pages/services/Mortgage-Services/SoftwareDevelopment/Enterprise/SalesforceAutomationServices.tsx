import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SalesforceAutomationServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Salesforce Automation Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Leverage our Salesforce automation services to improve your team's productivity, track their performance, and maximize your returns.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for a solution that can streamline your sales processes and help your business stay ahead of the competition? Automate your sales processes with Nimble Acuity's Salesforce automation services and give your sales team the much-needed automation boost.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a reputed Salesforce automation company. We design intelligent solutions that help you optimize and automate your manual sales processes, gain accurate and real-time updates about your customers, build effective customer acquisition strategies, and successfully resolve all field challenges for maximum productivity and revenue.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Salesforce Automation Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity offers the best sales automation services. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">360° Activity Tracking</h4>
                                <p>
                                    Our services allow you to track your sales teams and customers to know where a client is in the sales process. By providing a holistic view, we enable you to maximize sales.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automated Lead Generation</h4>
                                <p>
                                    We analyze your customers' journeys to evaluate if they qualify as prospective leads. By filtering out the right customers, we save you time and effort while increasing your conversion rate.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automated Sales Tracking</h4>
                                <p>
                                    Our systems help your sales team take appropriate actions at each stage of the sales process. Our experts automate your sales processes to keep the workflow moving without manual interventions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automated Appointment Scheduling</h4>
                                <p>
                                    We enable you to schedule meetings easily by automating the appointment scheduler and lead assigner. This takes the guesswork out of lead generation and workload distribution activities.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automated Report Generation</h4>
                                <p>
                                    With our tools, you can analyze real-time data and metrics to produce reports without any manual intervention. This helps managers analyze team performance on a day-to-day basis to predict sales, revenue, and business growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Salesforce Automation to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Looking for a reliable Salesforce automation service providing company? Outsource your requirements to us.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Certified Experts:</strong> Our in-house developers and designers are masters in their trade, providing the best solutions for your varied needs.</li>
                            <li><strong>Tailored Services:</strong> We understand that every business is different, so we offer customized services to meet your specific requirements.</li>
                            <li><strong>Affordable Prices:</strong> We offer cost-effective rates with customized prices and flexible payment modules.</li>
                            <li><strong>Short Turnaround:</strong> We understand how critical time is for you and deliver our services within the stipulated timelines.</li>
                            <li><strong>Complete Data Security:</strong> Being an ISO/IEC 27001:2022 certified company, we abide by stringent data security norms to keep your data safe and secure.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Salesforce Automation Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Outsource Salesforce automation services to Nimble Acuity and create an agile sales management system that can automate and streamline your routine sales tasks. We have served over 18,000 happy clients in the last 26+ years, effectively monitoring and regulating your customers' journeys to ensure the best possible communication and avoid costly mistakes.
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

export default SalesforceAutomationServices;