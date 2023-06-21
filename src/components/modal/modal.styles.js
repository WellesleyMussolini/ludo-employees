import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5); 
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    background: #fff;
    width: 25em;
    height: 25em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    & > input{
        border-bottom: 2px solid gray;
        border-top: none;
        border-left: none;
        border-right: none;
        padding: 5px;
        width: 15em;
        font-size: 1em;
        outline: none;
    };

    & > button{
        padding: 10px;
        font-size: 1em;
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
        &:disabled{
            background: gray;
        }
    }
`;

export const CloseIcon = styled(AiOutlineClose)`
    position: absolute;
    top: 10px;
    right: 10px;
    color: gray;
    font-size: 1.3em;
    font-weight: bolder;
    cursor: pointer;
`;

export const WeekDaysOptions = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 7em;
    gap: 15px;
`;

export const CheckBoxes = styled.div`
    display: flex;
    align-items: center;
    & > input{
        width: 16px;
        height: 16px;
        cursor: pointer;
    }
    & > p{
        margin-left: 5px;
        color: gray;
    }
`;