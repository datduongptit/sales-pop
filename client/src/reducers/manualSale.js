import { 
    GET_PRODUCTS, 
    GET_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    ADD_PRODUCT,
    PRODUCT_ERROR
} from '../constants/constants';

const initialState = {
    products: [],
    product: null,
    error: {}
}

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
            };
        case GET_PRODUCT: 
            return {
                ...state,
                product: payload,
            };
        case ADD_PRODUCT:
        case EDIT_PRODUCT:
            return {
                ...state, 
                products: [payload, ...state.products],
            };
        case DELETE_PRODUCT:
            return {
                ...state, 
                products: state.products.filter((product) => product._id !== payload),
            };
        case PRODUCT_ERROR:
            return {
                ...state,
                error: payload,
            };
    
        default:
            return state
    }
}