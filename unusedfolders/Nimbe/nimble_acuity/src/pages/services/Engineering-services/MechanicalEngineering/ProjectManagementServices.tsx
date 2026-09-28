import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const ProjectManagementServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Project Management Tools and Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Access cost-effective and efficient project management tools and services to make your project management a hassle-free process.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Good planning, forecasting, and effective management of work-in-progress are the prerequisites for the successful execution of any project. There are numerous project management tools available, but their costs and complexities often discourage companies from investing in them. Outsourcing comes in as a handy solution in such a scenario. Nimble Acuity provides cost-effective and efficient project management tools and services that make project management a hassle-free process.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We concentrate on supporting the mechanical engineering industry by providing tools and services that enhance the productivity of your projects. One of our key offerings is a Multiple Project Data Management Solution, which can help you manage multiple engineering projects on a single platform. We also offer popular project management tools and customize them based on your unique needs. In case you need an entirely new solution, we can create one for you. Our understanding of the mechanical engineering industry, its needs, and challenges has helped us devise the most appropriate project management services that will be of utmost use for project managers, engineers, architects, and engineering companies.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Project Management Tools and Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our project management tools and services will act like an experienced project manager, creating a well-planned framework that helps you with the following:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Communicate effectively within your team.</li>
                            <li>Streamline your tasks.</li>
                            <li>Schedule projects and implement project collaboration.</li>
                            <li>Have complete control over the progress of your project.</li>
                            <li>Manage timesheets without any delay.</li>
                            <li>Store and retrieve huge amounts of data and information on a web-based platform.</li>
                            <li>Provide access to multiple users across the globe.</li>
                            <li>Generate project management reports on a timely basis.</li>
                            <li>Experience substantial savings in project management time.</li>
                            <li>Analyze project performance and take corrective measures.</li>
                            <li>Make accurate forecasts and estimations about project completion.</li>
                            <li>Take your clients into confidence about your services with streamlined project planning and execution.</li>
                            <li>Integrate client interaction and manage customer feedback into the system.</li>
                            <li>Be assured about the security of data management online.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Choose Our Tools and Services for Smart Project Cycle Management
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We provide specialized engineering services with the backing of an expert team of engineers, architects, software programmers, and business visionaries. With our industry knowledge and experience, we are able to provide top-tier project management tools and services in the field of mechanical engineering. The benefits of using our services are:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Considerable savings in cost and time.</li>
                            <li>Assured security of information.</li>
                            <li>An expert team of mechanical engineers to help you at any stage.</li>
                            <li>24/7 customer support and issue resolution.</li>
                            <li>Quick turnaround time.</li>
                            <li>Effective project management services.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Project Management Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leader in offering project management services. We work with your existing team as your offsite project management services partner to help you get the best out of your investment.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Us Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectManagementServices;