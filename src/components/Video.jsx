import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const data = [
  {key: '1', text: 'Item 1'},
  {key: '2', text: 'Item 2'},
  {key: '3', text: 'Item 3'},
  {key: '4', text: 'Item 4'},
  {key: '5', text: 'Item 5'},
  // Add more items as needed
];

const Video = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 150, // Adjust width as needed
  },
  text: {
    fontSize: 20,
  },
});
