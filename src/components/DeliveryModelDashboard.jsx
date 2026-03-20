import { useState, useEffect } from "react";

const redmPhases = [
  {
    num: "01", name: "Mission Alignment", time: "1–3 Days", color: "#1a2f5e",
    activities: ["Mission framing with OPR & SMEs", "Security baselines established", "Data domains identified", "Communication framework locked"],
    output: "Operational requirements & constraints"
  },
  {
    num: "02", name: "Co-Design", time: "3–7 Days", color: "#1e3a72",
    activities: ["Scenario-based workshops", "Future-state process mapping", "Early UI prototypes built", "Dataverse schema defined"],
    output: "Validated process blueprints"
  },
  {
    num: "03", name: "Rapid Build Cycles", time: "Continuous", color: "#22468a",
    activities: ["Functional slices delivered fast", "Twice-weekly review sessions", "Same-day feedback integration", "Governance & security from day one"],
    output: "Working operational capability"
  },
  {
    num: "04", name: "Validation & Hardening", time: "1–2 Weeks", color: "#2755a8",
    activities: ["UAT with mission stakeholders", "Real-world scenario validation", "RBAC & identity verification", "Performance optimization"],
    output: "Production-ready system"
  },
  {
    num: "05", name: "Deployment & Training", time: "1 Week", color: "#4a7cc7",
    activities: ["Governed ALM pipeline deploy", "Operator & leadership training", "Live data confirmation", "Change management aligned"],
    output: "Live operational system generating data"
  },
  {
    num: "06", name: "Sustainment & Growth", time: "Ongoing", color: "#b8920a",
    activities: ["Mission-driven enhancements", "Telemetry & audit monitoring", "Policy-driven workflow updates", "Leadership turnover continuity"],
    output: "Continuous net-new operational data"
  }
];

const analyticsPhases = [
  {
    num: "A", name: "Problem Framing", color: "#2d5016",
    activities: ["Define analytical question", "Identify decision stakeholders", "Scope analysis boundaries", "Establish success criteria"],
    input: "Operational context & requirements"
  },
  {
    num: "B", name: "Data Requirement", color: "#3a6b1e",
    activities: ["Define data needs", "Identify source systems", "Specify metrics & KPIs", "Document data contracts"],
    input: "System outputs & event records"
  },
  {
    num: "C", name: "Data Selection & Understanding", color: "#4a8428",
    activities: ["Source data from operational systems", "Profile data quality", "Assess completeness & gaps", "Validate field definitions"],
    input: "Workflow events & derived records"
  },
  {
    num: "D", name: "Data Wrangling & Preparation", color: "#5a9e33",
    activities: ["Clean & normalize data", "Resolve schema conflicts", "Build transformation logic", "Create analytical datasets"],
    input: "Structured operational data"
  },
  {
    num: "E", name: "Data Product Modeling", color: "#6db840",
    activities: ["Build analytical models", "Define aggregations", "Create derived metrics", "Establish data lineage"],
    input: "Net-new data created by products"
  },
  {
    num: "F", name: "Analytics & Consume", color: "#82cc50",
    activities: ["Build dashboards & reports", "Deliver decision support", "Enable self-service analytics", "Feed AI/ML systems"],
    input: "Curated data products"
  }
];

const comparisons = [
  { dimension: "Primary Function", redm: "Produce & generate data", analytics: "Consume & synthesize data" },
  { dimension: "Direction", redm: "Upstream (writes to ecosystem)", analytics: "Downstream (reads from ecosystem)" },
  { dimension: "Delivery Unit", redm: "Working operational capability", analytics: "Insight, report, or model" },
  { dimension: "Stakeholder", redm: "Mission owners & operators", analytics: "Decision makers & analysts" },
  { dimension: "Data Role", redm: "Creates net-new data", analytics: "Interprets existing data" },
  { dimension: "Lifecycle End", redm: "Never — system is sustained", analytics: "When question is answered" },
  { dimension: "Success Metric", redm: "Adoption, uptime, data quality", analytics: "Insight accuracy, decision speed" },
  { dimension: "Tooling", redm: "Power Platform, Dataverse, Azure", analytics: "Vantage, Foundry, Power BI" },
  { dimension: "Team Model", redm: "Architect-led product team", analytics: "Analyst / ORSA / data scientist" },
  { dimension: "Delivery Cadence", redm: "Continuous — same-day to weekly", analytics: "Project or report-scoped" },
];

