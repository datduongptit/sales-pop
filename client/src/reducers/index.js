import {combineReducers} from 'redux';
import manualSale from './/manualSale';
import alert from './alert'

export default combineReducers({
    manualSale,
    alert
})