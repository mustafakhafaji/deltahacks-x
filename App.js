import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import SearchBar from './src/components/SearchBar';

export default function App() {
  const [location, setCurrentLocation] = useState('');

  const handleOnSearchSubmit = (data) => {
    console.log(data);
    setCurrentLocation(data);
  }

  return (
    <View style={styles.container}>

      <SearchBar onSearchSubmit={handleOnSearchSubmit}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
