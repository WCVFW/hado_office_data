import React from "react";
import NavigationMenu from "../MegaMenu";

const CatiWebSurveys: React.FC = () => {
  return (
    <div className="p-6 space-y-10">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Nimble CATI Web Surveys
        </h1>
        <p className="text-lg text-gray-700">
          Transform your business with CATI Web Surveys and know your competitors,
          reach out to significant customers, and get insightful feedback.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Nimble Acuity brings the convenience of comprehensive CATI web surveys
          and call center CRM technology solutions under a single platform. With
          over two decades of experience, we’ve trained global clients in CATI web
          surveys and CRM market research.
        </p>
      </section>

      {/* Services Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">CATI Services We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-bold">Custom CATI Web Surveys & CRM Market Research</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Know the reasons behind high attrition</li>
              <li>Prevent potential customer churn</li>
              <li>Understand your competition</li>
              <li>Contact quality customers</li>
              <li>Gain insightful feedback</li>
            </ul>
          </div>

          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-bold">CATI Web Surveys & CRM Technology Training</h3>
            <p className="text-gray-700 mt-2">
              Two levels of training – general market research techniques and
              project-specific training covering client goals, business profiles,
              and questionnaire management.
            </p>
          </div>

          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-bold">Constant Growth of Associates</h3>
            <p className="text-gray-700 mt-2">
              Employees are continuously assessed on performance metrics like
              civility, clarity, quality, accent, and rebuttal techniques.
            </p>
          </div>

          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-bold">CATI System Compatible with CRM</h3>
            <p className="text-gray-700 mt-2">
              Our CATI tools integrate seamlessly with CRM and IVR systems,
              supporting skip modes, routing, randomization, piping, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-semibold">CATI Web Surveys Technologies We Use</h2>
        <p className="text-gray-700 mt-2">
          Zoho Survey, Google Forms, SurveyMonkey, VAIRKKO Suite, AskNicely,
          123FormBuilder, Compport, GetFeedback, SurveyLegend, SurveySparrow,
          Nfield, SoGoSurvey, NotifyVisitors, MySurveyLab, Site24x7, and more.
        </p>
      </section>

      {/* Benefits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Benefits of Outsourcing CATI Web Surveys to Nimble Acuity</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Custom-priced CATI services</li>
          <li>Modern infrastructure facilities</li>
          <li>100% ISMS compliance (ISO/IEC 27001:2022 certified)</li>
          <li>Experienced team of CATI experts & BI professionals</li>
          <li>High-quality CRM market research</li>
          <li>100% project security with VPN & FTP protocols</li>
          <li>Short turnaround time (30%–40% faster)</li>
          <li>Economies of scale with scalable solutions</li>
          <li>24/7 global customer support</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-bold">
              Primary Research for China’s Leading Trade Advisors
            </h3>
            <p className="text-gray-700 mt-2">
              Delivered high-quality primary research services for a major trade
              advisor in Shanghai in record time.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-bold">
              Research for US-based Digital Transformation Company
            </h3>
            <p className="text-gray-700 mt-2">
              Provided primary & secondary research services quickly and
              effectively to support their market strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <blockquote className="italic text-gray-700 mt-2">
          “Let me thank you for the professional way in which you are managing
          the project and meeting our deadlines. Unfortunately, our second supplier
          cannot say the same and let us down considerably.”
        </blockquote>
        <p className="text-gray-600 mt-2">— CEO, Technology Company, UK</p>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">
          Nimble CATI Web Surveys Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          With over 26 years of experience in research services, we deliver
          cost-effective and professional CATI web surveys. Our expert team
          ensures accuracy, scalability, and business impact. Get in touch with us
          for a customized quote.
        </p>
      </section>
    </div>
  );
};

export default CatiWebSurveys;
