import { useState } from "react";
import { traitData } from "../data/traitData";

export default function Home() {
  const [formData, setFormData] = useState({});

  const STAGE_OPTIONS = [
    "08 - After 8 days of pruning, when the buds start sprouting",
    "20 - Mature/fully developed inflorescence (natural flowering season or 2-3 weeks post-pruning)",
    "40 - Fully matured fruit",
    "45 - On or after 45 days of pruning",
    "60 - On or after 60 days of pruning",
    "90 - On 90th day of pruning or planting",
  ];

  const ASSESSMENT_OPTIONS = [
    "VG - Visual observation on group",
    "VS - Visual observation on individual",
    "MG - Measured from group",
    "MS - Measured from individual",
  ];

  // 🔑 Get all keys from traitData in one array
  const allTraits = Object.keys(traitData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    if (traitData[name]?.stateNotes?.[value]) {
      updated[name + "Note"] = traitData[name].stateNotes[value];
    }
    setFormData(updated);
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const { message } = await res.json();
    alert(message);
  };

  const renderTrait = (key) => {
    const t = traitData[key];
    if (!t) {
      console.warn(`⚠️ Trait "${key}" not found in traitData.js`);
      return null;
    }

    return (
      <div key={key} style={{ marginBottom: "30px" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
          {t.label}
        </label>
        <select
          name={key}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        >
          <option value="">--Select State--</option>
          {t.states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <label style={{ display: "block", marginTop: "10px", fontWeight: "bold" }}>
          Stage of Observation
        </label>
        <select
          name={key + "Stage"}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        >
          <option value="">--Select Stage--</option>
          {STAGE_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <label style={{ display: "block", marginTop: "10px", fontWeight: "bold" }}>
          Type of Assessment
        </label>
        <select
          name={key + "Assessment"}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px" }}
        >
          <option value="">--Select Assessment--</option>
          {ASSESSMENT_OPTIONS.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        Mulberry DUS Descriptor Form
      </h1>

      <form onSubmit={(e) => e.preventDefault()}>
        {allTraits.map(renderTrait)}

        <div style={{ marginTop: "20px" }}>
          <button type="button" onClick={handleSubmit} style={{ marginLeft: "10px" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
