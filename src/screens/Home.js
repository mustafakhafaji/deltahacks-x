import { View, Text, TouchableOpacity } from "react-native";


//nav prop gets passed in the navigate function to go to specfied route (map/log travel screen)
function Home ({ navigation }) {

  return (
    <View style={{backgroundColor: "#014421", flex: 1, alignItems: "center", justifyContent:"center"}}>
       <Text style={{textAlign: 'center',color: 'white', fontWeight: 'bold', fontSize: 40, paddingBottom: 40}}>
        Smoggle Maps
        </Text>

       <TouchableOpacity style={{backgroundColor: '#BCB88A',paddingHorizontal:40, paddingVertical: 20,marginTop: 16, borderRadius: 4}} onPress={() => navigation.navigate('Log')}> 
                <Text style={{textAlign: 'center',color: 'white', fontWeight: 'bold', fontSize: 15}}>Enter</Text> 
        </TouchableOpacity>

    </View>
  );
}

export default Home;