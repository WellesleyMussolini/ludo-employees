import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 80px);
    flex-direction: column;
    & > button{
        position: absolute;
        left: 50px;
        top: 130px;
        padding: 10px;
        font-size: 1.1em;
        cursor: pointer;
        background: rgb(0, 103, 0);
        color: #fff;
        font-weight: bolder;
        border: none;
        outline: none;
        border-radius: 7px;
        transition: 0.5s;
        &:hover{
            background: rgb(0, 143, 0);
        }
    }
`;

export const WeekDays = styled.div`

    @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
        border: 1px solid black;
    }
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        margin-top: 100px;
    }
`;