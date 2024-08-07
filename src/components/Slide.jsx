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
  const ListRef = useRef();

  const screenWidth = Dimensions.get('window').width;

  const [Actived, setActived] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (Actived === DataPicture.length - 1) {
        ListRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        ListRef.current.scrollToIndex({
          index: Actived + 1,
          animation: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const LayoutGambar = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

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
          style={{height: 250, width: screenWidth}}
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
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <FlatList
        data={DataPicture}
        ref={ListRef}
        getItemLayout={LayoutGambar}
        renderItem={pictureItem}
        keyExtractor={item => item.id}
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
