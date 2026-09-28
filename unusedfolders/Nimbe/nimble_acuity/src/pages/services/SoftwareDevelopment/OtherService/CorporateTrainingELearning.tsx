import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CorporateTrainingELearning: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Corporate Training e-Learning Solutions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Equip your workforce with the skills they need to succeed. Our custom e-Learning solutions are designed to bridge performance gaps and drive business performance.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            According to research from the University for Industry, 63% of large organizations use some form of online learning, and this is expected to grow significantly. Corporate training has become a powerful tool for improving business performance, ensuring your workforce is aligned with your organization's goals.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, we use instructional design to increase the effectiveness of corporate training. We customize the design, development, packaging, and delivery of training programs for a specialized target audience, addressing key areas that impact your company's success.
                        </p>
                    </div>

                    {/* What We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            How Nimble Acuity Can Help Your Company
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer custom-made corporate training solutions that bridge performance gaps within your organization by conducting an intensive analysis of your company's goals, processes, and people.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">EPSS (Electronic Performance Support Systems)</h4>
                                <p className="leading-relaxed">
                                    We can develop EPSS systems that create an integrated, electronic environment. These systems provide employees with easily accessible information, advice, assistance, and monitoring, which greatly improves productivity.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Performance Gap Analysis</h4>
                                <p className="leading-relaxed">
                                    We can assist you in performance gap analysis and provide e-Learning solutions that reduce these gaps. Our goal is to bridge the skill gap and eventually increase overall performance levels by building and assessing skills.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Change Management</h4>
                                <p className="leading-relaxed">
                                    Adapting to technological, policy, or job responsibility changes demands a thorough process of monitoring and enhancing skills. We develop e-Learning solutions that clear all bottlenecks and ensure smooth transitions to new systems.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Performance-Based Training</h4>
                                <p className="leading-relaxed">
                                    We develop performance-based training modules that specifically target and teach job performance. Our modules emphasize hands-on training and role-play techniques to ensure employees learn the targeted skills effectively.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Online Training</h4>
                                <p className="leading-relaxed">
                                    We can create customized online learning modules that are tailored to your company's specific needs and objectives, helping to drive overall business performance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your Corporate Training Solutions to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If you're considering outsourcing corporate learning solutions, Nimble Acuity is the ideal partner. We offer custom, effective solutions that improve productivity and bridge skill gaps. If any of our services match your requirements or if you'd like to learn more, please contact us.
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

export default CorporateTrainingELearning;