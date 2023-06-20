import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  flex-direction: column;
`;

export const WrapperAreaStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;
  border-radius: 15px;

  height: 48px;
  width: 350px;
  z-index: 10;

  background-color: lightblue;

  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const EmployeeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;
  border-radius: 10px;

  height: 48px;
  width: 350px;

  background-color: lightblue;

`;