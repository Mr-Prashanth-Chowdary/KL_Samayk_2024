"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { Footer } from "./Footer/Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios"; // You may need to install axios

export function LoginDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  // console.log(modalOpen, step)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // Set loading to true when the request starts

    try {
      const response = await axios.post('http://127.0.0.1:3000/api/auth/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setLoading(false); // Set loading to false when done
      navigate('/profile');
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password.");
      setLoading(false); // Set loading to false if there's an error
    }
  };

  //Forgot password
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Show the loading popup
    try {
      await axios.post('http://127.0.0.1:3000/api/auth/forgot-password', { email });
      setLoading(false); // Hide the loading popup
      setStep(2); // Move to the next step (OTP input)
    } catch (error) {
      console.error("Failed to send email:", error);
      setError("Failed to send email.");
      setLoading(false);
    }
  };

  // OTP field
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://127.0.0.1:3000/api/auth/verify-otp', { email, otp });
      setLoading(false);
      setStep(3); // Move to password reset step
    } catch (error) {
      console.error("OTP verification failed:", error);
      setError("Invalid OTP.");
      setLoading(false);
    }
  };

  // Handling new password
  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMatchError(null);
    setLoading(true);
    if (newPassword !== confirmPassword) {
      setPasswordMatchError("Passwords do not match.");
      setLoading(false);
      return;
    }
    try {
      await axios.post('http://127.0.0.1:3000/api/auth/reset-password', { email, newPassword });
      setLoading(false);
      setModalOpen(false);
      setError(null);
    } catch (error) {
      console.error("Password reset failed:", error);
      setError("Failed to reset password.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to Samyak
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Experience innovation, collaboration, and excitement. Log in to begin your journey!
          </p>
          {error && (
            <div className="mb-4 text-red-600">{error}</div> // Display error message
          )}
          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="PSunnyhem@fc.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a onClick={() => setModalOpen(true)} className='cursor-pointer'>
                <p className="text-white underline text-sm">Forget Password?</p>
              </a>
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign in &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <div className="text-slate-300">Don’t have an account yet?
              <button onClick={() => navigate("/Register")}>
                <span className="text-white font-bold underline">Sign up now and unlock happiness!</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />

      {/* Loading popup with spinner */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
            <p className="text-white mt-4">Authenticating...</p>
          </div>
        </div>
      )}

{modalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg w-full max-w-md relative">
    {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
            <p className="text-white mt-4">Authenticating...</p>
          </div>
        </div>
      )}
      
      {/* Close Button */}
      <button 
        className="absolute top-3 right-3 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
        onClick={() => setModalOpen(false)}
      >
        &times;
      </button>
      
      <h2 className="text-xl font-bold text-center mb-4 text-neutral-800 dark:text-neutral-200">Forgot Password</h2>
      
      {/* Step 1: Enter Email */}
      {step === 1 && (
        <form onSubmit={(e)=>{
          setLoading(true);
          handleForgotPassword(e);
          }}>
          <LabelInputContainer className="mb-4">
           
            <Input
              id="email"
              type="email"
              className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600 dark:bg-zinc-800 dark:border-neutral-700 dark:text-neutral-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </LabelInputContainer>
          <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send OTP &rarr;
              <BottomGradient />
            </button>
        </form>
      )}

      {/* Step 2: Enter OTP */}
      {step === 2 && (
        <form onSubmit={(e) =>{
          setLoading(true);
          handleOtpSubmit(e);
          }}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="otp" className="text-neutral-600 dark:text-neutral-300">Enter OTP</Label>
            <Input
              id="otp"
              type="text"
              className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600 dark:bg-zinc-800 dark:border-neutral-700 dark:text-neutral-100"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </LabelInputContainer>
          <button 
            type="submit"
            className="bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 text-white rounded-md py-2 px-4 w-full mt-4"
          >
            Verify OTP
          </button>
        </form>
      )}

      {/* Step 3: Reset Password */}
      {step === 3 && (
        <form onSubmit={(e) =>{
        setStep(1)
        setLoading(true);
        handlePasswordReset(e)}}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="newPassword" className="text-neutral-600 dark:text-neutral-300">New Password</Label>
            <Input
              id="newPassword"
              type="password"
              className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600 dark:bg-zinc-800 dark:border-neutral-700 dark:text-neutral-100"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="confirmPassword" className="text-neutral-600 dark:text-neutral-300">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600 dark:bg-zinc-800 dark:border-neutral-700 dark:text-neutral-100"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </LabelInputContainer>
          {passwordMatchError && (
            <div className="text-red-600 mb-4">{passwordMatchError}</div>
          )}
          <button 
            type="submit"
            className="bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 text-white rounded-md py-2 px-4 w-full mt-4"
          >
            Reset Password
          </button>
        </form>
      )}
    </div>
  </div>
)}


    </>
  );
}

// Additional components (BottomGradient and LabelInputContainer)
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
