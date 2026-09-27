export type CoffeeVariant = 'latte' | 'cappuccino' | 'mocha' | 'matcha';

export type Drink = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  rating: number;
  ingredients: string[];
  variant: CoffeeVariant;
};

export const drinks: Drink[] = [
  {
    id: 'caramel-latte',
    name: 'Caramel Latte',
    tagline: 'Smooth, creamy and sweet.',
    description:
      'A smooth espresso drink made with steamed milk and finished with a delicious caramel sweetness.',
    price: 320,
    rating: 4.8,
    ingredients: ['Espresso', 'Steamed Milk', 'Caramel'],
    variant: 'latte',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    tagline: 'Rich espresso with silky foam.',
    description:
      'A bold shot of espresso topped with an equal layer of steamed milk and airy, silky foam.',
    price: 280,
    rating: 4.7,
    ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam'],
    variant: 'cappuccino',
  },
  {
    id: 'mocha',
    name: 'Mocha',
    tagline: 'Chocolate meets espresso.',
    description:
      'Espresso blended with rich chocolate and steamed milk for a comforting, dessert-like cup.',
    price: 280,
    rating: 4.6,
    ingredients: ['Espresso', 'Chocolate', 'Steamed Milk'],
    variant: 'mocha',
  },
  {
    id: 'matcha',
    name: 'Matcha',
    tagline: 'Earthy, calm and green.',
    description:
      'Stone-ground green tea whisked smooth and poured over steamed milk for a gentle lift.',
    price: 300,
    rating: 4.5,
    ingredients: ['Matcha', 'Steamed Milk', 'Honey'],
    variant: 'matcha',
  },
];

export function getDrink(id: string | undefined) {
  return drinks.find((drink) => drink.id === id);
}

export function formatPrice(price: number) {
  return `KSh ${price}`;
}
