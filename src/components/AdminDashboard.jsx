import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await fetch('http://localhost:5000/api/adminr/dashboard', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMessage(data.msg);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching dashboard:', error);
        navigate('/login');
      }
    };

    fetchData();
  }, [navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-center mb-8">Admin Panel</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <a href="/" className="text-lg text-gray-200 hover:text-white transition-all duration-300">Dashboard</a>
              </li>
              <li className="mb-4">
              <Link to="/admin-business-registration" className="text-lg text-gray-200 hover:text-white transition-all duration-300">
                Business Registration
              </Link>
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

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-6">
        {/* Welcome Section */}
        <div className="bg-gray-200 p-8 rounded-2xl shadow-2xl text-gray-800 flex flex-col items-center space-y-4 relative overflow-hidden">
          <h1 className="text-4xl font-semibold mb-4 text-gray-900">Welcome to the Admin Dashboard</h1>
          <p className="text-xl text-gray-700 text-center">{message}</p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-4">Business Registrations</h2>
            <p className="text-lg">View and manage all business registrations.</p>
            <div className="mt-4 text-right">
              <Link to="/admin-business-registration" className="text-lg font-medium hover:underline">Manage Now</Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-green-600 to-green-400 text-white p-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-4">Pending Licenses</h2>
            <p className="text-lg">Review and approve pending licenses.</p>
            <div className="mt-4 text-right">
              <Link to="/admin-permits-licenses" className="text-lg font-medium hover:underline">Review Now</Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white p-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-4">System Settings</h2>
            <p className="text-lg">Manage system settings and configurations.</p>
            <div className="mt-4 text-right">
              <a href="/settings" className="text-lg font-medium hover:underline">Configure Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
