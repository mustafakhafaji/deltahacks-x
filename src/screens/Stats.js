import DistanceTravelledGraph from "../components/DistanceTravelledGraph";
import EmissionBreakdownGraph from "../components/EmissionBreakdownGraph";
import EmissionsUsedGraph from "../components/EmissionsUsedGraph";
import {ScrollView, View, StyleSheet, Text} from 'react-native'

function Stats() {
    return (
        <View>
        <ScrollView contentContainerStyle={{flexGrow:1, rowGap: 20, paddingBottom:30}} >
            <Text style={styles.title}>Emissions Statistics:</Text>
            <EmissionsUsedGraph graphData={[80,85, 65, 50]} graphLabels={['October','November','December', 'January']}/>
            <DistanceTravelledGraph />
            <EmissionBreakdownGraph />
        </ScrollView>
        </View>
    )
}

styles = StyleSheet.create({ 
    title: {
        fontSize: 32, 
        paddingBottom: 30,
        paddingTop: 25,
        alignSelf: 'center'},
    container: {
        flexGrow: 1,
        rowGap: 20
    }
    })

export default Stats;