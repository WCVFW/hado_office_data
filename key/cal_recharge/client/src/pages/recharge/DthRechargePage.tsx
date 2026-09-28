import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import WorkingSectionThree from "../../components/WorkingSectionThree";

// --- DTH Operator Data ---
const dthOperators = [
  { name: "Tata Play (Tata Sky)", id: "32", code: "TATASKY", logo: "/assets/img/operators/dth_tata_play.png" },
  { name: "Dish TV", id: "31", code: "DISHTV", logo: "/assets/img/operators/dth_dish_tv.png" },
  { name: "Sun Direct", id: "33", code: "SUNDIRECT", logo: "/assets/img/operators/dth_sun_direct.png" },
  { name: "Videocon D2H", id: "34", code: "VIDEOCON", logo: "/assets/img/operators/dth_videocon.png" },
  { name: "Airtel Digital TV", id: "36", code: "AIRTEL", logo: "/assets/img/operators/dth_airtel.png" },
];

interface RechargeDetails {
  mobile_number: string;
  operator: string;
  operator_code: string;
  plan_amount: number;
  amount: number;
  agent_commission: number;
  company_commission: number;
  api_commission: number;
}

const DTHRechargePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showPlansModal, setShowPlansModal] = useState(false);
  const [dthPlans, setDthPlans] = useState<Record<string, any[]>>({});
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalError, setModalError] = useState<string | null>(null);

  const [step, setStep] = useState(1);
  const [walletBalance, setWalletBalance] = useState(0);
  const [rechargeDetails, setRechargeDetails] = useState<RechargeDetails | null>(null);

  const [operator, setOperator] = useState("");
  const [subscriberId, setSubscriberId] = useState("");
  const [amount, setAmount] = useState("");

  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWalletBalance = async () => {
      if (auth.user && auth.token) {
        try {
          const response = await api.get('/dashboard/b2c');
          setWalletBalance(parseFloat(response.data.walletBalance) || 0);
        } catch (err: any) {
          if (err.response?.status !== 401) {
            console.error("Failed to fetch wallet balance:", err);
          }
        }
      }
    };
    fetchWalletBalance();
  }, [auth.user]);

  const handleBrowsePlans = async () => {
    if (!operator) {
      Swal.fire("Select Operator", "Please select an operator first.", "warning");
      return;
    }
    setLoading(true);
    setModalError("");
    try {
      const res = await api.get(`/payment/dth-plans/${operator}`);
      if (res.data && res.data.plans) {
        setDthPlans(res.data.plans);
        setActiveTab(Object.keys(res.data.plans)[0] || "");
      } else {
        setDthPlans({});
        setModalError("No plans found for this operator.");
      }
    } catch (e) {
      setModalError("Could not fetch plans. Please try again later.");
    } finally {
      setLoading(false);
      setShowPlansModal(true);
    }
  };

  const handleFetchCustomerInfo = async () => {
    if (!operator || !subscriberId) {
      return Swal.fire("Required", "Select Operator and enter Subscriber ID", "warning");
    }
    setLoading(true);
    try {
      const res = await api.post('/payment/dth-info', { operator, subscriberId });
      if (res.data.status === '1' || res.data.status === 1) {
        Swal.fire({
          title: 'Customer Details',
          html: `
                      <div class="text-start">
                          <p><strong>Name:</strong> ${res.data.Customername}</p>
                          <p><strong>Balance:</strong> ₹${res.data.Balance}</p>
                          <p><strong>Plan:</strong> ${res.data.CurrentPlan}</p>
                          <p><strong>Monthly Recharge:</strong> ₹${res.data.MonthlyRecharge}</p>
                          <p><strong>Next Date:</strong> ${res.data.NextRecharge}</p>
                      </div>
                  `,
          icon: 'info'
        });
        if (res.data.MonthlyRecharge) setAmount(res.data.MonthlyRecharge.toString());
      } else {
        Swal.fire("Info", "Could not fetch details. Please check ID/Operator.", "info");
      }
    } catch (e) {
      Swal.fire("Error", "Failed to fetch customer info.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleProceedToPayment = async () => {
    if (!subscriberId || !operator || !amount) {
      Swal.fire("Error", "All fields are required.", "error");
      return;
    }
    if (!auth.user) {
      Swal.fire({ title: "Login Required", icon: "warning", showCancelButton: true }).then(r => r.isConfirmed && navigate("/login"));
      return;
    }

    setLoading(true);
    const selectedOp = dthOperators.find(op => op.id === operator);
    try {
      const feesRes = await api.post("/payment/calculate-fees", { amount });
      setRechargeDetails({
        mobile_number: subscriberId,
        operator: selectedOp?.name || "DTH",
        operator_code: selectedOp?.code || "",
        plan_amount: feesRes.data.planAmount,
        amount: feesRes.data.totalAmount,
        agent_commission: feesRes.data.agentCommission,
        company_commission: feesRes.data.companyCommission,
        api_commission: feesRes.data.apiCommission,
      });
      setStep(2);
    } catch (e) {
      Swal.fire("Error", "Fee calculation failed.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleWalletPayment = async () => {
    if (!rechargeDetails) return;
    if (walletBalance < rechargeDetails.amount) {
      Swal.fire("Error", "Insufficient wallet balance.", "error");
      return;
    }
    setLoading(true);
    try {
      await api.post('/payment/wallet-recharge', rechargeDetails);
      Swal.fire("Success", "Recharge successful!", "success");
      setStep(1); setAmount(""); setSubscriberId("");
    } catch (e) {
      Swal.fire("Error", "Payment failed.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleRazorpayPayment = async () => {
    if (!rechargeDetails) return;
    try {
      setLoading(true);
      const res = await api.post("/payment/razorpay-order", { amount: Math.round(rechargeDetails.amount * 100), mobile_number: rechargeDetails.mobile_number, operator: rechargeDetails.operator });
      const options = {
        key: "rzp_test_v9bZpQvmrVnUzZ",
        ...res.data,
        handler: async (response: any) => {
          await api.post("/payment/verify", { ...rechargeDetails, ...response });
          Swal.fire("Success", "Recharge Successful!", "success");
          setStep(1); setAmount(""); setSubscriberId("");
        }
      };
      new (window as any).Razorpay(options).open();
    } catch (e) {
      Swal.fire("Error", "Payment initialization failed.", "error");
    } finally {
      setLoading(false);
    }
  };

  const toggleStyles = `
    .form-section-card { background: #ffffff; border-radius: 16px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); padding: 15px !important; }
    .input-group-custom { background: #ffffff; border: 1px solid #d1d5db; border-radius: 8px; padding: 3px; transition: 0.2s; }
    .input-group-custom:focus-within { border-color: #3b33d1; box-shadow: 0 0 0 3px rgba(59,51,209,0.1); }
    .label-custom { color: #4b5563; font-weight: 600; font-size: 0.85rem; margin-bottom: 4px; }
    .service-link-card { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 20px; transition: 0.3s; text-decoration: none; display: flex; align-items: center; }
    .service-link-card:hover { border-color: #3b33d1; transform: translateY(-3px); box-shadow: 0 8px 15px rgba(0,0,0,0.05); }
    .step-card { padding: 30px; background: #f8fafc; border-radius: 20px; position: relative; transition: 0.3s; border: 1px solid transparent; }
    .step-card:hover { background: #fff; border-color: #e2e8f0; box-shadow: 0 15px 30px rgba(0,0,0,0.05); }
    .operator-logo-radio { cursor: pointer; border: 1px solid transparent; border-radius: 8px; padding: 6px; transition: all 0.2s; background: #fff; }
    .operator-logo-radio:hover { background: #f1f5f9; transform: translateY(-1px); }
    .operator-logo-radio.selected { border-color: #3b33d1; background: rgba(59,51,209,0.05); }
    .operator-img { width: 40px; height: 40px; object-fit: contain; }
    .modal-body-scroll { max-height: 50vh; overflow-y: auto; }
    .modal-body-scroll::-webkit-scrollbar { width: 5px; }
    .modal-body-scroll::-webkit-scrollbar-thumb { background: #c7c7c7; border-radius: 10px; }
    
    .hero-image-col { min-height: 400px; position: relative; overflow: hidden; }
    .hero-form-col { padding: 1rem; background: #f0f2f5; display: flex; align-items: center; justify-content: center; }
    
    .hero-overlay-gradient {
      background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.8) 90%, rgba(0,0,0,0.95) 100%);
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 2rem;
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

    @media (min-width: 992px) {
      .hero-image-col { min-height: auto; }
      .hero-form-col { padding: 1.5rem; }
      .hero-text-title { font-size: 2.2rem; }
    }
    @media (min-width: 1400px) {
      .hero-text-title { font-size: 2.5rem; }
      .hero-text-subtitle { font-size: 1.25rem; }
    }

    input.form-control, select.form-select { font-size: 0.9rem; padding: 0.4rem 0.6rem; }
    .btn { font-size: 0.9rem; padding: 0.5rem 1rem; }
  `;

  return (
    <div className="page-wrapper overflow-hidden">
      <style>{toggleStyles}</style>

      {/* HERO SECTION */}
      <section className="position-relative w-100" style={{ background: '#fff' }}>
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-6 d-none d-lg-block position-relative hero-image-col">
              <img src="/dth_recharge_lifestyle_v2.png" alt="DTH Recharge" className="w-100 h-100 object-fit-cover" style={{ objectPosition: 'center' }} />
              <div className="hero-overlay-gradient">
                <div className="text-start mb-3">
                  <h3 className="hero-text-title">SEAMLESS ENTERTAINMENT.</h3>
                  <div className="bg-white rounded-pill mb-3" style={{ width: '60px', height: '5px' }}></div>
                  <p className="hero-text-subtitle mb-0">Recharge DTH Anytime.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center py-4" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
              <div className="form-section-card w-100 m-3" style={{ maxWidth: step === 2 ? '600px' : '420px', zIndex: 10 }}>
                {step === 1 ? (
                  <>
                    <h2 className="fw-bold mb-4 text-dark h4">DTH Recharge</h2>
                    <div className="row g-4">
                      {/* Operator Selection Grid */}
                      <div className="col-12">
                        <label className="label-custom mb-2">Select Operator</label>
                        <div className="input-group input-group-custom mb-2">
                          <span className="input-group-text bg-transparent border-0"><i className="fas fa-tv text-primary"></i></span>
                          <select
                            className="form-select border-0 bg-transparent shadow-none"
                            value={operator}
                            onChange={(e) => setOperator(e.target.value)}
                            style={{ cursor: 'pointer', fontWeight: 500 }}
                          >
                            <option value="">Choose Operator</option>
                            {dthOperators.map(op => (
                              <option key={op.id} value={op.id}>{op.name}</option>
                            ))}
                          </select>
                        </div>
                        {operator && (
                          <div className="d-flex justify-content-end">
                            {dthOperators.filter(op => op.id === operator).map(op => (
                              <img key={op.id} src={op.logo} alt={op.name} style={{ height: '30px', objectFit: 'contain' }}
                                onError={(e) => { (e.target as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3e%3crect width='50' height='50' fill='%23f1f5f9' rx='10' /%3e%3ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%2364748b'%3e" + op.code[0] + "%3c/text%3e%3c/svg%3e"; }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="col-12">
                        <label className="label-custom">Subscriber ID / VC Number</label>
                        <div className={`input-group input-group-custom ${!operator ? 'bg-light' : ''}`}>
                          <span className="input-group-text bg-transparent border-0"><i className="fas fa-id-card text-primary"></i></span>
                          <input className="form-control border-0 bg-transparent shadow-none" placeholder="e.g. 1023456789" value={subscriberId} onChange={e => setSubscriberId(e.target.value)} disabled={!operator} />
                          <button className="btn btn-sm btn-soft-primary fw-bold text-decoration-none small text-uppercase" onClick={handleFetchCustomerInfo} style={{ fontSize: '0.75rem' }} disabled={!operator || !subscriberId}>Check Info</button>
                        </div>
                      </div>
                      <div className="col-12">
                        <label className="label-custom">Amount</label>
                        <div className={`input-group input-group-custom ${!operator ? 'bg-light' : ''}`}>
                          <span className="input-group-text bg-transparent border-0 text-primary">₹</span>
                          <input type="number" className="form-control border-0 bg-transparent shadow-none" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.target.value)} disabled={!operator} />
                          <button className="btn btn-primary fw-bold px-3 ms-1 rounded-3 my-1 me-1" type="button" onClick={handleBrowsePlans} style={{ fontSize: '0.85rem' }} disabled={!operator}>View Plans</button>
                        </div>
                      </div>
                      <div className="col-12 mt-4">
                        <button className="btn w-100 py-3 rounded-3 shadow-sm text-white fs-5 fw-bold" style={{ background: '#3b33d1' }} onClick={handleProceedToPayment} disabled={loading}>
                          {loading ? <i className="fas fa-spinner fa-spin"></i> : "Proceed to Payment"}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  rechargeDetails && (
                    <>
                      <h3 className="fw-bold mb-4 text-center">Confirm Payment</h3>
                      <div className="bg-light p-4 rounded-4 mb-4">
                        <div className="d-flex justify-content-between mb-2"><span>Subscriber ID:</span> <strong>{rechargeDetails.mobile_number}</strong></div>
                        <div className="d-flex justify-content-between mb-2"><span>Operator:</span> <strong>{rechargeDetails.operator}</strong></div>
                        <hr />
                        <div className="d-flex justify-content-between h5 fw-bold"><span>Total Payable:</span> <span className="text-primary">₹{rechargeDetails.amount.toFixed(2)}</span></div>
                      </div>
                      <div className="d-grid gap-3">
                        <button className="btn btn-lg btn-success py-3 rounded-3" onClick={handleWalletPayment} disabled={loading || walletBalance < rechargeDetails.amount}>
                          Pay via Wallet (₹{walletBalance.toFixed(2)})
                        </button>
                        <button className="btn btn-lg btn-primary py-3 rounded-3" onClick={handleRazorpayPayment} disabled={loading}>Pay via Online Payment</button>
                        <button className="btn btn-link text-muted" onClick={() => setStep(1)}>Go Back</button>
                      </div>
                    </>
                  )
                )}

                {/* Provider Icons Section - Moved Inside Card */}
                <div className="mt-4 pt-3 border-top text-center">
                  <p className="text-muted small fw-bold mb-3 text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Supported Providers</p>
                  <div className="d-flex justify-content-center gap-2 flex-wrap">
                    {dthOperators.map(op => (
                      <div key={op.id} className="p-1 rounded-3 d-flex align-items-center justify-content-center border" style={{ width: '60px', height: '60px' }}>
                        <img src={op.logo} alt={op.name} className="w-100 h-100 object-fit-contain"
                          onError={(e) => { (e.target as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3e%3crect width='50' height='50' fill='%23f1f5f9' rx='10' /%3e%3ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%2364748b'%3e" + op.code[0] + "%3c/text%3e%3c/svg%3e"; }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE BAR */}
      <section className="position-relative" style={{ marginTop: '-30px', zIndex: 100 }}>
        <div className="container">
          <div className="row g-3 justify-content-center">
            {[{ icon: 'shield-check', title: 'Secure', sub: 'Bank-grade safety' }, { icon: 'bolt', title: 'Instant', sub: 'Real-time activation' }, { icon: 'headset', title: '24/7 Help', sub: 'Expert support' }].map((s, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="service-link-card shadow-sm h-100">
                  <div className="rounded-circle bg-light p-4 me-3 text-primary"><i className={`fas fa-${s.icon} fa-2x`}></i></div>
                  <div><h5 className="mb-1 fw-bold">{s.title}</h5><p className="mb-0 text-muted">{s.sub}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <div className="container py-5">
        <WorkingSectionThree />
      </div>

      {/* PLANS MODAL */}
      {showPlansModal && (
        <div className="modal fade show d-block" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 rounded-4">
              <div className="modal-header border-0 p-4">
                <h5 className="fw-bold m-0">Browse DTH Plans</h5>
                <button className="btn-close" onClick={() => setShowPlansModal(false)}></button>
              </div>
              <div className="modal-body p-0">
                <div className="p-4 bg-light border-bottom">
                  <input className="form-control rounded-pill px-4 border-0 shadow-sm" placeholder="Search Amount or Description..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </div>
                <div className="d-flex overflow-auto border-bottom p-2 bg-white sticky-top">
                  {Object.keys(dthPlans).map(cat => (
                    <button key={cat} className={`btn btn-sm rounded-pill px-4 me-2 ${activeTab === cat ? 'btn-primary' : 'btn-light'}`} onClick={() => setActiveTab(cat)}>{cat}</button>
                  ))}
                </div>
                <div className="modal-body-scroll p-4">
                  {modalError ? <div className="text-center py-5 text-danger h5">{modalError}</div> : (
                    <div className="row g-3">
                      {activeTab && dthPlans[activeTab]?.filter(p => p.amount.toString().includes(searchTerm) || p.data.toLowerCase().includes(searchTerm.toLowerCase())).map(p => (
                        <div className="col-12" key={p.id}>
                          <div className="border rounded-4 p-4 d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="fw-bold mb-1">₹{p.amount}</h4>
                              <p className="text-muted small mb-1">Validity: {p.validity}</p>
                              <p className="small mb-0 text-dark opacity-75">{p.data}</p>
                            </div>
                            <button className="btn btn-primary rounded-pill px-4" onClick={() => { setAmount(String(p.amount)); setShowPlansModal(false); }}>Select</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DTHRechargePage;
