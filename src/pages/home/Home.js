import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { schedule } from '../../services/requests';
import { Container } from './home.styles';
import Modal from '../../components/modal/Modal';
import WeekSchedule from './components/weekSchedule';
import { getSelectedDaysToAdd } from './utils/selectedDays';
import { toggleCheckbox } from './utils/toggleCheckbox';

const Home = () => {
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
            schedules.forEach((schedule) => updatedSelectedDays[schedule.weekday].push(schedule));
            setSelectedDays(updatedSelectedDays);
        }).catch((error) => {
            console.error('Failed to fetch schedules:', error);
        });
    }, [weekStartDate]);

    const handleCheckboxChange = (day) => setSelectedCheckboxes((prevSelectedCheckboxes) => toggleCheckbox(day, prevSelectedCheckboxes));

    const handleInputChange = (event) => setTextInput(event.target.value);

    const handleAdd = async () => {
        const selectedDaysToAdd = getSelectedDaysToAdd(selectedCheckboxes)
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

    const handleRemoveEmployee = async (id) => {
        try {
            await schedule.delete(id);
            console.log("success");

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
            updatedSchedules.forEach((schedule) => updatedSelectedDays[schedule.weekday].push(schedule));
            setSelectedDays(updatedSelectedDays);
        } catch (error) {
            console.error('Failed to remove employee:', error);
        }
    };

    return (
        <Container>
            {weekDates.map((date) => (
                <WeekSchedule
                    key={date.format('YYYY-MM-DD')}
                    date={date}
                    selectedDays={selectedDays}
                    handleRemoveEmployee={handleRemoveEmployee}
                />
            ))}

            <button onClick={() => setWeekStartDate(weekStartDate.clone().add(1, 'week'))}>
                Próxima Semana
            </button>

            <button onClick={() => setWeekStartDate(weekStartDate.clone().subtract(1, 'week'))}>
                Semana Anterior
            </button>

            <button onClick={() => setShowModal(true)}>Abrir Modal</button>

            {showModal && (
                <Modal
                    open={showModal}
                    close={() => setShowModal(false)}
                    selectedDays={selectedDays}
                    selectedCheckboxes={selectedCheckboxes}
                    handleCheckboxChange={handleCheckboxChange}
                    handleInputChange={handleInputChange}
                    handleAdd={handleAdd}
                    textInput={textInput}
                />
            )}
        </Container>
    );
};

export default Home;