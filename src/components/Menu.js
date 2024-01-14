import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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

export default function Menu() {
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

    </View>)
}