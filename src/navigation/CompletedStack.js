import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Completed from '../screens/Completed';
import TodoDetails from '../screens/TodoDetails';

const Stack = createNativeStackNavigator();

const CompletedStack = ({ todos, setTodos }) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: Platform.OS === 'ios' }}>
            <Stack.Screen name="Completed" options={{ title: 'Completed' }}>
                {(props) => <Completed {...props} todos={todos} setTodos={setTodos} />}
            </Stack.Screen>
            <Stack.Screen name="TodoDetails" component={TodoDetails} options={{ title: 'Todo Details' }} />
        </Stack.Navigator>
    );
};

export default CompletedStack;
