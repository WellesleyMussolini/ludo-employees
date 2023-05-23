import styled from "styled-components";

export const WeekDay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: ${props => props.border};
    width: 100%;
    gap: 30px;
`;

export const WeekDayTitle = styled.h2`
    text-transform: uppercase;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bolder;
    color: rgb(148, 148, 148);
    margin-top: 15px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    list-style-type: none;
    overflow-y: auto;
    
    width: 100%;
    max-height: 200px;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
`;