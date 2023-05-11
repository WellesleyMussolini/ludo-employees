import React, { useState, useEffect } from "react";
import { Container, CreateEmployee, EmployeeList } from "./staff.styles";
import Modal from "../../components/modal/Modal";
import { useQuery } from "react-query";
import { employees } from "../../services/service";
import StaffBox from "../../layout/staff/StaffBox";
import Button from "../../components/button/Button";

const Staff = () => {
  const [openModal, setOpenModal] = useState(false);
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
        top="150px"
        left="40px"
      />
      <StaffBox employees={staff} />
      <Modal
        open={openModal}
        close={() => setOpenModal(false)}
      />
    </Container>
  );
}

export default Staff;