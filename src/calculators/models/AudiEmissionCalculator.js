// Returns Co2 emissions in kilograms.
export default function calculateAudiCarbonFootprint(model, distance) {
    switch(model) {
        case "A4":
            return (distance * 1)/1000;
        case "A6":
            return (distance * 1)/1000;
        case "CRV":
            return (distance * 1)/1000;
        case "Q5":
            return (distance * 1)/1000;
        case "A3":
            return (distance * 1)/1000;
    }
}