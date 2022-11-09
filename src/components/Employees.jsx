import { useContext } from "react";
import { DataContext } from "../context/TmaContext";
import SelectTeam from "./Employee/SelectTeam";
import Employee from "./Employee/Employee";

const Employees = () => {
  const {
    employees,
    selectedTeam,
    onSelectTeamHandler,
    onEmployeeCardClickHandler,
  } = useContext(DataContext);

  return (
    <main className="container">
      <div className="row">
        <div className="col-6 mx-auto">
          <SelectTeam
            onSelect={onSelectTeamHandler}
            selectedTeam={selectedTeam}
          />
        </div>
      </div>
      <Employee
        employees={employees}
        selectedTeam={selectedTeam}
        onClick={onEmployeeCardClickHandler}
      />
    </main>
  );
};

export default Employees;
