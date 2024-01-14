// Returns Co2 emissions in kilograms.
export default function calculateCarbonFootprint(model, distance) {
    switch(model) {
        case CClass:
            return (distance * 1)/1000;
        case EClass:
            return (distance * 1)/1000;
        case GLE:
            return (distance * 1)/1000;
        case SClass:
            return (distance * 1)/1000;
        case GLC:
            return (distance * 1)/1000;
    }
}