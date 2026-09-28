
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const navLinkClasses = (path: string) =>
    `relative font-medium transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[#4ECDC4] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
      isScrolled ? "text-gray-800 hover:text-[#2A4B7C]" : "text-white hover:text-gray-200"
    } ${location.pathname === path ? "after:scale-x-100" : ""}`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className={`text-3xl font-bold transition-colors duration-300 ${isScrolled ? "text-[#2A4B7C]" : "text-white"}`}>
          Nimble Acuity
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={navLinkClasses("/")}>Home</Link>
          <Link to="/about" className={navLinkClasses("/about")}>About</Link>
          <div className="group relative">
            <Link to="/services" className={`${navLinkClasses("/services")} flex items-center`}>
              Services <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            {/* Mega Menu */}
            <div className="absolute top-full -left-1/2 translate-x-1/4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white shadow-2xl rounded-lg w-[700px] p-8">
                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                  {services.map((service) => (
                    <Link key={service.name} to={service.href} className="block text-gray-700 hover:text-[#2A4B7C] font-medium transition-colors">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
              </div>
            ))}
            <div className="relative group">
              <Link
                to="/services"
                className={`flex items-center font-medium transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-[#00A7BB]" : "text-white hover:text-gray-300"
                } ${isServicesPage ? "!text-[#00A7BB]" : ""}`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-lg shadow-2xl w-[600px] p-6">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#00A7BB] transition-colors"
                      >
                        {React.cloneElement(service.icon, { className: "h-5 w-5 mr-3 text-[#00A7BB]" })}
                        <span className="text-sm font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 rounded-md transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-[110%]"}`}>
        <div className="px-5 pt-4 pb-6">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="block py-2 text-lg font-medium text-gray-700 hover:text-[#00A7BB]" onClick={() => setIsMobileMenuOpen(false)}>
              {item.name}
            </Link>
          ))}
          <button onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)} className="w-full flex justify-between items-center py-2 text-lg font-medium text-gray-700 hover:text-[#00A7BB]">
            Services <ChevronDown className={`transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {isServicesDropdownOpen && (
            <div className="pt-2 pl-4 space-y-2">
              {services.map((service) => (
                <Link key={service.name} to={service.href} className="block py-1 text-gray-600 hover:text-[#00A7BB]" onClick={() => setIsMobileMenuOpen(false)}>
                  {service.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
