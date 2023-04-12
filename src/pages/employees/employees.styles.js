import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 80px);
    z-index: 5;
`;

export const CreateEmployee = styled.div`
    position: fixed;
    top: 150px;
    left: 40px;
`;

export const EmployeeList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 600px;
  margin-left: auto;
  margin-right: auto;
  width: 80em;
`;