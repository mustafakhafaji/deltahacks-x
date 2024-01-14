// Returns Co2 emissions in kilograms.
export default function calculateModesCarbonFootprint(transportType, distance) {
    switch(transportType) {
        case "gasCar":
            return (distance * 170)/1000;
        case "electricCar":
            return (distance * 47)/1000;
        case "bus":
            return (distance * 79)/1000;
        case "walking":
            return (distance * 39)/1000;
        case "cycling":
            return (distance*  39)/1000;
    }

    // Add trian.
    // Add tram.
}