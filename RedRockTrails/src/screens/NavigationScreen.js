 import react from "react";
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Text } from "react-native";


const NavigationScreen = () => {
  return (
    <View style={{ backgroundColor: "rgba(0,200,0,0.1)", flex: 1 }}>
      <View style={style.container}>
      <WebView
        source={{
          uri: "https://www.google.com/maps/d/embed?mid=1FDyfj-hKq_DN-VN6w3YuV9lImjw&ehbc=2E312F",
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

export default NavigationScreen;
