const EmployeeData = ({ employeeData, onShowEmployeeData }) => {
  return (
    <div key={employeeData.team} className="accordion-item">
      <h2
        id={employeeData.team}
        className="accordion-header"
        onClick={onShowEmployeeData}
      >
        <button
          type="button"
          id={employeeData.team}
          className={`accordion-button${
            employeeData.collapsed === true ? " collapsed" : ""
          }`}
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Team Name: {employeeData.team}
        </button>
      </h2>
      <div
        id={"collapse_" + employeeData.team}
        className={
          employeeData.collapsed === true
            ? "accordion-collapse collapse"
            : "py-4"
        }
      >
        {employeeData.members?.map((member) => {
          return (
            <div key={member.id} className="accordion-body">
              <span className="text-dark">Full Name: {member.fullName}</span>
              <p>Designation: {member.designation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeData;
