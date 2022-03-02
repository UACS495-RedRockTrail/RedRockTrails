import react from "react";
import { StyleSheet, View, Text } from "react-native";
import { StyleSheet, View, Text, Button } from "react-native";
import { React, useState } from "react";

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: "rgba(0,200,0,0.1)", flex: 1 }}>
      <View style={style.container}>
        <Text>Profile Screen</Text>
      </View>
    <View>
      <Text>Profile Screen</Text>
      <Button
        onPress={() => navigation.navigate("Login")}
        title="Login"
        color="green"
      />
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
});

export default ProfileScreen;

