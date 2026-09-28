import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const HealthRiskAssessmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
               Health Risk Assessment Services
            </h2>
            <p className="text-lg text-gray-600">
              Access, understand, and improve the health of your employees with our health risk assessment services. We can help you keep your workplace healthy, happy, and productive starting at <strong>$1280 per FTE per month</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Long work hours, continuous stress, and unmanaged work-life balance can take a toll on the health of your employees. Conducting regular health risk assessment surveys is imperative to ensure employees are at their productive best.
            </p>
            <p>
              At <strong>Nimble Acuity</strong>, we provide comprehensive health risk assessment services to organizations of all sizes, helping you reduce absenteeism, cut health insurance costs, and enhance employee wellness.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Health Risk Assessment Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Complete Health Risk Assessment Survey:</strong> Evaluate employees for chronic lifestyle diseases like diabetes, blood pressure, cholesterol, stroke, and certain cancers. Provides easy-to-understand reports with peer-to-peer comparisons and lifestyle recommendations.
              </li>
              <li>
                <strong>General Health Risk Assessment Survey:</strong> Assess nutrition, stress, alcohol/tobacco use, physical activity, health habits, and biometrics to improve work performance and efficiency.
              </li>
              <li>
                <strong>Mental Health Risk Assessment:</strong> Evaluate employee stress levels, emotional well-being, and mental state to address care needs and workplace safety.
              </li>
              <li>
                <strong>Occupational Health & Safety Risk Assessment:</strong> Ensure compliance with national/international safety standards, evaluate indoor air quality, sound levels, and other occupational hazards to protect your workforce.
              </li>
            </ul>
          </div>

          {/* Assessment Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Health Risk Assessment Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Need Analysis:</strong> Understanding your organization's health requirements and developing a tailored action plan.</li>
              <li><strong>Survey Development:</strong> Creating holistic surveys covering all health parameters for deep insights.</li>
              <li><strong>Capturing Feedback:</strong> Collecting responses from employees through online and offline mediums.</li>
              <li><strong>Survey Assessment:</strong> Analyzing data using statistical tools to generate expert reports.</li>
              <li><strong>Reporting Results:</strong> Sharing consolidated reports to enhance employee well-being and workplace productivity.</li>
            </ol>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Benefits of Outsourcing Health Risk Assessment Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Quick diagnosis of chronic diseases and lifestyle ailments</li>
              <li>Effective management of lifestyle disorders</li>
              <li>Improved workplace efficacy and productivity</li>
              <li>Better understanding of mental health, dietary habits, and stress levels</li>
              <li>Reduced healthcare costs and absenteeism</li>
              <li>Enhanced ROI on employee wellness programs</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Outsource Health Risk Assessment Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Customized Plans:</strong> Tailored health assessment plans for your organization's unique needs.</li>
              <li><strong>Pocket-friendly Prices:</strong> Competitive pricing to stay within budget.</li>
              <li><strong>Complete Data Security:</strong> Encrypted servers and strict protection of sensitive information.</li>
              <li><strong>Bespoke Solutions & Services:</strong> Advanced tools and technologies for detailed health insights.</li>
              <li><strong>Quick Turnaround Time:</strong> Timely delivery for uninterrupted healthcare services.</li>
              <li><strong>24/7 Support:</strong> Continuous assistance for any queries or concerns.</li>
              <li><strong>Complete Peace of Mind:</strong> Ensure compliance with health regulations and employee safety standards.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Health Risk Assessment Services to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Ensure the health and happiness of your employees to boost workplace productivity and performance. Identify health risks and monitor employee well-being over time.
            </p>
            <p className="text-gray-600 mb-8 font-medium">
              Partner with Nimble Acuity to enhance healthcare quality and improve employee wellness. Let us create a customized plan tailored to your organization's needs.
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

export default HealthRiskAssessmentServices;
