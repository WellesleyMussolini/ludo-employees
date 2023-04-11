import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 30em;
    width: 80em;
    border: 1px solid black;
`;

export const WeekDays = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    & > div{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid black;
        height: 10em;
        width: 100%;
        & > h1{
            font-size: 1.2em;
        }
    }
`;

export const Workers = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    & > div{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid black;
        height: 100%;
        width: 100%;
    };
    & > div:first-child{
        background: gray;
    }
`;