import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrailsScreen from "./src/screens/TrailsScreen.js";
import NavigationScreen from "./src/screens/NavigationScreen.js";
import NewsScreen from "./src/screens/NewsScreen.js";
import ProfileScreen from "./src/screens/ProfileScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function RRTTabs() {
  return (
    <Tab.Navigator
      initialRouteName={TrailsScreen}
      screenOptions={{
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
        component={TrailsScreen}
        options={{
          tabBarLabel: "Trails",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="running" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Navigation"
        component={NavigationScreen}
        options={{
          tabBarLabel: "Navigation",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="navigate" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
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
