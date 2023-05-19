import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Employee, Icons, JobRole } from './staff.styles';

const StaffList = ({ employees = [], jobRole, hired }) => {
    const filteredEmployees = employees.filter((employee) => employee.role === jobRole && employee.hired === hired);
    return (
        <>
            {filteredEmployees.map((employee) => {
                return (
                        <Employee key={employee._id}>
                            <JobRole>{jobRole}</JobRole>
                            <p>{employee.name}</p>
                            <Icons>
                                <EditIcon />
                                <DeleteIcon />
                            </Icons>
                        </Employee>
                );
            })}
        </>
    );
};

export default StaffList;