import { useState } from "react";
import { traitData } from "../data/traitData";

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
  const [submitStatus, setSubmitStatus] = useState("");

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

  const handleSubmit = async () => {
    const incompleteTraits = Object.entries(traitData).filter(([traitKey]) => {
      const data = formData[traitKey] || {};
      return !data.value || !data.stage || !data.assessment;
    });

    if (incompleteTraits.length > 0) {
      alert("⚠️ Please fill in all details for each trait before submitting.");
      return;
    }

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("✅ Form submitted successfully!");
        console.log("MongoDB Insert Result:", result);
      } else {
        setSubmitStatus(`❌ Submission failed: ${result.error}`);
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setSubmitStatus("❌ An error occurred during submission.");
    }
  };

  let serialNumber = 1;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        backgroundImage: "url('/mulberryleaves.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "30px",
          color: "#3b3b3b",
          textShadow: "1px 1px #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          src="/mulberryleaves.webp"
          alt="Mulberry Leaves"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        Mulberry DUS Descriptor Form
      </h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        {Object.entries(groupedTraits).map(([group, keys]) => (
          <div key={group}>
            <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{group}</h2>
            {keys.map((key) => renderTrait(key, serialNumber++))}
          </div>
        ))}

        <button
          type="button"
          onClick={handleSubmit}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>

        <p style={{ marginTop: "15px", fontWeight: "bold" }}>{submitStatus}</p>
      </form>
    </div>
  );
}
