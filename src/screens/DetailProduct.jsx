import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailProduct = ({navigation, route}) => {
  const {item} = route.params;

  console.log(item);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <Image source={item.image} style={styles.image} />
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            name={'arrow-circle-left'}
            size={28}
            color="white"
            style={styles.icon}
          />
        </Pressable>
      </SafeAreaView>
      <View style={styles.BgdDetail}>
        <Text style={{color: 'black', marginTop: 10, fontSize: 40}}>
          {item.name}
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: -200,
            marginVertical: 16,
            fontSize: 30,
          }}>
          {item.harga}
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: 180,
            marginVertical: -16,
            fontSize: 20,
          }}>
          {item.terjual}
        </Text>
        <Text style={{color: 'black', marginVertical: 30}}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  BgdDetail: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: -130,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: 370,
    height: 370,
    resizeMode: 'contain',
  },
  icon: {
    //paddingHorizontal: 8,
    paddingVertical: 39,
    marginLeft: 10,
    top: -370,
  },
});
