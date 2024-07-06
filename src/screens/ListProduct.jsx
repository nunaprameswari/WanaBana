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

const ListProduct = ({route}) => {
  const Navigation = useNavigation();

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
      terjual: '36 terjual',
    },
    {
      id: '02',
      name: 'Banana Cheese',
      image: require('../assets/images/Banana_Cheese.jpg'),
      harga: 'Rp 10.000',
      terjual: '33 terjual',
    },
    {
      id: '03',
      name: 'Banana Cream',
      image: require('../assets/images/Banana_Cream.jpg'),
      harga: 'Rp 8.000',
      terjual: '61 terjual',
    },
    {
      id: '04',
      name: 'Banana Puding',
      image: require('../assets/images/Banana_Puding.jpg'),
      harga: 'Rp 9.000',
      description:
        'Banana Puding minuman ala Korea No. 1 di Indonesia, minuman pisang yang dicampur dengan toping puding yang lembut, packaging yang keninian dan sudah ada di beberapa kota termasuk Pamekasan, Jl. Pademawu, Ds. Durbuk',
      terjual: '50 terjual',
    },
    {
      id: '05',
      name: 'Choco Banana',
      image: require('../assets/images/Choco_Banana.jpg'),
      harga: 'Rp 10.000',
      terjual: '40 terjual',
    },
    {
      id: '06',
      name: 'Choco Peanut Banana',
      image: require('../assets/images/Choco_Peanut_Banana.jpg'),
      harga: 'Rp 10.000',
      terjual: '63 terjual',
    },
    {
      id: '07',
      name: 'Strawberry',
      image: require('../assets/images/Strawberry.jpg'),
      harga: 'Rp 10.000',
      terjual: '10 terjual',
    },
    {
      id: '08',
      name: 'Vanilla',
      image: require('../assets/images/Vanilla.jpg'),
      harga: 'Rp 10.000',
      terjual: '9 terjual',
    },
    {
      id: '09',
      name: 'Rock Melon',
      image: require('../assets/images/Rock_Melon.jpg'),
      harga: 'Rp 10.000',
      terjual: '6 terjual',
    },
    {
      id: '10',
      name: 'Chocolate',
      image: require('../assets/images/Chocolate.jpg'),
      harga: 'Rp 10.000',
      terjual: '8 terjual',
    },
  ];
  return (
    <ScrollView>
      <FlatList
        data={ListMenuProduct}
        renderItem={({item}) => (
          <Pressable
            onPress={() => Navigation.navigate('DetailProduct', {item: item})}
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
