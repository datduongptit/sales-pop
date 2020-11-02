import {
    ADD_REALTIME,
    GET_REALTIME,
    REALTIME_ERROR
} from '../constants/constants';

const initialState = {
    realtime: null,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_REALTIME:
            return {
                ...state,
                realtime: payload
            }
        case GET_REALTIME:
            return {
                ...state,
                realtime: payload
            }
        default:
            return state;
    }
}