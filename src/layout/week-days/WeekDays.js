import { WeekDay, WeekDayTitle } from "./weekdays.styles";

const WeekDays = ({ week_days }) => {
    return (
        <>
            {
                week_days.map((days, index) => {
                    return (
                        <WeekDay border={days.border && "2px solid #dfdfdf"} key={index}>
                            <WeekDayTitle>{days.week_day}</WeekDayTitle>
                        </WeekDay>
                    )
                })
            }
        </>
    )
};

export default WeekDays;