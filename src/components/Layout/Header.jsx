import { useContext } from "react";
import { DataContext } from "../../context/TmaContext";
import { useLocation } from "react-router-dom";
import Nav from "../UI/Nav";

const Header = () => {
  const { selectedTeam, employees: teamCount } = useContext(DataContext);

  let location = useLocation();

  const teamMembers = teamCount.filter((employee) => {
    if (employee.teamName === selectedTeam) return employee;
    if (selectedTeam === "All") return employee;

    return false;
  }).length;

  const teamMembersHeader = (
    <h3 className="my-4 fs-4 text-center">
      {selectedTeam !== "All" ? selectedTeam + " has: " : "All: "}
      <b>{teamMembers}</b> employees
    </h3>
  );

  return (
    <header className="container-fluid px-0">
      <Nav />
      <div className="w-100">
        <h1
          className="my-3 mb-5 mx-auto pb-3 fs-2 border-bottom border-1 text-center"
          style={{ width: "max-content" }}
        >
          Team Member Allocation
        </h1>
        {location.pathname === "/" && teamMembersHeader}
      </div>
    </header>
  );
};

export default Header;
