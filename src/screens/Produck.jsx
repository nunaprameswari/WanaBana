import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Search from '../components/Search';
import ListProduct from './ListProduct';

const Produck = () => {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 16}}>
      <Search icon="search" placeholder={'Search produck'} />
      <View>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
          Wana Bana
        </Text>
      </View>
      <ListProduct />
    </SafeAreaView>
  );
};

export default Produck;

const styles = StyleSheet.create({});
