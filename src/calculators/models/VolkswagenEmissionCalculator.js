// Returns Co2 emissions in kilograms.
export default function calculateCarbonFootprint(model, distance) {
    switch(model) {
        case "Golf":
            return (distance * 1)/1000;
        case "Passat":
            return (distance * 1)/1000;
        case "Tiguan":
            return (distance * 1)/1000;
        case "Atlas":
            return (distance * 1)/1000;
        case "ID4":
            return (distance * 1)/1000;
    }
}