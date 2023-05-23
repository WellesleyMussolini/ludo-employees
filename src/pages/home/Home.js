import React, { useState } from "react";
import { Container } from "./home.styles";
import Week from "./components/week/Week.component";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/work-days/Modal";

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [staffer, setStaffer] = useState("");
    const [checkbox, setCheckbox] = useState({});
    const [modalFormData, setModalFormData] = useState({ staffer: "", checkbox: {} });

    const resetModalFormData = () => setModalFormData({ staffer: "", checkbox: {} });

    const handleSubmit = () => {
        setCheckbox(modalFormData.checkbox);
        setStaffer(modalFormData.staffer);
        setOpenModal(false);
        return resetModalFormData();
    };

    const handleCheckboxChange = (day, isChecked) => {
        setModalFormData((prevFormData) => ({
            ...prevFormData,
            checkbox: {
                ...prevFormData.checkbox,
                [day]: isChecked,
            },
        }));
    };

    const handleStafferChange = (value) => {
        setModalFormData((prevFormData) => ({
            ...prevFormData,
            staffer: value,
        }));
    };
    return (
        <Container>
            <Button
                text="ADICIONAR FUNCIONÁRIO"
                handleOnClick={() => {
                    setOpenModal(true)
                    resetModalFormData();
                }}
                backgroundColor="rgb(7, 204, 40)"
                fontSize="8px"
                width="230px"
                height="40px"
                position="fixed"
            />
            <Modal
                open={openModal}
                close={() => setOpenModal(false)}
                staffer={modalFormData.staffer}
                HandleStaffer={handleStafferChange}
                HandleSubmit={handleSubmit}
                checkbox={modalFormData.checkbox}
                HandleCheckbox={handleCheckboxChange}
            />
            <Week staffer={staffer} checkbox={checkbox} />
        </Container>
    );
};

export default Home;