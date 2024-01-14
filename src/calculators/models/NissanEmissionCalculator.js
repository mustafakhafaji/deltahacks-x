// Returns Co2 emissions in kilograms.
export default function calculateCarbonFootprint(model, distance) {
    switch(model) {
        case Altima:
            return (distance * 1)/1000;
        case Rogue:
            return (distance * 1)/1000;
        case Maxima:
            return (distance * 1)/1000;
        case Pathfinder:
            return (distance * 1)/1000;
        case Leaf:
            return (distance * 1)/1000;
    }
}