import React from 'react';
import { View, Text, FlatList, SafeAreaView, Platform } from 'react-native';
import { globalStyles } from '../styles';
import TodoItem from '../components/TodoItem';

const Completed = ({ todos, setTodos, navigation }) => {
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

    const completedTodos = todos.filter(todo => todo.completed);

    const renderTodoItem = ({ item }) => (
        <TodoItem item={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} goToDetails={goToDetails} />
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ paddingTop: 20, alignItems: 'center' }}>
                <Text style={globalStyles.header}>COMPLETED TODOS</Text>
            </View>

            <FlatList
                style={{ width: '90%', flex: 1 }}
                data={completedTodos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderTodoItem}
                ListEmptyComponent={
                    <Text style={globalStyles.noTodosText}>
                        No completed todos to display.
                    </Text>
                }
            />
        </SafeAreaView>
    );
};

export default Completed;
