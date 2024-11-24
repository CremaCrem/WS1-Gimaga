import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminPaL = () => {
  const [certificates, setCertificates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [certificateToView, setCertificateToView] = useState(null);
  const [certificateToDelete, setCertificateToDelete] = useState(null);
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pal/getPermits');
        setCertificates(response.data);
      } catch (error) {
        console.error('Error fetching certificates:', error);
      }
    };

    fetchCertificates();
  }, []);

  const handleApprove = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/pal/approve/${id}`);
      const updatedCertificates = certificates.map((certificate) =>
        certificate._id === id ? { ...certificate, status: 'approved' } : certificate
      );
      setCertificates(updatedCertificates);
    } catch (error) {
      console.error('Error approving certificate:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/pal/delete/${certificateToDelete}`);
      setCertificates(certificates.filter(cert => cert._id !== certificateToDelete));
      setIsModalOpen(false);
      setIsConfirmDelete(false);
    } catch (error) {
      console.error('Error deleting certificate:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleView = (certificate) => {
    setCertificateToView(certificate);
    setIsModalOpen(true);
  };

  const handleReject = (certificateId) => {
    setCertificateToDelete(certificateId);
    setIsConfirmDelete(true);
  };

  return (
    <div className="flex">
      <div className="w-64 bg-blue-800 text-white p-6 flex flex-col justify-between min-h-screen">
        <div>
          <h2 className="text-3xl font-semibold text-center mb-8">Admin Panel</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <Link to="/admin" className="text-lg text-gray-200 hover:text-white transition-all duration-300">Dashboard</Link>
              </li>
              <li className="mb-4">
                <Link to="/admin-business-registration" className="text-lg text-gray-200 hover:text-white transition-all duration-300">Business Registration</Link>
              </li>
              <li className="mb-4">
                <Link to="/admin-permits-licenses" className="text-lg text-gray-200 hover:text-white transition-all duration-300">Permits & Licenses</Link>
              </li>
            </ul>
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600 text-white py-3 px-4 rounded-lg text-lg hover:bg-red-700 transition-all duration-300"
        >
          Logout
        </button>
      </div>

      <div className="flex-1 p-8 bg-gray-50">
        <div className="bg-white p-8 rounded-2xl shadow-2xl text-gray-800">
          <h1 className="text-4xl font-semibold text-center mb-4 text-gray-900">Permits & Licenses</h1>
          <p className="text-lg text-center text-gray-700 mb-6">Manage certificates of indigency, residency, and barangay clearance.</p>

          <div className="overflow-x-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certificates</h2>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead>
                <tr className="text-left bg-gray-200">
                  <th className="py-2 px-4">Certificate Type</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((certificate, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{certificate.certificateType}</td>
                    <td className="py-2 px-4">{certificate.fullName}</td>
                    <td className="py-2 px-4">{certificate.status || 'pending'}</td>
                    <td className="py-2 px-4 flex gap-4">
                      <button
                        onClick={() => handleApprove(certificate._id)}
                        className="text-green-600 hover:text-green-800 transition-all duration-200"
                      >
                        Approve
                      </button>

                      {certificate.status !== 'approved' && (
                        <button
                          onClick={() => handleReject(certificate._id)}
                          className="text-red-600 hover:text-red-800 transition-all duration-200"
                        >
                          Reject
                        </button>
                      )}

                      <button
                        onClick={() => handleView(certificate)}
                        className="text-blue-600 hover:text-blue-800 transition-all duration-200"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && certificateToView && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
            <h2 className="text-lg font-semibold mb-4">Certificate Details</h2>
            <p><strong>Name:</strong> {certificateToView.fullName}</p>
            <p><strong>Type:</strong> {certificateToView.certificateType}</p>
            <p><strong>Status:</strong> {certificateToView.status || 'pending'}</p>

            <div className="mt-4">
              <p><strong>Government ID:</strong> <a href={`/uploads/governmentID/${certificateToView.governmentId}`} download className="text-blue-600">Download</a></p>
              <p><strong>Residency Certificate:</strong> <a href={`/uploads/residencyCertificates/${certificateToView.residencyCertificate}`} download className="text-blue-600">Download</a></p>
              <p><strong>Proof of Residence:</strong> <a href={`/uploads/proofofResidence/${certificateToView.proofOfResidence}`} download className="text-blue-600">Download</a></p>
              <p><strong>Application Form:</strong> <a href={`/uploads/applicationForm/${certificateToView.applicationForm}`} download className="text-blue-600">Download</a></p>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 text-white py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isConfirmDelete && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to reject this certificate?</h2>
            <div className="flex justify-between">
              <button
                onClick={() => setIsConfirmDelete(false)}
                className="bg-gray-600 text-white py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPaL;
