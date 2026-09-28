import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import WorkingSectionThree from "../../components/WorkingSectionThree";

// Standard Insurers (India - BBPS)
const insurers = [
  { name: "Aditya Birla Sun Life Insurance", id: "ABSLI" },
  { name: "Aviva Life Insurance", id: "AVIVA" },
  { name: "Bajaj Allianz Life Insurance", id: "BALIC" },
  { name: "Bharti AXA Life Insurance", id: "BHARTI_AXA" },
  { name: "Canara HSBC OBC Life Insurance", id: "CHOBC" },
  { name: "Edelweiss Tokio Life Insurance", id: "EDELWEISS" },
  { name: "Exide Life Insurance", id: "EXIDE" },
  { name: "HDFC Life Insurance", id: "HDFC_LIFE" },
  { name: "ICICI Prudential Life Insurance", id: "ICICI_PRU" },
  { name: "IDBI Federal Life Insurance", id: "IDBI_FED" },
  { name: "IndiaFirst Life Insurance", id: "INDIA_FIRST" },
  { name: "Kotak Mahindra Life Insurance", id: "KOTAK_LIFE" },
  { name: "LIC of India", id: "LIC" },
  { name: "Max Life Insurance", id: "MAX_LIFE" },
  { name: "PNB MetLife India Insurance", id: "PNB_MET" },
  { name: "Reliance Nippon Life Insurance", id: "RELIANCE" },
  { name: "SBI Life Insurance", id: "SBI_LIFE" },
  { name: "Shriram Life Insurance", id: "SHRIRAM" },
  { name: "Star Union Dai-ichi Life Insurance", id: "SUD_LIFE" },
  { name: "Tata AIA Life Insurance", id: "TATA_AIA" }
];

interface BillDetails {
  success: boolean;
  name: string;
  amount: number;
  dueDate: string;
  billNumber: string;
  operator: string;
  operator_id: string;
  consumerNumber: string;
  totalPayable: number;
  agentComm: number;
}

const InsurancePaymentPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selectedInsurer, setSelectedInsurer] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [dob, setDob] = useState("");
  const [step, setStep] = useState(1);
  const [bill, setBill] = useState<BillDetails | null>(null);
  const [walletBalance, setWalletBalance] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

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

  const handleFetchBill = async () => {
    if (!selectedInsurer || !policyNumber) {
      Swal.fire("Warning", "Please select an insurer and enter policy number.", "warning");
      return;
    }
    setLoading(true);
    try {
      // Some insurers require DOB, passing it if entered
      const resp = await api.post("/payment/fetch-bill", { operator: selectedInsurer, number: policyNumber, dob });
      if (resp.data.success) {
        const feeResp = await api.post("/payment/calculate-fees", { amount: resp.data.amount });
        const insurerName = insurers.find(i => i.id === selectedInsurer)?.name || "Insurance Premium";

        setBill({
          ...resp.data,
          operator: insurerName,
          operator_id: selectedInsurer,
          consumerNumber: policyNumber,
          totalPayable: feeResp.data.totalAmount,
          agentComm: feeResp.data.agentCommission
        });
        setStep(2);
      } else {
        Swal.fire("Error", resp.data.message || "Could not fetch details.", "error");
      }
    } catch (e: any) {
      Swal.fire("Error", e.response?.data?.message || "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async (mode: 'wallet' | 'online') => {
    if (!bill) return;
    if (!auth.user) {
      Swal.fire({ title: "Login Required", icon: "warning", showCancelButton: true }).then(r => r.isConfirmed && navigate("/login"));
      return;
    }

    setLoading(true);
    const rechargeData = {
      mobile_number: policyNumber,
      operator: bill.operator,
      operator_code: bill.operator_id,
      amount: bill.totalPayable,
      plan_amount: bill.amount,
      agent_commission: bill.agentComm,
      company_commission: bill.totalPayable - bill.amount - bill.agentComm - (bill.amount * 0.005),
      api_commission: bill.amount * 0.005
    };

    try {
      if (mode === 'wallet') {
        if (walletBalance < bill.totalPayable) {
          Swal.fire("Error", "Insufficient wallet balance.", "error");
          setLoading(false);
          return;
        }
        await api.post('/payment/wallet-recharge', rechargeData);
        Swal.fire("Success", "Insurance premium paid successfully!", "success");
        setStep(1); setBill(null); setPolicyNumber("");
      } else {
        const orderRes = await api.post("/payment/razorpay-order", {
          amount: Math.round(bill.totalPayable * 100),
          mobile_number: policyNumber,
          operator: bill.operator
        });
        const options = {
          key: "rzp_test_v9bZpQvmrVnUzZ",
          ...orderRes.data,
          handler: async (response: any) => {
            await api.post("/payment/verify", { ...rechargeData, ...response });
            Swal.fire("Success", "Insurance premium paid successfully!", "success");
            setStep(1); setBill(null); setPolicyNumber("");
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
    .form-section-card { background: #ffffff; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); padding: 25px !important; }
    .input-group-custom { background: #ffffff; border: 1px solid #d1d5db; border-radius: 12px; padding: 4px; transition: 0.2s; }
    .input-group-custom:focus-within { border-color: #3b33d1; box-shadow: 0 0 0 4px rgba(59,51,209,0.1); }
    .label-custom { color: #4b5563; font-weight: 600; font-size: 0.9rem; margin-bottom: 8px; }
    .service-link-card { background: #fff; border-radius: 16px; border: 1px solid #e2e8f0; padding: 30px; transition: 0.3s; text-decoration: none; display: flex; align-items: center; }
    .service-link-card:hover { border-color: #3b33d1; transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
    .bill-summary { background: #f8fafc; border-radius: 16px; padding: 25px; }
    .bill-row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.95rem; }
    .bill-row span:first-child { color: #64748b; }
    .bill-row span:last-child { font-weight: 700; color: #1e293b; }
  `;

  return (
    <div className="page-wrapper overflow-hidden">
      <style>{toggleStyles}</style>

      {/* HERO SECTION */}
      <section className="position-relative w-100" style={{ minHeight: '100vh', background: '#fff' }}>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6 d-none d-lg-block position-relative" style={{ minHeight: '100vh' }}>
              <img src="/assets/img/insurance_lifestyle.png" alt="Insurance Lifestyle" className="w-100 h-100 object-fit-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"; }} />
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center py-5" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
              <div className="form-section-card w-100 m-3" style={{ maxWidth: '420px', zIndex: 10 }}>
                {/* ALWAYS SHOW FORM (Step 1) */}
                <h2 className="fw-bold mb-3 text-dark h4">Pay Insurance Premium</h2>
                <div className="row g-3">
                  <div className="col-12">
                    <label className="label-custom">Select Insurer</label>
                    <div className="input-group input-group-custom">
                      <span className="input-group-text bg-transparent border-0"><i className="fas fa-shield-alt text-primary"></i></span>
                      <select className="form-select border-0 bg-transparent shadow-none" value={selectedInsurer} style={{ cursor: 'pointer', fontWeight: 500 }} onChange={e => setSelectedInsurer(e.target.value)}>
                        <option value="">Choose Insurer</option>
                        {insurers.map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="label-custom">Policy Number</label>
                    <div className="input-group input-group-custom">
                      <span className="input-group-text bg-transparent border-0"><i className="fas fa-file-contract text-primary"></i></span>
                      <input className="form-control border-0 bg-transparent shadow-none" placeholder="Enter Policy Number" value={policyNumber} onChange={e => setPolicyNumber(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="label-custom">Date of Birth (Optional)</label>
                    <div className="input-group input-group-custom">
                      <span className="input-group-text bg-transparent border-0"><i className="fas fa-calendar-alt text-primary"></i></span>
                      <input type="date" className="form-control border-0 bg-transparent shadow-none" value={dob} onChange={e => setDob(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <button className="btn w-100 py-3 rounded-3 shadow-sm text-white fs-5 fw-bold" style={{ background: '#3b33d1' }} onClick={handleFetchBill} disabled={loading || !selectedInsurer || !policyNumber}>
                      {loading ? <i className="fas fa-spinner fa-spin"></i> : "Fetch Details"}
                    </button>
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
            {[{ icon: 'shield-alt', title: 'Secure', sub: 'Encrypted' }, { icon: 'clock', title: 'Instant', sub: 'Real-time Update' }, { icon: 'check-circle', title: 'Trusted', sub: 'Official Partners' }].map((s, i) => (
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

      <div className="container py-5 mt-5">
        <WorkingSectionThree />
      </div>

      {/* FAQ Section */}
      <section className="py-5 bg-light mt-5">
        <div className="container">
          <h3 className="fw-bold text-center mb-5">Frequently Asked Questions</h3>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion accordion-flush bg-white rounded-4 shadow-sm border overflow-hidden">
                {[{ q: 'Where can I find my Policy Number?', a: 'It is mentioned on your policy document or previous premium receipt.' }, { q: 'How long does it take to update?', a: 'Most payments update instantly, but some insurers may take 24-48 hours.' }, { q: 'Can I pay for lapsed policies?', a: 'It depends on the insurer rules; some allow online revival while others require branch visits.' }].map((faq, i) => (
                  <div className="accordion-item" key={i}>
                    <h2 className="accordion-header">
                      <button className={`accordion-button ${activeFaq !== i ? 'collapsed' : ''} fw-bold py-4`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                        {faq.q}
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === i ? 'show' : ''}`}>
                      <div className="accordion-body text-muted py-4">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BILL SUMMARY MODAL (POPUP) */}
      {(step === 2 && bill) && createPortal(
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center animate__animated animate__fadeIn" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', zIndex: 9999, left: 0, top: 0 }}>
          <div style={{ maxWidth: '450px', width: '90%' }}>
            <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden animate__animated animate__zoomIn bg-white">
              <div className="modal-body p-4 position-relative">
                <button className="btn-close position-absolute top-0 end-0 m-3" onClick={() => setStep(1)} style={{ zIndex: 10 }}></button>

                <div className="d-flex align-items-center justify-content-between mb-4 mt-2">
                  <h4 className="fw-bold m-0 text-dark h5">Confirm Premium</h4>
                  <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill small fw-bold"><i className="fas fa-check-circle me-1"></i>Verified</span>
                </div>

                <div className="bg-light rounded-4 p-4 mb-4 position-relative overflow-hidden">
                  <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'linear-gradient(90deg, #3b33d1, #f43f5e)' }}></div>

                  <div className="text-center mb-4 mt-2">
                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mb-3 text-primary" style={{ width: '64px', height: '64px' }}>
                      <i className="fas fa-file-invoice-dollar fa-2x"></i>
                    </div>
                    <h3 className="fw-bold text-dark mb-0">₹{bill.totalPayable.toFixed(2)}</h3>
                    <p className="text-muted small fw-bold text-uppercase mt-1" style={{ letterSpacing: '0.5px' }}>Total Premium</p>
                  </div>

                  <div className="vstack gap-2">
                    <div className="d-flex justify-content-between text-muted small fw-bold text-uppercase">
                      <span>Policy Holder</span>
                    </div>
                    <div className="fw-bold text-dark mb-2">{bill.name}</div>

                    <div className="d-flex justify-content-between text-muted small fw-bold text-uppercase">
                      <span>Insurer</span>
                    </div>
                    <div className="fw-bold text-dark mb-2">{bill.operator}</div>

                    <div className="row g-2 mt-1">
                      <div className="col-6">
                        <div className="p-2 bg-white rounded-3 border text-center">
                          <div className="text-muted x-small fw-bold" style={{ fontSize: '0.7rem' }}>POLICY NO.</div>
                          <div className="fw-bold small text-dark">{bill.consumerNumber}</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 bg-white rounded-3 border text-center">
                          <div className="text-muted x-small fw-bold" style={{ fontSize: '0.7rem' }}>DUE DATE</div>
                          <div className="fw-bold small text-danger">{bill.dueDate}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3">
                  <button
                    className="btn w-100 py-3 rounded-4 border-0 position-relative overflow-hidden shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
                    onClick={() => handlePayment('wallet')}
                    disabled={loading || walletBalance < bill.totalPayable}
                  >
                    <div className="d-flex flex-column align-items-center justify-content-center text-white lh-1">
                      <span className="fw-bold fs-6 mb-1"><i className="fas fa-wallet me-2"></i>Pay via Wallet</span>
                      <span className="small opacity-75" style={{ fontSize: '0.75rem' }}>Balance: ₹{walletBalance.toFixed(2)}</span>
                    </div>
                  </button>

                  <button
                    className="btn w-100 py-3 rounded-4 border-0 shadow-sm text-white"
                    style={{ background: '#3b33d1' }}
                    onClick={() => handlePayment('online')}
                    disabled={loading}
                  >
                    <span className="fw-bold"><i className="fas fa-lock me-2"></i>Pay via Online Gateway</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>, document.body
      )}
    </div>
  );
};

export default InsurancePaymentPage;
