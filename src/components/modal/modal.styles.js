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

export const Box = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30em;
    height: 22em;
    background: #fff;
    border-radius: 10px;
    flex-direction: column;
    gap: 50px;
    color: rgb(148, 148, 148);

    & > h1{
        font-size: 25px;
        text-align: center;
    };

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

export const EmployeeType = styled.div`
    /* display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    */
    margin: 0 40px; 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: row;
    gap: 15px;
    justify-content: space-between;
    & > p{
        text-align: left;
        font-weight: bolder;
    }
`;

export const InputName = styled.input`
    padding-left: 5px;
    padding: 8px;
    width: 250px;
`; 

export const CreateEmployee = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;