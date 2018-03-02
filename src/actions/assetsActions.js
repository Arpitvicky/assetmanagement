
// import axios from 'axios';
/* eslint-disable */
export const assetData = [{
		assetid : '1',
		assetname: 'Mac book',
		quantity: 2,
		startDate: '12/12/2018'
	},
	{
		assetid : '2',
		assetname: 'Mouse',
		quantity: 3,
		startDate: '12/12/2018'
	},
	{
		assetid : '3',
		assetname: 'Keyboard',
		quantity: 4,
		startDate: '12/12/2018'
    }]

export const assetData2 = [{
		assetid : '1',
		assetname: 'Window machine',
		quantity: 2,
		startDate: '12/12/2018'
	},
	{
		assetid : '2',
		assetname: 'Printer',
		quantity: 5,
		startDate: '12/12/2018'
	},
	{
		assetid : '3',
		assetname: 'Keyboard',
		quantity: 6,
		startDate: '12/12/2018'
	}]
/* eslint-disable */



/**
 * Reset the form
 * @return {Object} redux standard action
 */
export function getAssets(employeeSelected) {
    if (employeeSelected === 'AKQA0010'){
        return {
            type: 'GET_ASSETS',
            payload: assetData2
        };
    }
    return {
        type: 'GET_ASSETS',
        payload: assetData
    };
}


/**
 * Reset the form
 * @return {Object} redux standard action
 */
export function addAsset(employeeSelected, asset) {
    return {
        type: 'ADD_ASSET',
        payload: asset
    };
}


/**
 * Reset the form
 * @return {Object} redux standard action
 */
export function updateAsset(assetId) {
    return {
        type: 'UPDATE_ASSET',
        payload: assetId
    };
}


/**
 * Reset the form
 * @return {Object} redux standard action
 */
export function deleteAsset(assetId) {
    return {
        type: 'DELETE_ASSET',
        payload: assetId
    };
}







/**
 * Post a employee
 * @return {Object} redux standard action
 */
// export const getAssets = (empId) => {
//     // Connecting client with web server through axios, returning function instead of action --redux-thunk
//     return function(dispatch) {
//         axios.get('http://gurxvdock01:8080/employee/all')
//             .then(function(response) {
//                 console.log(response.data);
//                 // dispatching an action only if success scenario met
//                 dispatch({ type: 'GET_EMPLOYEES', payload: response.data });
//             })
//             .catch(function(err) {
//                 dispatch({ type: 'GET_EMPLOYEE_REJECTED', payload: err });
//             });
//     };
// };


