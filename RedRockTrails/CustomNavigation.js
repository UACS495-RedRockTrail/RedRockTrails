import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsletterSignupScreen from "./src/screens/NewsletterSignupScreen";
import EngageScreen from "./src/screens/EngageScreen";
import NavigationScreen from "./src/screens/NavigationScreen";
import TrailsScreen from "./src/screens/TrailsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import DonateScreen from "./src/screens/DonateScreen";
import VolunteerDetails from "./src/screens/VolunteerDetails";
import adoptATrailFormScreen from "./src/screens/AdoptATrailFormScreen";
import LoginScreen from "./src/screens/LoginScreen";
import CreateAccountScreen from "./src/screens/CreateAccountScreen";
import CreateEventScreen from "./src/screens/CreateEventScreen";
import TrailDetails from "./src/screens/TrailDetails";
import SettingsScreen from "./src/screens/SettingsScreen";


const stack = createStackNavigator();

const TrailScreenNavigator = ({ navigation }) => {
  return (
    <stack.Navigator
      initialRouteName="TrailsScreen"
      screenOptions={{
        headerShown: true,
      }}
    >
      <stack.Screen
        name="TrailsScreen"
        component={TrailsScreen}
      />
      <stack.Screen name="TrailDetails" component={TrailDetails} />

    </stack.Navigator>
  );
};
export { TrailScreenNavigator };

const NavigationScreenNavigator = ({ navigation }) => {
  return (
    <stack.Navigator
      initialRouteName="NavigationScreen"
      screenOptions={{
        headerShown: true,
      }}
    >
      <stack.Screen
        name="NavigationScreen"
        component={NavigationScreen}
      />

    </stack.Navigator>
  );
};
export { NavigationScreenNavigator };

const EngageScreenNavigator = ({ navigation }) => {
  return (
    <stack.Navigator
      initialRouteName="EngageScreen"
      screenOptions={{
        headerShown: true,
      }}
    >
      <stack.Screen
        name="EngageScreen"
        component={EngageScreen}
      />
      <stack.Screen
        name="NewsletterSignup"
        component={NewsletterSignupScreen}
      />
      <stack.Screen name="DonateScreen" component={DonateScreen} />
      <stack.Screen name="VolunteerDetails" component={VolunteerDetails} />
      <stack.Screen name="CreateEventScreen" component={CreateEventScreen} />
      <stack.Screen
        name="AdoptATrailFormScreen"
        component={adoptATrailFormScreen}
      />

    </stack.Navigator>
  );
};
export { EngageScreenNavigator };

const ProfileScreenNavigator = ({ navigation }) => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("Settings")}
              title="Settings"
              color="green"
            />
          ),
        }}
      />
      <stack.Screen name ="Settings" component={SettingsScreen} />
      <stack.Screen name="Login" component={LoginScreen} />
      <stack.Screen name="CreateAccount" component={CreateAccountScreen} />

    </stack.Navigator>
  );
};
export { ProfileScreenNavigator };
