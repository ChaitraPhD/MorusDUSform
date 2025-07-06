// pages/index.js
import { useState } from "react";
import { traitData } from "../data/traitData";

export default function Home() {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(0);

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

  // *** ORDER ADJUSTED ***
  const qualitative = [
    "stipuleNature",
    "budAttachment",
    "accessoryBud",
    "sex",
    "stigmaNature",
    "stigmaType",
  ];
  const quantitative = [
    "plantVigor",
    "sprouting",
    "cuttingSurvival",
    "shootThickness",
    "internodalDistance",
    "petioleLength",
    "leafLength",
    "leafWidth",
    "budSize",
    "inflorescenceLength",
    "fruitLength",
    "fruitWidth",
  ];
  const pseudo = [
    "growthHabit",
    "shootType",
    "matureShootColor",
    "phyllotaxy",
    "leafAngle",
    "petioleThickness",
    "leafShape",
    "leafColor",
    "leafHairiness",
    "leafTexture",
    "leafBase",
    "leafApex",
    "leafMargin",
    "leafType",
    "budShape",
    "fruitColor",
  ];

  const sections = [qualitative, quantitative, pseudo];
  const titles   = [
    "🔘 Qualitative Traits",
    "📏 Quantitative Traits",
    "🧩 Pseudo‑qualitative Traits",
  ];

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
    return (
      <div key={key} className="mb-6">
        <label className="block text-sm font-medium text-primary mb-1">
          {t.label}
        </label>
        <select
          name={key}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-primaryLight/30 border border-primaryLight rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
        >
          <option value="">--Select State--</option>
          {t.states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <label className="block text-sm font-medium text-primary mt-4 mb-1">
          Stage of Observation
        </label>
        <select
          name={key + "Stage"}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-primaryLight/30 border border-primaryLight rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
        >
          <option value="">--Select Stage--</option>
          {STAGE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <label className="block text-sm font-medium text-primary mt-4 mb-1">
          Type of Assessment
        </label>
        <select
          name={key + "Assessment"}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-primaryLight/30 border border-primaryLight rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
        >
          <option value="">--Select Assessment--</option>
          {ASSESSMENT_OPTIONS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-primaryLight p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Mulberry DUS Descriptor Form
      </h1>

      {/* Stepper */}
      <div className="flex justify-between mb-8">
        {titles.map((title, i) => (
          <div
            key={i}
            className={`text-sm font-medium ${
              step === i ? "text-primary" : "text-gray-400"
            }`}
          >
            {i + 1}. {title}
          </div>
        ))}
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 ring-1 ring-primaryLight">
          <h2 className="text-xl font-semibold text-primary mb-4">
            {titles[step]}
          </h2>
          {sections[step].map(renderTrait)}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Back
          </button>

          {step < sections.length - 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondaryLight"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-2 bg-primary text-white rounded hover:bg-primaryLight"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
          }
                                   
