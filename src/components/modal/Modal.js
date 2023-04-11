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
import Button from "../button/Button";

const Modal = ({
  open,
  close,
  employeeName,
  setEmployeeName,
  createEmployee,
  handleHireChange,
  handleEmployeeJobRole,
  employeeJobRole,
  buttonName
}) => {
  const [employeeType, setEmployeeType] = useState(false);

  const handleCreateEmployee = () => {
    createEmployee();
    close();
  };

  const handleHireTypeChange = (event) => {
    setEmployeeType(event.target.value === "true");
    handleHireChange(event);
  };

  return (
    <Overlay open={open} close={close}>
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
              onChange={(event) => setEmployeeName(event.target.value)}
            />
            <select onChange={handleHireTypeChange}>
              <option value={false}>FREE LANCER</option>
              <option value={true}>FIXO</option>
            </select>
            <EmployeeFunction>
              <p>FUNÇÃO</p>
              <select onChange={handleEmployeeJobRole} value={employeeJobRole}>
                <option value="ATENDIMENTO">ATENDIMENTO</option>
                <option value="COZINHA">COZINHA</option>
              </select>
            </EmployeeFunction>
          </EmployeeType>
          <CreateEmployee>
            <Button
              text={buttonName}
              handleOnClick={handleCreateEmployee}
              backgroundColor="rgb(38, 153, 57)"
              fontSize="8px"
              width="200px"
              height="40px"
              disabled={!employeeName}
            />
          </CreateEmployee>
        </Box>
      )}
    </Overlay>
  );
};

export default Modal;