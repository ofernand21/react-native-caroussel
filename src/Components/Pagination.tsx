import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PaginationProps {
  currentIndex: number;
  total: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentIndex, total }) => (
  <View style={styles.paginationContainer}>
    {Array.from({ length: total }).map((_, index) => (
      <View
        key={index}
        style={[
          styles.paginationDot,
          { backgroundColor: currentIndex === index ? 'blue' : 'gray' },
        ]}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});

export default Pagination;
