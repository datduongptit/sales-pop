import React, {useState, useCallback} from 'react'
import {TextStyle, Layout, Select} from '@shopify/polaris';


const SelectDevice = () => {
    const options = [
        {label: 'Desktop device', value: 'Desktop device'},
        {label: 'Mobile device', value: 'Mobile device'},
        {label: 'All device', value: 'All device'},
    ];

    const [selected, setSelected] = useState('Live Order');

    const handleSelectChange = useCallback((value) => setSelected(value), []);
    return (
        <div className='mb-3'>
          <Layout >
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Select show device</TextStyle>
                </Layout.Section>
                <Layout.Section>
                    <div style={{width:'250px'}}>
                        <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                        />
                    </div>
                </Layout.Section> 
            </Layout>  
        </div>
    )
}

export default SelectDevice
