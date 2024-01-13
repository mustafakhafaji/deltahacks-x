import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/components/SearchBar';
import Map from './src/components/Map'; 

export default function App() {
  const [predictions, setCurrentPrediction] = useState([]);

  const handleOnSearchSubmit = (data) => {
    console.log(data);
    setCurrentPrediction(data);
    // Send longitude and latitude to map
  }

  return (
    <View style={styles.container}>      
      <Map />
      <SearchBar onSearchSubmit={handleOnSearchSubmit}/>
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
