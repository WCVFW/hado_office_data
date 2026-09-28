import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SalesforceApplicationDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Salesforce Application Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Enhance user experience and integrate inter-teams for an agile solution with our specialized Salesforce application development services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Salesforce is the world's number one CRM platform, a single source that connects various business sectors like sales, marketing, IT, commerce, and services. Implementing Salesforce in your business will ease your workflow, enhance the user experience, and yield a strong return on investment.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Applications are essential for a smooth workflow within Salesforce. Businesses across various unique sectors—including healthcare, engineering, retail, and finance—all have unique requirements. Nimble Acuity, a leading Salesforce application development company, uses its vast experience to provide the best solutions tailored to all business sectors.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Salesforce Application Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            With extensive outsourcing expertise, Nimble Acuity is committed to delivering tailor-made services to all our clients. We have analyzed a broad spectrum of client requirements and categorized our offerings into major service types, which include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Salesforce Mobile App Development</h4>
                                <p>
                                    All your sales and service teams can update, collaborate, and access data anytime, anywhere using the Salesforce platform. We offer customized mobile solutions to meet all your requirements and increase the productivity of your mobile workforce.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Force.com Development Services</h4>
                                <p>
                                    If you use the Salesforce.com service, we can help you get an extra edge on your cloud journey. Our highly experienced team can build customized solutions that meet all your needs, helping you focus more on business processes and functional needs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Salesforce AppExchange Development</h4>
                                <p>
                                    We help independent software vendors and businesses connect better with their customers and employees through multiple Salesforce AppExchange products. Our experts can help you develop apps that find a wide marketplace.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Optima Pro Development Solutions</h4>
                                <p>
                                    Optima Pro is a comprehensive field service software solution. With our expertise, our team can make any complex customization for Optima Pro that meets all your needs and transforms the customer service experience.
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
                            Choosing the right partner for Salesforce application development is crucial. Nimble Acuity goes to great lengths to understand your requirements and deliver top-quality work at an optimal cost. Some of the key benefits of working with us include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Services:</strong> Our pricing is tailored to your specific needs, ensuring you only pay for the work we do.</li>
                            <li><strong>Certified Service Provider:</strong> Nimble Acuity is an ISO/IEC 27001:2022 certified provider with years of experience in Salesforce application development.</li>
                            <li><strong>High Scalability:</strong> Whether you are a small business or a large company, our dedicated teams are equipped to deliver services to meet your scale.</li>
                            <li><strong>Data Security:</strong> We give extreme importance to securing our clients' data. Our strict security protocols and access controls ensure your information is 100% safe with us.</li>
                            <li><strong>Supreme Quality and Accuracy:</strong> Our team of highly qualified and experienced professionals, combined with world-class infrastructure, ensures superior quality and accurate work.</li>
                            <li><strong>Quick Turnaround Time:</strong> With the right approach and a dedicated team, we deliver work within the project deadlines.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Enhance Your Salesforce Workflow?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Whether you're a small startup aiming to reach your target audience or a large enterprise looking to automate workflows and minimize human error, outsourcing Salesforce application development is the optimal solution. Nimble Acuity is known for its quality work, expert professionals, and superior service at reasonable prices.
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

export default SalesforceApplicationDevelopment;