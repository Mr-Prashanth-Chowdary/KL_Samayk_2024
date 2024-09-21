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

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/auth/signup', formData);
      alert('Signup successful! Please log in.');
      navigate("/Login"); // Redirect to login page
    } catch (error) {
      setError('Signup failed. Please try again.'); // Handle error
      console.error(error);
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
          Join us and unlock a world of innovation and synergy!
        </p>

        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error */}

        <form className="my-8" onSubmit={handleSubmit}>
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
            <Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" value={formData.email} onChange={handleChange} />
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
            <Input id="college" name="college" placeholder="KL University" type="text" value={formData.college} onChange={handleChange} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="idNumber">ID Number</Label>
            <Input id="idNumber" name="idNumber" placeholder="Eg.2100031083" type="text" value={formData.idNumber} onChange={handleChange} />
          </LabelInputContainer>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="department">Department</Label>
              <Select id="department" name="department" value={formData.department} onChange={handleChange} className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-slate-500 focus:border-slate-500 sm:text-sm">
                <option value="">Select an option</option>
                <option value="fed">FED</option>
<option value="cse(honors)">CSE(HONORS)</option>
<option value="cse(regular)">CSE(REGULAR)</option>
<option value="cse">CSE</option>
<option value="cs&it">CS&IT</option>
<option value="ai&ds">AI&DS</option>
<option value="ece">ECE</option>
<option value="eee">EEE</option>
<option value="ecm">ECM</option>
<option value="mech">MECH</option>
<option value="iot">IOT</option>
<option value="ecs">ECS</option>
<option value="civil">CIVIL</option>
<option value="bt">BT</option>
<option value="bba">BBA</option>
<option value="mba">MBA</option>
<option value="b.com">B.Com</option>
<option value="m.sc. chemistry">M.Sc. Chemistry</option>
<option value="m.com">M.Com</option>
<option value="ba-ias">BA-IAS</option>
<option value="llb">LLB</option>
<option value="bfa">BFA</option>
<option value="mca">MCA</option>
<option value="bca">BCA</option>
<option value="bhm">BHM</option>
<option value="b.pharm">B.PHARM</option>
<option value="m.pharm">M.PHARM</option>
<option value="pharma d">PHARMA D</option>
<option value="visual communications">VISUAL COMMUNICATIONS</option>
<option value="architecture">ARCHITECTURE</option>
<option value="agriculture">AGRICULTURE</option>
<option value="fine arts">FINE ARTS</option>
<option value="others">Others</option>

              </Select>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="year">Year</Label>
              <Select id="year" name="year" value={formData.year} onChange={handleChange} className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-slate-500 focus:border-slate-500 sm:text-sm">
                <option value="">Select an option</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="faculty">Faculty</option>
                <option value="alumni">Alumni</option>
                <option value="others">Others</option>
              </Select>
            </LabelInputContainer>
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
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
