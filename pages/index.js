// pages/index.js

import { useState } from "react";
import { traitData } from "../data/traitData";

// Stage & Assessment Options with descriptions
const STAGE_OPTIONS = [
  { code: 8, description: "After 8 days of pruning (bud sprouting)" },
  { code: 20, description: "Mature inflorescence (~2–3 weeks after pruning)" },
  { code: 40, description: "Fully matured fruit" },
  { code: 45, description: "On or after 45 days of pruning" },
  { code: 60, description: "On or after 60 days of pruning" },
  { code: 90, description: "On 90th day of pruning/planting cuttings" },
];

const ASSESSMENT_OPTIONS = [
  { code: "MS", description: "Measurement of individual plants/parts" },
  { code: "MG", description: "Measurement by a single observation on a group" },
  { code: "VS", description: "Visual assessment of individual plants/parts" },
  { code: "VG", description: "Visual assessment by a single observation on a group" },
];

export default function Home() {
  const [formData, setFormData] = useState({});

  const groupedTraits = { Qualitative: [], Quantitative: [], "Pseudo-qualitative": [] };
  Object.entries(traitData).forEach(([key, trait]) => {
    groupedTraits[trait.type]?.push(key);
  });

  const handleChange = (traitKey, updatedData) => {
    setFormData((prev) => ({
      ...prev,
      [traitKey]: updatedData,
    }));
  };

  const renderTrait = (traitKey, serialNumber) => {
    const trait = traitData[traitKey];

    return (
      <div key={traitKey} style={{ marginBottom: "20px" }}>
        <label>
          <h3 style={{ fontWeight: "bold" }}>{serialNumber}. {trait.label}</h3>

          <select
            style={{ marginRight: "10px", marginTop: "5px" }}
            value={formData[traitKey]?.value || ""}
            onChange={(e) => handleChange(traitKey, { ...formData[traitKey], value: e.target.value })}
          >
            <option value="">Select State</option>
            {trait.states.map((state) => (
              <option key={state} value={state}>{trait.stateNotes[state]}</option>
            ))}
          </select>

          <select
            style={{ marginRight: "10px", marginTop: "5px" }}
            value={formData[traitKey]?.stage || ""}
            onChange={(e) => handleChange(traitKey, { ...formData[traitKey], stage: e.target.value })}
          >
            <option value="">Select Stage</option>
            {STAGE_OPTIONS.map((opt) => (
              <option key={opt.code} value={opt.code}>{opt.code} - {opt.description}</option>
            ))}
          </select>

          <select
            style={{ marginTop: "5px" }}
            value={formData[traitKey]?.assessment || ""}
            onChange={(e) => handleChange(traitKey, { ...formData[traitKey], assessment: e.target.value })}
          >
            <option value="">Select Assessment</option>
            {ASSESSMENT_OPTIONS.map((opt) => (
              <option key={opt.code} value={opt.code}>{opt.code} - {opt.description}</option>
            ))}
          </select>
        </label>
      </div>
    );
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  let serialNumber = 1;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        backgroundImage: "url('/mulberry-background.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "36px", fontWeight: "bold", marginBottom: "30px", color: "#3b3b3b", textShadow: "1px 1px #ccc" }}>
        Mulberry DUS Descriptor Form
      </h1>

      <form onSubmit={(e) => e.preventDefault()} style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", padding: "20px", borderRadius: "12px" }}>
        {Object.entries(groupedTraits).map(([group, traitKeys]) => (
          <div key={group} style={{ marginBottom: "30px" }}>
            <h2 style={{ color: "#2a4d69", fontSize: "24px" }}>{group} Traits</h2>
            {traitKeys.map((traitKey) => renderTrait(traitKey, serialNumber++))}
          </div>
        ))}

        <button type="button" onClick={handleSubmit} style={{ fontSize: "18px", padding: "10px 20px" }}>Submit</button>
      </form>
    </div>
  );
}
