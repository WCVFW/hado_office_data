import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function ForgotPassword() {
  const navigate = useNavigate();

  // State for which view to show: 'request' (enter email) or 'reset' (enter otp + password)
  const [view, setView] = useState<'request' | 'reset'>('request');

  // Form States
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Step 1: Request OTP
  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/api/auth/forgot-password`, { email });
      Swal.fire('OTP Sent', response.data.message, 'success');
      setView('reset');
    } catch (err: any) {
      console.error(err);
      Swal.fire('Error', err?.response?.data?.message || 'Failed to send OTP.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP & Reset Password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire('Error', 'Passwords do not match.', 'error');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/api/auth/reset-password`, {
        email,
        otp,
        newPassword: password,
      });
      Swal.fire('Success', response.data.message, 'success');
      navigate('/login');
    } catch (err: any) {
      console.error(err);
      Swal.fire('Error', err?.response?.data?.message || 'Failed to reset password.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="signup__section bluar__shape py-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="signup__boxes p-4 p-md-5 rounded shadow-sm bg-white">
              {view === 'request' ? (
                <>
                  <h4 className="mb-3">Forgot Password</h4>
                  <p className="head__pra mb-4">
                    Enter your registered email address to receive an OTP.
                  </p>
                  <form onSubmit={handleRequestOtp} className="signup__form">
                    <div className="row g-3">
                      <div className="col-12">
                        <div className="input__grp">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="name@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-12 mt-4">
                        <button type="submit" className="cmn__btn w-100 py-2" disabled={loading}>
                          <span>{loading ? 'Sending OTP...' : 'Send OTP'}</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <h4 className="mb-3">Reset Your Password</h4>
                  <p className="head__pra mb-4">
                    Enter the OTP sent to <strong>{email}</strong> and your new password.
                  </p>
                  <form onSubmit={handleResetPassword} className="signup__form">
                    <div className="row g-3">
                      <div className="col-12">
                        <div className="input__grp">
                          <label htmlFor="otp" className="form-label">OTP</label>
                          <input
                            type="text"
                            id="otp"
                            placeholder="Enter 6-digit OTP"
                            required
                            maxLength={6}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input__grp">
                          <label htmlFor="password">New Password</label>
                          <input
                            type="password"
                            id="password"
                            placeholder="Enter new password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input__grp">
                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm new password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-12 mt-4">
                        <button type="submit" className="cmn__btn w-100 py-2" disabled={loading}>
                          <span>{loading ? 'Resetting...' : 'Reset Password'}</span>
                        </button>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          type="button"
                          className="btn btn-link text-decoration-none"
                          onClick={() => setView('request')}
                        >
                          Change Email / Resend OTP
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
