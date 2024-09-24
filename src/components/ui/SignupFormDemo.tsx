"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { Select } from "./select";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import axios from "axios";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phoneNumber: '',
    gender: '',
    college: '',
    idNumber: '',
    department: '',
    year: '',
  });

  const [files, setFiles] = useState({
    studentID: null,
    aadhaarCard: null
  });

  const [error, setError] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const { firstname, lastname, email, password, phoneNumber, gender, college, idNumber, department, year } = formData;
    if (!firstname || !lastname || !email || !password || !phoneNumber || !gender || !college || !idNumber || !department || !year) {
      return 'All fields are required.';
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      return 'Phone number must be 10 digits.';
    }
    if (!files.studentID || !files.aadhaarCard) {
      return 'Both ID card and Aadhaar card are required.';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: selectedFiles } = e.target;
    if (selectedFiles && selectedFiles.length > 0) {
      setFiles({
        ...files,
        [name]: selectedFiles[0], // Only allow one file for each
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Check for validation errors
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setIsSubmitting(true);
    // Create a FormData object to handle file uploads
    const formDataToSend = new FormData();
  
    // Append all form fields, ensuring values are cast to string if necessary
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formDataToSend.append(key, value as string); // Cast value to string
      }
    });
  
    // Append files to FormData, ensuring they are not null
    if (files.studentID) {
      formDataToSend.append('studentID', files.studentID);
    }
    if (files.aadhaarCard) {
      formDataToSend.append('aadhaarCard', files.aadhaarCard);
    }
  
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/auth/signup', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });
      console.log(response);
      showAlert('Signup successful! redirecting to Login.');
      // navigate("/Login"); // Redirect to login page ** making this to auto redirect
    } catch (error: any) {
      if (error.response) {
        // Server error
        if(error.response.data.message === 'User already exists'){
          showAlert('User already exists with Email or phone numebr');
        }
        else{
          setError('Signup failed. Please try again.');
          showAlert('Signup failed. Please try again.');
        }
      } else {
        // Network/connection error
        setError('Servers are busy. Unable to process data.');
      }
      console.error(error);
    }
    finally{
     setIsSubmitting(false);
    }
  };
  const showAlert = (message: string) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/login')
    }, 3000); // Auto-hide after 3 seconds
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to Samyak
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Join us and unlock a world of innovation and synergy!
          </p>

          {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error */}

          <form className="my-8" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" name="firstname" placeholder="Tyler" type="text" value={formData.firstname} onChange={handleChange} />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" name="lastname" placeholder="Durden" type="text" value={formData.lastname} onChange={handleChange} />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" placeholder="bablu1507@fc.com" type="email" value={formData.email} onChange={handleChange} />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" placeholder="••••••••" type="password" value={formData.password} onChange={handleChange} />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" name="phoneNumber" placeholder="+91 *** *** ****" type="text" value={formData.phoneNumber} onChange={handleChange} />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="gender">Gender</Label>
              <Select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-slate-500 focus:border-slate-500 sm:text-sm">
                <option value="">Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="college">College Name</Label>
              <Input id="college" name="college" placeholder="KL University, Vijayawada" type="text" value={formData.college} onChange={handleChange} />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="idNumber">ID Number</Label>
              <Input id="idNumber" name="idNumber" placeholder="Eg.2100031083" type="text" value={formData.idNumber} onChange={handleChange} />
            </LabelInputContainer>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer className="mb-4">
                <Label htmlFor="department">Department</Label>
                <Input id="department" name="department" placeholder="eg. CSE/ECE" type="text" value={formData.department} onChange={handleChange} />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="year">Year</Label>
                <Input id="year" name="year" placeholder="eg. Year/Staff/Faculty" type="text" value={formData.year} onChange={handleChange} />
              </LabelInputContainer>
            </div>

            {/* File inputs for ID card and Aadhaar card */}
            <LabelInputContainer className="mb-4">
              <Label htmlFor="studentID">Student ID Card</Label>
              <Input id="studentID" name="studentID" type="file" onChange={handleFileChange} />
              <p className="text-white">Note: pload Student ID card both sides id card pdf / accepts student bonafide</p>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="aadhaarCard">Aadhaar Card</Label>
              <Input id="aadhaarCard" name="aadhaarCard" type="file" onChange={handleFileChange} />
              
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              {isSubmitting ? (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
                  <p className="text-white mt-4">Processing...</p>
                </div>
              </div>
              ) : (
                'Sign up →'
              )}
              {/* Sign up &rarr; */}
              <BottomGradient />
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>

           {/* Custom Alert Popup */}
           {showPopup && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75">
              <div className="bg-black p-4 rounded-md">
                <p className="text-white">{popupMessage}</p>
              </div>
            </div>
          )}
          <div className="text-slate-300">Already part of the Samyak journey? <button onClick={() => navigate("/Login")}><span className="text-white font-bold underline">Log in and dive back in!</span></button></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
