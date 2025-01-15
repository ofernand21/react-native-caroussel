import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Pagination from './Pagination';

const { width } = Dimensions.get('window');

interface CarouselProps {
  data: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  scrollAnimationDuration?: number;
  vertical?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  data,
  renderItem,
  autoPlay = false,
  autoPlayInterval = 3000,
  scrollAnimationDuration = 500,
  vertical = false,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const translateX = useSharedValue(0);

  const scrollStyle = useAnimatedStyle(() => ({
    transform: [
      vertical
        ? {
            translateY: withTiming(translateX.value, {
              duration: scrollAnimationDuration,
            }),
          }
        : {
            translateX: withTiming(translateX.value, {
              duration: scrollAnimationDuration,
            }),
          },
    ],
  }));

  // Auto-play Logic
  React.useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % data.length;
        translateX.value = nextIndex * width;
        setCurrentIndex(nextIndex);
      }, autoPlayInterval);
      return () => clearInterval(interval); // Nettoyage de l'intervalle
    }
    return undefined; // Retourne explicitement une valeur dans tous les cas
  }, [autoPlay, autoPlayInterval, data.length, currentIndex, translateX]);

  return (
    <View style={[styles.container, vertical && styles.vertical]}>
      <Animated.View style={[styles.scrollContainer, scrollStyle]}>
        {data.map((item, index) => (
          <View key={index} style={[styles.item, { width }]}>
            {renderItem(item, index)}
          </View>
        ))}
      </Animated.View>
      <Pagination currentIndex={currentIndex} total={data.length} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    overflow: 'hidden',
  },
  vertical: {
    flexDirection: 'column',
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Carousel;
