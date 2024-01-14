import React, { useState } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../secrets.js"
import { 
    Text,
    View,
    TextInput, 
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function SearchBar(props) {
  const handleInputSubmit = (data, details, location) => {
    props.coordinateSubmit(data, details, location);
  }

  const handleDirectionsSubmit = () => {
    props.directionsSubmit();
  }

  return (
    <View
    style={styles.view}>
      <Text>From:</Text>
      <GooglePlacesAutocomplete
        style={styles.textInput}
        placeholder="Type a place"
        query={{key: GOOGLE_MAPS_API_KEY}}
        fetchDetails={true}
        onPress={(data, details) => handleInputSubmit(data, details, "origin")}
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
        cl
      />

      <Text>To:</Text>
      <GooglePlacesAutocomplete
        style={styles.textInput}
        placeholder="Type a place"
        query={{key: GOOGLE_MAPS_API_KEY}}
        fetchDetails={true}
        onPress={(data, details) => handleInputSubmit(data, details, "destination")}
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
      />

      <TouchableOpacity style={styles.directionsButton} onPress={handleDirectionsSubmit}>
          <Text style={styles.directionsText}>Directions</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: '10%',
    width: '90%',
    left: '5%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8
  },

  textInput: {
    borderColor: '#888',
    borderWidth: 1,
    padding: 13,
    borderRadius: 8
  },

  directionsButton: {
    backgroundColor: '#284',
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4
  },

  directionsText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '15px'
  }
})

export default SearchBar;