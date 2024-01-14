// Returns Co2 emissions in kilograms.
export default function calculateBMWCarbonFootprint(model, distance) {
    switch(model) {
        case Series3:
            return (distance * 1)/1000;
        case Series5:
            return (distance * 1)/1000;
        case X3:
            return (distance * 1)/1000;
        case X5:
            return (distance * 1)/1000;
        case Series7:
            return (distance * 1)/1000;
    }
}