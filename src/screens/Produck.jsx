import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Search from '../components/Search';

const Produck = () => {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 16}}>
      <Search icon="search" placeholder={'Search produck'} />
    </SafeAreaView>
  );
};

export default Produck;

const styles = StyleSheet.create({});
