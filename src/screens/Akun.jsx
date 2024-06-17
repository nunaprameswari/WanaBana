import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slideshow from 'react-native-image-slider-show';

const Akun = () => {
  return (
    <Slideshow
      dataSource={[
        {url: 'http://placeimg.com/640/480/any'},
        {url: 'http://placeimg.com/640/480/any'},
        {url: 'http://placeimg.com/640/480/any'},
      ]}
    />
  );
};

export default Akun;

const styles = StyleSheet.create({});
