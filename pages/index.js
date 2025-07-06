import { useState } from "react";
import { traitData } from "../data/traitData_with_types";

export default function Home() {
  const [formData, setFormData] = useState({});
  const [notes, setNotes] = useState({});

  const STAGE_OPTIONS = [
    "08 “ After 8 days of pruning, when the buds start sprouting",
    "20 “ Mature/fully developed inflorescence (natural flowering season or 2â€“3 weeks post-pruning)",
    "40 “ Fully matured fruit",
    "45 “ On or after 45 days of pruning",
    "60 “ On or after 60 days of pruning",
    "90 “ On 90th day of pruning or planting"
  ];

  const ASSESSMENT_OPTIONS = [
    "VG “ Visual observation on group",
    "VS “ Visual observation on individual",
    "MG “ Measured from group",
    "MS “ Measured from individual"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (traitData[name]) {
      const note = traitData[name].stateNotes[value] || "";
      setNotes(prev => { return { ...prev, [name + "Note"]: note }; });
    }
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
      <div key={name} style={ marginBottom: "2rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }>
        <label><b>{trait.label}</b></label><br />
        <select name={name} onChange={handleChange} required>
          <option value="">--Select State--</option>
          {trait.states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>

        <div style={ marginTop: "0.5rem" }>
          <label>ðŸ“ Definition (Note)</label><br />
          <input type="text" name={name + "Note"} value={notes[name + "Note"] || ""} readOnly />
        </div>

        <div style={ marginTop: "0.5rem" }>
          <label>Stage of Observation</label><br />
          <select name={name + "Stage"} onChange={handleChange} required>
            <option value="">--Select Stage--</option>
            {STAGE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div style={ marginTop: "0.5rem" }>
          <label>Type of Assessment</label><br />
          <select name={name + "Assessment"} onChange={handleChange} required>
            <option value="">--Select Assessment--</option>
            {ASSESSMENT_OPTIONS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>
    );
  };

  // Grouped trait keys
  const quantitativeTraits = ["plantVigor", "sprouting", "cuttingSurvival", "shootThickness", "internodalDistance", "petioleLength", "leafLength", "leafWidth", "budSize", "inflorescenceLength", "fruitLength", "fruitWidth"];
  const qualitativeTraits = ["stipuleNature", "budAttachment", "accessoryBud", "sex", "stigmaNature", "stigmaType"];
  const pseudoQualitativeTraits = ["growthHabit", "shootType", "matureShootColor", "phyllotaxy", "leafAngle", "petioleThickness", "leafShape", "leafColor", "leafHairiness", "leafTexture", "leafBase", "leafApex", "leafMargin", "leafType", "budShape", "fruitColor"];

  return (
    <div style={ padding: "2rem", fontFamily: "Arial, sans-serif" }>
      <h1>Mulberry DUS Descriptor Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="variety"
          placeholder="Variety Name"
          onChange={handleChange}
          required
          style={ marginBottom: "1rem" }
        /><br />

        <h2>Quantitative Traits</h2>
        {quantitativeTraits.map(trait => renderTraitField(trait))}

        <h2>ðŸ”˜ Qualitative Traits</h2>
        {qualitativeTraits.map(trait => renderTraitField(trait))}

        <h2>ðŸ§© Pseudo-qualitative Traits</h2>
        {pseudoQualitativeTraits.map(trait => renderTraitField(trait))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }
