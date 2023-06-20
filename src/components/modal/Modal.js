const Modal = ({
    open,
    selectedCheckboxes,
    handleCheckboxChange,
    textInput,
    handleInputChange,
    handleAdd,
    close
}) => {
    if (!open) {
        return null;
    }

    const handleClose = () => {
        close();
    };

    return (
        <>
            <button onClick={handleClose}>CLOSE</button>
            <input type="text" value={textInput} onChange={handleInputChange} />

            {Object.entries(selectedCheckboxes).map(([day, isSelected]) => (
                <div key={day}>
                    <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleCheckboxChange(day)}
                    />
                    <label>{day}</label>
                </div>
            ))}

            <button onClick={handleAdd} disabled={!textInput}>
                Adicionar
            </button>
        </>
    );
};

export default Modal;