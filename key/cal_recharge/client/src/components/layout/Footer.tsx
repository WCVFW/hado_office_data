import React from 'react';
import { Link } from 'react-router-dom';
import { mainNavLinks } from '../layout/Navbar'; // Ensure this path is correct

const FooterStyles = () => (
  <style>
    {`
      .footer-main {
        background: linear-gradient(180deg, #0f172a 0%, #020617 100%);
        color: #94a3b8;
        padding: 80px 0 0;
        font-family: 'Inter', sans-serif;
      }
      .footer-brand h4 {
        font-size: 1.8rem;
        letter-spacing: -1px;
      }
      .footer-brand p {
        line-height: 1.6;
        font-size: 0.95rem;
        margin-top: 15px;
        color: #64748b;
      }
      .footer-heading {
        color: #f8fafc;
        font-weight: 700;
        font-size: 1.1rem;
        margin-bottom: 25px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .footer-link-item {
        margin-bottom: 12px;
      }
      .footer-link {
        color: #94a3b8;
        text-decoration: none !important;
        transition: all 0.3s ease;
        font-size: 0.95rem;
        display: inline-block;
      }
      .footer-link:hover {
        color: #3b82f6;
        transform: translateX(5px);
      }
      .footer-contact-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;
        color: #94a3b8;
        font-size: 0.95rem;
      }
      .footer-contact-icon {
        color: #3b82f6;
        font-size: 1.2rem;
        margin-right: 15px;
        margin-top: 3px;
      }
      .social-pill {
        width: 45px;
        height: 45px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        color: #94a3b8;
        margin-right: 12px;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.05);
      }
      .social-pill:hover {
        background: #3b82f6;
        color: #ffffff;
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        border-color: #3b82f6;
      }
      .app-badge {
        background: #1e293b;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 10px 20px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        transition: all 0.3s ease;
        text-decoration: none !important;
        color: white;
      }
      .app-badge:hover {
        background: #334155;
        border-color: #3b82f6;
      }
      .footer-divider {
        height: 1px;
        background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%);
        margin: 60px 0 0;
      }
      .footer-bottom {
        padding: 30px 0;
        background: #020617;
        font-size: 0.85rem;
        color: #475569;
      }
      .footer-glow {
        position: absolute;
        width: 300px;
        height: 300px;
        background: #3b82f6;
        filter: blur(150px);
        opacity: 0.05;
        pointer-events: none;
      }
    `}
  </style>
);

const Footer: React.FC = () => {
  return (
    <>
      <FooterStyles />
      <footer className="footer-main position-relative overflow-hidden">
        <div className="footer-glow top-0 start-0"></div>
        <div className="container position-relative">
          <div className="row g-5">
            {/* BRANDING SECTION */}
            <div className="col-lg-4 col-md-12">
              <div className="footer-brand">
                <Link to="/" className="text-decoration-none">
                  <h4 className="text-white fw-bold mb-0">Calzone<span className="text-primary fw-light">Pay</span></h4>
                </Link>
                <p>
                  Elevating your digital experience with lightning-fast payments, absolute security, and a user-first approach. The future of financial convenience is here.
                </p>
                <div className="mt-4 d-flex">
                  <a href="#" className="social-pill"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social-pill"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-pill"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="social-pill"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            {/* QUICK LINKS SECTION */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <h5 className="footer-heading">Services</h5>
              <div className="d-flex flex-column">
                <Link to="/recharge" className="footer-link footer-link-item">Mobile Recharge</Link>
                <Link to="/dth" className="footer-link footer-link-item">DTH Recharge</Link>
                <Link to="/electricity" className="footer-link footer-link-item">Electricity Bill</Link>
                <Link to="/gas" className="footer-link footer-link-item">Gas Bill</Link>
                <Link to="/water" className="footer-link footer-link-item">Water Bill</Link>
              </div>
            </div>

            {/* COMPANY SECTION */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <h5 className="footer-heading">Company</h5>
              <div className="d-flex flex-column">
                <Link to="/about" className="footer-link footer-link-item">About Us</Link>
                <Link to="/contact" className="footer-link footer-link-item">Contact</Link>
                <Link to="/terms" className="footer-link footer-link-item">Terms of Service</Link>
                <Link to="/privacy" className="footer-link footer-link-item">Privacy Policy</Link>
                <Link to="/careers" className="footer-link footer-link-item">Careers</Link>
              </div>
            </div>

            {/* CONTACT & APP SECTION */}
            <div className="col-lg-4 col-md-4">
              <h5 className="footer-heading">Get in Touch</h5>
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt footer-contact-icon"></i>
                <span>123 Elite Circle, Tech Hub, <br />Chennai, TN - 600028</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-envelope footer-contact-icon"></i>
                <span>support@calzonepay.com</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone-alt footer-contact-icon"></i>
                <span>+91 98765 43210</span>
              </div>

              <div className="mt-4 d-flex gap-2">
                <a href="#" className="app-badge flex-grow-1">
                  <i className="fab fa-apple fa-lg me-2 text-white"></i>
                  <div className="text-start">
                    <small className="d-block opacity-50" style={{ fontSize: '0.65rem' }}>App Store</small>
                    <span className="fw-bold small">Download</span>
                  </div>
                </a>
                <a href="#" className="app-badge flex-grow-1">
                  <i className="fab fa-google-play fa-lg me-2 text-white"></i>
                  <div className="text-start">
                    <small className="d-block opacity-50" style={{ fontSize: '0.65rem' }}>Google Play</small>
                    <span className="fw-bold small">GET IT ON</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; {new Date().getFullYear()} Calzone Pay. Crafted with passion for a digital India.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="d-flex justify-content-center justify-content-md-end gap-4">
                  <Link to="/security" className="text-decoration-none text-reset hover-white transition-all">Security</Link>
                  <Link to="/cookies" className="text-decoration-none text-reset hover-white transition-all">Cookies</Link>
                  <Link to="/sitemap" className="text-decoration-none text-reset hover-white transition-all">Sitemap</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
