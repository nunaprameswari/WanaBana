import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const Beranda = () => {
  return (
    <View style={styles.bgd}>
      <ImageBackground
        source={require('../assets/images/Picture_1.png')}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  bgd: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
