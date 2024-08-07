import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Slide from '../components/Slide';
import Picture from './Picture';
import ProductList from '../screens/ProductList';
import Rekomendation from './Rekomendation';

const Beranda = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <Slide />
      </SafeAreaView>
      <ProductList />
      <Picture />
      <Rekomendation />
    </ScrollView>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  BgdBeranda: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: -30,
    height: 10,
  },
});
