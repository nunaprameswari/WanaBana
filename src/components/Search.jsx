import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const Search = ({icon, placeholder}) => {
  return (
    <View style={styles.search}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size={20}
        color="#f7d200f8"
        style={styles.icon}
      />
      <TextInput
        style={{
          color: '#f7d200f8',
          paddingLeft: 8,
          fontSize: 16,
          paddingVertical: -10,
          marginHorizontal: 5,
        }}>
        {placeholder}
      </TextInput>
      <FontAwesomeIcon
        icon={faCamera}
        size={20}
        color="#5853536b"
        style={styles.camera}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'white',
    flexDirection: 'row',
    //paddingVertical: 5,
    width: 250,
    marginLeft: 10,
    //borderRadius: 10,
    //paddingHorizontal: 0,
    marginVertical: -80,
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 4},
    //shadowOpacity: 0.1,
    //shadowRadius: 7,
    marginTop: 45,
    top: -215,
  },
  icon: {
    marginLeft: 10,
    marginVertical: 3,
  },
  camera: {
    marginLeft: 85,
    marginVertical: 5,
  },
});
