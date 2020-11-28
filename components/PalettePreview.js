import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';

const PalettePreview = ({ paletteName, colors, onPress }) => {
  const colorsSliced = colors.slice(0, 3);

  console.log(colorsSliced);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{paletteName}</Text>
      <FlatList
        data={colorsSliced}
        keyExtractor={(_, index) => index}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={[styles.color, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  color: {
    width: 50,
    height: 50,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default PalettePreview;
