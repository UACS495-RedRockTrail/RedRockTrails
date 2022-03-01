import React, { Component } from "react";
import { WebView } from "react-native-webview";

export default DonateScreen = () => {
  return (
    <WebView
      source={{
        uri: "https://crm.bloomerang.co/HostedDonation?ApiKey=pub_534043e6-08ef-11e7-bb7f-024e165d44b3&WidgetId=3939328",
      }}
    />
  );
};
