import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import WorkoutTrackerScreen from '../screens/WorkoutTrackerScreen';
import WorkoutLogScreen from '../screens/WorkoutLogScreen';
import NearbyGymsScreen from '../screens/NearbyGymsScreen';
import SettingsScreen from '../screens/SettingsScreen'; // Import the SettingsScreen component

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'WorkoutTracker') {
          iconName = 'barbell';
        } else if (route.name === 'WorkoutLog') {
          iconName = 'document-text';
        } else if (route.name === 'NearbyGyms') {
          iconName = 'map';
        } else if (route.name === 'Settings') {
          iconName = 'settings';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
    <Tab.Screen name="WorkoutTracker" component={WorkoutTrackerScreen} options={{ title: 'Tracker' }} />
    <Tab.Screen name="WorkoutLog" component={WorkoutLogScreen} options={{ title: 'Log' }} />
    <Tab.Screen name="NearbyGyms" component={NearbyGymsScreen} options={{ title: 'Gyms' }} />
    <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
  </Tab.Navigator>
);

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <AuthNavigator />
  </NavigationContainer>
);

export default AppNavigator;
