// Returns Co2 emissions in kilograms.
export default function calculateCarbonFootprint(model, distance) {
    switch(model) {
        case Accord:
            return (distance * 1)/1000;
        case Civic:
            return (distance * 1)/1000;
        case CRV:
            return (distance * 1)/1000;
        case Pilot:
            return (distance * 1)/1000;
        case Odyssey:
            return (distance * 1)/1000;
    }
}