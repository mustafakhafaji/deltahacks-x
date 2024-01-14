import React, { useState } from 'react';
import { View } from 'react-native';
import SearchBar from '../components/SearchBar';
import Map from '../components/Map'; 
import InfoMenu from '../components/InfoMenu';
const init_coordinate = [43.6532, 79.3832]

function Log(){
  // Parse location data. 
  const [current_coordinate, setCurrentCoordinate] = useState(init_coordinate);
  const [origin_coordinate, setOriginCoordinate] = useState(init_coordinate);
  const [destination_coordinate, setDestinationCoordinates] = useState([0, 0]);
  const [directions_coordinates, setDirectionsCoordinates] = useState({origin: [0, 0], destination: [0, 0]});
  
  const [menu_active, setMenuActive] = useState(false);
  const [distance, setDistance] = useState(0);

  function setRouteData(data) {
    setDistance(data.distance);
    setMenuActive(true);
    // init menu
  }

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
    setDirectionsCoordinates({origin: [origin_coordinate[0], origin_coordinate[1]], destination: [destination_coordinate[0], destination_coordinate[1]]});
    // just send start and destination coordinate to map to process.
  }

  // Current coordinate appears to be wrong?
  return (
    <View 
    style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
      <Map coordinates={current_coordinate} directions={directions_coordinates} setRouteData={setRouteData} key={current_coordinate[0]+current_coordinate[1]}/>
      <SearchBar coordinateSubmit={handleCoordinateSubmit} directionsSubmit={handleDirectionsSubmit}/>
      
      {menu_active == true && <InfoMenu setMenuActive={setMenuActive} distance={distance} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 10, zIndex: 2 }} />}
    </View>
  );
}


export default Log;