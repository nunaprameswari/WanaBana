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
    <View>
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
      <View style={styles.BgdDetail} />
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  BgdDetail: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 140,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: 'center',
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
