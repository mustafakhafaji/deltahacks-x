import React, { useState } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../secrets.js"
import { 
    Text,
    View,
    TextInput, 
    TouchableOpacity 
} from "react-native";

function SearchBar(props) {
    // Add appropriate figma design behind textbox.

    const test = () => {
        console.log(GOOGLE_MAPS_API_KEY);
    }

    return (
        <View 
        style={{ padding: 20, position: 'absolute', top: 25, left: 15 }}>
            <TextInput
            style={{ height: 40, width: 200, backgroundColor: 'rgb(235, 235, 235)'}}
            onChangeText={(text) => {test()}}
            onSubmitEditing={props.onSearchSubmit}>
            </TextInput>

            <TouchableOpacity onPress={props.onSearchSubmit}>
                <Text backgroundColor="111111">Search</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SearchBar;