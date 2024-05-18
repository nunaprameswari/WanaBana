import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BackgroundLoading = () => {
  return (
    <View style={styles.Bgd}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#f7d200f8"
      />
      <Image
        source={require('../assets/images/Picture_1.png')}
        style={{width: 350, height: 350}}
      />
    </View>
  );
};

export default BackgroundLoading;

const styles = StyleSheet.create({
  Bgd: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7d200f8',
  },
});
