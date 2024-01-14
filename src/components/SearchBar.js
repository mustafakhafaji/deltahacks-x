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
        style={{  position: 'absolute', top: '10%', width: '90%',
                  backgroundColor: 'white', shadowColor: 'black',
                  shadowOffset: {width: 2, height: 2}, shadowOpacity: 0.5,
                  shadowRadius: 4, elevation: 4, padding: 8, borderRadius: 8,}}>
            <Text>From:</Text>
            <TextInput
            style={{borderColor: '#888', borderWidth: 1, padding: 13, borderRadius: 8}}
            onChangeText={(text) => {test()}}
            onSubmitEditing={props.onSearchSubmit}>
            </TextInput>

            <Text>To:</Text>
            <TextInput
            style={{borderColor: '#888', borderWidth: 1, padding: 13, borderRadius: 8}}
            onChangeText={(text) => {test()}}
            onSubmitEditing={props.onSearchSubmit}>
            </TextInput>

            <TouchableOpacity style={{backgroundColor: '#284',paddingVertical:12,marginTop: 16, borderRadius: 4}} onPress={props.onSearchSubmit}>
                <Text style={{textAlign: 'center',color: 'white', fontWeight: 'bold', fontSize: '15px'}}>Directions</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SearchBar;