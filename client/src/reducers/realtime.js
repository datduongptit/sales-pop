import {
    ADD_REALTIME,
    GET_REALTIME,
    REALTIME_ERROR
} from '../constants/constants';

const initialState = {
    realtimeSetting: [],
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_REALTIME:
            return {
                ...state,
                realtimeSetting: payload
            };
        case ADD_REALTIME:
            console.log(payload);
            return {
                ...state,
                realtimeSetting: [payload, ...state.realtimeSetting]
            };
        case REALTIME_ERROR:
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
}