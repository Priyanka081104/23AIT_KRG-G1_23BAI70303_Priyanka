import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f97316",
    color: "#fff7ed",
    borderBottom: "1px solid #ea580c",
    marginBottom: "16px",
  };

  const leftGroupStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const brandStyle = {
    fontWeight: 600,
    fontSize: "1rem",
    color: "#fff7ed",
  };

  const linksWrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const linkStyle = {
    color: "#fffbeb",
    textDecoration: "none",
    fontSize: "0.9rem",
  };

  return (
    <nav style={navStyle}>
      <div style={leftGroupStyle}>
        <div style={brandStyle}>EcoTrack</div>
        <div style={linksWrapperStyle}>
          <Link to="/dashboard" style={linkStyle}>
            Dashboard
          </Link>
          <Link to="/dashboard/water" style={linkStyle}>
            Water Tracker
          </Link>
        </div>
      </div>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "#b91c1c",
          borderRadius: "4px",
          border: "none",
          color: "#fffbeb",
          padding: "6px 12px",
          cursor: "pointer",
          fontSize: "0.85rem",
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
