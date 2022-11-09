import { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import femaleProfile from "../../assets/images/femaleProfile.jpg";
import maleProfile from "../../assets/images/maleProfile.jpg";

const Employee = ({ employees, onClick, selectedTeam }) => {
  const link = useRef();

  useEffect(() => {
    link.current.click();
  }, [selectedTeam]);

  return (
    <div
      className="row justify-content-center align-items-stretch mx-auto my-3"
      style={{ rowGap: "1.2rem" }}
    >
      <HashLink
        to={`#${selectedTeam === "All" ? "all" : "target"}`}
        className="invisible pe-none"
        ref={link}
      >
        {selectedTeam}
      </HashLink>
      {employees.map((employee) => (
        <div
          key={employee.id}
          id={employee.teamName === selectedTeam ? "target" : ""}
          className="col-auto col-lg-3 col-md-4 col-sm-6"
        >
          <div
            id={employee.id}
            className={`card employee mb-3 w-80 h-100${
              employee.teamName === selectedTeam
                ? " border border-3 border-dark"
                : ""
            }`}
            onClick={onClick}
          >
            <img
              src={employee.gender === "female" ? femaleProfile : maleProfile}
              alt={employee.teamName}
              className="card-img-top img-fluid rounded"
            />
            <div className="card-body my-auto">
              <h5 className="card-title">Full Name: {employee.fullName}</h5>
              <p className="m-auto">
                <b>Designation:</b> {employee.designation}
              </p>
              <p>{employee.teamName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employee;
