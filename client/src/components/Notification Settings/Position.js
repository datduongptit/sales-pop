import React, {useCallback, useState} from 'react'
import {TextStyle, Layout, Checkbox, Card} from '@shopify/polaris';
import position_1 from '../../images/position_1.png'
import position_2 from '../../images/position_2.jpg'
import position_3 from '../../images/position_3.jpg'
import position_4 from '../../images/position_4.jpg'
// import { Card } from 'reactstrap';
const Position = () => {
    const [checked1, setChecked1] = useState(false);
    const handleChange1 = useCallback((newChecked) => setChecked1(newChecked), []);

    const [checked2, setChecked2] = useState(false);
    const handleChange2 = useCallback((newChecked) => setChecked2(newChecked), []);

    const [checked3, setChecked3] = useState(false);
    const handleChange3 = useCallback((newChecked) => setChecked3(newChecked), []);

    const [checked4, setChecked4] = useState(false);
    const handleChange4 = useCallback((newChecked) => setChecked4(newChecked), []);

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
                                    
                                <Checkbox
                                    checked={checked1}
                                    onChange={handleChange1}
                                    value={1}
                                />
                                </div>
                            </li>
                            <li className='img-sm'>
                                <img alt='Nothing' className='img' src={position_2}/>
                                <br/>
                                <div style={{textAlign:'center'}}>
                                    
                                <Checkbox
                                    checked={checked2}
                                    onChange={handleChange2}
                                    value={2}
                                />
                                </div>
                            </li>
                            <li className='img-sm'>
                                <img alt='Nothing' className='img' src={position_3}/>
                                <br/>
                                <div style={{textAlign:'center'}}>
                                    
                                <Checkbox
                                    checked={checked3}
                                    onChange={handleChange3}
                                    value={3}
                                />
                                </div>
                            </li>
                            <li className='img-sm'>
                                <img alt='Nothing' className='img' src={position_4}/>
                                <br/>
                                <div style={{textAlign:'center'}}>
                                    
                                <Checkbox
                                    checked={checked4}
                                    onChange={handleChange4}
                                    value={4}
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
