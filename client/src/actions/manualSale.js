import axios from 'axios'
import { setAlert } from './alert'
import {
  GET_PRODUCTS,
  GET_PRODUCT,
  EDIT_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_ERROR,
} from '../constants/constants'

// Get all product
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/manualSale')
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Add product
export const addProduct = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await axios.post('/api/manualSale', formData, config)

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    })
    dispatch(setAlert('Product Created', 'success'));
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Get product by params id
export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/manualSale/${id}`)

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    })
    dispatch(setAlert('Get the product success', 'success'))
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
    payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/manualSale/${id}`)

    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    })

    dispatch(setAlert('Remove product successful', 'success'))
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
