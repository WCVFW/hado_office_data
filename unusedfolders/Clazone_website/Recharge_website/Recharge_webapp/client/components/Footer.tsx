import { Link, useLocation } from "react-router-dom";
import {
  CreditCard,
  BarChart3,
  Smartphone,
  Bus,
  Train,
  Banknote,
  Zap,
  Award,
  Search,
  FileText,
  Users,
  Database,
  Settings,
  User,
  UserCog,
  Shield,
} from "lucide-react";

// Grouped navigation structure
const navigationSections = [
  {
    title: "Main",
    items: [{ name: "Dashboard", href: "/", icon: BarChart3 }],
  },
  {
    title: "Services",
    items: [
      { name: "Mobile Recharge", href: "/mobile-recharge", icon: Smartphone },
      { name: "Bus Tickets", href: "/bus-tickets", icon: Bus },
      { name: "Train Tickets", href: "/train-tickets", icon: Train },
      { name: "Mini ATM", href: "/mini-atm", icon: Banknote },
      { name: "EB Bill Payment", href: "/eb-bill-payment", icon: Zap },
      { name: "Government Services", href: "/government-services", icon: Award },
      { name: "Bill Payment", href: "/bill-payment", icon: CreditCard },
    ],
  },
  {
    title: "Management",
    items: [
      { name: "Transaction Status", href: "/transaction-status", icon: Search },
      { name: "Bill Validation", href: "/bill-validation", icon: FileText },
    ],
  },
  {
    title: "Administration",
    items: [
      { name: "Employee Management", href: "/employee-management", icon: Users },
      { name: "Commission Management", href: "/commission-management", icon: Database },
      { name: "Biller Management", href: "/biller-management", icon: Settings },
      { name: "Agent Management", href: "/agent-management", icon: User },
      { name: "Admin Panel", href: "/admin-panel", icon: UserCog },
    ],
  },
  {
    title: "Documentation",
    items: [{ name: "API Documentation", href: "/api-docs", icon: Shield }],
  },
];

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Left + Right Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left (Logo + About) */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">BBPS Platform</h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Secure Bharat Bill Payment System platform providing recharge,
              ticket booking, banking, and government services in one place.
            </p>
          </div>

          {/* Right (Navigation Sections) */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {navigationSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`hover:text-white transition-colors ${
                          location.pathname === item.href
                            ? "text-white font-medium"
                            : ""
                        }`}
                      >
                        <span className="inline-flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} BBPS Platform. All rights reserved. 
            Built with <span className="text-indigo-400">security</span> and{" "}
            <span className="text-purple-400">reliability</span> in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
