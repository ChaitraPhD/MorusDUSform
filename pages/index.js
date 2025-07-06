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

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    // automatically attach Note if selecting a state
    if (traitData[name]?.stateNotes?.[value]) {
      updated[name + "Note"] = traitData[name].stateNotes[value];
    }
    setFormData(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    alert(json.message);
  };

  const renderTrait = (key) => {
    const t = traitData[key];
    return (
      <div key={key} className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t.label}
        </label>
        <select
          name={key}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
        >
          <option value="">--Select State--</option>
          {t.states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">
          Stage of Observation
        </label>
        <select
          name={key + "Stage"}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
        >
          <option value="">--Select Stage--</option>
          {STAGE_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">
          Type of Assessment
        </label>
        <select
          name={key + "Assessment"}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
        >
          <option value="">--Select Assessment--</option>
          {ASSESSMENT_OPTIONS.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>
    );
  };

  const quantitative = [
    "plantVigor","sprouting","cuttingSurvival","shootThickness",
    "internodalDistance","petioleLength","leafLength","leafWidth",
    "budSize","inflorescenceLength","fruitLength","fruitWidth"
  ];
  const qualitative = [
    "stipuleNature","budAttachment","accessoryBud",
    "sex","stigmaNature","stigmaType"
  ];
  const pseudo = [
    "growthHabit","shootType","matureShootColor","phyllotaxy",
    "leafAngle","petioleThickness","leafShape","leafColor",
    "leafHairiness","leafTexture","leafBase","leafApex",
    "leafMargin","leafType","budShape","fruitColor"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mulberry DUS Descriptor Form</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Variety Name
          </label>
          <input
            name="variety"
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter variety name"
          />
        </div>

        {/* Quantitative */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">📏 Quantitative Traits</h2>
          {quantitative.map(renderTrait)}
        </div>

        {/* Qualitative */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">🔘 Qualitative Traits</h2>
          {qualitative.map(renderTrait)}
        </div>

        {/* Pseudo‑qualitative */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">🧩 Pseudo‑qualitative Traits</h2>
          {pseudo.map(renderTrait)}
        </div>

        <button
          type="submit"
          className="w-full inline-flex justify-center py-3 px-6 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
            }
            
