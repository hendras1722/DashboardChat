import { combineReducers } from 'redux';
import contact from './contact'
import contactDetail from './contactDetail'

export default combineReducers({
    contact,
    contactDetail
});