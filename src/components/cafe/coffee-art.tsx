import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { Icon } from './icon';

import type { CoffeeVariant } from '@/data/drinks';

const palettes: Record<
  CoffeeVariant,
  { background: string; coffee: string; crema: string; art: string }
> = {
  latte: { background: '#6B4A3A', coffee: '#9A6039', crema: '#D39E6C', art: '#F6EBDD' },
  cappuccino: { background: '#A8683F', coffee: '#8A5634', crema: '#EEDFCB', art: '#B98A62' },
  mocha: { background: '#4A2F28', coffee: '#4E2F25', crema: '#B77E57', art: '#F3E4D4' },
  matcha: { background: '#E7E0D2', coffee: '#6F9A4E', crema: '#A7C97F', art: '#F3F7EA' },
};

// Positions of the coffee beans scattered around the cup, as fractions of the art size.
const beans = [
  { left: 0.08, top: 0.12, rotate: '-30deg' },
  { left: 0.06, top: 0.62, rotate: '20deg' },
  { left: 0.22, top: 0.86, rotate: '-15deg' },
  { left: 0.86, top: 0.08, rotate: '35deg' },
  { left: 0.9, top: 0.8, rotate: '-40deg' },
];

type Props = {
  variant: CoffeeVariant;
  height: number;
  width?: number;
  showBeans?: boolean;
  style?: StyleProp<ViewStyle>;
};

/** A top-down illustration of a coffee cup on a saucer, drawn with plain Views. */
export function CoffeeArt({ variant, height, width, showBeans = true, style }: Props) {
  const colors = palettes[variant];
  const saucer = height * 0.92;
  const cup = saucer * 0.74;
  const coffee = cup * 0.74;
  const crema = coffee * 0.62;
  const handleWidth = saucer * 0.22;
  const handleHeight = saucer * 0.11;

  return (
    <View
      style={[
        styles.container,
        { height, width: width ?? '100%', backgroundColor: colors.background },
        style,
      ]}>
      {showBeans &&
        beans.map((bean, index) => (
          <View
            key={index}
            style={[
              styles.bean,
              {
                left: `${bean.left * 100}%`,
                top: `${bean.top * 100}%`,
                transform: [{ rotate: bean.rotate }],
              },
            ]}>
            <View style={styles.beanLine} />
          </View>
        ))}

      <View style={[styles.circle, { width: saucer, height: saucer, backgroundColor: '#E9DED3' }]}>
        <View
          style={[
            styles.handle,
            {
              width: handleWidth,
              height: handleHeight,
              borderRadius: handleHeight / 2,
              left: saucer / 2 + cup / 2 - handleWidth * 0.3,
              top: saucer / 2 - handleHeight / 2,
            },
          ]}
        />
        <View style={[styles.circle, { width: cup, height: cup, backgroundColor: '#F8F2EA' }]}>
          <View
            style={[
              styles.circle,
              {
                width: coffee,
                height: coffee,
                backgroundColor: colors.coffee,
                borderWidth: coffee * 0.04,
                borderColor: '#5A3526',
              },
            ]}>
            <View
              style={[styles.circle, { width: crema, height: crema, backgroundColor: colors.crema }]}>
              {variant === 'cappuccino' ? (
                <View style={styles.dots}>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <View
                      key={index}
                      style={[
                        styles.dot,
                        { backgroundColor: colors.art, margin: crema * 0.04 },
                      ]}
                    />
                  ))}
                </View>
              ) : (
                <Icon name="heart" size={crema * 0.6} color={colors.art} />
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  handle: {
    position: 'absolute',
    backgroundColor: '#F8F2EA',
  },
  bean: {
    position: 'absolute',
    width: 20,
    height: 13,
    borderRadius: 10,
    backgroundColor: '#2E1B16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  beanLine: {
    width: 12,
    height: 1.5,
    borderRadius: 1,
    backgroundColor: '#6B4A3A',
  },
  dots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '60%',
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
  },
});
