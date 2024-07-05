import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ListProduct = () => {
  const Navigation = useNavigation();

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
          <Pressable
            onPress={() => Navigation.navigate('DetailProduct')}
            style={styles.List}>
            <Image
              source={item.image}
              style={{
                width: 150,
                height: 150,
                resizeMode: 'center',
                borderRadius: 15,
              }}
            />
            <Text style={{color: 'black'}}>{item.name}</Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Text style={{color: 'black'}}>{item.harga}</Text>
            </View>
          </Pressable>
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
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 7,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 26,
    marginTop: 8,
  },
});
