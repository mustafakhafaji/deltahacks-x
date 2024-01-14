import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CarbonInfo from "./CarbonInfo";

// current_depth = 0 => modes
// current_depth = 1 => makes
// current_depth = 2 => models

const data = {
    "gasCar": {
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
    "electricCar" : {},
    "bus" : {},
    "walking" : {},
    "cycling" : {},
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

    function handleSelectMake(make) {

    }

    function handleSelectModel(model) {

    }

    

    return (<View>

        <View style={styles.top_bar}>
            <TouchableOpacity>
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.close}>Close</Text>
            </TouchableOpacity>
        </View>

        <ScrollView style={styles.scroll}>
        {data_rendering.map((item) => (
            <CarbonInfo depth={current_depth} title={item} distance={distance}></CarbonInfo>
         ))}
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '70%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },

    scroll: {
        flex: 1,
        paddingTop: 5, // Set the desired marginTop distance
    },

    top_bar: {
        flexDirection: 'row', // Horizontal direction
        justifyContent: 'space-between', // Distribute items along the row
    },

    back: {
        paddingLeft: 9,
        paddingTop: 9,
        fontSize: 16
    },

    close: {
        paddingRight: 9,
        paddingTop: 9,
        fontSize: 16   
    }
})