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
import ListProduct from '../screens/ListProduct';

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
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 30,
            color: 'red',
            fontWeight: 'bold',
            paddingVertical: 10,
          }}>
          PRODUK
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: '#201e1e70',
              paddingVertical: 15,
              marginLeft: 150,
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
              }}
            />
            <Text style={{color: 'black', paddingVertical: 10}}>
              {item.name}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Text style={{color: 'red', fontSize: 20, top: -10}}>
                {item.harga}
              </Text>
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
    marginTop: 10,
    backgroundColor: '#fff',
  },
  List: {
    borderWidth: 1,
    marginLeft: 6,
    borderColor: 'blue',
  },
  icon: {
    //paddingHorizontal: 8,
    paddingVertical: 15,
    marginLeft: 5,
    //marginHorizontal: 70,
    //top: -370,
  },
});
