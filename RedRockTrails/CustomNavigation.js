import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewsletterSignupScreen from "./src/screens/NewsletterSignupScreen";
import EngageScreen from "./src/screens/EngageScreen";
import NavigationScreen from "./src/screens/NavigationScreen";
import TrailsScreen from "./src/screens/TrailsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import DonateScreen from "./src/screens/DonateScreen";
import VolunteerDetails from "./src/screens/VolunteerDetails";
import adoptATrailFormScreen from "./src/screens/AdoptATrailFormScreen";

const stack = createStackNavigator();

const TrailScreenNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="TrailsScreen" component={TrailsScreen} />
    </stack.Navigator>
  );
};
export { TrailScreenNavigator };

const NavigationScreenNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="NavigationScreen" component={NavigationScreen} />
    </stack.Navigator>
  );
};
export { NavigationScreenNavigator };

const EngageScreenNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="EngageScreen" component={EngageScreen} />
      <stack.Screen
        name="NewsletterSignup"
        component={NewsletterSignupScreen}
      />
      <stack.Screen name="DonateScreen" component={DonateScreen} />
      <stack.Screen name="VolunteerDetails" component={VolunteerDetails} />
      <stack.Screen
        name="AdoptATrailFormScreen"
        component={adoptATrailFormScreen}
      />
    </stack.Navigator>
  );
};
export { EngageScreenNavigator };

const ProfileScreenNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </stack.Navigator>
  );
};
export { ProfileScreenNavigator };
