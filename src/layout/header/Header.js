import React from "react";
import { Container, Employees } from "./header.styles";
import Logo from "./img/ludocafe.png";

const Header = () => {
    return(
        <Container>
            <Employees>
                <img src={Logo} alt="logo" />
            </Employees>
        </Container>
    )
};

export default Header;