import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/components/SearchBar';
import Map from './src/components/Map'; 
import Menu from './src/components/Menu';

export default function App() {
  const [current_location, setCurrentLocation] = useState([43.6532, 79.3832]);

  // Parse location data. 
  const handleOnSearchSubmit = (data, details) => {
    const latitude = details.geometry.location.lat;
    const longitude = details.geometry.location.lng;
    setCurrentLocation([latitude, -longitude]);

    console.log('Latitude:', latitude, 'Longitude:', longitude);
    // Set map location / route using lat/long.
    
    // Send distance data to menu.
  }

  // Current location appears to be wrong?
  return (
    <View>
      <Map coordinates={current_location} key={current_location[0]+current_location[1]}/>
      <SearchBar onSearchSubmit={handleOnSearchSubmit}/>
      
      {current_location.length !== 0 && <Menu />}
    </View>
  );
}