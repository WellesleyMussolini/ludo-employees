import React, { useState, useContext, createContext } from "react";

const Context = createContext();

export const UseContextProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    return <Context.Provider value={{ employees, setEmployees }}>{children}</Context.Provider>
};

export const useContextEmployee = () => {
    const context = useContext(Context);
    let { employees, setEmployees } = context;
    return { employees, setEmployees };
};