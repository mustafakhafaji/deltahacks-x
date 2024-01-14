import { PieChart } from "react-native-chart-kit";
import { Dimensions, Text } from "react-native";
import GraphTitle from "./GraphTitle";

function EmissionBreakdownGraph() {
    const chartConfig = {
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    const screenWidth = Dimensions.get('screen').width
    data =[  
      {
        name: "Car",
        Kms: 12,
        color: "#21F321",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Walking",
        Kms: 1,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Cycling",
        Kms: 1,
        color: "#00ffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Transit",
        Kms: 15,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      }
    ]
    
    return (
        <>
        <GraphTitle titleText={'Emissions in January:'} />
        <PieChart 
            data={data}
            width={screenWidth}
            height={200}
            accessor="Kms"
            backgroundColor="transparent"
            center={[10, 20]}
            chartConfig={chartConfig}
        />
        </>
    )
}

export default EmissionBreakdownGraph;