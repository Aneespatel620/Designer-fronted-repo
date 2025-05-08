import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "./Signup.css";
import { useAuth } from "../store/store_auth";


const LOGIN_URL = "http://localhost:5000/api/login";
const SIGNUP_URL = "http://localhost:5000/api/signup";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [forData, setForData] = useState({ name: "", email: "", password: "", dob: "" });

    const {storeTokenInLs} = useAuth();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleChangee = (e) => {
        setForData({ ...forData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            // alert("Please fill in all fields.");
            toast.warn("Please fill in all fields.");
            return;
        }

        try {
            const response = await fetch(LOGIN_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                storeTokenInLs(result.token, result.username); 

                // localStorage.setItem("authToken", result.token);
                // localStorage.setItem("username", result.username);
                // localStorage.setItem("userId", result.userId);
                // alert("Login successful!");
                toast.success("Login Successful !!")
                // console.log("Token Saved:", localStorage.getItem("authToken"));
                console.log("Username:", localStorage.getItem("username"));
                // console.log("User ID:", localStorage.getItem("userId"));
                navigate("/");
            } else{
                // alert(result.msg || "Login failed!");
                toast.error(result.msg || "Login failed!");
            }
            // if (response.ok) {
                
            //     alert("Login successful!");

                 

            //     navigate("/");
            // } else {
            //     alert(result.msg || "Login failed!");
            // }
        } catch (error) {
            // alert("Server error! Please try again.");
            toast.error("Server error! Please try again.");
        }
    };

    const handleSubmitt = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(SIGNUP_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(forData),
            });
            const data = await response.json();
            if(response.ok){
                // alert(data.msg);
                toast.success(data.msg);
                
                setForData({ name: "", email: "", password: "", dob: "" });
            }else{
                // alert(data.msg || "registraion fail");
                toast.error(data.msg || "Registration failed!");
            }
           

        } catch (error) {
            console.error("Error:", error);
            // alert("Error occurred while signing up");
            toast.error("Error occurred while signing up.");
        }
    };

    return (
        <div className="container_login">
            <div className="main_login">
                <h3>Welcome, please login</h3>
                <form onSubmit={handleSubmit}>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your registered email.."
                    />
                    <br /><br />
                    <span>Password:</span>
                    <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                    <br /><br />
                    <button type="submit">Login</button>
                </form>
            </div>

            <div className="main_signup">
                <h2>Signup</h2>
                <br />
                <form onSubmit={handleSubmitt}>
                    <span>Name:</span>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter Your Name .."
                        onChange={handleChangee}
                    />
                    <br /><br />
                    <span>Date of Birth:</span>
                    <input
                        name="dob"
                        type="date"
                        placeholder="Enter your date of birth.."
                        onChange={handleChangee}
                    />
                    <br /><br />
                    <span>Email:</span>
                    <br></br>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email ID .."
                        onChange={handleChangee}
                    />
                    <br /><br />
                    <span>Password:</span>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={handleChangee}
                    />
                    <br /><br />
                    <button type="submit">Signup</button>
                </form>
            </div>
            <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  pauseOnHover
  theme="colored"
/>

        </div>
    );
};

export default Login;
