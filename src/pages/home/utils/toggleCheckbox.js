export const toggleCheckbox = (day, prevSelectedCheckboxes) => ({
    ...prevSelectedCheckboxes,
    [day]: !prevSelectedCheckboxes[day],
});