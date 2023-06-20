import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layout/header/Header";
import Home from "../pages/home/Home";
import * as Router from "../constants/routes";

const Routers = () => (
    <BrowserRouter>
            <Header />
        <Routes>
            <Route exact path={Router.HOME} element={<Home />} />
        </Routes>
    </BrowserRouter>
);

export default Routers;