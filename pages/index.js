import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({});

  const STAGE_OPTIONS = [
    "08 – After 8 days of pruning, when the buds start sprouting",
    "20 – Mature/fully developed inflorescence (natural flowering season or 2–3 weeks post-pruning)",
    "40 – Fully matured fruit",
    "45 – On or after 45 days of pruning",
    "60 – On or after 60 days of pruning",
    "90 – On 90th day of pruning or planting"
  ];

  const ASSESSMENT_OPTIONS = [
    "VG – Visual observation on group",
    "VS – Visual observation on individual",
    "MG – Measured from group",
    "MS – Measured from individual"
  ];

  const traitData = {
    plantVigor: {
      label: "Plant Vigor",
      options: ["Low", "Medium", "High"],
      notes: ["Low (3)", "Medium (5)", "High (7)"]
    },
    growthHabit: {
      label: "Growth Habit",
      options: ["Erect", "Semi-erect", "Spreading", "Drooping"],
      notes: ["Erect (3)", "Semi-erect (5)", "Spreading (7)", "Drooping (9)"]
    },
    sprouting: {
      label: "Sprouting Days",
      options: ["Early (<10)", "Medium (10–15)", "Late (>15)"],
      notes: ["Early (3)", "Medium (5)", "Late (7)"]
    },
    // 🔽 Include the remaining 32 traits here — refer to full traitData from earlier
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    alert(result.message);
  };

  const renderTraitField = (name) => {
    const trait = traitData[name];
    if (!trait) return null;

    return (
      <div key={name} style={{ marginBottom: "2rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
        <label><b>{trait.label}</b></label><br />
        <select name={name} onChange={handleChange} required>
          <option value="">--Select Trait State--</option>
          {trait.options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <div style={{ marginTop: "0.5rem" }}>
          <label>📅 Stage of Observation</label><br />
          <select name={`${name}Stage`} onChange={handleChange} required>
            <option value="">--Select Stage--</option>
            {STAGE_OPTIONS.map((stage) => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: "0.5rem" }}>
          <label>🔍 Type of Assessment</label><br />
          <select name={`${name}Assessment`} onChange={handleChange} required>
            <option value="">--Select Assessment--</option>
            {ASSESSMENT_OPTIONS.map((assess) => (
              <option key={assess} value={assess}>{assess}</option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: "0.5rem" }}>
          <label>📝 Notes</label><br />
          <textarea value={trait.notes.join("\n")} readOnly rows="3" />
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🌿 Mulberry DUS Descriptor Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="variety"
          placeholder="Variety Name"
          onChange={handleChange}
          required
          style={{ marginBottom: "1rem" }}
        /><br />

        <h2>🧬 All Traits</h2>
        {renderTraitField("plantVigor")}
        {renderTraitField("growthHabit")}
        {renderTraitField("sprouting")}
        {/* Add all other renderTraitField("...") lines here */}

        <button type="submit">✅ Submit</button>
      </form>
    </div>
  );
    }
    
