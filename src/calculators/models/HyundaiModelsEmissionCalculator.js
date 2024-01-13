// Returns Co2 emissions in kilograms.
function calculateCarbonFootprint(model, distance) {
    switch(model) {
        case Sonata:
            return (distance * 1)/1000;
        case Tucson:
            return (distance * 1)/1000;
        case SantaFe:
            return (distance * 1)/1000;
        case Elantra:
            return (distance * 1)/1000;
        case Kona:
            return (distance * 1)/1000;
    }
}