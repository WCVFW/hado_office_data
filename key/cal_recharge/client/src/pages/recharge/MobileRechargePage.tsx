import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import WorkingSectionThree from "../../components/WorkingSectionThree";

const operatorCategoryMap = {
  Airtel: { category: "prepaid", id: 1 },
  Vi: { category: "prepaid", id: 2 },
  Jio: { category: "prepaid", id: 4 },
  BSNL: { category: "prepaid", id: 8 },
  "Airtel Postpaid": { category: "postpaid", id: 43 },
  "Vi Postpaid": { category: "postpaid", id: 45 },
  "Jio Postpaid": { category: "postpaid", id: 83 },
  "BSNL Postpaid": { category: "postpaid", id: 44 },
};

const circleData = [
  { name: "Andhra Pradesh", id: "5" }, { name: "Assam", id: "19" }, { name: "Bihar Jharkhand", id: "17" },
  { name: "Chennai", id: "23" }, { name: "Delhi NCR", id: "1" }, { name: "Gujarat", id: "8" },
  { name: "Haryana", id: "16" }, { name: "Himachal Pradesh", id: "21" }, { name: "Jammu Kashmir", id: "22" },
  { name: "Karnataka", id: "7" }, { name: "Kerala", id: "14" }, { name: "Kolkata", id: "3" },
  { name: "Madhya Pradesh Chhattisgarh", id: "10" }, { name: "Maharashtra", id: "4" }, { name: "Mumbai", id: "2" },
  { name: "North East", id: "20" }, { name: "Odisha", id: "18" }, { name: "Punjab", id: "15" },
  { name: "Rajasthan", id: "13" }, { name: "Tamil Nadu", id: "6" }, { name: "UP East", id: "8" },
  { name: "UP West", id: "11" }, { name: "West Bengal", id: "12" },
];

const RechargePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [categorizedPlans, setCategorizedPlans] = useState<Record<string, any[]>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const [allOperators, setAllOperators] = useState<any[]>([]);
  const [operatorName, setOperatorName] = useState<string | null>(null);
  const [operatorCode, setOperatorCode] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [circleCode, setCircleCode] = useState<string>("");
  const [rechargeType, setRechargeType] = useState<"prepaid" | "postpaid">("prepaid");
  const [amount, setAmount] = useState("");
  const [walletBalance, setWalletBalance] = useState(0);

  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const operatorList = Object.entries(operatorCategoryMap).map(([name, details]) => ({
      name, category: details.category, id: String(details.id),
    }));
    setAllOperators(operatorList);
  }, []);

  const filteredOperators = allOperators.filter((op) => op.category === rechargeType);

  useEffect(() => {
    const fetchWalletBalance = async () => {
      if (auth.user && auth.token) {
        try {
          const response = await api.get('/dashboard/b2c');
          setWalletBalance(response.data.walletBalance);
        } catch (err: any) {
          if (err.response?.status !== 401) {
            console.error("Failed to fetch wallet balance:", err);
          }
        }
      }
    };
    fetchWalletBalance();
  }, [auth.user, auth.token]);

  useEffect(() => {
    setOperatorCode("");
    setOperatorName(null);
    setCategorizedPlans({});
    setError(null);
    setCircleCode("");
    setAmount("");
  }, [rechargeType]);

  const handleFetchPlansClick = async () => {
    setLoading(true);
    setError(null);
    if (!mobileNumber || mobileNumber.length < 10) {
      setLoading(false);
      Swal.fire("Error", "Enter a valid mobile number.", "error");
      return;
    }
    if (!operatorCode) {
      setLoading(false);
      Swal.fire("Warning", "Select an operator.", "warning");
      return;
    }
    if (rechargeType === "postpaid") {
      if (!amount || Number(amount) <= 0) {
        setLoading(false);
        Swal.fire("Warning", "Enter a valid amount.", "warning");
        return;
      }
      // For postpaid, we don't fetch plans, we just show the entered amount to proceed
      const customPlan = [{
        id: 'postpaid-custom',
        amount: Number(amount),
        validity: 'Bill Payment',
        desc: 'Postpaid Bill Payment'
      }];
      setCategorizedPlans({ "Bill Amount": customPlan });
      setActiveTab("Bill Amount");
      setShowModal(true);
      setLoading(false);
      return;
    }

    if (rechargeType === "prepaid" && !circleCode) {
      setLoading(false);
      Swal.fire("Warning", "Select your circle.", "warning");
      return;
    }

    try {
      const plansResp = await api.get(`/payment/plans/${operatorCode}/${circleCode}`);
      const respData = plansResp.data;
      if (!respData || respData.error) {
        setError(respData.error || "No plans found");
        setShowModal(true);
        return;
      }
      const processed: Record<string, any[]> = {};
      for (const cat in respData) {
        if (Array.isArray(respData[cat])) {
          processed[cat] = respData[cat].map((p: any, i: number) => ({
            id: `${cat}-${i}`,
            amount: Number(p.rs || p.Amount || 0),
            validity: p.validity || "N/A",
            desc: p.desc || p.Description || "No description",
          }));
        }
      }
      setCategorizedPlans(processed);
      setActiveTab(Object.keys(processed)[0] || null);
      setShowModal(true);
    } catch (e: any) {
      setError(e.response?.data?.message || "Failed to load plans.");
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const processRecharge = async (plan: any, mode: 'wallet' | 'online') => {
    if (!auth.user) {
      Swal.fire({ title: "Login Required", text: "Please login to proceed", icon: "warning", showCancelButton: true }).then(r => r.isConfirmed && navigate("/login"));
      return;
    }

    setLoading(true);
    const total = plan.amount;
    const rechargeData = {
      mobile_number: mobileNumber,
      operator: operatorName,
      operator_code: operatorCode,
      amount: total,
      plan_amount: plan.amount,
      agent_commission: total * 0.01,
      company_commission: total * 0.005,
      api_commission: total * 0.005
    };

    try {
      if (mode === 'wallet') {
        if (walletBalance < total) {
          Swal.fire("Error", "Insufficient wallet balance!", "error");
          setLoading(false); return;
        }
        await api.post('/payment/wallet-recharge', rechargeData);
        Swal.fire("Success", "Recharge Successful!", "success");
        setShowModal(false);
        setMobileNumber(""); setAmount("");
      } else {
        const orderRes = await api.post("/payment/razorpay-order", { amount: Math.round(total * 100), mobile_number: mobileNumber, operator: operatorName });
        const options = {
          key: "rzp_test_v9bZpQvmrVnUzZ",
          ...orderRes.data,
          handler: async (response: any) => {
            await api.post("/payment/verify", { ...response, ...rechargeData });
            Swal.fire("Success", "Recharge Successful!", "success");
            setShowModal(false);
            setMobileNumber(""); setAmount("");
          }
        };
        new (window as any).Razorpay(options).open();
      }
    } catch (e) {
      Swal.fire("Error", "Payment failed.", "error");
    } finally {
      setLoading(false);
    }
  };

  const toggleStyles = `
    .form-section-card { background: #ffffff; border-radius: 16px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); padding: 20px !important; }
    .input-group-custom { background: #ffffff; border: 1px solid #d1d5db; border-radius: 8px; padding: 3px; transition: 0.2s; }
    .input-group-custom:focus-within { border-color: #3b33d1; box-shadow: 0 0 0 3px rgba(59,51,209,0.1); }
    .label-custom { color: #4b5563; font-weight: 600; font-size: 0.85rem; margin-bottom: 4px; }
    .tab-btn-custom { padding: 8px 15px; border: none; background: transparent; color: #6b7280; font-weight: 600; position: relative; transition: 0.3s; font-size: 0.9rem; }
    .tab-btn-custom.active { color: #3b33d1; }
    .tab-btn-custom.active::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: #3b33d1; border-radius: 10px; }
    .service-link-card { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 20px; transition: 0.3s; text-decoration: none; display: flex; align-items: center; }
    .service-link-card:hover { border-color: #3b33d1; transform: translateY(-3px); box-shadow: 0 8px 15px rgba(0,0,0,0.05); }
    
    .hero-image-col { min-height: 400px; position: relative; overflow: hidden; }
    .hero-form-col { padding: 1rem; background: #f0f2f5; display: flex; align-items: center; justify-content: center; }
    
    .hero-overlay-gradient {
      background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.8) 90%, rgba(0,0,0,0.95) 100%);
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 3rem;
    }
    .hero-text-title {
      color: #fff; font-weight: 800; line-height: 1.1; margin-bottom: 0.75rem;
      text-shadow: 0 2px 10px rgba(0,0,0,0.6);
      font-size: 2rem;
    }
    .hero-text-subtitle {
      color: rgba(255,255,255,0.95); font-weight: 500; letter-spacing: 0.5px;
      text-shadow: 0 1px 2px rgba(0,0,0,0.6);
      font-size: 1.1rem;
    }
    /* Responsive Font Sizes using Media Queries for better control */
    @media (min-width: 992px) {
      .hero-image-col { min-height: auto; }
      .hero-form-col { padding: 2rem; }
      .hero-text-title { font-size: 2.5rem; }
    }
    @media (min-width: 1400px) {
      .hero-text-title { font-size: 3rem; }
      .hero-text-subtitle { font-size: 1.25rem; }
    }

    input.form-control, select.form-select { font-size: 0.9rem; padding: 0.4rem 0.6rem; }
    .btn { font-size: 0.9rem; padding: 0.5rem 1rem; }
  `;

  return (
    <div className="page-wrapper overflow-hidden">
      <style>{toggleStyles}</style>

      {/* HERO SECTION - CORPORATE PROFESSIONAL */}
      <section className="position-relative w-100" style={{ background: '#fff' }}>
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-stretch">
            {/* Left Side: Image */}
            <div className="col-lg-6 d-none d-lg-block position-relative hero-image-col">
              <img src="/mobile_recharge_lifestyle_v2.png" alt="Mobile Recharge" className="w-100 h-100 object-fit-cover" style={{ objectPosition: 'top' }} />
              <div className="hero-overlay-gradient">
                <div className="text-start mb-4">
                  <h3 className="hero-text-title">STAY CONNECTED.</h3>
                  <div className="bg-white rounded-pill mb-3" style={{ width: '60px', height: '5px' }}></div>
                  <p className="hero-text-subtitle mb-0">Instant Mobile Recharge Anytime.</p>
                </div>
              </div>
            </div>

            {/* Right Side: Professional Form */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center py-4" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
              <div className="form-section-card w-100 m-3" style={{ maxWidth: '420px', zIndex: 10 }}>

                <h2 className="fw-bold text-dark h4 mb-4">Mobile Recharge</h2>

                {/* Tabs */}
                <div className="d-flex p-1 mb-4 rounded-3 border" style={{ background: '#f8f9fa', borderColor: '#e9ecef' }}>
                  <button className={`flex-fill py-2 rounded-2 fw-semibold border-0 transition-all ${rechargeType === 'prepaid' ? 'bg-white text-dark shadow-sm' : 'bg-transparent text-secondary'}`}
                    onClick={() => setRechargeType('prepaid')} style={{ fontSize: '0.9rem' }}>Prepaid</button>
                  <button className={`flex-fill py-2 rounded-2 fw-semibold border-0 transition-all ${rechargeType === 'postpaid' ? 'bg-white text-dark shadow-sm' : 'bg-transparent text-secondary'}`}
                    onClick={() => setRechargeType('postpaid')} style={{ fontSize: '0.9rem' }}>Postpaid</button>
                </div>

                <div className="d-flex flex-column gap-3">
                  {/* Mobile Number */}
                  <div>
                    <label className="form-label fw-medium text-secondary small mb-1">Mobile Number</label>
                    <div className="input-group border rounded-3 overflow-hidden transition-all focus-ring">
                      <span className="input-group-text bg-light border-0 text-muted ps-3 fw-medium">+91</span>
                      <input type="text" className="form-control border-0 shadow-none py-2 bg-white"
                        placeholder="Enter 10 digit number"
                        value={mobileNumber}
                        onChange={e => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        style={{ fontSize: '1rem' }} />
                    </div>
                  </div>

                  {/* Operator */}
                  <div>
                    <label className="form-label fw-medium text-secondary small mb-1">Operator</label>
                    <select className="form-select border rounded-3 shadow-none py-2 bg-white text-dark"
                      value={operatorCode}
                      onChange={e => {
                        const op = filteredOperators.find(o => o.id === e.target.value);
                        setOperatorCode(e.target.value);
                        setOperatorName(op ? op.name : null);
                      }}
                      style={{ fontSize: '1rem' }}>
                      <option value="">Select Operator</option>
                      {filteredOperators.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
                    </select>
                  </div>

                  {/* Circle (Prepaid Only) */}
                  {rechargeType === 'prepaid' && (
                    <div>
                      <label className="form-label fw-medium text-secondary small mb-1">Circle</label>
                      <select className="form-select border rounded-3 shadow-none py-2 bg-white text-dark"
                        value={circleCode}
                        onChange={e => setCircleCode(e.target.value)}
                        style={{ fontSize: '1rem' }}>
                        <option value="">Select Circle</option>
                        {circleData.map(c => <option key={c.name} value={c.id}>{c.name}</option>)}
                      </select>
                    </div>
                  )}

                  {/* Amount (Postpaid Only) */}
                  {rechargeType === 'postpaid' && (
                    <div>
                      <label className="form-label fw-medium text-secondary small mb-1">Amount</label>
                      <div className="input-group border rounded-3 overflow-hidden transition-all focus-ring">
                        <span className="input-group-text bg-light border-0 text-muted ps-3 fw-medium">₹</span>
                        <input type="number" className="form-control border-0 shadow-none py-2 bg-white"
                          placeholder="Enter bill amount"
                          value={amount}
                          onChange={e => setAmount(e.target.value)}
                          style={{ fontSize: '1rem' }} />
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="mt-2">
                    <button className="btn w-100 py-3 rounded-3 text-white fw-bold shadow-sm"
                      style={{ background: '#3b33d1' }}

                      onClick={handleFetchPlansClick}
                      disabled={loading}>
                      {loading ? <i className="fas fa-spinner fa-spin"></i> : "Proceed"}
                    </button>
                  </div>

                  {/* Operator Logos */}
                  <div className="mt-4 pt-3 border-top text-center">
                    <p className="small text-muted mb-3 fw-medium opacity-75">RECHARGE FOR</p>
                    <div className="d-flex justify-content-center gap-3 align-items-center grayscale-hover-container">

                      <div className="operator-logo-box" title="Jio">
                        <img src="/assets/img/operators/jio.png" alt="Jio" className="img-fluid" />
                      </div>

                      <div className="operator-logo-box" title="Airtel">
                        <img src="/assets/img/operators/airtel.png" alt="Airtel" className="img-fluid" />
                      </div>

                      <div className="operator-logo-box" title="Vi">
                        <img src="/assets/img/operators/vi.png" alt="Vi" className="img-fluid" />
                      </div>

                      <div className="operator-logo-box" title="BSNL">
                        <img src="/assets/img/operators/bsnl.png" alt="BSNL" className="img-fluid" />
                      </div>

                    </div>
                  </div>

                  <style>{`
                      .operator-logo-box {
                        width: 50px;
                        height: 50px;
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #fff;
                        border: 1px solid #f0f0f0;
                        padding: 6px;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                        transition: transform 0.2s;
                        overflow: hidden;
                      }
                      .operator-logo-box:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
                      .operator-logo-box img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                      }
                    `}</style>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE BAR */}
      <section className="position-relative" style={{ marginTop: '-40px', zIndex: 100 }}>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {[{ icon: 'bolt', title: 'Flash Recharge', sub: 'Instant processing' }, { icon: 'shield-heart', title: 'Safe & Secure', sub: 'PCI-DSS Compliant' }, { icon: 'headset', title: 'Expert Support', sub: '24/7 dedicated help' }].map((s, i) => (
              <div className="col-md-4 col-12" key={i}>
                <div className="service-link-card h-100 shadow-sm">
                  <div className="rounded-circle bg-light p-4 me-4 text-primary" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fas fa-${s.icon} fa-2x`}></i>
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold text-dark">{s.title}</h5>
                    <p className="text-muted mb-0 small">{s.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS MODAL */}
      {
        showModal && (
          <div className="modal show d-block" style={{ background: 'rgba(0,0,0,0.5)', zIndex: 2000 }}>
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0 rounded-4">
                <div className="modal-header border-0 p-4">
                  <h5 className="modal-title fw-bold">Select a Plan</h5>
                  <button type="button" className="btn-close shadow-none" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body p-4">
                  {error ? <div className="text-center py-5 text-muted">{error}</div> : (
                    <>
                      <ul className="nav nav-pills mb-4">
                        {Object.keys(categorizedPlans).map(cat => (
                          <li className="nav-item" key={cat}>
                            <button className={`nav-link rounded-pill me-2 ${activeTab === cat ? 'active' : 'bg-light text-dark'}`} onClick={() => setActiveTab(cat)}>{cat}</button>
                          </li>
                        ))}
                      </ul>
                      <div className="row g-3">
                        {(categorizedPlans[activeTab || ''] || []).map(plan => (
                          <div className="col-12" key={plan.id}>
                            <div className="p-4 rounded-4 border hover-lift" style={{ transition: '0.2s' }}>
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <h4 className="fw-bold text-primary mb-0">₹{plan.amount}</h4>
                                <span className="badge bg-light text-dark rounded-pill px-3">Validity: {plan.validity}</span>
                              </div>
                              <p className="text-muted small mb-3">{plan.desc}</p>
                              <div className="d-flex gap-2">
                                <button className="btn btn-primary" onClick={() => processRecharge(plan, 'wallet')}>Wallet (₹{walletBalance.toFixed(2)})</button>
                                <button className="btn btn-outline-primary" onClick={() => processRecharge(plan, 'online')}>Online Payment</button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      }

      <div className="container py-5 mt-5">
        <WorkingSectionThree />
      </div>
    </div >
  );
};

export default RechargePage;
