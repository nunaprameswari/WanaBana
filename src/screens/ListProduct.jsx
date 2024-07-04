import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const ListProduct = () => {
  const ListMenuProduct = [
    {
      id: '01',
      name: 'Banana Milk',
      image: require('../assets/images/Banana_Milk.jpg'),
      harga: 'Rp 8.000',
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
  return (
    <ScrollView>
      <FlatList
        data={ListMenuProduct}
        renderItem={({item}) => (
          <View style={styles.List}>
            <Image
              source={item.image}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'center',
                borderRadius: 15,
                paddingHorizontal: 80,
              }}
            />
            <Text style={{color: 'black'}}>{item.name}</Text>
            <View>
              <Text style={{color: 'black', flexDirection: 'row'}}>
                {item.harga}
              </Text>
            </View>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'center'}}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  List: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 7,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 38,
    paddingVertical: 26,
  },
});
