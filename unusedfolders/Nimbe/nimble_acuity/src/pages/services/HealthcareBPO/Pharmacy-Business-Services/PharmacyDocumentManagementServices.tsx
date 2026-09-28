import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PharmacyDocumentManagementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pharmacy Document Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Go digital with your pharmacy documents and streamline your operations with our document management solutions from <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In an increasingly online world, more and more healthcare institutions, including pharmacies, are using automated solutions to file, save, and store their documents. If you are still managing your pharmacy documents manually, our online document management solutions are here to help.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our services are known for data integrity, accuracy, confidentiality, and a quick turnaround time. Contact us to outsource your pharmacy document management and enhance your operational efficiency.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Pharmacy Document Management Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Documentation Support and Administration:</strong> Our expert support staff is highly qualified and possesses rich experience in providing end-to-end pharmacy documentation support.</li>
              <li><strong>Back Office Processing of Transactions:</strong> We transform the process of handling records and billing with extensive knowledge and complete regulatory compliance. We excel in areas such as payment processing, collections, and claim settlements.</li>
              <li><strong>Document Triage and Sorting:</strong> Our online system helps you gather, comprehend, and save useful information for future reference. We implement proven strategies to maintain vital information for timely decision-making.</li>
              <li><strong>Document Association:</strong> We form associations and categorizations among various documents by extracting and sharing metadata across your pharmacy applications. This creates an integrated workflow and minimizes errors.</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Our Pharmacy Document Management Services
            </h3>
            <p className="text-gray-700 mb-4">
              We have vast experience in this field and are an ISO Certified company that follows high standards for data security and confidentiality.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Reduced Operating Costs:</strong> Our streamlined processes lead to a considerable reduction in your operating costs.</li>
              <li><strong>Short Turnaround Time:</strong> We speed up the document processing work to reduce turnaround time significantly.</li>
              <li><strong>Trained Staff:</strong> Our trained staff is equipped to handle your document management workload with ease.</li>
              <li><strong>Industry Adherence:</strong> We have complete knowledge of PIS conversion systems, industry standards, and pharmacy coding norms.</li>
              <li><strong>Round-the-clock Support:</strong> You will never face problems during emergencies with our 24/7 support.</li>
              <li><strong>Seamless Integration:</strong> Our services seamlessly integrate with your current pharmacy systems, ensuring your work is not hampered.</li>
              <li><strong>Flexibility:</strong> We offer the flexibility to meet varying workloads and volumes.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Document Management to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> has extensive knowledge and experience in outsourced document management services. We have received numerous positive testimonials from clients who have benefited immensely from our services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Outsource your pharmacy data management to us to gain peace of mind, accurate documentation, effective processes, and faster solutions. It's time for you to focus on helping patients and let us manage the paperwork.
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

export default PharmacyDocumentManagementServices;