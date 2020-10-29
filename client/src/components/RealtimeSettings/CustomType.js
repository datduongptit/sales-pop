import React, {useState, useCallback} from 'react'
import {TextStyle, Layout, Select, TextField} from '@shopify/polaris';

const CustomType = () => {
    const options = [
        {label: 'Correct views', value: 'Correct views'},
        {label: 'Random views', value: 'Random views'},
    ];

    const [selected, setSelected] = useState('Correct views');

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const [value, setValue] = useState('');

    const handleChangeField = useCallback((newValue) => setValue(newValue), []);

    return (
        <div className='mb-3'>
            <div className="mb-3">
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
                            {selected === 'Random views' ? (
                            <div className='mb-3'>
                                <div className='mb-3 ml-5'>
                                    <span style={{marginRight: 100, fontWeight:600}}>Min</span>
                                    <input type='number' className='input-ssm' />
                                </div>
                                <div className='mb-3 ml-5'>
                                    <span style={{marginRight: 100, fontWeight:600}}>Max</span>
                                    <input type='number' className='input-ssm' />
                                </div>
                            </div>
                        ) : ''} 
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Select Date Format</TextStyle>      
                    </Layout.Section>
                    <Layout.Section>
                    <TextField type='text' value= {value} onChange={handleChangeField}/>
                    </Layout.Section>
                </Layout>
            </div>
            
        </div>
    )
}

export default CustomType
