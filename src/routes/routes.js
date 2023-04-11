import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Router from "../constants/routes";
import Home from "../pages/home/Home";
import Header from "../layout/header/Header";
import Employees from "../pages/employees/Employees";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={Router.HOME} element={
                    <>
                        <Header />
                        <Home />
                    </>
                } />
                <Route exact path={Router.EMPLOYEES} element={
                    <>
                        <Header />
                        <Employees />
                    </>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;