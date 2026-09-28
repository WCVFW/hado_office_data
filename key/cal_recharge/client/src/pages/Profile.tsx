import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { FaCheckCircle, FaExclamationCircle, FaIdCard, FaArrowRight } from 'react-icons/fa';

const Profile: React.FC = () => {
  const { auth, logout, refreshUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [kycStatus, setKycStatus] = useState<string>('LOADING');

  useEffect(() => {
    if (auth.user) {
      setFormData({
        name: auth.user.name,
        email: auth.user.email,
      });
      fetchKycStatus();
    }
  }, [auth.user]);

  const fetchKycStatus = async () => {
    try {
      const response = await api.get('/kyc/status');
      setKycStatus(response.data.kyc_status);
    } catch (error) {
      console.error("Failed to fetch KYC status", error);
      setKycStatus('UNKNOWN');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.put('/auth/profile', formData);
      await refreshUser(); // Refresh user data in context
      setMessage('Profile updated successfully!');
      setIsEditing(false);
    } catch (error: any) {
      console.error("Update failed:", error);
      setMessage(error.response?.data?.message || 'Failed to update profile.');
    }

    setTimeout(() => setMessage(''), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!auth.user) {
    return <p>Loading profile...</p>;
  }

  const getKycBadge = () => {
    switch (kycStatus) {
      case 'APPROVED':
        return <span className="badge bg-success">Verified</span>;
      case 'PENDING':
        return <span className="badge bg-warning text-dark">Pending Approval</span>;
      case 'REJECTED':
        return <span className="badge bg-danger">Rejected</span>;
      default:
        return <span className="badge bg-secondary">Not Submitted</span>;
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-light text-center">
              <h2 className="mb-0">My Profile</h2>
            </div>
            <div className="card-body p-4">
              {message && <div className={`alert ${message.includes('Failed') ? 'alert-danger' : 'alert-success'}`}>{message}</div>}
              <form onSubmit={handleUpdateProfile}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <p className="form-control-plaintext text-capitalize">{auth?.user?.role?.toLowerCase()}</p>
                </div>

                <div className="mb-4">
                  <label className="form-label d-block fw-bold mb-2">Identity Verification (KYC)</label>

                  {kycStatus === 'APPROVED' ? (
                    <div className="p-3 border rounded-3 bg-success bg-opacity-10 border-success d-flex align-items-center">
                      <FaCheckCircle className="text-success me-3" size={24} />
                      <div>
                        <h6 className="mb-0 text-success fw-bold">Verified</h6>
                        <small className="text-secondary">Your identity has been verified.</small>
                      </div>
                    </div>
                  ) : kycStatus === 'PENDING' ? (
                    <div className="p-3 border rounded-3 bg-warning bg-opacity-10 border-warning d-flex align-items-center">
                      <FaExclamationCircle className="text-warning me-3" size={24} />
                      <div>
                        <h6 className="mb-0 text-warning fw-bold">Verification Pending</h6>
                        <small className="text-secondary">Your documents are under review (24-48 hrs).</small>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 border border-dashed rounded-3 bg-light text-center">
                      <FaIdCard className="text-primary mb-2" size={32} />
                      <h6 className="fw-bold text-dark">Complete Your KYC</h6>
                      <p className="text-muted small mb-3">Unlock higher limits and all features by verifying your identity.</p>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm px-4 rounded-pill"
                        onClick={() => navigate('/kyc')}
                      >
                        {kycStatus === 'REJECTED' ? 'Resubmit Documents' : 'Submit Documents Now'} <FaArrowRight className="ms-1" size={12} />
                      </button>
                      {kycStatus === 'REJECTED' && (
                        <div className="mt-2 text-danger small">
                          <FaExclamationCircle className="me-1" /> Previous submission was rejected.
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {isEditing ? (
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                  </div>
                ) : (
                  <div className="d-grid gap-2">
                    <button type="button" className="btn btn-outline-primary" onClick={() => setIsEditing(true)}>Edit Profile</button>
                  </div>
                )}
              </form>
              <hr />
              <div className="d-grid">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
