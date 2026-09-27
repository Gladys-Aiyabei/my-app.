import { router, useLocalSearchParams } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CoffeeArt } from '@/components/cafe/coffee-art';
import { Icon } from '@/components/cafe/icon';
import { CafeColors, SerifFont } from '@/constants/cafe';
import { formatPrice, getDrink } from '@/data/drinks';

export default function DrinkScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const drink = getDrink(id);

  function goBack() {
    if (router.canGoBack()) router.back();
    else router.replace('/');
  }

  if (!drink) {
    return (
      <View style={[styles.container, styles.notFound]}>
        <Text style={styles.name}>Drink not found</Text>
        <Pressable style={styles.orderButton} onPress={goBack}>
          <Text style={styles.orderText}>Back to menu</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[styles.content, { paddingTop: insets.top + 12 }]}>
        <Pressable style={styles.backRow} onPress={goBack} hitSlop={8}>
          <View style={styles.backCircle}>
            <Icon name="back" size={16} color={CafeColors.text} />
          </View>
          <Text style={styles.backText}>Back</Text>
        </Pressable>

        <CoffeeArt variant={drink.variant} height={260} style={styles.art} />

        <Text style={styles.label}>SIGNATURE DRINK</Text>
        <View style={styles.titleRow}>
          <Text style={styles.name}>{drink.name}</Text>
          <View style={styles.rating}>
            <Icon name="star" size={13} color={CafeColors.accent} />
            <Text style={styles.ratingText}>{drink.rating.toFixed(1)}</Text>
          </View>
        </View>

        <Text style={styles.description}>{drink.description}</Text>

        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.chips}>
          {drink.ingredients.map((ingredient) => (
            <View key={ingredient} style={styles.chip}>
              <View style={styles.chipDot} />
              <Text style={styles.chipText}>{ingredient}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>{formatPrice(drink.price)}</Text>
        </View>
        <Pressable
          style={({ pressed }) => [styles.orderButton, pressed && styles.pressed]}
          onPress={() => Alert.alert('Order placed', `Your ${drink.name} is on its way! ☕`)}>
          <Text style={styles.orderText}>Order Now</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CafeColors.background,
  },
  notFound: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'flex-start',
  },
  backCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: CafeColors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontSize: 15,
    fontWeight: '600',
    color: CafeColors.text,
  },
  art: {
    borderRadius: 24,
    marginTop: 18,
  },
  label: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: CafeColors.accent,
    marginTop: 22,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  name: {
    fontFamily: SerifFont,
    fontSize: 28,
    fontWeight: 'bold',
    color: CafeColors.text,
    flexShrink: 1,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: CafeColors.card,
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: CafeColors.text,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: CafeColors.textSecondary,
    marginTop: 12,
  },
  sectionTitle: {
    fontFamily: SerifFont,
    fontSize: 19,
    fontWeight: 'bold',
    color: CafeColors.text,
    marginTop: 24,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: CafeColors.border,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  chipDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: CafeColors.accent,
  },
  chipText: {
    fontSize: 13,
    color: CafeColors.text,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    backgroundColor: CafeColors.card,
    paddingTop: 16,
    paddingHorizontal: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    boxShadow: '0 -4px 16px rgba(59, 35, 32, 0.06)',
  },
  priceLabel: {
    fontSize: 12,
    color: CafeColors.textSecondary,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: CafeColors.text,
    marginTop: 2,
  },
  orderButton: {
    flex: 1,
    backgroundColor: CafeColors.dark,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  orderText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.8,
  },
});
