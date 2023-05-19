import styled from "styled-components";

export const Employee = styled.li`
    display: flex;
    padding: 0 40px;
    margin-bottom: 20px;
    transition: 0.5s ease;
    &:hover{
        background: rgb(34, 150, 233);
        color: #fff;
    } 
`;

export const JobRole = styled.h2`
    align-items: center;
    text-align: left;
    width: 6.3em;
    font-size: 1em;
`;

export const Icons = styled.div`
    display: flex;
    gap: 15px;
    & > svg {
        font-size: 1.7em;
        cursor: pointer;
    }
`;