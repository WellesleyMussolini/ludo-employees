import React from "react";
import { Container, WeekDays, Workers } from "./weekscales.styles";

const WeekScales = ({ children }) => {
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
                <div></div>
                <div></div>
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
