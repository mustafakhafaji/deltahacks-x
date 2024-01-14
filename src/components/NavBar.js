

import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-ionicons";

import Stats from '../screens/Stats';
import Log from '../screens/Log';

const Tab = createBottomTabNavigator();

function NavBar() {
  return (

      <Tab.Navigator>
          <Tab.Screen name="Log" component = { Log } options={{ headerShown: false }}/>
          <Tab.Screen name="Stats" component = { Stats } options={{ headerShown: false }}/>
      </Tab.Navigator>



  );
}

export default NavBar;