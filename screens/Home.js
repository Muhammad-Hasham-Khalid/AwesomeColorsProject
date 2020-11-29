import React, { useState, useCallback, useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    try {
      const results = await fetch(
        'https://color-palette-api.kadikraman.now.sh/palettes',
      );

      if (results.ok) {
        const palettes = await results.json();
        setColorPalettes(palettes);
      }
    } catch (err) {
      Alert.alert('Error', "Couldn't get colors an error occured", [
        { text: 'Ok' },
      ]);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setIsRefreshing(false);
  }, [fetchColorPalettes]);

  return (
    <View>
      <FlatList
        style={styles.container}
        data={colorPalettes}
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
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
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
