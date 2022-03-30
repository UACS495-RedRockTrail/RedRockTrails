import { StyleSheet, View, Text, Button, Image } from "react-native";
import { React, useState } from "react";
import EventsList from "../reusables/EventList";
import RRTApi from "../api/RRTApi";
import VolunteerPreview from "../reusables/VolunteerPreview";

const results = [
  {
    id: "Asdjlvnaljbvaadgadga",
    image:
      "https://danvillesanramon.com/news/photos/2021/april/8/21628_col.jpg",
    date: "February 5, 2022",
    title: "Take a Hike",
    location: "Rotary Trail",
    time: "12 pm - 2 pm",
  },
  {
    id: "Aads;jhasdbgad",
    image:
      "https://bloximages.chicago2.vip.townnews.com/qctimes.com/content/tncms/assets/v3/editorial/1/12/112c8b56-8c09-5282-b517-6f6753c89e29/5ffdc4b472d1d.image.png?resize=1200%2C675",
    date: "March 20, 2022",
    title: "Girl Scout Cookie",
    location: "Five Mile Creek Greenway",
    time: "10 am - 12 pm",
  },
  {
    id: "qiquhbehfugfasd",
    image:
      "https://sneakernews.com/wp-content/uploads/2022/02/Nike-Air-Presto-Hike-Nike-Man-0-jpg.jpg",
    date: "April 24, 2022",
    title: "Hike with Nike",
    location: "Enon Ridge Trail",
    time: "8 am - 11 am",
  },
];

const EngageScreen = (props) => {
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
                onPress={() => props.navigation.navigate("VolunteerDetails")}
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
