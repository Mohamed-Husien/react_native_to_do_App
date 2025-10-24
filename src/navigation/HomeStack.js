import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import TodoDetails from '../screens/TodoDetails';

const Stack = createNativeStackNavigator();

const HomeStack = ({ todos, setTodos }) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: Platform.OS === 'ios' }}>
            <Stack.Screen name="Home" options={{ title: 'Home' }}>
                {(props) => <Home {...props} todos={todos} setTodos={setTodos} />}
            </Stack.Screen>
            <Stack.Screen name="TodoDetails" component={TodoDetails} options={{ title: 'Todo Details' }} />
        </Stack.Navigator>
    );
};

export default HomeStack;
