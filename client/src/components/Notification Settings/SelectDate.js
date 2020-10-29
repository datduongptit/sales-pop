import React, {useState, useCallback} from 'react'
import {TextStyle, Layout, Select} from '@shopify/polaris';

const SelectDate = () => {
    const options = [
        {label: 'Date time', value: 'Date time'},
        {label: 'Time ago', value: 'Time ago'},
    ];

    const [selected, setSelected] = useState('Time ago');

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const optionTimes =[
        {label: '10/20/20', value: '10/20/20'},
        {label: '08/20/20', value: '08/20/20'},
        {label: '04/20/20', value: '04/20/20'},
        {label: '02/20/20', value: '02/20/20'},
        {label: '01/20/20', value: '01/20/20'}
    ]
    const [choose, choosed] = useState('10/20/20');
    const handleOptionTimes = useCallback((value) =>  choosed(value), [])

    return (
        <div className='mb-3'>
            <div className="mb-3">
                <Layout >
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Select Date Format</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <div className='input-md'>
                            <Select
                                options={options}
                                onChange={handleSelectChange}
                                value={selected}
                            />
                        </div>
                    </Layout.Section> 
                </Layout>  
            </div>
            {selected === 'Date time' ? (
                <div className="mb-3">
                    <Layout>
                        <Layout.Section secondary>
                        </Layout.Section>
                        <Layout.Section>
                            <TextStyle variation='strong'>Chose date format</TextStyle>
                            <div className="input-md">
                                <Select
                                options={optionTimes}
                                onChange={handleOptionTimes}
                                value={choose}
                                />
                            </div>
                        </Layout.Section>
                    </Layout>
                </div>
            ) : ''}
            
        </div>
    )
}

export default SelectDate
