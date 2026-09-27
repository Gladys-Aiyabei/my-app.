import type { TabListProps, TabTriggerSlotProps } from 'expo-router/ui';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Icon, type IconName } from './icon';

import { CafeColors } from '@/constants/cafe';

export function TabBar(props: TabListProps) {
  const insets = useSafeAreaInsets();

  return (
    <View {...props} style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      {props.children}
    </View>
  );
}

type TabButtonProps = TabTriggerSlotProps & { icon: IconName; label: string };

export function TabButton({ icon, label, isFocused, ...props }: TabButtonProps) {
  const color = isFocused ? '#FFFFFF' : CafeColors.textSecondary;

  return (
    <Pressable {...props} style={[styles.button, isFocused && styles.buttonActive]}>
      <Icon name={icon} size={20} color={color} />
      <Text style={[styles.label, { color }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: CafeColors.card,
    paddingTop: 12,
    paddingHorizontal: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    boxShadow: '0 -4px 16px rgba(59, 35, 32, 0.06)',
  },
  button: {
    width: 84,
    paddingVertical: 8,
    borderRadius: 14,
    alignItems: 'center',
    gap: 4,
  },
  buttonActive: {
    backgroundColor: CafeColors.dark,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
});
