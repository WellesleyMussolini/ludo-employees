import React, { useState } from "react";
import WeekScales from "../../components/scales/WeekScales";
import { Container, Wrapper } from "./home.styles";


const Home = () => {
    const [weeks, setWeeks] = useState([]);


    const handleNewWeek = () =>
        setWeeks((week) => [...week, <WeekScales />]);
    return (
        <Container>
            <Wrapper>
                <button onClick={handleNewWeek}>NOVA SEMANA</button>
                {weeks.map((week, index) => {
                    return <div key={index}>{week}</div>;
                })}
            </Wrapper>



        </Container>
    );
};

export default Home;