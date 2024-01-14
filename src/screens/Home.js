import { View, Text, TouchableOpacity } from "react-native";


function Home ({ navigation }) {

  return (
    <View style={{backgroundColor: "#014421", flex: 1, alignItems: "center", justifyContent:"center"}}>
       <Text style={{textAlign: 'center',color: 'white', fontWeight: 'bold', fontSize: '40px', paddingBottom: 40}}>
        Smoggle Maps
        </Text>
       <TouchableOpacity style={{backgroundColor: '#BCB88A',paddingHorizontal:40, paddingVertical: 20,marginTop: 16, borderRadius: 4}} onPress={() => navigation.navigate('Log')}>
                <Text style={{textAlign: 'center',color: 'white', fontWeight: 'bold', fontSize: '15px'}}>Enter</Text>
        </TouchableOpacity>

    </View>
  );
}

export default Home;