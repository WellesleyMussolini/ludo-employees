import styled from "styled-components";

export const Overlay = styled.div`
    display: ${({ open }) => open ? "flex" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 35em;
    height: 30em;
    background: #fff;
    color: rgb(148, 148, 148);
    gap: 30px;
    & > svg{
        position: absolute;
        top: 10px;
        right: 20px;
        color: black;
        cursor: pointer;
    
        &:hover{
            color: rgb(95, 95, 95);
            transition: 0.5s;
        };
    }
`;

export const SelectEmployee = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
    width: 25em;
`;

export const Staff = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    height: 40px;
    border-radius: 0;
    outline: none;
    font-size: 1.5em;
    color: rgb(148, 148, 148);
    cursor: pointer;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const WeekDays = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    width: 20em;
    width: 25em;
    height: 10em;
    gap: 10px;
`;

export const CheckBox = styled.div`
    display: flex;
    align-items: center; 
    flex-direction: row;
    & > input {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        cursor: pointer;
    }
    & > p {
        font-weight: bolder;
        text-transform: uppercase;
    }
`;