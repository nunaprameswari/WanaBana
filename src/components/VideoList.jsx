import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ListMenuProduct = [
  {
    id: '01',
    name: 'Banana Milk',
    image: require('../assets/images/Banana_Milk.jpg'),
    harga: 'Rp 8.000',
    description: [
      'Banana Milk minuman ala Korea No. 1 di Indonesia,',
      'minuman pisang yang dicampur dengan toping puding yang lembut,',
      'packaging yang keninian dan sudah ada di beberapa kota termasuk Pamekasan,',
      'Jl. Pademawu, Ds. Durbuk',
    ],
  },
  {
    id: '02',
    name: 'Banana Cheese',
    image: require('../assets/images/Banana_Cheese.jpg'),
    harga: 'Rp 10.000',
  },
  {
    id: '03',
    name: 'Banana Cream',
    image: require('../assets/images/Banana_Cream.jpg'),
    harga: 'Rp 8.000',
  },
  {
    id: '04',
    name: 'Banana Puding',
    image: require('../assets/images/Banana_Puding.jpg'),
    harga: 'Rp 9.000',
    description:
      'Banana Puding minuman ala Korea No. 1 di Indonesia, minuman pisang yang dicampur dengan toping puding yang lembut, packaging yang keninian dan sudah ada di beberapa kota termasuk Pamekasan, Jl. Pademawu, Ds. Durbuk',
  },
  {
    id: '05',
    name: 'Choco Banana',
    image: require('../assets/images/Choco_Banana.jpg'),
    harga: 'Rp 10.000',
  },
  {
    id: '06',
    name: 'Choco Peanut Banana',
    image: require('../assets/images/Choco_Peanut_Banana.jpg'),
    harga: 'Rp 10.000',
  },
];

const VideoList = () => {
  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={ListMenuProduct}
        renderItem={({item}) => (
          <Pressable
            onPress={() => Navigation.navigate('DetailProduct', {item: item})}
            style={styles.List}>
            <Image
              source={item.image}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'center',
                borderRadius: 35,
                marginHorizontal: 7,
              }}
            />
            <Text style={{color: 'black'}}>{item.name}</Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Text style={{color: 'black'}}>{item.harga}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default VideoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 50,
    marginVertical: 18,
    marginHorizontal: 26,
    width: 10, // Adjust width as needed
  },
  text: {
    fontSize: 20,
  },
});
