import { useState } from "react";
import { traitData } from "../data/traitData";

export default function Home() {
  const [formData, setFormData] = useState({});

  // Group traits into Qualitative, Quantitative, Pseudo-qualitative
  const groupedTraits = {
    Qualitative: [],
    Quantitative: [],
    "Pseudo-qualitative": [],
  };

  Object.entries(traitData).forEach(([key, trait]) => {
    groupedTraits[trait.type]?.push(key);
  });

  // On change, update formData state
  const handleChange = (traitKey, selectedValue) => {
    setFormData((prev) => ({
      ...prev,
      [traitKey]: selectedValue,
    }));
  };

  // Render one trait dropdown
  const renderTrait = (traitKey) => {
    const trait = traitData[traitKey];

    return (
      <div key={traitKey} style={{ marginBottom: "12px" }}>
        <label>
          <strong>{trait.label}</strong>
          <select
            style={{ marginLeft: "10px" }}
            value={formData[traitKey] || ""}
            onChange={(e) => handleChange(traitKey, e.target.value)}
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

  // Handle form submission
  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    alert("Form submitted! Check console for output.");
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Mulberry DUS Descriptor Form</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        {Object.entries(groupedTraits).map(([group, traitKeys]) => (
          <div key={group} style={{ marginBottom: "20px" }}>
            <h2>{group} Traits</h2>
            {traitKeys.map(renderTrait)}
          </div>
        ))}

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
