// data/traitData.js

export const traitData = {
  plantVigor: {
    label: "Plant Vigor",
    type: "Quantitative",
    states: ["Low", "Medium", "High"],
    stateNotes: { Low: "Low (3)", Medium: "Medium (5)", High: "High (7)" },
  },
  growthHabit: {
    label: "Growth Habit",
    type: "Pseudo-qualitative",
    states: ["Erect", "Semi-erect", "Spreading", "Drooping"],
    stateNotes: {
      Erect: "Erect (3)",
      "Semi-erect": "Semi-erect (5)",
      Spreading: "Spreading (7)",
      Drooping: "Drooping (9)",
    },
  },
  sprouting: {
    label: "Sprouting Days",
    type: "Quantitative",
    states: ["Early (<10)", "Medium (10–15)", "Late (>15)"],
    stateNotes: {
      "Early (<10)": "Early (3)",
      "Medium (10–15)": "Medium (5)",
      "Late (>15)": "Late (7)",
    },
  },
  cuttingSurvival: {
    label: "Survival % of Cuttings",
    type: "Quantitative",
    states: ["Low (<40)", "Medium (40–80)", "High (>80)"],
    stateNotes: {
      "Low (<40)": "Low (3)",
      "Medium (40–80)": "Medium (5)",
      "High (>80)": "High (7)",
    },
  },
  shootType: {
    label: "Shoot Type",
    type: "Pseudo-qualitative",
    states: ["Straight", "Slightly curved", "Curved"],
    stateNotes: {
      Straight: "Straight (3)",
      "Slightly curved": "Slightly curved (5)",
      Curved: "Curved (7)",
    },
  },
  shootThickness: {
    label: "Shoot Thickness",
    type: "Quantitative",
    states: ["Thin (<1.0)", "Medium (1.0–1.5)", "Thick (>1.5)"],
    stateNotes: {
      "Thin (<1.0)": "Thin (3)",
      "Medium (1.0–1.5)": "Medium (5)",
      "Thick (>1.5)": "Thick (7)",
    },
  },
  matureShootColor: {
    label: "Mature Shoot Color",
    type: "Pseudo-qualitative",
    states: [
      "Yellow-Green Group 147",
      "Greyed-Green Group 195",
      "Grey-Brown Group 199",
      "Brown Group N200",
      "Grey Group 201",
    ],
    stateNotes: {
      "Yellow-Green Group 147": "147 (1)",
      "Greyed-Green Group 195": "195 (3)",
      "Grey-Brown Group 199": "199 (5)",
      "Brown Group N200": "N200 (7)",
      "Grey Group 201": "201 (9)",
    },
  },
  internodalDistance: {
    label: "Internodal Distance",
    type: "Quantitative",
    states: ["Short (<3)", "Medium (3–6)", "Long (>6)"],
    stateNotes: {
      "Short (<3)": "Short (3)",
      "Medium (3–6)": "Medium (5)",
      "Long (>6)": "Long (7)",
    },
  },
  leafAngle: {
    label: "Leaf Angle",
    type: "Quantitative",
    states: ["Acute", "Horizontal", "Obtuse"],
    stateNotes: {
      Acute: "Acute (3)",
      Horizontal: "Horizontal (5)",
      Obtuse: "Obtuse (7)",
    },
  },
  leafSize: {
    label: "Leaf Size",
    type: "Quantitative",
    states: ["Small (<200 cm²)", "Medium (200–400 cm²)", "Large (>400 cm²)"],
    stateNotes: {
      "Small (<200 cm²)": "Small (3)",
      "Medium (200–400 cm²)": "Medium (5)",
      "Large (>400 cm²)": "Large (7)",
    },
  },
  phyllotaxy: {
    label: "Phyllotaxy",
    type: "Pseudo-qualitative",
    states: ["Distichous (1/2)", "Tristichous (1/3)", "Pentastichous (2/5)", "Mixed type"],
    stateNotes: {
      "Distichous (1/2)": "Distichous (3)",
      "Tristichous (1/3)": "Tristichous (5)",
      "Pentastichous (2/5)": "Pentastichous (7)",
      "Mixed type": "Mixed (9)",
    },
  },
  petioleLength: {
    label: "Petiole Length",
    type: "Quantitative",
    states: ["Short (<3)", "Medium (3–5)", "Long (>5)"],
    stateNotes: {
      "Short (<3)": "Short (3)",
      "Medium (3–5)": "Medium (5)",
      "Long (>5)": "Long (7)",
    },
  },
  petioleThickness: {
    label: "Petiole Thickness",
    type: "Pseudo-qualitative",
    states: ["Thin (<0.2)", "Medium (0.2–0.4)", "Thick (>0.4)"],
    stateNotes: {
      "Thin (<0.2)": "Thin (3)",
      "Medium (0.2–0.4)": "Medium (5)",
      "Thick (>0.4)": "Thick (7)",
    },
  },
  stipuleNature: {
    label: "Stipule Nature",
    type: "Qualitative",
    states: ["Bud scale", "Free lateral", "Foliaceous"],
    stateNotes: {
      "Bud scale": "Bud scale (1)",
      "Free lateral": "Free lateral (2)",
      "Foliaceous": "Foliaceous (3)",
    },
  },
  leafLength: {
    label: "Leaf Lamina Length",
    type: "Quantitative",
    states: ["Short (<10)", "Medium (10–20)", "Long (>20)"],
    stateNotes: {
      "Short (<10)": "Short (3)",
      "Medium (10–20)": "Medium (5)",
      "Long (>20)": "Long (7)",
    },
  },
  leafWidth: {
    label: "Leaf Lamina Width",
    type: "Quantitative",
    states: ["Narrow (<10)", "Medium (10–15)", "Broad (>15)"],
    stateNotes: {
      "Narrow (<10)": "Narrow (3)",
      "Medium (10–15)": "Medium (5)",
      "Broad (>15)": "Broad (7)",
    },
  },
  leafShape: {
    label: "Leaf Shape",
    type: "Pseudo-qualitative",
    states: ["Cordate", "Wide ovate", "Ovate", "Narrow ovate", "Lanceolate"],
    stateNotes: {
      Cordate: "Cordate (1)",
      "Wide ovate": "Wide ovate (3)",
      Ovate: "Ovate (5)",
      "Narrow ovate": "Narrow ovate (7)",
      Lanceolate: "Lanceolate (9)",
    },
  },
  leafColor: {
    label: "Leaf Color",
    type: "Pseudo-qualitative",
    states: ["Light Green", "Green", "Dark Green"],
    stateNotes: {
      "Light Green": "Light Green (3)",
      Green: "Green (5)",
      "Dark Green": "Dark Green (7)",
    },
  },
  leafHairiness: {
    label: "Leaf Hairiness",
    type: "Pseudo-qualitative",
    states: ["Glabrous", "Sparsely Hairy", "Hairy (pubescent)"],
    stateNotes: {
      Glabrous: "Glabrous (3)",
      "Sparsely Hairy": "Sparsely Hairy (5)",
      "Hairy (pubescent)": "Hairy (7)",
    },
  },
  leafTexture: {
    label: "Leaf Texture",
    type: "Pseudo-qualitative",
    states: ["Membranaceous", "Chartaceous", "Coriaceous"],
    stateNotes: {
      Membranaceous: "Membranaceous (3)",
      Chartaceous: "Chartaceous (5)",
      Coriaceous: "Coriaceous (7)",
    },
  },
  leafBase: {
    label: "Leaf Base",
    type: "Pseudo-qualitative",
    states: ["Acute", "Truncate", "Cordate", "Lobate"],
    stateNotes: {
      Acute: "Acute (3)",
      Truncate: "Truncate (5)",
      Cordate: "Cordate (7)",
      Lobate: "Lobate (9)",
    },
  },
  leafApex: {
    label: "Leaf Apex",
    type: "Pseudo-qualitative",
    states: ["Acute", "Acuminate", "Caudate", "Obtuse"],
    stateNotes: {
      Acute: "Acute (3)",
      Acuminate: "Acuminate (5)",
      Caudate: "Caudate (7)",
      Obtuse: "Obtuse (9)",
    },
  },
  leafMargin: {
    label: "Leaf Margin",
    type: "Pseudo-qualitative",
    states: ["Crenate", "Dentate", "Serrate", "Repand"],
    stateNotes: {
      Crenate: "Crenate (3)",
      Dentate: "Dentate (5)",
      Serrate: "Serrate (7)",
      Repand: "Repand (9)",
    },
  },
  leafType: {
    label: "Leaf Type",
    type: "Pseudo-qualitative",
    states: ["Unlobed", "Lobed", "Mixed"],
    stateNotes: {
      Unlobed: "Unlobed (1)",
      Lobed: "Lobed (2)",
      Mixed: "Mixed (3)",
    },
  },
  budShape: {
    label: "Mature Bud Shape",
    type: "Pseudo-qualitative",
    states: ["Round", "Acute triangle", "Long triangle", "Spindle"],
    stateNotes: {
      Round: "Round (3)",
      "Acute triangle": "Acute triangle (5)",
      "Long triangle": "Long triangle (7)",
      Spindle: "Spindle (9)",
    },
  },
  accessoryBud: {
    label: "Accessory Bud",
    type: "Qualitative",
    states: ["Absent", "Present"],
    stateNotes: { Absent: "Absent (1)", Present: "Present (9)" },
  },
  sex: {
    label: "Sex",
    type: "Qualitative",
    states: ["Gynoecious", "Androecious", "Bisexual", "Andromonoecious", "Gynomonoecious", "Androgynomonoecious"],
    stateNotes: {
      Gynoecious: "Gynoecious (1)",
      Androecious: "Androecious (2)",
      Bisexual: "Bisexual (3)",
      Andromonoecious: "Andromonoecious (4)",
      Gynomonoecious: "Gynomonoecious (5)",
      Androgynomonoecious: "Androgynomonoecious (6)",
    },
  },
  inflorescenceLength: {
    label: "Inflorescence Length",
    type: "Quantitative",
    states: ["Short (<2)", "Medium (2–4)", "Long (>4)"],
    stateNotes: {
      "Short (<2)": "Short (3)",
      "Medium (2–4)": "Medium (5)",
      "Long (>4)": "Long (7)",
    },
  },
  stigmaNature: {
    label: "Stigma Nature",
    type: "Qualitative",
    states: ["Pubescent", "Papillate"],
    stateNotes: {
      Pubescent: "Pubescent (3)",
      Papillate: "Papillate (7)",
    },
  },
  stigmaType: {
    label: "Stigma Type",
    type: "Qualitative",
    states: ["Erect", "Spreading", "Divaricate", "Twisted"],
    stateNotes: {
      Erect: "Erect (3)",
      Spreading: "Spreading (5)",
      Divaricate: "Divaricate (7)",
      Twisted: "Twisted (9)",
    },
  },
  fruitLength: {
    label: "Fruit Length",
    type: "Quantitative",
    states: ["Short (<2)", "Medium (2–4)", "Long (4–8)", "Very long (>8)"],
    stateNotes: {
      "Short (<2)": "Short (3)",
      "Medium (2–4)": "Medium (5)",
      "Long (4–8)": "Long (7)",
      "Very long (>8)": "Very long (9)",
    },
  },
  fruitWidth: {
    label: "Fruit Width",
    type: "Quantitative",
    states: ["Narrow (<1)", "Medium (1–1.5)", "Broad (>1.5)"],
    stateNotes: {
      "Narrow (<1)": "Narrow (3)",
      "Medium (1–1.5)": "Medium (5)",
      "Broad (>1.5)": "Broad (7)",
    },
  },
  fruitColor: {
    label: "Fruit Color",
    type: "Pseudo-qualitative",
    states: ["Bluish Black", "Dark Reddish Orange", "Very Pale Purple", "Light Yellow Green", "White", "Green"],
    stateNotes: {
      "Bluish Black": "Black (1)",
      "Dark Reddish Orange": "Orange (2)",
      "Very Pale Purple": "Purple (3)",
      "Light Yellow Green": "Yellow (4)",
      White: "White (5)",
      Green: "Green (6)",
    },
  },
  budAttachment: {
    label: "Bud Attachment",
    type: "Qualitative",
    states: ["Adhering to branch", "Slanting outward", "Tilting to one side"],
    stateNotes: {
      "Adhering to branch": "Adhering (1)",
      "Slanting outward": "Slanting (2)",
      "Tilting to one side": "Tilting (3)",
    },
  },
};
