import React, {useCallback, useState} from 'react'
import {TextStyle, Layout, TextField} from '@shopify/polaris';

const CustomsText = () => {
    const [value, setValue] = useState('');

    const handleChangeField = useCallback((newValue) => setValue(newValue), []);
    return (
        <div className='mb-3'>
           <Layout>
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Custom Text</TextStyle>
                </Layout.Section>
                <Layout.Section>
                        <TextField type='text' value= {value} onChange={handleChangeField}/>
                        <p className='note-text p-0'>
                        If you want to show the customer's name, lets put "%name" you in the text box. Do the same with the customer's city.
                        Or instead of show the customer's name you can replace "%name" with "Someone". And "%city" it works with city.
                        Example: Someone in Ha Noi, Viet Nam purchased
                        </p>
                </Layout.Section> 
            </Layout> 
        </div>
    )
}

export default CustomsText
