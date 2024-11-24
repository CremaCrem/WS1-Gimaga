import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminBR = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [businessToDelete, setBusinessToDelete] = useState(null);
  const navigate = useNavigate();

  const handleRegisterBusiness = async (e) => {
    e.preventDefault();
    const newBusiness = { businessName, phoneNumber: businessPhone, address: businessAddress };

    try {
      const response = await axios.post('http://localhost:5000/api/br/register', newBusiness);
      setBusinesses([...businesses, response.data.business]);

      setBusinessName('');
      setBusinessAddress('');
      setBusinessPhone('');
    } catch (error) {
      console.error('Error registering business:', error);
    }
  };

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/br');
        setBusinesses(response.data);
      } catch (error) {
        console.error('Error fetching businesses:', error);
      }
    };

    fetchBusinesses();
  }, []);

  const handleApprove = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/br/approve/${id}`);
      const updatedBusinesses = businesses.map((business) =>
        business._id === id ? { ...business, status: 'approved' } : business
      );
      setBusinesses(updatedBusinesses);
    } catch (error) {
      console.error('Error approving business:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/br/delete/${businessToDelete}`);
      setBusinesses(businesses.filter(business => business._id !== businessToDelete));
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error deleting business:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
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
          <h1 className="text-4xl font-semibold text-center mb-4 text-gray-900">Business Registration</h1>
          <p className="text-lg text-center text-gray-700 mb-6">Register new businesses and manage existing ones.</p>

          <form onSubmit={handleRegisterBusiness} className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Business Name</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Business Address</label>
                <input
                  type="text"
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="text"
                  value={businessPhone}
                  onChange={(e) => setBusinessPhone(e.target.value)}
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300"
            >
              Register Business
            </button>
          </form>

          <div className="overflow-x-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Registered Businesses</h2>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead>
                <tr className="text-left bg-gray-200">
                  <th className="py-2 px-4">Business Name</th>
                  <th className="py-2 px-4">Address</th>
                  <th className="py-2 px-4">Phone Number</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {businesses.map((business, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{business.businessName}</td>
                    <td className="py-2 px-4">{business.address}</td>
                    <td className="py-2 px-4">{business.phoneNumber}</td>
                    <td className="py-2 px-4">{business.status || 'pending'}</td>
                    <td className="py-2 px-4 flex gap-4">
                        <button
                        onClick={() => handleApprove(business._id)}
                        className="text-green-600 hover:text-green-800 transition-all duration-200"
                        >
                        Approve
                        </button>
                        
                        {/* Conditionally render Reject button if the business is not approved */}
                        {business.status !== 'approved' && (
                        <button
                            onClick={() => { setIsModalOpen(true); setBusinessToDelete(business._id); }}
                            className="text-red-600 hover:text-red-800 transition-all duration-200"
                        >
                            Reject
                        </button>
                        )}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to reject this business?</h2>
            <div className="flex justify-between">
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Confirm
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 text-white py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBR;
