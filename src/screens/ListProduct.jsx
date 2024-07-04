import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListProduct = () => {
  const DataPicture = [
    {
      id: '01',
      image: require('../assets/images/Picture_2.jpg'),
    },
    {
      id: '02',
      image: require('../assets/images/Picture_3.jpg'),
    },
    {
      id: '03',
      image: require('../assets/images/Picture_4.jpg'),
    },
  ];
  return (
    <View>
      <Text>ListProduct</Text>
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({});
