import React, { useEffect } from 'react'
import {Button} from '@shopify/polaris';
import NotificationSetting from '../Notification Settings/NotificationSetting';
import Alert from '../Alert'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getNotification, syncData} from '../../actions/notification'
const NotificationSettings = ({getNotification, notification: {notification}, syncData}) => { 
    useEffect(() => {
        getNotification();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        syncData()
    }
    return (
        <div className='container'>
            <Alert />
            <form style={{textAlign:'right'}}>
                <Button primary onClick={onSubmit}>SYNC DATA</Button>
            </form>
            {notification.map((item, index) => (
                <NotificationSetting notification={item} key={index}/>
            ))}
            {/* <NotificationSetting/> */}

        </div>
    )
}

NotificationSettings.propTypes = {
    getNotification: PropTypes.func.isRequired,
    notification: PropTypes.object.isRequired,
    syncData: PropTypes.func.isRequired,
  }

const mapStateToProps = (state) => ({
    notification: state.notification
})


export default connect(mapStateToProps, {getNotification, syncData})(NotificationSettings)
