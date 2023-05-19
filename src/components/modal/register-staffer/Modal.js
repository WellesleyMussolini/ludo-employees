import React, { useState } from "react";
import {
    Overlay,
    Box,
    EmployeeType,
    InputName,
    CreateEmployee,
    EmployeeFunction,
} from "./modal.styles";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../../button/Button";

const Modal = ({
    text,
    open,
    close,
    Name,
    HandleName,
    JobRole,
    HandleJobRole,
    Hired,
    HandleHired,
    HandleOnClick,
}) => {

    return (
        <Overlay open={open}>
            {open && (
                <Box>
                    <CloseIcon onClick={close} />
                    <h1>REGISTRAR FUNCIONÁRIO</h1>
                    <EmployeeType>
                        <p>NOME</p>
                        <p>TIPO</p>
                        <InputName
                            type="text"
                            placeholder="nome do funcionário..."
                            onChange={(event) => HandleName(event.target.value)}
                        />
                        <select onChange={(event) => HandleHired(event.target.value)} value={Hired}>
                            <option value={false}>FREE LANCER</option>
                            <option value={true}>FIXO</option>
                        </select>
                        <EmployeeFunction>
                            <p>FUNÇÃO</p>
                            <select onChange={(event) => HandleJobRole(event.target.value)} value={JobRole}>
                                <option value="ATENDIMENTO">ATENDIMENTO</option>
                                <option value="COZINHA">COZINHA</option>
                            </select>
                        </EmployeeFunction>
                    </EmployeeType>
                    <CreateEmployee>
                        <Button
                            text="CRIAR FUNCIONÁRIO"
                            backgroundColor="rgb(38, 153, 57)"
                            fontSize="8px"
                            width="200px"
                            height="40px"
                            onClick={HandleOnClick}
                            disabled={!Name}
                        />
                    </CreateEmployee>
                </Box>
            )}
        </Overlay>
    );
};

export default Modal;