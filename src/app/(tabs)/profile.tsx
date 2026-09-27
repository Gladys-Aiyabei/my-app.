import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Icon, type IconName } from '@/components/cafe/icon';
import { CafeColors, SerifFont } from '@/constants/cafe';

const details: { icon: IconName; label: string; value: string }[] = [
  { icon: 'location', label: 'Location', value: 'Eldoret, Kenya' },
  { icon: 'clock', label: 'Opening Hours', value: '7:00 AM – 9:00 PM' },
  { icon: 'starOutline', label: 'Rating', value: '4.8 / 5.0' },
];

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingTop: insets.top + 20 }]}>
      <Text style={styles.title}>Café Profile</Text>

      <View style={styles.hero}>
        <View style={styles.heroIcon}>
          <Icon name="cup" size={28} color="#FFFFFF" />
        </View>
        <Text style={styles.heroTitle}>MOOD CAFÉ</Text>
        <Text style={styles.heroSubtitle}>Coffee made for your mood.</Text>
      </View>

      <View style={styles.infoCard}>
        {details.map((item, index) => (
          <View
            key={item.label}
            style={[styles.infoRow, index < details.length - 1 && styles.infoRowDivider]}>
            <View style={styles.infoIcon}>
              <Icon name={item.icon} size={18} color={CafeColors.accent} />
            </View>
            <View>
              <Text style={styles.infoLabel}>{item.label}</Text>
              <Text style={styles.infoValue}>{item.value}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Our Story</Text>
      <Text style={styles.story}>
        Mood Café is a fictional coffee space created around one simple idea — every mood
        deserves a good cup of coffee.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CafeColors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  title: {
    fontFamily: SerifFont,
    fontSize: 30,
    fontWeight: 'bold',
    color: CafeColors.text,
  },
  hero: {
    backgroundColor: CafeColors.dark,
    borderRadius: 22,
    paddingVertical: 28,
    alignItems: 'center',
    marginTop: 18,
  },
  heroIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: CafeColors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    fontFamily: SerifFont,
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#FFFFFF',
    marginTop: 18,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#E6D9CF',
    marginTop: 8,
  },
  infoCard: {
    backgroundColor: CafeColors.card,
    borderRadius: 22,
    paddingHorizontal: 18,
    marginTop: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 16,
  },
  infoRowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: CafeColors.border,
  },
  infoIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: CafeColors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoLabel: {
    fontSize: 12,
    color: CafeColors.textSecondary,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: CafeColors.text,
    marginTop: 2,
  },
  sectionTitle: {
    fontFamily: SerifFont,
    fontSize: 20,
    fontWeight: 'bold',
    color: CafeColors.text,
    marginTop: 26,
  },
  story: {
    fontSize: 14,
    lineHeight: 22,
    color: CafeColors.textSecondary,
    marginTop: 8,
  },
});
