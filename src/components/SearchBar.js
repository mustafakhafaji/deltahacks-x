import React, { useState } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../secrets.js"
import { 
    View,
} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function SearchBar(props) {
    const handleInputSubmit = (data, details) => {
        props.onSearchSubmit(data, details);
    }

    return (
        <View 
        style={{ padding: 20, position: 'absolute', top: 25, left: 15 }}>
            <GooglePlacesAutocomplete
                placeholder="Type a place"
                query={{key: GOOGLE_MAPS_API_KEY}}
                fetchDetails={true}
                onPress={handleInputSubmit}
                onFail={error => console.log(error)}
                onNotFound={() => console.log('no results')}

                styles={{
                    container: {
                      // Adjust the container size as needed
                      width: '80%', // Example: 80% of the parent container width
                      marginTop: 10, // Optional: Add margin top for spacing
                    },
                    textInputContainer: {
                      // Adjust the input container size
                      backgroundColor: 'rgba(0,0,0,0)',
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                    },
                    textInput: {
                      // Adjust the input box size
                      marginLeft: 0,
                      marginRight: 0,
                      height: 40,
                      color: '#5d5d5d',
                      fontSize: 16,
                    },
                    predefinedPlacesDescription: {
                      // Adjust the predefined places description text size
                      color: '#1faadb',
                    },
                  }}
            />
        </View>
    )
}

export default SearchBar;