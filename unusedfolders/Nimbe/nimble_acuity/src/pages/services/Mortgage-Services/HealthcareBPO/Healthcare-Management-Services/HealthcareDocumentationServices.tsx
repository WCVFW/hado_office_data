import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const HealthcareDocumentationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Documentation Services
            </h2>
            <p className="text-lg text-gray-600">
              Initiate a productive revenue cycle with **nimble acuity's** healthcare documentation services, leveraging innovative features, speed, and accuracy.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to streamline your documentation with precision and efficiency? Do you need skilled resources to handle all your healthcare documentation needs? The best option is to partner with an experienced and skilled provider like **nimble acuity**.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **nimble acuity** is a leading healthcare documentation service provider with some of the most experienced and skilled professionals in the industry. We use the latest tools and technologies to deliver top-notch services tailored to your specific requirements.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Healthcare Documentation Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>**Medical History Documentation:** We provide accurate and error-free medical history documentation, capturing critical data such as symptoms, severity, and duration for future treatments.</li>
              <li>**Physical Examination Documentation:** Our specialists create and maintain easily retrievable medical records and can train your staff to operate indexed data, accelerating document creation, modification, and deletion.</li>
              <li>**Discharge Summary Documentation:** We create thorough discharge summaries that convey all necessary information to a post-hospitalization care team, ensuring continuity and a safe transition for the patient.</li>
              <li>**Operating Room Report Documentation:** Our experts provide accurate documentation of all your operating room reports within a quick turnaround time.</li>
              <li>**Diagnostic Imaging Documentation:** We have the skills and expertise to document various radiology methods, including CT scans, MRIs, and X-Rays, for a collaborative approach to diagnosis.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity for Healthcare Documentation Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>**Affordable Pricing:** We offer flexible and affordable pricing packages that align with your budget and business requirements.</li>
              <li>**HIPAA Compliance:** We sign a HIPAA agreement with every client, ensuring that all patient-related data is secure and protected at all times.</li>
              <li>**Information Security:** As an ISMS-certified firm, we guarantee that all data you share with us remains completely safe and secure.</li>
              <li>**Superior Quality:** As an ISO-certified firm, we ensure all our healthcare documentation services are error-free and of the highest quality.</li>
              <li>**World-class Infrastructure:** We have access to world-class office spaces and the latest healthcare documentation tools and software.</li>
              <li>**Short Turnaround Time:** Our global delivery centers allow us to provide high-quality services within a short timeframe.</li>
              <li>**24/7 Customer Support:** Our teams are available around the clock to resolve any issues you may have.</li>
              <li>**Dedicated Manager:** You will be assigned a single point of contact who will manage all your needs and provide updates.</li>
              <li>**Highly Scalable Services:** Our team has the skills and bandwidth to quickly scale services and team size based on your demands.</li>
              <li>**Skilled Team:** Our team comprises talented and skilled healthcare documentation specialists ready to meet your requirements.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "A thousand thanks for your prompt and speedy reply - really appreciate getting these letters back so very quickly. Many thanks again."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Physiotherapy Admin, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare Documentation Services to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              **nimble acuity** is a leading pioneer in providing top-quality healthcare documentation and other healthcare BPO services. Our specialists are highly skilled and use the latest software and technologies to deliver exceptional services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and cost-effective healthcare documentation service provider? Then, you've come to the right place. **Get in touch with us today!**
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

export default HealthcareDocumentationServices;