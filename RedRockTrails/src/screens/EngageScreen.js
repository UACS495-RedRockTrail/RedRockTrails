import { StyleSheet, View, Text, Button, Image } from "react-native";
import { React, useState, useEffect } from "react";
import EventsList from "../reusables/EventList";
import RRTApi from "../api/RRTApi";
import VolunteerPreview from "../reusables/VolunteerPreview";

const EngageScreen = (props) => {
  const [results, setResults] = useState([]);

  const getEvents = async () => {
    const response = await RRTApi.get("ContentExplorer/ListExplorers");
    setResults(response.data.Explorers);
  };
  useEffect(() => {
    getEvents();
  }, []);
  getEvents();
  return (
    <View style={{ backgroundColor: "rgba(0,200,0,0.1)", flex: 1 }}>
      <View style={style.container}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginHorizontal: 10,
            marginTop: 10,
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
        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
          <View style={{ marginVertical: 10 }}>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={style.titlesStyle}> EVENTS</Text>
              <Button
                onPress={() => props.navigation.navigate("CreateEventScreen")}
                title="Create Event"
                color="green"
              />
            </View>
            <EventsList results={results} />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={style.titlesStyle}>VOLUNTER</Text>
            <VolunteerPreview />
            <Button
              onPress={() => props.navigation.navigate("VolunteerDetails")}
              title="Volunteer With Us!"
              color="green"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    position: "absolute",
    height: "84.5%",
    width: "100%",
  },
  titlesStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default EngageScreen;
