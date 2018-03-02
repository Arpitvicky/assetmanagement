import Immutable from 'immutable';

// default state
const initialState = Immutable.fromJS({
    data: []
});

/**
 * Increment reducer description
 * @param  {Object} [state=initialState] initialState declaration
 * @param  {Object} action               action type
 * @return {Object}                      dispatching state
 */
const employeeReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_EMPLOYEES':
            return state.set('data', Immutable.fromJS(action.payload));
        case 'POST_EMPLOYEE':
            return { ...state, employees: [...state.employees, ...action.payload], msg: 'Saved ! Click to continue', style: 'success', validation: 'success' };
        case 'POST_EMPLOYEE_REJECTED':
            return { ...state, msg: "Couldn't Save", style: 'danger', validation: 'error' };
        case 'RESET_FORM':
            return { ...state, msg: null, style: 'primary', validation: null };
        case 'DEL_EMPLOYEE':
        {
            const currentEmpToDelete = [...state.employees];
            const indexToDelete = currentEmpToDelete.findIndex((employee) => { return employee._id === action.payload; });
            return { employees: [...state.employees.slice(0, indexToDelete), ...state.employees.slice(indexToDelete + 1)] };
        }
        case 'UPDATE_EMPLOYEE':
        {
            // Create a copy of the current array of employees
            const currentEmpToUpdate = [...state.employees];
            // Determine at which index in employees array is the employee to be deleted
            const indexToUpdate = currentEmpToUpdate.findIndex(
                function(employee) {
                    return employee._id === action.payload._id;
                }
            );
            const updatedEmployeeObject = action.payload.data;
            // Create a new employee object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methos too
            // const newEmployeeToUpdate = {
            //     ...currentEmpToUpdate[indexToUpdate],
            // };
            // This Log has the purpose to show you how newemployeeToUpdate looks like
            // console.log('what is it newemployeeToUpdate', newemployeeToUpdate);
            // use slice to remove the employee at the specified index, replace with the new object and concatenate witht he rest of items in the array
            return { employees: [...currentEmpToUpdate.slice(0, indexToUpdate), updatedEmployeeObject, ...currentEmpToUpdate.slice(indexToUpdate + 1)], validationUpdate: 'success' };
        }
        case 'UPDATE_EMPLOYEE_REJECTED':
            return { ...state, validationUpdate: 'error' };
        default : return state;
    }
};

export default employeeReducers;
