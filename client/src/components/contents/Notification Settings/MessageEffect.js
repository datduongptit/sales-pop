import React, {useState, useCallback, useEffect} from 'react'
import {TextStyle, Layout} from '@shopify/polaris';
import Notification from './Notification'
import {connect} from 'react-redux';
const MessageEffect = () => {
    const [formData, setFormData] = useState('bounce');
    const {display} = formData;

    const [formHide, setFormHide] = useState('bounce');
    const {hidden} = formHide;


    const onChange= (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onChangeHide = (e) => {
        setFormHide({...formHide, [e.target.name]: e.target.value});
    }

    return (
        <div className='mb-3'>
            <form>
                <div className='mb-3'>
                <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Message display effect</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <select name='display' value={display} onChange={onChange} style={{width:'250px', height: '40px', margin:0, padding:'5px'}}>
                            <optgroup label='Attention Seekers'>
                                <option value='bounce'>Bounce</option>
                                <option value='flash'>Flash</option>
                                <option value='pulse'>Pulse</option>
                                <option value='shakeX'>ShakeX</option>
                                <option value='bounce out up'>Bounce out up</option>
                                <option value='shakeY'>ShakeY</option>
                                <option value='swing'>Swing</option>
                                <option value='tada'>tada</option>
                                <option value='jello'>Jello</option>
                                <option value='backInDown'>Back In Down</option>
                                <option value='heartBeat'>Bounce out up</option>
                            </optgroup>
                        </select> 
                    </Layout.Section> 
                </Layout>
                </div>
                <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Message hidden effect</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <select name='hidden' value={hidden} onChange={onChangeHide} style={{width:'250px', height: '40px', margin:0, padding:'5px'}}>
                            <optgroup label='Bouncing Exit'>
                                <option value='bounceOut'>Bounce Out</option>
                                <option value='bounceOutDown'>bounceOutDown</option>
                                <option value='bounceOutLeft'>bounceOutLeft</option>
                                <option value='bounceOutRight'>bounceOutRight</option>
                                <option value='bounceOutUp'>bounceOutUp</option>
                                <option value='fadeOut'>fadeOut</option>
                                <option value='fadeOutBig'>fadeOutBig</option>
                                <option value='fadeOutLeftBig'>fadeOutLeftBig</option>
                                <option value='fadeOutRightBig'>fadeOutRightBig</option>
                                <option value='fadeOutUpBig'>fadeOutUpBig</option>
                            </optgroup>
                        </select> 
                    </Layout.Section> 
                </Layout>   
                <Notification effect = {display} hide = {hidden} />
            </form>     
        </div>
    )
}


export default connect()(MessageEffect)
