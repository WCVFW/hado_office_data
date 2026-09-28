import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const IndustrialAutomationServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Industrial Automation Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Simplify system management with our user-friendly solutions, making complex processes easy to monitor, manage, and control.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Industrial automation has revolutionized the way businesses operate, bringing in efficiencies that transform the very fabric of manufacturing and production. As a foremost provider of industrial automation services, Nimble Acuity enables businesses to transition from traditional, labor-intensive processes to smart, automated systems. Our suite of services is powered by the latest technologies that not only speed up production rates but also drastically improve accuracy, quality, and safety.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our team comprises highly skilled professionals who excel in creating customized solutions that fit your unique business needs. We follow a rigorous process that includes detailed system design, careful construction, and precise implementation. Our services ensure the seamless integration of an automated setup into your existing architecture. Leverage our expertise now to reduce capital expenditure and fixed costs while increasing efficiency and operational agility.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Redefine Operational Boundaries with Our Industrial Automation Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our robust industrial automation solutions act as a catalyst for change, driving operational transformation and enabling you to stay ahead of shifting market paradigms.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Machine Building Services</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Precision-focused and custom-built solutions</li>
                                    <li>Utilization of Computer-Aided Design (CAD)</li>
                                    <li>Integration of robotics and vision systems</li>
                                    <li>ISO standards for quality control</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SCADA/HMI</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>System design of Supervisory Control and Data Acquisition (SCADA)</li>
                                    <li>Human-machine interface (HMI) for operator controls</li>
                                    <li>Real-time industrial process control</li>
                                    <li>Historical data logging for performance optimization</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business Process Automation Services</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Use of robotics for manual task elimination</li>
                                    <li>Business process re-engineering</li>
                                    <li>Enterprise Resource Planning (ERP) systems integration</li>
                                    <li>Key Performance Indicators (KPIs) for efficiency tracking</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Infrastructural Safety Services</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Compliance with OSHA standards</li>
                                    <li>Safety interlocks and fail-safe mechanisms</li>
                                    <li>Hazard and Operability Study (HAZOP) for risk mitigation</li>
                                    <li>Emergency response and disaster recovery plans</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Industrial Internet of Things (IIoT)</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Sensor data for real-time decision-making</li>
                                    <li>Predictive maintenance through machine learning algorithms</li>
                                    <li>Industrial Wireless Sensor Networks (IWSN)</li>
                                    <li>Secure cloud-based data storage and analytics</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Control Systems Integration</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Integration of PLC and DCS</li>
                                    <li>Translation of process control strategies into code</li>
                                    <li>OPC standards for interoperability</li>
                                    <li>Cybersecurity in control system networks</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Machine Vision</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Automated optical inspection for quality control</li>
                                    <li>3D vision systems for robot guidance</li>
                                    <li>Deep learning for advanced image processing</li>
                                    <li>Compliance with Machine Vision standards</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Simulation and Testing</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Digital twinning of physical processes</li>
                                    <li>Performance validation through Hardware-In-The-Loop (HIL) testing</li>
                                    <li>Failure Mode Effects Analysis (FMEA) for risk management</li>
                                    <li>Discrete Event Simulation (DES) for process optimization</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Support and Maintenance Services</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Preventive maintenance for minimized downtime</li>
                                    <li>Troubleshooting and repair through remote access tools</li>
                                    <li>Training on system operation and troubleshooting</li>
                                    <li>Upgrades based on technological advancements</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Robot Integration Services</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Selection and programming of industrial robots</li>
                                    <li>Integration with manufacturing systems</li>
                                    <li>Robot safety as per RIA guidelines</li>
                                    <li>Real-time robot monitoring and diagnostics</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Process Flow for Delivering Industrial Automation Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our industrial automation process flow ensures a streamlined approach, from understanding your requirements to the final delivery. Our technical expertise and experience guarantee high-quality solutions tailored to your needs.
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Requirement Analysis:</strong> We dive deep into your systems to clearly define the project scope.</li>
                            <li><strong>Data Collection:</strong> We gather all necessary information to ensure our solutions align perfectly with your needs.</li>
                            <li><strong>Conceptual Design:</strong> Our expert team crafts an initial blueprint, considering efficiency, cost, and scalability.</li>
                            <li><strong>Prototype Development:</strong> We transform designs into a working model, testing it rigorously to meet quality standards.</li>
                            <li><strong>System Implementation:</strong> The solution is seamlessly integrated into your operational environment.</li>
                            <li><strong>Performance Tuning and Maintenance:</strong> We monitor and provide maintenance to ensure optimal operation.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Your Industrial Automation Services?
                        </h3>
                        <p className="text-700 leading-relaxed mb-6">
                            We leverage emerging technologies to transform your industrial operations. Our proficient team, with expertise in advanced robotics, is dedicated to boosting your operational efficiency, reducing downtime, and driving business growth.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Advanced System Integration:</strong> We provide seamless integration of all your systems for streamlined operations.</li>
                            <li><strong>Custom Automation Solutions:</strong> Our team designs solutions tailored to your specific needs.</li>
                            <li><strong>Expertise in Automation Platforms:</strong> We have proven expertise in PLC, SCADA, and DCS, providing you with the most appropriate solution.</li>
                            <li><strong>Data Analysis and Optimization:</strong> We use data to optimize your processes and identify bottlenecks.</li>
                            <li><strong>Real-Time Monitoring and Control:</strong> Gain control over your processes to identify and prevent issues quickly.</li>
                            <li><strong>Robust Security:</strong> We prioritize the security of your systems with advanced security measures.</li>
                            <li><strong>Compliance with Industry Standards:</strong> Our services are compliant with international standards, ensuring safety and reliability.</li>
                            <li><strong>Ongoing Support and Maintenance:</strong> Our team is available 24/7 to resolve any issues and ensure smooth operations.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Industrial Automation Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            As a leading provider, Nimble Acuity uses cyber-physical systems, IIoT, and cloud computing to revolutionize industrial operations. Our services encompass the entire spectrum of automation—from initial concept and design through final implementation and ongoing maintenance. We provide a comprehensive solution that integrates effortlessly with your existing infrastructure, eliminating the need for costly and disruptive overhauls.
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

export default IndustrialAutomationServices;