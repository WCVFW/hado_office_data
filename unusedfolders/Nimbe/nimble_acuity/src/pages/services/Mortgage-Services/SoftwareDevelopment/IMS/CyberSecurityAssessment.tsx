import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CyberSecurityAssessment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Cyber Security Assessment Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Identify and strategize your cyber security gaps and minimize cyber security threats to protect critical information assets.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Cyber threats are evolving each day, giving more nightmares to large organizations with complicated networks. A cyber threat anywhere can collapse the whole system. It's always a good practice for businesses to maintain cyber hygiene within their ecosystem, including with third and fourth-party vendors. A regular cyber security assessment will always help organizations keep up against these threats.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            A cyber security assessment is a sensitive process that involves risk assessments aligned with organizational goals. It allows an organization to get a high-level analysis of network weaknesses, which can then be mitigated by implementing security controls. Nimble Acuity helps our clients with cyber security assessment services. If you need a reliable, 100% secured, and trustworthy partner, then choose us.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Cyber Security Assessment Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Cyber security assessment will be different for different organizations and networks. The assessment is based on your ecosystem and functional objectives. Our team, with ex-investigative agents, experienced security analysts, and top ethical hackers, can meet any of our client's requirements. We have categorized our services based on varied organizational needs:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network Security Assessment</h4>
                                <p>
                                    Our expert security analysts will review the network security controls to mitigate vulnerabilities. They will list out and analyze your organization’s assets that are exposed to possible threats and provide a list of precautions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Penetration Testing</h4>
                                <p>
                                    Our team of ethical hackers will test your network and systems by hacking to see if they are prone to cyber threats. We will then submit a report to help you implement mitigation controls wherever necessary.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cyber Risk Assessment</h4>
                                <p>
                                    Our experienced experts will use their knowledge and the latest technology to analyze your network to identify potential vulnerabilities and data breaches. They will then implement a strategy and provide precautionary measures.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Ransomware Preparedness Assessment</h4>
                                <p>
                                    With ransomware attacks increasing, our team of experts from the field of hacking will analyze your network and assets and provide an assessment of vulnerability to ransomware, helping you implement security controls to avoid attacks.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Remote Work Security Assessment</h4>
                                <p>
                                    Consultants or employees working remotely may bring cyber threats to your network. Our team does a thorough analysis to assess the security threat before it costs you a huge sum.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Unique Process Flow
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When you outsource cyber security assessment services to us, our team works around the clock to provide you with cyber security risk assessment. Our services are designed to identify vulnerabilities, validate security process effectiveness, and address security risks. Our unique process flow includes:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Requirement Analysis:</strong> Our team analyzes your requirements to establish a detailed scope of work.</li>
                            <li><strong>Pricing and Proposal:</strong> We prepare a proposal with all deliverables and the price quote for your review and negotiation.</li>
                            <li><strong>Finalizing and Agreement:</strong> Once you agree, an NDA will be signed to secure shared information.</li>
                            <li><strong>Team Allotment:</strong> A qualified team is assigned to your project, with experts, managers, and supervisors ensuring a smooth process.</li>
                            <li><strong>Preparing Cyber Security Assessment:</strong> Our experienced cyber security experts, threat analysts, and hackers thoroughly analyze your network and assets and prepare assessments with all precautionary measures.</li>
                            <li><strong>Submitting the Assessment:</strong> The final deliverables are submitted to you via a secured file transfer protocol.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Choosing the right cyber security assessment service provider is crucial. Here's why you should choose Nimble Acuity:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Adherence to Local Laws:</strong> We respect and adhere to the laws of every country we serve, including data regulations and tax models.</li>
                            <li><strong>24/7 Service Support:</strong> Our support is available 24/7 to resolve any queries, as we serve clients across different time zones.</li>
                            <li><strong>World-Class Infrastructure:</strong> We are equipped with the latest tools and software to accurately support our workflow and deliver quality services in a short time.</li>
                            <li><strong>Shorter Turnaround Time:</strong> Our expert team and efficient process ensure we deliver services within the shortest turnaround time compared to our competitors.</li>
                            <li><strong>Solid Data Security:</strong> We are an ISO-certified company that meets all international standards for data protection. All our employees are bound by a non-disclosure agreement.</li>
                            <li><strong>Leverage the Expertise:</strong> Our teams have experience collaborating with well-known agencies, with consultants who have served in investigation agencies guiding us.</li>
                            <li><strong>A Dedicated Team:</strong> To avoid errors, our teams focus on one project at a time.</li>
                            <li><strong>Single Point of Contact:</strong> We implement a single point of contact to avoid miscommunication and ensure a smooth process.</li>
                            <li><strong>Lower Cost:</strong> Our efficient process and expert team allow us to offer high-quality services at a lower cost.</li>
                            <li><strong>Highest Accuracy:</strong> Our QA teams with decades of experience in analyzing cyber risks assure you the highest accuracy.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Secure Your Business?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Are you planning to outsource cyber security assessment services to a trusted partner who can fulfill your requirements? You've come to the right place. With a team that has assessed the networks and assets of over a hundred clients, we assure you of a top-class cyber security risk assessment. We are confident we can meet all your cyber security assessment requirements with the highest accuracy. Contact us now with your requirements, and let's get to work.
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

export default CyberSecurityAssessment;