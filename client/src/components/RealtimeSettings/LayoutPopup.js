import React, {useState, useCallback} from 'react'
import {TextStyle, Layout, Checkbox} from '@shopify/polaris';
import CustomType from './CustomType';

const LayoutPopup = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = useCallback((newChecked) => setChecked(newChecked), []);

    const [color, setColor] = useState('#08244A');

    const [colorLeft, setColorLeft] = useState('#4E67CA');

    const [colorRight, setColorRight] = useState('black');

    const [colorText, setColorText] = useState('#fff')
    return (
        <div className='mb-3 mt-3'>
            <Layout>
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Show Order Notifications</TextStyle>
                </Layout.Section>
                <Layout.Section oneThird>
                    <TextStyle>Background Gradient:</TextStyle>
                        <Layout.Section>
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                            />
                            <div className='gradient' style={{background: `linear-gradient(90deg,${colorLeft}, ${colorRight})`}}></div>
                        </Layout.Section>
                        <div className="mt-3 mb-3">
                            <span style={{fontWeight:600, padding: 15}}>Background left</span>
                            <input type='color' value={colorLeft} className='color' onChange={event => setColorLeft(event.target.value)} />
                            <span style={{fontWeight:600, padding: 15}}>Background right</span>
                            <input type='color' value={colorRight} className='color' onChange={e => setColorRight(e.target.value)} />
                        </div>
                </Layout.Section> 
                <Layout.Section oneThird>
                    <TextStyle>Background Gradient:</TextStyle>
                    <Layout.Section>
                        <Checkbox
                            checked={!checked}
                            onChange={handleChange}
                        />
                        <div className='gradient' style={{backgroundColor: color}}><span style={{color:`${colorText}`, fontWeight:600, marginLeft: 50, marginTop: 50, alignItems: 'center', fontSize: 16}}>Real time people visitors right now</span></div>
                    </Layout.Section>
                    <div className="mt-3">
                        <input type='color' value={color} className='color' onChange={e => setColor(e.target.value)} />
                    </div>
                </Layout.Section> 
            </Layout>

            <CustomType />

            <Layout>
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Color Text</TextStyle>
                </Layout.Section>
                <Layout.Section>
                    <input value={colorText} onChange={(e) => setColorText(e.target.value)} type='color' className='color' />
                </Layout.Section>
            </Layout>
        </div>
    )
}

export default LayoutPopup
