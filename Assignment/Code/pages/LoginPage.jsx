import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("authToken", "fake-token");
    navigate("/dashboard");
  };

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    backgroundColor: "#fff7ed",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "380px",
    padding: "24px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    border: "1px solid #fed7aa",
    boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
  };

  const leftPaneStyle = {};
  const rightPaneStyle = {};

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    marginBottom: "12px",
    borderRadius: "999px",
    border: "1px solid #fed7aa",
    fontSize: "0.95rem",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
    color: "#111827",
    outline: "none",
  };

  const buttonStyle = {
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#ea580c",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "0.8rem",
    cursor: "pointer",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={leftPaneStyle}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "#fed7aa",
                margin: "0 auto 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                color: "#9a3412",
              }}
            >
              ET
            </div>
            <h1 style={{ margin: 0, fontSize: "1.4rem", color: "#111827" }}>
              EcoTrack
            </h1>
            <p
              style={{
                margin: "6px 0 0",
                color: "#6b7280",
                fontSize: "0.9rem",
              }}
            >
              Sign in to start tracking your water.
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <label
              style={{
                display: "block",
                marginBottom: "4px",
                fontWeight: 500,
                color: "#374151",
                fontSize: "0.85rem",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              autoComplete="email"
            />

            <label
              style={{
                display: "block",
                marginBottom: "4px",
                fontWeight: 500,
                color: "#374151",
                fontSize: "0.85rem",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              autoComplete="current-password"
            />

            <button type="submit" style={buttonStyle}>
              Go
            </button>
          </form>
        </div>

        <div style={rightPaneStyle} />
      </div>
    </div>
  );
};

export default LoginPage;
