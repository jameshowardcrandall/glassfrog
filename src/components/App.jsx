import { useState } from "react";
import DeliveryModelDashboard from "./DeliveryModelDashboard.jsx";
import DataAnalyticsTeamDashboard from "./DataAnalyticsTeamDashboard.jsx";

const dashboards = [
  { id: "delivery", label: "Delivery Model", desc: "REDM Product Engineering vs. Analytics" },
  { id: "analytics-team", label: "Analytics Team", desc: "Roles, Tooling & DoD Team Composition" },
];

export default function App() {
  const [activeDashboard, setActiveDashboard] = useState("delivery");

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0d1117", minHeight: "100vh", color: "#e8e8e8" }}>
      {/* Dashboard Selector Bar */}
      <div style={{
        background: "#080c14",
        borderBottom: "1px solid #1f2d3d",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        gap: 4,
        overflowX: "auto",
      }}>
        <div style={{
          fontSize: 10,
          letterSpacing: 2,
          color: "#4a5568",
          fontFamily: "monospace",
          textTransform: "uppercase",
          padding: "12px 12px 12px 0",
          borderRight: "1px solid #1f2d3d",
          marginRight: 4,
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>
          Glassfrog
        </div>
        {dashboards.map(d => (
          <button
            key={d.id}
            onClick={() => setActiveDashboard(d.id)}
            style={{
              padding: "10px 16px",
              background: activeDashboard === d.id ? "#1a2f5e" : "transparent",
              border: activeDashboard === d.id ? "1px solid #b8920a60" : "1px solid transparent",
              borderRadius: 6,
              color: activeDashboard === d.id ? "#e8e8e8" : "#6b7280",
              cursor: "pointer",
              fontSize: 12,
              fontFamily: "'Georgia', serif",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
            title={d.desc}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Active Dashboard */}
      {activeDashboard === "delivery" && <DeliveryModelDashboard />}
      {activeDashboard === "analytics-team" && <DataAnalyticsTeamDashboard />}
    </div>
  );
}
