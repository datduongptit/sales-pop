import React, {useCallback, useState} from 'react'
import {TextStyle, Layout, Select} from '@shopify/polaris';

const SelectOrder = () => {
    const options = [
        {label: 'Live Order', value: 'Live order'},
        {label: 'Fake Order', value: 'Fake Order'},
        {label: 'All Order', value: 'All Order'},
    ];

    const [selected, setSelected] = useState('Live Order');

    const handleSelectChange = useCallback((value) => setSelected(value), []);
    return (
        <div className='mb-3'>
          <Layout>
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Select Order</TextStyle>
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

export default SelectOrder
