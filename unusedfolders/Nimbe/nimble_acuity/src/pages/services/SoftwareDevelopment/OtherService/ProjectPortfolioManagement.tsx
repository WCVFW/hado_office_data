import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ProjectPortfolioManagement: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Project Portfolio Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Efficiently manage your project portfolio to ensure timely completion, steady ROI, and overall project success.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            For any organization handling multiple projects, the foremost concern is to manage them efficiently. Project success depends on identifying and plugging inefficiencies and backlogs before they lead to costly delays. Lack of planning and cost overruns can lead to substantial financial loss or even project cancellation. Therefore, a careful approach to project portfolio management is crucial for a steady ROI.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, we have over 26 years of experience providing large-scale and small-scale PPM services to our global clients. We understand that a single approach isn't suitable for every company. Our versatile and scalable approach ensures our solutions seamlessly integrate with your existing processes.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Project Portfolio Management Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our PPM specialists leverage their expertise with various project management tools to help your organization. Our services include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Analyze current projects in the portfolio based on benefits and costs.</li>
                            <li>Gather information and create reports about project performance history.</li>
                            <li>Predict the effort and resources a project will require.</li>
                            <li>Implement strategic prioritization of projects in the portfolio.</li>
                            <li>Enable standardization and improvement across all projects.</li>
                            <li>Establish a strong project and portfolio management strategy.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-6">
                            As part of our services, we also offer sophisticated and user-friendly project portfolio management software. This software assists project managers in planning ahead and prioritizing strategic projects. Our solutions help you easily organize different project portfolios, allowing for easy collaboration, tracking, and reporting.
                        </p>
                    </div>

                    {/* Benefits of Our PPM Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Partnering with Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We understand that successful project implementation requires an efficient and centralized approach to portfolio management. Our holistic outlook ensures we align all your projects based on their importance to you and your stakeholders, while remaining flexible to changing objectives. Our professional approach has been proven to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Improve project turnaround times dramatically.</li>
                            <li>Improve project status reporting and reduce management time spent on it.</li>
                            <li>Decrease the time to achieve financial sign-off for new projects.</li>
                            <li>Reduce budget overruns and expenses on non-strategic projects.</li>
                            <li>Reduce labor expense due to better staff utilization.</li>
                            <li>Streamline your PPM by integrating our software into your existing infrastructure and workflow.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-6">
                            We have helped many companies prioritize their IT investments and make the most of their available resources to consistently deliver on their project timelines. With over 26 years of experience, we can not only put an effective PPM system into place but also improve and fine-tune your existing system by identifying inefficiencies.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Choose Nimble Acuity for Project Portfolio Management Services
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If your organization is looking for an outsourcing partner who can implement and manage your project portfolio, choosing Nimble Acuity makes strong business sense. Our innovative PPM solutions can help you overcome common challenges by providing timely and critical project execution strategies across portfolios.
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

export default ProjectPortfolioManagement;