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
import CreateEvent from "./src/screens/CreateEvent";

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
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("ProfileScreen")}
              title="Profile"
              color="green"
            />
          ),
        }}
      />
      <stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <stack.Screen name="Login" component={LoginScreen} />
      <stack.Screen name="CreateAccount" component={CreateAccountScreen} />
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
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("ProfileScreen")}
              title="Profile"
              color="green"
            />
          ),
        }}
      />

      {/* Below is used for settings navigation */}
      <stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <stack.Screen name="Login" component={LoginScreen} />
      <stack.Screen name="CreateAccount" component={CreateAccountScreen} />
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
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("ProfileScreen")}
              title="Profile"
              color="green"
            />
          ),
        }}
      />
      <stack.Screen
        name="NewsletterSignup"
        component={NewsletterSignupScreen}
      />
      <stack.Screen name="DonateScreen" component={DonateScreen} />
      <stack.Screen name="VolunteerDetails" component={VolunteerDetails} />
      <stack.Screen name="CreateEvent" component={CreateEvent} />
      <stack.Screen
        name="AdoptATrailFormScreen"
        component={adoptATrailFormScreen}
      />

      {/* Below is used for settings navigation */}
      <stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <stack.Screen name="Login" component={LoginScreen} />
      <stack.Screen name="CreateAccount" component={CreateAccountScreen} />
    </stack.Navigator>
  );
};
export { EngageScreenNavigator };

//not used right now, could change if profile on bottom tab is needed
// const ProfileScreenNavigator = () => {
//   return (
//     <stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <stack.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//       />
//       <stack.Screen name="Login" component={LoginScreen} />
//       <stack.Screen name="CreateAccount" component={CreateAccountScreen} />

//     </stack.Navigator>
//   );
// };
// export { ProfileScreenNavigator };
