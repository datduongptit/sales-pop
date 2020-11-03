import React, {useState, useCallback} from 'react';
import {Tabs, Card} from '@shopify/polaris';
import NotificationSettings from './NotificationSettings';
import ManualSale from './ManualSale';
import RealtimeSettings from './RealtimeSettings';

const Views = () => {
    const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'all-customers',
      content: 'Notification Settings',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content',
      component: <NotificationSettings />
    },
    {
      id: 'accepts-marketing',
      content: 'Manual Sale',
      panelID: 'accepts-marketing-content',
      component: <ManualSale />
    },
    {
      id: 'repeat-customers',
      content: 'Realtime Watching Settings',
      panelID: 'repeat-customers-content',
      component: <RealtimeSettings />
    },
  ];
    return (
        <>
        <Card>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                <Card.Section>
                    <div>{tabs[selected].component}</div>
                </Card.Section>
            </Tabs>
        </Card>
        </>
    )
}

export default Views
