
import axios from 'axios';

/**
 * Post a employee
 * @return {Object} redux standard action
 */
export function getLoginStatus() {
    // Connecting client with web server through axios, returning function instead of action --redux-thunk
    return function() {
        axios.get('/api/login')
            .then(function(response) {
                console.log('log in');
                console.log(response);
                // dispatching an action only if success scenario met
                // dispatch({ type: 'GET_EMPLOYEE', payload: response.data });
            })
            .catch(function(err) {
                // dispatch({ type: 'GET_EMPLOYEE_REJECTED', payload: err });
            });
    };
}
/**
 * Post a employee
 * @return {Object} redux standard action
 */
export function getSignUpStatus() {
    // Connecting client with web server through axios, returning function instead of action --redux-thunk
    return function() {
        axios.get('/api/signup')
            .then(function(response) {
                console.log('sign up');
                console.log(response.data);
                // dispatching an action only if success scenario met
                // dispatch({ type: 'GET_EMPLOYEE', payload: response.data });
            })
            .catch(function(err) {
                // dispatch({ type: 'GET_EMPLOYEE_REJECTED', payload: err });
            });
    };
}
/**
 * Post a employee
 * @return {Object} redux standard action
 */
export const getEmployees = () => {
    // Connecting client with web server through axios, returning function instead of action --redux-thunk
    return function(dispatch) {
        axios.get('/api/users')
            .then(function(response) {
                console.log(response.data);
                // dispatching an action only if success scenario met
                dispatch({ type: 'GET_EMPLOYEE', payload: response.data });
            })
            .catch(function(err) {
                dispatch({ type: 'GET_EMPLOYEE_REJECTED', payload: err });
            });
    };
};
/**
 * Post a employee
 * @param  {Object} employee  array of employee
 * @return {Object} redux standard action
 */
export function postEmployee(employee) {
    // Connecting client with web server through axios, returning function instead of action --redux-thunk
    return function(dispatch) {
        axios.post('/api/employees', employee)
            .then(function(response) {
                // dispatching an action only if success scenario met
                dispatch({ type: 'POST_EMPLOYEE', payload: response.data });
            })
            .catch(function(err) {
                dispatch({ type: 'POST_EMPLOYEE_REJECTED', payload: err });
            });
    };
}

/**
 * Post a employee
 * @param  {Object} employee  array of employee
 * @return {Object} redux standard action
 */
export function applyLeaves(employee) {
    // Connecting client with web server through axios, returning function instead of action --redux-thunk
    return function(dispatch) {
        axios.post('/api/applyleaves', employee)
            .then(function(response) {
                // dispatching an action only if success scenario met
                dispatch({ type: 'APPLY_LEAVES', payload: response.data });
            })
            .catch(function(err) {
                dispatch({ type: 'APPLY_LEAVES_REJECTED', payload: err });
            });
    };
}

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


/**
 * Reset the form
 * @return {Object} redux standard action
 */
export function logoutEmployee() {
    // Connecting client with web server through axios, returning function instead of action --redux-thunk
    return function() {
        axios.get('/api/logout')
            .then(function(response) {
                console.log('logged out succesfully');
                console.log(response);
                // dispatching an action only if success scenario met
                // dispatch({ type: 'GET_EMPLOYEE', payload: response.data });
            })
            .catch(function(err) {
                // dispatch({ type: 'GET_EMPLOYEE_REJECTED', payload: err });
            });
    };
}

/**
 * Reset the form
 * @return {Object} redux standard action
 */
export function checkLogin() {
    // Connecting client with web server through axios, returning function instead of action --redux-thunk
    return function() {
        axios.get('/api/elists')
            .then(function(response) {
                console.log('checking logged in status');
                console.log(response.data);
                // dispatching an action only if success scenario met
                dispatch({ type: 'CHECK_LOGIN', payload: response.data });
            })
            .catch(function(err) {
                // dispatch({ type: 'GET_EMPLOYEE_REJECTED', payload: err });
            });
    };
}

/**
 * Reset the form
 * @return {Object} redux standard action
 */
export function resetButton() {
    return {
        type: 'RESET_FORM'
    };
}
