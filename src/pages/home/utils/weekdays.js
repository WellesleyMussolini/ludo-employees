export const getWeekDates = (startDate) => {
    const dates = [];

    for (let i = 0; i < 7; i++) {
        dates.push(startDate.clone());
        startDate.add(1, 'day');
    }

    return dates;
};