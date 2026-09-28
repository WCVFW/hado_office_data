import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const PerformanceGapAnalysis: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Solutions for Performance Gap Analysis
                        </h2>
                        <p className="text-lg text-gray-600">
                            We help businesses bridge the gap between actual and ideal performance levels to improve productivity and profitability.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Business organizations are increasingly aware of the need to bridge the gap between current and desired performance levels. Performance gaps affect productivity and can burden a business's profitability. Adapting to technological changes, new policies, altered job responsibilities, and external factors requires a thorough process of monitoring and enhancing skills. **Performance gap analysis** helps you identify the reasons for these gaps and take appropriate steps to reduce them.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            e-Learning solutions make it easier to pinpoint skill gaps and areas for improvement, effectively bridging performance discrepancies. As a flexible, cost-effective, and fast technique, e-Learning is a powerful tool for achieving competitive results in employee performance review, evaluation, improvement, and management.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Performance Improvement Solutions We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Looking for a complete package of performance improvement solutions? We can assist you with performance gap analysis and provide e-Learning solutions to close those gaps. Our goal is to simplify performance management for you through our comprehensive learning solutions. Our services include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Employee Training Services</li>
                            <li>e-Learning Solutions</li>
                            <li>Needs Survey</li>
                            <li>Skill Assessment</li>
                            <li>Skill Gap Analysis</li>
                            <li>Online Courses</li>
                        </ul>
                    </div>
                    
                    {/* Benefits Section */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Our Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            By partnering with us, you can achieve significant improvements across your organization. Our solutions lead to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>High Productivity</li>
                            <li>High Efficiency</li>
                            <li>Higher Adaptability to Change</li>
                            <li>Employee Performance Improvement</li>
                            <li>Team Performance Improvement</li>
                            <li>Corporate Performance Improvement</li>
                            <li>Target Achievement</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your Performance Management to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If you are considering outsourcing performance improvement solutions, consider Nimble Acuity. Through our top-tier e-Learning solutions, we will enhance your workforce's competitiveness to help them meet the growing demands and expectations of your company.
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

export default PerformanceGapAnalysis;