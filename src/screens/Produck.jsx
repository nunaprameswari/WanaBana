import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useState} from 'react';


//const handleScroll = (event) => {};

const Beranda = () => {
  const screenWidth = Dimensions.get('window').width;
  const {activeIndex, setactiveIndex} = useState(0);
  const carouselData = [
    {
      id: '1',
      image: require('../assets/images/Picture_2.jpg'),
    },
    {
      id: '2',
      image: require('../assets/images/Picture_1.png'),
    },
  ];
  const SlideImage = ({item, index}) => {
    return (
      <View>
        <Image source={item.image} style={{height: 200, width: screenWidth}} />
      </View>
    );
  };
  const renderDotIndicators = () => {
    return (
      <View
        style={{
          backgroundColor: 'red',
          height: 10,
          width: 10,
          borderRadius: 1,
          marginHorizontal: 6,
        }}
      />
    );
  };
  return (
    <View style={styles.bgd}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#f7d200f8"
      />
      <FlatList
        data={carouselData}
        renderItem={SlideImage}
        horizontal={true}
        pagingEnabled={true}
      />
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  bgd: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
