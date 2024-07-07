import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHouseChimneyWindow,
  faBagShopping,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import Produck from '../screens/Produck';
import Beranda from '../screens/Beranda';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          //bottom: 3,
          marginHorizontal: 9,
          height: 50,
          width: 340,
          borderRadius: 10,
          shadowColor: '#585353',
        },
      }}>
      <Tabs.Screen
        name="Beranda"
        component={Beranda}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <FontAwesomeIcon
                  icon={faHouseChimneyWindow}
                  size={30}
                  color={focused ? '#f7d200f8' : 'black'}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="Produck"
        component={Produck}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.boxicon}>
                <FontAwesomeIcon
                  icon={faBagShopping}
                  size={30}
                  color={focused ? 'white' : 'black'}
                  style={{marginLeft: 10, marginVertical: 7}}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <FontAwesomeIcon
                  icon={faNewspaper}
                  size={30}
                  color={focused ? '#f7d200f8' : 'black'}
                />
              </View>
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Tab"
        component={MenuTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default App;

const styles = StyleSheet.create({
  boxicon: {
    width: 50,
    height: 50,
    backgroundColor: '#f7d200f8',
    borderRadius: 50,
    marginTop: -30,
  },
});
