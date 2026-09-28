import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const WorkdayServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Workday Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Ensure smooth HR integration, data migration, and efficient finance processes with our specialized Workday services. We offer efficient process automation and workflow design.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for efficient solutions to optimize and automate your business procedures, particularly those related to payroll, HR, people management, and finances? Do you need a complete, integrated solution to manage your personnel and finances? If so, deploying Workday's product line is the best course of action, and we are here to assist you.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As a Workday consulting firm, our team at Nimble Acuity has served a diverse worldwide clientele, including many Fortune 1000 firms. We can assist you in implementing Workday products effectively and ensure you get the most return on your investment. We’ll also integrate all your Workday instances to help you streamline and automate numerous business operations. Choose our services today and let our expertise guide you on the right path to growth and success.
                        </p>
                    </div>

                    {/* Solutions We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Workday Solutions We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We can cater to your HR, payroll, human capital management, and financial management needs by assessing your business and tailoring Workday solutions exclusively for your business to ease your operations and help you make better and quicker business decisions. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Workday Consulting Services</h4>
                                <p>
                                    Utilize our expert Workday consultation services to establish scalable business models, improve organizational management, and more to drive favorable and profitable results.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Workday Managed Services</h4>
                                <p>
                                    Our specialists ensure you take advantage of all the features and functionalities that Workday has to offer. We deliver the greatest advantages without putting additional strain on your internal employees.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Workday Integration</h4>
                                <p>
                                    If you're using third-party data sources and systems, we can help you integrate these systems with the Workday platform for enhanced efficacy in terms of operations, practices, and an overall improvement in your ROI.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Workday Customization</h4>
                                <p>
                                    We assist clients with customizing their Workday implementations so that their investments pay rich dividends. We also ensure that our solution takes care of all their requirements.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Workday Analytics and Reporting</h4>
                                <p>
                                    We employ the Workday reporting and analytics software to give our clients a holistic picture of their people, finances, and operations so they can make better decisions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Workday Optimization</h4>
                                <p>
                                    Our expert consultants are ready to discuss your challenges and provide a custom solution. We will also ensure that your solution is optimized for the best results.
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
                            We have become a market leader in offering Workday solutions thanks to our consistent efforts and dedication to enhancing our clients' projects. What sets us apart includes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>High-quality Solutions:</strong> We ensure that quality is consistent throughout the project phases, providing comprehensive details on the process we undertake to give you a complete picture of your operations.</li>
                            <li><strong>ISO Certified Provider:</strong> We are an ISO 9001:2015-certified Workday service provider, ensuring we meet international quality standards.</li>
                            <li><strong>Data Security:</strong> We are compliant with ISO/IEC 27001:2022 regulations, which means we treat your data with care to ensure it is not poorly handled or given up to third-party sources.</li>
                            <li><strong>Rigorous Training:</strong> Our team of carefully handpicked professional consultants is regularly trained and updated on the latest developments to offer you unparalleled support and solutions.</li>
                            <li><strong>Quick Turnaround Times:</strong> We promise quick turnaround times, ensuring that we deliver results swiftly because we understand that time is a crucial resource for any business.</li>
                            <li><strong>Cost-effective Services:</strong> Our Workday consultation services come at highly competitive prices to ensure that budget never becomes a constraint when you decide to partner with us.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Optimize Your Workday Systems?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Workday is establishing itself as one of the best tools for optimizing business procedures and integrating other enterprise solutions. By using our services, you can unlock huge productivity benefits and realize your full potential. Contact us right away for a personalized quote.
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

export default WorkdayServices;