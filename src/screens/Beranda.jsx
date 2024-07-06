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
import IconList from '../screens/IconList';
import ProductList from '../screens/ProductList';
import Rekomendation from './Rekomendation';

const Beranda = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <Slide />
      </SafeAreaView>
      <View>
        <Text style={{fontSize: 40, backgroundColor: 'white'}}>jcj</Text>
      </View>
      <IconList />
      <Rekomendation />
      <ProductList />
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
