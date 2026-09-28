import React from "react";
import Imainmenu from "../Imainmenu";

const USDotEFilingArticle: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            All You Need to Know About E-filing of US DOT
          </h1>
          <p className="text-lg text-gray-700">
            If you own a fleet or commercial vehicle to haul people or hazardous cargo across state lines, e-filing of US DOT is mandatory. Learn the regulations and filing process here.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 max-w-5xl mx-auto px-4 text-gray-700 space-y-4">
        <p>
          Owning a registered commercial vehicle operating interstate with heavy cargo or passengers requires a Federal Motor Carrier Safety Administration (FMCSA) issued US DOT number. This is done via filing the MCS-150, also known as the Motor Carrier Identification Report.
        </p>
        <p>
          The DOT number acts as a unique identifier for authorities to track safety records, compliance, and inspections. It must be displayed on all qualifying vehicles.
        </p>
      </section>

      {/* Biennial Update */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-bold mb-4">Biennial Update</h2>
          <p>
            Fleet operators must file a biennial update every two years. Failing to do so can lead to deactivation of your US DOT number and penalties up to $1,000 per day. The last two digits of your DOT number indicate the filing month and year.
          </p>
          <table className="table-auto border-collapse border border-gray-300 w-full text-left my-4">
            <thead>
              <tr>
                <th className="border px-2 py-1">Last US DOT Digit</th>
                <th className="border px-2 py-1">1</th>
                <th className="border px-2 py-1">2</th>
                <th className="border px-2 py-1">3</th>
                <th className="border px-2 py-1">4</th>
                <th className="border px-2 py-1">5</th>
                <th className="border px-2 py-1">6</th>
                <th className="border px-2 py-1">7</th>
                <th className="border px-2 py-1">8</th>
                <th className="border px-2 py-1">9</th>
                <th className="border px-2 py-1">0</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Filing Month</td>
                <td className="border px-2 py-1">Jan</td>
                <td className="border px-2 py-1">Feb</td>
                <td className="border px-2 py-1">Mar</td>
                <td className="border px-2 py-1">Apr</td>
                <td className="border px-2 py-1">May</td>
                <td className="border px-2 py-1">Jun</td>
                <td className="border px-2 py-1">Jul</td>
                <td className="border px-2 py-1">Aug</td>
                <td className="border px-2 py-1">Sep</td>
                <td className="border px-2 py-1">Oct</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How to e-file */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">How to E-file US DOT</h2>
        <p>
          Online registration requires your US DOT number, EIN/SSN, official company information, and PIN. Log in to the FMCSA website and complete the MCS-150 or MCS-150B form. Submit online for fastest processing.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Complete the MCS-150 form online with accurate information</li>
          <li>Scan and upload the completed form to receive a tracking number</li>
          <li>Submit a paper copy via US Mail with signature</li>
          <li>Send the completed form via Fax</li>
        </ul>
        <p>
          Filing online is recommended for edit checks, faster turnaround, and reduced manual errors.
        </p>
      </section>

      {/* Importance and Compliance */}
      <section className="bg-gray-50 py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">Importance of DOT Filing</h2>
        <p>
          Accurate filing affects your safety scores in Behavior Analysis & Safety Improvement Categories (BASICS), Compliance, and Safety. FMCSA enforces compliance with Hazardous Materials Regulations (HMR) and Federal Motor Carrier Safety Regulations (FMCSR). Deliberate or accidental errors can lower safety performance scores.
        </p>
        <p>
          Penalties for missing biennial updates can be $1,000 per day, and US DOT numbers can be deactivated.
        </p>
      </section>

      {/* Who Should Get a US DOT Number */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">Who Should Get a US DOT Number?</h2>
        <p>
          DOT numbers are compulsory if you are a hazardous material safety permit holder, motor carrier operator, or intermodal equipment provider. Requirements include:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Ownership of vehicles above 10,000 lbs.</li>
          <li>Hauling 9-15 passengers including the driver</li>
          <li>Shuttling 16+ passengers</li>
          <li>Transporting hazardous substances</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble E-filing of US DOT and Compliance Checks to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our team of experts ensures accurate e-filing and compliance checks using cloud-based automation, saving you time and avoiding penalties.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default USDotEFilingArticle;
