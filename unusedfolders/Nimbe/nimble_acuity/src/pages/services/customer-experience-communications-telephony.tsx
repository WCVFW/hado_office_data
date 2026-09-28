import React, { useState } from "react";

const CustomerExperienceCommunicationsTelephony = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const subtopics = [
    {
      title: "Inbound Customer Support",
      description:
        "Provide responsive, empathetic, and knowledgeable support for inbound customer inquiries across phone, email, and chat."
    },
    {
      title: "Outbound Campaigns & Cold Calling",
      description:
        "Run structured outbound sales and marketing campaigns, including cold calling, follow-ups, and lead qualification."
    },
    {
      title: "Technical Support (Tier 1–3)",
      description:
        "Deliver multi-level technical assistance, from basic troubleshooting (Tier 1) to advanced engineering-level problem resolution (Tier 3)."
    },
    {
      title: "Ticket Triage & Helpdesk",
      description:
        "Organize and prioritize customer issues through ticketing systems, ensuring fast resolution and efficient escalation."
    },
    {
      title: "Omnichannel Contact Center Setup",
      description:
        "Deploy and manage contact centers that integrate voice, chat, email, and social channels for seamless customer experiences."
    },
    {
      title: "IVR Design & Tuning",
      description:
        "Design and optimize interactive voice response (IVR) menus that reduce wait times and improve customer self-service options."
    },
    {
      title: "QA & Call Scoring",
      description:
        "Monitor and evaluate customer interactions with structured QA frameworks, ensuring compliance, empathy, and service excellence."
    },
    {
      title: "Workforce Management (WFM) Scheduling",
      description:
        "Forecast demand and schedule agents efficiently to maximize service levels while controlling staffing costs."
    },
    {
      title: "Knowledge Base Authoring",
      description:
        "Create and maintain self-service knowledge bases, FAQs, and guides to empower customers and reduce support volume."
    },
    {
      title: "Chatbot Design & Training",
      description:
        "Develop AI-powered chatbots and continuously train them to handle routine queries, freeing up human agents for complex issues."
    },
    {
      title: "Email Support & SLA Management",
      description:
        "Provide structured email support with clear SLAs, ensuring timely and professional responses to customer inquiries."
    },
    {
      title: "Social Care & Moderation",
      description:
        "Engage with customers on social platforms, resolve complaints publicly, and moderate online communities."
    },
    {
      title: "NPS/CSAT Program Management",
      description:
        "Design and manage customer satisfaction and loyalty surveys, analyzing results to drive continuous improvement."
    },
    {
      title: "Complaint Resolution & Escalation",
      description:
        "Handle escalated complaints with professionalism and efficiency, ensuring fair resolutions that retain customer trust."
    },
    {
      title: "Customer Onboarding & Success Playbooks",
      description:
        "Build structured onboarding and success programs that guide customers through adoption and maximize long-term value."
    },
    {
      title: "Renewals & Upsell Motions",
      description:
        "Proactively manage contract renewals and identify upsell opportunities that drive growth and customer retention."
    },
    {
      title: "Early-Stage Collections Calling",
      description:
        "Perform customer-friendly collections outreach in early delinquency stages to encourage payment without damaging relationships."
    },
    {
      title: "Telecom Expense Management",
      description:
        "Track and optimize telecom expenses, identifying savings opportunities across carriers, plans, and usage."
    },
    {
      title: "SIP Trunking & SBC Management",
      description:
        "Manage SIP trunking and session border controllers to ensure secure, reliable, and scalable telephony infrastructure."
    },
    {
      title: "Number Provisioning & Porting",
      description:
        "Handle phone number assignments and manage porting between carriers with minimal downtime or customer disruption."
    },
    {
      title: "E-Fax & Voicemail Services",
      description:
        "Provide secure and efficient electronic faxing and voicemail solutions integrated with business workflows."
    },
    {
      title: "Contact Center Analytics",
      description:
        "Analyze call center data to identify performance trends, agent productivity, and customer satisfaction insights."
    },
    {
      title: "Speech Analytics & QA Automation",
      description:
        "Leverage speech recognition and AI to automatically analyze calls, detect sentiment, and streamline QA processes."
    },
    {
      title: "Remote KYC/Video Verification",
      description:
        "Enable secure identity verification via video and remote KYC, ensuring compliance with regulatory requirements."
    },
    {
      title: "Field Service Dispatch",
      description:
        "Coordinate and dispatch field technicians in real time to ensure efficient service delivery and customer satisfaction."
    },
    {
      title: "Emergency Hotline Management",
      description:
        "Set up and operate reliable hotlines for emergency or crisis situations, ensuring 24/7 availability."
    },
    {
      title: "Accessibility Services (TTY/CART)",
      description:
        "Provide communication support for customers with disabilities, including TTY, CART captioning, and assistive technologies."
    },
    {
      title: "Conference & Webinar Support",
      description:
        "Deliver end-to-end support for online conferences and webinars, including setup, moderation, and live technical assistance."
    },
    {
      title: "Live Translation/Interpretation",
      description:
        "Offer real-time translation and interpretation services across multiple languages to enhance global communications."
    },
    {
      title: "DR Communications Planning",
      description:
        "Develop disaster recovery communication plans to ensure business continuity during outages or crises."
    }
  ];

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-20 flex flex-col items-center bg-gray-50">
      {/* Intro Section */}
      <div className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Customer Experience, Communications & Telephony
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our Customer Experience, Communications & Telephony services are designed to deliver seamless,
          secure, and scalable customer interactions. From contact centers and telephony infrastructure
          to AI-driven analytics and customer success programs, we help organizations provide exceptional service
          while optimizing costs and compliance.
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {subtopics.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleCard(index)}
            className="relative cursor-pointer p-6 rounded-xl shadow-md bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              {item.title}
            </h2>

            {/* Content */}
            <p
              className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {item.description}
            </p>

            {/* Arrow */}
            <span
              className={`absolute bottom-4 right-4 text-gray-400 text-xl transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerExperienceCommunicationsTelephony;
