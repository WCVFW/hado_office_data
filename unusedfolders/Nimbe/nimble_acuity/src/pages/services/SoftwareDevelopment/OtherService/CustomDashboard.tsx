import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CustomDashboard: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Custom Dashboard Creation
                        </h2>
                        <p className="text-lg text-gray-600">
                            Create invaluable custom dashboards that allow chief decision-makers to analyze and quickly comprehend data, enabling informed data-driven decisions on the spot.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Many businesses have vast amounts of raw data, but the major challenge is that the presentation of this data is often cluttered and confusing. This makes it difficult to make quick, informed decisions. At nimble acuity, we understand that effective dashboard creation requires expertise to present at-a-glance information for the metrics you need, while removing excess visual noise.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Whether for social media, marketing, analytics, or support, we can help you stay on top of your business KPIs. We create simple, attractive, and custom dashboards with a quick turnaround time to deliver real business value.
                        </p>
                    </div>

                    {/* Dashboard Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Analytics Dashboard Creation Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            With our easy-to-use and open platforms, preloaded with advanced reporting and analytics features, you can turn your data into real business value. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Klipfolio Analytics</h4>
                                <p className="leading-relaxed">
                                    nimble acuity's Klipfolio dashboard creation services ensure dashboards can pull data from popular sources like Google Analytics, Facebook, Dropbox, and Google Drive. Klipfolio is a self-service BI solution delivered as a cloud service, offering easy access from any device.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Tableau Analytics</h4>
                                <p className="leading-relaxed">
                                    We use Tableau, a powerful visualization tool with simple drag-and-drop methods, to create visually appealing and in-depth dashboards. Our services enable KPI-specific dashboards for power users and leadership, with capabilities in Big Data, social media analytics, and more.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Solutions</h4>
                                <p className="leading-relaxed">
                                    When a single solution won't meet your needs, our custom dashboard creation services provide flexibility and easy mobile accessibility at a fixed time and affordable price. Our dashboards feature ad hoc analysis and interactive visuals to answer pressing questions in real-time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Features of Our Dashboard Creation Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At nimble acuity, we provide a one-stop-solution for the entire data visualization lifecycle. Our specialties include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Data Integration:</strong> Unstructured and structured data capture and integration with various devices and legacy systems.</li>
                            <li><strong>Custom BI:</strong> Business intelligence dashboards designed to support Big Data scalability from the ground up.</li>
                            <li><strong>Advanced Analytics:</strong> Features like OLAP, Predictive analysis, Embedded analytics, and Sentiment analytics.</li>
                            <li><strong>Pre-built Widgets:</strong> Pull data from multiple sources without latency for advanced website dashboard reports.</li>
                            <li><strong>Cloud Solutions:</strong> A robust cloud platform that ensures historical data can be fetched as per your requirements.</li>
                        </ul>
                    </div>

                    {/* Process Section */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Custom Dashboard Creation Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our systematic approach ensures a smooth and efficient project delivery. Here is how we work:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Request Analysis:</strong> We begin with an initial interview to fully understand your KPI and dashboard requirements.</li>
                            <li><strong>Data Identification:</strong> We identify the necessary data channels and ensure your data can be correctly extracted.</li>
                            <li><strong>Dashboard Design:</strong> We create a prototype design with relevant visuals and proceed with development upon your approval.</li>
                            <li><strong>QA Testing:</strong> The dashboard undergoes thorough QA testing to ensure it is bug-free and reliable before delivery.</li>
                            <li><strong>Support & Maintenance:</strong> We provide regular updates and support based on a pre-decided maintenance schedule.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Choose nimble acuity for High-Quality Dashboard Creation
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With a reliable and flexible access to data, making management decisions becomes simpler. Our professional team of custom dashboard experts has extensive multi-project experience and can deploy a cloud or on-premise analytics solution tailored to your needs.
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

export default CustomDashboard;