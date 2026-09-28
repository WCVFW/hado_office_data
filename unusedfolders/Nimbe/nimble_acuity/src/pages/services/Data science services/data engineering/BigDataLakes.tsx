import {
  Database,
  Layers,
  Shield,
  Upload,
  GitBranch,
  FileCheck,
  BarChart3,
  Cpu,
  PlugZap,      // use this instead of Api
  Lock,
  ClipboardList,
  Share2,
  GitGraph,
  Wrench,
  Brain,
  LineChart,
  Users,
  Building2,
} from "lucide-react";

import DSMainMenu from "../mainmenu";

const services = [
  {
    title: "Big Data Management Services",
    icon: Database,
    points: [
      "Streamline data lifecycle management processes",
      "Enhance data storage efficiency",
      "Implement robust security measures",
    ],
  },
  {
    title: "Data Ingestion",
    icon: Upload,
    points: [
      "Facilitate seamless multi-source data integration",
      "Support real-time and batch ingestion",
      "Utilize advanced data ingestion technologies",
    ],
  },
  {
    title: "Data Lake Modernization",
    icon: Layers,
    points: [
      "Upgrade outdated data architectures efficiently",
      "Employ modern tools and methodologies",
      "Improve data processing efficiency and performance",
    ],
  },
  {
    title: "Data Integration",
    icon: GitBranch,
    points: [
      "Consolidate disparate data sources seamlessly",
      "Enhance data interoperability across systems",
      "Leverage unified data accessibility platforms",
    ],
  },
  {
    title: "Data Governance",
    icon: Shield,
    points: [
      "Establish comprehensive data governance frameworks",
      "Maintain high data quality standards",
      "Align with organizational risk-mitigation needs",
    ],
  },
  {
    title: "Data Compliance",
    icon: FileCheck,
    points: [
      "Ensure adherence to regulatory standards",
      "Follow stringent data security protocols",
      "Implement secure data management policies",
    ],
  },
];

const tools = [
  "Apache Hadoop",
  "Azure Data Lake",
  "Apache Spark",
  "Databricks",
  "Snowflake",
];

const differentiators = [
  {
    title: "Data Lakehouse Implementation",
    desc: "Combines data warehouse and lake capabilities for unified analytics.",
    icon: Database,
  },
  {
    title: "Analytics-driven Efficiency",
    desc: "Leverage predictive analytics to optimize operations and reduce downtime.",
    icon: BarChart3,
  },
{
  title: "API-driven Architecture",
  desc: "Facilitates seamless integration with third-party applications.",
  icon: PlugZap,   // ✅ replaced
},

  {
    title: "Secure Multi-tenancy",
    desc: "Advanced isolation techniques ensure sensitive data protection.",
    icon: Lock,
  },
  {
    title: "Comprehensive Audit Trails",
    desc: "Detailed logs for compliance verification and internal audits.",
    icon: ClipboardList,
  },
  {
    title: "Graph Analytics",
    desc: "Uncover insights in complex datasets with advanced relationship analysis.",
    icon: GitGraph,
  },
];

const additionalServices = [
  { name: "Data Engineering Services", icon: Wrench },
  { name: "Data Science Consulting Services", icon: Brain },
  { name: "Artificial Intelligence Services", icon: Cpu },
  { name: "Data Analytics Services", icon: LineChart },
];

const testimonials = [
  {
    quote:
      "I am more than pleased with the way the project has turned out, and with the overall experience itself. I have been raving about your company to everyone I know, and I will be sending you more projects in the future.",
    author: "CEO, Top Logistics Company in the US",
  },
];

const caseStudies = [
  {
    title:
      "Nimble Acuity Created a Data Storage and Processing Infrastructure for a Banking Group",
    desc: "Our team developed a centralized data processing and storage infrastructure within a quick turnaround time.",
  },
  {
    title:
      "Nimble Acuity Developed a Big Data Platform for Document Processing Automation",
    desc: "We designed and implemented a platform to automate document processing for a leading banking organization.",
  },
];

const BigDataLakes: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Nimble Big Data Lakes Solutions & Consulting
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Streamline diverse datasets with enterprise-grade data lakes solutions
          that enable flexible storage, advanced analytics, and real-time
          insights.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Services */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          Our Enterprise Data Lakes Consulting Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
            >
              <service.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Our Tool Competencies
        </h2>
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-white border rounded-full shadow-sm text-gray-700 hover:bg-blue-50 transition"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Differentiators */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          What Sets Us Apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-2xl border hover:shadow-md transition"
            >
              <item.icon className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {additionalServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center"
            >
              <service.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-800 font-medium">{service.name}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Clients Speak
        </h2>
        <div className="bg-white p-8 rounded-2xl shadow mb-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-center">
              <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
              <p className="text-gray-900 font-semibold">{t.author}</p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Customer Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {caseStudy.title}
              </h3>
              <p className="text-gray-700">{caseStudy.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigDataLakes;
