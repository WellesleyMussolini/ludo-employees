import React, { useState } from "react";
import { Container } from "./home.styles";
import Week from "./components/week/Week.component";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/work-days/Modal";

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [staffer, setStaffer] = useState("");

    const handleSubmit = () => {
        console.log(staffer)
    };
    return (
        <Container>
            <Button
                text="ADICIONAR FUNCIONÁRIO"
                handleOnClick={() => setOpenModal(true)}
                backgroundColor="rgb(7, 204, 40)"
                fontSize="8px"
                width="230px"
                height="40px"
                position="fixed"
            />
            <Modal 
                open={openModal}
                close={() => setOpenModal(false)}
                staffer={staffer}
                HandleStaffer={setStaffer}
                HandleSubmit={handleSubmit}
            />
            <Week />
        </Container>
    );
};

export default Home;