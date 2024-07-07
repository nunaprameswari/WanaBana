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
      name: 'Banana Cream',
      topping: 'Pisang Cream Keju',
      image: require('../assets/images/Banana_Cream.jpg'),
      harga: 'Rp 8.000',
      description: [
        'Banana Cream minuman ala Korea No. 1 di Indonesia,',
        'minuman pisang yang dicampur dengan full cream keju,',
        'packaging yang keninian dan sudah ada di beberapa kota termasuk Pamekasan,',
        'Jl. Pademawu, Ds. Durbuk',
      ],
      terjual: '61 terjual',
    },
    {
      id: '02',
      name: 'Banana Puding',
      topping: 'Topping Puding',
      image: require('../assets/images/Banana_Puding.jpg'),
      harga: 'Rp 9.000',
      description: [
        'Banana Puding minuman ala Korea No. 1 di Indonesia,',
        'minuman pisang yang didalamnya ada puding,',
        'packaging yang keninian dan sudah ada di beberapa kota termasuk Pamekasan,',
        'Jl. Pademawu, Ds. Durbuk',
      ],
      terjual: '50 terjual',
    },
    {
      id: '03',
      name: 'Choco Banana',
      topping: 'Topping Pisang',
      image: require('../assets/images/Choco_Banana.jpg'),
      harga: 'Rp 10.000',
      description: [
        'Choco Banana minuman ala Korea No. 1 di Indonesia,',
        'minuman pisang yang dicampur dengan coklat dan ada buah pisang di atasnya,',
        'packaging yang keninian dan sudah ada di beberapa kota termasuk Pamekasan,',
        'Jl. Pademawu, Ds. Durbuk',
      ],
      terjual: '40 terjual',
    },
    {
      id: '04',
      name: 'Choco Peanut Banana',
      topping: 'Toping Kacang',
      image: require('../assets/images/Choco_Peanut_Banana.jpg'),
      harga: 'Rp 10.000',
      description: [
        'Choco Peanut Banana minuman ala Korea No. 1 di Indonesia,',
        'minuman pisang yang dicampur dengan coklat dan',
        'ada taburan kacang di atasnya',
        'packaging yang keninian dan sudah ada di beberapa kota termasuk Pamekasan,',
        'Jl. Pademawu, Ds. Durbuk',
      ],
      terjual: '63 terjual',
    },
    {
      id: '05',
      name: 'Strawberry',
      topping: 'Toping Cookies',
      image: require('../assets/images/Strawberry.jpg'),
      harga: 'Rp 10.000',
      description: [
        'Strawberry minuman ala Korea No. 1 di Indonesia,',
        'minuman baru yang rasa strawberry dan memiliki topping cookies,',
        'packaging yang keninian dan sudah ada di beberapa kota termasuk Pamekasan,',
        'Jl. Pademawu, Ds. Durbuk',
      ],
      terjual: '10 terjual',
    },
    {
      id: '6',
      name: 'Chocolate',
      topping: 'Toping Choco Ball',
      image: require('../assets/images/Chocolate.jpg'),
      harga: 'Rp 10.000',
      description: [
        'Chocolate minuman ala Korea No. 1 di Indonesia,',
        'Minuman coklat yang di campur dengan full cream milk',
        'dan memiliki topping choco ball,',
        'packaging yang keninian dan sudah ada di beberapa kota termasuk Pamekasan,',
        'Jl. Pademawu, Ds. Durbuk',
      ],
      terjual: '8 terjual',
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
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{
                  color: 'black',
                  top: 5,
                  fontWeight: 'bold',
                }}>
                {item.name}
              </Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'black', fontWeight: 'bold', top: 7}}>
                {item.topping}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'red', top: 20, fontSize: 20}}>
                {item.harga}
              </Text>
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
    marginTop: 15,
    backgroundColor: 'white',
    height: 500,
  },
  List: {
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 4},
    //shadowOpacity: 0.5,
    //shadowRadius: 9,
    marginLeft: 3,
    marginRight: 3,
    height: 185,
    //borderRadius: 10,
    //marginVertical: 10,
    //alignItems: 'center',
    //paddingHorizontal: 8,
    //paddingVertical: 26,
    marginTop: 8,
    //borderWidth: 1,
  },
});
