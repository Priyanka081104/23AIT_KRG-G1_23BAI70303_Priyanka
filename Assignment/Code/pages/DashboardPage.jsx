import React from "react";
import Navbar from "../components/Navbar";

const DashboardPage = () => {
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#fff7ed",
    color: "#1f2933",
  };

  const contentStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "16px 16px 32px",
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <main style={contentStyle}>
        <h1 style={{ marginBottom: "8px" }}>Dashboard</h1>
        <p style={{ color: "#4b5563", marginBottom: "16px" }}>
          Welcome to EcoTrack. Use the navigation bar to open the Water Tracker
          and log your daily glasses.
        </p>
      </main>
    </div>
  );
};

export default DashboardPage;
