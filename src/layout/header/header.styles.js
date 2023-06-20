import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100vw;
    background: #fff;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.45) 1px 0px 5px 4px;
`;

export const Employees = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
`;

export const Image = styled.img`
    width: ${props => props.width || "9em"};
    width: ${props => props.height || ""};
    cursor: pointer;
`;

export const Logo = styled.div`
    padding: 20px 20px;
`;