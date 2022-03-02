import React, { Component } from "react";
import { WebView } from "react-native-webview";

export default AdoptATrailFormScreen = () => {
  return (
    <WebView
      source={{
        uri: "https://www.jotform.com/FreshwaterLT/adopt-a-trail-interest-form",
      }}
    />
  );
};
