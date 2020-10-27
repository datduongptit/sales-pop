import React from 'react'
import {Button, Layout, Icon, Form} from '@shopify/polaris';
import {
    QuestionMarkMajor
  } from '@shopify/polaris-icons';
const NotifyFooter = () => {
    return (
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
                    <Button size='large' primary>Save</Button>
                </Layout.Section> 
            </Layout>
        </div>
    )
}

export default NotifyFooter
