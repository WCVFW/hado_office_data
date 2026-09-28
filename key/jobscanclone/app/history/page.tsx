"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HistoryPage() {
  const [scans, setScans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScans();
  }, []);

  const fetchScans = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:8000/api/scans', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setScans(data.reverse()); // latest first
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteScan = async (id: any) => {
    if (!confirm('Are you sure you want to delete this scan?')) return;
    try {
      const token = localStorage.getItem('token');
      // Assume DELETE /api/scans/:id is implemented (mock for now if not)
      setScans(scans.filter(s => s.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Scan History</h1>
        <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
          New Scan
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading history...</div>
      ) : scans.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow border border-gray-100">
          <p className="text-gray-500 text-lg mb-4">No scans found.</p>
          <Link href="/dashboard" className="text-blue-600 hover:underline">Run your first scan</Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {scans.map((scan) => (
                <tr key={scan.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(scan.created_at).toLocaleDateString()} {new Date(scan.created_at).toLocaleTimeString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Resume #{scan.resume_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Job #{scan.job_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      scan.match_rate >= 75 ? 'bg-green-100 text-green-800' :
                      scan.match_rate >= 40 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {scan.match_rate}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">View</button>
                    <button onClick={() => deleteScan(scan.id)} className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
