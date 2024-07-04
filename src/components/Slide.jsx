import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
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

  const ScrollAutomatic = event => {
    const posisiScroll = event.nativeEvent.contentOffset.x;
    console.log({posisiScroll});
    const index = posisiScroll / screenWidth;
    console.log({index});

    setActived(index);
  };

  const DotPicture = () => {
    return DataPicture.map((dot, index) => {
      if (Actived === index) {
        return (
          <View
            style={{
              backgroundColor: 'black',
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
              backgroundColor: '#f7d200f8',
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
      <StatusBar hidden={false} backgroundColor={pictureItem} />
      <FlatList
        data={DataPicture}
        renderItem={pictureItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={ScrollAutomatic}
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
