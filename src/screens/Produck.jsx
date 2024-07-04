import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Search from '../components/Search';

const Produck = () => {
  return (
    <View>
      <Search icon="search" placeholder={'enter produck'} />
    </View>
  );
};

export default Produck;

const styles = StyleSheet.create({});
