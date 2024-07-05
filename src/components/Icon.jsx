import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const IconMenu = ({label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textIcon}></Text>
      </View>
      <Text style={styles.textIcon}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconMenu;

const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,
    margin: 5,
    padding: 5,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    //flex: 1,
  },
  box: {
    borderWidth: 1,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textIcon: {
    color: 'black',
    textAlign: 'center',
  },
});
