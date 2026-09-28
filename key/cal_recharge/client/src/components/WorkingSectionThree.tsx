import React, { useState } from "react";

const WorkingSectionThree: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
        section {
          font-family: 'Poppins', sans-serif;
        }
        .section-title {
          font-weight: 800;
          color: #1e293b;
          letter-spacing: -0.5px;
        }
        .text-primary-custom {
          color: #3b33d1 !important;
        }
        .bg-gradient-custom {
          background: linear-gradient(135deg, #f8faff 0%, #eef2ff 100%);
        }
        .hover-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0,0,0,0.04);
        }
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(59, 51, 209, 0.08);
          border-color: rgba(59, 51, 209, 0.1);
        }
        .step-icon-circle {
          width: 80px;
          height: 80px;
          background: #3b33d1;
          color: white;
          font-size: 1.75rem;
          box-shadow: 0 10px 20px rgba(59, 51, 209, 0.2);
        }
        .referral-icon-box {
          width: 50px;
          height: 50px;
          background: rgba(59, 51, 209, 0.05);
          color: #3b33d1;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        .faq-button {
          background: #fff;
          border: 1px solid #f1f5f9;
          color: #334155;
          transition: all 0.2s;
        }
        .faq-button:not(.collapsed) {
          background: #f8fafc;
          color: #3b33d1;
          border-color: rgba(59, 51, 209, 0.1);
          box-shadow: none;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* --- REFER & EARN --- */}
      <section className="py-5 bg-gradient-custom">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="pe-lg-5 animate-fade-in">
                <div className="d-inline-block px-3 py-1 rounded-pill bg-white border mb-3">
                  <span className="text-primary-custom fw-bold small tracking-wider">REFERRAL PROGRAM</span>
                </div>
                <h2 className="display-5 section-title mb-4">
                  Share the love, <span className="text-primary-custom">Earn real cash.</span>
                </h2>
                <p className="lead text-muted mb-5" style={{ lineHeight: '1.8' }}>
                  Invite your friends to Calzone Pay. For every friend who joins and makes their first recharge, you simply get rewarded. No limits.
                </p>

                <div className="d-grid gap-3 mb-5">
                  {[
                    { title: "Invite Friends", desc: "Share your unique referral link", icon: "share-alt" },
                    { title: "They Join", desc: "Friend signs up & recharges", icon: "user-plus" },
                    { title: "You Earn", desc: "Get cashback instantly to wallet", icon: "wallet" }
                  ].map((step, idx) => (
                    <div key={idx} className="d-flex align-items-center p-3 rounded-4 bg-white shadow-sm border border-light card-hover-effect">
                      <div className="referral-icon-box me-3 text-primary-custom">
                        <i className={`fas fa-${step.icon}`}></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-0 text-dark">{idx + 1}. {step.title}</h6>
                        <span className="text-muted small">{step.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="btn btn-lg text-white px-5 py-3 rounded-pill shadow-lg hover-lift fw-bold"
                  style={{ background: '#3b33d1', letterSpacing: '0.5px' }}>
                  Get Your Referral Link <i className="fas fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle w-75 h-75 bg-primary rounded-circle opacity-10 blur-3xl" style={{ filter: 'blur(60px)', zIndex: 0 }}></div>
                <img src="../assets/img/refer/referthumb.png" alt="Refer and Earn" className="img-fluid position-relative hover-lift" style={{ zIndex: 1, maxHeight: '550px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-lg-5">
          <div className="text-center mb-5 pb-3">
            <h2 className="display-5 section-title mb-3">How It Works</h2>
            <p className="text-muted mx-auto lead" style={{ maxWidth: '650px' }}>
              We've simplified payments to just 3 steps. Secure, fast, and hassle-free.
            </p>
          </div>

          <div className="row g-4 text-center">
            {[
              { step: '01', title: 'Create Account', desc: 'Sign up for free in seconds using just your mobile number.', icon: 'user-plus' },
              { step: '02', title: 'Enter Details', desc: 'Select your provider and enter your consumer number.', icon: 'desktop' },
              { step: '03', title: 'Pay & Relax', desc: 'Pay securely and get instant confirmation SMS.', icon: 'check-double' }
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="p-5 rounded-5 h-100 bg-white hover-card text-center position-relative">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4 step-icon-circle">
                    <i className={`fas fa-${item.icon}`}></i>
                  </div>
                  <h3 className="h4 fw-bold mb-3 text-dark">{item.title}</h3>
                  <p className="text-muted mb-0">{item.desc}</p>
                  <span className="position-absolute top-0 end-0 m-4 text-muted opacity-25 fw-bolder" style={{ fontSize: '4rem', lineHeight: 1 }}>{item.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-5" style={{ background: '#f8fafc' }}>
        <div className="container py-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <span className="text-primary-custom fw-bold tracking-wider small">SUPPORT & HELP</span>
                <h2 className="display-5 section-title mt-2 mb-3">Frequently Asked Questions</h2>
                <p className="text-muted">Have a question? We're here to help.</p>
              </div>

              <div className="accordion d-grid gap-3" id="faqAccordion">
                {[
                  { q: 'What services can I pay for on Calzone Pay?', a: 'You can pay for Mobile Recharge (Prepaid/Postpaid), DTH, Electricity, Water, Gas, Landline, Broadband, and more—all from one platform.' },
                  { q: 'Is my transaction secure?', a: 'Yes. We use 256-bit encryption and are PCI-DSS compliant. Your data and money are processed through secure gateways like Razorpay.' },
                  { q: 'Can I get a refund if my recharge fails?', a: 'Absolutely. If a recharge fails due to technical issues, the amount is automatically refunded to your Calzone Wallet instantly.' },
                  { q: 'How do I contact customer support?', a: 'You can reach our 24/7 support team via the "Help" section in the app or email us at support@calzonepay.com.' }
                ].map((item, i) => (
                  <div className="accordion-item border-0 rounded-4 overflow-hidden shadow-sm" key={i}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button p-4 fw-bold shadow-none faq-button ${openFaq === i ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{ fontSize: '1.1rem' }}
                      >
                        {item.q}
                      </button>
                    </h2>
                    {openFaq === i && (
                      <div className="accordion-body bg-white p-4 pt-0 text-muted border-top-0 animate-fade-in" style={{ lineHeight: '1.7' }}>
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingSectionThree;
