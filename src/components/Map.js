import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GOOGLE_MAPS_API_KEY } from "../../secrets.js";
import MapViewDirections from 'react-native-maps-directions';
import React from 'react';
import { StyleSheet } from 'react-native';

// Stupid shit only runs Apple Maps on MacOS.
function Map({ coordinates }) {

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsZoomControls={true}
      initialRegion={{
        latitude: coordinates[0],
        longitude: -coordinates[1],
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}/>
  );
};

const styles = StyleSheet.create({
    map: {
      width: '100%',
      height: '100%',
    },
  });

export default Map;