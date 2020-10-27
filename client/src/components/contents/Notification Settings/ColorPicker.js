import React, {useState, useCallback} from 'react'
import {TextStyle, Layout, TextField} from '@shopify/polaris';

const ColorPick = () => {
    const [value, setValue] = useState('5');

    const handleChangeField = useCallback((newValue) => setValue(newValue), []);

    return (
        <div className='mb-3'>
            <div className='mb-3'>
                <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Highlight color</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <input className='inputColor' type='color' />
                    </Layout.Section> 
                </Layout>
            </div>
            <div className='mb-3'>
                <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Text color</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <input className='inputColor'  type='color' />
                    </Layout.Section> 
                </Layout>
            </div>
            <div className='mb-3'>
                <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Color Date</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <input className='inputColor'  type='color' />
                    </Layout.Section> 
                </Layout>
            </div>
            <div className='mb-3'>
                <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Border Radius</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <div className='input-sm'>
                                <TextField type='number' value= {value} onChange={handleChangeField} />
                        </div>
                    </Layout.Section> 
                </Layout>
            </div>
        </div>
    )
}

export default ColorPick
