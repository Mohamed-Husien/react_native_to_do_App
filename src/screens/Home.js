
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, SafeAreaView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../styles';
import TodoItem from '../components/TodoItem';

let nextId = Date.now();

const Home = ({ todos, setTodos, navigation }) => {
    // ------------------------States-----------------------
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [filter, setFilter] = useState('all');

    // -----------------------------Handlers------------------------------

    const handleSubmit = () => {
        if (!title.trim()) {
            Alert.alert("Error", "Todo title is required.");
            return;
        }

        const newTodo = {
            id: nextId++,
            title: title.trim(),
            description: description.trim(),
            completed: false,
        };

        setTodos(prevTodos => [newTodo, ...prevTodos]);
        setTitle('');
        setDescription('');
    };

    // Function to toggle the completion status
    const toggleTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Function to delete a todo
    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    // Function to navigate to details
    const goToDetails = (item) => {
        navigation.navigate('TodoDetails', { todo: item });
    };

    const getFilteredTodos = () => {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            case 'all':
            default:
                return todos;
        }
    };

    const displayedTodos = getFilteredTodos();

    const renderTodoItem = ({ item }) => (
        <TodoItem item={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} goToDetails={goToDetails} />
    );


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ paddingTop: 20, alignItems: 'center' }}>
                <Text style={globalStyles.header}>TODO APP</Text>
            </View>

            <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                <TextInput
                    style={globalStyles.input}
                    placeholder="Todo Title (Required)"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={globalStyles.input}
                    placeholder="Todo Description (Optional)"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />

                <TouchableOpacity style={globalStyles.submitButton} onPress={handleSubmit}>
                    <Text style={globalStyles.submitButtonText}>Add Todo</Text>
                </TouchableOpacity>

                <View style={globalStyles.dividerLine} />

                <View style={globalStyles.filterContainer}>
                    {['all', 'active', 'completed'].map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[
                                globalStyles.filterTab,
                                filter === tab && globalStyles.activeFilterTab,
                            ]}
                            onPress={() => setFilter(tab)}
                        >
                            <Text
                                style={[
                                    globalStyles.filterTabText,
                                    filter === tab && globalStyles.activeFilterTabText,
                                ]}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <FlatList
                style={{ width: '90%', flex: 1 }}
                data={displayedTodos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderTodoItem}
                ListEmptyComponent={
                    <Text style={globalStyles.noTodosText}>
                        No {filter} todos to display.
                    </Text>
                }
            />
        </SafeAreaView>
    );
};

export default Home;