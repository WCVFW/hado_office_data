import React, { useState } from "react";
import {
  Smartphone,
  Router,
  Phone,
  Zap,
  Fuel,
  Droplet,
  ChevronDown,
  Circle,
} from "lucide-react";
// ===== 2. Service Tabs Component =====
const serviceTabs = [
  { name: "Mobile", icon: Smartphone },
  { name: "Broadband", icon: Router },
  { name: "Landline", icon: Phone },
  { name: "Electricity", icon: Zap },
  { name: "Gas", icon: Fuel },
  { name: "Water", icon: Droplet },
];

const ServiceTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Mobile");

  return (
    <div className="flex justify-center space-x-6 md:space-x-10 border-b border-gray-200 pb-4 mb-8">
      {serviceTabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.name === activeTab;
        return (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center space-x-2 pb-2 transition-colors ${
              isActive
                ? "text-teal-500 border-b-2 border-teal-500"
                : "text-gray-500 hover:text-teal-500"
            }`}
          >
            <Icon
              className={`w-5 h-5 ${
                isActive ? "text-teal-500" : "text-gray-400"
              }`}
            />
            <span className="font-medium">{tab.name}</span>
          </button>
        );
      })}
    </div>
  );
};

// ===== 3. Custom Input Component for Underline Style =====
interface UnderlineInputProps {
  label: string;
  type: string;
  placeholder: string;
}

const UnderlineInput: React.FC<UnderlineInputProps> = ({
  label,
  type,
  placeholder,
}) => (
  <div className="relative">
    <label className="text-sm font-medium text-gray-600">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full mt-1 pb-2 border-b-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
    />
  </div>
);

// ===== 4. Recharge Form Component =====
const RechargeForm: React.FC = () => {
  const [paymentType, setPaymentType] = useState<string>("prepaid");

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left: Form */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Mobile Recharge Or Bill Payment
          </h2>

          <div className="flex space-x-6 mb-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="paymentType"
                value="prepaid"
                checked={paymentType === "prepaid"}
                onChange={() => setPaymentType("prepaid")}
                className="form-radio text-teal-500"
              />
              <span className="text-gray-700">Prepaid</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="paymentType"
                value="postpaid"
                checked={paymentType === "postpaid"}
                onChange={() => setPaymentType("postpaid")}
                className="form-radio text-teal-500"
              />
              <span className="text-gray-700">Postpaid</span>
            </label>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <UnderlineInput
                label="Enter mobile number"
                type="tel"
                placeholder="e.g. 9876543210"
              />
              <div className="relative">
                <label className="text-sm font-medium text-gray-600">
                  Select Your Operator
                </label>
                <select className="w-full mt-1 pb-2 border-b-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors bg-white">
                  <option value="">-- Select Operator --</option>
                  <option value="airtel">Airtel</option>
                  <option value="jio">Jio</option>
                  <option value="vi">Vodafone Idea (Vi)</option>
                </select>
              </div>
              <UnderlineInput
                label="Enter Amount"
                type="number"
                placeholder="e.g. 299"
              />
              <div className="relative">
                <label className="text-sm font-medium text-gray-600">
                  Check Plans
                </label>
                <div className="mt-1 pb-2 border-b-2 border-transparent">
                  <a
                    href="#"
                    className="text-teal-500 font-medium hover:underline pt-2 inline-block"
                  >
                    View Plan
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-teal-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-600 transition-colors shadow-lg"
              >
                Continue Recharge
              </button>
            </div>
          </form>
        </div>

        {/* Right: Image */}
        <div className="lg:col-span-1 flex justify-center">
          <img
            src="https://placehold.co/300x400?text=Banner"
            alt="Recharge Banner"
            className="rounded-lg shadow-lg object-cover w-full max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

// ===== 5. How It's Work Component =====
const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Choose what to do",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      align: "left",
    },
    {
      num: "02",
      title: "Find what you want",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      align: "right",
    },
    {
      num: "03",
      title: "Complete your order",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      align: "left",
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">How It's Work</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* The timeline */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 border-l-2 border-gray-300 border-dashed transform -translate-x-1/2"></div>

        {/* Timeline Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex ${
                step.align === "left" ? "justify-start" : "justify-end"
              }`}
            >
              {/* Step Content */}
              <div
                className={`w-5/12 p-6 bg-white rounded-lg shadow-lg ${
                  step.align === "left" ? "text-right" : "text-left"
                }`}
              >
                <span className="text-5xl font-bold text-gray-200">
                  {step.num}
                </span>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>

              {/* Timeline Circle */}
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-teal-500 rounded-full z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== 6. FAQ Accordion Item Component =====
interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <span className="text-lg font-medium text-gray-800">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="pb-5 text-gray-600">{children}</p>
      </div>
    </div>
  );
};

// ===== 7. FAQ Section Component =====
const FAQ: React.FC = () => (
  <section className="py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Illustration Placeholder */}
      <div className="flex justify-center">
        <img
          src="https://placehold.co/450x400/E0F2F1/374151?text=Illustration"
          alt="FAQ Illustration"
          className="rounded-lg"
        />
      </div>

      {/* FAQ Content */}
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          If you got questions <br />
          we have answer
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>

        <div className="space-y-2">
          <AccordionItem title="What is a recharge?">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </AccordionItem>
          <AccordionItem title="what is a recharge enable?">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </AccordionItem>
          <AccordionItem title="How reliable is recharge service?">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </AccordionItem>
        </div>
      </div>
    </div>
  </section>
);

// ===== 8. Main App Component =====
export default function App() {
  return (
    // We use 'bg-gray-50' as the closest web-safe equivalent to the
    // very light purple/white background in the image.
    <div className="min-h-screen bg-gray-50 font-sans">
      <main>
        {/* Top section with form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <ServiceTabs />
            <RechargeForm />
          </div>
        </section>

        {/* "How It's Work" Section */}
        <HowItWorks />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* A simple footer placeholder */}
      <footer className="bg-gray-800 text-gray-400 py-8 text-center">
        <p>&copy; 2025 PayCo. All rights reserved.</p>
      </footer>
    </div>
  );
}
