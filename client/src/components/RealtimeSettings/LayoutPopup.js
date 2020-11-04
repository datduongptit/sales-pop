import React, {useState, useCallback, useEffect} from 'react';
import {TextStyle, Layout, RadioButton, Select, Button, Icon, Form} from '@shopify/polaris';
import {
    QuestionMarkMajor
  } from '@shopify/polaris-icons';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addRealtimeSetting, getRealtimeSetting} from '../../actions/realtime';
import position_1 from '../../images/position_1.png';
import position_2 from '../../images/position_2.jpg';
import position_3 from '../../images/position_3.jpg';
import position_4 from '../../images/position_4.jpg';
import Spinner from '../contents/Spinner';

const LayoutPopup = ({addRealtimeSetting, getRealtimeSetting, realtime: {loading}, realtimeSetting}) => {
    useEffect(() => {
        getRealtimeSetting();
        }, [getRealtimeSetting, loading]);
    
    const [checked, setChecked] = useState('gradient');
    const handleChange = useCallback(
        (_checked, newValue) => setChecked(newValue),
        [],
    );

    const options = [
        {label: 'Correct views', value: 'Correct views'},
        {label: 'Random views', value: 'Random views'},
    ];

    const [positionValue, setPosition] = useState(realtimeSetting.position);

    const handleChangePosition = useCallback(
      (_checked, newValue) => setPosition(newValue),
      [],
    );

    const [orderChecked, setOrderChecked] = useState(realtimeSetting.showProduct);
    const [selected, setSelected] = useState('Correct views');
    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const [colorLeft, setColorLeft] = useState(realtimeSetting.backgroundLeft);
    const onChangeColorLeft = (e) => {setColorLeft([e.target.name] = e.target.value)};

    const [colorRight, setColorRight] = useState(realtimeSetting.backgroundRight);
    const onChangeColorRight = (e) => {setColorRight([e.target.name] = e.target.value)};

    const [color, setColor] = useState(realtimeSetting.backgroundColor);
    const onChangeColor = (e) => {setColor([e.target.name] = e.target.value)};

    const [colorText, setColorText] = useState(realtimeSetting.colorText);
    const onChangeColorText = (e) => {setColorText([e.target.name] = e.target.value)};

    const [customText, setCustomText] = useState(realtimeSetting.customText);
    const onChangeText = (e) => {setCustomText([e.target.name] = e.target.value)};

    const initialState = {
        showProduct: '',
        backgroundLeft: '',
        backgroundRight: '',
        backgroundColor: '',
        to: '0', 
        from: '0',
        customText: 'Testing',
        colorText: '',
        position: '',
    }

    const [formData, setFormData] = useState(initialState);
    formData.showProduct = JSON.stringify(orderChecked);
    formData.position = positionValue;
    formData.backgroundLeft = colorLeft;
    formData.backgroundRight = colorRight;
    formData.backgroundColor = color;
    formData.colorText = colorText;
    formData.customText = customText;
    const onChange = (e) => {setFormData({...formData, [e.target.name]: e.target.value})};
    const onSubmit = (e) => {
        e.preventDefault();
        addRealtimeSetting(formData);
    }
    return (
    <> 
        {loading ? (
        <Spinner />
            ) : (
        <form onSubmit={onSubmit}>
            <div className='mb-3 mt-3'>
                <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Show Order Notifications</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <input type='checkbox' name='orderChecked' value={realtimeSetting.showProduct} defaultChecked={orderChecked} onChange={() => setOrderChecked(!orderChecked)} />
                    </Layout.Section> 
                </Layout>
            </div>
            <div className='mb-3 mt-3'>
                <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Layout Popup</TextStyle>
                    </Layout.Section>
                    <Layout.Section oneThird>
                        <TextStyle>Background Gradient:</TextStyle>
                            <Layout.Section>
                                <RadioButton
                                    checked={checked === 'gradient'}
                                    onChange={handleChange}
                                    id='gradient'
                                    name='checked'
                                />
                                <div className='gradient' style={{background: `linear-gradient(90deg,${colorLeft}, ${colorRight})`}}>
                                    <i style={{color: colorText}} className='fa fa-users'></i>
                                    <span style={{color:`${colorText}`, fontWeight:600, marginTop: 50, alignItems: 'center', fontSize: 16}}> {customText}
                                    </span>
                                </div>
                            </Layout.Section>
                            <div className="mt-3 mb-3" style={{display:'flex'}}>
                                <div style={{paddingRight: '15px'}}>
                                    <span style={{fontWeight:600}}>Background left </span>
                                    <input type='color' name='backgroundLeft' defaultValue={colorLeft} className='color' onChange={onChangeColorLeft} />
                                </div>
                                <div>
                                    <span style={{fontWeight:600}}>Background right </span>
                                    <input type='color' name='backgroundRight' defaultValue={colorRight} className='color' onChange={onChangeColorRight} />
                                </div>
                                    
                            </div>
                    </Layout.Section> 
                    <Layout.Section oneThird>
                        <TextStyle>Background Color:</TextStyle>
                        <Layout.Section>
                            <RadioButton
                                checked={checked === 'backgroundColor'}
                                onChange={handleChange}
                                id='backgroundColor'
                                name='checked'
                            />
                            <div className='gradient' style={{backgroundColor: color}}>
                                <i style={{color: colorText}} className='fa fa-users'></i>
                                <span style={{color:`${colorText}`, fontWeight:600, alignItems: 'center', fontSize: 16}}> {customText} 
                                </span>
                            </div>
                        </Layout.Section>
                        <div className="mt-3">
                            <span style={{fontWeight:600, padding: 15}}>Background Color</span>
                            <input type='color' name='backgroundColor' defaultValue={color} className='color' onChange={onChangeColor} />
                        </div>
                    </Layout.Section> 
                </Layout>
            </div>
            <div className='mb-3 mt-3'>
                <Layout >
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Select Date Format</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <div className='input-md mb-3'>
                            <Select
                                options={options}
                                onChange={handleSelectChange}
                                value={selected}
                            />
                        </div>
                            { typeof(realtimeSetting.customView.from) === 'number' && selected === 'Random views'  ? (
                            <div className='mb-3'>
                                <div className='mb-3 ml-5'>
                                    <span style={{marginRight: 100, fontWeight:600}}>Min</span>
                                    <input type='number' name='from' defaultValue={realtimeSetting.customView.from} onChange={onChange} className='input-ssm' />
                                </div>
                                <div className='mb-3 ml-5'>
                                    <span style={{marginRight: 100, fontWeight:600}}>Max</span>
                                    <input type='number' name='to' defaultValue={realtimeSetting.customView.to} onChange={onChange} className='input-ssm' />
                                </div>
                            </div>
                        ) : ''} 
                    </Layout.Section>
                </Layout>
            </div>
            <div className='mb-3 mt-3'>
                <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Custom Text</TextStyle>      
                    </Layout.Section>
                    <Layout.Section>
                        <input required className="input-form" name='customText' defaultValue={customText} onChange={onChangeText} />
                    </Layout.Section>
                </Layout>
            </div>
            <div className='mb-3 mt-3'>
                <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Color Text</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <input defaultValue={colorText} name='colorText' onChange={onChangeColorText} type='color' className='color' />
                    </Layout.Section>
                </Layout>
            </div>
                {/* Position */}
            <div className='mb-3 mt-3'>
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
                                        onChange={handleChangePosition}
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
                                        onChange={handleChangePosition}
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
                                        onChange={handleChangePosition}
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
                                        onChange={handleChangePosition}
                                    />
                                    </div>
                                </li>
                            </ul>
                    </Layout.Section> 
                </Layout>
            </div>
            <div className='mb-3'>
                <Layout>
                    <Layout.Section secondary>
                        <Button size='medium' primary>
                            <div style={{display:'flex'}}>
                                <Icon source={QuestionMarkMajor} />
                                <span style={{padding:'5px 0px 5px 3px'}}>Support</span>
                            </div>
                        </Button>
                    </Layout.Section>
                    <Layout.Section>
                        <Button size='large' primary submit={true}>Save</Button>
                        {/* <input type='submit' /> */}
                    </Layout.Section> 
                </Layout>
            </div>
        </form>)}
    </>
    )
}

LayoutPopup.propTypes = {
    addRealtimeSetting: PropTypes.func.isRequired,
    getRealtimeSetting: PropTypes.func.isRequired,
    realtime: PropTypes.object.isRequired
  }

const mapStateToProps = (state) => ({
    realtime: state.realtime
})

export default connect(mapStateToProps, {addRealtimeSetting, getRealtimeSetting})(LayoutPopup)
