import React from "react";
import { Container, Wrapper } from "./week.styles";
import { week_days } from "../../../../components/mock/week.mock";
import WeekDays from "../../../../layout/work-schedule/Schedule";

const Week = ({ staffer, checkbox }) => {
    return (
        <Container>
            <Wrapper>
                <WeekDays week_days={week_days} staffer={staffer} checkbox={checkbox} />
            </Wrapper>
        </Container>
    );
};

export default Week;