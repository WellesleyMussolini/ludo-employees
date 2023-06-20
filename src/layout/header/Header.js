import React from "react";
import { Container, Logo, Employees, Image } from "./header.styles";
import LudoCafe from "./img/ludocafe.png";
import Chef from "./img/chef.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Logo>
                <Image src={LudoCafe} alt="LudoCafé" onClick={() => navigate("/")} />
            </Logo>
            <Employees>
                <Image src={Chef} alt="Employee" width="4em" onClick={() => navigate("/funcionarios")} />
            </Employees>
        </Container>
    )
};

export default Header;