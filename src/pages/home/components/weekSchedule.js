import React from 'react';
import { WeekDay, Employee, TrashIcon } from '../home.styles';

const WeekSchedule = ({ date, selectedDays, handleRemoveEmployee }) => {
    const weekday = date.format('dddd');
    const schedules = selectedDays[weekday];

    return (
        <div key={date.format('YYYY-MM-DD')}>
            <h3>{weekday} - {date.format('MMM Do')}</h3>
            <WeekDay>
                {schedules.map((item, index) => (
                    <Employee key={index}>
                        <p>{item.name}</p>
                        <TrashIcon onClick={() => handleRemoveEmployee(item._id, weekday)} />
                    </Employee>
                ))}
            </WeekDay>
        </div>
    );
};

export default WeekSchedule;