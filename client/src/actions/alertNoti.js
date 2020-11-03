import { NOTIFICATION_DISPLAY } from '../constants/constants';

export const setDiplay = (alertType) => dispatch => {
    dispatch({ 
        type: NOTIFICATION_DISPLAY,
        payload: {alertType}
    })
}