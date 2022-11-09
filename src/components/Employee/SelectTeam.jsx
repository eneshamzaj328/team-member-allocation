const SelectTeam = ({ selectedTeam, onSelect }) => {
  return (
    <select
      className="form-select form-select-lg text-center"
      onChange={onSelect}
      value={selectedTeam}
    >
      <option value="All">All</option>
      <option value="TeamA">TeamA</option>
      <option value="TeamB">TeamB</option>
      <option value="TeamC">TeamC</option>
      <option value="TeamD">TeamD</option>
    </select>
  );
};

export default SelectTeam;
