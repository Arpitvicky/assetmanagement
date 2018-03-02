
import axios from 'axios';
/* eslint-disable */
export const empData = {
    users:[{
        _id: 1,
        name: 'Arpit kumar'
    }, {
        _id: 2,
        name: 'Arpit vicky'
    }]
};
/* eslint-disable */



/**
 * Reset the form
 * @return {Object} redux standard action
 */
// export function getEmployees() {
//     return {
//         type: 'GET_EMPLOYEES',
//         payload: empData
//     };
// }



/**
 * Post a employee
 * @return {Object} redux standard action
 */
export const getEmployees = () => {
    // Connecting client with web server through axios, returning function instead of action --redux-thunk
    return function(dispatch) {
        axios.get('http://gurxvdock01:8080/employee/all')
            .then(function(response) {
                console.log(response.data);
                // dispatching an action only if success scenario met
                dispatch({ type: 'GET_EMPLOYEES', payload: response.data });
            })
            .catch(function(err) {
                dispatch({ type: 'GET_EMPLOYEE_REJECTED', payload: err });
            });
    };
};


// function to delete a employee
/**
 * Post a employee
 * @param  {Object} id  object
 * @return {Object} redux standard action
 */
export function delEmployee(id) {
    return function(dispatch) {
        /* eslint-disable prefer-template */
        axios.delete('/api/users/' + id)
            .then(function() {
                // dispatching an action only if success scenario met
                dispatch({ type: 'DEL_EMPLOYEE', payload: id });
            })
            .catch(function(err) {
                dispatch({ type: 'DEL_EMPLOYEE_REJECTED', payload: err });
            });
        /* eslint-enable prefer-template */
    };
}
// function to update a employee

/**
 * Update a employee
 * @param  {Number} employeeId  number
 * @param  {Object} employee  number
 * @return {Object} redux standard action
 */
export function updateEmployee(employeeId, employee) {
    // return {
    //     type: 'UPDATE_EMPLOYEE',
    //     payload: employeeId
    // };
    return function(dispatch) {
        /* eslint-disable prefer-template */
        axios.put('/api/users/' + employeeId, employee)
            .then(function(response) {
                // dispatching an action only if success scenario met
                console.log(response);
                dispatch({ type: 'UPDATE_EMPLOYEE',
                    payload: {
                        data: response.data,
                        _id: employeeId
                    } });
            })
            .catch(function(err) {
                dispatch({ type: 'UPDATE_EMPLOYEE_REJECTED', payload: err });
            });
        /* eslint-enable prefer-template */
    };
}

