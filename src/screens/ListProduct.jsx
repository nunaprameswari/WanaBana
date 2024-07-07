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
  return (
    <ScrollView style={{height: 450, marginVertical: 10}}>
      <FlatList
        data={ListMenuProduct}
        renderItem={({item}) => (
          <Pressable
            onPress={() => Navigation.navigate('DetailProduct', {item: item})}
            style={styles.List}>
            <Image
              source={item.image}
              style={{
                width: 165,
                height: 165,
                borderRadius: 5,
                marginLeft: -8,
                marginRight: -8,
                marginVertical: -2,
              }}
            />
            <View
              style={{
                backgroundColor: 'white',
                width: 164,
                marginLeft: -7,
                marginRight: -9,
                height: 25,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  marginLeft: 2,
                  marginVertical: 3,
                }}>
                {item.name}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: 164,
                top: -3,
                marginLeft: -7,
                marginRight: -9,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 19,
                  marginVertical: 8,
                  marginLeft: 2,
                }}>
                {item.harga}
              </Text>
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
    borderRadius: 5,
    marginVertical: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 0,
    //borderWidth: 1,
  },
});
