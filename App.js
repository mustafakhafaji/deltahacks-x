import React, { useState } from 'react';
import Home from './src/screens/Home';
import Log from './src/screens/Log';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from './src/components/NavBar';
const Stack = createNativeStackNavigator();

function Nav(){
  return (
    <NavBar/>

  )
}

export default function App() {
  return(

    //create 2 routes to Home and Log, 
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/> 
          <Stack.Screen name="Log" component={Nav} options={{ headerShown: false }}/> 

      </Stack.Navigator>
    </NavigationContainer>

 
  );
}

