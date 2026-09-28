import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const ChartDocumentationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Chart Documentation Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to error-free documentation and be future-ready by choosing our team's chart documentation services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for assistance with your chart documentation process? Do you need skilled documentation experts? The best step for your organization would be to outsource chart documentation services to an experienced and skilled provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **nimble acuity** is a leading chart documentation service company that can cater to all your needs. We have some of the most talented and skilled chart documentation experts on our team who use the latest tools and technology to deliver the best quality services.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Chart Documentation Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>**Physical Examination Chart Documentation:** We can help you convert patient vital signs, organ tests, and other physical examination results into key pieces of information for future use.</li>
              <li>**Progress Notes Chart Documentation:** We keep track of all patient progress notes, which are a key piece of data for adjusting dosages and treatment plans. This helps in effectively managing the patient's health.</li>
              <li>**Test Results Chart Documentation:** We provide accurate and error-free documentation for all test results, including surgical, social, and obstetric history, to help physicians monitor patient progress and their response to treatment.</li>
              <li>**Prescription & Orders Chart Documentation:** All prescriptions and orders are converted into charts and indexed for future investigations and consultations. Our team delivers superior quality documentation with a quick turnaround time.</li>
              <li>**Illness History Chart Documentation:** We have the expertise to provide accurate and error-free documentation of a patient's illness history, which helps physicians plan further treatment and upcoming consultations.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity for Chart Documentation Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>**Flexible Pricing:** We offer affordable and flexible pricing packages that align perfectly with your budget and business requirements.</li>
              <li>**HIPAA Compliance:** We begin every project by signing a HIPAA agreement, ensuring all patient-related data is safe and secure.</li>
              <li>**Information Security:** As an ISMS-certified organization, we guarantee that all data you share with us is completely secure at all times.</li>
              <li>**Error-free Services:** As an ISO-certified company, we ensure all chart documentation services we deliver are of superior quality.</li>
              <li>**World-class Infrastructure:** We have access to international-standard office spaces and the latest chart documentation tools to deliver exceptional services.</li>
              <li>**Experienced Team:** Our team includes some of the most skilled and talented chart documentation experts in the industry.</li>
              <li>**Single Point of Contact:** We will assign a dedicated project manager to be your single point of contact for all your needs.</li>
              <li>**Quick Turnaround Time:** With multiple delivery locations across the globe, we provide high-quality chart documentation services in a short amount of time.</li>
              <li>**Easily Scalable Services:** Our team has the bandwidth and resources to scale up services and team size as needed.</li>
              <li>**Round-the-Clock Support:** Our teams, including sales, project management, and customer support, are available at all times to address your issues.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "The verifications are going well. Anytime there is an issue or something additional we need, it gets addressed and usually gets corrected quickly. We appreciate you following up. Thank you so much."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Leading Doctor, Kids Dental Clinic, Tampa, FL
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Chart Documentation to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              **nimble acuity** is a leading provider of chart documentation and a range of other healthcare BPO services. Our experts are highly skilled and use the latest tools and technologies to deliver top-notch services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for an efficient and reliable chart documentation service provider? Then, your search ends here. **Get in touch with us today!**
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

export default ChartDocumentationServices;