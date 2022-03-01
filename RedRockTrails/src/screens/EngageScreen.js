import { StyleSheet, View, Text, Button } from "react-native";
import { React, useState } from "react";
import EventsPreview from "../reusables/EventsPreview";
import EventsList from "../reusables/EventList";
import RRTApi from "../api/RRTApi";

const EngageScreen = (props) => {
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await RRTApi.get("/events.json?key=e87d1720");
    console.log(response);
    setResults(response.data);
  };

  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        height: "84%",
        width: "100%",
      }}
    >
      {() => searchApi}
      <Button title="api" color="green" onPress={() => searchApi()} />
      <Text>We have found {results.length} results</Text>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Button
          onPress={() => props.navigation.navigate("NewsletterSignup")}
          title="Newsletter signup"
          color="green"
        />

        <Button
          onPress={() => props.navigation.navigate("DonateScreen")}
          title="Donate"
          color="green"
        />
      </View>
      <View style={{}}></View>
      <View>
        <Text>Volunter</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({});

export default EngageScreen;