function PhaseCard({ phase, accentColor, inputLabel, isMobile }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 32, flexShrink: 0 }}>
        <div
          onClick={() => isMobile && setOpen(o => !o)}
          style={{
            width: 32, height: 32, borderRadius: "50%",
            background: open ? phase.color : "#0d1117",
            border: `2px solid ${phase.color}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: "bold",
            color: open ? "#fff" : phase.color,
            fontFamily: "monospace",
            cursor: isMobile ? "pointer" : "default",
            flexShrink: 0, transition: "all 0.2s"
          }}
        >
          {phase.num}
        </div>
      </div>
      <div
        onMouseEnter={() => !isMobile && setOpen(true)}
        onMouseLeave={() => !isMobile && setOpen(false)}
        onClick={() => isMobile && setOpen(o => !o)}
        style={{
          flex: 1,
          background: open ? (accentColor === "#b8920a" ? "#131e35" : "#0f1f10") : "#0f1923",
          border: `1px solid ${open ? phase.color + "80" : "#1f2d3d"}`,
          borderRadius: 8, padding: "10px 14px",
          cursor: isMobile ? "pointer" : "default",
          transition: "all 0.2s"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: open ? 8 : 4 }}>
          <span style={{ fontSize: 13, fontWeight: "bold", color: "#e8e8e8", flex: 1, paddingRight: 8 }}>{phase.name}</span>
          {phase.time && (
            <span style={{ fontSize: 10, color: phase.color, fontFamily: "monospace", background: `${phase.color}20`, padding: "2px 6px", borderRadius: 10, flexShrink: 0 }}>
              {phase.time}
            </span>
          )}
        </div>
        {open && (
          <div style={{ marginBottom: 8 }}>
            {phase.activities.map((act, j) => (
              <div key={j} style={{ fontSize: 11, color: "#8a9ab0", marginBottom: 3, display: "flex", gap: 6, alignItems: "flex-start" }}>
                <span style={{ color: phase.color, flexShrink: 0 }}>▸</span>{act}
              </div>
            ))}
          </div>
        )}
        <div style={{
          fontSize: 11, color: accentColor,
          background: `${accentColor}18`,
          padding: "3px 8px", borderRadius: 4,
          borderLeft: `2px solid ${accentColor}`
        }}>
          <span style={{ color: "#6b7280" }}>{inputLabel}: </span>
          {phase.output || phase.input}
        </div>
      </div>
    </div>
  );
}

export default function DeliveryModelDashboard() {
  const [activeTab, setActiveTab] = useState("lifecycle");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const tabs = [
    { id: "lifecycle", label: "Lifecycle" },
    { id: "flow", label: "Data Flow" },
    { id: "matrix", label: "Matrix" }
  ];

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0d1117", minHeight: "100vh", color: "#e8e8e8" }}>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a2f5e 50%, #0a1628 100%)",
        borderBottom: "2px solid #b8920a",
        padding: isMobile ? "20px 16px 16px" : "32px 40px 24px"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ width: 4, height: 32, background: "#b8920a", borderRadius: 2, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#b8920a", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 2 }}>
                Delivery Model Analysis
              </div>
              <h1 style={{ margin: 0, fontSize: isMobile ? 18 : 24, fontWeight: "bold", color: "#ffffff", letterSpacing: 0.5 }}>
                Product Engineering vs. Analytics
              </h1>
            </div>
          </div>
          <p style={{ margin: "10px 0 0", fontSize: isMobile ? 12 : 13, color: "#a0b4d0", lineHeight: 1.6, paddingLeft: 16 }}>
            Product engineering <strong style={{ color: "#b8920a" }}>writes</strong> data into existence.
            Analytics <strong style={{ color: "#82cc50" }}>reads</strong> data to produce insight.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "#111827", borderBottom: "1px solid #1f2d3d", padding: isMobile ? "0 16px" : "0 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex" }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              padding: isMobile ? "12px 16px" : "14px 24px",
              background: "none", border: "none",
              borderBottom: activeTab === tab.id ? "2px solid #b8920a" : "2px solid transparent",
              color: activeTab === tab.id ? "#b8920a" : "#6b7280",
              cursor: "pointer", fontSize: isMobile ? 11 : 12,
              fontFamily: "monospace", letterSpacing: 1, textTransform: "uppercase"
            }}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "20px 16px" : "32px 40px" }}>

        {activeTab === "lifecycle" && (
          <div>
            {isMobile ? (
              <div>
                <div style={{ marginBottom: 32 }}>
                  <div style={{ marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid #1f2d3d" }}>
                    <div style={{ fontSize: 10, letterSpacing: 3, color: "#b8920a", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 4 }}>◈ REDM — Product Engineering</div>
                    <div style={{ fontSize: 16, fontWeight: "bold", color: "#e8e8e8" }}>Rapid Engagement Delivery Model</div>
                    <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4 }}>Builds operational systems that generate net-new data</div>
                  </div>
                  {redmPhases.map((phase, i) => <PhaseCard key={i} phase={phase} accentColor="#b8920a" inputLabel="Output" isMobile={true} />)}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, padding: "12px 16px", background: "#0f1923", borderRadius: 8, border: "1px solid #b8920a30" }}>
                  <div style={{ fontSize: 20, color: "#b8920a" }}>↓</div>
                  <div>
                    <div style={{ fontSize: 11, color: "#b8920a", fontFamily: "monospace", letterSpacing: 1 }}>DATA FLOWS DOWNSTREAM</div>
                    <div style={{ fontSize: 11, color: "#6b7280" }}>Operational data created by REDM products feeds the analytics layer</div>
                  </div>
                </div>

                <div>
                  <div style={{ marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid #1f2d3d" }}>
                    <div style={{ fontSize: 10, letterSpacing: 3, color: "#82cc50", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 4 }}>◈ Analytics — Data Intelligence</div>
                    <div style={{ fontSize: 16, fontWeight: "bold", color: "#e8e8e8" }}>Defense Data Orchestration Framework</div>
                    <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4 }}>Consumes operational data to produce decision insight</div>
                  </div>
                  {analyticsPhases.map((phase, i) => <PhaseCard key={i} phase={phase} accentColor="#82cc50" inputLabel="Requires" isMobile={true} />)}
                </div>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 110px 1fr", gap: 0 }}>
                <div>
                  <div style={{ marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #1f2d3d" }}>
                    <div style={{ fontSize: 10, letterSpacing: 3, color: "#b8920a", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 4 }}>◈ REDM — Product Engineering</div>
                    <div style={{ fontSize: 18, fontWeight: "bold", color: "#e8e8e8" }}>Rapid Engagement Delivery Model</div>
                    <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>Builds operational systems that generate net-new data</div>
                  </div>
                  {redmPhases.map((phase, i) => <PhaseCard key={i} phase={phase} accentColor="#b8920a" inputLabel="Output" isMobile={false} />)}
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 80 }}>
                  <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom, transparent, #b8920a)" }} />
                  <div style={{ width: 80, padding: "10px 8px", background: "#0d1117", border: "1px solid #b8920a50", borderRadius: 8, textAlign: "center" }}>
                    <div style={{ fontSize: 16, marginBottom: 4 }}>⟶</div>
                    <div style={{ fontSize: 9, color: "#b8920a", fontFamily: "monospace", letterSpacing: 1, lineHeight: 1.4 }}>DATA<br />FLOWS<br />HERE</div>
                  </div>
                  <div style={{ width: 1, flex: 1, background: "linear-gradient(to bottom, #b8920a, #82cc50)" }} />
                  <div style={{ width: 80, padding: "10px 8px", background: "#0d1117", border: "1px solid #82cc5050", borderRadius: 8, textAlign: "center", marginBottom: 8 }}>
                    <div style={{ fontSize: 16, marginBottom: 4 }}>⟶</div>
                    <div style={{ fontSize: 9, color: "#82cc50", fontFamily: "monospace", letterSpacing: 1, lineHeight: 1.4 }}>INSIGHT<br />FLOWS<br />BACK</div>
                  </div>
                </div>

                <div>
                  <div style={{ marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #1f2d3d" }}>
                    <div style={{ fontSize: 10, letterSpacing: 3, color: "#82cc50", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 4 }}>◈ Analytics — Data Intelligence</div>
                    <div style={{ fontSize: 18, fontWeight: "bold", color: "#e8e8e8" }}>Defense Data Orchestration Framework</div>
                    <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>Consumes operational data to produce decision insight</div>
                  </div>
                  {analyticsPhases.map((phase, i) => <PhaseCard key={i} phase={phase} accentColor="#82cc50" inputLabel="Requires" isMobile={false} />)}
                </div>
              </div>
            )}
            <p style={{ textAlign: "center", fontSize: 10, color: "#4a5568", fontFamily: "monospace", marginTop: 24 }}>
              {isMobile ? "TAP PHASES TO EXPAND" : "HOVER PHASES TO EXPAND"}
            </p>
          </div>
        )}

        {activeTab === "flow" && (
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <h2 style={{ color: "#e8e8e8", fontSize: isMobile ? 17 : 20, marginBottom: 8 }}>Where the Data Actually Comes From</h2>
              <p style={{ color: "#6b7280", fontSize: isMobile ? 12 : 13, maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
                Analytics can only function downstream of operational systems. REDM builds those systems. Without the product engineering layer, analytics teams have nothing to wrangle.
              </p>
            </div>

            {[
              {
                layer: "SOURCE SYSTEMS", color: "#374151", textColor: "#9ca3af",
                items: ["IPPS-A", "ATTRS", "DAMPS", "MedChart", "GSA Rates"],
                desc: "Raw transactional data from enterprise systems", arrow: true, arrowLabel: "SOURCE DATA IN"
              },
              {
                layer: "REDM — PRODUCT ENGINEERING LAYER", color: "#1a2f5e", accent: "#b8920a", textColor: "#e8e8e8",
                items: ["Operational Apps", "Workflow Automation", "Derived Records", "Cost Computations", "Decision Events"],
                desc: "Transforms source data into operational capability. Generates net-new data that didn't exist before.",
                highlight: true, arrow: true, arrowLabel: "OPERATIONAL DATA OUT"
              },
              {
                layer: "DATA ECOSYSTEM — WHAT GETS FED", color: "#1a3020", accent: "#82cc50", textColor: "#e8e8e8",
                items: ["Analytics Platforms", "AI/ML Models", "Downstream Products", "Reporting Dashboards", "Decision Support"],
                desc: "Consumes the operational data produced by the product layer to generate insight and intelligence.",
                arrow: false
              }
            ].map((block, i) => (
              <div key={i}>
                <div style={{
                  background: block.highlight ? "linear-gradient(135deg, #1a2f5e, #0f1f40)" : `${block.color}40`,
                  border: `1px solid ${(block.accent || block.color)}${block.highlight ? "" : "60"}`,
                  borderRadius: 12, padding: isMobile ? "16px" : "24px 28px",
                  boxShadow: block.highlight ? "0 0 30px #b8920a20" : "none",
                  position: "relative"
                }}>
                  {block.highlight && <div style={{ position: "absolute", top: -1, left: 20, right: 20, height: 2, background: "linear-gradient(90deg, transparent, #b8920a, transparent)" }} />}
                  <div style={{ fontSize: 10, letterSpacing: 3, color: block.accent || block.textColor, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>{block.layer}</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                    {block.items.map((item, j) => (
                      <div key={j} style={{ padding: "5px 12px", background: block.highlight ? "#b8920a20" : "#ffffff10", border: `1px solid ${block.accent || "#ffffff20"}`, borderRadius: 20, fontSize: isMobile ? 11 : 12, color: block.accent || block.textColor }}>{item}</div>
                    ))}
                  </div>
                  <p style={{ margin: 0, fontSize: isMobile ? 11 : 12, color: "#6b7280", lineHeight: 1.6 }}>{block.desc}</p>
                </div>
                {block.arrow && (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "6px 0" }}>
                    <div style={{ width: 2, height: 12, background: "#2d3748" }} />
                    <div style={{ color: "#4a5568", fontSize: 14 }}>▼</div>
                    <div style={{ fontSize: 9, color: "#4a5568", fontFamily: "monospace", letterSpacing: 2 }}>{block.arrowLabel}</div>
                  </div>
                )}
              </div>
            ))}

            <div style={{ marginTop: 32, background: "#0f1923", border: "1px solid #b8920a40", borderRadius: 12, padding: isMobile ? 18 : 28, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 10, fontFamily: "monospace" }}>THE ARGUMENT IN ONE LINE</div>
              <blockquote style={{ fontSize: isMobile ? 15 : 17, color: "#e8e8e8", fontStyle: "italic", margin: 0, lineHeight: 1.7 }}>
                "We don't live inside the analytics framework.<br />
                <span style={{ color: "#b8920a" }}>We're what makes the analytics framework possible.</span>"
              </blockquote>
            </div>
          </div>
        )}

        {activeTab === "matrix" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <h2 style={{ color: "#e8e8e8", fontSize: isMobile ? 17 : 20, marginBottom: 8 }}>Delivery Model Comparison Matrix</h2>
              <p style={{ color: "#6b7280", fontSize: isMobile ? 12 : 13 }}>Different teams, tools, metrics, and organizational placement.</p>
            </div>

            {isMobile ? (
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                  <div style={{ padding: "8px 12px", background: "#b8920a20", border: "1px solid #b8920a50", borderRadius: 6, fontSize: 11, color: "#b8920a", fontFamily: "monospace", textAlign: "center" }}>◈ REDM</div>
                  <div style={{ padding: "8px 12px", background: "#82cc5020", border: "1px solid #82cc5050", borderRadius: 6, fontSize: 11, color: "#82cc50", fontFamily: "monospace", textAlign: "center" }}>◈ Analytics</div>
                </div>
                {comparisons.map((row, i) => (
                  <div key={i} style={{ marginBottom: 10, background: "#0f1923", border: "1px solid #1f2d3d", borderRadius: 8, overflow: "hidden" }}>
                    <div style={{ padding: "6px 12px", background: "#111827", fontSize: 10, color: "#8a9ab0", fontFamily: "monospace", letterSpacing: 1, textTransform: "uppercase" }}>{row.dimension}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                      <div style={{ padding: "8px 12px", borderRight: "1px solid #1f2d3d", fontSize: 12, color: "#c8d8f0" }}><span style={{ color: "#b8920a" }}>▸ </span>{row.redm}</div>
                      <div style={{ padding: "8px 12px", fontSize: 12, color: "#c8d8f0" }}><span style={{ color: "#82cc50" }}>▸ </span>{row.analytics}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr>
                    <th style={{ padding: "14px 20px", textAlign: "left", color: "#6b7280", fontFamily: "monospace", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", borderBottom: "1px solid #1f2d3d", width: "28%" }}>Dimension</th>
                    <th style={{ padding: "14px 20px", textAlign: "left", color: "#b8920a", fontFamily: "monospace", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", borderBottom: "2px solid #b8920a60" }}>◈ REDM — Product Engineering</th>
                    <th style={{ padding: "14px 20px", textAlign: "left", color: "#82cc50", fontFamily: "monospace", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", borderBottom: "2px solid #82cc5060" }}>◈ Analytics Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#0f1923" : "#0d1117" }}>
                      <td style={{ padding: "13px 20px", color: "#8a9ab0", fontWeight: "bold", fontSize: 12, borderBottom: "1px solid #1a2332" }}>{row.dimension}</td>
                      <td style={{ padding: "13px 20px", color: "#c8d8f0", borderBottom: "1px solid #1a2332", borderLeft: "1px solid #b8920a20" }}><span style={{ color: "#b8920a" }}>▸ </span>{row.redm}</td>
                      <td style={{ padding: "13px 20px", color: "#c8d8f0", borderBottom: "1px solid #1a2332", borderLeft: "1px solid #82cc5020" }}><span style={{ color: "#82cc50" }}>▸ </span>{row.analytics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, marginTop: 28 }}>
              <div style={{ background: "#0f1923", border: "1px solid #b8920a40", borderRadius: 10, padding: 18 }}>
                <div style={{ fontSize: 10, color: "#b8920a", fontFamily: "monospace", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>REDM Tenets</div>
                {["Mission First", "Build to Learn", "Continuous Stakeholder Presence", "Rapid Tangible Progress", "Adaptive Governance", "Iterate Relentlessly", "Platform-Led Design"].map((t, i) => (
                  <div key={i} style={{ fontSize: 12, color: "#8a9ab0", marginBottom: 6, display: "flex", gap: 8 }}>
                    <span style={{ color: "#b8920a", flexShrink: 0 }}>0{i + 1}</span>{t}
                  </div>
                ))}
              </div>
              <div style={{ background: "#0f1923", border: "1px solid #82cc5040", borderRadius: 10, padding: 18 }}>
                <div style={{ fontSize: 10, color: "#82cc50", fontFamily: "monospace", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>Analytics Persona Requirements</div>
                {["Decision Maker — consumes final insight", "Data Analyst — interprets structured data", "ORSA / Data Scientist — builds models", "Data Engineer — pipelines clean data", "Data Architect — governs the platform", "Software Engineer — maintains tooling", "System / Network Admin — infrastructure"].map((t, i) => (
                  <div key={i} style={{ fontSize: 12, color: "#8a9ab0", marginBottom: 6, display: "flex", gap: 8 }}>
                    <span style={{ color: "#82cc50", flexShrink: 0 }}>▸</span>{t}
                  </div>
                ))}
                <div style={{ marginTop: 12, padding: "8px 10px", background: "#82cc5012", borderRadius: 6, fontSize: 11, color: "#6b7280", borderLeft: "2px solid #82cc50" }}>
                  None of these roles build the operational systems that generate the data they depend on.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
