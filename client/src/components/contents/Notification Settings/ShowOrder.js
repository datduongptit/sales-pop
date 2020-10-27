import React, {useState, useCallback} from 'react'
import {TextStyle, Layout, Checkbox} from '@shopify/polaris';

const ShowOrder = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = useCallback((newChecked) => setChecked(newChecked), []);

    return (
        <div className='mb-3'>
            <Layout>
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Show Order Notifications</TextStyle>
                </Layout.Section>
                <Layout.Section>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                    />
                </Layout.Section> 
            </Layout>
        </div>
    )
}

export default ShowOrder
