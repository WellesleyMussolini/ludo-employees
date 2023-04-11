import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* background: ${(props) => props.backgroundColor || "green"}; */
    background: ${(props) => props.disabled ? "#ccc" : props.backgroundColor || "green"};
    color: #fff;
    font-size: ${(props) => props.fontSize || "16px"};
    width: ${(props) => props.width || "100px"};
    height: ${(props) => props.height || "30px"};
    border-radius: ${(props) => props.borderRadius || "15px"};
    border: none;
    outline: none;
    cursor: pointer;
`;
