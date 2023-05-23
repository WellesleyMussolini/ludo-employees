import React, { useEffect, useState } from "react";
import { WeekDay, WeekDayTitle, List, ListItem } from "./schedule.styles";

const WeekDays = ({ week_days, staffer, checkbox }) => {
    const [assignedStaffers, setAssignedStaffers] = useState({});

    useEffect(() => {
        const updatedAssignedStaffers = { ...assignedStaffers };
        week_days.forEach((day) => {
            if (checkbox[day.week_day] && !assignedStaffers[day.week_day]) {
                updatedAssignedStaffers[day.week_day] = [{ _id: generateUniqueId(), name: staffer }];
            } else if (checkbox[day.week_day] && assignedStaffers[day.week_day]) {
                updatedAssignedStaffers[day.week_day] = [
                    ...assignedStaffers[day.week_day],
                    { _id: generateUniqueId(), name: staffer },
                ];
            }
        });
        setAssignedStaffers(updatedAssignedStaffers);
    }, [week_days, checkbox, staffer]);

    const generateUniqueId = () => {
        return Date.now().toString();
    };

    const removeStaffer = (id) => {
        const updatedAssignedStaffers = { ...assignedStaffers };
        Object.keys(updatedAssignedStaffers).forEach((day) => {
            updatedAssignedStaffers[day] = updatedAssignedStaffers[day].filter((staff) => staff._id !== id);
        });
        setAssignedStaffers(updatedAssignedStaffers);
    };

    return (
        <>
            {week_days.map((day, index) => {
                const assignedStaffer = assignedStaffers[day.week_day] || [];

                return (
                    <WeekDay border={day.border && "2px solid #dfdfdf"} key={index}>
                        <WeekDayTitle>{day.week_day}</WeekDayTitle>
                        <List>
                            {assignedStaffer.map((staff, staffIndex) => (
                                <ListItem key={staffIndex}>
                                    {staff.name} <button onClick={() => removeStaffer(staff._id)}>×</button>
                                </ListItem>
                            ))}
                        </List>
                    </WeekDay>
                );
            })}
        </>
    );
};

export default WeekDays;