import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Router from "../constants/routes";
import Home from "../pages/home/Home";
import Header from "../layout/header/Header";
import Employees from "../pages/staff/staff";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Routers = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
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
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default Routers;