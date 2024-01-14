import React, { useState } from 'react';
import { View } from 'react-native';
import SearchBar from '../components/SearchBar';
import Map from '../components/Map'; 
import Menu from '../components/Menu';
import Stats from './Stats';

const init_coordinate = [43.6532, 79.3832]


function Log(){
  // Parse location data. 
  const [current_coordinate, setCurrentCoordinate] = useState(init_coordinate);
  const [origin_coordinate, setOriginCoordinate] = useState(init_coordinate);
  const [destination_coordinate, setDestinationCoordinates] = useState([0, 0]);
  const [directions_coordinates, setDirectionsCoordinates] = useState([origin_coordinate, destination_coordinate]);

  // Parse coordinate data. 
  const handleCoordinateSubmit = (data, details, coordinate_type) => {
    const latitude = details.geometry.location.lat;
    const longitude = -details.geometry.location.lng;
    setCurrentCoordinate([latitude, longitude]);

    switch(coordinate_type) {
      case "origin":
        setOriginCoordinate([latitude, longitude]);
        break;
      case "destination":
        setDestinationCoordinates([latitude, longitude]);
        break;
    }
  }

  const handleDirectionsSubmit = () => {
    setDirectionsCoordinates([origin_coordinate, destination_coordinate]);
    // just send start and destination coordinate to map to process.
  }

  // Current coordinate appears to be wrong?
  return (
    <View 
    style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
      <Map coordinates={current_coordinate} key={current_coordinate[0]+current_coordinate[1]}/>
      <SearchBar coordinateSubmit={handleCoordinateSubmit} directionsSubmit={handleDirectionsSubmit}/>
      
      {current_coordinate.length !== 0 && <Menu />}
    </View>
  );
}


export default Log;