import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/components/SearchBar';
import Map from './src/components/Map'; 
import Menu from './src/components/Menu';

const init_location = [43.6532, 79.3832]

export default function App() {
  const [current_location, setCurrentLocation] = useState(init_location);
  const [start_location, setStartLocation] = useState(init_location);
  const [end_location, setEndLocation] = useState([0, 0]);
  

  // Parse location data. 
  const handleLocationSubmit = (data, details, location_type) => {
    const latitude = details.geometry.location.lat;
    const longitude = details.geometry.location.lng;
    setCurrentLocation([latitude, -longitude]);

    console.log('Latitude:', latitude, 'Longitude:', longitude);
    // Set map location / route using lat/long.
    
    // Send distance data to menu.
  }

  const handleDirectionsSubmit = () => {
    // just send start and destination location to map to process.
  }

  // Current location appears to be wrong?
  return (
    <View>
      <Map coordinates={current_location} key={current_location[0]+current_location[1]}/>
      <SearchBar locationSubmit={handleLocationSubmit} directionsSubmit={handleDirectionsSubmit}/>
      
      {current_location.length !== 0 && <Menu />}
    </View>
  );
}