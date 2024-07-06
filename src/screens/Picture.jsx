import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Picture = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/Pamekasan.jpg')}
        style={styles.imageU}
      />
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/images/Pamekasan(1).jpg')}
          style={styles.image1}
        />
        <Image
          source={require('../assets/images/Pamekasan(2).jpg')}
          style={styles.image2}
        />
      </View>
    </View>
  );
};

export default Picture;

const styles = StyleSheet.create({
  imageU: {
    width: 350,
    height: 350,
    marginLeft: 5,
    marginVertical: 7,
  },
  image1: {
    width: 175,
    height: 175,
    marginLeft: 5,
    marginVertical: -7,
    flexDirection: 'row',
  },
  image2: {
    width: 175,
    height: 175,
    //marginLeft: 5,
    marginVertical: -7,
  },
});
