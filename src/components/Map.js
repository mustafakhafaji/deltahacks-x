import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GOOGLE_MAPS_API_KEY } from "../../secrets.js"
import React from 'react';
import { StyleSheet, View } from 'react-native';
import "react-native-maps-directions";
import MapViewDirections from 'react-native-maps-directions';

// Stupid shit only runs Apple Maps on MacOS.
function Map({ coordinates, locations }) {

  return (
    <>
      <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsZoomControls={true}
      initialRegion={{
        latitude: coordinates[0],
        longitude: coordinates[1],
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}/>
        <MapViewDirections
          origin={locations[0]}
          destination={locations[1]}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={4}
          strokeColor="#111111"
        />
      </>
  );
};

const styles = StyleSheet.create({
    map: {
      width: '100%',
      height: '100%',
    },
  });

export default Map;