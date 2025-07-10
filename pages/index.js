// pages/index.js

import { useState } from "react";
import { traitData } from "../data/traitData";

export default function Home() {
  const [formData, setFormData] = useState({});

  // Group traits by their type
  const groupedTraits = {
    Qualitative: [],
    Quantitative: [],
    "Pseudo-qualitative": [],
  };

  Object.entries(traitData).forEach(([key, trait]) => {
    groupedTraits[trait.type]?.push(key);
  });

  // Handle form field change
  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Form submission
  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    alert("Form submitted! Check console for submitted data.");
  };

  // Render each trait input
  const renderTrait = (key) => {
    const trait = traitData[key];

    return (
      <div key={key} style={{ marginBottom: "10px" }}>
        <label>
          <strong>{trait.label}</strong>
          <select
            value={formData[key] || ""}
            onChange={(e) => handleChange(key, e.target.value)}
            style={{ marginLeft: "10px" }}
          >
            <option value="">Select</option>
            {trait.states.map((state) => (
              <option key={state} value={state}>
                {trait.stateNotes[state]}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Mulberry DUS Descriptor Form</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {Object.entries(groupedTraits).map(([group, keys]) => (
          <div key={group} style={{ marginBottom: "30px" }}>
            <h2>{group} Traits</h2>
            {keys.map(renderTrait)}
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
