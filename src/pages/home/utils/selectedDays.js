export const getSelectedDaysToAdd = (selectedCheckboxes) => {
    return Object.entries(selectedCheckboxes)
        .filter(([day, isSelected]) => isSelected)
        .map(([day]) => day);
};