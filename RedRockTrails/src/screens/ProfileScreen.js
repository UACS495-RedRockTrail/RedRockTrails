import react from "react";
import { StyleSheet, View, Text } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={{ backgroundColor: "rgba(0,200,0,0.1)", flex: 1 }}>
      <View style={style.container}>
        <Text>Profile Screen</Text>
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
});

export default ProfileScreen;
