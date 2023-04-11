import React from "react";
import { Container } from "./button.styles";

const Button = ({ text, handleOnClick, ...rest }) => {
    return (
        <Container onClick={handleOnClick} {...rest}>
            <h1>{text}</h1>
        </Container>
    );
};

export default Button;