import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { schedule } from '../../services/requests';
import { Container, Employee, TrashIcon, WeekDay } from './schedule.styles';

const Schedule = () => {
    const [weekStartDate, setWeekStartDate] = useState(moment().startOf('isoWeek'));
    const [weekDates, setWeekDates] = useState([]);
    const [selectedDays, setSelectedDays] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
    });

    const [textInput, setTextInput] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false
    });

    useEffect(() => {
        const startDate = weekStartDate.clone();
        const dates = [];

        for (let i = 0; i < 7; i++) {
            dates.push(startDate.clone());
            startDate.add(1, 'day');
        }

        setWeekDates(dates);

        // Obter os horários de trabalho do backend
        schedule.get().then((schedules) => {
            const updatedSelectedDays = {
                Monday: [],
                Tuesday: [],
                Wednesday: [],
                Thursday: [],
                Friday: [],
                Saturday: [],
                Sunday: []
            };

            schedules.forEach((schedule) => {
                // updatedSelectedDays[schedule.weekday].push(schedule.name); 
                updatedSelectedDays[schedule.weekday].push(schedule); // Adicione todo o objeto "schedule"
            });

            setSelectedDays(updatedSelectedDays);
        }).catch((error) => {
            console.error('Failed to fetch schedules:', error);
        });
    }, [weekStartDate]);

    const handleCheckboxChange = (day) => {
        setSelectedCheckboxes((prevSelectedCheckboxes) => ({
            ...prevSelectedCheckboxes,
            [day]: !prevSelectedCheckboxes[day]
        }));
    };

    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleModalToggle = () => {
        setShowModal(!showModal);
    };

    const handleAdd = async () => {
        const selectedDaysToAdd = [];
      
        Object.entries(selectedCheckboxes).forEach(([day, isSelected]) => {
          if (isSelected) {
            selectedDaysToAdd.push(day);
          }
        });
      
        try {
          for (const day of selectedDaysToAdd) {
            const newSchedule = await schedule.create({
              weekday: day,
              name: textInput,
            });
      
            setSelectedDays((prevSelectedDays) => ({
              ...prevSelectedDays,
              [day]: [...prevSelectedDays[day], newSchedule],
            }));
          }
      
          setTextInput('');
          setShowModal(false);
        } catch (error) {
          console.error('Failed to create schedule:', error);
        }
      };
      
    const handleRemoveEmployee = async (id, weekDay) => {
        try {
          await schedule.delete(id);
          console.log("success");
      
          // Obter os horários de trabalho atualizados do backend
          const updatedSchedules = await schedule.get();
          const updatedSelectedDays = {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
            Sunday: [],
          };
      
          updatedSchedules.forEach((schedule) => {
            updatedSelectedDays[schedule.weekday].push(schedule);
          });
      
          setSelectedDays(updatedSelectedDays);
        } catch (error) {
          console.error('Failed to remove employee:', error);
        }
      };

    return (
        <Container>
            {weekDates.map((date) => (
                <div key={date.format('YYYY-MM-DD')}>
                    <h3>{date.format('dddd')} - {date.format('MMM Do')}</h3>
                    <WeekDay>
                        {selectedDays[date.format('dddd')].map((item, index) => (
                            <Employee key={index}>
                                <p>{item.name}</p>
                                <TrashIcon onClick={() => handleRemoveEmployee(item._id, date.format('dddd'))} />
                            </Employee>
                        ))}
                    </WeekDay>
                </div>
            ))}

            <button onClick={() => setWeekStartDate(weekStartDate.clone().add(1, 'week'))}>
                Próxima Semana
            </button>

            <button onClick={() => setWeekStartDate(weekStartDate.clone().subtract(1, 'week'))}>
                Semana Anterior
            </button>

            <button onClick={handleModalToggle}>Abrir Modal</button>

            {showModal && (
                <div>
                    <input type="text" value={textInput} onChange={handleInputChange} />

                    {Object.entries(selectedDays).map(([day]) => (
                        <div key={day}>
                            <input
                                type="checkbox"
                                checked={selectedCheckboxes[day]}
                                onChange={() => handleCheckboxChange(day)}
                            />
                            <label>{day}</label>
                        </div>
                    ))}

                    <button onClick={handleAdd}>Adicionar</button>
                </div>
            )}
        </Container>
    );
};

export default Schedule;