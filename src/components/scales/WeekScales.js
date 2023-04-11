import React, { useState } from "react";
import { Container, WeekDays, Workers } from "./weekscales.styles";
import { useContextEmployee } from "../../context/employees";

const WeekScales = ({ children }) => {
    const {employees, setEmployees} = useContextEmployee();
    return (
        <Container>
            <WeekDays>
                <div>
                    <h1>SEGUNDA FEIRA</h1>
                </div>
                <div>
                    <h1>TERÇA FEIRA</h1>
                </div>
                <div>
                    <h1>QUARTA FEIRA</h1>
                </div>
                <div>
                    <h1>QUINTA FEIRA</h1>
                </div>
                <div>
                    <h1>SEXTA FEIRA</h1>
                </div>
                <div>
                    <h1>SÁBADO</h1>
                </div>
                <div>
                    <h1>DOMINGO</h1>
                </div>
            </WeekDays>
            <Workers>
                <div><h1>NINGUÉM TRABALHA</h1></div>
                <div>
                    {
                        <select>
                            {employees.map((employee, index) => (
                                <option key={index}>{employee.name}</option>
                            ))}
                        </select>
                    }
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Workers>
        </Container>
    );
};

export default WeekScales;
