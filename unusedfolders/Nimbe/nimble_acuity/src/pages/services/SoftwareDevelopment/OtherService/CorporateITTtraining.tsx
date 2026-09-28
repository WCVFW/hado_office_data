import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CorporateITTtraining: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Corporate IT Training Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Equip your team with the skills to thrive in today's digital landscape with our world-class, hands-on corporate IT training programs led by expert trainers.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Technology evolves at a rapid pace, and for any business to stay relevant, its employees must keep up. The true value of new tools and technologies depends on how competent your workforce is in using them. While many have a basic knowledge of computers, mastering customized software to its full potential requires specialized skills.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, our corporate IT training programs address this need with dynamic, customized courses designed to enhance your employees' proficiency across a diverse range of software and systems.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Corporate IT Training Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            With over two decades in the corporate training domain, we understand the unique needs of each business. We develop customized programs to suit your specific requirements. Some of our key services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Project Preparatory Programs</h4>
                                <p className="leading-relaxed">
                                    When your next project demands a specific skillset, we provide crash courses to ensure your employees have the relevant proficiency. This allows them to quickly acquire the knowledge needed for new tools and technologies, ensuring project readiness.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Certification Programs</h4>
                                <p className="leading-relaxed">
                                    Our certification programs are designed to hone the skills of your employees and IT professionals, helping them serve your business better. We provide training in growing fields like Artificial Intelligence, Machine Learning, Cloud Computing, and the Internet of Things (IoT).
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Post-Recruitment Orientation</h4>
                                <p className="leading-relaxed">
                                    It's essential to orient new recruits to their new workplace. This program helps them acclimatize and become work-ready. We extend our services to cover this process in detail, transforming new hires into highly productive resources.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Skill Updating Programs</h4>
                                <p className="leading-relaxed">
                                    As technology progresses at an exponential rate, it's crucial for your workforce to keep up. Our skill updating programs bridge the gap between what your team knows and what the market expects, covering new versions of software and market-popular technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leader in providing corporate IT training for SMEs and global corporations. Here are some key reasons to choose us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Flexible Pricing Options:</strong> We offer cost-effective and flexible pricing to suit your business requirements and budget.</li>
                            <li><strong>Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring all your project-related data is kept safe and confidential.</li>
                            <li><strong>Single Point of Contact:</strong> You will be assigned a dedicated project manager who will act as a single point of contact for all your needs.</li>
                            <li><strong>Customized Training Programs:</strong> Our training modules are precise and objective-driven, and we tailor them to your specific needs.</li>
                            <li><strong>Experienced and Certified Trainers:</strong> Our trainers are experienced professionals who hold certifications in their respective fields, providing expert guidance to your employees.</li>
                            <li><strong>Hands-on and Practical Training:</strong> Our courses include interactive sessions, engaging case studies, and practical, result-oriented preparation styles.</li>
                            <li><strong>Post-Training Support:</strong> We offer continuous support and assistance to your employees even after the training program is complete.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Corporate IT Training to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of corporate IT training services. Our goal-oriented, cost-effective, and easy-to-comprehend training programs are the perfect solution for enhancing your team's skills and productivity.
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

export default CorporateITTtraining;