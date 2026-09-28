import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CustomWebAnalytics: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Custom Web Analytics Software Development
                        </h2>
                        <p className="text-lg text-gray-600">
                            Build a unique web analytics solution tailored to your business, allowing you to collect, analyze, and optimize web data for actionable insights.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Web analytics software helps companies measure and analyze their web data to better understand and optimize their online presence. Businesses with an online presence can leverage this technology to measure the behavior of their website visitors and derive useful insights like market trends and customer segmentation. While many off-the-shelf tools exist, to achieve truly desired results, it's necessary to opt for a solution that caters to your unique business requirements.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, we specialize in building **custom web analytics software** that addresses even the most complex web analytics needs, providing solutions where existing tools fall short.
                        </p>
                    </div>

                    {/* Case Studies */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Custom Web Analytics Software Solutions Built by Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our web analytics and software development teams have helped numerous clients meet their specific requirements by building custom solutions. Here are a few examples:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Dataset from Google Analytics Data</h4>
                                <p className="leading-relaxed">
                                    **The Challenge:** A customer needed an inclusive navigation report for all website pages, a task that would take a significant amount of time to do manually.
                                </p>
                                <p className="leading-relaxed">
                                    **Our Solution:** We built an application that parses XML reports from Google Analytics and automatically creates a comprehensive Excel sheet from the data, saving the customer valuable time.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Log Analyzer</h4>
                                <p className="leading-relaxed">
                                    **The Challenge:** A customer required a tool for specific and complex data segmentation.
                                </p>
                                <p className="leading-relaxed">
                                    **Our Solution:** We built a custom **Log Analyzer** that imports, organizes, and segments log files before sending them to the customer's application, providing them with the granular data they needed.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automated Data Processing</h4>
                                <p className="leading-relaxed">
                                    **The Challenge:** Many clients running various campaigns were wasting precious time manually manipulating data across multiple Excel sheets.
                                </p>
                                <p className="leading-relaxed">
                                    **Our Solution:** We developed a desktop application that aggregates data, applies business rules, and builds a simple yet comprehensive report that can be easily exported to Excel, streamlining their workflow.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Online Dashboards</h4>
                                <p className="leading-relaxed">
                                    **The Challenge:** A digital agency needed an easy way to share data with clients without manually sending reports.
                                </p>
                                <p className="leading-relaxed">
                                    **Our Solution:** Our team built an interactive **online dashboard**. This allowed the agency to quickly publish data and gave their clients a secure portal to check real-time data whenever they wanted.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Get a Custom Web Analytics Solution from Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If you're wasting time on manual data manipulation, it's time to invest in a custom web analytics solution. We can help you solve the challenges your existing tools can't. Our web analytics team will thoroughly understand your requirements and build a tool that perfectly addresses your unique needs.
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

export default CustomWebAnalytics;