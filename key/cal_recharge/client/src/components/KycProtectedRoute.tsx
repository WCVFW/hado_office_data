import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const KycProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const { auth } = useAuth();
    const location = useLocation();

    if (!auth.token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Check for APPROVED status
    if (auth.user?.kyc_status !== 'APPROVED') {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
                padding: '20px',
                textAlign: 'center'
            }}>
                <div style={{
                    backgroundColor: '#fff',
                    padding: '40px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    maxWidth: '500px',
                    width: '100%'
                }}>
                    <h2 style={{ color: '#991b1b', marginBottom: '16px', fontSize: '24px' }}>Access Restricted</h2>
                    <p style={{ color: '#4b5563', marginBottom: '24px', fontSize: '16px', lineHeight: '1.5' }}>
                        Your KYC verification is pending or has not been approved yet.
                        Recharge and Bill Payment services are only available to verified users.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <button
                            onClick={() => window.location.href = '/dashboard'}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#4338ca',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            Go to Dashboard
                        </button>
                        <button
                            onClick={() => window.location.href = '/profile'}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#f3f4f6',
                                color: '#374151',
                                border: '1px solid #d1d5db',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}
                        >
                            Check KYC Status
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return children;
};

export default KycProtectedRoute;
