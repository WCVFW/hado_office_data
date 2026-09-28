import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SchoolManagementSoftware: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            School Management Software Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Save overhead costs and streamline administrative tasks with custom school management software from Nimble Acuity.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you finding it difficult to keep up with government regulations, board guidelines, and planned activities? Today's parents are more involved and seek information on major school events. If your school lacks the IT infrastructure to build this software, consider outsourcing to Nimble Acuity.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity has a team of highly skilled developers and engineers with the expertise to build software that will help you manage all administrative tasks. Whether you need curriculum modules for students and employees or assistance with tasks like payroll, front office, and more, we have you covered.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our School Management Software Features
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We develop school management software as a single integrated system that provides various stakeholders with access to important information. The software we develop includes the following features:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Admission Management</h4>
                                <p className="leading-relaxed">
                                    Our software helps schools record and compare student information, allowing the admissions department to perform tasks easily and quickly.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Fee Management</h4>
                                <p className="leading-relaxed">
                                    This module handles collecting fees, tracking defaulters, managing refunds, and handling transportation and cafeteria payments. We can configure the system to send reminders to parents regarding fees that are due.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Student Information</h4>
                                <p className="leading-relaxed">
                                    The school can store complete details about students—academic, co-curricular, and extra-curricular activities, exam results, grades, and more.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Payroll Management</h4>
                                <p className="leading-relaxed">
                                    Similar to a business payroll system, this helps the school keep track of salaries to be paid to teachers and staff. We can customize it to include advance salary payments, loans, and other deductions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Examination Management</h4>
                                <p className="leading-relaxed">
                                    This module helps teachers create question banks, schedules, and reports, and perform score and grade analysis.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Staff Information</h4>
                                <p className="leading-relaxed">
                                    Our programmers ensure you can smoothly track both academic and non-academic staff, issue ID cards, and keep a record of vacancies, retirements, and performance for promotions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Timetable Management</h4>
                                <p className="leading-relaxed">
                                    Our software enables you to easily design timetables for every class, considering the syllabus, optional subjects, and faculty availability.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Attendance Management</h4>
                                <p className="leading-relaxed">
                                    Tracking daily, quarterly, and annual attendance is simple with our software. We can configure the system to send alerts to parents of students who are absent.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our School Management Software Development Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We leverage the latest technologies and best industry practices, following an agile method to deliver superior quality products. Our process is as follows:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Meetings and Interviews:</strong> We hold detailed meetings to understand your school's approach to education, student population, and values.</li>
                            <li><strong>Create a Roadmap:</strong> We create a roadmap outlining the software's tasks, design, and the specific tools and technology that will be used.</li>
                            <li><strong>Third-Party Integration:</strong> The next stage is deciding on integration with third-party vendors for the cafeteria, office supplies, and payment gateways.</li>
                            <li><strong>Testing:</strong> Once we build the software, we test it thoroughly to ensure everything functions smoothly.</li>
                            <li><strong>Deployment:</strong> The final stage is deploying the software in your school. We also offer support and maintenance services to ensure continuous performance.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource School Management Software to Nimble Acuity?
                        </h3>
                        <p className="text-700 leading-relaxed mb-6">
                            Using Nimble Acuity's expertise in school management software development will add value because we focus on quality and client satisfaction. Here are more reasons to choose us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>ISO Certified:</strong> We have ISO 9001:2015 certification, bearing testimony to the fact that we provide superior quality services.</li>
                            <li><strong>Secure Data Management:</strong> We are ISO/IEC 27001:2022 certified and manage your data with extreme caution to prevent misuse. All our professionals also sign non-disclosure agreements.</li>
                            <li><strong>Superior Product:</strong> The software we build is user-friendly, fully customizable, efficient, and responsive for a seamless experience on any device.</li>
                            <li><strong>Scalable:</strong> Our software products are designed to scale, so they will handle growth as you expand to include more classes, students, and teachers.</li>
                            <li><strong>Quick Turnaround Time:</strong> We guarantee delivery of the software within the mutually agreed-upon deadlines.</li>
                            <li><strong>Cost-effective:</strong> Our pricing is tremendously competitive—you don't have to spend a fortune for a superior-quality product.</li>
                            <li><strong>Single Point of Contact:</strong> We will assign a project manager who will serve as a single point of contact, available 24/7.</li>
                            <li><strong>Skilled Developers:</strong> Our team of over 100 expert programmers, designers, and engineers is proficient in the latest technologies.</li>
                            <li><strong>Powerful Infrastructure:</strong> We have best-in-class infrastructure that takes care of all technology requirements, allowing our team to deliver high-quality software on time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Contact Nimble Acuity for School Management Software
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Our tech wizards have the necessary tools to build you school management software that accommodates all your requirements without denting your wallet. We are an ISO-certified software development company, delivering innovative and bespoke digital solutions for more than 26 years. Get in touch with us today for all your school management software needs.
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

export default SchoolManagementSoftware;