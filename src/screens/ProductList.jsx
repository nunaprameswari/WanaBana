import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const ListMenuProduct = [
  {
    id: '01',
    name: 'Banana Milk',
    image: require('../assets/images/Banana_Milk.jpg'),
    harga: 'Rp 8.000',
    description: [
      'Banana Milk minuman ala Korea No. 1 di Indonesia,',
      'minuman pisang yang dicampur dengan full cream milk,',
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
    description: [
      'Banana Cheese minuman ala Korea No. 1 di Indonesia,',
      'minuman pisang yang dicampur dengan full cream milk,',
      'dan ada baluran keju di atasnya,',
      'packaging yang keninian dan sudah ada di beberapa kota termasuk Pamekasan,',
      'Jl. Pademawu, Ds. Durbuk',
    ],
    terjual: '33 terjual',
  },
  {
    id: '03',
    name: 'Banana Cream',
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
    id: '04',
    name: 'Banana Puding',
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
    id: '05',
    name: 'Choco Banana',
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
    id: '06',
    name: 'Choco Peanut Banana',
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
    id: '07',
    name: 'Strawberry',
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
    id: '08',
    name: 'Vanilla',
    image: require('../assets/images/Vanilla.jpg'),
    harga: 'Rp 10.000',
    description: [
      'Vanilla minuman ala Korea No. 1 di Indonesia,',
      'Minuman Vanilla ini ada laburan selainya dan memiliki toping oreo,',
      'packaging yang keninian dan sudah ada di beberapa kota termasuk Pamekasan,',
      'Jl. Pademawu, Ds. Durbuk',
    ],
    terjual: '9 terjual',
  },
  {
    id: '09',
    name: 'Rock Melon',
    image: require('../assets/images/Rock_Melon.jpg'),
    harga: 'Rp 10.000',
    description: [
      'Rock Melon minuman ala Korea No. 1 di Indonesia,',
      'Miuman ini memiliki rasa melon dan di dalamnya ada toping nata de coco,',
      'packaging yang keninian dan sudah ada di beberapa kota termasuk Pamekasan,',
      'Jl. Pademawu, Ds. Durbuk',
    ],
    terjual: '6 terjual',
  },
  {
    id: '10',
    name: 'Chocolate',
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

const ProductList = () => {
  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 25,
            color: '#c40404',
            fontWeight: 'bold',
            paddingVertical: 10,
            marginLeft: 6,
          }}>
          PRODUK
        </Text>
        <TouchableOpacity onPress={() => Navigation.navigate('Produck')}>
          <Text
            style={{
              fontSize: 15,
              color: '#201e1e70',
              paddingVertical: 15,
              marginLeft: 185,
              //marginRight: 5,
              fontStyle: 'italic',
            }}>
            Lihat Semua
          </Text>
        </TouchableOpacity>
        <Icon
          name={'chevron-right'}
          size={20}
          color="#201e1e70"
          style={styles.icon}
        />
      </View>
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
                //borderRadius: 35,
                //marginHorizontal: 7,
                //top: -5,
              }}
            />
            <Text
              style={{
                color: 'black',
                flexDirection: 'row',
                paddingVertical: 5,
                marginLeft: 3,
              }}>
              {item.name}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Text
                style={{color: 'red', fontSize: 20, top: -5, marginLeft: 3}}>
                {item.harga}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Text
                style={{color: 'black', fontSize: 12, top: -5, marginLeft: 50}}>
                {item.terjual}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 0,
    backgroundColor: '#fff',
  },
  List: {
    borderWidth: 1,
    marginLeft: 6,
    borderColor: '#201e1e70',
  },
  icon: {
    //paddingHorizontal: 8,
    paddingVertical: 12,
    marginLeft: 5,
    //marginHorizontal: 70,
    //top: -370,
  },
});
