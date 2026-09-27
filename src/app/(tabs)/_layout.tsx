import { TabList, TabSlot, TabTrigger, Tabs } from 'expo-router/ui';

import { TabBar, TabButton } from '@/components/cafe/tab-bar';
import { CafeColors } from '@/constants/cafe';

export default function TabLayout() {
  return (
    <Tabs style={{ flex: 1, backgroundColor: CafeColors.background }}>
      <TabSlot style={{ flex: 1 }} />
      <TabList asChild>
        <TabBar>
          <TabTrigger name="index" href="/" asChild>
            <TabButton icon="home" label="Home" />
          </TabTrigger>
          <TabTrigger name="menu" href="/menu" asChild>
            <TabButton icon="menu" label="Menu" />
          </TabTrigger>
          <TabTrigger name="profile" href="/profile" asChild>
            <TabButton icon="profile" label="Profile" />
          </TabTrigger>
        </TabBar>
      </TabList>
    </Tabs>
  );
}
