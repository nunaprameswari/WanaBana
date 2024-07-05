import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const DetailProduct = () => {
  return (
    <View style={styles.Bgd}>
      <View style={styles.BgdDetail}>
        <View style={styles.Screen}>
          <Image
            source={require('../assets/images/Banana_Milk(1).png')}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  Bgd: {
    backgroundColor: '#f7d200f8',
    flex: 1,
  },
  BgdDetail: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 240,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: 'center',
  },
  Screen: {
    //backgroundColor: 'red',
    height: 400,
    width: 400,
    position: 'absolute',
    top: -200,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});
