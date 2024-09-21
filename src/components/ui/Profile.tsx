import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        // If no token, redirect to login page immediately
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/auth/user', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setUserData(response.data);
            } catch (error: any) {
                // Check for token expiration or invalid token (usually a 401 status)
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('token');  // Clear invalid token
                }
                // Redirect to login page on any error
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    if (loading) return <div>Loading...</div>;

    const { firstname, lastname, email, phoneNumber, gender, college, idNumber, department, year, paymentStatus } = userData;

    return (
        <div className="bg-gradient-to-br from-black to-gray-900 text-white h-full py-10 md:h-screen">
            <div className="py-10">
                <img className="h-40 w-40 rounded-full border-4 border-white mx-auto" src="" alt="Profile" />
            </div>

            <div className="md:flex justify-center">
                <div className="md:w-1/3 bg-black rounded-lg mx-5 my-5 p-5 shadow-xl">
                    <h2 className="text-lg font-semibold border-b-2 border-gray-300 pb-2">Profile Information</h2>
                    <p className="mt-2"><strong>Name:</strong> {firstname} {lastname}</p>
                    <p><strong>Phone Number:</strong> (+91) {phoneNumber}</p>
                    <p>
                        <strong>Payment Status: </strong>
                        {paymentStatus === 'pending' ? (
                            <span className='text-yellow-400'>{paymentStatus}</span>
                        ) : (
                            <span className='text-green-400'>{paymentStatus}</span>
                        )}
                    </p>
                    {paymentStatus === 'pending' && (
                        <div className="text-center">
                            <button className="bg-gray-800 hover:bg-gray-700 h-10 w-1/2 my-4 rounded">Pay Now</button>
                        </div>
                    )}
                </div>

                <div className="md:w-1/3 bg-black rounded-lg mx-5 my-5 p-5 shadow-xl">
                    <h2 className="text-lg font-semibold border-b-2 border-gray-300 pb-2">Additional Information</h2>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Gender:</strong> {gender}</p>
                    <p><strong>College:</strong> {college}</p>
                    <p><strong>ID Number:</strong> {idNumber}</p>
                    <p><strong>Department:</strong> {department}</p>
                    <p><strong>Year:</strong> {year}</p>
                    <div className="text-center">
                        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 h-10 w-1/2 my-4 rounded">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
