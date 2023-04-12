import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, FreeLancerList, HiredList } from "./employees.styles";

const EmployeeList = ({ employees, hired, jobRole, setEditingEmployeeIndex, setOpenModal, removeEmployee }) => {
    const filteredEmployees = employees.filter((employee) => {
        return (
            employee.hired === hired &&
            employee.jobRole === jobRole
        );
    });

    return (
        <>
            {filteredEmployees.map((employee, index) => {
                return (
                    <li key={employee.id}>
                        <h2>{jobRole}</h2>
                        <p>{employee.name}</p>
                        <EditIcon onClick={() => {
                            const employeeIndex = employees.findIndex((e) => e.id === employee.id);
                            setEditingEmployeeIndex(employeeIndex);
                            setOpenModal(true);
                        }} />
                        <DeleteIcon onClick={() => removeEmployee(employee.id)} />
                    </li>
                );
            })}
        </>
    );
};

const Hired = ({ employees, setEditingEmployeeIndex, setOpenModal, removeEmployee }) => {
    return (
        <>
            <h1>CONTRATADOS</h1>
            <EmployeeList employees={employees} hired={true} jobRole="ATENDIMENTO" setEditingEmployeeIndex={setEditingEmployeeIndex} setOpenModal={setOpenModal} removeEmployee={removeEmployee} />
            <EmployeeList employees={employees} hired={true} jobRole="COZINHA" setEditingEmployeeIndex={setEditingEmployeeIndex} setOpenModal={setOpenModal} removeEmployee={removeEmployee} />
        </>
    );
};

const FreeLancer = ({ employees, setEditingEmployeeIndex, setOpenModal, removeEmployee }) => {
    return (
        <>
            <h1>FREE LANCERS</h1>
            <EmployeeList employees={employees} hired={false} jobRole="ATENDIMENTO" setEditingEmployeeIndex={setEditingEmployeeIndex} setOpenModal={setOpenModal} removeEmployee={removeEmployee} />
            <EmployeeList employees={employees} hired={false} jobRole="COZINHA" setEditingEmployeeIndex={setEditingEmployeeIndex} setOpenModal={setOpenModal} removeEmployee={removeEmployee} />
        </>
    );
};

const Employees = ({ employees, setEditingEmployeeIndex, setOpenModal, removeEmployee }) => {
    return (
        <>
            <HiredList>
                <Hired employees={employees} setEditingEmployeeIndex={setEditingEmployeeIndex} setOpenModal={setOpenModal} removeEmployee={removeEmployee} />
            </HiredList>
            <FreeLancerList>
                <FreeLancer employees={employees} setEditingEmployeeIndex={setEditingEmployeeIndex} setOpenModal={setOpenModal} removeEmployee={removeEmployee} />
            </FreeLancerList>
        </>
    );
};

export default Employees;