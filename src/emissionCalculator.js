// Returns Co2 emissions in kilograms.
function calculateCarbonFootprint(transportType, distance) {
    switch(transportType) {
        case gasCar:
            return (distance * 170)/1000;
        case electricCar:
            return (distance * 47)/1000;
        case bus:
            return (distance * 79)/1000;
        case walk:
            return (distance * 39)/1000;
        case cycle:
            return (distance* 39)/1000;
    }
}