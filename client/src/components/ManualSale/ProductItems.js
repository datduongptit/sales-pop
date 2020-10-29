import React from 'react';
import {Button, Card, DataTable} from '@shopify/polaris';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getProducts, getProduct, updateProduct} from '../../actions/manualSale';
import Moment from 'react-moment';
import EditManualSales from './EditManualSales';
import DeleteButton from './DeleteButton';


const ProductItems = ({getProducts, getProduct, manualSale: {products}, updateProduct}) => {
    const rows = [];
    products.map((product, index) => {
    return rows.push([
        product.lastName,
        product.city,
        product.product,
        <Moment format='MM/DD/YYYY  h:mm a'>{product.order}</Moment>,
        0,
        0,
        <div> 
            <Button><span onClick={() => updateProduct(product._id, product.publishOrder)} style={{color: `${product.publishOrder === "true" ? 'green' : ''}`}}><i className="fa fa-check"></i></span></Button> 
            <EditManualSales products={product} /><span onClick={() => getProduct(product._id)}></span>
            <>
                <DeleteButton id={product._id} />
            </> 
            <Button onClick={() => getProducts()}><span><i className="fa fa-retweet"></i></span></Button> 
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
    getProduct: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    manualSale: state.manualSale
})

export default connect(mapStateToProps, {getProducts, getProduct, updateProduct})(ProductItems)
