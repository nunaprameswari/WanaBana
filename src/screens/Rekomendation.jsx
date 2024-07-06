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

const Rekomendation = ({route}) => {
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
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          color: '#c40404',
          fontWeight: 'bold',
          paddingVertical: 10,
          marginLeft: 100,
        }}>
        Produk Terlaris
      </Text>
      <FlatList
        data={ListMenuProduct}
        renderItem={({item}) => (
          <Pressable
            onPress={() => Navigation.navigate('DetailProduct', {item: item})}
            style={styles.List}>
            <Image
              source={item.image}
              style={{
                width: 110,
                height: 110,
                //resizeMode: 'center',
                //borderRadius: 15,
              }}
            />
            <Text style={{color: 'black'}}>{item.name}</Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Text style={{color: 'black'}}>{item.harga}</Text>
            </View>
          </Pressable>
        )}
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'center'}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Rekomendation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
    height: 380,
  },
  List: {
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 4},
    //shadowOpacity: 0.5,
    //shadowRadius: 9,
    marginLeft: 3,
    marginRight: 3,
    //borderRadius: 10,
    //marginVertical: 10,
    //alignItems: 'center',
    //paddingHorizontal: 8,
    //paddingVertical: 26,
    marginTop: 8,
    borderWidth: 1,
  },
});