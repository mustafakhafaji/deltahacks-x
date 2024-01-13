import { View, TextInput } from "react-native";
import React, { useState } from "react";

function SearchBar() {
    const [text, update_text] = useState('');

    const handle_text_update = (text) => {
        console.log(text);
    }

    // Update text

    return (
        <View>
            <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => handle_text_update(text)}>
            </TextInput>
        </View>
    )
}

export default SearchBar;