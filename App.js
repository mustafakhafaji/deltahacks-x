import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/components/SearchBar';
import Map from './src/components/Map'; 
import Menu from './src/components/Menu';
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

