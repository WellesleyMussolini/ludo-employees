import React from "react";
import { Container, Hired, FreeLancer } from "./staffbox.styles";
import StaffList from "./staff-list/StaffList";

const Staff = ({ employees }) => {
    return (
        <Container>
            <Hired>
                <h1>CONTRATADOS</h1>
                <StaffList employees={employees} jobRole="ATENDIMENTO" hired={true} />
                <StaffList employees={employees} jobRole="COZINHA" hired={true} />
            </Hired>
            <FreeLancer>
                <h1>FREE LANCERS</h1>
                <StaffList employees={employees} jobRole="ATENDIMENTO" hired={false} />
                <StaffList employees={employees} jobRole="COZINHA" hired={false} />
            </FreeLancer>
        </Container>
    );
};

export default Staff