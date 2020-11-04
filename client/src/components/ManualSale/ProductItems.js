import React, {useEffect} from 'react';
import {Button, Card, DataTable} from '@shopify/polaris';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getProducts, getProduct, updateProduct, publishOrders} from '../../actions/manualSale';
import Moment from 'react-moment';
import EditManualSales from './EditManualSales';
import DeleteButton from './DeleteButton';
import Spinner from '../contents/Spinner'

const ProductItems = ({getProducts, getProduct, manualSale: {products, loading}, updateProduct, publishOrders}) => {

    const rows = [];
    products.map((product, index) => {
    return rows.push([
        product.lastName,
        product.city,
        product.product,
        <Moment format='MM/DD/YYYY  h:mm a'>{product.order}</Moment>,
        0,
        0,
        <div style={{display:'flex', padding: 0}}> 
            <div>
                {console.log(product.publishOrder)}
                <div style={{padding: '0 5px 5px 0'}}><Button onClick={async () => {await publishOrders(product._id, {publishOrder: !product.publishOrder}); getProducts()}} ><span style={{color: `${product.publishOrder === true ? 'green' : ''}`}}><i className="fa fa-check"></i></span></Button></div> 
                {/* <div style={{padding: '0 5px 5px 0'}}><Button onClick={ () => { publishOrders(product._id, {publishOrder: !product.publishOrder})}} ><span style={{color: `${product.publishOrder === true ? 'green' : ''}`}}><i className="fa fa-check"></i></span></Button></div>  */}
                <EditManualSales products={product} /><span onClick={() => getProduct(product._id)}></span>
            </div>
            <div>
                <div style={{padding: '0 5px 5px 0'}}><DeleteButton id={product._id} /></div>
                <Button onClick={() => getProducts()}><span style={{color: 'blue'}}><i className="fa fa-retweet"></i></span></Button> 
            </div> 
        </div>
    ])
    })

    return (
        <>
        {loading ? (
            <Spinner /> 
            ) : (
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
            )}
        </>
    )
}

ProductItems.propTypes = {
    getProducts: PropTypes.func.isRequired,
    manualSale: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
    publishOrders: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    manualSale: state.manualSale
})

export default connect(mapStateToProps, {getProducts, getProduct, updateProduct, publishOrders})(ProductItems)
