import React from "react";
import DSmainmenu from "../DSmainmenu";

const QuickBooksDataEntry: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble QuickBooks Data Entry Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Our skilled QuickBooks Data Entry professionals perform data entry,
          segmentation, and organization of data into QuickBooks CRM. Starting
          at just <span className="font-semibold">$6 per hour</span>.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Is your organization using the best accounting CRM to store and share
          data with stakeholders? If you've been depending on your internal
          resources for QuickBooks data entry, it's time to Nimble and free
          up their time for priority backend tasks. Outsourcing QuickBooks Data
          Entry services to Nimble Acuity (Nimble Acuity) helps manage your QuickBooks
          data for sales, inventory, and customer relations with efficiency.
        </p>
        <p>
          With <span className="font-semibold">26+ years of expertise</span>,
          Nimble Acuity supports businesses in formulating financial
          strategies by managing QuickBooks CRM with{" "}
          <span className="font-semibold">incredible accuracy</span>.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          QuickBooks Data Entry Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "QuickBooks CRM Data Entry",
              desc: "We capture invoices, receipts, PO, and billing statements from sales and accounts departments, mapping each transaction with relevant codes for easy retrieval.",
            },
            {
              title: "Conversion of QuickBooks Data",
              desc: "No matter the format, we edit and standardize your business data into a common digital format for efficient tracking and sharing.",
            },
            {
              title: "Data Processing in QuickBooks",
              desc: "We organize and segment your QuickBooks data to prevent scattering and improve database efficiency.",
            },
            {
              title: "Maintenance of QuickBooks Account",
              desc: "From cost accounting and bookkeeping to reporting, we handle general maintenance of your QuickBooks account.",
            },
            {
              title: "QuickBooks Data Refreshing",
              desc: "We periodically assess your QuickBooks CRM to detect and cleanse data errors, ensuring accuracy.",
            },
          ].map((service, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-blue-100">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center max-w-6xl mx-auto">
          {[
            { stat: "40%", label: "Cost Reduction" },
            { stat: "8-24 Hrs", label: "Faster Turnaround" },
            { stat: "500+", label: "Satisfied Clients" },
            { stat: "350+", label: "Skilled Experts" },
            { stat: "99%", label: "Accuracy" },
            { stat: "21", label: "Years Experience" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white shadow rounded-xl">
              <p className="text-2xl font-bold text-blue-900">{item.stat}</p>
              <p className="text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          QuickBooks Data Entry Process We Follow
        </h2>
        <ol className="space-y-6">
          {[
            "Scan and Upload – Client dispatches documents via secure channels.",
            "Download/Access Files – Our team evaluates the scope of work.",
            "Key-in Document – Data entered into QuickBooks using OCR and manual checks.",
            "Index, Sort & Move – Data categorized for quick search and retrieval.",
            "Quality Check – QA team ensures duplicates and errors are removed.",
          ].map((step, i) => (
            <li key={i} className="flex items-start">
              <span className="text-blue-900 font-bold mr-3">{`0${i + 1}.`}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Nimble QuickBooks Data Entry to Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Friendly rates with customized services.",
            "100% Data Security with ISO/IEC 27001:2022 compliance.",
            "Multiple Data Formats handled and standardized.",
            "High-quality services with rigorous QA.",
            "Quick Turnaround with global delivery centers.",
            "ISO 9001:2015 Certified provider.",
            "Scalable services to meet growing needs.",
            "Experienced QuickBooks professionals.",
            "24/7 Global Support.",
          ].map((point, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-2xl">
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="italic text-lg bg-gray-50 p-6 rounded-2xl shadow">
          “We were very satisfied with the quality of service Nimble Acuity
          provided. They were able to meet our requests with great professionalism
          and flexibility. We look forward to future projects with your team.”
        </blockquote>
        <p className="mt-4 font-semibold">
          – Spokesperson, Online Health Lessons Company, Canada
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble QuickBooks Data Entry Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Contact us today to Nimble QuickBooks Data Entry and get a free
          quote within 24 hours. Let us make your project 100% successful.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default QuickBooksDataEntry;
