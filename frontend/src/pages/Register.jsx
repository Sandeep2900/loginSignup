import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [form, setForm] = useState({name:"", email:"", password:""});
    const navigate = useNavigate();

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/auth/signup", form);
            alert("Signup successful");
            navigate("/login");
        } catch (err) {
            alert("Error: " + err.response?.data?.message || err.message);
        }
    };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Register</h2>
        
        <input 
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
          type="text" 
          name="name" 
          placeholder="Name" 
          onChange={handleChange}
        />

        <input 
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={handleChange}
        />

        <input 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={handleChange}
        />

        <button 
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200 shadow-md"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Register;
