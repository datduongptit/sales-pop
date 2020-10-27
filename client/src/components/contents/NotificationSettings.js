import React from 'react'
import {Button} from '@shopify/polaris';
import ShowOrder from './Notification Settings/ShowOrder';
import SelectOrder from './Notification Settings/SelectOrder';
import ShowCustom from './Notification Settings/ShowCustom';
import OrderStatus from './Notification Settings/OrderStatus';
import DisplayTime from './Notification Settings/DisplayTime';
import SelectDate from './Notification Settings/SelectDate';
import SelectDevice from './Notification Settings/SelectDevice';
import CustomsText from './Notification Settings/CustomsText';
import MessageEffect from './Notification Settings/MessageEffect';
import Position from './Notification Settings/Position';
import ColorPick from './Notification Settings/ColorPicker';
import NotifyFooter from './Notification Settings/NotifyFooter';
import Notification from './Notification Settings/Notification'

const NotificationSettings = () => { 
    return (
        <div className='container'>
            <div style={{textAlign:'right'}}>
                <Button primary>SYNC DATA</Button>
            </div>
            <ShowOrder />  

            <SelectOrder />

            <ShowCustom />
             
            <OrderStatus />
            
            <DisplayTime />

            <SelectDate />

            <SelectDevice />

            <CustomsText />

            <MessageEffect />

            <Position />

            <ColorPick />

            <NotifyFooter />

        </div>
    )
}

export default NotificationSettings
