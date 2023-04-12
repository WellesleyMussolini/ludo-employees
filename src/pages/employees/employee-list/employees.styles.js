import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const HiredList = styled.div`
display: flex;
flex-direction: column;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  width: 50%;
  height: 100%;
  overflow: auto;
  & > h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    }
  & > li {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    & > p{
        font-weight: bolder;
        margin-left: auto;
        margin-right: auto;
    }
    & > h2{
        padding-left: 10px;
        font-size: 1.4em;
    }
    & > svg {
     margin-right: 15px;
     cursor: pointer;
    }
}
`;

export const FreeLancerList = styled.div`
display: flex;
flex-direction: column;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  width: 50%;
  height: 100%;
  overflow: auto;
  & > h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    }
  & > li {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    & > p{
        font-weight: bolder;
        margin-left: auto;
        margin-right: auto;
    }
    & > h2{
        padding-left: 10px;
        font-size: 1.4em;
    }
    & > svg {
     margin-right: 15px;
     cursor: pointer;
    }
}
`;