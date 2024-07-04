import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Produck from '../screens/Produck';
import Beranda from '../screens/Beranda';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Beranda"
        component={Beranda}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => {
            return (
              <View>
                <Icon name="home" size={size} color={color} />
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
          tabBarIcon: ({size, color}) => {
            return (
              <View>
                <Icon name="sale" size={size} color={color} />
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
          tabBarIcon: ({size, color}) => {
            return (
              <View>
                <Icon name="account" size={size} color={color} />
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

const styles = StyleSheet.create({});
