

import React, { useState, useEffect } from "react";
import './Contact.css';
import Swal from "sweetalert2";
import { useAuth } from "../store/store_auth.jsx";

const Contact = () => {
  const { person } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Safe auto-fill once person is loaded// ✅ ye bhi sahi hai ..
  // useEffect(() => {
  //   if (person) {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       name: person.name || "",
  //       email: person.email || "",
  //       message: "Hey, ",
  //     }));
  //   }
  // }, [person]);

  useEffect(() => {
    if (person) {
      setFormData({
        name: person.name,
        email: person.email,
        message: "Hey, "
      });
    }
  }, [person]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 const Clear =(e)=>{
  setFormData({ name: "", email: "", message: "" });
 }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all fields!",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          feedback: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: result.msg,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: result.msg || "Submission failed.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Please try again later.",
      });
    }
  };

  return (
    <div className="main_contact">
      {person?.name && <h2>Hello, {person.name}!</h2>}
      <h1>Contact Form</h1>
      <div className="card_contact">
        <form onSubmit={handleSubmit}>
          <span>Name</span>:
          <input
            id="in"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <br /><br /><br />
          <span>E-mail</span>:
          <input
            id="in"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br /><br />
          <span>Message</span>:
          <br /><br />
          <textarea
            id="tex"
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <br />
          <button id ="btn" name ="clear" onClick={Clear} >Clear</button>
          <span></span> <span></span>
          <button type="submit">Submit</button> <span></span>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
