import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';
import {
  SOLARIZED,
  RAINBOW,
  FRONTEND_MASTERS,
} from '../constants/ColorPalettes';

const Home = ({ navigation }) => {
  const COLOR_PALETTES = [
    { paletteName: 'Solarized', colors: SOLARIZED },
    { paletteName: 'Rainbow', colors: RAINBOW },
    { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  ];

  return (
    <View>
      <FlatList
        style={styles.container}
        data={COLOR_PALETTES}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item: { paletteName, colors } }) => (
          <PalettePreview
            paletteName={paletteName}
            colors={colors}
            onPress={() => {
              navigation.navigate('ColorPalette', { paletteName, colors });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default Home;
