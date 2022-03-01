import React, { Component } from "react";
import { WebView } from "react-native-webview";

export default NewsletterSignupScreen = () => {
  return (
    <WebView
      source={{
        uri: "https://us1.list-manage.com/subscribe?u=370adb6fd71b0a7f4dab3faec&id=ad090063af",
      }}
    />
  );
};
