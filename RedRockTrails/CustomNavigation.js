import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewsletterSignupScreen from "./src/screens/NewsletterSignupScreen";
import EngageScreen from "./src/screens/EngageScreen";
import NavigationScreen from "./src/screens/NavigationScreen";
import TrailsScreen from "./src/screens/TrailsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import DonateScreen from "./src/screens/DonateScreen";

const stack = createStackNavigator();

const TrailScreenNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="TrailS" component={TrailsScreen} />
    </stack.Navigator>
  );
};
export { TrailScreenNavigator };

const NavigationScreenNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Navigation" component={NavigationScreen} />
    </stack.Navigator>
  );
};
export { NavigationScreenNavigator };

const EngageScreenNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Engage" component={EngageScreen} />
      <stack.Screen
        name="NewsletterSignup"
        component={NewsletterSignupScreen}
      />
      <stack.Screen name="DonateScreen" component={DonateScreen} />
    </stack.Navigator>
  );
};
export { EngageScreenNavigator };

const ProfileScreenNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Profile" component={ProfileScreen} />
    </stack.Navigator>
  );
};
export { ProfileScreenNavigator };
