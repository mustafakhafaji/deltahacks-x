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
        style={autocomplete_styles}
        placeholder="Choose starting point."
        textInputProps={{
          placeholderTextColor: '#ababab',
          returnKeyType: "search"
        }}
        query={{key: GOOGLE_MAPS_API_KEY}}
        fetchDetails={true}
        onPress={(data, details) => handleInputSubmit(data, details, "origin")}
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
        cl
      />

      <Text>To:</Text>
      <GooglePlacesAutocomplete
        style={autocomplete_styles}
        placeholder="Choose a destination..."
        textInputProps={{
          placeholderTextColor: '#ababab',
          returnKeyType: "search"
        }}
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
    top: '8%',
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
    fontSize: 15
  }
})

const autocomplete_styles = StyleSheet.create({
  textInputContainer:{
      backgroundColor: 'rgba(0,0,0,0)',
      borderTopWidth: 0,
      borderBottomWidth:0,
      zIndex:999,
      width:'90%',
  },
  textInput: {
      marginLeft: 0,
      marginRight: 0,
      height: 45,
      color: '#000000',
      fontSize: 16,
      borderWidth:1,
      zIndex:999,
    },
    predefinedPlacesDescription: {
      color: '#1faadb'
    },
    listView:{
        top:45.5,
        zIndex:10,
        position: 'absolute',
        color: 'black',
        backgroundColor:"white",
        width:'89%',
    },
    separator:{
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: 'blue',
    },
    description:{
      flexDirection:"row",
      flexWrap:"wrap",
      fontSize:14,
      maxWidth:'89%',
    }
  })

export default SearchBar;