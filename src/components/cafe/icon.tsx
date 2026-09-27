import { SymbolView, type SymbolViewProps } from 'expo-symbols';

const icons = {
  cup: { ios: 'cup.and.saucer', android: 'coffee', web: 'coffee' },
  home: { ios: 'house', android: 'home', web: 'home' },
  menu: { ios: 'line.3.horizontal', android: 'menu', web: 'menu' },
  profile: { ios: 'person', android: 'person', web: 'person' },
  arrow: { ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' },
  back: { ios: 'chevron.left', android: 'chevron_left', web: 'chevron_left' },
  star: { ios: 'star.fill', android: 'star', web: 'star' },
  starOutline: { ios: 'star', android: 'star_outline', web: 'star_outline' },
  location: { ios: 'mappin.and.ellipse', android: 'location_on', web: 'location_on' },
  clock: { ios: 'clock', android: 'schedule', web: 'schedule' },
  heart: { ios: 'heart.fill', android: 'favorite', web: 'favorite' },
} satisfies Record<string, SymbolViewProps['name']>;

export type IconName = keyof typeof icons;

export function Icon({ name, size = 20, color }: { name: IconName; size?: number; color: string }) {
  return <SymbolView name={icons[name]} size={size} tintColor={color} />;
}
