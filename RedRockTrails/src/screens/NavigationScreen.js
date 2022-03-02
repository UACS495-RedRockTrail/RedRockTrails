import react from "react";
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Text } from "react-native";


const NavigationScreen = () => {
  return (
    <WebView
      source={{
        uri: "https://www.google.com/maps/d/embed?mid=1FDyfj-hKq_DN-VN6w3YuV9lImjw&ehbc=2E312F",
      }}
    />
  );
};

 export default NavigationScreen;
