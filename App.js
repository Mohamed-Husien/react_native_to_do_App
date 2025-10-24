
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from AsyncStorage on app start
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    };
    loadTodos();
  }, []);

  // Save todos to AsyncStorage 
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch (error) {
        console.error('Error saving todos:', error);
      }
    };
    saveTodos();
  }, [todos]);

  return (
    <NavigationContainer>
      <BottomTabNavigator todos={todos} setTodos={setTodos} />
    </NavigationContainer>
  );
}

