import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const NeurologyPETCT: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Neurology PET/CT Reporting Services
            </h2>
            <p className="text-lg text-gray-600">
              Get accurate Neurology PET/CT reports from accredited radiologists, delivered on time for hospitals, neuro physicians, and healthcare organizations worldwide.
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-6xl mb-16 text-gray-700">
            <p className="mb-6">
              Are you lacking resources or time to handle neurology PET/CT reporting? 
              Partner with <strong>Nimble Acuity</strong>, a global leader in Neurology PET/CT reporting services, for fast, accurate, and reliable reports.
            </p>
            <p>
              With over 26 years of experience, our team of certified radiologists uses the latest technology to deliver high-quality reports for complex neurological disorders. 
              We help healthcare providers make informed, safe, and timely clinical decisions.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Neurology PET/CT Reporting Services We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              Outsourcing neurology PET/CT reporting to <strong>Nimble Acuity</strong> allows you to access experienced radiologists for high-volume, complex cases. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Neuro PET/CT Reporting:</strong> Comprehensive reports on Dementia, Alzheimer’s, Brain Tumors, Strokes, and Epilepsy. Quantitative analyses are highly specific and sensitive for early detection of cognitive disorders.
              </li>
              <li>
                Specialized reporting on Amyvid neuro studies and FDG PET/CT interpretations.
              </li>
            </ul>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Neurology PET/CT Reporting Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Collecting PET/CT Scans:</strong> Clients send scans via secure FTP for internal processing.</li>
              <li><strong>Allotting Radiology Team:</strong> Certified radiologists are assigned based on volume and complexity.</li>
              <li><strong>Multi-tier Interpretation:</strong> Junior radiologists create initial reports; senior radiologists validate and finalize them.</li>
              <li><strong>Quality Assurance:</strong> Multiple levels of QA ensure high accuracy and reliability.</li>
              <li><strong>Final Review & Delivery:</strong> Board-certified radiologists provide the final sign-off, delivered securely via FTP.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Radiology Information System</li>
              <li>Medical Imaging Services</li>
              <li>Nighthawk Teleradiology Services</li>
              <li>3D Image Processing Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Neurology PET/CT Reporting Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>High-Quality Services:</strong> Experienced, skilled radiologists with multi-level quality checks.</li>
              <li><strong>Affordable Solutions:</strong> Cost-effective reporting without compromising quality.</li>
              <li><strong>HIPAA-Compliant:</strong> Secure, regulatory-compliant processes for patient data confidentiality.</li>
              <li><strong>Rapid Turnaround:</strong> Efficient workflows ensure timely report delivery.</li>
              <li><strong>Actionable Reports:</strong> Accurate findings allow prompt clinical decisions.</li>
              <li><strong>Certified Radiologists:</strong> ABR-certified radiologists licensed for US and international reporting.</li>
              <li><strong>24/7 Support:</strong> Global customer support across time zones.</li>
              <li><strong>Dedicated Project Manager:</strong> One-to-one contact for seamless communication and updates.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Quick Teleradiology Support:</strong> Resolved a client’s PET/CT reporting backlog in under 24 hours using PACS-trained radiologists.</li>
              <li><strong>Full-Service Billing:</strong> Improved AR performance and collection cycles for a healthcare client via Medisoft software.</li>
            </ul>
          </div>

        

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Neurology PET/CT Reporting Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over 26 years of experience, <strong>Nimble Acuity</strong> delivers fast, reliable, and precise neurology PET/CT reporting services worldwide. Our certified radiologists are available 24/7 to ensure your reporting needs are met efficiently.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default NeurologyPETCT;
