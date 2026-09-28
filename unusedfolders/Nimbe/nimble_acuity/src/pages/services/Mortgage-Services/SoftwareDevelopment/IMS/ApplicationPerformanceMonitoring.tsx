import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ApplicationPerformanceMonitoring: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Application Performance Monitoring Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Ensure that your applications function flawlessly and optimally by choosing our world-class performance monitoring services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Software manufacturers and providers today operate in an extremely crowded and competitive field. Making sure their customer-facing applications are delivering sufficient business value while enhancing new features through software updates is extremely important for sustained, long-term success.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As a result, software manufacturers need to keep an eye on their application performance and customer reception. Monitoring application performance requires more bandwidth and a separate skill set from your application developers. Therefore, it makes a lot of business sense to outsource the monitoring process to a trusted application performance monitoring company like Nimble Acuity.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Application Performance Monitoring (APM) Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are a leading application performance monitoring service provider, and our APM services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">App Metrics-Based APM</h4>
                                <p>
                                    We leverage a set of proprietary tools that track various levels of server and app metrics, allowing us to glean important information such as the number of requests the software receives and which URLs work fine and which do not. This method does not go into code-level profiling and is therefore ideal for a bird's-eye view of application performance without systematic details.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Code-level APM</h4>
                                <p>
                                    We bring in automatic and intelligent observability for your apps and build them at a scale that is ideal for cloud-native applications, high-workload applications, and enterprise apps. This service is ideal if you want end-to-end distributed tracing for hybrid cloud applications, want to optimize service performance, and develop faster apps.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network-based APM</h4>
                                <p>
                                    We can track and measure application performance based on overall network traffic. This allows us to manage, monitor, and ensure your network's optimal performance levels, including covering error rates, packet losses, network delays, packet transmissions, and total throughput. Our proactive application performance management tools help you reduce bottlenecks and other problems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            By partnering with us, a leading application performance monitoring service provider, you can gain from the following:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>All-in-one Full Stack Solution:</strong> We bundle in application monitoring, software infrastructure monitoring, and AIOps within a single integrated offering, which can be further scaled to include digital experience monitoring and business metrics.</li>
                            <li><strong>Automatic Cloud-native Monitoring:</strong> We leverage automated processes and AI-based monitoring solutions to automatically discover multiple dynamic microservice workloads. Plus, you gain the ability to see how your applications are performing in real-time.</li>
                            <li><strong>Enhanced Software Production Quality:</strong> By automatically capturing transactions across every user tier and tying it to the code level, we can optimize and regularly improve the overall user experience.</li>
                            <li><strong>Better Observability:</strong> We are proud to offer one of the widest application monitoring solutions, including support for multiple languages, application architectures, and more for cloud-based as well as native apps, enterprise apps, and SaaS apps.</li>
                            <li><strong>Faster Code to Production Times:</strong> We allow you to gain a deeper level of understanding of your development environment through the judicious use of DevOps, allowing you to glean essential information during every stage of build and deployment.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Optimize Your Application Performance?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With Nimble Acuity, you can now harness the true power of automation and AI to unify the most dynamic multi-cloud application deployments, while providing regular support for a better user experience. Get in touch with us to know more.
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

export default ApplicationPerformanceMonitoring;