import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle, FaWallet } from "react-icons/fa";
import { api } from "../services/api";

// ================= NAVIGATION DATA =================
export const mainNavLinks = [
  {
    label: "Recharge & Bills",
    type: "dropdown",
    submenu: [
      { href: "/recharge/mobile", label: "Mobile Recharge" },
      { href: "/recharge/dth", label: "DTH Recharge" },
      { href: "/recharge/electricity", label: "Electricity Bill" },
      { href: "/recharge/water", label: "Water Bill" },
      { href: "/recharge/gas", label: "Gas Bill" },
      { href: "/recharge/broadband", label: "Broadband" },
      { href: "/recharge/landline", label: "Landline Bill" },
      { href: "/recharge/fastag", label: "FASTag Recharge" },
      { href: "/recharge/lpg", label: "LPG Cylinder Booking" },
      { href: "/recharge/insurance", label: "Insurance Payment" },
      { href: "/recharge/education", label: "Education Fees" },
      { href: "/recharge/municipal", label: "Municipal Tax" },
    ],
  },
  {
    label: "Money & Banking",
    type: "dropdown",
    submenu: [
      { href: "/aeps", label: "AEPS (Aadhaar Withdrawal)" },
      { href: "/micro-atm", label: "Micro ATM" },
      { href: "/dmt", label: "DMT (Money Transfer)" },
      { href: "/upi-collect", label: "UPI Collect / QR Payments" },
      { href: "/wallet-to-bank", label: "Wallet to Bank Transfer" },
      { href: "/verify/bank-account", label: "Bank Account Verification" },
      { href: "/verify/pan", label: "PAN Verification" },
      { href: "/verify/aadhaar-ekyc", label: "Aadhaar eKYC" },
    ],
  },
  {
    label: "Travel Booking",
    type: "dropdown",
    submenu: [
      { href: "/travel/flight", label: "Flight Booking" },
      { href: "/travel/train", label: "Train Booking (IRCTC)" },
      { href: "/travel/bus", label: "Bus Booking" },
      { href: "/travel/hotel", label: "Hotel Booking" },
      { href: "/travel/cab", label: "Cab Booking" },
    ],
  },
  {
    label: "B2B Services",
    type: "dropdown",
    submenu: [
      { href: "/login/partner", label: "Partner Login" },
      { href: "/login/distributor", label: "Distributor Login" },
      { href: "/login/retailer", label: "Retailer Login" },
      { href: "/b2b/commission", label: "Commission Structure" },
      { href: "/b2b/api-docs", label: "API Documentation" },
      { href: "/b2b/create-distributor", label: "Create Distributor" },
      { href: "/b2b/create-retailer", label: "Create Retailer" },
    ],
  },
  {
    label: "Support",
    type: "dropdown",
    submenu: [
      { href: "/support/help-center", label: "Help Center" },
      { href: "/support/complaints", label: "Complaints" },
      { href: "/support/raise-ticket", label: "Raise a Ticket" },
      { href: "/support/api", label: "API Support" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];

// =================== HEADER COMPONENT ======================
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [walletBalance, setWalletBalance] = useState<number | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/");
  };

  // Fetch wallet balance
  useEffect(() => {
    const fetchWalletBalance = async () => {
      if (auth.user) {
        try {
          const response = await api.get("/wallet/balance");
          setWalletBalance(parseFloat(response.data.balance));
        } catch (error) {
          console.error("Failed to fetch wallet balance:", error);
        }
      }
    };
    fetchWalletBalance();
  }, [auth.user]);

  // Scroll behavior for smart header
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setUserMenuOpen(false);
      }
      if (!(event.target as HTMLElement).closest(".nav-item-dropdown")) {
        setOpenDropdown(null);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target) && hamburgerRef.current && !hamburgerRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>
        {`
        .header-section { height: 80px; display: flex; align-items: center; }
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 85%;
          max-width: 350px;
          height: 100vh;
          background: white;
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
          padding: 30px 20px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1001;
          overflow-y: auto;
        }
        .mobile-menu.show { right: 0; }
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(4px);
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s;
        }
        .menu-overlay.show { opacity: 1; visibility: visible; }
        
        .hamburger-btn {
          width: 40px;
          height: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          background: #f1f5f9;
          border-radius: 8px;
          border: none;
          transition: 0.2s;
        }
        .hamburger-btn span {
          display: block;
          width: 20px;
          height: 2px;
          background-color: #334155;
          transition: 0.3s;
          border-radius: 2px;
        }
        .hamburger-btn.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger-btn.active span:nth-child(2) { opacity: 0; }
        .hamburger-btn.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .nav-link-btn {
          font-weight: 500;
          color: #334155;
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .nav-link-btn:hover { background: #f1f5f9; color: #4f46e5; }
        
        .nav-item-dropdown {
          height: 80px;
          display: flex;
          align-items: center;
        }

        .sub-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 260px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          padding: 8px;
          margin-top: 5px;
          
          /* Default hidden state */
          opacity: 0;
          visibility: hidden;
          transform: translateY(15px);
          pointer-events: none;
          
          /* Transition for smooth effect */
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1002;
        }

        /* Active state controlled by React */
        .sub-menu.show-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }
        
        .collapse {
          display: none;
          max-height: 0;
          transition: all 0.3s ease;
        }
        .collapse.show {
          display: block;
          max-height: 1000px;
        }
        
        .rotate-180 {
          transform: rotate(180deg);
        }
        .transition-transform {
          transition: transform 0.3s ease;
        }
        
        .dropdown-item {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          color: #4a5568;
          font-weight: 500;
          font-size: 0.925rem;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .dropdown-item:hover {
          background-color: #f7fafc;
          color: #4f46e5;
          padding-left: 20px;
        }

        .wallet-pill {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1d4ed8;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }
      `}
      </style>

      {/* Mobile Overlay */}
      <div className={`menu-overlay ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)}></div>

      <header
        className="header-section"
        style={{
          fontFamily: "'Inter', sans-serif",
          position: "sticky",
          top: 0,
          zIndex: 9999, /* Boost z-index significantly */
          backgroundColor: "#fff",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          boxShadow: lastScrollY > 10 ? "0 4px 15px rgba(0,0,0,0.08)" : "none",
          overflow: "visible" /* Critical for dropdowns */
        }}
      >
        <div className="container-fluid px-4 px-lg-5" style={{ overflow: "visible" }}>
          <div className="d-flex align-items-center justify-content-between w-100" style={{ overflow: "visible" }}>
            {/* LOGO - Left Aligned */}
            <Link to="/" className="text-decoration-none d-flex align-items-center">
              <h4 className="m-0 fw-800" style={{ color: '#1e293b', letterSpacing: '-0.5px' }}>
                Calzone<span className="text-primary">Pay</span>
              </h4>
            </Link>

            {/* DESKTOP NAV - Centered */}
            <nav className="d-none d-lg-block mx-auto">
              <ul className="list-unstyled d-flex align-items-center m-0 gap-1 gap-xl-3">
                {mainNavLinks.map((link, idx) => (
                  <li
                    key={idx}
                    className="nav-item-dropdown position-relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    style={{ height: '80px', display: 'flex', alignItems: 'center' }}
                  >
                    <button
                      className="nav-link-btn d-flex align-items-center bg-transparent border-0 px-2 py-2"
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    >
                      {link.label}
                      <i className={`material-symbols-outlined ms-1 fs-5 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}>expand_more</i>
                    </button>

                    {/* DROPDOWN MENU - Direct Style Control */}
                    <div
                      className="sub-menu-container"
                      style={{
                        display: openDropdown === link.label ? 'block' : 'none',
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        width: '240px',
                        background: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                        border: '1px solid #e2e8f0',
                        padding: '10px',
                        zIndex: 10000
                      }}
                    >
                      <ul className="list-unstyled m-0 p-0">
                        {link.submenu.map((item, i) => (
                          <li key={i} className="mb-1">
                            <Link
                              className="d-flex align-items-center px-3 py-2 text-decoration-none text-muted rounded-2 hover-bg-light"
                              to={item.href}
                              style={{ fontSize: '0.9rem', transition: '0.2s' }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#f1f5f9';
                                e.currentTarget.style.color = '#2563eb';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#64748b';
                              }}
                            >
                              <i className="fas fa-circle me-3" style={{ fontSize: '0.3rem', color: '#cbd5e1' }}></i>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            {/* RIGHT SIDE TOOLS - Right Aligned */}
            <div className="d-flex align-items-center gap-2 gap-md-3">
              {auth.user ? (
                <>
                  {/* Wallet - visible on desktop and tablet */}
                  <div className="wallet-pill d-none d-sm-flex">
                    <FaWallet className="text-primary" />
                    <span>₹{walletBalance !== null ? walletBalance.toFixed(2) : "0.00"}</span>
                  </div>

                  {/* Profile Dropdown (Desktop) */}
                  <div className="position-relative d-none d-lg-block" ref={dropdownRef}>
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="d-flex align-items-center gap-2 bg-transparent border-0 p-0"
                    >
                      <div className="bg-light p-1 rounded-circle border">
                        <FaUserCircle size={32} className="text-secondary" />
                      </div>
                      <span className="fw-semibold text-dark small">{auth.user.name.split(' ')[0]}</span>
                    </button>
                    {userMenuOpen && (
                      <div className="position-absolute bg-white shadow-lg rounded-3 mt-2 p-2" style={{ right: 0, minWidth: '200px', border: '1px solid #e2e8f0' }}>
                        <div className="px-3 py-2 border-bottom mb-2">
                          <p className="m-0 fw-bold text-dark small">{auth.user.name}</p>
                          <p className="m-0 text-muted x-small" style={{ fontSize: '0.75rem' }}>{auth.user.email}</p>
                        </div>
                        <Link to="/dashboard" className="dropdown-item d-block text-decoration-none py-2" onClick={() => setUserMenuOpen(false)}>
                          <i className="fas fa-th-large me-2"></i> Dashboard
                        </Link>
                        <button onClick={handleLogout} className="dropdown-item w-100 text-start text-danger border-0 bg-transparent py-2">
                          <i className="fas fa-sign-out-alt me-2"></i> Logout
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="d-none d-lg-flex gap-2">
                  <Link to="/login" className="btn btn-light fw-600 px-4 rounded-3 border">Login</Link>
                  <Link to="/signup" className="btn btn-primary fw-600 px-4 rounded-3 shadow-sm">Sign Up</Link>
                </div>
              )}

              {/* HAMBURGER (Mobile) */}
              <button
                ref={hamburgerRef}
                className={`hamburger-btn d-lg-none ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE SIDEBAR */}
        <div ref={mobileMenuRef} className={`mobile-menu d-lg-none ${menuOpen ? "show" : ""}`}>
          <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
            <h5 className="m-0 fw-800 text-primary">Menu</h5>
            <button className="btn-close" onClick={() => setMenuOpen(false)}></button>
          </div>

          {auth.user && (
            <div className="mb-4 bg-light p-3 rounded-3 border">
              <div className="d-flex align-items-center gap-3 mb-3">
                <FaUserCircle size={48} className="text-primary" />
                <div>
                  <h6 className="m-0 fw-bold">{auth.user.name}</h6>
                  <p className="m-0 text-muted small">{auth.user.email}</p>
                </div>
              </div>
              <div className="wallet-pill w-100 justify-content-center">
                <FaWallet /> <span>Wallet Balance: ₹{walletBalance !== null ? walletBalance.toFixed(2) : "0.00"}</span>
              </div>
            </div>
          )}

          <ul className="list-unstyled">
            {mainNavLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  className="w-100 d-flex justify-content-between align-items-center bg-transparent border-0 p-3 rounded-3 hover-bg-light"
                  style={{ transition: '0.2s', background: openDropdown === link.label ? '#f8fafc' : 'transparent' }}
                >
                  <span className="fw-600">{link.label}</span>
                  <i className={`material-symbols-outlined transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}>expand_more</i>
                </button>
                <div className={`collapse ${openDropdown === link.label ? 'show' : ''}`}>
                  <ul className="ps-3 mt-1 list-unstyled border-start ms-3">
                    {link.submenu.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.href}
                          className="d-block py-2 px-3 text-decoration-none text-muted hover-text-primary small"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-top">
            {auth.user ? (
              <div className="d-grid gap-2">
                <Link to="/dashboard" className="btn btn-primary-light text-primary fw-bold" onClick={() => setMenuOpen(false)}>Go to Dashboard</Link>
                <button className="btn btn-danger-light text-danger fw-bold" onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div className="d-grid gap-2">
                <Link to="/login" className="btn btn-primary fw-bold py-3 shadow-none" onClick={() => setMenuOpen(false)}>Login Now</Link>
                <Link to="/signup" className="btn btn-outline-primary fw-bold py-3" onClick={() => setMenuOpen(false)}>Create Account</Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
