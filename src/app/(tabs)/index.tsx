import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CoffeeArt } from '@/components/cafe/coffee-art';
import { Icon } from '@/components/cafe/icon';
import { CafeColors, SerifFont } from '@/constants/cafe';
import { drinks, formatPrice, getDrink } from '@/data/drinks';

function greeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function openDrink(id: string) {
  router.push({ pathname: '/drink/[id]', params: { id } });
}

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const todaysPick = drinks[0];
  const popular = [getDrink('mocha'), getDrink('matcha')].filter((drink) => drink !== undefined);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingTop: insets.top + 20 }]}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.smallText}>{greeting()} 👋</Text>
          <Text style={styles.title}>Mood Café</Text>
        </View>
        <View style={styles.iconBadge}>
          <Icon name="cup" size={24} color="#FFFFFF" />
        </View>
      </View>

      <Text style={styles.description}>
        Coffee made for your mood. Discover something delicious today.
      </Text>

      {/* Today's pick */}
      <View style={styles.card}>
        <View>
          <CoffeeArt variant={todaysPick.variant} height={150} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>TODAY&apos;S PICK</Text>
          </View>
        </View>

        <Text style={styles.drinkName}>{todaysPick.name}</Text>
        <Text style={styles.drinkDescription}>
          Smooth espresso, steamed milk and a touch of caramel sweetness.
        </Text>

        <View style={styles.cardBottom}>
          <Text style={styles.price}>{formatPrice(todaysPick.price)}</Text>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={() => openDrink(todaysPick.id)}>
            <Text style={styles.buttonText}>View Drink</Text>
            <Icon name="arrow" size={14} color="#FFFFFF" />
          </Pressable>
        </View>
      </View>

      {/* Popular */}
      <Text style={styles.sectionTitle}>Popular Today</Text>
      <View style={styles.popularRow}>
        {popular.map((drink) => (
          <Pressable
            key={drink.id}
            style={({ pressed }) => [styles.smallCard, pressed && styles.pressed]}
            onPress={() => openDrink(drink.id)}>
            <CoffeeArt
              variant={drink.variant}
              height={52}
              width={52}
              showBeans={false}
              style={styles.smallArt}
            />
            <View>
              <Text style={styles.smallCardTitle}>{drink.name}</Text>
              <Text style={styles.smallCardPrice}>{formatPrice(drink.price)}</Text>
            </View>
          </Pressable>
        ))}
      </View>
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
    marginTop: 14,
    marginBottom: 20,
    lineHeight: 22,
  },
  card: {
    backgroundColor: CafeColors.card,
    borderRadius: 22,
    padding: 14,
  },
  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: CafeColors.text,
  },
  drinkName: {
    fontFamily: SerifFont,
    fontSize: 22,
    fontWeight: 'bold',
    color: CafeColors.text,
    marginTop: 16,
    paddingHorizontal: 4,
  },
  drinkDescription: {
    fontSize: 14,
    color: CafeColors.textSecondary,
    lineHeight: 20,
    marginTop: 6,
    paddingHorizontal: 4,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: CafeColors.text,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: CafeColors.dark,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 14,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.8,
  },
  sectionTitle: {
    fontFamily: SerifFont,
    fontSize: 20,
    fontWeight: 'bold',
    color: CafeColors.text,
    marginTop: 28,
    marginBottom: 12,
  },
  popularRow: {
    flexDirection: 'row',
    gap: 12,
  },
  smallCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: CafeColors.card,
    borderRadius: 16,
    padding: 10,
  },
  smallArt: {
    borderRadius: 12,
  },
  smallCardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: CafeColors.text,
  },
  smallCardPrice: {
    fontSize: 13,
    fontWeight: '600',
    color: CafeColors.accent,
    marginTop: 2,
  },
});
