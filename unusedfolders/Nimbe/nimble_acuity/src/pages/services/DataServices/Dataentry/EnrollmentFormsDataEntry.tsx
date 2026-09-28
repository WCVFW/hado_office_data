import React from "react";
import DSmainmenu from "../DSmainmenu";

const EnrollmentFormsDataEntry: React.FC = () => {
  const benefits = [
    "High accuracy rate: Over 98% accuracy with automated software and skilled team",
    "Savings of up to 40-60% on operational costs",
    "Quick turnaround time with prompt project delivery",
    "Guaranteed data security with strict protocols and NDA agreements",
    "Bespoke services customized to client requirements",
    "24x7 customer support for queries and assistance",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Enrollment Forms Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Nimble Acuity provides high quality, prompt, and cost-effective enrollment forms data entry services for insurance companies, educational institutions, and financial establishments.
        </p>
      </section>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Enrollment Forms Data Entry Services</h2>
        <p className="text-gray-700 mb-4">
          We process enrollment applications for new service offerings, member enrollment, and open enrollment. Our services cover both offline and online data entry, including Retirement and Student enrollment forms.
        </p>
        <p className="text-gray-700 mb-4">
          Output formats include Database, Excel (.xls), Word (.doc), Acrobat (.pdf), Access (.mdb), HTML (.htm), ASCII, and Text (.txt). Deliverables are provided via CD, DVD, e-mail, FTP upload, or direct modem transfer.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-5 gap-6 text-center mb-16">
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">40%</h3>
          <p className="text-gray-600">Cost Reduction</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">8-24 Hrs</h3>
          <p className="text-gray-600">Faster Turnaround</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-gray-600">Satisfied Clients</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">350+</h3>
          <p className="text-gray-600">Skilled Data Experts</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">99%</h3>
          <p className="text-gray-600">Accuracy</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-green-50 p-3 rounded border-l-4 border-green-600 hover:bg-green-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Nimble Acuity for Enrollment Forms Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default EnrollmentFormsDataEntry;
