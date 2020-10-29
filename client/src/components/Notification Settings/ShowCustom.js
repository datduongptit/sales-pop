import React, {useCallback, useState} from 'react'
import {TextStyle, Layout, Select, TextField} from '@shopify/polaris';

const ShowCustom = () => {
    const [selected, setSelected] = useState('Random');

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const [value, setValue] = useState('5');

    const handleChangeField = useCallback((newValue) => setValue(newValue), []);

    const options1 = [
        {label: 'Random', value: 'Random'},
        {label: 'Lastest', value: 'Lastest'}
    ];
    return (
        <div className='mb-3'>
            <div className='mb-3'>
                <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Show Custiom Order</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <div className='input-md'>
                            <Select
                                options={options1}
                                onChange={handleSelectChange}
                                value={selected}
                            />
                        </div>
                    </Layout.Section> 
                </Layout>
            </div>
            {selected === 'Random' ? (
                <div className='mb-3'>
                    <Layout>
                        <Layout.Section secondary>
                            <TextStyle variation='strong'>Number of Live Order to show</TextStyle>
                        </Layout.Section>
                        <Layout.Section>
                            <div className='input-sm'>
                                <TextField type='number' value= {value} onChange={handleChangeField} />
                            </div>
                        </Layout.Section> 
                    </Layout> 
                </div>)
                : ''
            }
        </div>
    )
}

export default ShowCustom
