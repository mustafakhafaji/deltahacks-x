import React, { useState } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../secrets.js"
import { 
    View,
} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function SearchBar(props) {
    // Add appropriate figma design behind textbox.
    const [text, setText] = useState('');
    const [predictions, setPredictions] = useState([]);

    const handleInputSubmit = () => {
        props.onSearchSubmit(predictions);
    }

    return (
        <View 
        style={{ padding: 20, position: 'absolute', top: 25, left: 15 }}>
            <GooglePlacesAutocomplete
                placeholder="Type a place"
                query={{key: GOOGLE_MAPS_API_KEY}}
                fetchDetails={true}
                onPress={(data, details = null) => console.log(data, details)}
                onFail={error => console.log(error)}
                onNotFound={() => console.log('no results')}
            />
        </View>
    )
}

export default SearchBar;