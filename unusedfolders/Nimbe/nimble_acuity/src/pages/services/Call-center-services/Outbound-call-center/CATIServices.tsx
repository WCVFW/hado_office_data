import React from "react";
import CCmainmenu from "../CCmainmenu";

const CATIServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Nimble CATI Services</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Computer-aided telephone interviewing (CATI) with Lean Six Sigma-guided workflows
          to ensure precise data logging, lower error rates, and enhanced research outcomes.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 text-gray-700">
        <p>
          Spending more time on multiple respondents can significantly raise operational
          costs coupled with the risk of errors in data processing. If these are your
          concerns, then you need the help of professionals like us. Nimble Auity takes
          care of the entire CATI market research process from data logging to result
          analysis, under tight deadlines and with diligence.
        </p>
        <p>
          If you want structured interviews carried out in substantial numbers to provide
          professional pre-coded responses, Nimble Auity’s CATI market research services
          can help. We quickly set up questionnaires on CATI systems and export
          error-free results to give you the ultimate marketing edge.
        </p>
      </section>

      {/* Why Offshore */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">
            Why Offshore Computer-Assisted Telephone Interviewing Services to India?
          </h2>
          <p className="text-gray-700">
            Nimble incorporates Lean Six Sigma techniques like interviewer calibration
            and predictive dialer optimization to guarantee quantifiable results. With
            advanced tools and global expertise, there’s never been a better time to
            outsource CATI solutions to India.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          CATI Market Research Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Questionnaire Design",
              desc: "We collaborate to design focused, tested questionnaires to collect critical insights.",
            },
            {
              title: "Design Functions",
              desc: "Customized questionnaires with error-proofing algorithms and autodialing for accuracy.",
            },
            {
              title: "Training and Monitoring",
              desc: "Skilled interviewers trained in persuasion tactics with real-time monitoring and feedback.",
            },
            {
              title: "Enterprise Reporting System",
              desc: "Real-time performance reports to enhance quality and efficiency of CATI outputs.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call Center Software */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Call Center Software We Use</h2>
          <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-medium">
            {[
              "HubSpot","Bitrix24","Talkdesk","Five9","Zendesk","Dixa","Salesforce","LiveAgent","Avaya"
            ].map((soft, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded shadow">{soft}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">CATI Marketing Research Process We Follow</h2>
        <ol className="space-y-6">
          {[
            "Requirement Gathering – understanding project objectives.",
            "Training Interviewers and Scheduling Interviews – ensuring accuracy & participation.",
            "Design Questionnaire – creating easy-to-use, insightful layouts.",
            "Interview Respondents – collecting accurate data with flexibility.",
            "Collection, Analysis, and Interpretation – expert review and insights.",
            "Report Generation – error-free reports for actionable insights."
          ].map((step, i) => (
            <li key={i} className="bg-white p-6 rounded-2xl shadow">
              <span className="font-bold text-blue-600">Step {i + 1}:</span> {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Staffing Calculator */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Call Center Staffing Calculator</h2>
          <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-md">
            <div className="space-y-4">
              <label className="block">
                Project Type
                <select className="w-full mt-1 p-2 border rounded">
                  <option>Inbound</option>
                  <option>Outbound - One time</option>
                  <option>Outbound - Ongoing</option>
                  <option>Email</option>
                  <option>Chat</option>
                </select>
              </label>
              <label className="block">
                Service Type
                <input type="text" placeholder="Order Taking Services" className="w-full mt-1 p-2 border rounded"/>
              </label>
              <label className="block">
                Target Country
                <input type="text" placeholder="USA" className="w-full mt-1 p-2 border rounded"/>
              </label>
              <label className="block">
                Shift Coverage
                <input type="text" placeholder="24/7 Coverage" className="w-full mt-1 p-2 border rounded"/>
              </label>
            </div>
            <div className="space-y-4">
              <label className="block">
                Average Call Count Per Week
                <input type="number" placeholder="Enter Number of Calls" className="w-full mt-1 p-2 border rounded"/>
              </label>
              <label className="block">
                Average Handling Time (Min)
                <input type="number" placeholder="Enter Minutes" className="w-full mt-1 p-2 border rounded"/>
              </label>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Check Result
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Why Choose Nimble Auity’s CATI Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "ISO-certified DMAIC processes",
            "Strict Data Security",
            "High Accuracy (98%+)",
            "Quick Turnaround",
            "Scalable Solutions",
            "Cost-effective Pricing",
            "Dedicated Contact Point",
            "Experienced Researchers",
            "Modern Infrastructure",
            "24/7 Availability"
          ].map((point, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p className="font-medium">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Client Success Stories</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
          <p>
            Nimble provided CATI services for a leading internet media and research firm,
            conducting 500 surveys in a short span and saving 30% costs.
          </p>
          <p>
            For an Australian client, Nimble conducted 500+ surveys of parents and children,
            creating a B2C database within 4 weeks.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto italic text-gray-700">
          "We have used Nimble Call Center services, and their marketing, data research,
          and lead generation support has been excellent. Their communication and updates
          have been consistent and reliable. Highly recommended."
        </blockquote>
        <p className="mt-4 font-semibold">– Spokesperson, Online Advertising Company, Amsterdam</p>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 text-white text-center py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">Outsource CATI Market Research to Nimble Auity</h2>
        <p className="mb-6">
          With 22+ years of expertise, modern infrastructure, and a global presence, Nimble
          is your trusted partner for CATI solutions. Let’s map your existing operations
          and deliver quantifiable results.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CATIServices;
