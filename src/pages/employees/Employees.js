import React, { useState, useEffect } from "react";
import { Container, CreateEmployee, EmployeeList, FreeLancer, Hired } from "./employees.styles";
import Modal from "../../components/modal/Modal";
import Button from "../../components/button/Button";
import { useContextEmployee } from "../../context/employees";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Employees = ({ employeeNameProp, employeeJobRoleProp }) => {
  const [openModal, setOpenModal] = useState(false);
  const { employees, setEmployees } = useContextEmployee();
  console.log(employees)

  const [employeeName, setEmployeeName] = useState(employeeNameProp || '');
  const [employeeHired, setEmployeeHired] = useState(false);
  const [employeeJobRole, setEmployeeJobRole] = useState(employeeJobRoleProp || "ATENDIMENTO");
  const [editingEmployeeIndex, setEditingEmployeeIndex] = useState(null);

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (savedEmployees) {
      setEmployees(savedEmployees);
    }
    if (editingEmployeeIndex !== null) {
      setEmployeeName(employees[editingEmployeeIndex].name);
      setEmployeeHired(employees[editingEmployeeIndex].hired);
      setEmployeeJobRole(employees[editingEmployeeIndex].jobRole);
    }

    setButtonLabel(
      editingEmployeeIndex !== null && editingEmployeeIndex >= 0
        ? "EDITAR FUNCIONÁRIO"
        : "ADICIONAR FUNCIONÁRIO"
    );
  }, [employeeNameProp, editingEmployeeIndex]);

  const addEmployee = () => {
    if (!employeeName || !employeeJobRole) return;
    const newEmployee = {
      id: new Date().getTime(),
      name: employeeName,
      hired: employeeHired,
      jobRole: employeeJobRole,
    };
    let newEmployees = [...employees];
    if (editingEmployeeIndex !== null) {
      newEmployees[editingEmployeeIndex] = newEmployee;
      setEditingEmployeeIndex(null);
    } else {
      newEmployees.push(newEmployee);
    }
    setEmployees(newEmployees);
    setEmployeeName("");
    setEmployeeJobRole("ATENDIMENTO");
    setEmployeeHired(false);
    localStorage.setItem('employees', JSON.stringify(newEmployees));
    setOpenModal(false);
  };


  const handleHireChange = (event) => {
    const value = event.target.value === 'true';
    setEmployeeHired(value);
  };

  const handleEmployeeJobRole = (event) => {
    const value = event.target.value;
    setEmployeeJobRole(value);
  };

  const [buttonLabel, setButtonLabel] = useState("");


  const removeEmployee = (employeeId) => {
    const newEmployees = employees.filter((employee) => employee.id !== employeeId);
    setEmployees(newEmployees);
    localStorage.setItem("employees", JSON.stringify(newEmployees));
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
        buttonName={buttonLabel}
        editingEmployee={editingEmployeeIndex !== null ? employees[editingEmployeeIndex] : null}
      />
      <EmployeeList>
        <Hired>
          <h1>CONTRATADOS</h1>
          {employees.filter(employee => {
            return employee.hired === true && employee.jobRole === "ATENDIMENTO";
          }).map((employee, index) => {
            return (
              <li>
                <h2>ATENDIMENTO</h2>
                <p>{employee.name}</p>
                <EditIcon onClick={() => {
                  setEditingEmployeeIndex(employee.id);
                  setOpenModal(true);
                }} />
                <DeleteIcon onClick={() => removeEmployee(employee.id)} />
              </li>
            )
          })}
          {employees.filter(employee => {
            return employee.hired === true && employee.jobRole === "COZINHA";
          }).map((employee, index) => {
            return (
              <li>
                <h2>COZINHA</h2>
                <p>{employee.name}</p>
                <EditIcon onClick={() => {
                  setEditingEmployeeIndex(employee.id);
                  setOpenModal(true);
                }} />
                <DeleteIcon onClick={() => removeEmployee(employee.id)} />
              </li>
            )
          })}
        </Hired>

        <FreeLancer>
          <h1>FREE LANCERS</h1>
          {employees.filter(employee => {
            return employee.hired === false && employee.jobRole === "ATENDIMENTO";
          }).map((employee, index) => {
            return (
              <li>
                <h2>ATENDIMENTO</h2>
                <p>{employee.name}</p>
                <EditIcon onClick={() => {
                  setEditingEmployeeIndex(employee.id);
                  setOpenModal(true);
                }} />
                <DeleteIcon onClick={() => removeEmployee(employee.id)} />
              </li>
            )
          })}
          {employees.filter(employee => {
            return employee.hired === false && employee.jobRole === "COZINHA";
          }).map((employee, index) => {
            return (
              <li>
                <h2>COZINHA</h2>
                <p>{employee.name}</p>
                <EditIcon onClick={() => {
                  setEditingEmployeeIndex(employee.id);
                  setOpenModal(true);
                }} />
                <DeleteIcon onClick={() => removeEmployee(employee.id)} />
              </li>
            )
          })}
        </FreeLancer>
      </EmployeeList>
    </Container>
  );
}

export default Employees;