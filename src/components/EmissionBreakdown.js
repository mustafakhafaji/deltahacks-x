import { PieChart } from "react-native-chart-kit";
import { Dimensions, Text } from "react-native";

function EmissionBreakdown() {
    const chartConfig = {
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    const screenWidth = Dimensions.get('screen').width
    data =[  
        {name: "Walking",
        Kms: 15,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Car",
        Kms: 20,
        color: "#21F321",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Walking",
        Kms: 25,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Cycling",
        Kms: 30,
        color: "#00ffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Transit",
        Kms: 250,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      }
    ]
    
    return (
        <>
        <Text style={{alignSelf:'center'}}>Distance Travelled:</Text>
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

export default EmissionBreakdown;