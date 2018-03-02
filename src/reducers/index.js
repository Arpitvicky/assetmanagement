import { combineReducers } from 'redux';
// here import reducers to be combined
import employeeReducers from './employeeReducers';
import aseetsReducers from './assetsReducer';
// here combine the reducers. It represents one single state object for the entire application.
export default combineReducers({
    employees: employeeReducers,
    assets: aseetsReducers
});

