import { Platform } from 'react-native';

export const CafeColors = {
  background: '#F6F1EA',
  card: '#FFFFFF',
  dark: '#3B2320',
  text: '#2B1B17',
  textSecondary: '#6F625A',
  accent: '#A0673F',
  border: '#E8DDD2',
  muted: '#F1E9E0',
};

export const SerifFont = Platform.select({
  ios: 'Georgia',
  android: 'serif',
  default: 'Georgia, serif',
});
