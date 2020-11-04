import React, { useEffect } from 'react'
import {Button} from '@shopify/polaris';
import NotificationSetting from '../Notification Settings/NotificationSetting';
import Alert from '../Alert'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getNotification} from '../../actions/notification'
const NotificationSettings = ({getNotification, notification: {notification}}) => { 
    useEffect(() => {
        getNotification();
    }, [getNotification]);

    return (
        <div className='container'>
            <Alert />
            <div style={{textAlign:'right'}}>
                <Button primary>SYNC DATA</Button>
            </div>
            {notification.map((item, index) => (
                <NotificationSetting notification={item} key={index}/>
            ))}

        </div>
    )
}

NotificationSettings.propTypes = {
    getNotification: PropTypes.func.isRequired,
    notification: PropTypes.object.isRequired,
  }

const mapStateToProps = (state) => ({
    notification: state.notification
})


export default connect(mapStateToProps, {getNotification})(NotificationSettings)
