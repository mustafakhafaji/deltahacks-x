// Returns Co2 emissions in kilograms.

// Emissions are equal to
// grams per km
// divided by average number of people occupying

export default function calculateModesCarbonFootprint(transportType, distance) {
    switch(transportType) {
        case "Gasoline Car":
            return (distance * 170)/1000;
        case "Electric Car":
            return (distance * 47)/1000;
        case "Bus":
            return (distance * 79)/1000 / 9.6;
        case "Walking":
            return (distance * 39)/1000;
        case "Cycling":
            return (distance*  39)/1000;
    }

    // Add trian.
    // Add tram.
}