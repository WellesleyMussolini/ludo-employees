import styled from "styled-components";

export const WeekDay = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    border-right: ${props => props.border};
    width: 100%;
`;

export const WeekDayTitle = styled.h2`
    text-transform: uppercase;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bolder;
    color: rgb(148, 148, 148);
    margin-top: 15px;
`;