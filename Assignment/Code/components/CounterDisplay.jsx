import React from "react";

const CounterDisplay = React.memo(function CounterDisplay({
  count,
  goal,
  onAdd,
  onRemove,
  onReset,
}) {
  const cardStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
    backgroundColor: "#fff7ed",
    border: "1px solid #fed7aa",
    textAlign: "center",
  };

  const circleCountStyle = {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    backgroundColor: "#fed7aa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#1f2933",
  };

  const circleButtonBase = {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "1rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 6px",
  };

  const addBtn = {
    ...circleButtonBase,
    backgroundColor: "#16a34a",
    color: "white",
  };

  const removeBtn = {
    ...circleButtonBase,
    backgroundColor: "#fee2e2",
    color: "#111827",
  };

  const resetBtn = {
    ...circleButtonBase,
    backgroundColor: "#b91c1c",
    color: "white",
  };

  const isGoalReached = count >= goal && goal > 0;

  return (
    <div style={cardStyle}>
      <h2 style={{ marginBottom: "8px" }}>Daily Water Tracker</h2>
      <p style={{ marginBottom: "16px", color: "#6b7280", fontSize: "0.9rem" }}>
        Track how many glasses of water you drink today.
      </p>

      <div style={circleCountStyle}>{count}</div>
      <div style={{ marginBottom: "12px", color: "#4b5563", fontSize: "0.9rem" }}>
        {count} / {goal} glasses completed
      </div>

      {isGoalReached && (
        <div
          style={{
            marginBottom: "12px",
            padding: "6px 10px",
            borderRadius: "4px",
            backgroundColor: "#dcfce7",
            color: "#166534",
            fontSize: "0.85rem",
          }}
        >
          Goal reached – well done!
        </div>
      )}

      <div style={{ marginBottom: "12px" }}>
        <button style={addBtn} onClick={onAdd} title="Add one glass">
          +
        </button>
        <button style={removeBtn} onClick={onRemove} title="Remove one glass">
          –
        </button>
      </div>

      <button style={resetBtn} onClick={onReset} title="Reset count">
        R
      </button>
    </div>
  );
});

export default CounterDisplay;
