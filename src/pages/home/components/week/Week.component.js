import React, { useState } from "react";
import { Container, Wrapper } from "./week.styles";
import { week_days } from "../../../../components/mock/week.mock";
import WeekDays from "../../../../layout/week-days/WeekDays";

const Week = () => {
    return (
        <Container>
            <Wrapper>
                <WeekDays week_days={week_days} />
            </Wrapper>
        </Container>
    );
};

export default Week;