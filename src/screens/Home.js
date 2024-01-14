

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import SmoggleLogo from "../../img/deltahacks-logo.png";
import Leaf from "../../img/white-leaf.png";

function Home({ navigation }) {
  const factBank = [
    "Walking is emission-free and promotes a healthy lifestyle.",
    "Electric vehicles emit fewer greenhouse gases than traditional cars.",
    "Public transportation reduces traffic congestion and carbon emissions.",
    "Carpooling minimizes traffic and individual carbon footprints.",
    "Bicycling is a zero-emission, sustainable transportation choice.",
    "High-speed rail systems provide energy-efficient travel for short to medium distances.",
    "Green infrastructure encourages eco-friendly modes of transportation.",
    "Electric and hybrid buses contribute to cleaner urban air quality.",
    "Efficient urban planning reduces the need for long-distance commuting.",
    "Renewable energy sources power transportation, mitigating fossil fuel impact.",
    "E-scooters offer a convenient, emission-free alternative for short-distance travel.",
    "Car-sharing services reduce the overall number of vehicles on the road, lowering emissions.",
    "Smart traffic management systems optimize flow, reducing fuel consumption and emissions.",
    "Well-designed pedestrian zones enhance urban air quality and promote walkability.",
    "Biofuels, derived from organic materials, provide a more sustainable alternative for certain vehicles.",
    "Telecommuting and remote work options reduce the need for daily commuting, cutting emissions.",
    "Adaptive cruise control and other vehicle technologies improve fuel efficiency and decrease pollution.",
    "Green roofs on transportation hubs contribute to urban biodiversity and air purification.",
    "Water-based transportation, like ferries, can be energy-efficient and environmentally friendly.",
    "Investment in research for sustainable aviation fuels addresses environmental concerns in air travel.",
    "im a pig, oink oink",
    "i am so tired"
  ];

  const [randomFact, setRandomFact] = useState(
    factBank[Math.floor(Math.random() * factBank.length)]
  );

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * factBank.length);
    setRandomFact(factBank[randomIndex]);
  };

  return (
    <View
      style={{
        backgroundColor: "#2f422e",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#283928",
          padding: 35,
          position: "absolute",
          top: 100,
          color: "white",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          borderColor: '#161e15',
          borderWidth: 1
        }}
        onPress={getRandomFact}
      >
        <Text style={{ color: "white", fontSize: 18, textAlign: 'center', fontWeight:'bold'}}>{randomFact}</Text>
      </TouchableOpacity>

      <Image
        source={SmoggleLogo}
        style={{ width: 150, height: 150, marginBottom: 20 }}
        resizeMode="contain"
      />
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: 40,
          paddingBottom: 40
        }}
      >
        Smoggle Maps
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#224d0d",
          paddingHorizontal: 100,
          paddingVertical: 20,
          position: "absolute",
          bottom: 50,
          borderRadius: 18
        }}
        onPress={() => navigation.navigate('Log')}
      >
        <Image
          source={Leaf}
          style={{ width: 100, height: 100, marginBottom: 20 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

export default Home;