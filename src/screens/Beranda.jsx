import {StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import React from 'react';

const Image = [
  {
    id: '1',
    image: require('../assets/images/Picture_2.jpg'),
  },
  {
    id: '2',
    image: require('../assets/images/Picture_1.png'),
  },
];

const Beranda = () => {
  return (
    <View style={styles.bgd}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#f7d200f8"
      />
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
