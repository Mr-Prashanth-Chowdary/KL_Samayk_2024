import qr from '../../assets/qrcode.png';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Pay() {
  const [email, setEmail] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false); // To manage delay popup
  const [serverError, setServerError] = useState(''); // To show server-side errors
  const [popupSuccess, setPopupSuccess] = useState(false); // To manage custom success popup

  const [errors, setErrors] = useState({
    email: '',
    transactionId: '',
    selectedImage: '',
  });

  const validateEmail = (email: string) => /^[A-Za-z0-9@.]+$/.test(email); // Letters, numbers, '@', and '.'
  const validateTransactionId = (id: string) => /^[A-Za-z0-9]+$/.test(id); // Only letters and numbers

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', transactionId: '', selectedImage: '' };

    if (!email) {
      newErrors.email = 'Email ID is required.';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email ID should only contain letters, numbers, "@", and ".".';
      isValid = false;
    }

    if (!transactionId) {
      newErrors.transactionId = 'Transaction ID is required.';
      isValid = false;
    } else if (!validateTransactionId(transactionId)) {
      newErrors.transactionId = 'Transaction ID should only contain letters and numbers.';
      isValid = false;
    }

    if (!selectedImage) {
      newErrors.selectedImage = 'You must upload a payment proof image.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const navigate = useNavigate();
  const handelDone = ()=>{
    setPopupSuccess(false);
    navigate('/');
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form inputs before submission
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('transactionId', transactionId);
    formData.append('paymentProof', selectedImage as File);

    try {
      setLoading(true); // Show loading popup
      setServerError(''); // Reset server error message
      const token = localStorage.getItem('token');
      const response = await axios.post('http://127.0.0.1:3000/api/auth/upload-payment-proof', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setPopupSuccess(true); // Show success popup
        setEmail(''); // Clear input fields
        setTransactionId('');
        setSelectedImage(null);
      }
    } catch (error: any) {
      if (error.response) {
        setServerError(`Error: ${error.response.data.message || 'Error uploading payment proof.'}`);
      } else {
        setServerError('Error uploading payment proof.');
      }
    } finally {
      setLoading(false); // Hide loading popup
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-white text-2xl mb-4">Pay Page</h1>

      <div className="border-4 border-gray-300 rounded-lg p-3 max-w-xs mx-auto">
        <img
          src={qr}
          alt="QR code"
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>

      <div className="mt-4 text-center">
        <p className="text-white text-lg">Registration Fee: ₹300</p>
        <p className="text-gray-400 italic text-sm">
          Note: Scan the QR code to complete the payment.
        </p>
      </div>

      <form className="mt-4 text-center" onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            placeholder="Email ID" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black mb-2 border border-gray-300 rounded-lg px-3 py-1"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <input 
            type="text" 
            placeholder="Transaction ID" 
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            className="text-black mb-2 border border-gray-300 rounded-lg px-3 py-1"
            required
          />
          {errors.transactionId && <p className="text-red-500 text-sm">{errors.transactionId}</p>}
        </div>

        <div>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload}
            className="text-white cursor-pointer border border-gray-300 rounded-lg px-3 py-1 bg-gray-700 mb-2"
            required
          />
          {errors.selectedImage && <p className="text-red-500 text-sm">{errors.selectedImage}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
            <p className="text-lg font-medium">Processing your payment, please wait...</p>
          </div>
        </div>
      )}

      {popupSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-lg text-center">
            <p className="text-lg font-medium text-green-600">Your payment proof has been uploaded successfully!</p>
            <p>Your payment will be verified and updated within 24 hours.</p>
            <p>Join the WhatsApp group for guidance and support.</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={ handelDone }
            >
              Done
            </button>
          </div>
        </div>
      )}

      {serverError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-lg text-center">
            <p className="text-lg font-medium text-red-600">{serverError}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => setServerError('')}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
