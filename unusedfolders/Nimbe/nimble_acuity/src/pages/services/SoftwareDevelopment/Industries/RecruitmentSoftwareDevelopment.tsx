import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const RecruitmentSoftwareDevelopment: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Recruitment Software Development
                        </h2>
                        <p className="text-lg text-gray-600">
                            An efficient recruitment software can transform the way your organization works. At Nimble Acuity, we have years of experience in developing HR recruitment software.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Our experienced software team has developed recruitment software for job placement agencies, recruitment agencies, staffing providers, HR consultants, job portals, and online career portals, among others.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our HR recruitment software is flexible, highly advanced, and well-designed. By using our recruitment management software, you can manage jobs, organize interviews, track candidates, address offers, and manage requisitions. We build recruitment software with different features for job seekers, recruiters, administrators, and employers.
                        </p>
                    </div>

                    {/* Key Features */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Key Features of Our HR Recruitment Software
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The job recruitment software we create has specialized features for every user group, ensuring a seamless experience for everyone involved in the hiring process.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">For Administrators</h4>
                                <ul className="list-disc list-inside">
                                    <li>Manage the entire system and database</li>
                                    <li>View statistics and create reports</li>
                                    <li>Create logins for employers or recruiters</li>
                                    <li>Apply restrictions and send invoices</li>
                                    <li>Integrate payment gateways</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">For Candidates</h4>
                                <ul className="list-disc list-inside">
                                    <li>Upload and easily update resumes and skill levels</li>
                                    <li>Search for and apply to specific jobs</li>
                                    <li>View company profiles and job application history</li>
                                    <li>See interview schedules</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">For Recruiters</h4>
                                <ul className="list-disc list-inside">
                                    <li>Access the database to find and select candidates</li>
                                    <li>Set qualifiers to eliminate unsuitable candidates</li>
                                    <li>Send common emails to companies or candidates</li>
                                    <li>Schedule and manage interviews</li>
                                    <li>Track employer preferences</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">For Employers</h4>
                                <ul className="list-disc list-inside">
                                    <li>Post, edit, and delete job listings with ease</li>
                                    <li>Search for and track applicants</li>
                                    <li>Create a list of applicants and sort resumes</li>
                                    <li>Schedule and view interview details</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Use Our Software */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Use a Recruitment Management Software?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            If your organization provides HR or recruitment solutions, using an efficient recruitment management software can significantly increase your productivity. Our HR software helps your organization:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Collect and maintain a candidate database</li>
                            <li>Identify prospective candidates efficiently</li>
                            <li>Evaluate candidates and handle various other HR functions</li>
                            <li>Streamline your hiring process from beginning to end</li>
                        </ul>
                    </div>
                    
                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We develop job recruitment software that can handle all your business functions. Our solutions are designed to address your business requirements and make your data collection easier.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Efficient Process:</strong> We can handle your simple or complex back-office demands with intensive experience in building recruitment solutions.</li>
                            <li><strong>Skilled Team:</strong> Our software team is skilled at using different server-side programming, scripting languages, database environments, and databases.</li>
                            <li><strong>Increased Productivity:</strong> Our recruitment management software is built to increase your productivity and efficiently address your operational needs.</li>
                            <li><strong>Competitive Edge:</strong> Partnering with us for your recruitment software gives your organization a significant competitive advantage.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Partner with Nimble Acuity for Your Recruitment Software
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Outsource your job recruitment software to Nimble Acuity to seamlessly handle your back office and business operations. Our solutions will help you efficiently manage the entire hiring process from beginning to end, ensuring your team can focus on finding the best talent.
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

export default RecruitmentSoftwareDevelopment;