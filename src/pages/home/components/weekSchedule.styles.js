import styled from 'styled-components';
import { FiTrash2 } from 'react-icons/fi';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid black;
    &:last-child{
        border-right: none;
    };
`;

export const WeekDay = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    width: 12em;
    height: 20em;
    overflow: auto;
    padding: 0;
    margin: 0;
`;

export const Employee = styled.li`
    display: flex;
    justify-content: space-between;
    width: 80%;
    flex-direction: row;

    & > li {
        margin-bottom: 15px; /* Adiciona margem inferior para criar espaçamento */
    }
    
    & > li:last-child {
        margin-bottom: 0; /* Remove a margem inferior do último elemento */
    }

    & > p {
        font-size: 1.1em;
    }
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