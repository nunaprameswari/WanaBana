import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const Search = ({icon, placeholder}) => {
  return (
    <View style={styles.search}>
      <Icon name="search" size={20} color="black" />
      <TextInput
        style={{
          color: 'black',
          paddingLeft: 8,
          fontSize: 16,
          paddingVertical: -10,
        }}>
        {placeholder}
      </TextInput>
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
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginTop: 45,
  },
});
