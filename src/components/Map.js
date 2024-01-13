import MapView from 'react-native-maps';
import React from 'react';
import { StyleSheet } from 'react-native';

// Stupid shit only runs Apple Maps on MacOS.
function MyMap() {
    return (
      <MapView
        style={styles.map}
        showsZoomControls={true}
        initialRegion={{
          latitude: 90.7749,
          longitude: -122.4194,
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

export default MyMap;