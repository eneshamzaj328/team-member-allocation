import { createContext, useState, useEffect } from 'react';
import { defaultData as initialState } from './defaultData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeesList')) || initialState);
    const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

    // store/save selectedTeam in LocalStorage
    useEffect(() => {
        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
    }, [selectedTeam]);

    // store/save Employees in LocalStorage
    useEffect(() => {
        localStorage.setItem('employeesList', JSON.stringify(employees));
    }, [employees]);

    const onSelectTeamHandler = (e) => {
        setSelectedTeam((team) => (team = e.target.value));
    };

    const onEmployeeCardClickHandler = (event) => {
        const transformedEmployees = employees.map((employee) => {
            if (selectedTeam === "All") return employee;

            if (employee.id === +event.currentTarget.id) {
                if (employee.teamName === selectedTeam) {
                    return { ...employee, teamName: "" };
                }

                return { ...employee, teamName: selectedTeam };
            } else {
                return employee;
            }
        });

        const groupedEmployees = JSON.stringify(transformedEmployees);
        const defaultEmployees = JSON.stringify(employees);
        if (groupedEmployees === defaultEmployees) return;

        setEmployees((prevState) => (prevState = transformedEmployees));
    };

    return (
        <DataContext.Provider value={{
            employees, selectedTeam, setSelectedTeam, onSelectTeamHandler, onEmployeeCardClickHandler
        }}>
            {children}
        </DataContext.Provider>
    );
};