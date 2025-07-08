const renderTrait = (key) => {
  const t = traitData[key];
  if (!t) {
    console.warn(`Missing trait data for key: ${key}`);
    return null;
  }

  return (
    <div key={key} className="mb-6">
      <label className="block text-sm font-medium text-primary mb-1">
        {t.label}
      </label>

      {/* ➤ This <select> tag was missing in your code */}
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
