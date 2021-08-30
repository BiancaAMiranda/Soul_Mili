import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/pages/HomeScreen';
import Form from './src/pages/Form';
import Dicas from './src/pages/Dicas';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator initialRouteName= 'Home' 
      screenOptions={
        ({route}) => ({
          tabBarIcon: ({ color, size}) => {
            let iconName;

            switch(route.name){
              case 'Home':
                iconName = 'home'
                break;
              case 'Depósito':
                iconName = 'card'
                break;
              case 'Dicas':
                iconName = 'information'
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
        }) }
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'grey'
        }} >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Depósito' component={Form} />
        <Tab.Screen name='Dicas' component={Dicas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}