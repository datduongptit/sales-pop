import React, { useEffect } from 'react';
import {Button, Card, DataTable, List, Page} from '@shopify/polaris';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getProducts, deleteProduct, getProduct} from '../../../actions/manualSale';
import Moment from 'react-moment'
import AddModal from './AddModal';


const ProductItems = ({getProducts, getProduct, manualSale: {products}, deleteProduct}) => {
    useEffect(() => {
        getProducts();
    }, [getProducts])

    const rows = [];
    products.map((product, index) => {
    rows.push([
        product.firstName,
        product.city,
        product.product,
        <Moment format='MM/DD/YYYY  h:mm a'>{product.order}</Moment>,
        0,
        0,
        <div>
            <Button><span style={{color: 'green'}}><i className="fa fa-check"></i></span></Button> 
            <Button onClick={() => getProduct(product._id)}><i className="fa fa-edit"></i></Button> 
            <Button onClick={() => deleteProduct(product._id)}><span style={{color: 'red'}}><i className="fa fa-times"></i></span></Button> 
            <Button onClick={() => getProduct(product._id)}><span><i className="fa fa-retweet"></i></span></Button> 
        </div>
    ])
    })

    return (
            <Card>
                <DataTable
                columnContentTypes={[
                    'text',
                    'text',
                    'text',
                    'text',
                    'text',
                    'text',
                    'text',
                ]}
                headings={[
                    'FIRST NAME',
                    'CITY',
                    'PRODUCT SELECTED',
                    'ORDER DATE/TIME',
                    'CLICKED TIMES',
                    'IGNORED TIMES',
                    'ACTION',
                ]}
                rows={rows}
                />
            </Card>
    )
}

ProductItems.propTypes = {
    getProducts: PropTypes.func.isRequired,
    manualSale: PropTypes.object.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    getProduct: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    manualSale: state.manualSale
})

export default connect(mapStateToProps, {getProducts, deleteProduct, getProduct})(ProductItems)
