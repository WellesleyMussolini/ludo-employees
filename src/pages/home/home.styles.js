import styled from "styled-components";
import { FiTrash2 } from 'react-icons/fi';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 80px);
    flex-direction: column;
`;

export const WeekDay = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    width: 10em;
    gap: 15px;
`;

export const Employee = styled.li`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
`;

export const TrashIcon = styled(FiTrash2)`
    color: rgb(210, 0, 0);
    transition: 0.5s;
    &:hover{
        transform: scale(1.1);
        color: rgb(195, 0, 0);
        cursor: pointer;
    }
`;