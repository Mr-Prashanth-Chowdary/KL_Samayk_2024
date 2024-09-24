import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import approveImg from '../../assets/approved.png';

// Male images
import maleImage1 from '../../assets/male/male.jpg';
import maleImage2 from '../../assets/male/male (1).jpg';
import maleImage3 from '../../assets/male/male (2).jpg';
import maleImage4 from '../../assets/male/male (3).jpg';
import maleImage5 from '../../assets/male/male (4).jpg';
import maleImage6 from '../../assets/male/male (5).jpg';
import maleImage7 from '../../assets/male/male (6).jpg';

// Female images
import femaleImage1 from '../../assets/female/female.jpg';
import femaleImage2 from '../../assets/female/female (1).jpg';
import femaleImage3 from '../../assets/female/female (2).jpg';
import femaleImage4 from '../../assets/female/female (3).jpg';
import femaleImage5 from '../../assets/female/female (4).jpg';
import femaleImage6 from '../../assets/female/female (5).jpg';
import femaleImage7 from '../../assets/female/female (6).jpg';
import { Footer } from './Footer/Footer';

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/auth/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
        }
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

  const handlePayment = () => {
    navigate('/Event', { state: { events } });
  };

  // Profile images
  const maleImages = [maleImage1, maleImage2, maleImage3, maleImage4, maleImage5, maleImage6, maleImage7];
  const femaleImages = [femaleImage1, femaleImage2, femaleImage3, femaleImage4, femaleImage5, femaleImage6, femaleImage7];

  if (loading) return <div>Loading...</div>;

  const { firstname, lastname, email, phoneNumber, gender, college, idNumber, department, year, paymentStatus, events  } = userData;

  const getRandomImage = () => {
    const images = gender === 'male' ? maleImages : femaleImages;
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const imgSrc = getRandomImage();

  return (
    <div>
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white px-4 h-full md:text-sm text-[12px]">
        <div className="flex flex-col md:flex-row gap-4 p-4 w-full md:w-3/4">
          {/* Left Section (Profile) */}
          <div className="flex-1 h-auto md:h-auto rounded-[20px] bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] p-6 shadow-lg border border-white/20 backdrop-blur-[20px]">
            <div className="p-4 text-white leading-7 text-center">
              <div className="flex justify-center pb-4">
                <img className="h-36 w-36 rounded-full" src={imgSrc} alt="Profile" />
              </div>
              <div>
                <p><strong>Name: </strong>{firstname} {lastname}</p>
                <p><strong>Email: </strong>{email}</p>
                <p><strong>Phone: </strong>(+91) {phoneNumber}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p>Registered Events: {events.join(', ')}</p>
              </div>
            </div>
            <div className='text-center rounded-[20px] bg-gradient-to-b from-[rgba(170,0,0,0.5)] to-[rgba(170,0,0,0.2)] py-2 shadow-lg border border-white/20 backdrop-blur-[20px]'>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>

          {/* Right Section (University Info) */}
          <div className="flex flex-col flex-1 gap-4">
            {/* Top Box */}
            <div className="flex-[0.8] rounded-[20px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] p-6 shadow-lg border border-white/20 backdrop-blur-[20px]">
              <div className="p-4 text-white">
                <p className="text-center text-lg mb-4">University Identification</p>
                <div><strong>College: </strong>{college}</div>
                <div><strong>College ID: </strong>{idNumber}</div>
                <div><strong>Department: </strong>{department}</div>
                <div><strong>Year: </strong>{year}</div>
              </div>
            </div>

            {/* Bottom Box */}
            <div className="flex-[1.2] rounded-[20px] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] p-6 shadow-lg border border-white/20 backdrop-blur-[20px]">
              <div className="p-4 text-white">
              {paymentStatus === 'pending' ? (
                  <>
                    <div className="text-center text-lg mb-4">Payment Pending</div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Samyak Registration Fee</span>
                      <span>300</span>
                    </div>

                    <div className="flex justify-between items-center mb-2">
                      <span>Tax</span>
                      <span>0.0</span>
                    </div>

                    <div className="border-t border-gray-500 my-4"></div>

                    <div className="flex justify-between items-center font-semibold">
                      <span>Total Amount</span>
                      <span>Rs.300</span>
                    </div>
                    <p className="text-xs mt-2"><strong><sup>*</sup>Note:</strong> This amount is solely for the registration fee. Participation in the event is not included.</p>
                    <div className="flex justify-center mt-5">
                      <button onClick={handlePayment} className="rounded-[20px] bg-gradient-to-b from-[rgba(50,250,50,0.2)] to-[rgba(50,250,50,0)] px-10 py-2 shadow-lg border border-white/20 backdrop-blur-[20px]">
                        Pay Now
                      </button>
                    </div>
                  </>
                ) : paymentStatus === 'completed' ? (
                  <>
                  <img className='h-24 w-24 mx-auto' src={approveImg} alt="payment approved" />
                  <div className="text-center text-lg mb-4">Payment Completed</div>
                  
                  </>
                ) : null}

              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
    <Footer></Footer>
    </div>
  );
};

export default Profile;
