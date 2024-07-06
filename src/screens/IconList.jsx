import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '../components/Icon';

const Data = [
  {id: 1, label: 'Pusla dan Tagihan'},
  {id: 2, label: 'Bank'},
  {id: 3, label: 'Gofood'},
  {id: 4, label: 'Go Pay'},
  {id: 5, label: 'Kambing'},
];

const IconList = () => {
  return (
    <View style={styles.BgdBeranda}>
      <FlatList
        data={Data}
        numColumns={4}
        renderItem={({item}) => <Icon label={item.label} />}
      />
    </View>
  );
};

export default IconList;

const styles = StyleSheet.create({
  BgdBeranda: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 0,
    height: 180,
  },
});
