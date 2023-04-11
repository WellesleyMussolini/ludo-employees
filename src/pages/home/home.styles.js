import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10em;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  
    & > * {
        margin-bottom: 5em; /* adiciona margem inferior para cada elemento filho */
    }
`;

