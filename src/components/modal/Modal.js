import { CheckBoxes, CloseIcon, Container, WeekDaysOptions, Wrapper } from "./modal.styles";
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({
    open,
    selectedCheckboxes,
    handleCheckboxChange,
    textInput,
    handleInputChange,
    handleAdd,
    close
}) => {
    if (!open) return null;
    return (
        <Container>
            <Wrapper>
                <CloseIcon onClick={close} />
                <input placeholder="Digite um nome" type="text" value={textInput} onChange={handleInputChange} />

            <WeekDaysOptions>
                {Object.entries(selectedCheckboxes).map(([day, isSelected]) => (
                    <CheckBoxes key={day}>
                        <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleCheckboxChange(day)}
                            />
                        <p>{day}</p>
                    </CheckBoxes>
                ))}
                </WeekDaysOptions>
                <button onClick={handleAdd} disabled={!textInput}>ADICIONAR</button>
            </Wrapper>
        </Container>
    );
};

export default Modal;