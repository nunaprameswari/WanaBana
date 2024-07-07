import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListProduct from './ListProduct';

const Produck = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 0,
        marginVertical: 35,
      }}>
      <View>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="white"
        />
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            color: 'black',
            //backgroundColor: 'white',
            width: 500,
            height: 40,
            paddingHorizontal: 7,
          }}>
          Wana Bana
        </Text>
      </View>
      <ListProduct />
    </SafeAreaView>
  );
};

export default Produck;

const styles = StyleSheet.create({});
