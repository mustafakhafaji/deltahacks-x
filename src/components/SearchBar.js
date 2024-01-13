import React, { useState } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../secrets.js"
import { 
    Text,
    View,
    TextInput, 
    TouchableOpacity 
} from "react-native";
import axios from 'axios';

function SearchBar(props) {
    // Add appropriate figma design behind textbox.
    const [text, setText] = useState('');
    const [predictions, setPredictions] = useState([]);

    const handleInputChange = async (text) => {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=${GOOGLE_MAPS_API_KEY}`);
            setPredictions(response.data.predictions);
            setText(text);

          } catch (error) {
            console.error('Error fetching predictions:', error);
          }
    }

    const handleInputSubmit = () => {
        props.onSearchSubmit(text);
    }

    return (
        <View 
        style={{ padding: 20, position: 'absolute', top: 25, left: 15 }}>
            <TextInput
            style={{ height: 40, width: 200, backgroundColor: 'rgb(235, 235, 235)'}}
            onChangeText={(text) => {handleInputChange(text)}}
            onSubmitEditing={handleInputSubmit}>
            </TextInput>

            <TouchableOpacity onPress={handleInputSubmit}>
                <Text backgroundColor="111111">Search</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SearchBar;