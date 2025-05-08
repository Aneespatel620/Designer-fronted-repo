import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      height: "100vh", textAlign: "center", backgroundColor: "#f8f9fa"
    }}>
      <h1 style={{ fontSize: "5rem", color: "#dc3545" }}>404</h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Oops! Page Not Found</h2>
      <p style={{ fontSize: "1.2rem", color: "#6c757d" }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px", padding: "10px 20px", fontSize: "1rem", cursor: "pointer",
          backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px"
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
