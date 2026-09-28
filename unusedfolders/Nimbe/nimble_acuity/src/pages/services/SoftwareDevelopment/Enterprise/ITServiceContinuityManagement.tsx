import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ITServiceContinuityManagement: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            IT Service Continuity Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Maximize business resilience and ensure uninterrupted business continuity with Nimble Acuity's IT service continuity management services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            IT services are the lifeline of every organization. Issues with your IT services can bring the whole business to a standstill. To protect against unexpected service disruptions caused by weather turbulence, power outages, political events, or virus outbreaks, organizations need a foolproof business continuity plan that ensures uninterrupted business operations, no matter the disruption.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, we are a premium provider of IT service continuity management (ITSCM) services, helping organizations, big and small, predict, prepare, and protect their businesses from all unwanted crises. Powered by robust tools and the latest technological inventions, our proactive and reactive ITSCM process is geared at detecting and mitigating critical system errors and process failures, helping your business become resilient to disruptions.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our IT Service Continuity Management Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We use a professionally recognized and comprehensive ITIL approach to help organizations identify, manage, and remediate all potential risks and threats that could have a serious impact on their productivity and functionality. Along the way, we also empower them to bring down disruption to an acceptable level and chalk out an effective recovery plan.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business Continuity Planning</h4>
                                <p>
                                    Through 'what-if' analysis, we plan and define a holistic business continuity plan that can help you restore your services and business processes after they have been disrupted. Our experts create, test, and implement a step-by-step recovery plan to prevent data loss.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Disaster Impact Analysis</h4>
                                <p>
                                    Our expert analysts can help you understand and quantify the impact a disaster could have on your services. This includes assessing the degree of damage, the extent of service disruption, and the time required to bring services back to normal.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business Continuity Management</h4>
                                <p>
                                    Through our ITSCM services, we help ensure uninterrupted service delivery and business continuity even during a disaster. We can help you detect and mitigate risks before they affect your organization and lay down a plan for effective and quick recovery.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Benefits of ITSCM</h4>
                                <p>
                                    By detecting and preventing IT issues early on, our services help organizations to:
                                </p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Keep vital services up and running, even during a disaster.</li>
                                    <li>Mitigate events before they could damage business processes.</li>
                                    <li>Recover quickly from accidents and disasters.</li>
                                    <li>Keep teams prepared for unforeseen events.</li>
                                    <li>Protect the business from losing sales or customers.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading IT service continuity management service provider. We help clients predict and stay prepared for all crises and ensure complete business productivity by minimizing the impact of disasters. Our on-demand and predictive business continuity plans seamlessly fit into your operations.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Competitive Pricing:</strong> We offer our ITSCM services at extremely affordable rates, making them easily accessible for organizations big and small.</li>
                            <li><strong>Instant Access to Certified Experts:</strong> Our team of experienced service continuity managers plans and processes disaster recovery policies for each risk scenario to keep you fully protected.</li>
                            <li><strong>Use of Latest Technology:</strong> We leverage the latest technological solutions and software to perform predictive analysis and simulate disaster scenarios, helping you quickly anticipate your recovery needs.</li>
                            <li><strong>Customized Solutions:</strong> We customize our ITSCM plans as per your region, line of business, and specific process requirements, ensuring you get the support you need, whenever you need it.</li>
                            <li><strong>Quick Service Delivery:</strong> We provide you with an effective and all-inclusive plan well within the promised timeline.</li>
                            <li><strong>Complete Peace of Mind:</strong> With us, you never have to worry about business disruption. We keep your business up and running, always.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Get Your Business Continuity Plan Today
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Minimize business disruption and determine all potential issues and recovery requirements with Nimble Acuity's ITSCM services. Our expert analysts use predictive analysis techniques to create a comprehensive business continuity strategy that helps you avoid outages and mitigate service disruptions. Our solutions and stellar support can help you plan, process, and prevent disasters that tend to affect the lives of your employees and customers.
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

export default ITServiceContinuityManagement;