import React, {useCallback, useState} from 'react'
import {TextStyle, Layout, RadioButton} from '@shopify/polaris';
import position_1 from '../../images/position_1.png'
import position_2 from '../../images/position_2.jpg'
import position_3 from '../../images/position_3.jpg'
import position_4 from '../../images/position_4.jpg'
// import { Card } from 'reactstrap';
const Position = () => {
    const [positionValue, setPosition] = useState('');

    const handleChange = useCallback(
      (_checked, newValue) => setPosition(newValue),
      [],
    );


    return (
        <div className='mb-3'>
            <Layout>
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Position</TextStyle>
                </Layout.Section>
                <Layout.Section>
                        <ul className='img-list'>
                            <li className='img-sm'>
                                <img alt='Nothing' className='img' src={position_1}/>
                                <br/>
                                <div style={{textAlign:'center'}}>
                                    
                                <RadioButton
                                    checked={positionValue === 'bottomLeft'}
                                    id="bottomLeft"
                                    name="position"
                                    onChange={handleChange}
                                />
                                </div>
                            </li>
                            <li className='img-sm'>
                                <img alt='Nothing' className='img' src={position_2}/>
                                <br/>
                                <div style={{textAlign:'center'}}>
                                    
                                <RadioButton
                                    checked={positionValue === 'bottomRight'}
                                    id="bottomRight"
                                    name="position"
                                    onChange={handleChange}
                                />
                                </div>
                            </li>
                            <li className='img-sm'>
                                <img alt='Nothing' className='img' src={position_3}/>
                                <br/>
                                <div style={{textAlign:'center'}}>
                                    
                                <RadioButton
                                    checked={positionValue === 'topRight'}
                                    id="topRight"
                                    name="position"
                                    onChange={handleChange}
                                />
                                </div>
                            </li>
                            <li className='img-sm'>
                                <img alt='Nothing' className='img' src={position_4}/>
                                <br/>
                                <div style={{textAlign:'center'}}>
                                    
                                <RadioButton
                                    checked={positionValue === 'topLeft'}
                                    id="topLeft"
                                    name="position"
                                    onChange={handleChange}
                                />
                                </div>
                            </li>
                        </ul>
                </Layout.Section> 
            </Layout>
        </div>
    )
}

export default Position
