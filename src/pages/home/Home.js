import React, { useState } from "react";
import WeekScales from "../../components/scales/WeekScales";
import { Container, Wrapper } from "./home.styles";
import Modal from "../../components/modal/Modal";
import Button from "../../components/button/Button";

const Home = ({ employeeNameProp }) => {
    const [weeks, setWeeks] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [employeeName, setEmployeeName] = useState(employeeNameProp);
    const [employees, setEmployees] = useState([]);
    const [employeeHired, setEmployeeHired] = useState(false);

    const handleNewWeek = () =>
        setWeeks((week) => [...week, <WeekScales />]);

    const addEmployee = () => {
        const hired = document.querySelector('select').value;
        setEmployees(prevEmployees => [
            ...prevEmployees,
            {
                name: employeeName,
                hired: employeeHired
            }
        ]);
        setEmployeeName("");
    };

    const handleHireChange = (event) => {
        const value = event.target.value;
        setEmployeeHired(value);
    };

    console.log(employees)
    return (
        <Container>
            <Wrapper>
                <button onClick={handleNewWeek}>NOVA SEMANA</button>
                {weeks.map((week, index) => {
                    return <div key={index}>{week}</div>;
                })}
            </Wrapper>
            <Button
                text="NOVO FUNCIONÁRIO"
                handleOnClick={() => setOpenModal(true)}
                backgroundColor="rgb(7, 204, 40)"
                fontSize="8px"
                width="200px"
                height="40px"
            />
            <Modal
                open={openModal}
                close={() => setOpenModal(false)}
                employeeName={employeeName}
                setEmployeeName={setEmployeeName}
                createEmployee={addEmployee}
                handleHireChange={handleHireChange}
            />
            <ul>
                <h1>LIST</h1>
                {employees.map((employee, index) => (
                    <li key={index}>
                        <p>{employee.name}</p>
                        <p>{employee.hired ? "fixo" : "free lancer"}</p>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default Home;