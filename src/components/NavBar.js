

import React, { useState } from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';

import Stats from '../screens/Stats';
import Log from '../screens/Log';

const Tab = createBottomTabNavigator();

function NavBar() {
  return (

      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color}) => {
          let iconName;
          let iconColor = focused ? '#014421' : '#355E38';
          let iconSize = focused ? 40: 35;
          if (route.name === "Log"){
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          else if (route.name === 'Stats'){
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          }
          return <Ionicons name={iconName} size={iconSize} color={iconColor} style={{paddingTop: 8, paddingHorizontal: 10}}/>
        },
      })}
      >
          <Tab.Screen name="Log" component = { Log } options={{ headerShown: false, tabBarShowLabel:false }}/>
          <Tab.Screen name="Stats" component = { Stats } options={{ headerShown: false, tabBarShowLabel:false}}/>
      </Tab.Navigator>



  );
};

export default NavBar;