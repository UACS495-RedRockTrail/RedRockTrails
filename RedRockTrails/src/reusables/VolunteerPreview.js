import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Button } from "react-native-web";

const VolunteerPreview = ({ results }) => {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          style={{
            height: 160,
            width: "100%",
            borderRadius: 7,
          }}
          source={{
            uri: "https://freshwaterlandtrust.org/core/uploads/2021/06/20190901_144841_40-1.jpg",
          }}
        />
      </View>
      <Text style={style.volunteerTitle}>
        Interested in volunteering with us?
      </Text>
      <Text style={style.description}>
        Check for upcoming public volunteer opportunities in the
      </Text>
      <Text style={style.description}>
        events above or explore other volunteer opportunities
      </Text>
      <Text style={style.description}>below.</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 230,
    flexDirection: "column",
    marginHorizontal: 10,

    borderRadius: 10,
    backgroundColor: "lightgreen",

    // Gives Component a "elevated" look
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5, // Used for Android
  },
  imageContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  volunteerTitle: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold",
    alignSelf: "center",
  },
  description: {
    alignSelf: "center",
  },
});
export default VolunteerPreview;
