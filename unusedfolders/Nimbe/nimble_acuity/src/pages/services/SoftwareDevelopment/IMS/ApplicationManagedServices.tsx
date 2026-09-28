import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ApplicationManagedServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Application Managed Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Deal with your application development and testing requirements by hiring our team of managed IT experts.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Today, businesses are facing new realities where IT visionaries are expected to adopt trending technologies to avoid falling behind. It is essential not only to stay relevant in the dynamic industry but also to lower IT costs and be ready to scale on demand, as these are two essential things for enterprises to grow and succeed. So if you need an application managed service provider, look no further than Nimble Acuity. We offer world-class application managed services that will help your business drive growth and revenue.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As a leading provider of application managed services, Nimble Acuity has brought substantial benefits to businesses by supporting their vision to maintain control over cost and productivity. We can fulfill your need for bandwidth to prevent service disruption and make room for innovation, all while you spend your funds wisely.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Application Managed Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has helped hundreds of clients worldwide become who they wanted to be because of our professional services. Our application managed IT services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">360-degree Managed Services</h4>
                                <p>
                                    If you are looking to provide omnichannel support, automated widgets, and a unified experience for your clients, we will match your business with the right KPIs through our 360-degree managed services.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">App Modernization</h4>
                                <p>
                                    If you are looking for the best way to shrink expenses and find opportunities before others, we will help you do so by enhancing the customer experience and speeding up slow processes to reduce waiting. We achieve this through automation and the inclusion of new features.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business-Centric IT Support</h4>
                                <p>
                                    Where we stand apart is our ability to create a customer-centric model in application outsourcing where we also perform rebadging and scaling to keep you in demand. We perform optimization, partnership governance, and portfolio rationalization.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Development Ops</h4>
                                <p>
                                    We don't just deliver one-time services; we take care of the complete life-cycle needs of your application managed services, including everything from planning and management to providing complex back-end support and simulating automated systems to ensure the ruggedness of the system.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Agile Methods</h4>
                                <p>
                                    We offer excellent support to clients across the globe and take a collaborative approach to fulfill our ability to deliver agile managed services. We have a dynamic team of onsite and remote engineers, comprising UX professionals, analysts, test engineers, and more.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Lean IT Management</h4>
                                <p>
                                    We know best how to zero in on and eliminate unproductive activities that drain business productivity, leading to revenue loss and poor customer satisfaction.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Test Automation</h4>
                                <p>
                                    On client servers, we carry out test automation using some of the best test suites and test plans. We automate tests on web technologies, ERP, SOA, and more. We have the skill to perform UX tests and data tests, and we also excel in management and execution.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IT Auditing</h4>
                                <p>
                                    We have professionals who can audit the entire IT infrastructure, including technology, apps, and the processes in each domain. We offer transition support that covers your need to align with business KPIs.
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
                            Here are some of the benefits you get by choosing our services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Pocket-friendly Pricing:</strong> One of the biggest benefits of choosing an application managed services providing company like ours is the cost-effectiveness.</li>
                            <li><strong>High Accuracy and Quality Service:</strong> Managed application services from Nimble Acuity are a highly accurate solution that is certified for quality by our team.</li>
                            <li><strong>Experienced Team:</strong> We have a highly specialized team of IT experts who are adept at sophisticated project management tools and are punctual in service quality.</li>
                            <li><strong>Managed IT Software & Tools:</strong> We have managed IT software tools that enable us to do more with less effort. Our teams are adept at automated tools to accelerate delivery.</li>
                            <li><strong>Certified Provider:</strong> Nimble Acuity is an ISO 9001:2015 certified application managed IT services provider that meets or exceeds the prescribed standards.</li>
                            <li><strong>Data Security:</strong> We do not allow lapses in data management and take great care of our clients' data to prevent misuse and mismanagement.</li>
                            <li><strong>Modern Infrastructure:</strong> We have a fully-equipped infrastructure that is ready to serve clients in the best way possible using the best technology and IT hardware.</li>
                            <li><strong>Round-the-clock Support:</strong> We can be reached around-the-clock because we have the best call center team, trained in customer interaction to ensure a great experience.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Align with Your Business Goals?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading application managed IT service providing company. We have rich experience serving clients in both domestic and international markets. Our team manages everything from the backend of your application development to ensure timely service. We ensure maximum uptime of your IT at a small cost. Our deep application expertise combined with industry exposure has placed us among the best in the industry.
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

export default ApplicationManagedServices;