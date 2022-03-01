import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import EventsPreview from "./EventsPreview";

const EventList = ({ results }) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={(results) => results.id}
      />
      renderItem=
      {({ item }) => {
        return <EventsPreview results={item} />;
      }}
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EventList;