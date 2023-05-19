import React from "react";
import { Container, Wrapper, Box } from "./staff.styles";
import StaffList from "../list/staff";

const Staff = ({ employees }) => {
    return (
        <Container>
            <Box>
                <h1>CONTRATADOS</h1>
                <Wrapper>
                    <StaffList employees={employees} jobRole="ATENDIMENTO" hired={true} />
                    <StaffList employees={employees} jobRole="COZINHA" hired={true} />
                </Wrapper>
            </Box>
            <Box>
                <h1>FREE LANCERS</h1>
                <Wrapper>
                    <StaffList employees={employees} jobRole="ATENDIMENTO" hired={false} />
                    <StaffList employees={employees} jobRole="COZINHA" hired={false} />
                </Wrapper>
            </Box>
        </Container>
    );
};

export default Staff