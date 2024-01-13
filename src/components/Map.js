import MapView, { PROVIDER_GOOGLE }from 'react-native-maps';
import React from 'react';
import { StyleSheet } from 'react-native';

function MyMap() {
    return (
      <MapView
        style={styles.map}
        //provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.7749,
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