// Returns Co2 emissions in kilograms.
export default function calculateMakesCarbonFootprint(make, distance) {
    switch(make) {
        case "Toyota":
            return (distance * 1)/1000;
        case "Volkswagen":
            return (distance * 1)/1000;
        case "Ford":
            return (distance * 1)/1000;
        case "Chevrolet":
            return (distance * 1)/1000;
        case "Honda":
            return (distance * 1)/1000;
        case "Nissan":
            return (distance * 1)/1000;
        case "BMW":
            return (distance * 1)/1000;
        case "Toyota":
            return (distance * 1)/1000;
        case "MercedesBenz":
            return (distance * 1)/1000;
        case "Audi":
            return (distance * 1)/1000;
        case "Hyundai":
            return (distance * 1)/1000;
    }
}