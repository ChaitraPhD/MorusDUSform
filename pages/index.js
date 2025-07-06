// MorusDUSform/pages/index.js
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({});

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

  const renderField = (label, name, options) => (
    <div style={{ marginBottom: "1rem" }}>
      <label>{label}</label><br />
      <select name={name} onChange={handleChange} required>
        <option value="">--Select--</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🌿 Mulberry DUS Descriptor Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="variety"
          placeholder="Variety Name"
          onChange={handleChange}
          required
        /><br /><br />

        <h2>📏 Quantitative (QN) Traits</h2>
        {renderField("Plant Vigor", "plantVigor", ["Low", "Medium", "High"])}
        {renderField("Sprouting Days", "sprouting", ["Early", "Medium", "Late"])}
        {renderField("Shoot Thickness", "shootThickness", ["Thin", "Medium", "Thick"])}
        {renderField("Internodal Distance", "internodalDistance", ["Short", "Medium", "Long"])}
        {renderField("Petiole Length", "petioleLength", ["Short", "Medium", "Long"])}
        {renderField("Leaf Lamina Length", "leafLength", ["Short", "Medium", "Long"])}
        {renderField("Leaf Lamina Width", "leafWidth", ["Narrow", "Medium", "Broad"])}
        {renderField("Mature Bud Size", "budSize", ["Small", "Medium", "Large"])}
        {renderField("Inflorescence Length", "inflorescenceLength", ["Short", "Medium", "Long"])}
        {renderField("Fruit Length", "fruitLength", ["Short", "Medium", "Long"])}
        {renderField("Fruit Width", "fruitWidth", ["Narrow", "Medium", "Broad"])}

        <h2>🔘 Qualitative (QL) Traits</h2>
        {renderField("Stipule Nature", "stipuleNature", ["Free lateral", "Adnate", "Absent"])}
        {renderField("Bud Attachment", "budAttachment", ["Adhering", "Outward", "Tilting"])}
        {renderField("Accessory Bud", "accessoryBud", ["Present", "Absent"])}
        {renderField("Sex", "sex", ["Gynoecious", "Androecious", "Bisexual"])}
        {renderField("Stigma Nature", "stigmaNature", ["Pubescent", "Papillate"])}
        {renderField("Stigma Type", "stigmaType", ["Feathery", "Non-feathery"])}

        <h2>🧩 Pseudo-qualitative (PQ) Traits</h2>
        {renderField("Growth Habit", "growthHabit", ["Erect", "Semi-erect", "Spreading", "Drooping"])}
        {renderField("Shoot Type", "shootType", ["Straight", "Curved", "Slightly Curved"])}
        {renderField("Mature Shoot Color", "matureShootColor", ["Green", "Brown", "Purple"])}
        {renderField("Phyllotaxy", "phyllotaxy", ["Distichous", "Tristichous", "Pentastichous"])}
        {renderField("Leaf Shape", "leafShape", ["Cordate", "Ovate", "Lanceolate"])}
        {renderField("Leaf Base", "leafBase", ["Truncate", "Cordate", "Acute"])}
        {renderField("Leaf Apex", "leafApex", ["Acute", "Acuminate", "Caudate"])}
        {renderField("Leaf Margin", "leafMargin", ["Crenate", "Serrate", "Repand"])}
        {renderField("Leaf Color", "leafColor", ["Light green", "Green", "Dark green"])}
        {renderField("Leaf Hairiness", "leafHairiness", ["Glabrous", "Slightly hairy", "Hairy"])}
        {renderField("Leaf Texture", "leafTexture", ["Smooth", "Papery", "Coriaceous"])}
        {renderField("Leaf Type", "leafType", ["Lobed", "Unlobed", "Mixed"])}
        {renderField("Bud Shape", "budShape", ["Round", "Elliptical", "Conical"])}
        {renderField("Fruit Color", "fruitColor", ["Red", "Purple", "Black"])}

        <button type="submit">✅ Submit</button>
      </form>
    </div>
  );
                     }
    
