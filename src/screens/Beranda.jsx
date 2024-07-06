import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Slide from '../components/Slide';
import IconList from '../screens/IconList';
import Video from '../components/VideoList';
import VideoList from '../components/VideoList';

const Beranda = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <Slide />
      </SafeAreaView>
      <View>
        <Text style={{fontSize: 40, backgroundColor: 'white'}}>jcj</Text>
      </View>
      <IconList />
      <VideoList />
    </ScrollView>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  BgdBeranda: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: -30,
    height: 10,
  },
});
