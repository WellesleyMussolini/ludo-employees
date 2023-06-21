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
    const weekdaysPt = {
        Monday: 'Segunda',
        Tuesday: 'Terça',
        Wednesday: 'Quarta',
        Thursday: 'Quinta',
        Friday: 'Sexta',
        Saturday: 'Sábado',
        Sunday: 'Domingo',
    };

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
                            <p>{weekdaysPt[day]}</p>
                        </CheckBoxes>
                    ))}
                </WeekDaysOptions>
                <button onClick={handleAdd} disabled={!textInput}>ADICIONAR</button>
            </Wrapper>
        </Container>
    );
};

export default Modal;