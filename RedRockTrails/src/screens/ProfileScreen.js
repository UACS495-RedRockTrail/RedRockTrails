import { StyleSheet, View, Text, Button } from "react-native";
import { React, useState } from "react";

const ProfileScreen = ({navigation}) => {
  return (
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

const style = StyleSheet.create({});

export default ProfileScreen;

