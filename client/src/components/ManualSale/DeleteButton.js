import React, { useEffect, useState, useCallback } from 'react';
import {Button, Modal} from '@shopify/polaris';
import {deleteProduct} from '../../actions/manualSale';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'


const DeleteButton = ({id, deleteProduct}) => {
    const [active, setActive] = useState(false);
    const onChange = useCallback(() => setActive(!active), [active]);
    const activator = <Button onClick={onChange}><i className="fa fa-times"></i> </Button>
    return (
        <div>
            <Modal
                    activator={activator}
                    open={active}
                    onClose={onChange}
                    title="Reach more shoppers with Instagram product tags"
                    primaryAction={{
                    content: 'Delete',
                    onAction: () => deleteProduct(id),
                    }}
                    secondaryActions={[
                    {
                        content: 'Cancel',
                        onAction: onChange,
                    },
                    ]}
                ></Modal>
        </div>
    )
}

DeleteButton.propTypes = {
    deleteProduct: PropTypes.func.isRequired,
}


export default connect(null, {deleteProduct})(DeleteButton)
