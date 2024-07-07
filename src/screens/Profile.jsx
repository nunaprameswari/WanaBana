import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <ScrollView>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="rgba(0,0,0,0)"
      />
      <Image
        source={require('../assets/images/Poster.jpg')}
        style={styles.Img}
      />
      <View>
        <Image
          source={require('../assets/images/Poster(1).jpg')}
          style={styles.ImgU}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/Poster(2).jpg')}
          style={styles.ImgP}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/images/Poster(3).jpg')}
          style={styles.ImgS}
        />
        <Image
          source={require('../assets/images/Poster(4).jpg')}
          style={styles.ImgS}
        />
        <Image
          source={require('../assets/images/Poster(5).jpg')}
          style={styles.ImgS}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/Poster(6).jpg')}
          style={styles.ImgO}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/Poster(7).jpg')}
          style={styles.ImgT}
        />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Img: {
    width: 360,
    height: 490,
    //top: 22,
  },
  ImgU: {
    width: 360,
    height: 260,
    //marginLeft: 20,
    //top: 22,
  },
  ImgP: {
    width: 360,
    height: 360,
    //marginLeft: 20,
    top: 20,
  },
  ImgS: {
    width: 120,
    height: 120,
    //marginLeft: 20,
    //top: -6,
  },
  ImgO: {
    width: 360,
    height: 480,
    //marginLeft: 20,
    top: -10,
  },
  ImgT: {
    width: 360,
    height: 280,
    //marginLeft: 20,
    //top: 5,
  },
});
