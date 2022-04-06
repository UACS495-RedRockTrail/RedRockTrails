import react from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { React, useState } from "react";

const testPerson = {
  fName: "John",
  lName: "John",
  username: "hikingguy882",
  email: "JohnJohn@gmail.com",
};


const SettingsScreen = ({ navigation }) => {
  return (
    <View style={style.screenView}>
      <View style={style.container}>
        <Text> settings screen </Text>
        <Text> This is a work in progress </Text>
        <Button
          onPress={() => navigation.navigate("Login")}
          title="Login"
          color="green"
        />
        <Button
          onPress={() => navigation.navigate("CreateAccount")}
          title="Create"
          color="green"
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  screenView:{
    backgroundColor: "white", 
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    position: "absolute",
    height: "84.5%",
    width: "100%",
  },
});

export default SettingsScreen;