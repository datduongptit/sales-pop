import React, {useCallback, useState} from 'react'
import {TextStyle, Layout, TextField} from '@shopify/polaris';

const DisplayTime = () => {
    const [value, setValue] = useState('10');

    const handleChangeField = useCallback((newValue) => setValue(newValue), []);

    const [value1, setValue1] = useState('5');

    const handleChangeField1 = useCallback((newValue1) => setValue1(newValue1), []);
    return (
        <div className='mb-3'>
            <div className='mb-3'>
            <Layout>
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Next time display</TextStyle>
                </Layout.Section>
                <Layout.Section>
                    <div className='time-display'>
                        <TextField type='number' value= {value} onChange={handleChangeField}/>
                        <span className='seconds'>seconds</span>
                    </div>
                </Layout.Section> 
            </Layout>
            </div>
            <Layout>
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Display time</TextStyle>
                </Layout.Section>
                <Layout.Section>
                    <div className='time-display'>
                        <TextField type='number' value= {value1} onChange={handleChangeField1}/>
                        <span className='seconds'>seconds</span>
                    </div>
                </Layout.Section> 
            </Layout>
        </div>
    )
}

export default DisplayTime
