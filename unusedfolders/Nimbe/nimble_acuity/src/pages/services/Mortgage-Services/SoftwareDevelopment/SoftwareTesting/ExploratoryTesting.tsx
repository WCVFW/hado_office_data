import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ExploratoryTesting: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Exploratory Testing Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Save time, costs, and reduce the time to develop your software by outsourcing exploratory testing to experts at prices starting at just $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Exploratory testing has become one of the most important methods of software testing lately. This method consists of an approach in which software testers are involved in minimum planning and maximum test execution. Exploratory testing in agile is a key activity as it helps the testers to keep up and stay updated with the rapid pace of the agile software development process. It is important that software developers conduct ET to improve the quality of their software.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            **Nimble Acuity** has been providing quality exploratory software testing services to global software companies for almost two decades. Outsourcing exploratory testing services to us can help companies develop their software at a faster rate and at cost-effective prices. We make use of some of the latest software testing tools and our skilled team can help you develop efficient software within a short time.
                        </p>
                    </div>

                    {/* Exploratory Testing Services We Provide */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Exploratory Testing Services We Provide
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            **Nimble Acuity** has been providing quality software testing services to numerous global software clients for almost two decades now. Our expertise in this field is unmatched and we provide the best-in-industry services to all our clients. We understand the importance of ET and hence provide our services accordingly. Some of the key services we offer include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Defect Categorization</h4>
                                <p>
                                    This service involves the categorization of different types of bugs found in previous versions of software, followed by finding the apt way to test the application for these defects, and finally analyzing the main reason behind these defects in the application.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Charter Development</h4>
                                <p>
                                    This is one of the key steps in the exploratory software testing method and involves preparing a systematic schedule of what needs to be tested, which are the different aspects to be tested, how these steps will be carried out, etc. Here, our software testers will begin by analyzing all the different test ideas.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Fixed Time Testing</h4>
                                <p>
                                    In this step, our software testers test the software application for a fixed amount of time without any kind of interruptions. This is usually done in groups and enables them to analyze different aspects of an application from multiple angles.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Analyzing Test Results</h4>
                                <p>
                                    Our software testing analysis team at **Nimble Acuity** is trained to analyze the test results after all the tests are carried out. This helps to learn more about the software application and review different coverage areas.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Test Result Compilation</h4>
                                <p>
                                    This is done by our expert team after all the major tests are completed. The results are compiled and sorted in a systematic manner and, after compilation, the results are compared with the original charter to check whether any further testing is needed or not.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Key Benefits of Exploratory Testing
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            There are many benefits of exploratory testing, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Effectiveness in finding critical bugs:</strong> This methodology is designed to uncover bugs that scripted tests might miss.</li>
                            <li><strong>Testing dynamic products:</strong> It is highly effective for applications with constantly changing features or requirements.</li>
                            <li><strong>Involves investigation:</strong> Testers can use their expertise to investigate and detect additional bugs.</li>
                            <li><strong>Accelerate bug detection:</strong> The simultaneous design and execution of tests speeds up the discovery of issues.</li>
                            <li><strong>Complements automation:</strong> While automated checks handle regression, exploratory testing focuses on new features.</li>
                            <li><strong>Adaptable:</strong> It is a valuable approach even when formal requirement documents are not available.</li>
                        </ul>
                    </div>

                    {/* Our Exploratory Testing Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Exploratory Testing Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Exploratory test preparation, also called session-based test management (SBTM Cycle), goes through the following 5 stages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Create a Bug Taxonomy:</strong> Categorize common types of faults and analyze their root cause to find risks.</li>
                            <li><strong>Test Charter:</strong> Prepare a systematic schedule of what to test, how to test it, and what to look for.</li>
                            <li><strong>Time Box:</strong> A fixed testing period (usually 90 minutes) without interruptions, encouraging focused and reactive testing.</li>
                            <li><strong>Review Results:</strong> A thorough evaluation of defects, analysis of coverage areas, and learning from the tests.</li>
                            <li><strong>Debriefing:</strong> Compilation of output results and comparison with the original charter to determine if further testing is needed.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We, at **Nimble Acuity**, have the required tools, skills, and resources to provide our clients with top-quality services. Some of the reasons to choose us include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Experienced Team:</strong> Our highly skilled team is trained to work with the latest exploratory testing tools and technologies.</li>
                            <li><strong>Affordable Prices:</strong> We provide best-in-industry exploratory testing services at competitive prices, helping companies save valuable time and money.</li>
                            <li><strong>Quick Services:</strong> We provide our services within a quick turnaround time, ensuring that our clients' schedules are not affected.</li>
                            <li><strong>Data Security:</strong> We ensure that all data you share with us is completely safe and not leaked to any third party.</li>
                            <li><strong>Latest Techniques:</strong> Our team is skilled in and keeps abreast of the latest exploratory testing tools and methodologies.</li>
                            <li><strong>Best Infrastructure:</strong> As a top testing services company, we have access to state-of-the-art infrastructure.</li>
                            <li><strong>Domain Expertise:</strong> Our team is knowledgeable about different domains and is capable of testing applications from a wide range of verticals.</li>
                        </ul>
                    </div>


                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Looking for a Reliable Exploratory Testing Partner?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            **Nimble Acuity** is a leading provider of exploratory testing services. Our vast experience of having worked with clients from different verticals has made us capable of handling software from different domains. We understand the benefits of exploratory testing very well and provide quick and cost-effective services that help clients save on costs and reduce software development time considerably.
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

export default ExploratoryTesting;