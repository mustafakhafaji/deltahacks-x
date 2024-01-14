import { calculateModesCarbonFootprint } from "../calculators/ModesEmissionCalculator"
import { calculateMakesCarbonFootPrint } from "../calculators/MakesEmissionCalculator"

import { calculateAudiCarbonFootPrint } from "../calculators/models/AudiEmissionCalculator"
import { calculateBMWCarbonFootPrint } from "../calculators/models/BMWEmissionCalculator"
import { calculateChevroletCarbonFootPrint } from "../calculators/models/ChevroletEmissionCalculator"
import { calculateHondaCarbonFootPrint } from "../calculators/models/HondaEmissionCalculator"
import { calculateHyundaiCarbonFootPrint } from "../calculators/models/HyundaiEmissionCalculator"
import { calculateMercedezBenzCarbonFootPrint } from "../calculators/models/MercedezBenzEmissionCalculator"
import { calculateNissanCarbonFootPrint } from "../calculators/models/NissanEmissionCalculator"
import { calculateToyotaCarbonFootPrint } from "../calculators/models/ToyotaEmissionCalculator"
import { calculateVolkswagenCarbonFootPrint } from "../calculators/models/VolkswagenEmissionCalculator"

// @param depth: Depth 0-> modes, 1-> makes, 2-> models
// @param title: Either vehicle/make/model
// @param distance: KM travelled
export default function Info({ depth, title, distance }) {
    switch(depth) {
        case 0:
            calculateModesCarbonFootprint(title, distance);
        case 1:
            calculateMakesCarbonFootprint(title, distance);
        case 2:
            switch(title) {
                case "Audi":
                    calculateAudiCarbonFootPrint(title, distance)
                
                case "BMW":
                    calculateBMWCarbonFootPrint(title, distance)
            }
    }
}