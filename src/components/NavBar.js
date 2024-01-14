

import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-ionicons";

import Home from '../screens/Home';
import Stats from '../screens/Stats';
import Log from '../screens/Log';


const Tab = createBottomTabNavigator();

function NavBar() {
  return (

    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName="Home"
      // screenOptions={({ route }) => {{
      //   tabBarIcon: ({ focused, size}) => {
      //     let iconName;
      //     let routeName = route.name;

      //     if (routeName === "Log"){
      //       iconName = focused ? "plus" : "plus-outline"
      //     }
      //     else if (routeName === "Stats"){
      //       iconName = focused ? "stats" : "stats-outline"
      //     }
      //     // else if (routeName === "Home"){
      //     //   iconName = focused ? "home" : "home-outline"
      //     // }
      //     return <Ionicons name={iconName} size={size} color="#014421"/>
      //   }




      // }}}
      >
          <Tab.Screen name="Home" component = { Home } options={{ headerShown: false, }}/>
          <Tab.Screen name="Log" component = { Log } options={{ headerShown: false }}/>
          <Tab.Screen name="Stats" component = { Stats } options={{ navheaderShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>



  );
}

export default NavBar;