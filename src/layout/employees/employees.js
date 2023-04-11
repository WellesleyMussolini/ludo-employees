import { List } from "./employees.styles";

const EmployeesList = (employees) => {
    return (
        <List>
            {
                employees.map((employee, params) => {
                })
            }
        </List>
    )
};

export default EmployeesList;