import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailProduct = () => {
  return (
    <View style={styles.Bgd}>
      <View style={styles.BgdDetail}></View>
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
  },
});
