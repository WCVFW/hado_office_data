import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";



const PatientDemographicEntry: React.FC = () => {
    return (
        <>
            {/* Header */}
            <HealthcareHeader />

            <section className="py-16 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Patient Demographic Entry Services: Cut Claim Refusals and Boost Revenue
                        </h2>
                        <p className="text-lg text-gray-600">
                            Did you know that most medical practices lose a substantial amount of revenue due to
                            simple data errors? Accurate patient demographic entry ensures timely reimbursements,
                            smoother accounts receivable, and fewer claim reworks. With
                            <strong> nimble acuity</strong>, you gain 99% error-free processes that reduce denials,
                            boost collections, and free up staff to focus on patient care.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            At <strong>nimble acuity</strong>, we are ISO-certified and ISMS-compliant, ensuring
                            world-class outcomes and absolute data security. With decades of experience, our experts
                            simplify data entry, minimize errors, and enhance data quality.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We also provide features that let your internal team easily import and share patient
                            demographic data across EHRs and EMRs—so your staff can focus on care, not paperwork.
                        </p>
                    </div>

                    {/* Specialty Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Specialty Services
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Registration and Data Entry:</strong> 99% accuracy in patient profiles while adhering to HIPAA.</li>
                            <li><strong>EHR Data Entry:</strong> HL7 and ICD-10 compliant digitization for standardized, interoperable records.</li>
                            <li><strong>Eligibility & Insurance Verification:</strong> Real-time checks to reduce claim denials and ensure proper payments.</li>
                            <li><strong>Billing Software Entry:</strong> Seamless data entry into billing systems to eliminate discrepancies.</li>
                        </ul>
                    </div>

                    {/* Expert Process Flow */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Expert Process Flow
                        </h3>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Patient Information Collection:</strong> Capture all demographic data during registration with advanced tools.</li>
                            <li><strong>Data Validation:</strong> Cross-check details with official documents or patient confirmation for accuracy.</li>
                            <li><strong>Data Entry & Formatting:</strong> Transfer validated data into your HIS with standardized formats.</li>
                            <li><strong>Rigorous Quality Audits:</strong> Regular audits to maintain integrity and fix discrepancies quickly.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with nimble acuity?
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Budget-Friendly:</strong> Reduce overhead and redirect resources to patient care.</li>
                            <li><strong>Data Security:</strong> Robust safeguards plus NDAs for complete confidentiality.</li>
                            <li><strong>Certified Professional Team:</strong> Industry-certified experts deliver accurate, efficient data entry.</li>
                            <li><strong>HIPAA Compliant:</strong> Strict adherence ensures secure handling of all patient data.</li>
                            <li><strong>24/7 Support:</strong> Round-the-clock assistance to minimize operational disruption.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Streamline Your Patient Demographic Entry Process?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Don’t let data errors impact your bottom line. Partner with
                            <strong> nimble acuity</strong> to improve your revenue cycle, reduce claim denials,
                            and enhance patient satisfaction.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            Contact us today for a free consultation and see how a dedicated partner can make a
                            lasting impact.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get in Touch Today
                            </button>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
};

export default PatientDemographicEntry;
