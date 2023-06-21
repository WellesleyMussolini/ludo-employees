import React from 'react';
import { Container, WeekDay, Employee, TrashIcon } from './weekSchedule.styles';

const WeekSchedule = ({ date, selectedDays, handleRemoveEmployee }) => {
  const weekday = date.format('dddd');
  const formattedDate = date.format('DD/MM');
  const schedules = selectedDays[weekday];

  return (
    <Container key={date.format('YYYY-MM-DD')}>
      <h3>{weekday} - {formattedDate}</h3>
      <WeekDay>
        {schedules.map((item, index) => (
          <Employee key={index}>
            <p>{item.name}</p>
            <TrashIcon onClick={() => handleRemoveEmployee(item._id, weekday)} />
          </Employee>
        ))}
      </WeekDay>
    </Container>
  );
};

export default WeekSchedule;