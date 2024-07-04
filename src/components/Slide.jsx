import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const Slide = () => {
  const screenWidth = Dimensions.get('window').width;
  const [Actived, setActived] = useState(0);

  const DataPicture = [
    {
      id: '01',
      image: require('../assets/images/Picture_2.jpg'),
    },
    {
      id: '02',
      image: require('../assets/images/Picture_3.jpg'),
    },
    {
      id: '03',
      image: require('../assets/images/Picture_4.jpg'),
    },
  ];

  const pictureItem = ({item, index}) => {
    return (
      <View>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{height: 200, width: screenWidth}}
        />
      </View>
    );
  };

  const DotPicture = () => {
    return DataPicture.map((dot, index) => {
      if (Actived === index) {
        return (
          <View
            style={{
              backgroundColor: 'grey',
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          />
        );
      } else {
        return (
          <View
            key={index}
            style={{
              backgroundColor: 'red',
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          />
        );
      }
    });
  };
  return (
    <View>
      <FlatList
        data={DataPicture}
        renderItem={pictureItem}
        horizontal={true}
        pagingEnabled={true}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: -20,
        }}>
        {DotPicture()}
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({});
