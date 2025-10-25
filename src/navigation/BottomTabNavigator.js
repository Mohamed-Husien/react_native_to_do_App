import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import CompletedStack from './CompletedStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Completed') {
                        iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" options={{ headerShown: false }}>
                {(props) => <HomeStack {...props} />}
            </Tab.Screen>
            <Tab.Screen name="Completed" options={{ headerShown: false }}>
                {(props) => <CompletedStack {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
