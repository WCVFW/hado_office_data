import React from "react";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import { Link } from "react-router-dom";

const ITServices = () => {
  const stats = [
    { value: "22+", label: "Years of Experience" },
    { value: "10000+", label: "Global Customers" },
    { value: "60+", label: "Countries We Serve" },
    { value: "1000+", label: "Completed Projects" },
  ];

  const services = [
    {
      title: "Software Development Services",
      description:
        "Our services include custom software development, cloud application development, and legacy software modernization that contribute to your business growth.",
    },
    {
      title: "Mobile App Development",
      description:
        "We build user-friendly mobile apps with rigorous testing for functionality, performance, security, and integration with your existing systems.",
    },
    {
      title: "Enterprise Software Development",
      description:
        "We provide end-to-end support, from app planning and architecture design to user training, monitoring, and ongoing feature evolution.",
    },
    {
      title: "Software Testing Services",
      description:
        "Beyond functional testing, we perform release, regression, compliance, and penetration testing to ensure seamless performance.",
    },
    {
      title: "IT Staffing Services",
      description:
        "Our staffing solutions are designed for adaptability, allowing for quick scaling to meet your business's operational needs and enhance performance.",
    },
    {
      title: "IT Infrastructure Management",
      description:
        "We offer comprehensive analysis to detect and eliminate operational issues, ensuring smooth and uninterrupted business operations.",
    },
    {
      title: "Ecommerce Development",
      description:
        "We offer scalable, futuristic e-commerce solutions on platforms like Shopify, Drupal, and BigCommerce, including mobile app and site audit services.",
    },
    {
      title: "Application Development",
      description:
        "We modernize your existing applications with sleek, intuitive interfaces, and provide ongoing support, maintenance, and quality assurance.",
    },
    {
      title: "Database Consulting",
      description:
        "We help you choose the most suitable database solutions to improve operational efficiency, customer service, and data-driven decision-making.",
    },
    {
      title: "Cloud Services",
      description:
        "From consulting and migration to development and optimization, we help you manage cloud environments for efficiency and cost savings.",
    },
    {
      title: "Automation Services",
      description:
        "We identify bottlenecks in your processes and use CI/CD and DevOps methodologies to accelerate business automation and improve efficiency.",
    },
  ];

  const innovations = [
    "Big Data",
    "AI",
    "Data Science",
    "IoT",
    "Computer Vision",
    "AR (Augmented Reality)",
    "VR (Virtual Reality)",
    "Blockchain",
  ];

  const technologies = {
    backend: [
      ".net-core",
      "asp.net",
      "Entity Framework",
      "NHibernate",
      "Python",
      "Node JS",
    ],
    frontend: ["Angular", "Vue.js", "React", "KnockOut"],
    mobile: ["ios", "android", "flutter", "xamarin", "react-native"],
    database: [
      "Mssql",
      "Mysql",
      "Oracle",
      "Mongo DB",
      "Redis",
      "Postgresql",
    ],
    cloud: ["aws", "azure", "google-cloud", "digital-ocean"],
  };

  const industries = [
    "Telecom",
    "Media & Entertainment",
    "Travel & Hospitality",
    "Hotel Management",
    "Aerospace",
    "Banking & Financial",
    "Sports",
    "Education",
    "Customer Brokerage",
    "Healthcare",
    "Fashion",
    "Threat Anticipation",
    "Insurance",
    "Retail",
    "Manufacturing",
    "Oil & Gas",
    "Logistics & Transportation",
    "Public Services",
    "Government",
  ];

  const whyChooseUs = [
    "Efficient Operations",
    "Security and Compliance",
    "Superior Resources",
    "Scalability",
    "Emphasis on Core Business",
    "Latest Technologies",
    "Commitment to Long-Term Relationships",
    "Cost Effectiveness",
  ];

  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      {/* Page Content */}
      <section className="py-16 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h1 className="text-4xl font-bold text-[#006A7C] mb-4">
              IT Outsourcing Services
            </h1>
            <p className="text-lg text-gray-600">
              At Nimble Acuity, we offer reliable and secure IT outsourcing
              services to ensure zero business disruption. We empower your
              business to embrace technological advancements by modernizing your
              mission-critical IT needs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold text-[#006A7C]">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Intro Paragraphs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              A Human Approach to IT
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We understand that a successful digital transformation requires
              more than just technology; it needs innovative thinking and a
              strong organizational culture. Our services are designed to
              harness these elements, creating substantial value for your
              business now and in the future.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We go beyond simply providing solutions. We work with your team,
              processes, and objectives, delivering customized services that not
              only solve immediate problems but also set the stage for
              long-term success. Our commitment is to help you navigate
              intricate challenges, leverage new opportunities, and achieve
              greater performance, scalability, and competitiveness.
            </p>
          </div>

          {/* On-demand Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Our On-demand IT Outsourcing Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F9F9] p-5 rounded-xl shadow hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-[#006A7C] mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-700">{service.description}</p>
                  <Link to="#" className="text-[#006A7C] text-sm mt-2 block">
                    Read more
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Innovations */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              IT Innovations We Excel In
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700">
              {innovations.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F9F9] p-5 rounded-xl shadow hover:shadow-md transition text-center"
                >
                  <h4 className="font-semibold">{tech}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(technologies).map(([category, list], idx) => (
                <div key={idx} className="bg-[#F0FAFB] p-6 rounded-2xl shadow">
                  <h3 className="text-xl font-semibold text-[#006A7C] mb-4">
                    {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                    Technologies
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {list.map((tech, i) => (
                      <li key={i}>
                        <span className="font-medium text-gray-800">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <ul className="space-y-4">
                {whyChooseUs.slice(0, 4).map((item, idx) => (
                  <li key={idx}>
                    <strong>{item}:</strong> Our expert team ensures your IT
                    operations run smoothly and efficiently.
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {whyChooseUs.slice(4).map((item, idx) => (
                  <li key={idx + 4}>
                    <strong>{item}:</strong> By taking over your IT
                    responsibilities, we allow you to concentrate on your core
                    business functions.
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industries We Empower */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#006A7C] mb-6">
              Industries We Empower
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700">
              {industries.map((industry, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F9F9] p-5 rounded-xl shadow hover:shadow-md transition"
                >
                  <h4 className="font-medium">{industry}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-[#006A7C] mb-4">
              Ready to transform your business with our IT services?
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              Unleash the potential of your projects with our expert team. Get
              started now and see how we can modernize your IT infrastructure
              and support your business growth.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITServices;