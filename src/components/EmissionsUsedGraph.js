import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

function EmissionsUsedGraph({graphLabels, graphData, }) {
    const screenWidth = Dimensions.get('screen').width
      const chartConfig = {
        backgroundGradientFrom: "#ff00ff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#0000ff",
        backgroundGradientToOpacity: 0,
        barPercentage: 0.5,
        color: (opacity = 1) => `rgba(144, 180, 148, ${opacity})`,
        strokeWidth: 2, // optional, default 3
      };
    const data = {
        labels: graphLabels,
        datasets: [
            {
              data: graphData,
            }
          ],
          legend: ["Carbon Footprint (kg)"] // optional
    }
    return (
        <LineChart
            data={data}
            width={400}
            height={220}
            chartConfig={chartConfig}
            bgColor={"transparent"}
            fromZero={true}
            formatYLabel={(y) => y + " kg" }
            />
    )
}

export default EmissionsUsedGraph;