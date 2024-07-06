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
      name: 'Strawberry',
      topping: 'Topping Cookies',
      image: require('../assets/images/Strawberry.jpg'),
      harga: 'Rp 8.000',
    },
    {
      id: '02',
      name: 'Choco Banana',
      topping: 'Topping Pisang',
      image: require('../assets/images/Choco_Banana.jpg'),
      harga: 'Rp 10.000',
    },
    {
      id: '03',
      name: 'Banana Cream',
      topping: 'Cream Keju',
      image: require('../assets/images/Banana_Cream.jpg'),
      harga: 'Rp 8.000',
    },
    {
      id: '04',
      name: 'Banana Puding',
      topping: 'Topping Puding',
      image: require('../assets/images/Banana_Puding.jpg'),
      harga: 'Rp 9.000',
    },
    {
      id: '05',
      name: 'Chocolate',
      topping: 'Coklat Susu',
      image: require('../assets/images/Chocolate.jpg'),
      harga: 'Rp 10.000',
    },
    {
      id: '06',
      name: 'Choco Peanut Banana',
      topping: 'Topping Kacang',
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
    height: 450,
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
