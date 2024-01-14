import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import GraphTitle from "./GraphTitle";

function DistanceTravelledGraph({graphLabels, graphData, }) {
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
      <>
      <GraphTitle titleText={"Carbon Emissions Per Month:"} />
        <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            bgColor={"transparent"}
            fromZero={true}
            formatYLabel={(y) => y + " kg" }
            />
            </>
    )
}

export default DistanceTravelledGraph;