import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CarbonInfo from "./CarbonInfo";

// current_depth = 0 => modes
// current_depth = 1 => makes
// current_depth = 2 => models

const data = {
    "Gasoline Car": {
        makes: {
            "Audi": ["A4", "A6", "CRV", "Q5", "A3"],
            "BMW": ["Series3", "Series5", "X3", "X5", "Series7"],
            "Chevrolet": ["Silverado", "Equinox", "Malibu", "Traverse", "Camaro"],
            "Honda": ["Accord", "Civic", "CRV", "Pilot", "Odyssey"],
            "Hyundai": ["Sonata", "Tucson", "SantaFe", "Elantra", "Kona"],
            "MercedezBenz": ["CClass", "EClass", "GLE", "SClass", "GLC"],
            "Nissan": ["Altima", "Rogue", "Maxima", "Pathfinder", "Leaf"],
            "Toyota": ["Camry", "Corolla", "RAV4", "Highlander", "Prius"],
            "Volkswagen": ["Golf", "Passat", "Tiguan", "Atlas", "ID4"],
        }
    },
    "Electric Car" : {},
    "Bus" : {},
    "Walking" : {},
    "Cycling" : {},
}

export default function InfoMenu({ setMenuActive, distance }) {
    const [current_depth, setCurrentDepth] = useState(0);
    const [current_make, setCurrentMake] = useState('');
    const [current_model, setCurrentModel] = useState('');

    const [data_rendering, setDataRendering] = useState(Object.keys(data));

    // initial menu is modes -> makes -> models
    // back button

    function handleBackButton() {
        // Don't render button if depth is 0
        // Render button if depth > 1
        // Sets menu back one level

        setCurrentDepth(current_depth - 1);

        // Reset state data.
        switch (current_depth) {
            case 0:
                setCurrentMake('');
            case 1:
                setCurrentModel('');
                // Set data rendering
        }
    }

    function handleSelectMenu(item) {
        //setDataRendering(Object.keys(data[item]));
        //current_depth++;
    }

    return (
    <View style={styles.background}>
        <View style={styles.top_bar}>
            <TouchableOpacity>
                <Text style={styles.text_btn}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setMenuActive(false)}}>
                <Text style={styles.text_btn}>Close</Text>
            </TouchableOpacity>
        </View>

        <ScrollView style={styles.scroll}>
            
            {data_rendering.map((item) => (
                <TouchableOpacity onPress={() => {handleSelectMenu(item)}}>
            <CarbonInfo depth={current_depth} title={item} distance={distance} key={item}></CarbonInfo>
            </TouchableOpacity>
         ))}
            
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
        backgroundColor: '#2f422e',
        alignItems: 'center',
        justifyContent: 'center'
    },

    scroll: {
        width: '100%',
        backgroundColor: '#2f422e',
        paddingTop: 5, // Set the desired marginTop distance
    },

    top_bar: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: '#224d0d'
    },

    text_btn: {
        fontWeight: 'bold',
        color: '#9fd2ac',
        fontSize: 16,
        padding: 12,
    },
})