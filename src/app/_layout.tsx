import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { CafeColors } from '@/constants/cafe';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <AnimatedSplashOverlay />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: CafeColors.background },
        }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="drink/[id]" />
      </Stack>
    </>
  );
}
