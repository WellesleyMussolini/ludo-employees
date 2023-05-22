import React, { useState, useEffect } from "react";
import { Container } from "./staff.styles";
import Modal from "../../components/modal/register-staffer/Modal";
import { useQuery } from "react-query";
import { employees } from "../../services/service";
import StaffBox from "../../layout/staff/status/staff";
import Button from "../../components/button/Button";

const Staff = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("ATENDIMENTO");
  const [hired, setHired] = useState(false);

  const handleCreateEmployee = async () => {
    const employee = { name, role, hired };
    await employees.post(employee);
    setOpenModal(false);
  };

  const { data: staff } = useQuery("staff", employees.get);

  return (
    <Container>
      <Button
        text="NOVO FUNCIONÁRIO"
        handleOnClick={() => setOpenModal(true)}
        backgroundColor="rgb(7, 204, 40)"
        fontSize="8px"
        width="200px"
        height="40px"
        position="fixed"
      />
      <StaffBox employees={staff} />
      <Modal
        open={openModal}
        text="CRIAR FUNCIONÁRIO"
        close={() => setOpenModal(false)}
        Name={name}
        HandleName={setName}
        JobRole={role}
        HandleJobRole={setRole}
        Hired={hired}
        HandleHired={setHired}
        HandleOnClick={handleCreateEmployee}
      />
    </Container>
  );
};

export default Staff;