import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeaderNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Recharge & Bill Payment", href: "#", active: true },
    { name: "Booking", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Pages", href: "#" },
    { name: "Elements", href: "#" },
  ];

  return (
    <header className="bg-white shadow-sm font-sans sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-teal-500">PayCo</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`flex items-center font-medium transition-colors ${
                link.active
                  ? "text-teal-500 border-b-2 border-teal-500 pb-1"
                  : "text-gray-700 hover:text-teal-500"
              }`}
            >
              {link.name}
              {/* Optional ChevronDown for dropdown links */}
              {link.name !== "Home" && <ChevronDown className="w-4 h-4 ml-1" />}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="#"
            className="text-gray-700 font-medium hover:text-teal-500 transition-colors"
          >
            Sign in
          </Link>
          <Button className="bg-teal-500 text-white px-5 py-2 rounded-md font-medium hover:bg-teal-600 transition-colors">
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 hover:text-teal-500 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`flex items-center font-medium transition-colors ${
                  link.active ? "text-teal-500" : "text-gray-700 hover:text-teal-500"
                }`}
              >
                {link.name}
                {link.name !== "Home" && <ChevronDown className="w-4 h-4 ml-1" />}
              </Link>
            ))}
            <div className="flex flex-col mt-2 space-y-2">
              <Link
                to="#"
                className="text-gray-700 font-medium hover:text-teal-500 transition-colors"
              >
                Sign in
              </Link>
              <Button className="bg-teal-500 text-white px-5 py-2 rounded-md font-medium hover:bg-teal-600 w-full">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
