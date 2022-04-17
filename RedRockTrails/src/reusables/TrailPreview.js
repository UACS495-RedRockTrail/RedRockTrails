import react from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";

const TrailPreview = (props) => {

  const handlePress = () => {
    props.nav.navigate("TrailDetails", {info: props.info});
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: "https://imgs.6sqft.com/wp-content/uploads/2017/01/10140523/hiking-trail.jpg" }} style={styles.image} />
      </View>
      <View style={styles.previewContainer}>
        <Text style={styles.previewTitle}>{props.info.Name}</Text>
        <Text style={styles.previewText}>{props.info.Corridor}</Text>
        <Text style={styles.previewText}>
          Length: {props.info.Length} {"\u25CF"} {props.info.Rating}
        </Text>
        {/* <Text style={styles.previewText}>Rating: {props.info.rating}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

// ---- ISSUSE ----
// 1. The height of the component is hard set to 200.
// Reason for this is because the scrollview does
//    not operate correctly with a child component that has
//    a dynamic height value (height: '30%').
// Will need to find a fix later in the future

// 2. Switch from scroll view to flatlist
// Will only render children if needed. Not all at once
// Should improve performance

// Look into Axios, try using a Mock API

const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: "column",
    marginHorizontal: 15,
    marginTop: 20,

    borderRadius: 10,
    backgroundColor: "#B9A394",

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
  image: {
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  previewContainer: {
    flex: 0.8,
    justifyContent: "center",

    marginRight: 5,
    paddingLeft: 10,

    borderRadius: 10,
  },
  previewTitle: {
    color: "#FFF",
    fontSize: 20,
    color: "#432534",
    fontFamily: "Helvetica-Bold",
  },
  previewText: {
    paddingTop: 5,
    color: "black",

    fontFamily: "Helvetica",
    fontSize: 15,
  },
});

export default TrailPreview;

// TODO:
// - Change Color scheme of component
// - Make previewText Style more clean
