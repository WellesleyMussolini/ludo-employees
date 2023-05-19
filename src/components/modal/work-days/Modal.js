import { useQuery } from "react-query";
import { employees } from "../../../services/service";
import { Overlay, Wrapper, Staff, Box, WeekDays, CheckBox, SelectEmployee } from "./modal.styles";
import { week_days } from "../../mock/week.mock";
import Button from "../../button/Button";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ open, close, HandleSubmit, HandleStaffer, staffer }) => {
    const { data: staff } = useQuery("staff", employees.get);
    return (
        <Overlay open={open}>
            {
                open &&
                <Wrapper>
                    <CloseIcon onClick={close} />
                    <SelectEmployee>
                        <h2>SELECIONE O FUNCIONARIO</h2>
                        <Staff onChange={(event) => HandleStaffer(event.target.value)}>{staff.map(((employee, index) => <option key={index} value={staffer}>{employee.name}</option>))}</Staff>
                    </SelectEmployee>
                    <Box>
                        <h2>DIAS QUE IRÁ TRABALHAR</h2>
                        <WeekDays>
                            {
                                week_days.map((day, index) => {
                                    return (
                                        <CheckBox key={index}>
                                            <input
                                                type="checkbox"
                                            />
                                            <p>{day.week_day}</p>
                                        </CheckBox>
                                    )
                                })
                            }
                        </WeekDays>
                    </Box>
                    <Button
                        text="SALVAR"
                        backgroundColor="rgb(7, 204, 40)"
                        fontSize="8px"
                        width="100px"
                        height="40px"
                        onClick={HandleSubmit}
                    />
                </Wrapper>
            }
        </Overlay>
    )
};

export default Modal;

