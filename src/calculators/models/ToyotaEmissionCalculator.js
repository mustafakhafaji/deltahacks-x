// Returns Co2 emissions in kilograms.
export default function calculateCarbonFootprint(model, distance) {
    switch(model) {
        case Camry:
            return (distance * 1)/1000;
        case Corolla:
            return (distance * 1)/1000;
        case RAV4:
            return (distance * 1)/1000;
        case Highlander:
            return (distance * 1)/1000;
        case Prius:
            return (distance * 1)/1000;
    }
}