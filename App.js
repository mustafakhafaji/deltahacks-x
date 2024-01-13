import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/components/SearchBar';
import Map from './src/components/Map'; 
import Menu from './src/components/Menu';

export default function App() {
  const [currentLocation, setCurrentLocation] = useState([]);

  // Parse location data. 
  const handleOnSearchSubmit = (data, details) => {
    const latitude = details.geometry.location.lat;
    const longitude = details.geometry.location.lng;
    setCurrentLocation([latitude, longitude]);

    console.log('Latitude:', latitude, 'Longitude:', longitude);
    // Set map location / route using lat/long.
    
    // Send distance data to menu.
  }

  return (
    <View>
      <Map />
      <SearchBar onSearchSubmit={handleOnSearchSubmit}/>
      
      {currentLocation.length !== 0 && <Menu />}
    </View>
  );
}