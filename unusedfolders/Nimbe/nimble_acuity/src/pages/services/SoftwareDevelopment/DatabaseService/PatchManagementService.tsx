import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const PatchManagementService: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Patch Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Ensure your business software stays safe, secure, and efficient at all times with our patch management services at prices starting at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            With constant software updates and new threats emerging, patch management is a necessity, not an option. For any organization that relies heavily on its data, systematic patch management is crucial for security and peace of mind. Partnering with a professional service provider ensures the task is carried out systematically, leaving no loopholes. This is where Nimble Acuity comes to your rescue.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As a leading patch management service provider with extensive experience, Nimble Acuity has the expertise and manpower to keep your software safe from security threats. With our managed patching services, we update every aspect of your network and its underlying software and hardware to ensure they work smoothly and seamlessly.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Patch Management Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity offers complete patch management solutions, whether for third-party or open-source software. Our services ensure your systems communicate seamlessly with new hardware, applications, and operating systems, giving you a competitive edge. Our core services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Patch Knowledge</h4>
                                <p>Our professionals stay abreast of the latest security issues, vulnerabilities, and patch releases. We have the expertise to safeguard your systems by knowing exactly when and how to deploy the relevant patches.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Patch Scheduling</h4>
                                <p>We conduct a thorough assessment of your software to create an optimal schedule for patch deployment. We promptly deploy patches based on release cycles to minimize business disruptions.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Patch Testing</h4>
                                <p>We test patches in a controlled manner before deployment to nullify risks to critical systems. Our specialists ensure the testing phase is carried out correctly to prevent any disruption to your operations.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Deployment</h4>
                                <p>Once tested, we deploy the patch in a time-critical, organized, and consistent manner. This process ensures minimal to no disruption to your daily operations and system availability.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Analysis</h4>
                                <p>Our team conducts a complete audit after installation to confirm that the patch has been successfully deployed, ensuring your software is updated and secure until the next scheduled cycle.</p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Patch Management Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity stands out for its extensive experience in delivering top-notch, accurate patch management services. In addition to quality and perfection, our key advantages include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Budget-friendly Pricing:</strong> We offer affordable pricing solutions, assessing your requirements to charge you only for the services you need.</li>
                            <li><strong>Data Security:</strong> We comply with stringent data security policies, ensuring your confidential data is safe from breaches and unauthorized access.</li>
                            <li><strong>Single Point of Contact:</strong> A dedicated project manager will serve as your single point of contact for all queries and project updates.</li>
                            <li><strong>Complete Transparency:</strong> We are completely transparent about our processes, communicating everything with you before implementation and seriously considering your feedback.</li>
                            <li><strong>Round-the-clock Support:</strong> Our customer care executives are available 24/7 to resolve your concerns.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Patch Management Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            As an organization that works with a variety of software, you must ensure your systems are completely secure at all times. The best way to do this is by outsourcing to an expert company with rich experience and dedication. Nimble Acuity has been offering patch management services globally for over 26 years, leveraging our knowledge to help your organization achieve peak productivity.
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

export default PatchManagementService;