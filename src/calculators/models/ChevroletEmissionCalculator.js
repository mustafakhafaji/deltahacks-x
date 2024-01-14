// Returns Co2 emissions in kilograms.
export default function calculateCarbonFootprint(model, distance) {
    switch(model) {
        case "Silverado":
            return (distance * 1)/1000;
        case "Equinox":
            return (distance * 1)/1000;
        case "Malibu":
            return (distance * 1)/1000;
        case "Traverse":
            return (distance * 1)/1000;
        case "Camaro":
            return (distance * 1)/1000;
    }
}