import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const EventsPreview = ({ results }) => {
  return (
    <View style={style.container}>
      <Image style={style.imageStyle} source={{ uri: results.image }} />

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginRight: 15,
        }}
      >
        <Text style={style.dateStyle}>{results.date}</Text>
        <Text style={style.timeStyle}>{results.time}</Text>
      </View>
      <Text style={style.titleStyle}>{results.title}</Text>
      <Text style={style.locationStyle}>{results.location}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  imageStyle: {
    width: 260,
    height: 160,
    borderRadius: 4,
    marginBottom: 5,
  },
  dateStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  timeStyle: {
    fontSize: 13,
    fontWeight: "bold",
  },
  titleStyle: {
    fontSize: 20,
  },
  locationStyle: {
    fontWeight: "bold",
  },
});
export default EventsPreview;
