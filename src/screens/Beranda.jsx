import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slide from '../components/Slide';
import Search from '../components/Search';

const Beranda = () => {
  return (
    <View>
      <SafeAreaView>
        <Slide />
        <Search />
      </SafeAreaView>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'fff',
    marginTop: -255,
    marginLeft: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
});
