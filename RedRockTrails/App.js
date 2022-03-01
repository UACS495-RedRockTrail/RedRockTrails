import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TrailScreenNavigator,
  NavigationScreenNavigator,
  EngageScreenNavigator,
  ProfileScreenNavigator,
} from "./CustomNavigation.js";

const Tab = createBottomTabNavigator();

function RRTTabs() {
  return (
    <Tab.Navigator
      initialRouteName={TrailScreenNavigator}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          bottom: "4%",
          left: "5%",
          right: "5%",
          elevation: 0,
          backgroundColor: "palegreen",
          borderRadius: 15,
          height: "10%",
          paddingBottom: "5%",
        },
      }}
    >
      <Tab.Screen
        name="Trails"
        component={TrailScreenNavigator}
        options={{
          tabBarLabel: "Trails",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="running" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Navigation"
        component={NavigationScreenNavigator}
        options={{
          tabBarLabel: "Navigation",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="navigate" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Engage"
        component={EngageScreenNavigator}
        options={{
          tabBarLabel: "Engage",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreenNavigator}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RRTTabs />
    </NavigationContainer>
  );
}