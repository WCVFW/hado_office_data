import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const SigningSupportServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Signing Support Services for Loss Mitigation
            </h2>
            <p className="text-lg text-gray-600">
              We accelerate the loss mitigation process by offering experts who gather essential signatures for faster closure of mortgages at highly affordable rates.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity has years of experience assisting mortgage lenders and other institutions with their extensive mortgage notary signing needs. We offer a range of services—from mobile to in-home—ensuring our clients can meet all their signing needs in one single stop. Our services are designed to expedite the overall mortgage loss mitigation process. As a premier signing support service provider, we understand the signing requirements of all mortgage documents and provide nationwide services within guaranteed timelines.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you partner with us, you get access to a team of signing professionals with extensive knowledge of the necessary signatures needed to stave off foreclosures. We leverage their expertise to provide accurate and secure real estate closings, reducing impending losses.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Signing Support Services for Loss Mitigation
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We have designed our signing services to provide all the support needed to avoid loss mitigation. We use well-developed workflows and advanced technology to streamline all notarizing and loan document signing tasks. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Faster Collection of Signatures:</strong> We are in touch with authorized notaries and can get things done fast. We schedule appointments and follow up with notaries to complete the signing of loan documents on your behalf.
              </li>
              <li>
                <strong>Error-Free Delivery of Loan Estimates:</strong> We meticulously review documents to ensure there is no scope for legal escalations in the future. We go out of our way to protect you from losses that may arise from missing or fraudulent signatures.
              </li>
              <li>
                <strong>End-to-End Support:</strong> We handle the complete signing process, from tracking notaries and ordering documents to following up with them to return documents to lenders.
              </li>
            </ul>
          </div>

          {/* The Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Signing Support Assistance Process
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Once you approach us for a signing service, we enter into an agreement. The mortgage professional will then hand over or email the documents to us. Based on the type of signatures needed, we provide a timeline. Our process includes these steps:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                We access our database of signing officers and notaries.
              </li>
              <li>
                Our agents reach out to the loan signing officer or notary to coordinate and take up the work or agree on an appointment with the lender.
              </li>
              <li>
                We approach the first available and ready-to-work signing agent, get into an agreement with them on the timeframe, and then transfer the documents or set up an appointment.
              </li>
            </ol>
          </div>

          {/* Benefits of Outsourcing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource to Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Outsourcing your signing support requirements to us can deliver a host of benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Time-Bound Services:</strong> We allow you to focus on your core tasks while we handle the signing process, ensuring your work is done on time.
              </li>
              <li>
                <strong>Volume Handling:</strong> We help you manage high-volume workloads efficiently, regardless of location or urgency.
              </li>
              <li>
                <strong>Technology Updates:</strong> We use advanced technology to provide you with real-time updates and empower you to follow the status of your requirements.
              </li>
              <li>
                <strong>Expert Mortgage Team:</strong> Our signing professionals have extensive experience and are continuously trained on industry standards.
              </li>
              <li>
                <strong>Advanced Infrastructure:</strong> We rely on advanced document management systems to facilitate e-signatures and provide real-time updates.
              </li>
              <li>
                <strong>High-Quality Services:</strong> All our services are rendered in complete compliance with regulatory requirements.
              </li>
              <li>
                <strong>Quick Turnaround Time:</strong> We strictly adhere to turnaround times to ensure loss mitigation services happen as per schedule.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Loss Mitigation Signing Support Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has vast experience handling all the requirements of the mortgage industry. We have an extensive network of authorized notary experts and officers with signing powers to ensure you get all the necessary signatures for a fault-free foreclosure. Our services help you check and validate promissory notes, title information, and other mortgage deeds.
            </p>
            <p className="text-gray-700 mb-6">
              If your mortgage business is looking for a reputable and process-driven signing service provider, look no further. Contact us now.
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

export default SigningSupportServices;