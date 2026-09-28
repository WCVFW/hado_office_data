import React from "react";
import NavigationMenu from "../MegaMenu";

const KnowledgeProcessOutsourcing: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Intro */}
      <NavigationMenu/>
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          What is Knowledge Process Outsourcing?
        </h1>
        <p className="text-gray-700 leading-relaxed">
          India, with its large pool of talented professionals and specialized
          domain workers, is quickly becoming the central hub for what is known
          as Knowledge Process Outsourcing (KPO).
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The Indian KPO sector offers global customers a wide range of services
          among various industry verticals. Apart from IT/ITES related services,
          the KPO industry provides knowledge-based solutions such as
          Engineering Services, Web Application Development, CAD/CAM
          Applications, Legal Processes, Intellectual Property and Patent
          Services, Business Research and Analytics, Clinical Research,
          Publishing, and Market Research amongst others.
        </p>
      </section>

      {/* Popular Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Popular KPO Services Offered in India
        </h2>
        <p className="text-gray-700 mb-4">
          Many global companies are focusing on their core business areas and
          outsourcing non-core activities to India. This helps minimize costs,
          improve efficiency, and shift focus to key growth areas. Outsourcing
          knowledge-based services to India provides domain expertise and
          advanced analytical skills.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Market Research</li>
          <li>Financial Research Services</li>
          <li>Learning Solutions</li>
          <li>Business Research</li>
          <li>Pharmaceuticals and Biotechnology</li>
          <li>Medical Services</li>
          <li>Writing and Content Development</li>
          <li>Legal Process Outsourcing</li>
          <li>Intellectual Property (IP) Research</li>
          <li>Data Analytics</li>
          <li>Creative Design</li>
          <li>Network Management</li>
          <li>Training and Consultancy</li>
        </ul>
      </section>

      {/* Why India */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why is India the Most Preferred Outsourcing Destination for KPO?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          India possesses a large number of specialized domain experts such as
          engineers, PhDs, CAs, lawyers, CAD/CAM experts, architects,
          biotechnologists, economists, statisticians, and MBAs. Tapping into
          this talent pool allows overseas companies to gain superior quality
          KPO services at cost-effective prices.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          On the Indian side, KPO salaries tend to be 25–30% higher compared to
          those offered to specialized domain experts, thereby encouraging more
          professionals to enter the KPO industry.
        </p>
      </section>

      {/* Future of KPO */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          The Future of KPO in India
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The National Association of Software and Service Companies (NASSCOM)
          predicts that India will acquire a 70% share in the growing KPO
          industry. According to ASSOCHAM, the Indian KPO market has been
          growing at a compounded annual growth rate of approximately 30% and is
          expected to touch $30 billion by 2015.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Another contributor to the KPO boom is the BPO sector, with nearly 50%
          of call centers transforming into KPO centers offering value-added
          services alongside regular BPO offerings.
        </p>
      </section>

      {/* Challenges */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Challenges Faced by the Indian KPO Industry
        </h2>
        <p className="text-gray-700 leading-relaxed">
          With Indian KPO companies experiencing tremendous growth, the industry
          must focus on building a stronger base of qualified professionals in
          engineering, medicine, law, management, and accountancy. Emerging
          competition from countries such as Russia, China, the Czech Republic,
          Ireland, and Israel is another challenge.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          To remain leaders, Indian KPO firms must invest in advanced
          technologies, acquire better talent, and deliver higher quality
          standards consistently.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-50 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Nimble Knowledge Processing Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 mb-6">
          Established in 2002, Nimble Acuity has extensive expertise in
          offering customized KPO services across diverse industry verticals.
          With cost-effective services, timely deliveries, and guaranteed
          quality, we help businesses make informed decisions and stay ahead of
          competitors.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default KnowledgeProcessOutsourcing;
