import react from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, View, Text } from "react-native";

const AdoptATrailFormScreen = () => {
  return (
    <View style={{ backgroundColor: "rgba(0,200,0,0.1)", flex: 1 }}>
      <View style={style.container}>
        <WebView
          source={{
            uri: "https://www.jotform.com/FreshwaterLT/adopt-a-trail-interest-form",
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    height: "84.5%",
    width: "100%",
  },
});

export default AdoptATrailFormScreen;
