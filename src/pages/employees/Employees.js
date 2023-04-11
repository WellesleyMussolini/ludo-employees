import React, { useState, useEffect } from "react";
import { Container, CreateEmployee, EmployeeList, FreeLancer, Hired } from "./employees.styles";
import Modal from "../../components/modal/Modal";
import Button from "../../components/button/Button";
import { useContextEmployee } from "../../context/employees";

const Employees = ({ employeeNameProp, employeeJobRoleProp }) => {
  const [openModal, setOpenModal] = useState(false);
  const { employees, setEmployees } = useContextEmployee();
  console.log(employees)

  const [employeeName, setEmployeeName] = useState(employeeNameProp || '');
  const [employeeHired, setEmployeeHired] = useState(false);
  const [employeeJobRole, setEmployeeJobRole] = useState(employeeJobRoleProp || "ATENDIMENTO");

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (savedEmployees) {
      setEmployees(savedEmployees);
    }
  }, []);

  const addEmployee = () => {
    if (!employeeName || !employeeJobRole) return;
    const newEmployee = {
      name: employeeName,
      hired: employeeHired,
      jobRole: employeeJobRole,
    };
    const newEmployees = [...employees, newEmployee];
    setEmployees(newEmployees);
    setEmployeeName("");
    setEmployeeJobRole("ATENDIMENTO");
    setEmployeeHired(false);
    localStorage.setItem('employees', JSON.stringify(newEmployees));
  };

  const handleHireChange = (event) => {
    const value = event.target.value === 'true';
    setEmployeeHired(value);
  };

  const handleEmployeeJobRole = (event) => {
    const value = event.target.value;
    setEmployeeJobRole(value);
  };

  return (
    <Container>
      <CreateEmployee>
        <Button
          text="NOVO FUNCIONÁRIO"
          handleOnClick={() => setOpenModal(true)}
          backgroundColor="rgb(7, 204, 40)"
          fontSize="8px"
          width="200px"
          height="40px"
        />
      </CreateEmployee>
      <Modal
        open={openModal}
        close={() => setOpenModal(false)}
        employeeName={employeeName}
        setEmployeeName={setEmployeeName}
        createEmployee={addEmployee}
        handleHireChange={handleHireChange}
        handleEmployeeJobRole={handleEmployeeJobRole}
        employeeJobRole={employeeJobRole}
      />
      <EmployeeList>
        <Hired>
          <h1>CONTRATADOS</h1>
          {employees.filter(employee => {
            return employee.hired === true && employee.jobRole === "ATENDIMENTO";
          }).map(employee => {
            return (
              <li>
                <h2>ATENDIMENTO</h2>
                <p>{employee.name}</p>
              </li>
            )
          })}
          {employees.filter(employee => {
            return employee.hired === true && employee.jobRole === "COZINHA";
          }).map(employee => {
            return (
              <li>
                <h2>COZINHA</h2>
                <p>{employee.name}</p>
              </li>
            )
          })}
        </Hired>

        <FreeLancer>
          <h1>FREE LANCERS</h1>
          {employees.filter(employee => {
            return employee.hired === false && employee.jobRole === "ATENDIMENTO";
          }).map(employee => {
            return (
              <li>
                <h2>ATENDIMENTO</h2>
                <p>{employee.name}</p>
              </li>
            )
          })}
          {employees.filter(employee => {
            return employee.hired === false && employee.jobRole === "COZINHA";
          }).map(employee => {
            return (
              <li>
                <h2>COZINHA</h2>
                <p>{employee.name}</p>
              </li>
            )
          })}
        </FreeLancer>
      </EmployeeList>
    </Container>
  );
}
export default Employees;



// {employees.filter(employee => {
//   return employee.hired === true && employee.jobRole === "ATENDIMENTO";
// }).map(employee => {
//   return (
//     <li>
//       <p>{employee.name}</p>
//     </li>
//   )
// })}