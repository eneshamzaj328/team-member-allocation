import { useContext, useState } from "react";
import { DataContext } from "../context/TmaContext";
import EmployeeData from "./Employee/EmployeeData";

const GroupedTeamMembers = () => {
  const {
    employees,
    selectedTeam,
    setSelectedTeam: setTeam,
  } = useContext(DataContext);

  const [groupedEmployeesData, setGroupedEmployeesData] = useState(
    groupedTeamMembers()
  );

  function groupedTeamMembers() {
    let teams = [];
    let teamA, teamB, teamC, teamD;
    employees.filter((employee) => {
      switch (employee.teamName) {
        case "TeamA":
          teamA = {
            team: "TeamA",
            members: [
              ...employees.filter((e) => e.teamName === employee.teamName),
            ],
            collapsed: selectedTeam === "TeamA" ? false : true,
          };
          break;
        case "TeamB":
          teamB = {
            team: "TeamB",
            members: [
              ...employees.filter((e) => e.teamName === employee.teamName),
            ],
            collapsed: selectedTeam === "TeamB" ? false : true,
          };
          break;
        case "TeamC":
          teamC = {
            team: "TeamC",
            members: [
              ...employees.filter((e) => e.teamName === employee.teamName),
            ],
            collapsed: selectedTeam === "TeamC" ? false : true,
          };
          break;
        case "TeamD":
          teamD = {
            team: "TeamD",
            members: [
              ...employees.filter((e) => e.teamName === employee.teamName),
            ],
            collapsed: selectedTeam === "TeamD" ? false : true,
          };
          break;
        default:
          return false;
      }

      return false;
    });

    teams.push(teamA, teamB, teamC, teamD);

    return teams;
  }

  const onHandleTeamClick = (e) => {
    const newGroupData = groupedEmployeesData.map((groupedData) =>
      groupedData.team === e.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );

    setGroupedEmployeesData((employeesData) => (employeesData = newGroupData));
    setTeam(e.currentTarget.id);
  };

  return (
    <section className="container my-5 mx-auto">
      <div className="accordion w-50 mx-auto fs-5 text-center">
        {groupedEmployeesData?.map((item) => {
          return (
            <EmployeeData
              key={item.team}
              employeeData={item}
              onShowEmployeeData={onHandleTeamClick}
            />
          );
        })}
      </div>
    </section>
  );
};

export default GroupedTeamMembers;
