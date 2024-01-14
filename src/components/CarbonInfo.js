import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import calculateModesCarbonFootprint from "../calculators/ModesEmissionCalculator"
import calculateMakesCarbonFootPrint from "../calculators/MakesEmissionCalculator"

import calculateAudiCarbonFootPrint from "../calculators/models/AudiEmissionCalculator"
import calculateBMWCarbonFootPrint from "../calculators/models/BMWEmissionCalculator"
import calculateChevroletCarbonFootPrint from "../calculators/models/ChevroletEmissionCalculator"
import calculateHondaCarbonFootPrint from "../calculators/models/HondaEmissionCalculator"
import calculateHyundaiCarbonFootPrint from "../calculators/models/HyundaiEmissionCalculator"
import calculateMercedezBenzCarbonFootPrint from "../calculators/models/MercedezBenzEmissionCalculator"
import calculateNissanCarbonFootPrint from "../calculators/models/NissanEmissionCalculator"
import calculateToyotaCarbonFootPrint from "../calculators/models/ToyotaEmissionCalculator"
import calculateVolkswagenCarbonFootPrint from "../calculators/models/VolkswagenEmissionCalculator"

// @param depth: Depth 0-> modes, 1-> makes, 2-> models
// @param title: Either vehicle/make/model
// @param distance: KM travelled
export default function CarbonInfo({ depth, title, distance }) {
    console.log(depth, title, distance);
    let carbon = 0;
    switch(depth) {
        case 0:
            carbon = calculateModesCarbonFootprint(title, distance);
            break;
        case 1:
            carbon = calculateMakesCarbonFootPrint(title, distance);
            break;
        case 2:
            switch(title) {
                case "Audi":
                    carbon = calculateAudiCarbonFootPrint(title, distance);
                    break;
                case "BMW":
                    carbon = calculateBMWCarbonFootPrint(title, distance);
                    break;
                case "Chevrolet":
                    carbon = calculateChevroletCarbonFootPrint(title, distance);
                    break;
                case "Honda":
                    carbon = calculateHondaCarbonFootPrint(title, distance);
                    break;
                case "Hyundai":
                    carbon = calculateHyundaiCarbonFootPrint(title, distance);
                    break;
                case "MercedezBenz":
                    carbon = calculateMercedezBenzCarbonFootPrint(title, distance);
                    break;
            }
        break;
    }
    return (<View style={styles.outerView}>
        <View style={styles.innerView}>
            <Text>{title}</Text>
            <Text>{carbon.toFixed(2)}Kg of Co2</Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    outerView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#b5b5b5',
      width: '80%',
      height: '20%'
    },
    innerView: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#e3e3e3',
    },
  });