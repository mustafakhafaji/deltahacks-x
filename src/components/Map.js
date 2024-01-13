import React, { useState } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../secrets.js"
import { 
    View,
    StyleSheet
} from "react-native";

export default function Map() {

    return (
        <View style={styles.body}>

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center'
    }
})