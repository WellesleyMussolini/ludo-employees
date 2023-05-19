import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    min-height: 600px;
    margin-left: auto;
    margin-right: auto;
    width: 80em;
    gap: 15px;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 50px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    height: 25em; 
    width: 34em;

    & > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

        & > p{
            font-weight: bolder;
            text-align: center;
        }
    } 
`;