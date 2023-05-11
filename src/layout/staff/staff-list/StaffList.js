import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StaffList = ({ employees = [], jobRole, hired }) => {
    const filteredEmployees = employees.filter((employee) => employee.role === jobRole && employee.hired === hired);
    return (
        <>
            {filteredEmployees.map((employee) => {
                return (
                    <li key={employee._id}>
                        <h2>{jobRole}</h2>
                        <p>{employee.name}</p>
                        <EditIcon />
                        <DeleteIcon />
                    </li>
                );
            })}
        </>
    );
};

export default StaffList;