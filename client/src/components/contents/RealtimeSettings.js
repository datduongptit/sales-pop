import React from 'react'
import LayoutPopup from '../RealtimeSettings/LayoutPopup'
import ShowProduct from '../RealtimeSettings/ShowProduct'
import Position from '../Notification Settings/Position'
import NotifyFooter from '../Notification Settings/NotifyFooter'
const RealtimeSettings = () => {
    return (
        <div className='container'>
            <ShowProduct />

            <LayoutPopup />

            <Position />

            <NotifyFooter />
        </div>
    )
}

export default RealtimeSettings
