import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const CareCoordinationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Care Coordination Services
            </h2>
            <p className="text-lg text-gray-600">
              Partner with <strong>nimble acuity</strong> to manage patient care plans, improve communication, and ensure high-quality care without the overhead of hiring a full-time position.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Care coordination is an essential strategy for healthcare providers to improve patient outcomes by ensuring all care activities are well-organized and communicated. It involves sharing key information with multiple participants to ensure patients receive high-value and high-quality care. At <strong>nimble acuity</strong>, we have over 26 years of experience providing targeted care coordination services. Our clients rely on us to improve disjointed processes, facilitate clear communication between primary care providers and specialists, and enhance the overall recovery experience for patients.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Complete Care Coordination Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Care Gap Identification and Closure:</strong> We identify and close care gaps by leveraging provider EHRs and external systems, then engaging patients via phone, email, or mail to schedule necessary visits and screenings.</li>
              <li><strong>Annual Wellness Visits (AWV):</strong> We help facilitate a streamlined AWV process, especially for patients with two or more chronic conditions, encouraging preventive care and boosting recruitment in care coordination programs.</li>
              <li><strong>Transitions of Care Support:</strong> We assist in the seamless transition of patients between care settings (e.g., hospital to home), ensuring accurate information is communicated to prevent adverse events and support medical decisions.</li>
              <li><strong>Health Coaching:</strong> We act as health coaches, guiding patients through their healing process by educating them on managing chronic diseases, understanding diagnoses, and adhering to treatment protocols.</li>
              <li><strong>Chronic Care Management:</strong> We provide dedicated support for patients with chronic conditions, ensuring a routine and productive relationship with their care team to keep their condition under control.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Care Coordination Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Understanding Patient Condition:</strong> We review a patient's release documents, vital parameters, and physician recommendations to understand their health status.</li>
              <li><strong>Outreach and Engagement:</strong> We reach out to the patient or their care team to enroll them in the care coordination program and brief them on the process.</li>
              <li><strong>Defining the Care Team:</strong> We document the patient's care team and their relationships, along with consent for treatment and information sharing.</li>
              <li><strong>Monitoring Appropriate Screening:</strong> We develop and monitor a plan for systematic screening and care adjustments based on established guidelines.</li>
              <li><strong>Facilitating Referrals:</strong> We facilitate and track referrals, ensuring all materials are received from other providers and updated in the clinical registry.</li>
              <li><strong>Ensuring and Monitoring Routine Medication:</strong> We identify and monitor the patient's medication list, including dosage and frequency.</li>
              <li><strong>Supporting Patient Self-Management:</strong> We empower the patient and their care team with the skills and abilities needed for self-care.</li>
              <li><strong>Ensuring Emergency Care Access:</strong> We ensure all patients have easy access to appropriate urgent care services when needed.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing Care Coordination to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Greater Cost and Time Savings:</strong> We help providers and patients save money by reducing unnecessary appointments, tests, and procedures.</li>
              <li><strong>Data-driven Insights:</strong> Our services provide physicians with access to data that offers insights into risks, recovery levels, and the overall value of their health benefit plans.</li>
              <li><strong>Overall Quality Improvement:</strong> We assist physicians in closing care gaps and satisfying quality measures, saving them valuable time.</li>
              <li><strong>Platform for Collaborative Learning:</strong> We establish a platform for continuous discussion and knowledge-sharing among team members to fine-tune the care program.</li>
              <li><strong>Amplify Connections:</strong> We use every patient interaction as an opportunity to address multiple quality measures and build a collaborative environment.</li>
              <li><strong>Education at Every Touchpoint:</strong> We simplify medical jargon and procedures, addressing patients' fears and concerns to support both physical and mental recovery.</li>
              <li><strong>Extended Care Teams:</strong> We serve as an extension of your practice, monitoring patients and keeping your PCP updated on their progress.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>ICD-10 Implementation:</strong> We helped a medical billing firm optimize its performance and successfully migrate from ICD-9 to the ICD-10 system.</li>
              <li><strong>Accounts Receivable Services:</strong> We assisted a healthcare company by getting all denied claims cleared, significantly improving its accounts receivable.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I wanted to express my gratitude for the hard work the Data and AR teams have done. I've pushed them extremely hard over the past month, and their efforts have paid off."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — RCM Account Manager, EMR System Provider, FL, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Care Coordination to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over 26 years of experience, <strong>nimble acuity</strong> leverages a fully integrated chronic care management solution to help you reach patients efficiently without interfering with your workflows. We serve as an extension of your practice, providing health coaching and ensuring proactive disease management.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Talk to us now</strong> to learn how we can help you reduce hospitalizations and lower care costs.
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

export default CareCoordinationServices;