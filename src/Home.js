// Home.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
import { globalStyles } from './styles';

let nextId = 1;

const Home = () => {
    // ------------------------States-----------------------
    const [todos, setTodos] = useState([]);
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
        <TouchableOpacity onPress={() => toggleTodo(item.id)}>
            <View style={globalStyles.todoItem}>
                <Text
                    style={[
                        globalStyles.todoTitle,
                        item.completed && { textDecorationLine: 'line-through', color: '#999' },
                    ]}
                >
                    {item.title}
                </Text>
                {item.description ? (
                    <Text style={globalStyles.todoDescription}>
                        {item.description}
                    </Text>
                ) : null}
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.header}>TODO APP</Text>

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

            {displayedTodos.length > 0 ? (
                <FlatList
                    data={displayedTodos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderTodoItem}
                />
            ) : (
                <Text style={globalStyles.noTodosText}>
                    No {filter} todos to display.
                </Text>
            )}
        </View>
    );
};

export default Home;