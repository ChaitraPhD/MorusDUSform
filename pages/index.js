import { useState } from "react";
import { traitData } from "../data/traitData";

export default function Home() {
  const [formData, setFormData] = useState({});

  // Group traits by type
  const groupedTraits = {
    Qualitative: [],
    Quantitative: [],
    "Pseudo-qualitative": [],
  };

  Object.entries(traitData).forEach(([key, trait]) => {
    groupedTraits[trait.type]?.push(key);
  });

  // Handle dropdown value change
  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Render each trait with a serial number
  const renderTrait = (traitKey, serialNumber) => {
    const trait = traitData[traitKey];

    return (
      <div key={traitKey} style={{ marginBottom: "12px" }}>
        <label>
          <strong>{serialNumber}. {trait.label}</strong>
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
    console.log("Form Data Submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  // Rendering the form with serial numbering
  let serialNumber = 1;
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Mulberry DUS Descriptor Form</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        {Object.entries(groupedTraits).map(([group, traitKeys]) => (
          <div key={group} style={{ marginBottom: "30px" }}>
            <h2>{group} Traits</h2>
            {traitKeys.map((traitKey) => renderTrait(traitKey, serialNumber++))}
          </div>
        ))}

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
