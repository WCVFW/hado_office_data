import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Finance, Accounting & FinOps", href: "/services/finance-accounting-finops" },
    { name: "Creative design", href: "/services/legal-corporate-compliance" },
    { name: "Healthcare BPO", href: "/services/healthcare-BPO-Service" },
    { name: "Data Services", href: "/services/it-software-cloud-cybersecurity" },
    { name: "Mortgage Service", href: "/services/MortgageService" },
    { name: "Insurance BPO Services", href: "/services/marketing-sales-creative-media" },
    { name: "Software Development", href: "/services/SoftwareDevelopment" },
    { name: "Photo Editing", href: "/services/operations-procurement-supplychain-manufacturing" },
    { name: "Call Center Services", href: "/services/real-estate-facilities-energy-environment" },
    { name: "Data sciences", href: "/services/hr-training-admin-specialized-services" },
    { name: "Engineering services", href: "/services/global-outsourcing-offshoring" },
    { name: "Research and analysis", href: "/services/import-export-services" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Services", href: "/services" },
  ];

  return (
    <footer className="bg-[#00A7BB] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* About Section */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-white mb-4">Nimble Acuity</h2>
            <p className="pr-4 opacity-90">
              Your trusted partner for innovative BPO and technology solutions, dedicated to helping your business thrive.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:opacity-80 transition-opacity"><Facebook /></a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity"><Twitter /></a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity"><Linkedin /></a>
            </div>
          </div>

          {/* Services Section */}
          <div className="md:col-span-5">
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5" /> info@nimbleacuity.com
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5" /> +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#008C9E]">
        <div className="container mx-auto px-6 py-4 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} Nimble Acuity. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
