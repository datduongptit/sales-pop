import { 
    ADD_NOTIFICATION,
    GET_NOTIFICATION, 
    NOTIFICATION_ERROR
 } from '../constants/constants';


 const initialState = {
     notification: [],
     error: {}
 }


export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case ADD_NOTIFICATION:
            return {
                ...state,
                notification: [payload, ...state.notification]
            }
        case GET_NOTIFICATION:
            return{ 
                ...state,
                notification: payload
            }
        case NOTIFICATION_ERROR: 
        return {
            ...state,
            error: payload
        }
        default:
            return state
    }
}