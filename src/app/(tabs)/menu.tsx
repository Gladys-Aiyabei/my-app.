import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CoffeeArt } from '@/components/cafe/coffee-art';
import { Icon } from '@/components/cafe/icon';
import { CafeColors, SerifFont } from '@/constants/cafe';
import { drinks, formatPrice } from '@/data/drinks';

export default function MenuScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingTop: insets.top + 20 }]}>
      <View style={styles.header}>
        <View>
          <Text style={styles.smallText}>Explore</Text>
          <Text style={styles.title}>Our Menu</Text>
        </View>
        <View style={styles.iconBadge}>
          <Icon name="cup" size={24} color="#FFFFFF" />
        </View>
      </View>

      <Text style={styles.description}>Find something that matches your mood.</Text>

      {drinks.map((drink) => (
        <View key={drink.id} style={styles.card}>
          <CoffeeArt variant={drink.variant} height={120} />
          <Text style={styles.drinkName}>{drink.name}</Text>
          <View style={styles.cardBottom}>
            <View>
              <Text style={styles.tagline}>{drink.tagline}</Text>
              <Text style={styles.price}>{formatPrice(drink.price)}</Text>
            </View>
            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.pressed]}
              onPress={() => router.push({ pathname: '/drink/[id]', params: { id: drink.id } })}>
              <Text style={styles.buttonText}>View</Text>
            </Pressable>
          </View>
        </View>
      ))}
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
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallText: {
    fontSize: 14,
    color: CafeColors.textSecondary,
  },
  title: {
    fontFamily: SerifFont,
    fontSize: 30,
    fontWeight: 'bold',
    color: CafeColors.text,
    marginTop: 2,
  },
  iconBadge: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: CafeColors.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 15,
    color: CafeColors.textSecondary,
    marginTop: -4,
  },
  card: {
    backgroundColor: CafeColors.card,
    borderRadius: 22,
    padding: 12,
  },
  drinkName: {
    fontFamily: SerifFont,
    fontSize: 20,
    fontWeight: 'bold',
    color: CafeColors.text,
    marginTop: 14,
    paddingHorizontal: 4,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 4,
    marginTop: 4,
  },
  tagline: {
    fontSize: 13,
    color: CafeColors.textSecondary,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CafeColors.text,
    marginTop: 12,
  },
  button: {
    backgroundColor: CafeColors.dark,
    paddingVertical: 11,
    paddingHorizontal: 22,
    borderRadius: 14,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.8,
  },
});
