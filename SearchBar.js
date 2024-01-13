import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

function SearchBar() {
    const [text, updateText] = useState('');

    const handleEnter = () => {
        console.log(text);
    }

    // Add appropriate figma design behind textbox.

    return (
        <View 
        style={{ padding: 20, position: 'absolute', top: 25, left: 15 }}>
            <TextInput
            style={{ height: 40, width: 200, backgroundColor: 'rgb(235, 235, 235)'}}
            onChangeText={(text) => updateText(text)}
            onSubmitEditing={handleEnter}>
            </TextInput>

            <TouchableOpacity>
                <Text backgroundColor="111111">Search</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SearchBar;