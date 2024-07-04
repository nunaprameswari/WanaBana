import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const Search = ({icon, placeholder}) => {
  return (
    <View style={styles.search}>
      <Text style={{color: 'black'}}>search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
  },
});
